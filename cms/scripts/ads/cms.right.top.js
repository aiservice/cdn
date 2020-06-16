if(typeof site_enabled_g != "undefined"&&site_enabled_g){
    document.write('<div style="margin-bottom: 5px;">');
    loadGoogleAds();
    document.write('</div>');
}else if(typeof site_enabled_e != "undefined" && site_enabled_e){
    document.write('<div style="margin-bottom: 5px;">');
    loadExoAds("cms_right_top");
    document.write('</div>');
}