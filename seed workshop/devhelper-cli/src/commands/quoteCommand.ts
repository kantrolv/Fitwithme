import chalk from "chalk";
import { QuoteService } from "../services/quoteService";
import { Logger } from "../utils/logger";

/**
 * QuoteCommand fetches and displays a random motivational quote.
 */
export class QuoteCommand {
    private quoteService: QuoteService;

    constructor() {
        this.quoteService = new QuoteService();
    }

    async execute(): Promise<void> {
        Logger.info("Fetching a motivational quote...");

        try {
            const quote = await this.quoteService.getRandomQuote();

            Logger.header("💡 Quote of the Moment");
            Logger.print(chalk.italic.yellow(`  "${quote.content}"`));
            Logger.print(chalk.bold.cyan(`\n         — ${quote.author}\n`));
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Unknown error";
            Logger.error(`Could not fetch quote: ${message}`);
        }
    }
}
