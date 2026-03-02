import axios from "axios";

interface GitHubUser {
    name: string;
    login: string;
    bio: string | null;
    publicRepos: number;
    followers: number;
    following: number;
    location: string | null;
    blog: string | null;
    company: string | null;
    createdAt: string;
}

/**
 * GitHubService fetches public user data from the GitHub REST API.
 */
export class GitHubService {
    private readonly baseUrl = "https://api.github.com";

    /**
     * Fetch public profile info for a given GitHub username.
     */
    async getUser(username: string): Promise<GitHubUser> {
        const response = await axios.get(`${this.baseUrl}/users/${username}`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "DevHelper-CLI/1.0.0",
            },
            timeout: 30000,
        });

        const data = response.data;

        return {
            name: data.name ?? data.login,
            login: data.login,
            bio: data.bio,
            publicRepos: data.public_repos,
            followers: data.followers,
            following: data.following,
            location: data.location,
            blog: data.blog || null,
            company: data.company,
            createdAt: new Date(data.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        };
    }
}
