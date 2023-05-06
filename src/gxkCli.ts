import { program } from "commander";
import { name, version, author } from "../package.json";
import { createHelp } from "./core/createHelp";
import { createUpdate } from "./core/createUpdate";
import { createAuthor } from "./core/createAuthor";
import { createClone } from "./core/createClone";
import { createName } from "./core/createName";

// 定义指令
program.version(version);
createAuthor(program, author);
createHelp(program);
createUpdate(program, name);
createClone(program);
createName(program, name);

// 解析参数
program.parse(process.argv);
