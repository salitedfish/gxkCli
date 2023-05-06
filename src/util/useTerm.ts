import { spawn, type SpawnOptions } from "child_process";

// windowns和mac有些指令不一样
const correctCommand = (command: string) => {
  let _command = command;
  const isWindow = process.platform === "win32";
  if (isWindow) {
    if (["npm", "yarn", "pnpm"].includes(command)) {
      _command = `${_command}.cmd`;
    }
  }
  return _command;
};

/**
 * 简化spawn的使用
 * @param command
 * @param options
 * @returns
 */
export const useTerm = (command: string, options: SpawnOptions = {}) => {
  return new Promise((resolve) => {
    // 把指令字符串变成数组便于后面使用
    const args = command.split(" ");
    const _command = args.shift() || "";
    // windowns和mac不同
    const __command = correctCommand(_command);
    // 执行指令
    const childProcess = spawn(__command, args, options);
    // 将子进程的输出流导出到当前进程
    childProcess.stdout?.pipe(process.stdout);
    childProcess.stderr?.pipe(process.stderr);
    // 监听子进程关闭
    childProcess.on("close", () => {
      resolve("close");
    });
  });
};
