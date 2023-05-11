import path from "path";
import fs from "fs";

import { config } from "../../package.json";
import { useReadFile } from "../util/useReadFile";

// 获取全局或者项目配置文件路径
const currentConfigPath = config.config;
const globalConfigPath = path.resolve(__dirname, currentConfigPath);
const getConfigPath = (global?: boolean) => {
  return global ? globalConfigPath : currentConfigPath;
};

/**
 * 获取全局或当前目录的配置
 * @returns
 */
export const getConfig = (options: { global?: boolean } = {}): Record<string, string> => {
  try {
    const configPath = getConfigPath(options.global);
    const configJSON = useReadFile(configPath);
    if (configJSON) {
      const config = JSON.parse(configJSON);
      return config;
    }
    return {};
  } catch (err) {
    return {};
  }
};

/**
 * 覆盖全局或项目的配置文件
 * @param configStr
 * @param options
 */
export const setConfig = (configStr: string, options: { global?: boolean } = {}) => {
  // 如果有global则修改全局的配置，否则修改当前目录下的配置
  const configPath = getConfigPath(options.global);
  // 修改全局或项目的配置
  fs.writeFileSync(configPath, configStr);
};

/**
 * 根据key获取配置的值
 * @param key
 * @returns
 */
export const getGxkConfigValueByKey = (key: string) => {
  // 如果项目配置下有key的值，则返回
  const currentConfigs = getConfig();
  if (currentConfigs[key]) return currentConfigs[key];
  // 否则返回全局配置key的值
  const globalConfigs = getConfig({ global: true });
  return globalConfigs[key];
};

/**
 * 根据key改变配置的值，可配置是否全局
 * @param key
 * @param value
 * @param options
 */
export const setConfigValueByKey = (key: string, value: string, options: { global?: boolean } = {}) => {
  // 获取全局或项目的配置
  const config = getConfig({ global: options?.global });
  const configPath = getConfigPath(options.global);
  // 修改全局或项目的配置
  config[key] = value;
  fs.writeFileSync(configPath, JSON.stringify(config));
};
