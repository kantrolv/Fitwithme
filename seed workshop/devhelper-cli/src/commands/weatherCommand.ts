import chalk from "chalk";
import { WeatherService } from "../services/weatherService";
import { Logger } from "../utils/logger";
import { Validator } from "../utils/validator";

/**
 * WeatherCommand fetches and displays current weather for a city.
 */
export class WeatherCommand {
    private weatherService: WeatherService;

    constructor() {
        this.weatherService = new WeatherService();
    }

    async execute(city: string): Promise<void> {
        Validator.requireNonEmpty(city, "city");

        Logger.info(`Fetching weather for "${city}"...`);

        try {
            const data = await this.weatherService.getWeather(city);
            const condition = this.weatherService.getWeatherCondition(data.weatherCode);

            Logger.header(`🌤️  Weather — ${data.city}`);
            Logger.row("Condition", condition);
            Logger.row("Temperature", `${data.temperature}°C`);
            Logger.row("Wind Speed", `${data.windSpeed} km/h`);
            Logger.divider();
            Logger.print(chalk.gray("  Powered by Open-Meteo (open-meteo.com)\n"));
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Unknown error";
            Logger.error(`Could not fetch weather: ${message}`);
        }
    }
}
