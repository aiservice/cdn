(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0167"],{DlCE:function(t,e,o){"use strict";o.r(e);var i=o("twU4"),n={props:{isAdd:{type:Boolean,required:!0},sup_this:{type:Object,default:null}},data:function(){return{loading:!1,dialog:!1,form:{id:"",name:"",remark:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){e&&(t.loading=!0,t.isAdd?t.doAdd():t.doEdit())})},doAdd:function(){var t=this;Object(i.a)(this.form).then(function(e){t.resetForm(),t.$notify({title:"添加成功",type:"success",duration:2500}),t.loading=!1,t.sup_this.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},doEdit:function(){var t=this;Object(i.c)(this.form).then(function(e){t.resetForm(),t.$notify({title:"修改成功",type:"success",duration:2500}),t.loading=!1,t.sup_this.init()}).catch(function(e){t.loading=!1,console.log(e.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={id:"",name:"",remark:""}}}},r=(o("DvLm"),o("KHd+")),a=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialog,title:t.isAdd?"新增字典":"编辑字典",width:"500px"},on:{"update:visible":function(e){t.dialog=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"80px"}},[o("el-form-item",{attrs:{label:"字典名称",prop:"name"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"描述"}},[o("el-input",{staticStyle:{width:"370px"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)},[],!1,null,"16c48b2e",null);a.options.__file="form.vue";e.default=a.exports},DvLm:function(t,e,o){"use strict";var i=o("PhaP");o.n(i).a},PhaP:function(t,e,o){},twU4:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a});var i=o("t3Un");function n(t){return Object(i.a)({url:"api/dict",method:"post",data:t})}function r(t){return Object(i.a)({url:"api/dict/"+t,method:"delete"})}function a(t){return Object(i.a)({url:"api/dict",method:"put",data:t})}}}]);