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
  const action = () => {
    // 读取全局的配置文件字符串
    const [defaultConfig] = getConfig();
    // 在当前目录下创建配置文件
    useTerm(`touch ${currentConfigPath}`);
    // 在当前目录下的配置文件写下全局配置
    setConfig(JSON.stringify(defaultConfig));
  };
  program.command("init").description(`create the project ${currentConfigPath} by global ${currentConfigPath}`).action(action);
};
