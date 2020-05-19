# Lab8设计文档

19302010015 许同樵

## 1、任务一

主要使用了与child相关的方法，用于获取同一元素下的某个元素，其中包括：

previousElementSibling：获取父元素的上一个元素

nextElementSibling：获取父元素的下一个元素

firstElementChild：获取父元素的第一个元素

lastElementChild：获取父元素的最后一个元素

其中点击向右的按钮的函数被命名，并在第二个任务中复用。

## 2、任务二

主要是复用了任务一中的点击按钮调用的方法。关于定时使用了两个函数：

setInterval(function,perms) 每perms毫秒执行一次function

createInterval(interval) 关闭interval的循环

## 3、任务三

由于通过child相关的方法实现过于困难，这里还是使用了document下的getElementsByTagName来获取元素组。

使用循环设置直接跳转图片的方法即可

## 4、任务四

使用了Jquery

设置了‘td’的点击方法，点击后将td内的内容改为一个input元素，给予焦点，并设置input的blur方法。

值得注意的是input的blur方法内的选择器要使用input.parent()，因为这里的this已经变为了input。