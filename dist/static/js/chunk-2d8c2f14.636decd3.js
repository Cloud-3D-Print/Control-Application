(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d8c2f14"],{"129f":function(e,n){e.exports=Object.is||function(e,n){return e===n?0!==e||1/e===1/n:e!=e&&n!=n}},"1ffa":function(e,n,r){"use strict";var t=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;n.validate=function(e){if(!e)return!1;if(e.length>254)return!1;var n=t.test(e);if(!n)return!1;var r=e.split("@");if(r[0].length>64)return!1;var a=r[1].split(".");return!a.some((function(e){return e.length>63}))}},"466d":function(e,n,r){"use strict";var t=r("d784"),a=r("825a"),s=r("50c4"),o=r("1d80"),i=r("8aa5"),l=r("14c3");t("match",1,(function(e,n,r){return[function(n){var r=o(this),t=void 0==n?void 0:n[e];return void 0!==t?t.call(n,r):new RegExp(n)[e](String(r))},function(e){var t=r(n,e,this);if(t.done)return t.value;var o=a(e),u=String(this);if(!o.global)return l(o,u);var d=o.unicode;o.lastIndex=0;var c,g=[],p=0;while(null!==(c=l(o,u))){var m=String(c[0]);g[p]=m,""===m&&(o.lastIndex=i(u,s(o.lastIndex),d)),p++}return 0===p?null:g}]}))},"841c":function(e,n,r){"use strict";var t=r("d784"),a=r("825a"),s=r("1d80"),o=r("129f"),i=r("14c3");t("search",1,(function(e,n,r){return[function(n){var r=s(this),t=void 0==n?void 0:n[e];return void 0!==t?t.call(n,r):new RegExp(n)[e](String(r))},function(e){var t=r(n,e,this);if(t.done)return t.value;var s=a(e),l=String(this),u=s.lastIndex;o(u,0)||(s.lastIndex=0);var d=i(s,l);return o(s.lastIndex,u)||(s.lastIndex=u),null===d?-1:d.index}]}))},"9ed6":function(e,n,r){"use strict";r.r(n);var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],staticClass:"login-container"},[t("div",{staticClass:"log-main-form"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"login-main-head text-center mb-6"},[t("img",{staticClass:"login-logo",attrs:{src:r("53a2"),alt:"logo"}}),t("h3",{staticClass:"title mb-0"},[e._v("Cloud 3D Print "),t("br"),e._v(" Control panel login")])]),t("el-form-item",{attrs:{prop:"username",label:"Username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),t("el-form-item",{staticClass:"mb-7",attrs:{prop:"password",label:"Password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),t("el-button",{staticClass:"login-btn",attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("Login")])],1)],1)])},a=[],s=(r("4d63"),r("ac1f"),r("25f0"),r("466d"),r("841c"),r("1ffa")),o=r.n(s),i=r("5f87"),l={name:"Login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur"}]},loginInfo:null,pageLoading:!1,loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect,"cloud"===e.query.location?this.pageLoading=!0:this.pageLoading=!1},immediate:!0}},beforeDestroy:function(){},mounted:function(){Object(i["g"])(!0)},methods:{getQueryString:function(e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(n);return null!=r?unescape(r[2]):null},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this,n=this;if(""===n.loginForm.username||""===n.loginForm.password)return n.$message.closeAll(),n.$message.error("Please enter your username and password"),!1;o.a.validate(this.loginForm.username)&&(this.loginForm.email=this.loginForm.username,delete this.loginForm.username),this.$refs.loginForm.validate((function(n){if(!n)return e.$message({message:"Invalid email/username or password.",type:"error"}),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){console.log(e.redirect),e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1,e.$message({message:"Invalid email/username or password.",type:"error"})}))}))}}},u=l,d=r("2877"),c=Object(d["a"])(u,t,a,!1,null,null,null);n["default"]=c.exports}}]);