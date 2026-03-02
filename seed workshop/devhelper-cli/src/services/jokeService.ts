import axios from "axios";

interface Joke {
    setup: string;
    punchline: string;
}

/**
 * JokeService fetches random programming jokes from the official joke API.
 */
export class JokeService {
    private readonly baseUrl = "https://official-joke-api.appspot.com/jokes/programming/random";

    /**
     * Fetch a random programming joke.
     */
    async getRandomJoke(): Promise<Joke> {
        try {
            const response = await axios.get(this.baseUrl, { timeout: 30000 });
            const joke = Array.isArray(response.data) ? response.data[0] : response.data;
            return {
                setup: joke.setup,
                punchline: joke.punchline,
            };
        } catch {
            // Fallback jokes if the API is unavailable
            const fallbackJokes: Joke[] = [
                {
                    setup: "Why do programmers prefer dark mode?",
                    punchline: "Because light attracts bugs.",
                },
                {
                    setup: "How many programmers does it take to change a light bulb?",
                    punchline: "None. That's a hardware problem.",
                },
                {
                    setup: "Why did the programmer quit his job?",
                    punchline: "Because he didn't get arrays.",
                },
                {
                    setup: "What's a programmer's favorite hangout place?",
                    punchline: "Foo Bar.",
                },
                {
                    setup: "Why do Java developers wear glasses?",
                    punchline: "Because they don't C#.",
                },
            ];
            return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
        }
    }
}
