import chalk from "chalk";
import { Logger } from "../utils/logger";

/**
 * TimeCommand displays the current date and time in a formatted layout.
 */
export class TimeCommand {
    execute(): void {
        const now = new Date();

        const timeString = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });

        const dateString = now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        const utcOffset = this.getUtcOffset(now);
        const timestamp = now.getTime();
        const iso = now.toISOString();

        Logger.header("🕒 Current Date & Time");
        Logger.print(
            chalk.bold.yellow(`  ${timeString}`)
        );
        Logger.print(
            chalk.cyan(`  ${dateString}`)
        );
        Logger.divider();
        Logger.row("UTC Offset", utcOffset);
        Logger.row("Unix Timestamp", timestamp);
        Logger.row("ISO 8601", iso);
        Logger.print("");
    }

    private getUtcOffset(date: Date): string {
        const offset = -date.getTimezoneOffset();
        const sign = offset >= 0 ? "+" : "-";
        const absOffset = Math.abs(offset);
        const hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
        const minutes = String(absOffset % 60).padStart(2, "0");
        return `UTC${sign}${hours}:${minutes}`;
    }
}
