(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f441d540"],{"65f0":function(t,o,i){var e=i("861d"),a=i("e8b5"),s=i("b622"),n=s("species");t.exports=function(t,o){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?e(i)&&(i=i[n],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===o?0:o)}},"82af":function(t,o,i){},"857a4":function(t,o,i){var e=i("1d80"),a=/"/g;t.exports=function(t,o,i,s){var n=String(e(t)),r="<"+o;return""!==i&&(r+=" "+i+'="'+String(s).replace(a,"&quot;")+'"'),r+">"+n+"</"+o+">"}},9911:function(t,o,i){"use strict";var e=i("23e7"),a=i("857a4"),s=i("af03");e({target:"String",proto:!0,forced:s("link")},{link:function(t){return a(this,"a","href",t)}})},"9fa9":function(t,o,i){"use strict";i.r(o);var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"bookshelf"},[i("van-nav-bar",{staticClass:"van-head",attrs:{title:"书架"},scopedSlots:t._u([{key:"left",fn:function(){return[i("div",{staticClass:"fl title-logo"})]},proxy:!0},{key:"right",fn:function(){return[i("van-icon",{attrs:{name:"wap-home",size:"20"},on:{click:function(o){return t.toggleTabBar("Bookmall")}}})]},proxy:!0}])}),i("div",{staticClass:"bookshelf-box"},[i("div",{staticClass:"clearfix bookshelf-box-t",class:t.isLeft?"left":"right"},[i("div",{staticClass:"bookshelf-box-title fl",class:t.isActive?"active":"",on:{click:t.my}},[t._v("我的书架")]),i("div",{staticClass:"fl"},[t._v("|")]),i("div",{staticClass:"bookshelf-box-title fr",class:t.isActive?"":"active",on:{click:t.history}},[t._v("阅读记录")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"bookshelf-books"},t._l(t.getbooksData,(function(o,e){return i("div",{key:e,staticClass:"bookshelf-books-list clearfix",on:{click:function(i){return t.skidId(o._id)}}},[i("div",{staticClass:"bookshelf-books-img fl"},[i("img",{staticClass:"auto-img",attrs:{src:o.cover,alt:""}})]),i("div",{staticClass:"bookshelf-books-box fl"},[i("div",{staticClass:"bookshelf-books-title"},[t._v(t._s(o.title))]),i("div",{staticClass:"bookshelf-books-content"},[t._v("作者："+t._s(o.author))]),i("div",{staticClass:"bookshelf-books-content"},[t._v("最近更新时间"+t._s(o.updated))])]),i("div",{staticClass:"book-icons fr"},[i("van-icon",{attrs:{name:"delete",size:"20"},on:{click:function(i){return t.deleteBook(o._id)},"!click":function(t){t.stopPropagation()}}})],1)])})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],staticClass:"bookshelf-books"},t._l(t.CatalogueData,(function(o,e){return i("div",{key:e,staticClass:"bookshelf-books-list clearfix",on:{click:function(i){return t.toHistory(o.bookId,o.link,o.chapterIndex)}}},[i("div",{staticClass:"bookshelf-books-img fl"},[i("img",{staticClass:"auto-img",attrs:{src:o.img,alt:""}})]),i("div",{staticClass:"bookshelf-books-box fl"},[i("div",{staticClass:"bookshelf-books-title"},[t._v(t._s(o.title))]),i("div",{staticClass:"bookshelf-books-content"},[t._v("作者："+t._s(o.author))]),i("div",{staticClass:"bookshelf-books-content"},[t._v("最近阅读至 "+t._s(o.chapterTitle))])]),i("div",{staticClass:"book-icons fr"},[i("van-icon",{attrs:{name:"delete",size:"20"},on:{click:function(i){return t.deleteHistory(o.bookId)},"!click":function(t){t.stopPropagation()}}})],1)])})),0)]),i("div",{staticClass:"bookshelf-going",on:{click:function(o){return t.toggleTabBar("Bookmall")}}},[t._v("去书城随便逛逛")])],1)},a=[],s=(i("d81d"),i("fb6a"),i("a434"),i("9911"),i("82af"),{data:function(){return{isActive:!0,getbooksData:[],bookshelfData:[],historyData:[],isLeft:!0,CatalogueData:[],CatalogueAllData:[],urls:"",catalId:"",idLink:"",book:!0}},created:function(){this.setBookshelfData(),this.historyData=this.$store.state.readHistory},methods:{back:function(){this.$router.go(-1)},toggleTabBar:function(t){this.$router.push({name:t})},my:function(){this.isActive||(this.isActive=!0,this.isLeft=!0)},history:function(){this.isActive&&(this.isActive=!1,this.isLeft=!1,this.CatalogueData=[],this.setbookData())},skidId:function(t){for(var o=0;o<this.historyData.length;o++)if(this.historyData[o].bookId==t)return this.book=!1,void this.$router.push({name:"Readnow",query:{id:t,url:this.historyData[o].chapterId,index:this.historyData[o].index}});this.book&&this.getBookLink(t)},getDetailBookData:function(t,o,i,e){var a=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"http://novel.kele8.cn/book-info/"+t}).then((function(t){a.$toast.clear();var s="";if(t.data&&(s=t.data),s.cover=unescape(t.data.cover).slice(7),s.updated=s.updated.substr(0,10),a.isActive)a.bookshelfData.push(s);else{var n={img:s.cover,author:s.author,title:s.title,chapterTitle:o,bookId:s._id,link:i,chapterIndex:e};a.CatalogueData.push(n)}})).catch((function(t){a.$toast.clear()}))},getBookLink:function(t){var o=this;this.axios({method:"GET",url:"http://novel.kele8.cn/book-sources?view=summary&book="+t}).then((function(t){200==t.status&&(o.urls=t.data[0]._id),o.axios({method:"GET",url:"http://novel.kele8.cn/book-chapters/"+o.urls}).then((function(t){200==t.status&&(o.CatalogueAllData=t.data.chapters,o.idLink=o.CatalogueAllData[0].link,o.$router.push({name:"Readnow",query:{id:o.CatalogueAllData[0]._id,url:o.idLink,index:0}}))})).catch((function(t){}))})).catch((function(t){}))},setBookshelfData:function(){var t=this,o=JSON.parse(localStorage.getItem("BSID"));null!=o&&(o.map((function(o){t.getDetailBookData(o)})),this.getbooksData=this.bookshelfData)},deleteBook:function(t){for(var o=JSON.parse(localStorage.getItem("BSID")),i=0;i<o.length;i++)o[i]==t&&o.splice(i,1);this.bookshelfData=[],""==o&&(this.isnull=!0),localStorage.setItem("BSID",JSON.stringify(o)),this.setBookshelfData()},setbookData:function(){var t=this;null!=this.historyData&&this.historyData.map((function(o){t.getDetailBookData(o.bookId,o.chapterTitle,o.chapterId,o.index)}))},deleteHistory:function(t){for(var o=0;o<this.historyData.length;o++)if(this.historyData[o].bookId==t)return this.historyData.splice(o,1),this.CatalogueData=[],void this.setbookData()},toHistory:function(t,o,i){this.$router.push({name:"Readnow",query:{url:o,id:t,index:i}})}}}),n=s,r=i("2877"),l=Object(r["a"])(n,e,a,!1,null,null,null);o["default"]=l.exports},a434:function(t,o,i){"use strict";var e=i("23e7"),a=i("23cb"),s=i("a691"),n=i("50c4"),r=i("7b0b"),l=i("65f0"),c=i("8418"),u=i("1dde"),f=i("ae40"),h=u("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),k=Math.max,v=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,o){var i,e,u,f,h,d,g=r(this),m=n(g.length),D=a(t,m),C=arguments.length;if(0===C?i=e=0:1===C?(i=0,e=m-D):(i=C-2,e=v(k(s(o),0),m-D)),m+i-e>b)throw TypeError(p);for(u=l(g,e),f=0;f<e;f++)h=D+f,h in g&&c(u,f,g[h]);if(u.length=e,i<e){for(f=D;f<m-e;f++)h=f+e,d=f+i,h in g?g[d]=g[h]:delete g[d];for(f=m;f>m-e+i;f--)delete g[f-1]}else if(i>e)for(f=m-e;f>D;f--)h=f+e-1,d=f+i-1,h in g?g[d]=g[h]:delete g[d];for(f=0;f<i;f++)g[f+D]=arguments[f+2];return g.length=m-e+i,u}})},af03:function(t,o,i){var e=i("d039");t.exports=function(t){return e((function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},b727:function(t,o,i){var e=i("0366"),a=i("44ad"),s=i("7b0b"),n=i("50c4"),r=i("65f0"),l=[].push,c=function(t){var o=1==t,i=2==t,c=3==t,u=4==t,f=6==t,h=5==t||f;return function(d,k,v,b){for(var p,g,m=s(d),D=a(m),C=e(k,v,3),y=n(D.length),x=0,_=b||r,w=o?_(d,y):i?_(d,0):void 0;y>x;x++)if((h||x in D)&&(p=D[x],g=C(p,x,m),t))if(o)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return p;case 6:return x;case 2:l.call(w,p)}else if(u)return!1;return f?-1:c||u?u:w}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d81d:function(t,o,i){"use strict";var e=i("23e7"),a=i("b727").map,s=i("1dde"),n=i("ae40"),r=s("map"),l=n("map");e({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-f441d540.303793bb.js.map