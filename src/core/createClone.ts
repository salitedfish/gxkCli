import type { Command } from "commander";

import { gitAddrMap } from "../config/gitAddrMap";
import { term } from "../util/term";

export const createClone = (program: Command) => {
  const downloadAction = async (name: keyof typeof gitAddrMap) => {
    try {
      // 根据配置的名字获取git地址
      const address = gitAddrMap[name];
      // 根据地址下载项目
      await term(`git clone ${address}`);
    } catch (err) {
      console.log(err);
    }
  };

  program.command("clone <name>").action(downloadAction);
};
