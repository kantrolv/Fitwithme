#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

// Commands
import { GreetCommand } from "./commands/greetCommand";
import { WeatherCommand } from "./commands/weatherCommand";
import { QuoteCommand } from "./commands/quoteCommand";
import { GitHubCommand } from "./commands/githubCommand";
import { JokeCommand } from "./commands/jokeCommand";
import { FileInfoCommand } from "./commands/fileInfoCommand";
import { SystemCommand } from "./commands/systemCommand";
import { TimeCommand } from "./commands/timeCommand";
import { CalcCommand } from "./commands/calcCommand";
import { RandomCommand } from "./commands/randomCommand";

// ─── Program Setup ────────────────────────────────────────────────────────────

const program = new Command();

program
    .name("devhelper")
    .description(
        chalk.bold.cyan("DevHelper CLI") +
        " — Your all-in-one developer toolkit for the terminal 🚀"
    )
    .version("1.0.0", "-v, --version", "Display the current CLI version");

// ─── Banner ────────────────────────────────────────────────────────────────────

function printBanner(): void {
    console.log(chalk.bold.magenta("\n  ╔══════════════════════════════════╗"));
    console.log(chalk.bold.magenta("  ║") + chalk.bold.cyan("       DevHelper CLI  v1.0.0       ") + chalk.bold.magenta("║"));
    console.log(chalk.bold.magenta("  ║") + chalk.gray("   Developer Productivity Toolkit   ") + chalk.bold.magenta("║"));
    console.log(chalk.bold.magenta("  ╚══════════════════════════════════╝\n"));
}

// ─── 1. Greet ──────────────────────────────────────────────────────────────────

program
    .command("greet <name>")
    .description("Print a personalized greeting message")
    .action((name: string) => {
        const cmd = new GreetCommand();
        cmd.execute(name);
    });

// ─── 2. Weather ────────────────────────────────────────────────────────────────

program
    .command("weather <city>")
    .description("Fetch current weather for a city using Open-Meteo API")
    .action(async (city: string) => {
        const cmd = new WeatherCommand();
        await cmd.execute(city);
    });

// ─── 3. Quote ──────────────────────────────────────────────────────────────────

program
    .command("quote")
    .description("Fetch a random motivational quote from quotable.io")
    .action(async () => {
        const cmd = new QuoteCommand();
        await cmd.execute();
    });

// ─── 4. GitHub ─────────────────────────────────────────────────────────────────

program
    .command("github <username>")
    .description("Look up a GitHub user's public profile information")
    .action(async (username: string) => {
        const cmd = new GitHubCommand();
        await cmd.execute(username);
    });

// ─── 5. Joke ───────────────────────────────────────────────────────────────────

program
    .command("joke")
    .description("Fetch a random programming joke")
    .action(async () => {
        const cmd = new JokeCommand();
        await cmd.execute();
    });

// ─── 6. File Info ──────────────────────────────────────────────────────────────

program
    .command("fileinfo <filename>")
    .description("Display metadata information about a file")
    .action((filename: string) => {
        const cmd = new FileInfoCommand();
        cmd.execute(filename);
    });

// ─── 7. System ─────────────────────────────────────────────────────────────────

program
    .command("system")
    .description("Display system information (OS, CPU, memory, uptime)")
    .action(() => {
        const cmd = new SystemCommand();
        cmd.execute();
    });

// ─── 8. Time ───────────────────────────────────────────────────────────────────

program
    .command("time")
    .description("Display the current date, time, and timezone info")
    .action(() => {
        const cmd = new TimeCommand();
        cmd.execute();
    });

// ─── 9. Calc ───────────────────────────────────────────────────────────────────

program
    .command("calc <num1> <operator> <num2>")
    .description("Perform basic arithmetic: +  -  *  /  (e.g. devhelper calc 5 + 3)")
    .action((num1: string, operator: string, num2: string) => {
        const cmd = new CalcCommand();
        cmd.execute(num1, operator, num2);
    });

// ─── 10. Random ────────────────────────────────────────────────────────────────

program
    .command("random <min> <max>")
    .description("Generate a random integer within a given range (e.g. devhelper random 1 100)")
    .action((min: string, max: string) => {
        const cmd = new RandomCommand();
        cmd.execute(min, max);
    });

// ─── Default: Show Banner + Help ──────────────────────────────────────────────

if (process.argv.length === 2) {
    printBanner();
    program.help();
}

program.parse(process.argv);
