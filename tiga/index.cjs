'use strict';

var child_process = require('child_process');

var name$2 = "@ultra-man/tiga";
var version$2 = "0.0.1";
var description = "The first light of the earth";
var module$1 = "src/index.ts";
var main = "src/index.ts";
var config = {
	dest: "tiga"
};
var bin = {
	gxk: "./tiga/index.cjs",
	tiga: "./tiga/index.cjs"
};
var scripts = {
	prepare: "husky install",
	build: "rm -rf ./$npm_package_config_dest% && rollup -c rollup.config.ts --configPlugin typescript && rm -rf ./$npm_package_config_dest/rollup.config.d.ts ",
	build_publish: "pnpm run build && cd ./$npm_package_config_dest && pnpm publish --access public && rm -rf ./$npm_package_config_dest",
	publish_patch: "pnpm version patch && pnpm run build_publish",
	publish_minor: "pnpm version minor && pnpm run build_publish",
	publish_major: "pnpm version major && pnpm run build_publish"
};
var keywords = [
	"typescript",
	"library"
];
var packageManager = "pnpm@7.12.1";
var author$2 = "gxk";
var license = "ISC";
var devDependencies = {
	"@babel/core": "^7.18.9",
	"@babel/eslint-parser": "^7.18.9",
	"@babel/preset-env": "^7.18.2",
	"@babel/preset-typescript": "^7.17.12",
	"@commitlint/cli": "^17.0.3",
	"@commitlint/config-conventional": "^17.0.3",
	"@rollup/plugin-babel": "^5.3.1",
	"@rollup/plugin-commonjs": "^22.0.0",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^13.3.0",
	"@rollup/plugin-typescript": "9.0.1",
	"@types/crypto-js": "^4.1.1",
	"@types/jest": "^28.1.1",
	"@types/node": "^17.0.40",
	"@types/spark-md5": "^3.0.2",
	"@typescript-eslint/eslint-plugin": "^5.31.0",
	"@typescript-eslint/parser": "^5.31.0",
	"babel-jest": "^28.1.1",
	"babel-preset-latest": "^6.24.1",
	husky: "^8.0.1",
	rollup: "^2.75.5",
	"rollup-plugin-copy": "^3.4.0",
	"rollup-plugin-eslint": "^7.0.0",
	"rollup-plugin-generate-package-json": "^3.2.0",
	"rollup-plugin-terser": "^7.0.2",
	"rollup-plugin-typescript2": "^0.32.1",
	"ts-node": "^10.8.1",
	tslib: "^2.4.0",
	ttypescript: "^1.5.13",
	typescript: "^4.7.3"
};
var dependencies = {
};
var packageJSON = {
	name: name$2,
	version: version$2,
	description: description,
	module: module$1,
	main: main,
	config: config,
	bin: bin,
	scripts: scripts,
	keywords: keywords,
	packageManager: packageManager,
	author: author$2,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies
};

const update = argvs => {
  try {
    const version = argvs[0];
    if (version) {
      child_process.exec("npm install @ultra-man/noa@" + version + " -g");
    } else {
      child_process.exec("npm install @ultra-man/noa -g");
    }
    console.log("gxk: update success!!!");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const open = argvs => {
  try {
    const name = argvs[0];
    let _name = "";
    if (["weixin", "wx", "WX", "Weixin", "WeiXin"].includes(name)) {
      _name = "Wechat.app";
    }
    if (["QQ", "qq", "Qq"].includes(name)) {
      _name = "QQ";
    }
    if (["vscode", "VSC", "vsc", "code"].includes(name)) {
      _name = "'Visual Studio Code.app'";
    }
    if (["google", "GC"].includes(name)) {
      _name = "'Google Chrome.app'";
    }
    if (["edge", "MSE", "MSC"].includes(name)) {
      _name = "'Microsoft Edge.app'";
    }
    if (["snipaste", "snp"].includes(name)) {
      _name = "Snipaste.app";
    }
    if (["NEM", "nem", "wyymusic"].includes(name)) {
      _name = "NeteaseMusic.app";
    }
    if (["QQM", "qqm", "qqmusic"].includes(name)) {
      _name = "QQMusic.app";
    }
    if (["wps", "WPS"].includes(name)) {
      _name = "wpsoffice.app";
    }
    if (["termius", "term"].includes(name)) {
      _name = "Termius.app";
    }
    if (_name) {
      child_process.exec("cd /Applications && open " + _name);
    } else {
      console.log("gxk: app not find!!!");
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const {
  name: name$1,
  version: version$1,
  author: author$1
} = packageJSON;
const handlerMap$1 = {
  "--name": name$1,
  "-N": name$1,
  "-n": name$1,
  "--version": version$1,
  "-V": version$1,
  "-v": version$1,
  "--author": author$1,
  "--update": update,
  "-U": update,
  "-u": update,
  "--open": open,
  "-O": open,
  "-o": open
};
const option$1 = process.argv[2];
const argvs$1 = process.argv.slice(3);
const handler$1 = handlerMap$1[option$1];
if (handler$1) {
  if (handler$1 instanceof Function) {
    handler$1(argvs$1);
  } else {
    console.log(handler$1);
  }
}

const {
  name,
  version,
  author
} = packageJSON;
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
  "-u": update
};
const option = process.argv[2];
const argvs = process.argv.slice(3);
const handler = handlerMap[option];
if (handler) {
  if (handler instanceof Function) {
    handler(argvs);
  } else {
    console.log(handler);
  }
}
