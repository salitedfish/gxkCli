import type { Command } from "commander";

import fs from "fs";

import { useTerm } from "../util/useTerm";
import { useCompileTemplate } from "../util/useCompileTemplate";
import { templateMap } from "../config/templateMap";

/**
 * 创建文件，根据文件扩展处理不同
 * @param program
 */
export const createTouch = (program: Command) => {
  const action = async (nameExt: string, path?: string) => {
    const ext = nameExt.slice(nameExt.indexOf(".") + 1);
    const name = nameExt.slice(0, nameExt.indexOf("."));
    // 异常反馈
    if (!nameExt || !name || !ext) {
      console.warn("请输入完整的文件名");
      return;
    }
    try {
      // 生成文件
      useTerm(`touch ${nameExt}`, { cwd: path });
      let template = "";
      // 根据文件后缀名(暂定)读取对应的模版，并传递数据(
      if (templateMap[ext]) {
        template = await useCompileTemplate(templateMap[ext], { name });
      }
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
