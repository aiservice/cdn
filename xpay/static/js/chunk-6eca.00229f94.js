(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6eca","chunk-d63b"],{Jk63:function(e,t,o){"use strict";o.r(t);var i=o("Yfch"),r=o("fe1z"),a={data:function(){var e=this;return{loading:!1,dialog:!1,title:"个人入驻",form:{pass:"",email:"",code:""},user:{email:"",password:""},codeLoading:!1,codeData:{type:"email",value:""},buttonName:"获取验证码",isDisabled:!1,time:60,rules:{pass:[{required:!0,trigger:"blur",message:"密码不能为空"},{type:"string",min:6,message:"密码不允许小于6位"}],password_repeat:[{required:!0,validator:function(t,o,i){e.form.pass!==o?i(new Error("两次输入的密码不一致")):i()},trigger:"blur"}],email:[{required:!0,validator:function(e,t,o){""===t?o(new Error("新邮箱不能为空")):Object(i.a)(t)?o():o(new Error("邮箱格式错误"))},trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},sendCode:function(){var e=this;if(this.form.email&&this.form.email!==this.email){this.codeLoading=!0,this.buttonName="验证码发送中",this.codeData.value=this.form.email;var t=this;Object(r.e)(this.codeData).then(function(o){e.$message({showClose:!0,message:"发送成功，验证码有效期5分钟",type:"success"}),e.codeLoading=!1,e.isDisabled=!0,e.buttonName=e.time--+"秒后重新发送",e.timer=window.setInterval(function(){t.buttonName=t.time+"秒后重新发送",--t.time,t.time<0&&(t.buttonName="重新发送",t.time=60,t.isDisabled=!1,window.clearInterval(t.timer))},1e3)}).catch(function(t){e.resetForm(),e.codeLoading=!1,console.log(t.response.data.message)})}},doSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.loading=!0,e.user={email:e.form.email,nickname:e.form.nickname,password:e.form.pass},Object(r.d)(e.form.code,e.user).then(function(t){e.loading=!1,e.resetForm(),e.$message({showClose:!0,message:"注册成功,请使用邮箱登陆！",type:"success"})}).catch(function(t){e.loading=!1,console.log(t.response.data.message)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),window.clearInterval(this.timer),this.time=60,this.buttonName="获取验证码",this.isDisabled=!1,this.form={pass:"",email:"",code:""}}}},s=(o("cyVC"),o("KHd+")),n=Object(s.a)(a,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{display:"inline-block"}},[o("el-dialog",{attrs:{visible:e.dialog,title:e.title,"append-to-body":"",width:"475px"},on:{"update:visible":function(t){e.dialog=t},close:e.cancel}},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"88px"}},[o("el-form-item",{attrs:{label:"登陆邮箱",prop:"email"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{maxlength:30,"auto-complete":"off"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),o("el-button",{attrs:{loading:e.codeLoading,disabled:e.isDisabled,size:"small"},on:{click:e.sendCode}},[e._v(e._s(e.buttonName))])],1),e._v(" "),o("el-form-item",{attrs:{label:"验证码",prop:"code"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{maxlength:6,"auto-complete":"off"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"88px"}},[o("el-form-item",{attrs:{label:"商户名",prop:"nickname"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{placeholder:"请认真填写,买家支付时会显示此商户名",type:"text","auto-complete":"on"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"登陆密码",prop:"pass"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{maxlength:20,"auto-complete":"off",type:"password"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"重复密码",prop:"password_repeat"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{maxlength:20,"auto-complete":"off",type:"password"},model:{value:e.form.password_repeat,callback:function(t){e.$set(e.form,"password_repeat",t)},expression:"form.password_repeat"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.doSubmit}},[e._v("注册")])],1)],1)],1)},[],!1,null,"1d430c1b",null);n.options.__file="reg.vue";t.default=n.exports},Yfch:function(e,t,o){"use strict";function i(e){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(e)}o.d(t,"a",function(){return i})},c11S:function(e,t,o){"use strict";var i=o("gTgX");o.n(i).a},cyVC:function(e,t,o){"use strict";var i=o("xfV1");o.n(i).a},gTgX:function(e,t,o){},ntYl:function(e,t,o){"use strict";o.r(t);var i=o("8SHQ"),r=o("Jk63"),a=o("fe1z"),s=o("p46w"),n=o.n(s),l={name:"Reg",components:{regDialog:r.default},data:function(){return{codeUrl:"",loginForm:{username:"",password:"",rememberMe:!1,code:"",uuid:""},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}],code:[{required:!0,trigger:"change",message:"验证码不能为空"}]},loading:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.getCode(),this.getCookie()},mounted:function(){this.$nextTick(function(){})},methods:{getCode:function(){var e=this;Object(a.a)().then(function(t){e.codeUrl="data:image/gif;base64,"+t.img,e.loginForm.uuid=t.uuid})},getCookie:function(){var e=n.a.get("username"),t=n.a.get("password"),o=n.a.get("rememberMe");t=void 0===t?this.loginForm.password:t,this.loginForm={username:void 0===e?this.loginForm.username:e,password:t,rememberMe:void 0!==o&&Boolean(o),code:""}},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){var o=e.loginForm;if(!t)return console.log("error submit!!"),!1;e.loading=!0,o.rememberMe?(n.a.set("username",o.username,{expires:i.a.passCookieExpires}),n.a.set("password",o.password,{expires:i.a.passCookieExpires}),n.a.set("rememberMe",o.rememberMe,{expires:i.a.passCookieExpires})):(n.a.remove("username"),n.a.remove("password"),n.a.remove("rememberMe")),e.$store.dispatch("Login",o).then(function(){e.loading=!1,e.$router.push({path:e.redirect||"/my/dashboard"})}).catch(function(){e.loading=!1,e.getCode()})})}}},m=(o("c11S"),o("KHd+")),c=Object(m.a)(l,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"label-position":"left","label-width":"0px"}},[o("h3",{staticClass:"title"},[o("a",{attrs:{href:"/"}},[e._v("Xpay 支付系统")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号/邮箱"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[o("svg-icon",{staticClass:"el-input__icon",staticStyle:{height:"39px",width:"13px","margin-left":"2px"},attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[o("svg-icon",{staticClass:"el-input__icon",staticStyle:{height:"39px",width:"13px","margin-left":"2px"},attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),e._v(" "),o("el-form-item",{attrs:{prop:"code"}},[o("el-input",{staticStyle:{width:"60%"},attrs:{"auto-complete":"off",placeholder:"验证码"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}}),e._v(" "),o("div",{staticClass:"login-code"},[o("img",{attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1),e._v(" "),o("el-checkbox",{staticStyle:{margin:"0px 0px 25px 0px"},model:{value:e.loginForm.rememberMe,callback:function(t){e.$set(e.loginForm,"rememberMe",t)},expression:"loginForm.rememberMe"}},[e._v("记住密码")]),e._v(" "),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?o("span",[e._v("登 录 中...")]):o("span",[e._v("登 录")])])],1),e._v(" "),o("p",{staticClass:"login-tip"},[o("a",{attrs:{href:"/reg"}},[e._v("入驻系统")])])],1),e._v(" "),o("regDialog",{ref:"reg"})],1)},[],!1,null,null,null);c.options.__file="index.vue";t.default=c.exports},xfV1:function(e,t,o){}}]);