/*!
 * Powered by uglifiyJS v2.6.1, Build by http://www.aizhan.club
 * build time: Wed Feb 17 2021 17:57:42 GMT+0800 (China Standard Time)
*/
function updateViewCount(){$.post("/CsAjax.do?method=updateNewsViewCount",{news_id:$("#news_id").val()},function(e){if(e.enable_pay&&"undefined"!=typeof site_id&&1772===site_id)if("true"===e.enable_pay){var t=$("#no_source");t.length>0&&(t.after(paySourceHtml()),t.remove())}else{var n=$("#pay_source");n.length>0&&(n.after(noSourceHtml()),n.remove())}})}$(document).ready(function(){setTimeout(updateViewCount,2e3)});