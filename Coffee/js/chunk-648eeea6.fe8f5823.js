(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-648eeea6"],{"064b":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"08ba":function(t,e,a){var i=a("d890"),r=a("064b"),s=a("3c10"),o=a("0fc1");for(var n in r){var c=i[n],d=c&&c.prototype;if(d&&d.forEach!==s)try{o(d,"forEach",s)}catch(l){d.forEach=s}}},"3c10":function(t,e,a){"use strict";var i=a("5dfd").forEach,r=a("d7e1"),s=a("ff9c"),o=r("forEach"),n=s("forEach");t.exports=o&&n?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"68d9":function(t,e,a){},bf82:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("van-nav-bar",{attrs:{title:"我的订单"}}),t.isLogin?a("div",[a("van-tabs",{attrs:{sticky:!0,color:"#C3985B","line-height":"2","title-active-color":"#C3985B"},on:{change:t.selectOrderStatus},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabContent,(function(e,i){return a("van-tab",{key:i,attrs:{title:e.title,name:e.name}},[a("div",{staticClass:"order-content"},[a("div",{staticClass:"order-items"},t._l(t.orderNos,(function(e,i){return a("div",{key:i,staticClass:"order-item"},[a("div",{staticClass:"order-item-title"},[a("div",{staticClass:"fl order-no"},[t._v(t._s(e))]),2==t.orderData[e].status?a("div",{staticClass:"fr"},[a("span",{staticClass:"confirm fl"},[t._v("已收货")]),a("span",{staticClass:"delete fl",on:{click:function(a){return t.removeOrder(e)}}},[a("van-icon",{staticClass:"delete-icon",attrs:{name:"delete"}})],1)]):a("div",{staticClass:"fr"},[a("span",{staticClass:"confirm",on:{click:function(a){return t.recieve(e)}}},[t._v("确认收货")])])]),a("div",t._l(t.orderData[e].data,(function(e,i){return a("div",{key:i,staticClass:"items"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"fl pro-img"},[a("img",{staticClass:"auto-img",attrs:{src:e.smallImg,alt:""}})]),a("div",{staticClass:"fl pro-info"},[a("div",{staticClass:"fl"},[a("div",{staticClass:"names"},[a("div",{staticClass:"zh-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"en-name"},[t._v(t._s(e.enname))])]),a("div",{staticClass:"rule"},[t._v(t._s(e.rule))])]),a("div",{staticClass:"fr"},[a("div",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),a("div",{staticClass:"count"},[t._v("x"+t._s(e.count))])])])])])})),0),a("div",{staticClass:"order-total clearfix"},[a("div",{staticClass:"order-date fl"},[t._v(t._s(t._f("formatDate")(t.orderData[e].date,"yyyy-MM-dd hh:mm:ss")))]),a("div",{staticClass:"fr clearfix"},[a("span",{staticClass:"fl total-count"},[t._v("共计 "+t._s(t.orderData[e].count)+" 件商品 合计：")]),a("span",{staticClass:"fl total-price"},[t._v("￥"+t._s(t.orderData[e].total))])])])])})),0)]),0==t.orderNos.length?a("van-empty",{attrs:{description:"没有订单数据"}}):t._e()],1)})),1)],1):a("div",[a("van-empty",{attrs:{description:"没有订单数据"}})],1)],1)},r=[],s=(a("fe59"),a("ecb4"),a("ea69"),a("08ba"),a("68d9"),{data:function(){return{isLogin:!1,tabContent:[{title:"全部",name:"0"},{title:"待收货",name:"1"},{title:"已收货",name:"2"}],activeName:"0",isRecieve:!1,orderNos:[],orderData:{}}},created:function(){localStorage.getItem("__Tk")&&(this.isLogin=!0,this.getOrderProduct())},methods:{selectOrderStatus:function(t){this.getOrderProduct()},getOrderProduct:function(){var t=this,e=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findOrder",params:{appkey:this.appkey,tokenString:e,status:this.activeName}}).then((function(e){if(t.$toast.clear(),7e4==e.data.code){e.data.result.sort((function(t,e){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()}));var a=[];e.data.result.forEach((function(t){-1===a.indexOf(t.oid)&&a.push(t.oid)})),t.orderNos=a;var i={};e.data.result.forEach((function(t){i[t.oid]?(i[t.oid].count+=t.count,i[t.oid].total+=t.count*t.price,i[t.oid].data.push(t)):i[t.oid]={data:[t],status:t.status,date:t.createdAt,count:t.count,total:t.count*t.price}})),t.orderData=i}})).catch((function(e){t.$toast.clear()}))},recieve:function(t){var e=this,a=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/receive",data:{appkey:this.appkey,tokenString:a,oid:t}}).then((function(a){if(e.$toast.clear(),8e4==a.data.code&&(e.orderData[t].status=2,1==e.activeName)){var i=e.orderNos.indexOf(t);e.orderNos.splice(i,1)}})).catch((function(t){e.$toast.clear()}))},removeOrder:function(t){var e=this,a=localStorage.getItem("__Tk");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/removeOrder",data:{appkey:this.appkey,tokenString:a,oid:t}}).then((function(a){if(e.$toast.clear(),9e4==a.data.code){var i=e.orderNos.indexOf(t);e.orderNos.splice(i,1)}})).catch((function(t){e.$toast.clear()}))}}}),o=s,n=a("9ca4"),c=Object(n["a"])(o,i,r,!1,null,null,null);e["default"]=c.exports},d7e1:function(t,e,a){"use strict";var i=a("efe2");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},ea69:function(t,e,a){"use strict";var i=a("1c8b"),r=a("e1d6"),s=a("3da3"),o=a("d88d"),n=a("3553"),c=a("1ca1"),d=a("1bbd"),l=a("1ea7"),f=a("ff9c"),u=l("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!v},{splice:function(t,e){var a,i,l,f,u,v,C=n(this),S=o(C.length),_=r(t,S),L=arguments.length;if(0===L?a=i=0:1===L?(a=0,i=S-_):(a=L-2,i=m(h(s(e),0),S-_)),S+a-i>p)throw TypeError(g);for(l=c(C,i),f=0;f<i;f++)u=_+f,u in C&&d(l,f,C[u]);if(l.length=i,a<i){for(f=_;f<S-i;f++)u=f+i,v=f+a,u in C?C[v]=C[u]:delete C[v];for(f=S;f>S-i+a;f--)delete C[f-1]}else if(a>i)for(f=S-i;f>_;f--)u=f+i-1,v=f+a-1,u in C?C[v]=C[u]:delete C[v];for(f=0;f<a;f++)C[f+_]=arguments[f+2];return C.length=S-i+a,l}})},ecb4:function(t,e,a){"use strict";var i=a("1c8b"),r=a("45af").indexOf,s=a("d7e1"),o=a("ff9c"),n=[].indexOf,c=!!n&&1/[1].indexOf(1,-0)<0,d=s("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!d||!l},{indexOf:function(t){return c?n.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},fe59:function(t,e,a){"use strict";var i=a("1c8b"),r=a("3c10");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})}}]);
//# sourceMappingURL=chunk-648eeea6.fe8f5823.js.map