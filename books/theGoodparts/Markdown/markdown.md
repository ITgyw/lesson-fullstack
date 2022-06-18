# The Good Parts

## 对象

### JS数据类型
     - 简单类型
         1. 数值类型 number   JS 只有数值类型，JS 不太适合复杂数据运算
             JS处理小数时不够精确

         2. 字符串类型 string   "  '' JS不严格

         3. undefined 
             - JS弱类型，声明变量可以不指定具体类型
             - JS变量的类型由值决定， 变量类型可变的
             - 变量声明之后，赋值之前， 类型为undefined 
         4. 布尔值
            boolean true false
         5. null

     - 复杂数据类型
        复杂的就是对象 Object
### JS 语言关键字
    let 变量
    const 常量
    typeof 获取变量或常量的数据类型
***
# Markdown 链接

### 链接使用方法如下：

        - [链接名称]（链接地址）
            或者
          <链接地址> 
### 例如：
        - 这是一个链接 [菜鸟教程]（https://www.runoob.com)
### 直接使用链接地址：
        - <https://www.runoob.com>

# 高级链接

### 我们可以通过变量来设置一个链接，变量赋值在文档末尾进行：
  
        - 这个链接用 1 作为网址变量 [Google][1]
          这个链接用 runoob 作为网址变量 [Runoob][runoob]
          然后在文档的结尾为变量赋值（网址）

             [1]： http://www.google.com/
             [runoob]: http://www.runoob.com/
***

# Markdown 图片

### Markdown 图片语法格式如下：
       - ！[alt 属性文本]（图片地址）
         ！[alt 属性文本]（图片地址 "可选标题"）

       - 这个链接1 作为网址变量 [RUNOOB][1]
         然后在文档的结尾为变量赋值（网址）
### Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签。 
       -img src="http://static.runoob.com/images/runoob-logo.png" width="50%">

***
# Markdown 表格

### Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。
### 语法格式如下：
       - |  表头   | 表头  |
         |  ----  | ----  |
         | 单元格  | 单元格 |
         | 单元格  | 单元格 |
### 对齐方式：
       - | 左对齐 | 右对齐 | 居中对齐 |
         | :-----| ----: | :----: |
         | 单元格 | 单元格 | 单元格 |
         | 单元格 | 单元格 | 单元格 | 
***




        