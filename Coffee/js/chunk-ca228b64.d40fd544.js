(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca228b64"],{"94bf":function(e,t,s){},a55b:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("van-nav-bar",{staticClass:"logo-box",scopedSlots:e._u([{key:"left",fn:function(){return[s("div",{staticClass:"logo"})]},proxy:!0},{key:"right",fn:function(){return[s("van-icon",{attrs:{name:"close",size:"22"},on:{click:function(t){return e.gopage("Menu")}}})]},proxy:!0}])}),e._m(0),s("van-form",{on:{submit:e.login}},[s("van-field",{attrs:{name:"手机号",placeholder:"输入11位手机号",maxlength:"11"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),s("van-field",{attrs:{type:e.isEye?"text":"password",name:"密码",placeholder:"字母数字_组合(6-16位)","right-icon":e.isEye?"eye-o":"closed-eye",maxlength:"16"},on:{"click-right-icon":e.loginPasswordRer},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登录")])],1)],1),s("van-button",{staticClass:"register",on:{click:e.showPopup}},[e._v("注册")]),s("van-popup",{style:{height:"58%"},attrs:{closeable:"",position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[s("div",{staticClass:"register-title"},[e._v("注册")]),s("van-form",{on:{submit:e.register}},[s("van-field",{attrs:{name:"手机号",placeholder:"手机号 中国 (+86)",maxlength:"11"},model:{value:e.reguserInfo.phone,callback:function(t){e.$set(e.reguserInfo,"phone",t)},expression:"reguserInfo.phone"}}),s("van-field",{attrs:{name:"昵称",placeholder:"昵称 字母数字_组合(1-8)",maxlength:"8"},model:{value:e.reguserInfo.nickName,callback:function(t){e.$set(e.reguserInfo,"nickName",t)},expression:"reguserInfo.nickName"}}),s("van-field",{attrs:{type:e.isEye2?"text":"password",name:"密码",placeholder:"密码 以字母开头数字组合(6-16)","right-icon":e.isEye2?"eye-o":"closed-eye",maxlength:"16"},on:{"click-right-icon":e.registerPassword},model:{value:e.reguserInfo.password,callback:function(t){e.$set(e.reguserInfo,"password",t)},expression:"reguserInfo.password"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("注册")])],1)],1)],1)],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box"},[s("div",{staticClass:"box-title"},[e._v("欢迎回来！")]),s("div",{staticClass:"box-content"},[e._v("Please login to your accounts")])])}],a=(s("94bf"),s("e3a8")),r={data:function(){return{show:!1,userInfo:{phone:"",password:""},reguserInfo:{nickName:"",phone:"",password:""},isEye:!1,isEye2:!1}},methods:{showPopup:function(){this.show=!0},loginPasswordRer:function(){this.isEye=!this.isEye},registerPassword:function(){this.isEye2=!this.isEye2},gopage:function(e){this.$router.push({name:e})},login:function(){var e=this;if(a["a"].validUserForm(this.userInfo)){var t=Object.assign({},this.userInfo);t.appkey=this.appkey,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/login",data:t}).then((function(t){e.$toast.clear(),200==t.data.code?(localStorage.setItem("__Tk",t.data.token),e.$router.push({name:"Menu"})):e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}},register:function(){var e=this;if(a["a"].validUserForm(this.reguserInfo)){var t=Object.assign({},this.reguserInfo);t.appkey=this.appkey,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/register",data:t}).then((function(t){100==t.data.code?(e.$toast.clear(),e.show=!1):e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}}},i=r,c=s("9ca4"),l=Object(c["a"])(i,o,n,!1,null,"43d4626f",null);t["default"]=l.exports},e3a8:function(e,t,s){"use strict";s("1d3e");var o=s("399f");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,s){return t&&a(e.prototype,t),s&&a(e,s),e}var i=function(){function e(){n(this,e),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"昵称格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机号格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确且以字母开头"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"旧密码格式不正确且以字母开头"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return r(e,[{key:"validUserForm",value:function(e){for(var t in e)if(!this.validUserFormReg[t].reg.test(e[t]))return Object(o["a"])(this.validUserFormReg[t].msg),!1;return!0}}]),e}();t["a"]=new i}}]);
//# sourceMappingURL=chunk-ca228b64.d40fd544.js.map