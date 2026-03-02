import chalk from "chalk";
import fs from "fs";
import path from "path";
import { Logger } from "../utils/logger";
import { Validator } from "../utils/validator";

/**
 * FileInfoCommand displays metadata about a given file using Node.js fs module.
 */
export class FileInfoCommand {
    execute(filePath: string): void {
        Validator.requireFilePath(filePath);

        const resolvedPath = path.resolve(filePath);

        try {
            if (!fs.existsSync(resolvedPath)) {
                Logger.error(`File not found: "${resolvedPath}"`);
                return;
            }

            const stats = fs.statSync(resolvedPath);
            const ext = path.extname(resolvedPath) || "(no extension)";
            const type = stats.isDirectory() ? "Directory" : `File (${ext})`;
            const sizeInBytes = stats.size;
            const sizeFormatted = this.formatBytes(sizeInBytes);
            const lastModified = new Date(stats.mtime).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            const created = new Date(stats.birthtime).toLocaleString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });

            Logger.header("📁 File Information");
            Logger.row("Path", resolvedPath);
            Logger.row("Name", path.basename(resolvedPath));
            Logger.row("Type", type);
            Logger.divider();
            Logger.row("Size", `${sizeFormatted} (${sizeInBytes.toLocaleString()} bytes)`);
            Logger.row("Created", created);
            Logger.row("Last Modified", lastModified);
            Logger.print(
                chalk.gray(`\n  Readonly: ${!this.isWritable(resolvedPath)}\n`)
            );
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Unknown error";
            Logger.error(`Could not read file info: ${message}`);
        }
    }

    private formatBytes(bytes: number): string {
        if (bytes === 0) return "0 B";
        const units = ["B", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
    }

    private isWritable(filePath: string): boolean {
        try {
            fs.accessSync(filePath, fs.constants.W_OK);
            return true;
        } catch {
            return false;
        }
    }
}
