import { program } from "commander";

import { name, version, author } from "../package.json";
import { createOptions } from "./core/createOptions";
import { createUpdate } from "./core/createUpdate";
import { createAuthor } from "./core/createAuthor";
import { createClone } from "./core/createClone";
import { createName } from "./core/createName";
import { createTouch } from "./core/createTouch";
import { createGet } from "./core/createGet";
import { createSet } from "./core/createSet";
import { createInit } from "./core/createInit";
import { createQuestion } from "./core/createQuestion";

// 定义指令
program.version(version);
createInit(program);
createAuthor(program, author);
createOptions(program);
createUpdate(program, name);
createClone(program);
createName(program, name);
createTouch(program);
createGet(program);
createSet(program);
createQuestion(program);

// 解析参数
program.parse(process.argv);
