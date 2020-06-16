if(typeof site_enabled_b != "undefined" && site_enabled_b){
    loadBaiduAds("pc_468");
}else if(typeof site_enabled_g != "undefined" && site_enabled_g){
    loadGoogleAds468();
}else if(typeof site_enabled_t != "undefined" && site_enabled_t){
    loadTerraAds("pc_468");
}else if(typeof site_enabled_e != "undefined" && site_enabled_e){
    loadExoAds("pc_468");
}