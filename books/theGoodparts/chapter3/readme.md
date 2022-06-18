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
# 3.1 对象字面量
### 一个对象字面量就是包围在花括号里的零或多个"名/值"：
    - var empty_object = {};
      var stooge = {
          "first name":"hu",
          "last name":"houbin"
      };      
      逗号用来分割多个名/值的。
### 属性名
    - 可以是包括空字符串在内的任何字符串。在对象字面盘中，如果属性名是一个合法的 JavaScript标识符且不是保留字，并不强制要求用引号括住属性名。所以用引号括住"first-name"是必须的，但是否括住 first_name 则是可选的。逗号用来分隔多个“名值”对。
### 属性的值可以从包括另一个对象字面量在内的任意表达式中获得。对象是可嵌套的:

    - var flight ={
        airline: "oceanic",
        number: 815,
        departure: {
             IATA:"SYD",
             time: "2004-09-2214:55",
             city: "Sydney"
             },
        arrival: {
             IATA:"LAX",
             time:"2004-09-23 10:42",
             city: "Los Angeles"
            }
       };
***
# 3.2检索
### 检索对象中包含的值
    1. stooge[ "first-name" ]    //"Joe"
    2. flight.departure. IATA    //"sYD"
    3. 如果你尝试检索一个并不存在的成员元素的值,将返回一个undefined 值。
    4. Il运算符可以用来填充默认值:
       var middle = stooge [ "middle-name"] I" (none)";var status = flight.status I "unknown";
    5. 尝试检索一个undefined值将会导致TypeError 异常。这可以通过s&运算符来避免错误。
***
# 3.3 更新
### 对象中的值可以通过赋值语句来更新。
    stooge[ 'first-name' ] = 'Jerome' ;
    stooge[ 'first-name' ] = 'Jere' ; //更新
### 如果对象之前并没有拥有那个属性名,那么该属性就被扩充到该对象中。
    stooge[ 'middle-name' ]='Lester';
    stooge.nickname = 'Curly';
    middle-name添加到stooge中。
***

# 3.4 引用
    var x= stooge;
    x.nickname='Curly';
    var nick=stooge.nickname;  
       //因为x和stooge是指向同一个对象的引用、所以nick为 'curly'
***
# 3.5 原型
   每个对象都连接到一个原型对象，并他可以从中继承属性。当你创建一个新对象时，你可以选择某个对象作为它的原型。我们将给Object增加一个beget方法。这个beget方法创建一个使用原对象作为其原型的新对象。
   if (typeof Object.beget !== ' function'){
       object.beget = function (0) {
               var =function() {};
               F.prototype =0;
               return new F ();
       };
   }
   var another_stooge = Object.beget (stooge) ;

***
# 3.6 反射
### 原因
    1. 通过typeof检索该属性并验证取得的值确定对象属性
    eg：typeof flight.number   // 'number'
        typeof flight.status   // 'srting'
    2.原型链中的任何属性也会产生一个值：
    eg： typeof flight.tostring  // ' function '
         typeof flight.constructor // 'function'
### 去除属性的方法
    1. 第一个是让你的程序检查并剔除函数值。
    2. 另一个方法是使用hasOwnProperty方法，如果对象拥有独有的属性，它将返回true,hasOwnProperty方法不会检查原型链。
        flight.hasownProperty('number')  //true
        flight.hasOwnProperty ( 'constructor')   // false
***
# 3.7 枚举
### 遍历一个对象中的所有属性名
    最好的方法是避免使用for in语句而是创建一个数组用for语句
    var i;
    var properties ={
        'first-name',
        ' middle-name'，
        ' last-name' ,
        'profession'
    };
    for (i=0;i< properties.length; i += 1){
         document.writeln(properties[i] + ':' +
            another_stooge[properties[i]]);
    }
***
# 3.8 删除
### delete
    delete运算符可以用来删除对象的属性。它将会移除对象中确定包含的属性。它不会触及原型链中的任何对象。
    删除对象的属性可能会让来自原型链中的属性浮现出来:
    another_stooge.nickname  // 'Moe'   
    //删除another_stooge的nickname属性，从而暴露出原型的nickname属性
    delete another_stooge.nickname;
     another_stooge.nickname  // 'curly'





 
   


    

       





     

