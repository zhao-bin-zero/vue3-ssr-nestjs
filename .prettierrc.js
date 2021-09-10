// 解决代码风格问题
module.exports = {
  trailingComma: 'none', // 多行时尽可能打印尾随逗号
  printWidth: 130, // 限制每行字符个数
  bracketSpacing: true, // 在对象文字中的括号之间打印空格
  arrowParens: 'always', // 始终给箭头函数的参数加括号
  tabWidth: 2, // 指定每个缩进级别的空格数
  semi: true, // 在语句末尾打印分号
  singleQuote: true, // 使用单引号而不是双引号
  jsxBracketSameLine: true,
  endOfLine: "lf" // 检测换行符类型，如果出现大量换行符报错，可以修改为auto不检测
};
