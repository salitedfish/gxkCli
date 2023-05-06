import ejs from "ejs";
import path from "path";

/**
 * 根据模版返回修改后的模版
 * @param template
 * @param data
 * @returns
 */
export const useCompileTemplate = async (template: string, data?: Record<string, string>) => {
  // 根据脚本执行的目录拼接模版路径
  const templatePath = path.resolve(__dirname, template);
  // 返回修改后的模版
  const templateCurrent = await ejs.renderFile(templatePath, {
    data,
  });
  return templateCurrent;
};
