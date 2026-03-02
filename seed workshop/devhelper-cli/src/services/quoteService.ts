import axios from "axios";

interface Quote {
    content: string;
    author: string;
}

/**
 * QuoteService fetches random motivational quotes from quotable.io.
 */
export class QuoteService {
    private readonly baseUrl = "https://api.quotable.io/random";

    /**
     * Fetch a random motivational quote.
     */
    async getRandomQuote(): Promise<Quote> {
        try {
            const response = await axios.get(this.baseUrl, { timeout: 30000 });
            return {
                content: response.data.content,
                author: response.data.author,
            };
        } catch {
            // Fallback quotes if the API is unavailable
            const fallbackQuotes: Quote[] = [
                { content: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
                { content: "First, solve the problem. Then, write the code.", author: "John Johnson" },
                { content: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
                { content: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
                { content: "Java is to JavaScript what Car is to Carpet.", author: "Chris Heilmann" },
            ];
            return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        }
    }
}
