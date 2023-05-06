import type { Command } from "commander";

export const createAuthor = (program: Command, author: string) => {
  program.command("author").action(() => {
    console.log(author);
  });
};
