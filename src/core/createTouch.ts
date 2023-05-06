import type { Command } from "commander";

import fs from "fs";

import { term } from "../util/term";
import { compileTemplate } from "../util/compileTemplate";

const vueTemplate = "./template/vue";
const reactTemplate = "./template/react";

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
      term(`touch ${nameExt}`, { cwd: path });
      let template = "";
      // 读取对应的模版
      if (ext === "vue") {
        template = await compileTemplate(`${vueTemplate}/component.ejs`, { name });
      }
      if (ext === "tsx") {
        template = await compileTemplate(`${reactTemplate}/component.ejs`, { name });
      }
      // 写入到生成的文件
      const currentPath = path ? `${path}/${nameExt}` : nameExt;
      fs.writeFileSync(currentPath, template);
    } catch (err) {
      console.log(err);
    }
  };

  program.command("touch <nameExt> [path]").action(action);
};
