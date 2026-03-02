/**
 * Validator utility class.
 * Provides static validation helpers used across commands.
 */
export class Validator {
    /**
     * Ensure a string argument is non-empty.
     */
    static requireNonEmpty(value: string, fieldName: string): void {
        if (!value || value.trim().length === 0) {
            throw new Error(`"${fieldName}" must not be empty.`);
        }
    }

    /**
     * Validate that a value is a finite number.
     */
    static requireNumber(value: string, fieldName: string): number {
        const parsed = parseFloat(value);
        if (isNaN(parsed)) {
            throw new Error(`"${fieldName}" must be a valid number. Received: "${value}"`);
        }
        return parsed;
    }

    /**
     * Validate an arithmetic operator.
     */
    static requireOperator(op: string): "+" | "-" | "*" | "/" {
        const allowed = ["+", "-", "*", "/"];
        if (!allowed.includes(op)) {
            throw new Error(`Unsupported operator "${op}". Use one of: +  -  *  /`);
        }
        return op as "+" | "-" | "*" | "/";
    }

    /**
     * Validate that min < max for random number range.
     */
    static requireRange(min: number, max: number): void {
        if (min >= max) {
            throw new Error(`Min (${min}) must be less than Max (${max}).`);
        }
    }

    /**
     * Validate file path (non-empty string).
     */
    static requireFilePath(path: string): void {
        if (!path || path.trim().length === 0) {
            throw new Error(`File path must not be empty.`);
        }
    }
}
