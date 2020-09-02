$(function () {

    var map;
    var busMarker;
    var timer = null;
    var icon;
    var errorCount = 0;
    var maxErrorCount = 100;
    var reDrawMakerCount = 0;
    var maxReDrawMakerCount = 10;


    var init = function () {
        initMap();
        initSelect();
        loadLocation();
        initElement();
        addShang();
    };


    function initElement() {
        $("#line-number").change(changeLineNumber);
        //$("#timer").change(setTimer);
        $("#customer-input-remove").click(function () {
            $("#bus-number").val("");
            window.localStorage.removeItem('busNumber');
            if ($('#line-number option').get(0) != null) {
                $('#line-number option').get(0).selected = true;
            }
            changeLineNumber();
        });
        $("#follow").bootstrapSwitch('state', true);
    }

    var initSelect = function () {
        var lineInCookie = window.localStorage.getItem("lineNumber");
        if (lineInCookie) {
            var hasOption = $('#line-number option[value="' + lineInCookie + '"]');
            if (hasOption.length > 0) {
                $('#line-number').val(lineInCookie);
            }
            changeLineNumber();
        }
        var busNumberCookie = window.localStorage.getItem("busNumber");
        //console.log("busNumberCookie:" + busNumberCookie);
        if (busNumberCookie) {
            busNumberCookie = busNumberCookie.replace("DD", "");
            $('#bus-number').val(busNumberCookie);
        }
    };

    var initMap = function () {
        map = new BMap.Map("container");
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.addControl(new BMap.GeolocationControl());
        // map.addControl(new BMap.ScaleControl());
        //map.setCurrentCity("合肥");          // 设置地图显示的城市 此项是必须设置的
        map.centerAndZoom("合肥", 15);
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.addTileLayer(new BMap.TrafficLayer());// 创建交通流量图层实例
    };

    var changeLineNumber = function () {
        setTimer();
        var lineNumber = $('#line-number').val();
        if (-1 == lineNumber) {
            $('#bus-number-div').removeClass("hide");
        } else {
            $('#bus-number-div').addClass("hide");
        }
    };

    var loadLocation = function () {
        var lineNumber = $('#line-number').val();
        window.localStorage.setItem('lineNumber', lineNumber);
        if (-1 == lineNumber) {
            var busNumber = $('#bus-number').val();
            if ($.trim(busNumber) != "" && busNumber.length == 4) {
                lineNumber = "DD" + busNumber;
                window.localStorage.setItem('busNumber', lineNumber);
            }
        }
        if ($.trim(lineNumber) == "" || lineNumber.length != 6) {
            clearMarker();
            return false;
        }
        $.ajax({
            url: "https://api.book.moujishu.com/v1/bus/" + lineNumber + "/location",
            type: "GET",
            dataType: "jsonp",
            success: function (datas) {
                if (datas) {
                    var code = datas.code;
                    if (code == 200) {
                        var data = datas.results;
                        var longitude = data.longitude;
                        var latitude = data.latitude;
                        var busPoint = new BMap.Point(longitude, latitude);
                        if (null == busMarker) {
                            busMarker = addMarker(busPoint, map);
                        } else {
                            if (reDrawMakerCount > maxReDrawMakerCount) {
                                clearMarker(); // fix css animation error
                                busMarker = addMarker(busPoint, map);
                            } else {
                                busMarker.setPosition(busPoint);
                            }
                            reDrawMakerCount++;
                        }
                        if ($('#follow').is(":checked")) {
                            map.centerAndZoom(busPoint, 16);
                        }

                    } else {
                        errorTip(datas.message);
                    }
                }
            },
            error: function (xhr) {
                errorTip("Server busy or error.");
            }
        });
        // $.ajax({
        //     url: "bus/" + lineNumber + "/location",
        //     success: function (datas) {
        //         var code = datas.code;
        //         if (code == 200) {
        //             var data = datas.results;
        //             var longitude = data.longitude;
        //             var latitude = data.latitude;
        //             var busPoint = new BMap.Point(longitude, latitude);
        //             if (null == busMarker) {
        //                 busMarker = addMarker(busPoint, map);
        //             } else {
        //                 if (reDrawMakerCount > maxReDrawMakerCount) {
        //                     clearMarker(); // fix css animation error
        //                     busMarker = addMarker(busPoint, map);
        //                 } else {
        //                     busMarker.setPosition(busPoint);
        //                 }
        //                 reDrawMakerCount++;
        //             }
        //             if ($('#follow').is(":checked")) {
        //                 map.centerAndZoom(busPoint, 16);
        //             }
        //
        //         } else {
        //             errorTip(datas.message);
        //         }
        //
        //     },
        //     error: function (xhr) {
        //         errorTip("Server busy or error.");
        //     }
        // })
    };
    var errorTip = function (msg) {
        clearMarker();
        layer.open({content: msg, skin: 'msg', time: 3});
        errorCount++;
        //console.log(errorCount);
        if (errorCount >= maxErrorCount) {
            clearTimer();
        }
    }
    var setTimer = function () {
        if (!timer) {
            var time = $('#timer').val();
            if (timer) {
                clearInterval(timer);
            }
            //console.log("setTimer");
            timer = setInterval(loadLocation, time);
            errorCount = 0;
        }
    };

    var clearTimer = function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
            errorCount = 0;
        }
    };

    var addMarker = function (point, map) {
        if (!icon) {
            icon = createIcon("https://cdn.jsdelivr.net/gh/aiservice/cdn/bus/img/bus.png");
        }
        var marker = new BMap.Marker(point, {icon: icon});
        var markerPulse = new ComplexCustomOverlay(point, marker);
        map.addOverlay(markerPulse);
        return markerPulse;
    };

    var clearMarker = function () {
        if (busMarker) {
            map.removeOverlay(busMarker);
            map.removeOverlay(busMarker.getMaker());
            busMarker = null;
        }
        reDrawMakerCount = 0;
    }

    var createIcon = function (iconLocation) {
        var icon = new BMap.Icon(iconLocation, new BMap.Size(50, 50), {});
        return icon;
    };
    var addShang = function () {
        var html = '<div style=" position: fixed; bottom: 2.5%; right: 2%; "><a href="http://www.ossoft.cn/dashang.html" target="_blank" class="btn" style="padding: 5px;color: #ec7259;background-color: #fff;border-color: #ec7259;width: 30px;height: 30px;border-radius: 50%;"><span>赞</span></a></div>';
        $("body").append(html)
    };

    init();

});
