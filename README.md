# 部门前端项目模版

## 技术栈

* Vue3
* Vite5
* Vue-router
* Pinia: 状态管理工具
* eslint/commitlint/stylelint/prettier/: 代码规范和格式化插件

## 安装使用

### 安装依赖

```bash
pnpm install
```

### 运行项目

```bash
pnpm dev
```

### 打包项目

```bash
# 打包开发环境
pnpm build:development 
# 打包测试环境
pnpm build:test 
# 打包生产环境
pnpm build:production 
```

### 代码提交

* 项目配置了 `commitlint` 和 `husky`，提交代码时会自动检查提交信息是否符合规范；如果提交信息不符合规范，提交会失败，需要修改后重新提交
  * 提交信息格式：`<type>(<scope>): <subject>`，例如：`feat(login): add login page`
  * `type` 可选值：`feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`chore`、`revert`
  * `scope` 用于描述修改的范围，例如：`login`、`home`、`common` 等
  * `subject` 用于描述修改的内容
  * `type`和`subject`中间可添加对应的emoji图标，例如：`feat(login): :sparkles: add login page`

* 且项目配置 `cz-git` 插件
  * 可通过以下命令进行交互式写入提交信息  

```bash
pnpm commit
```

* 实在不想按照规范提交，可以使用以下命令提交(但不推荐)

```bash
git commit --no-verify -m "your commit message" 
```

## Recommend

* 推荐使用 [`Vuetify`](https://vuetifyjs.com/zh-Hans/) 组件库
  * 使用其他组件库需自行配置
