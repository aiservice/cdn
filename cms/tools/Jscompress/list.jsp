<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ include file="../../commons/pages/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="Description" content="爱森在线工具,为开发设计人员提供在线工具，在线 CSS、JS 压缩解压，在线 Java API文档,在线 PHP API文档,在线 Node.js API文档,Less CSS编译器，MarkDown编译器等其他在线工具" />
<title>在线 JS/CSS/HTML 压缩 - 乐贴网 Tools</title>
<link rel="stylesheet" href="${ctx}/tools/css/basic.css" type="text/css"/>
<link rel="stylesheet" href="${ctx}/tools/css/bootstrap.min.css" type="text/css"/>
<link rel="stylesheet" href="${ctx}/tools/css/codemirror.css"  type="text/css" />
<style type="text/css">
#error_msg {
	border:1px dashed #C00;
	padding:5px;
	color:#C00;
	margin:10px 2px;
	display:none;
}
.toolUsing textarea {
	min-height:602px;
	font-size:12px;
}
.Code {
	border:1px solid #ccc;
	width:430px;
	height:610px;
	overflow-x: hidden;
}
.CodeMirror {
	width:430px;
	min-height:610px;
}
.CodeMirror-scroll {
	height: auto;
	overflow-y: hidden;
	overflow-x: hidden;
}
#common_js {
	margin:20px 0 10px 0;
}
#common_js ul {
	margin-top:10px;
}
#common_js li {
	width:150px;
	height:35px;
	display:inline-block;
}
</style>
</head>
<body>
<!-- 头部header开始    -->
<jsp:include page="../../index/Tools/_header.jsp" flush="true" />
<!--头部header结束    --> 
<!-- 主体mainContent开始    -->
<div id="mainContent" class="wrapper">
  <div class="toolName">在线JS/CSS/HTML压缩(采用<a id="YUI" href="http://www.aiisen.com/yui-compressor-zh.html">YUI Compressor</a>实现)</div>
  <div id="share" style="float: right;">
    <jsp:include page="../../public/_index_share_jia.jsp" flush="true"/>
  </div>
  <div class="toolUsing clearfix">
    <div class="toolsTab clearfix">
      <ul class="nav nav-tabs">
        <c:url var="url" value="/demo/Jscompress.do" />
        <li class="active"><a onclick="javascript:location.href='${url}'">JS/CSS压缩</a></li>
        <c:url var="url" value="/demo/Jscompress.do?type=2" />
        <li><a onclick="javascript:location.href='${url}'">HTML压缩</a></li>
      </ul>
    </div>
    <pre id="error_msg" class="error_msg"></pre>
    <html-el:form styleClass="jsform">
    <div class="leftBar">
      <div class="Code">
        <textarea name="source" id="source">		
/*示例代码*/		

function aiisen(stringA,stringB){

	var hello="你好爱森";
	
	alert("hello world");
	
}

/*示例代码*/
			</textarea>
      </div>
    </div>
    <div class="operateLR">
        <div class="input-append">
          <input type="text" name="linebreakpos" id="linebreakpos" size="5" class="span1" value="5000"/>
          <span class="add-on">字节换行</span> </div>
        <div class="alert alert-info" style="padding:8px 8px 8px 8px;margin:10px 10px 10px 10px;"> <strong style="color: #E93232">提示:</strong>
          <p>若将此置空则将默认不换行</p>
        </div>
        <label class="checkbox inline">
          <input type="checkbox" name="munge" id="munge" value="true"/>
          JS标识符混淆</label>
        <button id="js_com" data-loading-text="正在压缩..." class="btn btn-primary"  type="button" value=" JS压缩 " onclick="js_compress();" style="margin:0 0 10px 0;">JS压缩<i class="icon-chevron-right icon-white"></i></button>
        <button id="css_com" data-loading-text="正在压缩..." class="btn btn-primary"  type="button" value=" CSS压缩 " onclick="css_compress();">CSS压缩<i class="icon-chevron-right icon-white"></i></button>
    </div>
    </html-el:form>
    <div class="rightBar">
      <div class="Result">
        <textarea name="css" id="result"></textarea>
      </div>
    </div>
  </div>
</div>

<!--主体mainContent结束    --> 
<!--尾部footer开始    -->
<jsp:include page="../_footer.jsp" flush="true" />
<!-- 尾部footer结束    --> 
<script type="text/javascript" src="${ctx}/tools/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${ctx}/tools/js/codemirror.js"></script> 
<script type="text/javascript" src="${ctx}/tools/js/javascript.js"></script> 
<script type="text/javascript" src="${ctx}/tools/js/common.js"></script> 
<script type="text/javascript" src="${ctx}/commons/scripts/jquery.cookie.js"></script> 
<script type="text/javascript">//<![CDATA[
$(document).ready(function(){
	$("#YUI").popover({
		title:"YUI Compressor",
		content:"YUI Compressor 是一个用来压缩 JS 和 CSS 文件的工具,来自雅虎的YUI工具包，采用Java开发。",
		placement:"bottom"
	});
});

var editor = CodeMirror.fromTextArea(document.getElementById("source"), {
	  mode: "javascript",
	  lineNumbers: true,
	  lineWrapping: true,
	  onCursorActivity: function() {
	    editor.setLineClass(hlLine, null, null);
	    hlLine = editor.setLineClass(editor.getCursor().line, null, "activeline");
	  }
	});
var hlLine = editor.setLineClass(0, "activeline");

function js_compress(){
	$("#js_com").button("loading");
	$("#source").val(editor.getValue());
	ajax_post("${ctx}/CsAjax.do?method=jscompress",$(".jsform").serialize(),function(html){
		$("#js_com").button("reset");
		if(html.result){
			$("#error_msg").hide();
			$("#result").val(html.msg);
		} else {
			$("#error_msg").html(html.msg);
			$("#error_msg").show();
		}
	});
}
function css_compress(){
	$("#css_com").button("loading");
	$("#source").val(editor.getValue());
	ajax_post("${ctx}/CsAjax.do?method=csscompress",$(".jsform").serialize(),function(html){
	$("#css_com").button("reset");
	if(html.result){
		$("#error_msg").hide();
		$("#result").val(html.msg);
	} else {
		$("#error_msg").html(html.msg);
		$("#error_msg").show();
	}
	});
}
//]]>
</script>
</body>
</html>