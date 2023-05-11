import type { Command } from "commander";

import { useTerm } from "../util/useTerm";
import { getConfig, setConfig } from "../util/useConfig";
import { config } from "../../package.json";

const currentConfigPath = config.config;

/**
 * 在当前目录下生成配置文件，并初始化配置
 * @param program
 */
export const createInit = (program: Command) => {
  const action = async () => {
    // 在当前目录下创建配置文件
    await useTerm(`touch ${currentConfigPath}`);
    // 读取全局的配置文件字符串
    const globalConfig = getConfig({ global: true });
    // 将配置转变为字符串
    const globalConfigJSON = JSON.stringify(globalConfig);
    // 在当前目录下的配置文件写下全局配置
    setConfig(globalConfigJSON);
  };
  program.command("init").description(`create the current ${currentConfigPath}`).action(action);
};
