(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5cfc","chunk-7527","chunk-fb7c","chunk-cbd9"],{"/ZcZ":function(t,a,e){"use strict";e.r(a);var s=e("8cQm"),i=e("Yrqg"),n=e("Z6Jn"),l={components:{ConfigPic:s.default,Config:i.default,Help:n.default},data:function(){return{activeName:"first"}}},r=(e("bSVk"),e("KHd+")),o=Object(r.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-tabs",{staticStyle:{"padding-left":"5px"},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"收款二维码",name:"first"}},[e("ConfigPic")],1),t._v(" "),e("el-tab-pane",{attrs:{label:"接口配置",name:"second"}},[e("Config")],1),t._v(" "),e("el-tab-pane",{attrs:{label:"使用说明",name:"third"}},[e("Help")],1)],1)},[],!1,null,"4723f994",null);o.options.__file="index.vue";a.default=o.exports},"0e5l":function(t,a,e){"use strict";e.r(a);var s={name:"XpayFooter"},i=(e("fjOH"),e("KHd+")),n=Object(i.a)(s,function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer clearfix"},[a("div",{staticClass:"container"},[this._m(0),this._v(" "),this._m(1),this._v(" "),a("div",{staticClass:"footer-social"},[a("p",{staticClass:"footer-social-title"},[this._v("Xpay")]),this._v(" "),a("a",{attrs:{target:"_blank"}},[a("el-tooltip",[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{staticStyle:{width:"200px"},attrs:{src:e("Rgg7")}})]),this._v(" "),a("i",{staticClass:"el-icon-chat-dot-round",staticStyle:{"font-size":"29px"}})])],1)])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"footer-main"},[a("h4",[this._v("链接")]),this._v(" "),a("a",{staticClass:"footer-main-link",attrs:{href:"/reg",target:"_blank"}},[this._v("个人入驻")]),this._v(" "),a("a",{staticClass:"footer-main-link",attrs:{href:"/doc",target:"_blank"}},[this._v("开发文档")]),this._v(" "),a("a",{staticClass:"footer-main-link",attrs:{href:"/donate",target:"_blank"}},[this._v("支付体验")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"footer-main"},[a("h4",[this._v("社区")]),this._v(" "),a("a",{staticClass:"footer-main-link",attrs:{href:"http://www.6tie.net",target:"_blank"}},[this._v("乐贴网")])])}],!1,null,null,null);n.options.__file="footer.vue";a.default=n.exports},"104Q":function(t,a,e){"use strict";var s=e("Y+Kp");e.n(s).a},"7MA/":function(t,a,e){},"8cQm":function(t,a,e){"use strict";e.r(a);var s=e("QbLZ"),i=e.n(s),n=e("L2JU"),l=e("X4fA"),r=e("Kthh"),o={name:"PayImgConfig",data:function(){return{imgTip:"推荐使用300*300px图片，不超过1M",dataAlipay:{type:"alipay"},dataWechat:{type:"wechat"},dataQQ:{type:"qq"},dataUnionpay:{type:"unionpay"},payConfigPic:{},headers:{Authorization:"Bearer "+Object(l.a)()}}},computed:i()({},Object(n.b)(["imagesPayUploadApi"])),watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){var t=this;Object(r.d)().then(function(a){void 0!==a&&a&&(t.payConfigPic=a,t.sendMessage(t.payConfigPic))}).catch(function(t){console.log(t.response.data.message)})},beforeDestroy:function(){this.$bus.$off("messageKey")},methods:{handleSuccess:function(t,a,e){this.$notify({title:"图片上传成功",type:"success",duration:2500}),this.payConfigPic=t.data,console.log("payConfigPic:",this.payConfigPic),this.sendMessage(this.payConfigPic)},sendMessage:function(t){this.$bus.$emit("messageKey",t)},handleBeforeUpload:function(t){console.log(t.type);var a=!1;"image/jpeg"!==t.type&&"image/gif"!==t.type&&"image/png"!==t.type||(a=!0);var e=t.size/1024/1024<1;return a||this.$notify({title:"上传文件只能是图片格式!",type:"error",duration:2500}),e||this.$notify({title:"上传文件大小不能超过 1MB!",type:"error",duration:2500}),a&&e},handleError:function(t,a,e){var s=JSON.parse(t.message);this.$notify({title:s.message,type:"error",duration:2500})}}},c=(e("hOY4"),e("KHd+")),d=Object(c.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,md:8,lg:6,xl:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("支付宝收款码")])]),t._v(" "),e("div",[e("div",{staticStyle:{"text-align":"center"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.headers,data:t.dataAlipay,action:t.imagesPayUploadApi,"before-upload":t.handleBeforeUpload,"list-type":"picture-card"}},[t.payConfigPic.imgAlipay?e("img",{staticClass:"avatar",attrs:{src:t.payConfigPic.imgAlipay,title:"点击上传收款码图片"}}):e("i",{staticClass:"el-icon-plus"}),t._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.imgTip))])])],1)])])],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:8,lg:6,xl:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("微信支付收款码")])]),t._v(" "),e("div",[e("div",{staticStyle:{"text-align":"center"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.headers,data:t.dataWechat,action:t.imagesPayUploadApi,"before-upload":t.handleBeforeUpload,"list-type":"picture-card"}},[t.payConfigPic.imgWechat?e("img",{staticClass:"avatar",attrs:{src:t.payConfigPic.imgWechat,title:"点击上传收款码图片"}}):e("i",{staticClass:"el-icon-plus"}),t._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.imgTip))])])],1)])])],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:8,lg:6,xl:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("QQ支付收款码")])]),t._v(" "),e("div",[e("div",{staticStyle:{"text-align":"center"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.headers,data:t.dataQQ,action:t.imagesPayUploadApi,"before-upload":t.handleBeforeUpload,"list-type":"picture-card"}},[t.payConfigPic.imgQq?e("img",{staticClass:"avatar",attrs:{src:t.payConfigPic.imgQq,title:"点击上传收款码图片"}}):e("i",{staticClass:"el-icon-plus"}),t._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.imgTip))])])],1)])])],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:8,lg:6,xl:5}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("银联支付收款码")])]),t._v(" "),e("div",[e("div",{staticStyle:{"text-align":"center"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.headers,data:t.dataUnionpay,action:t.imagesPayUploadApi,"before-upload":t.handleBeforeUpload,"list-type":"picture-card"}},[t.payConfigPic.imgUnionpay?e("img",{staticClass:"avatar",attrs:{src:t.payConfigPic.imgUnionpay,title:"点击上传收款码图片"}}):e("i",{staticClass:"el-icon-plus"}),t._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.imgTip))])])],1)])])],1)],1)],1)},[],!1,null,null,null);d.options.__file="configPic.vue";a.default=d.exports},BImp:function(t,a,e){},GLnp:function(t,a,e){"use strict";var s=e("h49U");e.n(s).a},HiAn:function(t,a,e){},Rgg7:function(t,a,e){t.exports=e.p+"static/img/qq-qr.27e94fd.png"},Xqrf:function(t,a,e){},"Y+Kp":function(t,a,e){},Z6Jn:function(t,a,e){"use strict";e.r(a);var s=e("no2I"),i=e("0e5l"),n=(e("zkOn"),e("HiAn"),{name:"Doc",components:{XpayHeader:s.default,XpayFooter:i.default}}),l=(e("104Q"),e("KHd+")),r=Object(l.a)(n,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"main-cnt"},[a("XpayHeader"),this._v(" "),this._m(0),this._v(" "),a("XpayFooter")],1)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-container"},[e("div",[e("blockquote",{staticClass:"my-blockquote"},[t._v("第一步：上传支付二维码和配置NotifyUrl")]),t._v(" "),e("pre",{staticClass:"my-code"},[e("img",{attrs:{src:"https://i.loli.net/2020/04/28/tmCR5GogwhiNMyO.png"}})]),t._v(" "),e("pre",{staticClass:"my-code"},[e("img",{attrs:{src:"https://i.loli.net/2020/04/28/HLd9hSpZRsBATJW.png"}})]),t._v(" "),e("blockquote",{staticClass:"my-blockquote"},[t._v("第二步：集成下单接口")]),t._v(" "),e("pre",{staticClass:"my-code"},[e("code",[t._v("Gateway:")]),t._v("https://api.xpay.xin/xpay/gateway\n"),e("code",[t._v("Post Body:")]),t._v('\n{\n  "partner": "string", //Xpay商户号，必填\n  "outTradeNo": "string",//集成方系统订单号，必填\n  "subject": "string",//订单名称，必填\n  "totalFee": 0,//订单金额，必填\n  "extraCommonParam": "string"//额外参数，非必填\n}\n'),e("code",[t._v("Content type:")]),t._v("application/json\n"),e("code",[t._v("Responses:")]),t._v(" "),e("span",{staticClass:"el-link--danger"},[t._v("只有当 http status code 为200时返回的message才是支付Url")]),t._v('\n{\n"message": "string",//支付URL或者提示信息\n"status": 0,\n"timestamp": "2019-06-10T04:42:41.793Z"\n}\n      ')]),t._v(" "),e("blockquote",{staticClass:"my-blockquote"},[t._v("集三步：集成方系统跳转到第二步返回的支付URL")]),t._v(" "),e("pre",{staticClass:"my-code"},[t._v("1.用户确认订单\n2.用户扫描支付\n详情可以直接："),e("a",{staticStyle:{color:"#009688"},attrs:{href:"/donate",target:"_black"}},[t._v("支付体验")]),t._v("\n      ")]),t._v(" "),e("blockquote",{staticClass:"my-blockquote"},[t._v("第四部：XPay系统给您发送邮件订单确认邮件")]),t._v(" "),e("pre",{staticClass:"my-code"},[e("img",{attrs:{src:"https://i.loli.net/2020/04/28/lYJav9Q6LfkNP13.png"}})]),t._v(" "),e("pre",{staticClass:"my-code"},[e("img",{attrs:{src:"https://i.loli.net/2020/04/28/LSaGejJ42dXZcoh.png"}})]),t._v(" "),e("blockquote",{staticClass:"my-blockquote",attrs:{id:"step5"}},[t._v("第五步：点击审核通过，Xpay系统调用NotifyUrl，集成方接收到请求后修改订单状态和支付类型")]),t._v(" "),e("pre",{staticClass:"my-code"},[e("code",[t._v("Notify Url:")]),t._v("第一步配置的NotifyUrl，"),e("span",{staticClass:"el-link--danger"},[t._v("点击审核通过后会调用NotifyUrl")]),t._v("\n"),e("code",[t._v("Post Body:")]),t._v('\n{\n  "orderNo": "string",//Xpay系统交易号\n  "outTradeNo": "string",//集成方系统订单号\n  "payNum": "string",//支付标识号\n  "payType": Integer,//0:支付宝当面付 1:支付宝 2:微信 3:QQ 4:银联支付\n  "state": Integer, // 0待审核 1已支付 2待支付 3已驳回 4已扫码\n  "subject": "string",//订单名称\n  "totalFee": 0,//订单金额\n  "extraCommonParam": "string",//额外参数\n}\n'),e("code",[t._v("Content type:")]),t._v("application/json\n"),e("code",[t._v("Responses:")]),t._v(" "),e("span",{staticClass:"el-link--danger"},[t._v('返回字符串即可： "success" or "failed"')]),t._v("\n"),e("span",{staticClass:"el-link--danger"},[t._v('\n当Xpay系统检测到集成方集成系统返回的字符串是"success"时，则订单流程结束，如果返回的不是则系统会有重试机制，重试3次（1分钟后，10分钟，60分钟）后会不在重试\n')]),t._v("\n      ")])])])}],!1,null,"08034736",null);r.options.__file="doc.vue";a.default=r.exports},bSVk:function(t,a,e){"use strict";var s=e("7MA/");e.n(s).a},fjOH:function(t,a,e){"use strict";var s=e("BImp");e.n(s).a},h49U:function(t,a,e){},hOY4:function(t,a,e){"use strict";var s=e("Xqrf");e.n(s).a},no2I:function(t,a,e){"use strict";e.r(a);var s={name:"XpayHeader"},i=(e("GLnp"),e("KHd+")),n=Object(i.a)(s,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"headerWrapper"},[s("header",{staticClass:"header"},[s("div",{staticClass:"container"},[s("h1",[s("router-link",{attrs:{to:"/"}},[t._t("default",[s("img",{staticStyle:{width:"45px"},attrs:{src:e("PhGc")}}),s("span",[t._v("Pay")])])],2)],1),t._v(" "),s("ul",{staticClass:"nav"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("li",{staticClass:"nav-item nav-item-theme"},[s("a",[s("el-tooltip",[s("div",{attrs:{slot:"content"},slot:"content"},[s("img",{staticStyle:{width:"200px"},attrs:{src:e("Rgg7")}})]),t._v(" "),s("i",{staticClass:"el-icon-chat-dot-round",staticStyle:{"font-size":"19px"}})])],1)])])])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"/donate"}},[this._v("支付体验")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"/doc"}},[this._v("文档")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"/reg",target:"_blank"}},[this._v("入驻")])])}],!1,null,"451a3d56",null);n.options.__file="header.vue";a.default=n.exports},zkOn:function(t,a,e){}}]);