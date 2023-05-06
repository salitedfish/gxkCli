# git repository

https://github.com/salitedfish/gxkCli

# scripts 变量

windows：%npm_package_config_dist%  
mac：$npm_package_config_dist

# useage

pnpm install @ultra-man/gxk -g

# 调试

- 链接到全局  
  pnpm link --global
- 使用全局包  
  pnpm link --global @ultra-man/gxk

# 问题

- 如何将指令#! /usr/bin/env node 添加到打包后的文件开头（fs 直接写有点暴力？）
