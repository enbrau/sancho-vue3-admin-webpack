# Sancho Vue3 Admin

一套基于 Vue3 与 ElementPlus 的管理系统脚手架，主要参考 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)，并在此基础上增加了两个特性：模块代码扫描导入 与 自动加载多入口。

## 特性介绍

### 模块代码扫描导入

在开发过程中， Router、Vuex Storage、I18n 等往往采用添加自定义模块文件，再在主文件中引入（或者还有更多的侵入性操作）。这里我们改为主文件扫描引入自定义模块文件的方式，目的是为了未来脚手架新增特性，项目可以更方便地直接覆盖升级。

### 自动加载多入口

很多项目往往需要多入口，这里我们也是通过自动扫描装载的方式：只要按规则新增入口文件，无需更改配置，就可以新增入口。项目中除了主入口外，自带一个移动端入口，UI库采用的是Vant。

## 命令

```
# 安装：
npm install

# 开发：
# 1. 独立开发：以前端内嵌测试桩方式独立开发功能
npm run dev
# 2. 联机开发：通过后端服务测试环境联机开发功能
npm run dev:online

# 打包：
1. 测试环境
npm run build:stage
2. 生成环境
npm run build:prod
```

## 参考文档

- [Vue3 文档](https://vue3js.cn/docs/zh/) 
- [ElementPlus](https://element-plus.gitee.io/#/zh-CN/component/installation) 
- [Dayjs](https://dayjs.gitee.io/docs/zh-CN/installation/installation)
- [mitt](https://github.com/developit/mitt)