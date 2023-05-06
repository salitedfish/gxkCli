import ejs from "ejs";
import path from "path";

export const compileTemplate = async (template: string, data?: Record<string, string>) => {
  // 根据脚本执行的目录拼接模版路径
  const templatePath = path.resolve(__dirname, template);
  // 返回修改后的模版
  return await ejs.renderFile(templatePath, {
    data,
  });
};
