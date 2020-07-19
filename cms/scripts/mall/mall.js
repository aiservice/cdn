$(document).ready(function () {
    setTimeout(isLogin, 3000)
});

function addToCart(id) {
    if (id) {
        ajax("/MallAjax.do?method=addToCart", {"id": id, "action": "cart"}, "POST", function (data) {
            if (data.code == "1") {
                layer.open({
                    content: '加入购物车成功！'
                    , btn: ['去购物车', '再逛逛']
                    , yes: function (index) {
                        layer.close(index);
                        location.href = "/manager/customer/cart.html"
                    }
                });
            }
        }, true, true)
    }
}

function buy(id) {
    if (id) {
        ajax("/MallAjax.do?method=addToCart", {"id": id, "action": "buy"}, "POST", function (data) {
            if (data.code == "1") {
                setTimeout(function () {
                    location.href = "/manager/customer/cart.html"
                }, 2000)
            }
        }, true, true)
    }
}

function isLogin() {
    $.ajax({
        url: "/MallAjax.do?method=isLogin",
        success: function (data) {
            if (data.code == 1) {
                datas = data.datas;
                var uName = datas.uName;
                var cartNum = datas.cartNum;
                $("#cart-header").find("a").html("购物车<span class=\"badge\">" + cartNum + "</span>");
                $("#cart-badge").html(cartNum);
                $(".lg-opt").hide()
                $("#cart-header").after("<li><a title='" + uName + "' href=\"/manager/customer/index.html\">个人中心</a></li>" +
                    "<li><a href=\"/login.html?method=logout\">退出</a></li>");
                return true;
            }
        }
    });
    return false;
}

/**
 * Common AJAX Method
 * @param url
 * @param jqueryFrom
 * @param type
 * @param successFunctionName
 * @param showLoading
 * @param async
 * @param completeFunctionName
 * @returns {boolean}
 */
function ajax(url, formIdOrData, type, successFunctionName, showLoading, async) {
    if (url == "" || url == undefined) {
        return false;
    }
    if (type == "" || type == undefined) {
        type = 'POST';
    }
    if (async == undefined) {
        async = true;
    }
    if (showLoading == undefined) {
        showLoading = true;
    }
    var tmpData = formIdOrData;
    if (typeof formIdOrData === "string") {
        tmpData = $("#" + formIdOrData).serialize();
    }
    console.log('ajax parameter=', tmpData);
    $.ajax({
        url: url,
        data: tmpData,
        type: type,
        async: async,
        beforeSend: function () {
            if (showLoading) {
                showLoadingLayer();
            }
        },
        success: function (data, textStatus, jqXHR) {
            console.log("ajax(" + url + ") and the response is: ", data)
            if (showLoading) {
                hideLoadingLayer();
            }
            if (data.code == "1") {
                if (showLoading) {
                    popTip(data.msg)
                }
            } else {
                if (showLoading) {
                    popTip(data.msg)
                }
            }
            if (typeof successFunctionName === 'function') {
                successFunctionName(data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            hideLoadingLayer();
            if (type != 'GET') {
                popTip(textStatus);
            }
        }
    });
}

function showLoadingLayer() {
    if (typeof window.layer != "undefined" && window.layer) {
        layer.open({type: 2});
    }
}

function hideLoadingLayer() {
    if (typeof window.layer != "undefined" && window.layer) {
        layer.closeAll();
    }
}

function popTip(msg, time) {
    if (typeof window.layer != "undefined" && window.layer) {
        var t = 3;
        if (typeof time != "undefined" && time) {
            t = time;
        }
        layer.open({content: msg, skin: 'msg', time: t});
    } else {
        alert(msg);
    }
}