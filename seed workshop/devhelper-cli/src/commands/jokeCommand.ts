import chalk from "chalk";
import { JokeService } from "../services/jokeService";
import { Logger } from "../utils/logger";

/**
 * JokeCommand fetches and displays a random programming joke.
 */
export class JokeCommand {
    private jokeService: JokeService;

    constructor() {
        this.jokeService = new JokeService();
    }

    async execute(): Promise<void> {
        Logger.info("Fetching a programming joke...");

        try {
            const joke = await this.jokeService.getRandomJoke();

            Logger.header("😂 Programming Joke");
            Logger.print(chalk.bold.white(`  Q: ${joke.setup}`));
            Logger.print("");
            Logger.print(chalk.bold.yellow(`  A: ${joke.punchline}\n`));
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Unknown error";
            Logger.error(`Could not fetch joke: ${message}`);
        }
    }
}
