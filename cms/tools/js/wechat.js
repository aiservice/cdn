var vform;
$(function () {
    vform = $('#validation-form').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        debug: true,
        rules: {
            real_name: {required: true},
            bank_account: {required: true},
            cash_count: {required: true, digits: true},
        },
        messages: {
            real_name: {required: "请添加提现账户"},
            bank_account: {required: "请添加提现账户"},
            cash_count: {required: "请填写提现金额", digits: "请正确填写提现金额"},
        },
        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },
        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error');
            $(e).remove();
        }
    });
    vform = $('#validation-form').validate({
        errorElement: 'div',
        errorClass: 'help-block',
        focusInvalid: false,
        ignore: "",
        rules: {
            wechat_url: {required: true, url: true},
        },
        messages: {
            site_domain: {required: "请填写微信视频链接", url: "请正确填写微信视频链接,需包含http或者https"},
        },
        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
        },
        success: function (e) {
            $(e).closest('.form-group').removeClass('has-error');//.addClass('has-info');
            $(e).remove();
        }
    });

});

function toJieXi() {
    if (vform.form()) {
        $("#wechat_video_url_a").addClass("disabled");
        ajax("?method=wechat", "validation-form", "POST", handle, true, true)
    }
    return false;
}

function handle(data) {
    if (data.code == 1) {
        $("#wechat_video_url").val(data.datas);
        $("#wechat_video_url_a").attr("href", data.datas).removeClass("disabled")
    }
}
