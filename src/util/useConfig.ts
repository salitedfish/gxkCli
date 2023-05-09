import path from "path";
import fs from "fs";

import { Position } from "../config/enum";
import { config } from "../../package.json";

const currentConfigPath = config.config;
const globalConfigPath = path.resolve(__dirname, currentConfigPath);

/**
 * 获取全局和当前目录的配置，组成数组返回
 * @returns
 */
export const getConfig = (): [Record<string, string>, Record<string, string>] => {
  // 获取全局和项目的配置文件
  const globalJSON = fs.readFileSync(globalConfigPath, {
    encoding: "utf-8",
  });
  const currentJSON = fs.readFileSync(currentConfigPath, {
    encoding: "utf-8",
  });

  const globalConfig = JSON.parse(globalJSON);
  const currentConfig = JSON.parse(currentJSON);

  // 返回配置文件，如果没获取到则返回{}
  return [globalConfig || {}, currentConfig || {}];
};

/**
 * 覆盖全局或项目的配置文件
 * @param configStr
 * @param options
 */
export const setConfig = (configStr: string, options?: { global?: boolean }) => {
  // 如果有global则修改全局的配置，否则修改当前目录下的配置
  if (options && options.global) {
    fs.writeFileSync(globalConfigPath, configStr);
  } else {
    fs.writeFileSync(currentConfigPath, configStr);
  }
};

/**
 * 根据key获取配置的值
 * @param key
 * @returns
 */
export const getGxkConfigValueByKey = (key: string) => {
  const configs = getConfig();
  // 如果项目配置下有key的值，则返回，否则返回全局配置key的值
  return configs[Position.CURRENT][key] || configs[Position.GLOBAL][key];
};

/**
 * 根据key改变配置的值，可配置是否全局
 * @param key
 * @param value
 * @param options
 */
export const setConfigValueByKey = (key: string, value: string, options?: { global?: boolean }) => {
  const configs = getConfig();
  // 如果有global则修改全局的配置，否则修改当前目录下的配置
  if (options && options.global) {
    configs[Position.GLOBAL][key] = value;
    fs.writeFileSync(globalConfigPath, JSON.stringify(configs[Position.GLOBAL]));
  } else {
    configs[Position.CURRENT][key] = value;
    fs.writeFileSync(currentConfigPath, JSON.stringify(configs[Position.CURRENT]));
  }
};
