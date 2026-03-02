import chalk from "chalk";
import { Logger } from "../utils/logger";
import { Validator } from "../utils/validator";

/**
 * RandomCommand generates a random integer within a specified range.
 */
export class RandomCommand {
    execute(minStr: string, maxStr: string): void {
        const min = Validator.requireNumber(minStr, "min");
        const max = Validator.requireNumber(maxStr, "max");
        Validator.requireRange(min, max);

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        Logger.header("🎲 Random Number Generator");
        Logger.print(
            chalk.gray(`  Range: ${chalk.white(min)} → ${chalk.white(max)}`)
        );
        Logger.print(
            chalk.bold.yellow(`\n  🎯 Result: ${chalk.bold.green(randomNumber)}\n`)
        );
    }
}
