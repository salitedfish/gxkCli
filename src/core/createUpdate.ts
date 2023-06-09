import type { Command } from "commander";

import { useTerm } from "../util/useTerm";

/**
 * 更新gxk
 * @param program
 * @param name
 */
export const createUpdate = (program: Command, name: string) => {
  const action = async (version?: string) => {
    try {
      let _version = "";
      if (version) {
        _version = version[0] !== "@" ? `@${version}` : version;
      }
      await useTerm(`npm install ${name}${_version} -g`);
    } catch (err) {
      console.log(err);
    }
  };

  program.command("update [version]").action(action);
};
