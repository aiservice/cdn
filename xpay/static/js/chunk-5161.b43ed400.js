(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5161","chunk-3318"],{"/gXl":function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return l});var r=n("t3Un");function i(e){return Object(r.a)({url:"api/dept",method:"get",params:e})}function o(e){return Object(r.a)({url:"api/dept",method:"post",data:e})}function a(e){return Object(r.a)({url:"api/dept/"+e,method:"delete"})}function l(e){return Object(r.a)({url:"api/dept",method:"put",data:e})}},"Mt/f":function(e,t,n){},"bzM+":function(e,t,n){"use strict";var r=n("Mt/f");n.n(r).a},dv4G:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return l});var r=n("t3Un");function i(e){var t={deptId:e,page:0,size:9999};return Object(r.a)({url:"api/job",method:"get",params:t})}function o(e){return Object(r.a)({url:"api/job",method:"post",data:e})}function a(e){return Object(r.a)({url:"api/job/"+e,method:"delete"})}function l(e){return Object(r.a)({url:"api/job",method:"put",data:e})}},fIwS:function(e,t,n){"use strict";n.r(t);var r=n("wk8/"),i=n("/gXl"),o=n("zF5t"),a=n("dv4G"),l=n("cCY5"),s=n.n(l),u=(n("VCwm"),{components:{Treeselect:s.a},props:{isAdd:{type:Boolean,required:!0},sup_this:{type:Object,default:null},dicts:{type:Array,required:!0}},data:function(){var e=this;return{dialog:!1,loading:!1,form:{username:"",nickname:"",email:"",enabled:"false",roles:[],job:{id:""},dept:{id:""},phone:null},roleIds:[],roles:[],depts:[],deptId:null,jobId:null,jobs:[],style:"width: 184px",level:3,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],phone:[{required:!0,trigger:"blur",validator:function(t,n,r){n?e.isvalidPhone(n)?r():r(new Error("请输入正确的11位手机号码")):r(new Error("请输入电话号码"))}}],enabled:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},created:function(){navigator.userAgent.indexOf("Chrome")>=0?this.style="width: 184px":this.style="width: 172px"},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var e=this;this.form.dept.id=this.deptId,this.form.job.id=this.jobId,this.$refs.form.validate(function(t){if(!t)return!1;if(null===e.deptId||void 0===e.deptId)e.$message({message:"部门不能为空",type:"warning"});else if(null===e.jobId)e.$message({message:"岗位不能为空",type:"warning"});else if(0===e.roleIds.length)e.$message({message:"角色不能为空",type:"warning"});else{e.loading=!0,e.form.roles=[];var n=e;e.roleIds.forEach(function(e,t){var r={id:e};n.form.roles.push(r)}),e.isAdd?e.doAdd():e.doEdit()}})},doAdd:function(){var e=this;Object(r.a)(this.form).then(function(t){e.resetForm(),e.$notify({title:"添加成功",message:"默认密码：123456",type:"success",duration:2500}),e.loading=!1,e.sup_this.init()}).catch(function(t){e.loading=!1,console.log(t.response.data.message)})},doEdit:function(){var e=this;Object(r.c)(this.form).then(function(t){e.resetForm(),e.$notify({title:"修改成功",type:"success",duration:2500}),e.loading=!1,e.sup_this.init()}).catch(function(t){e.loading=!1,console.log(t.response.data.message)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.deptId=null,this.jobId=null,this.roleIds=[],this.form={username:"",email:"",enabled:"false",roles:[],job:{id:""},dept:{id:""},phone:null}},getRoles:function(){var e=this;Object(o.g)().then(function(t){e.roles=t}).catch(function(e){console.log(e.response.data.message)})},getJobs:function(e){var t=this;Object(a.d)(e).then(function(e){t.jobs=e.content}).catch(function(e){console.log(e.response.data.message)})},getDepts:function(){var e=this;Object(i.d)({enabled:!0}).then(function(t){e.depts=t.content})},isvalidPhone:function(e){return/^1[3|4|5|7|8][0-9]\d{8}$/.test(e)},selectFun:function(e,t){this.getJobs(e.id)},getRoleLevel:function(){var e=this;Object(o.h)().then(function(t){console.log(t),e.level=t.level}).catch(function(e){console.log(e.response.data.message)})}}}),d=(n("bzM+"),n("KHd+")),c=Object(d.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.dialog,title:e.isAdd?"新增用户":"编辑用户","append-to-body":"",width:"570px"},on:{"update:visible":function(t){e.dialog=t}}},[n("el-form",{ref:"form",attrs:{inline:!0,model:e.form,rules:e.rules,size:"small","label-width":"66px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"username"}},[n("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[n("el-input",{model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态",prop:"enabled"}},e._l(e.dicts,function(t){return n("el-radio",{key:t.id,attrs:{label:t.value},model:{value:e.form.enabled,callback:function(t){e.$set(e.form,"enabled",t)},expression:"form.enabled"}},[e._v(e._s(t.label))])})),e._v(" "),n("el-form-item",{attrs:{label:"电话",prop:"phone"}},[n("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",e._n(t))},expression:"form.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[n("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"部门"}},[n("treeselect",{style:e.style,attrs:{options:e.depts,placeholder:"选择部门"},on:{select:e.selectFun},model:{value:e.deptId,callback:function(t){e.deptId=t},expression:"deptId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"岗位"}},[n("el-select",{style:e.style,attrs:{placeholder:"请先选择部门"},model:{value:e.jobId,callback:function(t){e.jobId=t},expression:"jobId"}},e._l(e.jobs,function(e,t){return n("el-option",{key:e.name+t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"角色"}},[n("el-select",{staticStyle:{width:"450px"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}},e._l(e.roles,function(t,r){return n("el-option",{key:t.name+r,attrs:{disabled:1!==e.level&&t.level<=e.level,label:t.name,value:t.id}})}))],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.doSubmit}},[e._v("确认")])],1)],1)},[],!1,null,"3a9cab98",null);c.options.__file="form.vue";t.default=c.exports},iM05:function(e,t,n){"use strict";n.r(t);var r=n("7Qib"),i={components:{eForm:n("fIwS").default},props:{query:{type:Object,required:!0},sup_this:{type:Object,required:!0},dicts:{type:Array,required:!0}},data:function(){return{downloadLoading:!1,queryTypeOptions:[{key:"username",display_name:"用户名"},{key:"email",display_name:"邮箱"}],enabledTypeOptions:[{key:"true",display_name:"激活"},{key:"false",display_name:"锁定"}]}},methods:{add:function(){this.$refs.form.getDepts(),this.$refs.form.getRoles(),this.$refs.form.getRoleLevel(),this.$refs.form.dialog=!0},toQuery:function(){this.sup_this.page=0,this.sup_this.init()},download:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-0d49"),n.e("chunk-061e")]).then(n.bind(null,"S/jZ")).then(function(t){var n=e.formatJson(["id","username","email","avatar","enabled","createTime","lastPasswordResetTime"],e.sup_this.data);t.export_json_to_excel({header:["ID","用户名","邮箱","头像地址","状态","注册日期","最后修改密码日期"],data:n,filename:"table-list"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"createTime"===e||"lastPasswordResetTime"===e?Object(r.d)(t[e]):"enabled"===e?Object(r.d)(t[e])?"启用":"禁用":t[e]})})}}},o=n("KHd+"),a=Object(o.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"输入关键字搜索"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.toQuery(t):null}},model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}}),e._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"类型"},model:{value:e.query.type,callback:function(t){e.$set(e.query,"type",t)},expression:"query.type"}},e._l(e.queryTypeOptions,function(e){return n("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),e._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"状态"},on:{change:e.toQuery},model:{value:e.query.enabled,callback:function(t){e.$set(e.query,"enabled",t)},expression:"query.enabled"}},e._l(e.enabledTypeOptions,function(e){return n("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"success",icon:"el-icon-search"},on:{click:e.toQuery}},[e._v("搜索")]),e._v(" "),n("div",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN","USER_ALL","USER_CREATE"],expression:"['ADMIN','USER_ALL','USER_CREATE']"}],staticStyle:{display:"inline-block",margin:"0px 2px"}},[n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("新增")]),e._v(" "),n("eForm",{ref:"form",attrs:{sup_this:e.sup_this,"is-add":!0,dicts:e.dicts}})],1),e._v(" "),n("div",{staticStyle:{display:"inline-block"}},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["ADMIN"],expression:"['ADMIN']"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,size:"mini",type:"warning",icon:"el-icon-download"},on:{click:e.download}},[e._v("导出")])],1)],1)},[],!1,null,null,null);a.options.__file="header.vue";t.default=a.exports},"wk8/":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"g",function(){return l}),n.d(t,"f",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return d});var r=n("t3Un");function i(e){return Object(r.a)({url:"api/users",method:"post",data:e})}function o(e){return Object(r.a)({url:"api/users/"+e,method:"delete"})}function a(e){return Object(r.a)({url:"api/users",method:"put",data:e})}function l(e){var t={password:e};return Object(r.a)({url:"api/users/validPass/",method:"post",data:t})}function s(e){var t={password:e};return Object(r.a)({url:"api/users/updatePass/",method:"post",data:t})}function u(e,t){return Object(r.a)({url:"api/users/updateEmail/"+e,method:"post",data:t})}function d(e){return Object(r.a)({url:"api/users/updateNickname/",method:"post",data:e})}},zF5t:function(e,t,n){"use strict";n.d(t,"g",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"f",function(){return a}),n.d(t,"h",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"e",function(){return d}),n.d(t,"d",function(){return c});var r=n("t3Un");function i(){return Object(r.a)({url:"api/roles/all",method:"get"})}function o(e){return Object(r.a)({url:"api/roles",method:"post",data:e})}function a(e){return Object(r.a)({url:"api/roles/"+e,method:"get"})}function l(){return Object(r.a)({url:"api/roles/level",method:"get"})}function s(e){return Object(r.a)({url:"api/roles/"+e,method:"delete"})}function u(e){return Object(r.a)({url:"api/roles",method:"put",data:e})}function d(e){return Object(r.a)({url:"api/roles/permission",method:"put",data:e})}function c(e){return Object(r.a)({url:"api/roles/menu",method:"put",data:e})}}}]);