//如何将指令#! /usr/bin/env node 添加到打包后的文件开头（fs 直接写有点暴力？）
const fs = require("fs");

const str = fs.readFileSync("./lib/index.cjs", "utf-8");

const _str = `#! /usr/bin/env node
${str}
`;

fs.writeFileSync("./lib/index.cjs", _str);
