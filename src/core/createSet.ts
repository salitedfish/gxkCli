import type { Command } from "commander";
import path from "path";
import fs from "fs";
import { getGxkConfig } from "../util/getGxkConfig";

const defaultPath = path.resolve(__dirname, "./gxkConfig.json");
const currentPath = "./gxkConfig.json";

/**
 * 修改cli的配置
 * @param program
 */
export const createSet = (program: Command) => {
  const action = (key: string, value: string, global?: string) => {
    const configs = getGxkConfig();
    // 如果有global则修改全局的配置，否则修改当前目录下的配置
    if (global === "global") {
      configs[0][key] = value;
      fs.writeFileSync(defaultPath, JSON.stringify(configs[0]));
    } else {
      configs[1][key] = value;
      fs.writeFileSync(currentPath, JSON.stringify(configs[1]));
    }
  };
  program.command("set <key> <value> [global]").action(action);
};
