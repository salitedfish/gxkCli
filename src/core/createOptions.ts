import type { Command } from "commander";

export const createOptions = (program: Command) => {
  program.option("-g, --global", "whether to set the global config ");
};
