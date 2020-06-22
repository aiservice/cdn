loadJs("5ca402b6fcd37c0e");

function loadJs(id) {
    var zan = "赞";
    var zan_img = "<a href=\"/dashang.html\" target=\"_blank\"><img src=\"https://i.loli.net/2020/01/19/UWO4g26GmCjFdTA.jpg\" style=\"margin-bottom: 5px\"/></a>";
    if(typeof is_english != "undefined" && is_english){
        zan = "Donate";
        zan_img="";
    }
    document.write('<div style=" text-align: center; height: 100px; ">'+zan_img+'<a href="/dashang.html" target="_blank" class="btn" style="color: #ec7259; background-color: #fff; border-color: #ec7259; border-radius: 8px; "><span>'+zan+'</span></a></div>');
    document.write('<div class="addthis_inline_share_toolbox"></div>');
    setTimeout(function(){
        (function () {
            var d = document, s = d.createElement('script');
            s.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-' + id;
            (d.head || d.body).appendChild(s);
        })();
    },5000);
}

