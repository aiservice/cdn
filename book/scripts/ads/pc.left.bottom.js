if(typeof site_enabled_b != "undefined" && site_enabled_b && typeof site_enabled_g != "undefined" && site_enabled_g){
    document.write('<ul class="adsul">');
    document.write('<li>');
    loadGoogleAds();
    document.write('</li>');
    document.write('<li>');
    loadBaiduAds("pc_left_bottom");
    document.write('</li>');
    document.write('</ul>');
}else if(typeof site_enabled_g != "undefined" && site_enabled_g && typeof site_enabled_other != "undefined" && site_enabled_other){
    document.write('<ul class="adsul">');
    document.write('<li>');
    loadGoogleAds();
    document.write('</li>');
    document.write('<li>');
    loadThirdAds("pc_left_bottom");
    document.write('</li>');
    document.write('</ul>');
}else if(typeof site_enabled_g != "undefined" && site_enabled_g && typeof site_enabled_t != "undefined" && site_enabled_t){
    document.write('<ul class="adsul">');
    document.write('<li>');
    loadGoogleAds();
    document.write('</li>');
    document.write('<li>');
    loadTerraAds("pc_left_bottom");
    document.write('</li>');
    document.write('</ul>');
}else if(typeof site_enabled_g != "undefined" && site_enabled_g && typeof site_enabled_e != "undefined" && site_enabled_e){
    document.write('<ul class="adsul">');
    document.write('<li>');
    loadGoogleAds();
    document.write('</li>');
    document.write('<li>');
    loadExoAds("pc_left_bottom");
    document.write('</li>');
    document.write('</ul>');
}else if(typeof site_enabled_g != "undefined" && site_enabled_g) {
    loadGoogleAds();
}else if(typeof site_enabled_b != "undefined" && site_enabled_b){
    loadBaiduAds("pc_left_bottom");
}else if(typeof site_id != "undefined"&&site_id===19292){
    document.write('<ul class="adsul">');
    document.write('<li>');
    if(typeof site_enabled_t != "undefined" && site_enabled_t){
        loadTerraAds("pc_left_bottom");
    }
    document.write('</li>');
    document.write('<li>');
    if(typeof site_enabled_e != "undefined" && site_enabled_e){
        loadExoAds("pc_left_bottom");
    }
    document.write('</li>');
    document.write('</ul>');
}