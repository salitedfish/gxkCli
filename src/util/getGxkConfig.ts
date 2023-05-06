import path from "path";
import fs from "fs";

const defaultPath = path.resolve(__dirname, "./gxkConfig.json");
const currentPath = "./gxkConfig.json";

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
  if (currentJSON) {
    const currentConfig = JSON.parse(currentJSON);
    return [defaultConfig, currentConfig];
  } else {
    return [defaultConfig, {}];
  }
};
