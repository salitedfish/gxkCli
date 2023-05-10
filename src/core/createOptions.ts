import type { Command } from "commander";

/**
 * 配置指令的options，比如-g，不同指令对option的处理不同
 * @param program
 */
export const createOptions = (program: Command) => {
  program.option("-g, --global", "whether to set the global config ");
};
