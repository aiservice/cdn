$(document).ready(function () {
    setTimeout(updateViewCount, 3000)
});

function updateViewCount() {
    var id = $("#site_wrapper").data("id");
    if(id){
        $.post("/MallAjax.do?method=updatePdViewCount", {"id": id}, function (datas) {});
    }
}