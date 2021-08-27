# Sancho Vue3 Seed

[English][(README.md) | 中文

## 概述

Sancho Vue3 Seed 的目的是为 Web 项目初始化提供一个开箱即用的脚手架。这是一个不含任何UI组件库的轻量脚手架，但是预装并配置了以下常用库：

- Vue Router v4

- 基于 Vuex v4 的状态管理 

- 国际化组件

- Axios 函数包装

- Mock Server 可用

- 装配为 Vue 全局对象的常用函数库  

- 多种开发和打包模式

同时我们还提供一些额外的基础函数库以及经过业务实践的编码约定：

- 常用基础函数 

  如 deepClone 等等

- 多种生命周期钩子  

  如在 axios 请求前后的钩子等等 

- 全局配置档 

基于 Sancho Vue3 Seed, 你可以很容易地初始化你的项目。你剩下要做的就是选择一个你喜欢的UI组件库，或者你自己来。

## 安装与运行

```
# 安装
npm install

# 基于 Mock Server 开发
npm run dev

# 基于真实代理服务开发
npm run dev:online

# 阶段打包
npm build:stage

# 生产打包
npm build
```

## 链接

[Vite](https://vitejs.dev/)  [Vuex](https://next.vuex.vuejs.org/)
