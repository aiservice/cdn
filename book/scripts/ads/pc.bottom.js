if(typeof site_enabled_b != "undefined" && site_enabled_b){
    loadBaiduAds("pc_bottom");
}else if(typeof site_enabled_t != "undefined" && site_enabled_t){
    loadTerraAds("pc_bottom");
} else if(typeof site_enabled_e != "undefined" && site_enabled_e){
    loadExoAds("pc_bottom");
}  else if(typeof site_enabled_other != "undefined" && site_enabled_other){
    loadThirdAds("pc_bottom");
}