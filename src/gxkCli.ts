#!/usr/bin/env node
// have fun!!!

// 结果信息和处理函数
import packageJSON from "../package.json";
import { update } from "../bin/update";
import { open } from "../bin/open";
const { name, version, author } = packageJSON;

// 命令行结果映射
const handlerMap = {
  "--name": name,
  "-N": name,
  "-n": name,
  "--version": version,
  "-V": version,
  "-v": version,
  "--author": author,
  "--update": update,
  "-U": update,
  "-u": update,
  "--open": open,
  "-O": open,
  "-o": open,
};

// 获取命令行指令和参数列表
const option = process.argv[2];
const argvs = process.argv.slice(3);

// 根据命令行的参数进行打印
const handler = handlerMap[option as keyof typeof handlerMap];
if (handler) {
  if (handler instanceof Function) {
    handler(argvs);
  } else {
    console.log(handler);
  }
}
