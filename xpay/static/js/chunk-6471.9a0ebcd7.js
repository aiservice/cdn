(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6471"],{"2Mtc":function(e,i,t){"use strict";t.r(i);var o=t("QbLZ"),r=t.n(o),a=t("L2JU"),n=t("NLix"),s=t("X4fA"),l={data:function(){return{headers:{Authorization:"Bearer "+Object(s.a)()},dialog:!1,dialogImageUrl:"",dialogVisible:!1,fileList:[],pictures:[]}},computed:r()({},Object(a.b)(["imagesUploadApi"])),methods:{handleSuccess:function(e,i,t){console.log("response:",e);var o=i.uid,r=e.id;this.pictures.push({uid:o,id:r})},handleBeforeUpload:function(e){console.log(e.type);var i=!1;"image/jpeg"!==e.type&&"image/gif"!==e.type&&"image/png"!==e.type||(i=!0);var t=e.size/1024/1024<1;return i||this.$notify({title:"上传文件只能是图片格式!",type:"error",duration:2500}),t||this.$notify({title:"上传文件大小不能超过 1MB!",type:"error",duration:2500}),i&&t},handleBeforeRemove:function(e,i){for(var t=0;t<this.pictures.length;t++)if(this.pictures[t].uid===e.uid)return Object(n.a)(this.pictures[t].id).then(function(e){}),!0},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},doSubmit:function(){this.fileList=[],this.dialogVisible=!1,this.dialogImageUrl="",this.dialog=!1,this.$parent.$parent.init()},handleError:function(e,i,t){var o=JSON.parse(e.message);this.$notify({title:o.message,type:"error",duration:5e3})}}},d=(t("m6PC"),t("KHd+")),u=Object(d.a)(l,function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-dialog",{attrs:{visible:e.dialog,"append-to-body":"",width:"600px"},on:{"update:visible":function(i){e.dialog=i},close:e.doSubmit}},[t("el-upload",{attrs:{"on-preview":e.handlePictureCardPreview,"before-upload":e.handleBeforeUpload,"before-remove":e.handleBeforeRemove,"on-success":e.handleSuccess,"on-error":e.handleError,headers:e.headers,"file-list":e.fileList,action:e.imagesUploadApi,"list-type":"picture-card"}},[t("i",{staticClass:"el-icon-plus"})]),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(i){e.dialogVisible=i}}},[t("img",{attrs:{src:e.dialogImageUrl,width:"100%",alt:""}})]),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.doSubmit}},[e._v("确认")])],1)],1)},[],!1,null,"54a682af",null);u.options.__file="form.vue";i.default=u.exports},"BC7/":function(e,i,t){},NLix:function(e,i,t){"use strict";t.d(i,"a",function(){return r}),t.d(i,"b",function(){return a});var o=t("t3Un");function r(e){return Object(o.a)({url:"api/pictures/"+e,method:"delete"})}function a(e){return Object(o.a)({url:"api/pictures/",method:"delete",data:e})}},m6PC:function(e,i,t){"use strict";var o=t("BC7/");t.n(o).a}}]);