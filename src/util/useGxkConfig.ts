import path from "path";
import fs from "fs";
import { config } from "../../package.json";

const currentPath = config.config;
const defaultPath = path.resolve(__dirname, currentPath);

/**
 * 获取全局和当前目录的配置，组成数组返回
 * @returns
 */
export const getGxkConfig = () => {
  const defaultJSON = fs.readFileSync(defaultPath, {
    encoding: "utf-8",
  });
  const currentJSON = fs.readFileSync(currentPath, {
    encoding: "utf-8",
  });

  const defaultConfig = JSON.parse(defaultJSON);
  const currentConfig = JSON.parse(currentJSON);
  return [defaultConfig, currentConfig || {}];
};

/**
 * 根据key获取配置的值
 * @param key
 * @returns
 */
export const getGxkConfigValue = (key: string) => {
  return getGxkConfig()[1][key] || getGxkConfig()[0][key];
};

/**
 * 根据key改变配置的值，可配置是否全局
 * @param key
 * @param value
 * @param options
 */
export const setGxkConfigValue = (key: string, value: string, options?: { global?: boolean }) => {
  const configs = getGxkConfig();
  // 如果有global则修改全局的配置，否则修改当前目录下的配置
  if (options && options.global) {
    configs[0][key] = value;
    fs.writeFileSync(defaultPath, JSON.stringify(configs[0]));
  } else {
    configs[1][key] = value;
    fs.writeFileSync(currentPath, JSON.stringify(configs[1]));
  }
};
