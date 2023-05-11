import type { Command } from "commander";
import inquirer from "inquirer";

import fs from "fs";

import { useTerm } from "../util/useTerm";
import { getGxkConfigValueByKey } from "../util/useConfig";

/**
 * 根据配置的node包管理工具执行选择的指令
 * @param program
 */
export const createNpmRun = (program: Command) => {
  const action = async () => {
    // 使用配置的node包管理工具执行选择的指令
    const npm = getGxkConfigValueByKey("npmTool") || "npm";

    // 获取项目中package.json的指令
    const packageJSON = fs.readFileSync("package.json", "utf-8");
    const scriptObject = JSON.parse(packageJSON).scripts;
    const scripts = [];
    for (const key in scriptObject) {
      scripts.push(`${npm} run ${key}`);
    }

    // 配置交互式命令行
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "script",
        message: "Select a script",
        choices: scripts,
        default: null,
      },
    ]);

    // 执行指令
    useTerm(answers.script);
  };
  program.command("npm run").action(action);
};
