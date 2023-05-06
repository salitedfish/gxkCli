import type { Command } from "commander";

import { term } from "../util/term";

export const createUpdate = (program: Command, name: string) => {
  const updateAction = async (version?: string) => {
    try {
      let _version = "";
      if (version) {
        _version = version[0] !== "@" ? `@${version}` : version;
      }
      await term(`npm install ${name}${_version} -g`);
    } catch (err) {
      console.log(err);
    }
  };

  program.command("update [version]").action(updateAction);
};
