(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a61f"],{Y6o5:function(e,t,o){},Yfch:function(e,t,o){"use strict";function i(e){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(e)}o.d(t,"a",function(){return i})},igrp:function(e,t,o){"use strict";o.r(t);var i=o("Yfch"),a=o("fe1z"),r={data:function(){var e=this;return{codeUrl:"",loading:!1,dialog:!1,title:"个人入驻",codeLoading:!1,form:{pass:"",email:"",nickname:"",code:"",uuid:"",imgCode:""},codeData:{type:"email",value:"",uuid:"",imgCode:""},buttonName:"获取验证码",isDisabled:!1,time:60,rules:{pass:[{required:!0,trigger:"blur",message:"密码不能为空"},{type:"string",min:6,message:"密码不允许小于6位"}],password_repeat:[{required:!0,validator:function(t,o,i){e.form.pass!==o?i(new Error("两次输入的密码不一致")):i()},trigger:"blur"}],email:[{required:!0,validator:function(e,t,o){""===t?o(new Error("新邮箱不能为空")):Object(i.a)(t)?o():o(new Error("邮箱格式错误"))},trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],imgCode:[{required:!0,message:"验证码不能为空",trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{getCode:function(){var e=this;Object(a.a)().then(function(t){e.codeUrl="data:image/gif;base64,"+t.img,e.form.uuid=t.uuid,e.codeData.uuid=t.uuid})},clearCode:function(){this.codeUrl=""},cancel:function(){this.resetForm()},sendCode:function(){var e=this;if(""===this.form.imgCode)return this.$message.warning("请先输入图形验证码"),this.$refs.refImgCode.focus(),!1;if(""===this.form.email)return this.$message.warning("请先输入邮箱"),!1;this.codeLoading=!0,this.buttonName="验证码发送中",this.codeData.value=this.form.email,this.codeData.imgCode=this.form.imgCode;var t=this;Object(a.e)(this.codeData).then(function(o){e.$message({showClose:!0,message:"发送成功，验证码有效期5分钟",type:"success"}),e.clearCode(),e.codeLoading=!1,e.isDisabled=!0,e.buttonName=e.time--+"秒后重新发送",e.timer=window.setInterval(function(){t.buttonName=t.time+"秒后重新发送",--t.time,t.time<0&&(t.buttonName="重新发送",t.time=60,t.isDisabled=!1,window.clearInterval(t.timer))},1e3)}).catch(function(t){e.resetForm(),e.codeLoading=!1,console.log(t.response.data.message)})},doSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.loading=!0,Object(a.d)(e.form.code,e.form).then(function(t){e.loading=!1,e.resetForm(),e.$alert("注册成功,请使用邮箱登陆！","系统提示",{confirmButtonText:"登陆",callback:function(e){"confirm"===e&&(location.href="/login")}})}).catch(function(t){e.loading=!1,console.log(t.response.data.message)})})},resetForm:function(){this.dialog=!1,window.clearInterval(this.timer),this.time=60,this.buttonName="获取验证码",this.isDisabled=!1,this.form.imgCode="",this.form.pass="",this.form.code=""}}},s=(o("tYXR"),o("KHd+")),l=Object(s.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form,rules:e.rules,"label-width":"95px","label-position":"left"}},[o("h3",{staticClass:"title"},[o("a",{attrs:{href:"/"}},[e._v("Xpay 支付系统")])]),e._v(" "),o("el-form-item",{attrs:{label:"登陆邮箱",prop:"email"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{maxlength:30,"auto-complete":"off"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),o("el-button",{attrs:{loading:e.codeLoading,disabled:e.isDisabled,size:"small"},on:{click:e.sendCode}},[e._v(e._s(e.buttonName))])],1),e._v(" "),o("el-form-item",{attrs:{prop:"imgCode",label:"图形验证码"}},[o("el-input",{ref:"refImgCode",staticStyle:{width:"200px"},attrs:{maxlength:4,"auto-complete":"off",placeholder:"图形验证码"},on:{focus:e.getCode},model:{value:e.form.imgCode,callback:function(t){e.$set(e.form,"imgCode",t)},expression:"form.imgCode"}}),e._v(" "),o("div",{staticClass:"login-code"},[o("img",{attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1),e._v(" "),o("el-form-item",{attrs:{label:"邮箱验证码",prop:"code"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{maxlength:6,"auto-complete":"off"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商户名",prop:"nickname"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{maxlength:50,placeholder:"请认真填写,买家支付时会显示此商户名",type:"text","auto-complete":"on"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"登陆密码",prop:"pass"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{maxlength:20,"auto-complete":"off",type:"password"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"重复密码",prop:"password_repeat"}},[o("el-input",{staticStyle:{width:"320px"},attrs:{maxlength:20,"auto-complete":"off",type:"password"},model:{value:e.form.password_repeat,callback:function(t){e.$set(e.form,"password_repeat",t)},expression:"form.password_repeat"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"100%","margin-left":"0"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},on:{click:e.doSubmit}},[e._v("注册")])],1),e._v(" "),o("p",{staticClass:"login-tip"},[e._v("已有账号,直接 "),o("a",{staticStyle:{color:"#1890ff"},attrs:{href:"/login"}},[e._v("登陆")])])],1)],1)},[],!1,null,null,null);l.options.__file="index.bak.vue";t.default=l.exports},tYXR:function(e,t,o){"use strict";var i=o("Y6o5");o.n(i).a}}]);