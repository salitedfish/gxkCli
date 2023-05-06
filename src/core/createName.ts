import type { Command } from "commander";

export const createName = (program: Command, name: string) => {
  program.command("name").action(() => {
    console.log(name);
  });
};
