import type { Command } from "commander";

import fs from "fs";

import { useTerm } from "../util/useTerm";
import { useCompileTemplate } from "../util/useCompileTemplate";

/**
 * 创建文件，根据文件扩展处理不同
 * @param program
 */
export const createTouch = (program: Command) => {
  const action = async (nameExt: string, path?: string) => {
    try {
      // 生成文件
      useTerm(`touch ${nameExt}`, { cwd: path });
      // 获取模版
      const template = await getTemplate(nameExt);
      // 获取准确的文件路径
      const currentPath = path ? `${path}/${nameExt}` : nameExt;
      // 写入到准确的文件路径
      fs.writeFileSync(currentPath, template);
    } catch (err) {
      console.log(err);
    }
  };

  program.command("touch <nameExt> [path]").action(action);
};

/**
 * 1、根据文件全称读取对应的模版，并传递数据
 * 2、根据文件后缀读取对应的模版，并传递数据
 * @param nameExt
 * @returns
 */
export const getTemplate = async (nameExt: string) => {
  const ext = nameExt.slice(nameExt.indexOf(".") + 1);
  const name = nameExt.slice(0, nameExt.indexOf("."));
  let template = "";
  let templatePath = "";
  // 获取模版
  if (templateMap[nameExt]) {
    templatePath = templateMap[nameExt];
  } else if (templateMap[ext]) {
    templatePath = templateMap[ext];
  } else if (templateMap[name]) {
    templatePath = templateMap[name];
  }
  if (templatePath) {
    template = await useCompileTemplate(templatePath, { name });
  }
  return template;
};

// 模版映射
export const templateMap: Record<string, string> = {
  // 名称加后缀
  "reset.css": "template/css/reset.ejs",
  "theme.less": "template/css/theme.ejs",
  "deploy.sh": "template/shell/deploy.ejs",
  // 名称
  // 后缀
  vue: "template/vue/component.ejs",
  tsx: "template/react/component.ejs",
};
