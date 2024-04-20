// 1. 获取到页面所有的元素
var lis = document.querySelector(".up").querySelectorAll("li");
var divs = document.querySelector(".down").querySelectorAll("div");

// 闭包帮我们保存变量到内存中
for(let i = 0;i<lis.length;i++){
    lis[i].onmouseenter = function(){
        for(var j = 0;j<lis.length;j++){
            lis[j].removeAttribute("class");
            divs[j].removeAttribute("class")
        }
        lis[i].setAttribute("class","select")
        divs[i].setAttribute("class","div-select")
    }
}


// for(var i = 0;i<lis.length;i++){
//     (function(i){
//         lis[i].onmouseenter = function(){
//             for(var j = 0;j<lis.length;j++){
//                 lis[j].removeAttribute("class");
//                 divs[j].removeAttribute("class")
//             }
//             lis[i].setAttribute("class","select")
//             divs[i].setAttribute("class","div-select")
//         }
//     }(i))
// }
/**
 * 1. 获取元素
 * 2. 闭包
 * 3. 事件：鼠标滑动事件
 * 4. 属性的操作：添加、删除
 */