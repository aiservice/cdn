/*!
 * Powered by uglifiyJS v2.6.1, Build by http://jsmin.6tie.net
 * build time: Tue Jun 23 2020 15:02:21 GMT+0800 (China Standard Time)
*/
function validateSite(){try{self!==top&&(top.location=self.location)}catch(e){}}function showNotice(){try{var e;e="undefined"!=typeof is_english&&is_english?$('<div style=" color: #fff; background-color: #3b4045; left: 0; right: 0; bottom: 0; align-items: center; padding: 1em 1.8em; width: 100%; -ms-flex-direction: row; flex-direction: row; position: fixed; overflow: hidden; box-sizing: border-box; font-family: Helvetica,Calibri,Arial,sans-serif; font-size: 16px; line-height: 1.5em; display: -ms-flexbox; display: flex; -ms-flex-wrap: nowrap; flex-wrap: nowrap; z-index: 9999; "><span id="cookieconsent:desc" class="cc-message" style=" flex: 1; ">This website uses cookies to ensure you get the best experience on our website. <a href="https://uptimerobot.com/privacyPolicy" target="_blank" style=" opacity: .8; display: inline-block; padding: .2em; color: #fff; text-decoration: underline; ">Click for the cookie policy.</a></span><div class="cc-compliance" style=" display: flex; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: justify; align-content: space-between; "><a style=" min-width: 140px; color: rgb(76, 167, 76); background-color: rgb(255, 255, 255); border-color: transparent; border-radius: 5px; flex: 1; display: block; padding: .4em .8em; font-size: .9em; font-weight: 700; border-width: 2px; border-style: solid; text-align: center; white-space: nowrap; ">Got it!</a></div></div>'):$('<div style=" color: #fff; background-color: #3b4045; left: 0; right: 0; bottom: 0; align-items: center; padding: 1em 1.8em; width: 100%; -ms-flex-direction: row; flex-direction: row; position: fixed; overflow: hidden; box-sizing: border-box; font-family: Helvetica,Calibri,Arial,sans-serif; font-size: 16px; line-height: 1.5em; display: -ms-flexbox; display: flex; -ms-flex-wrap: nowrap; flex-wrap: nowrap; z-index: 9999; "><span id="cookieconsent:desc" class="cc-message" style=" flex: 1; ">\u672c\u7f51\u7ad9\u4f7f\u7528cookie\u6765\u786e\u4fdd\u60a8\u5728\u6211\u4eec\u7684\u7f51\u7ad9\u4e0a\u83b7\u5f97\u6700\u4f73\u4f53\u9a8c\u3002. <a href="https://uptimerobot.com/privacyPolicy" target="_blank" style=" opacity: .8; display: inline-block; padding: .2em; color: #fff; text-decoration: underline; ">\u5355\u51fb\u4ee5\u83b7\u53d6Cookie\u653f\u7b56\u3002</a></span><div class="cc-compliance" style=" display: flex; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: justify; align-content: space-between; "><a style=" min-width: 140px; color: rgb(76, 167, 76); background-color: rgb(255, 255, 255); border-color: transparent; border-radius: 5px; flex: 1; display: block; padding: .4em .8em; font-size: .9em; font-weight: 700; border-width: 2px; border-style: solid; text-align: center; white-space: nowrap; ">Got it!</a></div></div>'),window.localStorage.getItem("site_privacy_policy")||($("body").append(e),e.click(function(t){t.stopPropagation(),e.remove(),window.localStorage.setItem("site_privacy_policy",1)}))}catch(t){}}function isMobile(){return ua().match(/iphone|ipad|ipod|android|blackberry|iemobile|wpdesktop/i)}function ua(){return navigator.userAgent.toLowerCase()}function isWechat(){return ua().match(/MicroMessenger/i)}function gEnabledAds(e){if("undefined"!=typeof filterUrls)for(var t=0,i=filterUrls.length;i>t;t++)if(-1!==e.indexOf(filterUrls[t]))return!1;if("undefined"!=typeof filterClsIds&&"undefined"!=typeof cls_id)for(var t=0,i=filterClsIds.length;i>t;t++)if(cls_id===filterClsIds[t])return!1;return!0}function siteEnabledG(e){if("undefined"!=typeof siteGUrls)for(var t=0,i=siteGUrls.length;i>t;t++)if(-1!==e.indexOf(siteGUrls[t]))return!0;return!1}function siteEnabledB(e){if("undefined"!=typeof siteBUrls)for(var t=0,i=siteBUrls.length;i>t;t++)if(-1!==e.indexOf(siteBUrls[t]))return!0;return!1}function loadGoogleAds(){g_enabled_ads&&(document.write('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'),document.write('<ins class="adsbygoogle" style="display:block" data-ad-client="'+g_data_ad_client+'" data-ad-slot="'+g_data_ad_slot_auto+'" data-ad-format="auto" data-full-width-responsive="true"></ins>'),document.write("<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>"))}function loadGoogleAds468(){g_enabled_ads&&(document.write('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'),document.write('<ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="'+g_data_ad_client+'" data-ad-slot="'+g_data_ad_slot_468+'"></ins>'),document.write("<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>"))}function loadGoogleAdsRecommend(){g_enabled_ads&&(document.write('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'),document.write('<ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="'+g_data_ad_client+'" data-ad-slot="'+g_data_ad_slot_recommend+'"></ins>'),document.write("<script> (adsbygoogle = window.adsbygoogle || []).push({});</script>"))}function loadBaiduAds(e){var t=b_data_ad_mobile;"cms_left_bottom"!==e||isMobile()||(t=b_data_ad_336),"cms_right_bottom"===e&&(t=b_data_ad_336_xuanting),function(){var e="_"+Math.random().toString(36).slice(2);document.write('<div style="" id="'+e+'"></div>'),(window.slotbydup=window.slotbydup||[]).push({id:t,container:e})}(),document.write('<script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/c.js" async="async" defer="defer" ></script>')}function loadOther(){}function siteEnabledT(e){if("undefined"!=typeof siteTUrls)for(var t=0,i=siteTUrls.length;i>t;t++)if(-1!==e.indexOf(siteTUrls[t]))return!0;return!1}function siteEnabledE(e){if("undefined"!=typeof siteEUrls)for(var t=0,i=siteEUrls.length;i>t;t++)if(-1!==e.indexOf(siteEUrls[t]))return!0;return!1}function loadTerraAds(e){("cms_left_bottom"===e||"pc_left_bottom"===e)&&loadTerraAdsTemplate(t_data_ad_300,300,250),"cms_right_top"===e&&loadTerraAdsTemplate(t_data_ad_300,300,250),"cms_right_bottom"===e&&loadTerraAdsTemplate(t_data_ad_160_600,160,600)}function loadTerraAdsTemplate(e,t,i){isWechat()||(atOptions={key:e,format:"iframe",height:i,width:t,params:{}},document.write('<script type="text/javascript" src="http'+("https:"===location.protocol?"s":"")+"://www.madcpms.com/"+e+'/invoke.js"></script>'))}function loadExoAds(e){"cms_left_bottom"===e&&loadExoAdsTemplate(e_data_ad_300,"300","250"),"cms_right_top"===e&&loadExoAdsTemplate(e_data_ad_300,"300","250"),"cms_right_bottom"===e&&loadExoAdsTemplate(e_data_ad_300,"160","600")}function loadExoAdsTemplate(e,t,i){var o="";"undefined"!=typeof third_opacity_css&&(o=third_opacity_css),ad_idzone=e,ad_width=t,ad_height=i,document.write('<div style="'+o+'">'),document.write('<script type="text/javascript" src="https://a.exdynsrv.com/ads.js"></script>'),document.write("</div>")}function loadExoAdsWidgetTemplate(e){document.write('<script type="text/javascript" data-idzone="'+e+'" src="https://a.exdynsrv.com/nativeads.js" ></script>')}function loadExoAdsVideoTemplate(e){exoOpts={idzone_300x250:e,preroll:{},show_thumb:1},document.write('<script type="text/javascript" src="https://a.exdynsrv.com/invideo.js"></script>')}function getHostName(e){var t=e.match(/:\/\/?(.[^/:]+)/i);return null!=t&&t.length>1&&"string"==typeof t[1]&&t[1].length>0?t[1]:null}function goNewDomain(){if("undefined"!=typeof app_domain&&"undefined"!=typeof cur_location_url&&"undefined"!=typeof go_my_site&&go_my_site&&!isLocal(cur_location_url)){var e=getHostName(cur_location_url);e&&e!==app_domain&&(location.href=cur_location_url.replace(e,app_domain))}}function isLocal(e){return-1!==e.indexOf("localhost")||-1!==e.indexOf("192.168.")}function siteEnabledOther(e){if("undefined"!=typeof siteOtherUrls)for(var t=0,i=siteOtherUrls.length;i>t;t++)if(-1!==e.indexOf(siteOtherUrls[t]))return!0;return!1}function loadThirdAds(e){"cms_left_bottom"===e&&(isMobile()?loadThirdAdsTemplate(o_data_ad_mobile,!0):loadThirdAdsTemplate(o_data_ad_300)),"cms_right_bottom"===e&&loadThirdAdsTemplate(o_data_ad_300_right)}function loadThirdAdsTemplate(e,t){if("undefined"!=typeof e||""!=e){var i="";"undefined"!=typeof third_opacity_css&&(i=third_opacity_css),t?document.write('<div style="'+i+'"><ins style="display:none!important" id="'+e+'"></ins></div>'):document.write('<div style="display: inline-block;'+i+'"><ins style="display:none!important" id="'+e+'"></ins></div>'),(window.adbyunion=window.adbyunion||[]).push(e),document.write('<script async defer src="https://www.fjsjsj.com/o.js"></script>')}}function loadAlimama(e){var t="javascript:void(0);",i="javascript:void(0);";if(isMobile()){var o=formatDate();t="https://dawangde.me/?u=41968743&referer_code=bc87e230cd&v="+o,i="http://edgh.ppyoucai.com/?r=818349942&d="+o+"&en=tickkek99&t=link&m=1&bt=1"}"cms_left_bottom"===e&&document.write('<div><a href="'+t+'"><img src="https://i.loli.net/2020/06/23/EsR7UuWyafBSr8T.png" /></a></div>'),"cms_right_bottom"===e&&(site_enabled_b&&document.write('<div><a href="'+t+'"><img src="https://i.loli.net/2020/06/23/EsR7UuWyafBSr8T.png" /></a></div>'),document.write('<div><a href="'+i+'"><img src="https://i.loli.net/2020/06/23/nrcutIM94aqlYXT.png" /></a></div>'))}function loadAlimamaTemplate(e){if("undefined"!=typeof e||""!=e){var t="";"undefined"!=typeof third_opacity_css&&(t=third_opacity_css),ufid=e,ufwidth=336,ufheight=280,ufdomain="//js.penxiangge.com",document.write('<div style="'+t+'">'),document.write("<script type='text/javascript' src='"+ufdomain+"/Include/data_hf'></script>"),document.write("</div>")}}function formatDate(){var e=new Date,t=e.getMonth()+1,i=e.getDate(),o="";return t>=1&&9>=t&&(t="0"+t),i>=0&&9>=i&&(i="0"+i),e.getFullYear()+o+t+o+i}validateSite(),cur_location_url=window.location.href,goNewDomain(),showNotice(),g_enabled_ads=gEnabledAds(cur_location_url),site_enabled_g=siteEnabledG(cur_location_url),site_enabled_b=siteEnabledB(cur_location_url),site_enabled_t=siteEnabledT(cur_location_url),site_enabled_e=siteEnabledE(cur_location_url),"undefined"!=typeof cur_location_url&&(site_enabled_alimama=!0);