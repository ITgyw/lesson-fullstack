- 全排列 1.js
    递归  树
    - "重复"递归式 "自顶向下" root
    - 出口  退出条件 return
    - 分支 树形结构

字符串  abc  输出字符串所有排列的可能

随机且不重复的将 每个位置 决定放那个元素

                    root(null)  回退

        a               b               c
    b       c      a         c      a        b
    c       b      c         a      b        c   退出条件

- 最小栈 2.js
实现一个栈， 带有pop出栈， push 入栈， getMin方法 O(1)
 O(n) => O(1)  空间换时间  i
 push i 最小值
 指针变量 i 最小值 ， 出栈
 空间换时间  双栈
 

