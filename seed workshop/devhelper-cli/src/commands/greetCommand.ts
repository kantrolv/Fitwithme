import chalk from "chalk";
import { Logger } from "../utils/logger";
import { Validator } from "../utils/validator";

/**
 * GreetCommand prints a personalized greeting message.
 */
export class GreetCommand {
    execute(name: string): void {
        Validator.requireNonEmpty(name, "name");

        Logger.header("👋 DevHelper Greeter");
        Logger.print(
            chalk.bold.yellow(`  Hello, ${chalk.cyan(name)}! Welcome to DevHelper CLI 🚀`)
        );
        Logger.print(
            chalk.gray(`\n  Your one-stop developer toolkit for the terminal.\n`)
        );
    }
}
