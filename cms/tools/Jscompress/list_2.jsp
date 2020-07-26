<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ include file="../../commons/pages/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="Description" content="爱森在线工具,为开发设计人员提供在线工具，在线 CSS、JS 压缩解压，在线 Java API文档,在线 PHP API文档,在线 Node.js API文档,Less CSS编译器，MarkDown编译器等其他在线工具" />
<title>在线 JS/CSS/HTML 压缩 - 爱森(Aiisen)'s Tools</title>
<link rel="stylesheet" href="${ctx}/tools/css/basic.css" type="text/css"/>
<link rel="stylesheet" href="${ctx}/tools/css/bootstrap.min.css" type="text/css"/>
<link rel="stylesheet" href="${ctx}/tools/css/codemirror.css"  type="text/css" />
<style type="text/css"></style>
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
        <li><a onclick="javascript:location.href='${url}'">JS/CSS压缩</a></li>
        <c:url var="url" value="/demo/Jscompress.do?type=2" />
        <li class="active"><a onclick="javascript:location.href='${url}'">HTML压缩</a></li>
      </ul>
    </div>
    <div class="alert alert-info">
      <p>主要是把 HTML 代码格式化为当行,去除回车注释等无效字符串以增加网页传速效率. <code><a id="ngnix_intro" target="_blank" href="http://www.aiisen.com/nginx-summary-zh.html">Nginx</a></code> , <code><a id="apache_intro" target="_blank" href="javascript:void(0);">Apache</a></code> 有类似的模块可以直接输出类似的单行 HTML </p>
    </div>
    <div class="leftBar">
      <textarea id='source'>/*这里填写代码*/
<!-- Just Test -->
<c:out value='<span id="thx">Welcome to Aiisen Tools website</span>' escapeXml="false" />
			</textarea>
    </div>
    <div class="operateLR">
      <form class="well" style="padding:20px 0 20px 0;">
        <button class="btn btn-primary"  type='button' value='开始压缩' id="html_compress_btn">开始压缩</button>
        <br />
        <br />
        原始长度:<span id="old"></span> <br />
        压缩后长度:<span id="new"></span> <br />
        缩小百分比:<span id="range"></span>%
      </form>
    </div>
    <div class="rightBar">
      <textarea id='result'></textarea>
    </div>
  </div>
  <jsp:include page="../../public/_index_share_baidu.jsp" flush="true"/>
</div>

<!--主体mainContent结束    --> 
<!--尾部footer开始    -->
<jsp:include page="../../index/Tools/_footer.jsp" flush="true" />
<!-- 尾部footer结束    --> 
<jsp:include page="../../public/_index_tip.jsp" flush="true" />
<script type="text/javascript" src="${ctx}/tools/js/bootstrap.min.js"></script> 
<script type="text/javascript" src="${ctx}/commons/scripts/jquery.cookie.js"></script> 
<script type="text/javascript">//<![CDATA[
$(document).ready(function (){
	$("#YUI").popover({
		title:"YUI Compressor",
		content:"YUI Compressor 是一个用来压缩 JS 和 CSS 文件的工具,来自雅虎的YUI工具包，采用Java开发。",
		placement:"bottom"
	});
	$("#ngnix_intro").popover({
		title:"高性能Web服务器  Nginx",
		content:"Nginx 是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，并在一个BSD-like协议下发行。",
		placement:"bottom"
	});
	$("#apache_intro").popover({
		title:"HTTP服务器 Apache",
		content:"Apache HTTP Server（简称Apache）是Apache软件基金会的一个开放源码的网页服务器，可以在大多数计算机操作系统中运行，由于其多平台和安全性被广泛使用，是最流行的Web服务器端软件之一。",
		placement:"bottom"
	});
});
$(function(){
  $("#html_compress_btn").click(function(){
    var source = $("#source").val();
    var sourceLength = source.length;
	if(sourceLength==0){
		alert("待压缩的HTML不能为空！");
		return;
	}
    var rep = /\n+/g;
    var repone = /<!--.*?-->/ig;
    var reptwo = /\/\*.*?\*\//ig;
    var reptree = /[ ]+</ig;
    var sourceZero = source.replace(rep,"");
    var sourceOne = sourceZero.replace(repone,"");
    var sourceTwo = sourceOne.replace(reptwo,"");
    var sourceTree = sourceTwo.replace(reptree,"<");
    $("#result").val(sourceTree);
	var resultLength = sourceTwo.length;
	var range = 100-(resultLength/sourceLength*100);
	$("#old").text(sourceLength);
    $("#new").text(resultLength);
	$("#range").text(range.toFixed(2));
    }
  );
});

//]]>
</script>
<jsp:include page="../../_public_page.jsp" flush="true" />
</body>
</html>