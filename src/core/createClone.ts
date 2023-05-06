import type { Command } from "commander";

import { gitAddrMap } from "../config/gitAddrMap";
import { useTerm } from "../util/useTerm";

/**
 * 根据配置的项目名称和git地址，下载项目
 * @param program
 */
export const createClone = (program: Command) => {
  const action = async (name: keyof typeof gitAddrMap) => {
    try {
      // 根据配置的名字获取git地址
      const address = gitAddrMap[name];
      // 根据地址下载项目
      await useTerm(`git clone ${address}`);
    } catch (err) {
      console.log(err);
    }
  };

  program.command("clone <name>").action(action);
};
