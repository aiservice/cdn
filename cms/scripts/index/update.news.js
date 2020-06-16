$(document).ready(function () {
    setTimeout(updateViewCount, 3000)
});

function updateViewCount() {
    $.post("/CsAjax.do?method=updateNewsViewCount", {"news_id": $("#news_id").val()}, function (datas) {});
}