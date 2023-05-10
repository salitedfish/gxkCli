import type { Command } from "commander";
import inquirer from "inquirer";

export const createQuestion = (program: Command) => {
  const action = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        default: "",
      },
      {
        type: "password",
        name: "password",
        message: "Please input password:",
        mask: true,
      },
      {
        type: "confirm",
        name: "sex",
        message: "Are you man?",
        default: true,
      },
      {
        type: "number",
        name: "age",
        message: "How old are your?",
        default: 0,
      },
      {
        type: "list",
        name: "animal",
        message: "What is your favorite animal?",
        choices: ["cat", "dog", "pig"],
        default: 0,
      },
      {
        type: "checkbox",
        name: "food",
        message: "What do you like to eat?",
        choices: ["black-tea", "green-tea", "milk-tea", "juice"],
        default: [],
      },
    ]);
    console.log(answers);
  };
  program.command("question").action(action);
};
