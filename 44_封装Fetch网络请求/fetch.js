
function formator(data){
    var dataStr = ""
    Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
    })
    if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.length - 1);
    }
    return dataStr
}



async function ajax(url = "",type = "GET",data = {}){
    // GET请求  url?username=iwen&password=123
    if(type === "GET"){
        var dataStr = formator(data);
        url = url +"?"+ dataStr;
    }

    let requestConfig = {
        method:type,
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }

    // POST请求
    if(type === "POST"){
        requestConfig.body = formator(data);
        // 拦截对象，为对象增加新的属性
        // 在ES6中，我们不推荐直接为一个对象增加新属性的时候使用赋值方式
        // Object.defineProperty(requestConfig,"body",{
        //     value:formator(data)
        // })
    }

    let response = await fetch(url,requestConfig)
    response = await response.json();
    return response;
}