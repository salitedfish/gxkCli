import type { Command } from "commander";

import { getGxkConfigValue } from "../util/useGxkConfig";

/**
 * 获取cli的配置
 * @param program
 */
export const createGet = (program: Command) => {
  const action = (key: string) => {
    // 如果有当前目录下配置有，则返回，否则返回全局配置的值
    const value = getGxkConfigValue(key);
    console.log(value);
  };
  program.command("get <key>").action(action);
};
