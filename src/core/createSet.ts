import type { Command } from "commander";

import { setConfigValueByKey } from "../util/useConfig";

/**
 * 修改cli的配置
 * @param program
 */
export const createSet = (program: Command) => {
  const action = (key: string, value: string) => {
    /**
     * program.opts()可以获取到注册的选项的值，比如-g
     * 如果有global则修改全局的配置，否则修改当前目录下的配置
     */
    const { global } = program.opts();
    setConfigValueByKey(key, value, { global });
  };
  program.command("set <key> <value>").action(action);
};
