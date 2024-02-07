## EditorConfig

**项目根目录创建 .editorconfig 文件**

```js
# https://editorconfig.org
root = tue

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

**配置解读**

root=true 对所有文件生效

end_of_line= lf 不同操作系统换行符不同

```js
end_of_line
lf | cr | crlf (大小写不限）
复制代码
end_of_line设置的换行符的表示方式。先看一下这几个值是什么意思

lf：全拼Line Feed，意思是换行，用符号 \n 表示
cr: 全拼Carriage Return， 意思是回车， 用符号 \r 表示
crlf：cr 和 lf的结合，回车换行，用符号 \r\n
```

insert_final_newline = true 代码最后新增一行

trim_trailing_whitespace = true 修剪尾随空格

## Prettier

**项目根目录创建 .prettierrc 文件**

```json
{
  "printWidth": 120,
  "useTabs": false,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "trailingComma": "none"
}
```

**配置解读**

- `trailingComma` ：对象的最后一个属性末尾也会添加 `,` ，比如 `{ a: 1, b: 2 }`  会格式为 `{ a: 1, b: 2, }`
- `tabWidth` ：缩进大小
- `semi` ：是否添加分号
- `singleQuote` ：是否单引号
- `jsxSingleQuote` ：jsx 语法下是否单引号。
- `endOfLine` ：与 `.editorconfig`  保持一致设置
- `printWidth` ：单行代码最长字符长度，超过之后会自动格式化换行
- `bracketSpacing` ：在对象中的括号之间打印空格， `{a: 5}`  格式化为 `{ a: 5 }`
- `arrowParens` ：箭头函数的参数无论有几个，都要括号包裹。比如 `(a) => {}` ，如果设为 `avoid` ，会自动格式化为 `a => {}`

## ESLint

#### 配置语法

```js
module.exports = {
  parser: {}, // 解析器
  extends: [], // 继承的规则 [扩展]
  plugins: [], // 插件
  rules: {}, // 规则
}
```

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'error', // 禁止使用console
    'no-unused-vars': 'error', // 禁止定义未使用的变量
    'no-debugger': 'error', // 禁止使用debugger
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
  },
}
```

#### Prettier 和 ESLint 冲突问题

安装插件 eslint-plugin-prettier eslint-config-prettier

```bash
npm install eslint-plugin-prettier eslint-config-prettier -D
```

- `eslint-config-prettier` 的作用是关闭 eslint 中与 prettier 相互冲突的规则。
- `eslint-plugin-prettier` 的作用是赋予 eslint 用 prettier 格式化代码的能力。

安装依赖并修改.eslintrc 文件
prettier 添加到 extends 的最后

```js
"extends": [ …, “plugin:prettier/recommended”]
```
