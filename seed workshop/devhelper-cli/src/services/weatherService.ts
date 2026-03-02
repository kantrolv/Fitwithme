import axios from "axios";

interface GeocodingResult {
    latitude: number;
    longitude: number;
    name: string;
}

interface WeatherData {
    city: string;
    temperature: number;
    windSpeed: number;
    weatherCode: number;
}

/**
 * WeatherService fetches current weather data using Open-Meteo API.
 * Geocoding is handled via the Open-Meteo geocoding endpoint.
 */
export class WeatherService {
    private readonly geocodingUrl = "https://geocoding-api.open-meteo.com/v1/search";
    private readonly weatherUrl = "https://api.open-meteo.com/v1/forecast";

    /**
     * Resolves a city name to latitude/longitude.
     */
    private async geocodeCity(city: string): Promise<GeocodingResult> {
        const response = await axios.get(this.geocodingUrl, {
            params: { name: city, count: 1, language: "en", format: "json" },
            timeout: 30000,
        });

        const results = response.data?.results;
        if (!results || results.length === 0) {
            throw new Error(`City "${city}" not found. Please check the spelling.`);
        }

        return {
            latitude: results[0].latitude,
            longitude: results[0].longitude,
            name: results[0].name,
        };
    }

    /**
     * Fetches current weather for a city.
     */
    async getWeather(city: string): Promise<WeatherData> {
        const geo = await this.geocodeCity(city);

        const response = await axios.get(this.weatherUrl, {
            params: {
                latitude: geo.latitude,
                longitude: geo.longitude,
                current_weather: true,
            },
            timeout: 30000,
        });

        const current = response.data?.current_weather;
        if (!current) {
            throw new Error("Failed to parse weather data from API.");
        }

        return {
            city: geo.name,
            temperature: current.temperature,
            windSpeed: current.windspeed,
            weatherCode: current.weathercode,
        };
    }

    /**
     * Maps WMO weather code to a human-readable condition string.
     */
    getWeatherCondition(code: number): string {
        if (code === 0) return "☀️  Clear sky";
        if (code <= 3) return "🌤️  Partly cloudy";
        if (code <= 9) return "🌫️  Foggy / Hazy";
        if (code <= 19) return "🌦️  Drizzle";
        if (code <= 29) return "🌧️  Rain";
        if (code <= 39) return "❄️  Snow";
        if (code <= 49) return "🌫️  Freezing Fog";
        if (code <= 59) return "🌦️  Light Drizzle";
        if (code <= 69) return "🌧️  Heavy Rain";
        if (code <= 79) return "❄️  Heavy Snow";
        if (code <= 89) return "⛈️  Thunderstorm";
        return "🌩️  Severe Thunderstorm";
    }
}
