(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff57ddee"],{"064b":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"08ba":function(t,e,a){var n=a("d890"),r=a("064b"),i=a("3c10"),o=a("0fc1");for(var c in r){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(f){u.forEach=i}}},"0f38":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("van-swipe",{staticClass:"menu-swipe",staticStyle:{height:"250px"},attrs:{autoplay:6e3,"indicator-color":"#ffffff"}},t._l(t.bannerData,(function(t,e){return a("van-swipe-item",{key:e},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bannerImg,expression:"item.bannerImg"}],staticClass:"auto-img",attrs:{alt:""}})])})),1),a("div",{staticClass:"menu-content"},[a("div",{staticClass:"aside-menu fl"},[t._l(t.typeData,(function(e,n){return a("div",{key:n,ref:"item"+n,refInFor:!0,staticClass:"item",class:{active:e.isActive},on:{click:function(a){return t.toggleAsideMenu(e,n)}}},[t._v(t._s(e.typeDesc))])})),a("div",{staticClass:"line",style:{top:t.top+"px"}})],2),a("div",{staticClass:"content fl clearfix"},t._l(t.productData,(function(e,n){return a("div",{key:n,staticClass:"fl content-item",class:[n%2==0?"left":"right"],on:{click:function(a){return t.goDetail(e.pid)}}},[a("div",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.smallImg,expression:"item.smallImg"}],staticClass:"auto-img",attrs:{alt:""}})]),a("div",{staticClass:"pro-name one-text"},[t._v(t._s(e.name))]),a("div",{staticClass:"pro-enname one-text"},[t._v(t._s(e.enname))]),a("div",{staticClass:"pro-price"},[t._v("￥"+t._s(e.price))])])})),0)])],1)},r=[],i=(a("fe59"),a("08ba"),a("f3dd"),a("dbb3"),a("b73f"),a("bf84"),a("fe8a"),a("9bef"));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a("2267");var s=a("9f3a"),u=Object(s["a"])("menuModule"),f=u.mapState,l=u.mapMutations,p={data:function(){return{bannerData:[],typeData:[],top:0,productData:[]}},created:function(){this.getBannerData(),this.getTypeData(),this.getProductByType({type:"isHot"}),this.moveLine()},computed:c({},f(["bannerDataCache","typeDataCache","products","height"])),methods:c(c({},l(["changeData","changeProducts"])),{},{moveLine:function(){for(var t=0;t<this.typeData.length;t++)if(this.typeData[t].isActive)return void(this.top=t*this.height)},getBannerData:function(){var t=this;this.bannerDataCache.length>0?this.bannerData=this.bannerDataCache:(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(e){t.$toast.clear(),300==e.data.code&&(t.bannerData=e.data.result,t.changeData({key:"bannerDataCache",value:e.data.result}))})).catch((function(e){t.$toast.clear()})))},getTypeData:function(){var t=this;this.typeDataCache.length>0?this.typeData=this.typeDataCache:(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/type",params:{appkey:this.appkey}}).then((function(e){t.$toast.clear(),400==e.data.code&&(e.data.result.forEach((function(t){t.isActive=!1})),e.data.result.unshift({type:"isHot",typeDesc:"最新推荐",isActive:!0}),t.typeData=e.data.result,t.$nextTick((function(){var e=t.$refs.item0[0].clientHeight;t.changeData({key:"height",value:e})})),t.changeData({key:"typeDataCache",value:e.data.result}))})).catch((function(e){t.$toast.clear()})))},toggleAsideMenu:function(t,e){if(!t.isActive){for(var a=0;a<this.typeData.length;a++)if(this.typeData[a].isActive){this.typeData[a].isActive=!1;break}t.isActive=!0,this.top=this.height*e,this.getProductByType(t)}},getProductByType:function(t){var e=this;if(this.products[t.type])this.productData=this.products[t.type];else{this.productData=[];var a={appkey:this.appkey,key:"type",value:t.type};"isHot"==t.type&&(a.key="isHot",a.value=1),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/typeProducts",params:a}).then((function(a){e.$toast.clear(),500==a.data.code&&(e.productData=a.data.result,e.changeProducts({type:t.type,value:a.data.result}))})).catch((function(t){e.$toast.clear()}))}},goDetail:function(t){this.$router.push({name:"Detail",query:{pid:t}})}})},d=p,h=a("9ca4"),y=Object(h["a"])(d,n,r,!1,null,"76eed05c",null);e["default"]=y.exports},2267:function(t,e,a){},"3c10":function(t,e,a){"use strict";var n=a("5dfd").forEach,r=a("d7e1"),i=a("ff9c"),o=r("forEach"),c=i("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4350:function(t,e,a){var n=a("90fb");e.f=n},"6d51":function(t,e,a){var n=a("1b99"),r=a("faa8"),i=a("4350"),o=a("d910").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||o(e,t,{value:i.f(t)})}},"9bef":function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))},b73f:function(t,e,a){var n=a("1c8b"),r=a("efe2"),i=a("da10"),o=a("aa6b").f,c=a("1e2c"),s=r((function(){o(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},bf84:function(t,e,a){var n=a("1c8b"),r=a("1e2c"),i=a("8d44"),o=a("da10"),c=a("aa6b"),s=a("1bbd");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=o(t),r=c.f,u=i(n),f={},l=0;while(u.length>l)a=r(n,e=u[l++]),void 0!==a&&s(f,e,a);return f}})},c051:function(t,e,a){var n=a("da10"),r=a("b338").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?c(t):r(n(t))}},d7e1:function(t,e,a){"use strict";var n=a("efe2");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},f3dd:function(t,e,a){"use strict";var n=a("1c8b"),r=a("d890"),i=a("6d7a"),o=a("9b9d"),c=a("1e2c"),s=a("c54b"),u=a("74cb"),f=a("efe2"),l=a("faa8"),p=a("74e7"),d=a("a719"),h=a("857c"),y=a("3553"),b=a("da10"),g=a("9f67"),v=a("38b9"),m=a("6d60"),D=a("cbab"),O=a("b338"),w=a("c051"),S=a("0a60"),C=a("aa6b"),k=a("d910"),P=a("ef71"),j=a("0fc1"),L=a("1944"),T=a("6d28"),E=a("7db2"),x=a("d5a8"),A=a("7e8b"),M=a("90fb"),$=a("4350"),_=a("6d51"),N=a("27b5"),G=a("b702"),H=a("5dfd").forEach,I=E("hidden"),V="Symbol",B="prototype",F=M("toPrimitive"),z=G.set,J=G.getterFor(V),R=Object[B],q=r.Symbol,Q=i("JSON","stringify"),W=C.f,K=k.f,U=w.f,X=P.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),at=T("wks"),nt=r.QObject,rt=!nt||!nt[B]||!nt[B].findChild,it=c&&f((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,a){var n=W(R,e);n&&delete R[e],K(t,e,a),n&&t!==R&&K(R,e,n)}:K,ot=function(t,e){var a=Y[t]=m(q[B]);return z(a,{type:V,tag:t,description:e}),c||(a.description=e),a},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,a){t===R&&st(Z,e,a),h(t);var n=g(e,!0);return h(a),l(Y,n)?(a.enumerable?(l(t,I)&&t[I][n]&&(t[I][n]=!1),a=m(a,{enumerable:v(0,!1)})):(l(t,I)||K(t,I,v(1,{})),t[I][n]=!0),it(t,n,a)):K(t,n,a)},ut=function(t,e){h(t);var a=b(e),n=D(a).concat(ht(a));return H(n,(function(e){c&&!lt.call(a,e)||st(t,e,a[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=g(t,!0),a=X.call(this,e);return!(this===R&&l(Y,e)&&!l(Z,e))&&(!(a||!l(this,e)||!l(Y,e)||l(this,I)&&this[I][e])||a)},pt=function(t,e){var a=b(t),n=g(e,!0);if(a!==R||!l(Y,n)||l(Z,n)){var r=W(a,n);return!r||!l(Y,n)||l(a,I)&&a[I][n]||(r.enumerable=!0),r}},dt=function(t){var e=U(b(t)),a=[];return H(e,(function(t){l(Y,t)||l(x,t)||a.push(t)})),a},ht=function(t){var e=t===R,a=U(e?Z:b(t)),n=[];return H(a,(function(t){!l(Y,t)||e&&!l(R,t)||n.push(Y[t])})),n};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),a=function(t){this===R&&a.call(Z,t),l(this,I)&&l(this[I],e)&&(this[I][e]=!1),it(this,e,v(1,t))};return c&&rt&&it(R,e,{configurable:!0,set:a}),ot(e,t)},L(q[B],"toString",(function(){return J(this).tag})),L(q,"withoutSetter",(function(t){return ot(A(t),t)})),P.f=lt,k.f=st,C.f=pt,O.f=w.f=dt,S.f=ht,$.f=function(t){return ot(M(t),t)},c&&(K(q[B],"description",{configurable:!0,get:function(){return J(this).description}}),o||L(R,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),H(D(at),(function(t){_(t)})),n({target:V,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var a=q(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(y(t))}}),Q){var yt=!s||f((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,a){var n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),r[1]=e,Q.apply(null,r)}})}q[B][F]||j(q[B],F,q[B].valueOf),N(q,V),x[I]=!0},fe59:function(t,e,a){"use strict";var n=a("1c8b"),r=a("3c10");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},fe8a:function(t,e,a){var n=a("1c8b"),r=a("3553"),i=a("cbab"),o=a("efe2"),c=o((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(r(t))}})}}]);
//# sourceMappingURL=chunk-ff57ddee.488294f9.js.map