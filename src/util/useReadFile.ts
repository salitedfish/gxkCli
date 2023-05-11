import fs from "fs";

/**
 * 根据文件路径读取文件内容，如果有异常则返回undefined
 * @param filePath
 * @returns
 */
export const useReadFile = (filePath: string) => {
  try {
    const fileJSON = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });
    return fileJSON;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
