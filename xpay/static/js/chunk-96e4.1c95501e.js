(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-96e4"],{"8RwS":function(t,e,o){"use strict";var r=o("yDg/");o.n(r).a},dUbn:function(t,e,o){"use strict";o.r(e);var r=o("Q2AE"),s=o("wk8/"),a={data:function(){var t=this;return{loading:!1,dialog:!1,title:"修改密码",form:{oldPass:"",newPass:"",confirmPass:""},rules:{oldPass:[{required:!0,validator:function(t,e,o){e?Object(s.g)(e).then(function(t){200===t.status?o():o(new Error("旧密码错误，请检查"))}):o(new Error("请输入旧密码"))},trigger:"blur"}],newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPass:[{required:!0,validator:function(e,o,r){t.form.newPass!==o?r(new Error("两次输入的密码不一致")):r()},trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,Object(s.f)(t.form.confirmPass).then(function(e){t.resetForm(),t.$notify({title:"密码修改成功，请重新登录",type:"success",duration:1500}),setTimeout(function(){r.a.dispatch("LogOut").then(function(){location.reload()})},1500)}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={oldPass:"",newPass:"",confirmPass:""}}}},n=(o("8RwS"),o("KHd+")),i=Object(n.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{display:"inline-block"}},[o("el-dialog",{attrs:{visible:t.dialog,title:t.title,"append-to-body":"",width:"500px"},on:{"update:visible":function(e){t.dialog=e},close:t.cancel}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"88px"}},[o("el-form-item",{attrs:{label:"旧密码",prop:"oldPass"}},[o("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.oldPass,callback:function(e){t.$set(t.form,"oldPass",e)},expression:"form.oldPass"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"新密码",prop:"newPass"}},[o("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.newPass,callback:function(e){t.$set(t.form,"newPass",e)},expression:"form.newPass"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"确认密码",prop:"confirmPass"}},[o("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.confirmPass,callback:function(e){t.$set(t.form,"confirmPass",e)},expression:"form.confirmPass"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"0d41aba6",null);i.options.__file="updatePass.vue";e.default=i.exports},"wk8/":function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return a}),o.d(e,"c",function(){return n}),o.d(e,"g",function(){return i}),o.d(e,"f",function(){return l}),o.d(e,"d",function(){return u}),o.d(e,"e",function(){return c});var r=o("t3Un");function s(t){return Object(r.a)({url:"api/users",method:"post",data:t})}function a(t){return Object(r.a)({url:"api/users/"+t,method:"delete"})}function n(t){return Object(r.a)({url:"api/users",method:"put",data:t})}function i(t){var e={password:t};return Object(r.a)({url:"api/users/validPass/",method:"post",data:e})}function l(t){var e={password:t};return Object(r.a)({url:"api/users/updatePass/",method:"post",data:e})}function u(t,e){return Object(r.a)({url:"api/users/updateEmail/"+t,method:"post",data:e})}function c(t){return Object(r.a)({url:"api/users/updateNickname/",method:"post",data:t})}},"yDg/":function(t,e,o){}}]);