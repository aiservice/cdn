(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2b48"],{"+UEF":function(t,c,s){},T011:function(t,c,s){"use strict";var n=s("+UEF");s.n(n).a},ZWrS:function(t,c,s){"use strict";s.r(c);s("zkOn");var n={name:"Description"},o=(s("T011"),s("KHd+")),e=Object(o.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,c=t.$createElement,s=t._self._c||c;return s("div",[s("blockquote",{staticClass:"my-blockquote"},[t._v("注意")]),t._v(" "),s("pre",{staticClass:"my-code"},[t._v("邮件服务器必须支持并打开SMTP协议，详细请查看相关帮助说明\n配置文件的样例中提供的是我测试邮件功能注册的sina.com邮箱\n帐号密码公开，供测试使用，存入数据库的密码会加密处理，请文明测试")]),t._v(" "),s("blockquote",{staticClass:"my-blockquote"},[t._v(" 邮件服务器配置")]),t._v(" "),s("pre",{staticClass:"my-code"},[t._v(" # 邮件服务器的SMTP地址，可选，默认为smtp\n # 邮件服务器的SMTP端口，可选，默认465或者25\n # 发件人（必须正确，否则发送失败）\n # 用户名，默认为发件人邮箱前缀\n # 密码（注意，某些邮箱需要为SMTP服务单独设置密码，如QQ和163等等）\n # 是否开启ssl，默认开启")]),t._v(" "),s("blockquote",{staticClass:"my-blockquote"},[t._v("发送邮箱")]),t._v(" "),s("pre",{staticClass:"my-code"},[t._v(' MailAccount account = new MailAccount();\n account.setHost("smtp.sina.com");\n account.setPort("465");\n account.setAuth(true);\n account.setFrom("xpay@xpay.xin");\n account.setUser("xpay");\n account.setPass("pass");\n # 倒数第二个参数：是否为http格式\n MailUtil.send(account, CollUtil.newArrayList("xpay@tom.com"), "测试", "邮件来自xpay测试", true，file...);')]),t._v(" "),s("blockquote",{staticClass:"my-blockquote"},[t._v("更多帮助")]),t._v(" "),s("pre",{staticClass:"my-code"},[t._v("更多帮助请查看文档："),s("a",{staticStyle:{color:"#009688"},attrs:{href:"http://hutool.mydoc.io/#text_319499",target:"_black"}},[t._v("hutool工具包")])])])}],!1,null,"4ec4e532",null);e.options.__file="description.vue";c.default=e.exports},zkOn:function(t,c,s){}}]);