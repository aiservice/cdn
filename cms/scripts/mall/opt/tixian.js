var columns_table = [];
columns_table.push({
    title: '我的网站', field: 'pd_name', align: 'left', valign: 'middle', formatter: "siteLinkFormatter"
});
columns_table.push({
    title: '待上链接', field: 'rel_name', align: 'left', valign: 'middle', formatter: "siteMyFormatter"
});
columns_table.push({
    class: 'hidden-480',
    title: '总价', field: 'order_money', align: 'center', valign: 'middle', formatter: "numFormatter"
});
columns_table.push({
    title: '购买月数', field: 'order_num', align: 'center', valign: 'middle', class: 'hidden-480',
});
columns_table.push({
    class: 'hidden-480',
    title: '时间', field: 'add_date', align: 'center', valign: 'middle', sortable: 'true', formatter: "dateFormatter"
});
columns_table.push({
    title: '状态', field: 'order_state', align: 'center', valign: 'middle', formatter: "orderStateFormatter"
});
columns_table.push({
    title: '操作', align: 'center', valign: 'middle', formatter: "optFormatter"
});
var $table;
var first = true;
var vform;
var vform_tixian;
$(function () {
    $("#tixian-left").addClass("active");
    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        var tagId = $(this).attr("href");
        if (tagId.indexOf("record") !== -1) {
            if (first) {
                console.log("init table...");
                $table = initTable(columns_table, "?method=listAjax");
                first = false;
            }
        }
    });

    $('#begin_date').datetimepicker({
        locale: 'zh-cn',
        format: 'YYYY-MM-DD'
    });
    $('#end_date').datetimepicker({
        locale: 'zh-cn',
        format: 'YYYY-MM-DD',
        useCurrent: false
    });
    $("#begin_date").on("dp.change", function (e) {
        $('#end_date').data("DateTimePicker").minDate(e.date);
    });
    $("#end_date").on("dp.change", function (e) {
        $('#begin_date').data("DateTimePicker").maxDate(e.date);
    });

    vform_tixian = $('#validation-form-tixian').validate({
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
            real_name: {required: true},
            bank_account: {required: true},
        },
        messages: {
            real_name: {required: "请填写真实姓名"},
            bank_account: {required: "请填写收款账号"},
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

function toTiXian() {
    if (vform_tixian.form()) {
        var cash_count = $("#cash_count").val();
        if (cash_count <= 10) {
            popTip("提现金额不能小于等于10");
            return false;
        }
        ajax("?method=tixian", "validation-form-tixian", "POST", tixianHandle, true, true)
    }
    return false;
}

function tixianHandle(data) {
    if (data.code == 1) {
        $("#cash_count").val(0);
        $("#bi_dianzi").val(0);
    }
}

function dateFormatter(value, row, index) {
    var end_date = "<p>" + moment(row.end_date).format('YYYY-MM-DD HH:mm:ss') + "</p>";
    return "<p>" + moment(value).format('YYYY-MM-DD HH:mm:ss') + "</p>" + end_date;
}

function toEdit() {
    $("#add_modal").modal('show');
}

function saveHandle(data) {
    if (data.code == 1) {
        $("#real_name").val($("#real_name_edit").val())
        $("#bank_account").val($("#bank_account_edit").val())
    }
    $("#add_modal").modal('hide');
}

function submitForm() {
    if (vform.form()) {
        ajax("?method=updateBankAccount", "validation-form", "POST", saveHandle, true, true)
    }
}