function hack_referer_header(e){var r="";-1!=e.url.indexOf("://music.163.com/")&&(r="http://music.163.com/"),-1!=e.url.indexOf(".xiami.com/")&&(r="http://m.xiami.com/"),-1==e.url.indexOf("y.qq.com/")&&-1==e.url.indexOf("qqmusic.qq.com/")&&-1==e.url.indexOf("music.qq.com/")&&-1==e.url.indexOf("imgcache.qq.com/")||(r="http://y.qq.com/");for(var m=!1,c=e.requestHeaders,i={},u=0,a=c.length;u<a;++u)if("Referer"==c[u].name&&""!=r){c[u].value=r,m=!0;break}return m||""==r||c.push({name:"Referer",value:r}),i.requestHeaders=c,i}chrome.webRequest.onBeforeSendHeaders.addListener(hack_referer_header,{urls:["*://music.163.com/*","*://*.xiami.com/*","*://*.qq.com/*"]},["requestHeaders","blocking"]);