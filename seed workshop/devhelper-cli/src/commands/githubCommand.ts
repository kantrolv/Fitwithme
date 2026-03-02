import chalk from "chalk";
import { GitHubService } from "../services/githubService";
import { Logger } from "../utils/logger";
import { Validator } from "../utils/validator";

/**
 * GitHubCommand fetches and displays a GitHub user's public profile.
 */
export class GitHubCommand {
    private githubService: GitHubService;

    constructor() {
        this.githubService = new GitHubService();
    }

    async execute(username: string): Promise<void> {
        Validator.requireNonEmpty(username, "username");

        Logger.info(`Looking up GitHub user "${username}"...`);

        try {
            const user = await this.githubService.getUser(username);

            Logger.header(`🐙 GitHub Profile — @${user.login}`);
            Logger.row("Name", user.name);
            if (user.bio) Logger.row("Bio", user.bio);
            if (user.company) Logger.row("Company", user.company);
            if (user.location) Logger.row("Location", user.location);
            Logger.divider();
            Logger.row("Public Repos", user.publicRepos);
            Logger.row("Followers", user.followers.toLocaleString());
            Logger.row("Following", user.following.toLocaleString());
            Logger.divider();
            Logger.row("Member Since", user.createdAt);
            if (user.blog) Logger.row("Website", user.blog);
            Logger.print(
                chalk.gray(`\n  Profile: https://github.com/${user.login}\n`)
            );
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Unknown error";
            if (message.includes("404")) {
                Logger.error(`GitHub user "${username}" not found.`);
            } else {
                Logger.error(`Could not fetch GitHub profile: ${message}`);
            }
        }
    }
}
