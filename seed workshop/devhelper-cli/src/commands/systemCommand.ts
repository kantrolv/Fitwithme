import chalk from "chalk";
import os from "os";
import { Logger } from "../utils/logger";

/**
 * SystemCommand displays system information using Node.js os module.
 */
export class SystemCommand {
    execute(): void {
        const platform = os.platform();
        const platformName = this.getPlatformName(platform);
        const arch = os.arch();
        const totalMemory = os.totalmem();
        const freeMemory = os.freemem();
        const usedMemory = totalMemory - freeMemory;
        const cpus = os.cpus();
        const cpuModel = cpus.length > 0 ? cpus[0].model : "Unknown";
        const cpuCount = cpus.length;
        const hostname = os.hostname();
        const username = os.userInfo().username;
        const uptimeSeconds = os.uptime();
        const uptimeFormatted = this.formatUptime(uptimeSeconds);
        const nodeVersion = process.version;

        Logger.header("🖥️  System Information");
        Logger.row("Hostname", hostname);
        Logger.row("User", username);
        Logger.divider();
        Logger.row("OS", platformName);
        Logger.row("Architecture", arch);
        Logger.row("CPU Model", cpuModel);
        Logger.row("CPU Cores", cpuCount);
        Logger.divider();
        Logger.row("Total Memory", this.formatBytes(totalMemory));
        Logger.row("Free Memory", this.formatBytes(freeMemory));
        Logger.row("Used Memory", `${this.formatBytes(usedMemory)} (${Math.round((usedMemory / totalMemory) * 100)}%)`);
        Logger.divider();
        Logger.row("System Uptime", uptimeFormatted);
        Logger.row("Node.js", nodeVersion);
        Logger.print(chalk.gray("\n  Powered by Node.js os module\n"));
    }

    private getPlatformName(platform: string): string {
        const map: Record<string, string> = {
            darwin: "macOS",
            linux: "Linux",
            win32: "Windows",
            freebsd: "FreeBSD",
            openbsd: "OpenBSD",
            android: "Android",
        };
        return map[platform] ?? platform;
    }

    private formatBytes(bytes: number): string {
        const gb = bytes / (1024 * 1024 * 1024);
        return gb >= 1 ? `${gb.toFixed(2)} GB` : `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }

    private formatUptime(seconds: number): string {
        const d = Math.floor(seconds / 86400);
        const h = Math.floor((seconds % 86400) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const parts: string[] = [];
        if (d > 0) parts.push(`${d}d`);
        if (h > 0) parts.push(`${h}h`);
        if (m > 0) parts.push(`${m}m`);
        return parts.join(" ") || "< 1 minute";
    }
}
