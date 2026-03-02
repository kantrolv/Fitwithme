import chalk from "chalk";
import { Logger } from "../utils/logger";
import { Validator } from "../utils/validator";

/**
 * CalcCommand performs basic arithmetic operations on two numbers.
 */
export class CalcCommand {
    execute(num1Str: string, operator: string, num2Str: string): void {
        const num1 = Validator.requireNumber(num1Str, "num1");
        const op = Validator.requireOperator(operator);
        const num2 = Validator.requireNumber(num2Str, "num2");

        let result: number;
        let operatorSymbol: string;

        switch (op) {
            case "+":
                result = num1 + num2;
                operatorSymbol = "+";
                break;
            case "-":
                result = num1 - num2;
                operatorSymbol = "-";
                break;
            case "*":
                result = num1 * num2;
                operatorSymbol = "×";
                break;
            case "/":
                if (num2 === 0) {
                    Logger.error("Division by zero is not allowed.");
                    return;
                }
                result = num1 / num2;
                operatorSymbol = "÷";
                break;
        }

        Logger.header("🧮 Calculator");
        Logger.print(
            chalk.white(`  ${chalk.cyan(num1)} ${chalk.yellow(operatorSymbol!)} ${chalk.cyan(num2)} = ${chalk.bold.green(result!)}`)
        );
        Logger.print("");
    }
}
