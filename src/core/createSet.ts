import type { Command } from "commander";

import { setGxkConfigValue } from "../util/useGxkConfig";

/**
 * 修改cli的配置
 * @param program
 */
export const createSet = (program: Command) => {
  const action = (key: string, value: string, global?: string) => {
    // 如果有global则修改全局的配置，否则修改当前目录下的配置
    setGxkConfigValue(key, value, { global: global === "global" });
  };
  program.command("set <key> <value> [global]").action(action);
};
