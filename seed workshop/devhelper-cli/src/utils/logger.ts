import chalk from "chalk";

/**
 * Logger utility class for styled CLI output.
 * Centralizes all console output formatting for consistency.
 */
export class Logger {
    /**
     * Print a success message in green.
     */
    static success(message: string): void {
        console.log(chalk.green("✔ " + message));
    }

    /**
     * Print an error message in red.
     */
    static error(message: string): void {
        console.error(chalk.red("✖ Error: " + message));
    }

    /**
     * Print a warning message in yellow.
     */
    static warn(message: string): void {
        console.warn(chalk.yellow("⚠ Warning: " + message));
    }

    /**
     * Print an info message in cyan.
     */
    static info(message: string): void {
        console.log(chalk.cyan("ℹ " + message));
    }

    /**
     * Print a bold header/title.
     */
    static header(title: string): void {
        console.log("\n" + chalk.bold.magenta("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
        console.log(chalk.bold.white("  " + title));
        console.log(chalk.bold.magenta("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━") + "\n");
    }

    /**
     * Print a key-value pair row.
     */
    static row(key: string, value: string | number): void {
        console.log(`  ${chalk.bold.cyan(key + ":")} ${chalk.white(String(value))}`);
    }

    /**
     * Print a blank divider line.
     */
    static divider(): void {
        console.log(chalk.gray("  ─────────────────────────────────"));
    }

    /**
     * Print a raw styled line with chalk.
     */
    static print(message: string): void {
        console.log(message);
    }
}
