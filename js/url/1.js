// https:// 协议  security 更加安全的http 
// www.wc.com   域名  好记 ->   ip
// /login path 
// 查询参数  ?
// parse 解析
function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1];
    // console.log(paramsStr);
    const paramsArr = paramsStr.split('&');
    // console.log(paramsArr)
    let paramsObj = {};
    paramsArr.forEach(param => {
        if (/=/.test(param)) {
            let [key, val] = param.split('=');
            // prototype. hasOwnproperty false
            if (paramsObj.hasOwnProperty(key)) {
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else {
                val = decodeURIComponent(val)
                if (/^\d+$/.test(val)) {
                    val = parseInt(val)
                }
                paramsObj[key] = val
            }

            // [2, true]
        } else {

            paramsObj[param] = true
        }
    })
    // {
    //     a:1,
    //     b:2,
    //     3:3
    // }
    return paramsObj;
}
// URL 安全性
let url = 'https://www.wc.com/login?a=1&b=2&c=3&d&b=4&name=文长';
console.log(parseParam(url));
// 解析URL 参数到一个对象中