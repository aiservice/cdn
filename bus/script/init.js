/*!
 * Powered by uglifiyJS v2.6.1, Build by http://www.ossoft.cn
 * build time: Fri Sep 03 2021 09:38:51 GMT+0800 (China Standard Time)
*/
function dsToggle(){$(".hide_box").fadeToggle()}$(function(){var e,n,r,o=null,t=0,i=100,l=0,a=10,u=function(){s()},s=function(){var r=$("#line-number").val();if(window.localStorage.setItem("lineNumber",r),-1==r){var o=$("#bus-number").val();""!=$.trim(o)&&4==o.length&&(r="DD"+o,window.localStorage.setItem("busNumber",r))}return""==$.trim(r)||6!=r.length?(m(),!1):void $.ajax({url:"/IndexApi.do?method=getBusNo&no="+r,type:"GET",dataType:"json",success:function(r){if(r){var o=r.code;if(200==o){var t=r.results,i=t.longitude,u=t.latitude,s=new BMap.Point(i,u);null==n?n=v(s,e):(l>a?(m(),n=v(s,e)):n.setPosition(s),l++),$("#follow").is(":checked")&&e.centerAndZoom(s,16)}else c(r.message)}},error:function(e){c("Server busy or error.")}})},c=function(e){m(),layer.open({content:e,skin:"msg",time:3}),t++,t>=i&&d()},d=function(){o&&(clearInterval(o),o=null,t=0)},v=function(e,n){r||(r=f("https://cdn.jsdelivr.net/gh/aiservice/cdn/bus/img/bus.png"));var o=new BMap.Marker(e,{icon:r}),t=new ComplexCustomOverlay(e,o);return n.addOverlay(t),t},m=function(){n&&(e.removeOverlay(n),e.removeOverlay(n.getMaker()),n=null),l=0},f=function(e){var n=new BMap.Icon(e,new BMap.Size(50,50),{});return n};u()});