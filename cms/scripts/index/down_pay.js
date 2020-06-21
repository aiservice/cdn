if(typeof downPayParams != "undefined" && downPayParams){
    if(downPayParams.isPay){
        var total_fee = "0.5";
        if(typeof book_total_fee != "undefined"){
            total_fee = book_total_fee;
        }
        document.writeln('<div class="erphpdown" id="erphpdown" style=" margin: 10px 0; overflow: hidden; border: 6px dashed #c91a1a; padding: 20px; font-size: 15px; position: relative; line-height: 1.5; text-align: center; border-radius: 12px; "> <h3 style=" font-size: 1.7rem; line-height: 190%; margin: 2px -25px 10px; padding: 0 20px; ">购买电子版</h3><span class="erphpdown-price" style=" padding: 0 5px; color: #e14d43; font-weight: 700; font-size: 120%; ">'+total_fee+'</span>小力币 <div class="input-group" style="margin-bottom: 10px;"><input type="text" class="form-control" placeholder="填写接收下载地址的邮箱" name="email" id="email"> <span class="input-group-addon" style="color: #fff; background-color: #dc3545; border-color: #dc3545;cursor: pointer;" onclick="pay()" id="btn_pay" data-loading-text="Loading...">购买</span></div> <div class="erphpdown-tips" style=" margin-top: 6px; opacity: .7; font-size: 13px; "><span class="text-danger">分享地址反复失效，收费只为增加举报门槛</span><br> <span>包含格式：epub+mobi+azw3+pdf</span><br>如果链接失效，请联系<a href="mailto:jianxi123532@gmail.com" target="_blank">站长邮箱</a>修复！ </div> </div>');
    }else{
        var sb = [];
        for (var i in downPayParams) {
            sb.push(i + '=' + encodeURIComponent(downPayParams[i] || ''));
        }
        var download_url =  "/download.html?" + sb.join('&');
        document.writeln('<div class="alert alert-success" role="alert"> 点击下载：<a href="'+download_url+'" target="_blank" class="alert-link">'+downPayParams.title+'</a> </div>');
    }
}else{
    if (typeof cur_location_url != "undefined"&&cur_location_url.indexOf("download.html") === -1) {
        var download_url =  "https://72k.us/file/1210232-448745322" ;
        document.writeln('<div class="alert alert-success" role="alert"> 暂无资源：<a href="'+download_url+'" target="_blank" class="alert-link">《点击下载快速求书指南》</a> </div>');
    }
}

function pay(){
    var id = downPayParams.id;
    var email = $("#email").val();
    if($.trim(email)==""){
        alert("请填写email");
        return false;
    }
    var $btn_pay = $("#btn_pay");
    $btn_pay.attr("disabled","true").text("Loading...");
    setTimeout(function() {
        location.href = "/pay.html" + "?id=" + id+"&email="+encodeURIComponent(email)
    }, 500);

}

document.writeln('<div class="panel panel-info"> <div class="panel-heading"> <h3 class="panel-title">声明：</h3> </div> <div class="panel-body"> 本站大部分下载资源收集于网络，只做学习和交流使用，版权归原作者所有，与本站无关。本站发布的内容若侵犯到您的权益，请联系:<code>jianxi123532@gmail.com</code>，我们将及时处理！ </div> </div>');
// document.writeln('<div class="panel panel-danger"> <div class="panel-heading"> <h3 class="panel-title">感谢您的支持: </h3> </div> <div class="panel-body">感谢所有打赏的朋友。感谢你们的支持。你们打赏的每一分钱后续都会被用在更换更好的服务器及资源购买上。你们的支持和鼓励将会让我们更好的发展下去！ </div> </div><div class="panel panel-info"> <div class="panel-heading"> <h3 class="panel-title">声明：</h3> </div> <div class="panel-body"> 本站大部分下载资源收集于网络，只做学习和交流使用，版权归原作者所有，与本站无关。本站发布的内容若侵犯到您的权益，请联系:<code>jianxi123532@gmail.com</code>，我们将及时处理！ </div> </div>');