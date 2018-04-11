/**
 * Created by liushuai on 2017/11/22.
 */

$(function () {
    var IsSuccess = true;
    // getMinTime();
    $(window).resize(function () {
        $('.layer').height($(document).height());
    });
    // getData(data_obj,judegPage, drawTable,pageName);
    //选择时间维度索引
    var index = 0;
    //选择时间
    $('.content ').off('click', '.selectDate').on('click', '.selectDate', function (e) {
        e.stopPropagation();
        $('.marketList').parent('.slimScrollDiv').slideUp(200);
        $('.regionList').slideUp(200);
        $('.regionMarketList').slideUp(200);
        $('.carTypeList').slideUp(200);
        $('.suvList').slideUp(200);
        $('.carTypeList1').parent('.slimScrollDiv').slideUp(200);
        $('.brandList').parent('.slimScrollDiv').slideUp(200);
        // $('.brandList1').parent('.slimScrollDiv').slideUp(200);
        // $('.brandList2').parent('.slimScrollDiv').slideUp(200);
        // $('.regionNameList').slideUp(200);
        // $('.carTypeList_compete').parent('.slimScrollDiv').slideUp(200);
        // $('.productTypeList').slideUp(200);
        $('.priceList').slideUp(200);
        $('.dateControl1').remove();
        $('.dateControl2').remove();
        if ($('.dateList').css('display') == 'block') {
            $('#selectDateControl').remove();
            $('#selectDateControl1').remove();
            $('.dateList').slideUp(200);
        } else {
            $('.dateList').after('<input type="text" class="dateControl1" placeholder="" style="position: relative;top: -22px;left:-10px;opacity: 0;z-index: -1;display: none;" id="selectDateControl">');
            $('.dateList').after('<input type="text" class="dateControl2" placeholder="" style="position: relative;top: -22px;left:-10px;opacity: 0;z-index: -1;display: none;" id="selectDateControl1">');
            $('.dateList').slideDown(200);
        }
    });
    //选择时间
    $('.content').off('click', '.icon').on('click', '.icon', function (e) {
        e.stopPropagation();
        $(this).next().click();
    });


    //点击下拉开的时间
    $('.content').on('click', '.dateList li', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.dateList').hide();
        var str = $(this).text();
        $('.selectDate').attr('data-id', $(this).attr('data-id'));
        if ($.trim(str) == '自定义') {
            return;
        }
        $('.selectDate').val(str);
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        if ($('.detail_data').val()) {
            var detail_data = JSON.parse($('.detail_data').val());
        } else {
            var detail_data = {};
        }
        data_obj.dtEnd = '';
        data_obj.dtBegin = '';
        if ($('.chooseDateFormat span').eq(0).hasClass('active')) {
            data_obj.datespan = 'day';
        } else {
            data_obj.datespan = 'month';
        }


        data_obj.last = $(this).attr('date-num');
        if (tootip_data.pageId == 'SYS048MOD000201' || tootip_data.pageId == 'SYS048MOD000202' || tootip_data.pageId == 'SYS048MOD000203') {
            detail_data.dtEnd = '';
            detail_data.dtBegin = '';
            detail_data.last = $(this).attr('date-num');
        }
        if (tootip_data.pageId == 'SYS048MOD0200302') {
            data_obj.provinceName = '';
            data_obj.DistributionTypeEnum = 'Province';
        }
        $('.mapTitle .china').removeClass('clicked');
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.detail_data').val(JSON.stringify(detail_data));
        if (IsSuccess) {
            if ($('.mainContent').css('display') == 'block') {
                getData(data_obj, judegPage, drawTable, tootip_data, 4);
            } else {
                getDetailData(detail_data, judegPage, drawTable, tootip_data, 3);
            }
        }
    });

    //选择大区
    $(document).off('click', '.regionItem').on('click', '.regionItem', function (e) {
        if ($(this).prev('input:checkbox').prop('checked') == true) {
            $(this).prev('input:checkbox').prop('checked', false);
            var str = $(this).text();
            $('.selectAreaBox .selectItem').each(function (index, item) {
                if ($(item).text() == str) {
                    $(item).remove();
                }
            });
        } else {
            $(this).prev('input:checkbox').prop('checked', true);
            $('.selectAreaBox').append("<span class='selectItem'>" + $(this).text() + "<i></i></span>");
        }
    });
    /*  $(document).on('click','.selectArea input',function () {
     if($(this).prop('checked')==true){
     $('.selectAreaBox').append("<span class='selectItem'>"+$(this).next().text()+"<i></i></span>");
     }else{
     var str = $(this).text();
     $('.selectAreaBox .selectItem').each(function (index,item) {
     if($(item).text()==str){
     $(item).remove();
     }
     });
     }
     });*/
    //关闭大区
    $(document).on('click', '.closeRegion', function () {
        $('.selectAreaBox span').each(function (index, item) {
            $(item).remove();
        });
        $('.selectArea .regionItem').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        })
    });
    //关闭城市
    $(document).on('click', '.closeCityLevel', function () {
        $('.cityBox span').each(function (index, item) {
            $(item).remove();
        });
        $('.cityList label').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        })
    });
    //关闭省份城市
    $(document).on('click', '.closeCity', function () {
        $('.provinceCityBox span').each(function (index, item) {
            $(item).remove();
        });
        $('.provinceTable').find('label').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        });
        $('.subOptions label').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        })
    });
    //选择区域
    $(document).off('click', '.regionBtn').on('click', '.regionBtn', function () {
        var fourRegion = [];
        $('.selectAreaBox .selectItem').each(function (index, item) {
            fourRegion.push($.trim($(item).text()));
        });
        if (fourRegion.length == 0) {
            layer.msg('请选择大区!');
            return;
        }
        $('.areas').html(fourRegion.join(';') + '<i class="add_more"></i>');
        $('.areas').attr('data-type', '2');
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        var detail_data = JSON.parse($('.detail_data').val());
        data_obj.catarcarea = fourRegion.join(',');
        data_obj.catarccitylevel = '';
        data_obj.province = '';
        data_obj.city = '';
        $('.areas').removeAttr('data-province');
        $('.areas').removeAttr('data-city');
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.layer').hide();
        $('.layerCon').hide();
        $('.selectRegion').val('大区');
        $('.selectAreaBox').html('');
        $('.selectArea label').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        });
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });

    //选择城市级别
    $(document).off('click', '.cityItem').on('click', '.cityItem', function () {
        if ($(this).prev('input:checkbox').prop('checked') == true) {
            $(this).prev('input:checkbox').prop('checked', false);
            var str = $(this).text();
            $('.cityBox .selectItem').each(function (index, item) {
                if ($(item).text() == str) {
                    $(item).remove();
                }
            });
        } else {
            $(this).prev('input:checkbox').prop('checked', true);
            $('.cityBox').append("<span class='selectItem'>" + $(this).text() + "<i></i></span>");
        }
    });
    //选择城市
    $(document).off('click', '.cityBtn').on('click', '.cityBtn', function () {
        var cityArr = [];
        $('.cityBox .selectItem').each(function (index, item) {
            cityArr.push($.trim($(item).text()));
        });
        if (cityArr.length == 0) {
            layer.msg('请选择城市!');
            return;
        }
        $('.areas').html(cityArr.join(';') + '<i class="add_more"></i>');
        $('.areas').attr('data-type', 3);
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        data_obj.catarcarea = '';
        data_obj.province = '';
        data_obj.city = '';
        $('.areas').removeAttr('data-province');
        $('.areas').removeAttr('data-city');
        data_obj.catarccitylevel = cityArr.join(',');
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.layer').hide();
        $('.layerCon').hide();
        $('.cityBox').html('');
        $('.cityList label').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        });
        $('.selectRegion').val('城市级别');
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });

    //打开选择细分指标
    $('.content').off('click', '.marketName').on('click', '.marketName', function (e) {
        e.stopPropagation();
        if ($('.marketList').parent('.slimScrollDiv').css('display') == 'none') {
            $('.marketList').parent('.slimScrollDiv').slideDown(200);
        } else {
            $('.marketList').parent('.slimScrollDiv').slideUp(200);
        }
        $('.regionList').slideUp(200);
        $('.dateList').slideUp(200);

    });
    $('.content').on('click', '.marketList li', function (e) {
        e.stopPropagation();
        $('.marketList').parent('.slimScrollDiv').hide();
        $('.selectDate').attr('data-id', $(this).attr('data-id'));
        var str = $(this).text();
        $('.marketName').val(str);
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        data_obj.groupby = $(this).attr('data-id');


        if (str == '整体市场') {
            data_obj.view = '';
            $('.content .subMenu').html('');
            $(".chartBox").css('margin-top', 0);
            if (tootip_data.tabName.substring(0, 2) == '关注') {
                tootip_data.subTabName = '关注走势'
            } else if (tootip_data.tabName.substring(0, 2) == '预购') {
                tootip_data.subTabName = '预购走势'
            } else if (tootip_data.tabName.substring(0, 2) == '销量') {
                tootip_data.subTabName = '销量走势'
            }
        } else {
            if ($('.content .subMenu .active').index() == 1) {
                data_obj.view = 'percent';
                var str = ' <span>' + tootip_data.tabName.substring(0, 2) + '走势</span>' +
                    '<span class="active">' + tootip_data.tabName.substring(0, 2) + '百分比</span>';
            } else {
                data_obj.view = '';
                var str = ' <span class="active">' + tootip_data.tabName.substring(0, 2) + '走势</span>' +
                    '<span>' + tootip_data.tabName.substring(0, 2) + '百分比</span>';
            }
            $('.content .subMenu').html(str);
            $(".chartBox").css('margin-top', '75px');
        }

        $('.tootip_data ').val(JSON.stringify(tootip_data));
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });

    //打开选择所属大区
    $('.content').off('click', '.selectRegion').on('click', '.selectRegion', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.brandList').parent('.slimScrollDiv').slideUp(200);
        $('.marketList').parent('.slimScrollDiv').slideUp(200);
        if ($('.regionList').css('display') == 'none') {
            $('.regionList').slideDown(200);
        } else {
            $('.regionList').slideUp(200);
        }
    });
    $(document).off('click', '.selectBox').on('click', '.selectBox', function (e) {
        e.stopPropagation();
        $(this).find('.icon').click();
    });
    //选择区域类型
    $('.content').off('click', '.regionList li').on('click', '.regionList li', function (e) {
        e.stopPropagation();
        $('.regionList').hide();
        var dataId = $(this).attr('data-id');
        var str = $(this).text();
        $('.selectDate').attr('data-id', $(this).attr('data-id'));
        $('.layerCon').each(function (index, item) {
            $(item).hide();
        });
        if (dataId == '1') {
            $('.selectRegion').val(str);
            $('.areas').html('全国');
            var data_obj = JSON.parse($('.data_obj').val());
            var tootip_data = JSON.parse($('.tootip_data').val());
            data_obj.catarcarea = '';
            data_obj.catarccitylevel = '';
            data_obj.province = '';
            data_obj.city = '';
            $('.areas').removeAttr('data-province');
            $('.areas').removeAttr('data-city');
            $('.data_obj').val(JSON.stringify(data_obj));
            if (IsSuccess) {
                getData(data_obj, judegPage, drawTable, tootip_data, 4);
            }
            $('.areas').attr('data-type', 0);
        } else {
            checkedBox(dataId);
        }
    });
    //关闭弹框
    $('.close').click(function () {
        $('.subOptions').hide();
        $('.triggle').hide();
        $('.layer').hide();
        $('.layerCon').hide();
    });
    function checkedBox(flag) {
        $('.layerCon').each(function (index, item) {
            $(item).hide();
        });
        // if($('.areas').attr('data-type')==1){
        //大区
        if (flag == '2') {
            $('.layer').show();
            $('.layer1').show();
            if ($('.areas').text().length == 0) {
                return;
            }
            var selectArr = $('.areas').text().substring(0, $('.areas').text().length).split(';');
            for (var i = 0; i < selectArr.length; i++) {
                var curName = $.trim(selectArr[i]);
                $('.selectArea .regionItem').each(function (index, item) {
                    if (curName == $.trim($(item).text())) {
                        $(item).prev('input:checkbox').prop('checked', true);
                        $('.selectAreaBox').append("<span class='selectItem '>" + $(item).text() + "<i></i></span>");
                    }
                })
            }
            // } else if($('.areas').attr('data-type')==2){
            //城市级别
        } else if (flag == '3') {
            $('.layer').show();
            $('.layer3').show();
            if ($('.areas').text().length == 0) {
                return;
            }
            var selectArr1 = $('.areas').text().substring(0, $('.areas').text().length).split(';');
            for (var i = 0; i < selectArr1.length; i++) {
                var curName1 = $.trim(selectArr1[i]);
                $('.cityList .cityItem').each(function (index, item) {
                    if (curName1 == $.trim($(item).text())) {
                        $(item).prev('input:checkbox').prop('checked', true);
                        $('.cityBox').append("<span class='selectItem '>" + $(item).text() + "<i></i></span>");
                    }
                })
            }
            // }else if($('.areas').attr('data-type')==3){
            //省份
        } else if (flag == '4') {
            $('.layer').show();
            $('.layer2').show();
            if ($('.areas').text().length == 0) {
                return;
            }
            $('.provinceTable span').each(function (index, item) {
                $(item).prev('label').removeClass('half');
            })
            var provinceArr = $('.save_province').val().split(',');
            for (var n = 0; n < provinceArr.length; n++) {
                $('.provinceTable span').each(function (index, item) {
                    if ($(item).text() == provinceArr[n]) {
                        $(item).prev('label').addClass('half');
                    }
                })
            }
            $('.provinceCityBox').html($('.save_province_id').val());
            if ($('.areas').attr('data-province')) {
                var provinceArr = $('.areas').attr('data-province').split(',');
                for (var i = 0; i < provinceArr.length; i++) {
                    var curName2 = $.trim(provinceArr[i]);
                    $('.provinceTable label').each(function (index, item) {
                        if ($.trim($(item).next('span').text()) == curName2) {
                            $(item).prev('input:checkbox').prop('checked', true);
                        }
                    });
                }
            }

            /*  if ($('.areas').attr('data-province')) {
             var provinceArr = $('.areas').attr('data-province').split(',');
             for (var i = 0; i < provinceArr.length; i++) {
             var curName2 = $.trim(provinceArr[i]);
             $('.provinceTable label').each(function (index, item) {
             if ($.trim($(item).text()) == curName2) {
             $(item).prev('input:checkbox').prop('checked', true);
             $('.provinceCityBox').append("<span class='selectItem provinceItem'>" + $(item).text() + "<i></i></span>");
             }
             });
             }
             }
           if ($('.areas').attr('data-city')) {
             var cityArr = $('.areas').attr('data-city').split(',');
             for (var j = 0; j < cityArr.length; j++) {
             if (cityArr[j].length != 0) {
             $('.provinceCityBox').append("<span class='selectItem cityItem'>" + cityArr[j] + "<i></i></span>");
             }
             }
             }*/
        }
    }

    $(document).off('click', '.add_more').on('click', '.add_more', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.marketList').parent('.slimScrollDiv').slideUp(200);
        $('.regionList').slideUp(200);
        var id = $('.areas').attr('data-type');
        checkedBox(id);
    });
    $(document).off('click', '.addArea .areas').on('click', '.addArea .areas', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.dateList').slideUp(200);
        $('.marketList').parent('.slimScrollDiv').slideUp(200);
        $('.regionList').slideUp(200);
        $('.brandList').parent('.slimScrollDiv').slideUp(200);
        var id = $('.areas').attr('data-type');
        checkedBox(id);
    });

    //点击其他地方隐藏下拉框
    $(document).on('click', function (event) {
        if (event.target.className != 'selectText selectDate') {
            $('.dateList').slideUp(200);
        }
        if (event.target.className != 'selectText marketList') {
            $('.marketList').parent('.slimScrollDiv').slideUp(200);
        }
        if (event.target.className != 'selectText selectRegion') {
            $('.regionList').slideUp(200);
        }
        if (event.target.className != 'selectText selectProduct') {
            $('.productTypeList').slideUp(200);
        }
        if (event.target.className != 'selectText selectBrand') {
            $('.brandList').parent('.slimScrollDiv').slideUp(200);
        }
        if (event.target.className != 'selectText regionMarketName') {
            $('.regionMarketList').slideUp(200);
        }
        if (event.target.className != 'selectText selectRegionName') {
            $('.regionNameList').slideUp(200);
        }
        if (event.target.className != 'selectList carTypeList') {
            $('.carTypeList').slideUp(200);
        }
        if (event.target.className != 'selectText selectPrice') {
            $('.priceList').slideUp(200);
        }
        if (event.target.className != 'selectText carLevel') {
            $('.carTypeList').slideUp(200);
        }
        if (event.target.className != 'selectText suvName') {
            $('.suvList').slideUp(200);
        }
        if (event.target.className != 'selectText queryInput') {
            $('.brandList').parent('.slimScrollDiv').slideUp(200);
        }


        // 选择品牌车型失焦事件
        // var isSelect = $(event.target).parent('ul').hasClass('brandList');
        // if(!isSelect && $('.brandList').parent('.slimScrollDiv').css('display') != 'none'){
        //     if($('.brandList').find('li').length){
        //         $('.brandList').find('.hover').click();
        //     }else{
        //         showLayer(true,tootip_data,'noSelect');
        //     }  
        // }
    });
    //选择区域x掉已选
    $('.selectAreaBox').off('click', '.selectItem').on('click', '.selectItem', function () {
        var str = $(this).text();
        $('.selectArea .regionItem').each(function (index, item) {
            if ($(item).text() == str) {
                $(item).prev('input:checkbox').prop('checked', false);
            }
        });
        $(this).remove();
    });

    //选择城市x掉已选
    $('.cityBox').off('click', '.selectItem').on('click', '.selectItem', function () {
        var str = $(this).text();
        $('.cityList .cityItem').each(function (index, item) {
            if ($(item).text() == str) {
                $(item).prev('input:checkbox').prop('checked', false);
            }
        });
        $(this).remove();
    });
    //省份/城市弹框交互
    var totalInput = 0;//下拉框中的城市个数
    $(document).off('click', '.provinceTable .option').on('click', '.provinceTable .option', function (e) {
        e.stopPropagation();
        $(this).removeClass('half');
        //打开弹层的时候渲染已选过的城市
        //判断选中所有下拉框中城市
        if ($(this).prev('input:checkbox').prop('checked') == true) {
            //当前省份城市
            if ($(this).parent('div').hasClass('currentCity')) {
                $('.subOptions label').each(function (ind, it) {
                    $(it).prev('input:checkbox').prop('checked', false);
                });
            }
            var curCity = $(this).next('span').text();
            $('.provinceCityBox .selectItem').each(function (index, item) {
                if ($(item).text() == curCity) {
                    $(item).remove();
                }
            });
            if ($(this).parent('div').hasClass('currentCity')) {
                $('.provinceCityBox span').each(function (index, item) {
                    $('.subOptions label').each(function (ind, it) {
                        if ($(item).text() == $(it).text()) {
                            $(item).remove();
                        }
                    })
                });
            }
            //取消选中删除对应城市列表已选择的城市
            $('.provinceCityBox span').each(function (index, item) {
                if(curCity==$(item).attr('data-id')){
                    $(item).remove();
                }
            });
            totalInput = 0;
        } else {
            if ($(this).parent('div').hasClass('currentCity')) {
                $('.subOptions').find('input:checkbox').each(function (index, item) {
                    $(item).prop('checked', true);
                });
            }
            if ($(this).parent('div').hasClass('currentCity')) {
                $('.provinceCityBox span').each(function (index, item) {
                    $('.subOptions label').each(function (ind, it) {
                        if ($(item).text() == $(it).text()) {
                            $(item).remove();
                        }
                    })
                });
            }
            var curCityName =  $(this).next('span').text();
            $('.provinceCityBox .cityItem').each(function (index, item) {
                if($(item).attr('data-id')==curCityName){
                    $(item).remove();
                }
            });
            $('.provinceCityBox').append("<span class='selectItem provinceItem'>" + $(this).next('span').text() + "<i></i></span>");
            totalInput = $('.subOptions label').length;
        }
    });
    /*点击显示省份所有的城市*/
    $(document).off('click', '.provinceTable span').on('click', '.provinceTable span', function (e) {
        e.stopPropagation();
        $('.options .triggle').hide();
        $('.subOptions').remove();
        var str = $('#subOptions').html();
        var cityArr = $(this).prev('label').attr('data-city').split(',');
        var content = juicer(str, {cityArr: cityArr});
        $(content).insertAfter($(this).parent().parent());
        //添加当前currentCity
        // $('.provinceTable .optionItem').removeClass('currentCity');
        if($(this).parent().hasClass('currentCity')){
            $('.provinceTable .optionItem').removeClass('currentCity');
        }else{
            $('.provinceTable .optionItem').removeClass('currentCity');
            $(this).parent().addClass('currentCity');
        }
        // $('.subOptions').show();
        if($(this).parent().hasClass('currentCity')){
            $('.subOptions').show();
            $(this).parent().find('.triggle').show();
        }else{
            $('.subOptions').hide();
        }
        //清除所有的当前城市currentCity
        if ($(this).parents('.optionItem').find('input:checkbox').prop('checked') == true && $(this).parent('div').hasClass('currentCity')) {
            $('.subOptions input:checkbox').each(function (index, item) {
                $(item).prop('checked', true);
            })
        }
        //勾选已选择过的城市
        $('.provinceCityBox span').each(function (index, item) {
            $('.subOptions label').each(function (ind, it) {
                if ($(item).text() == $(it).text()) {
                    $(it).prev('input:checkbox').prop("checked", true);
                }
            })
        });
        if ($(this).parent('div').hasClass('currentCity')) {
            totalInput = 0;
            $('.subOptions input').each(function (index, item) {
                if ($(item).prop('checked') == true) {
                    totalInput++;
                }
            });
        }
    });
    $(document).off('click', '.provinceTable i').on('click', '.provinceTable i', function (e) {
        e.stopPropagation();
        $(this).prev('span').click();
    });
    //点击下面所有的城市
    var selectProvince = [];
    $('.provinceTable').off('click', '.subOptions label').on('click', '.subOptions label', function (e) {
        e.stopPropagation();
        //统计选中个数
        if ($(this).prev('input:checkbox').prop('checked') == true) {
            totalInput--;
        } else {
            totalInput++;
        }
        //如果全选城市 则 去掉所选城市 选择当前省份
        if (totalInput == $('.subOptions').find('input:checkbox').length) {
            $('.provinceTable').find('.currentCity').find('input:checkbox').prop('checked', true);
            $('.provinceCityBox').append("<span class='selectItem provinceItem'>" + $('.provinceTable').find('.currentCity').find('span').text() + "<i></i></span>");
            $('.subOptions label').each(function (index, item) {
                var currentProvinceName = $(item).text();
                $('.provinceCityBox span').each(function (ind, it) {
                    if ($(it).text() == currentProvinceName) {
                        $(it).remove();
                    }
                })
            });
            $('.currentCity').find('label').removeClass('half');
        } else {
            if (totalInput > 0) {
                if ($('.currentCity').find('label').hasClass('half') == false) {
                    $('.currentCity').find('label').addClass('half');
                }
            } else if (totalInput == 0) {
                $('.currentCity').find('label').removeClass('half');
            }
            $('.provinceTable').find('.currentCity').find('input:checkbox').prop('checked', false);
            //清除掉上面所选省份名称
            var provinceName = $('.provinceTable').find('.currentCity').find('span').text();
            $('.provinceCityBox .selectItem').each(function (index, item) {
                if ($(item).text() == provinceName) {
                    $(item).remove();
                }
            });
            //取消选中状态与已选择城市对应
            var curCityName = $(this).text();
            if ($(this).prev('input:checkbox').prop('checked') == true) {
                $('.provinceCityBox span').each(function (index, item) {
                    if ($(item).text() == curCityName) {
                        $(item).remove();
                    }
                })
            } else {
                $('.provinceCityBox').append("<span class='selectItem cityItem' data-id=" + $('.currentCity').find('span').text() + ">" + $(this).text() + "<i></i></span>");
            }
            //
            $('.subOptions label').each(function (index, item) {
                var flag = true;
                var curName = $(item).text();
                $('.provinceCityBox .selectItem').each(function (ind, it) {
                    if ($(it).text() == curName && $(item).prev('input:checkbox').prop('checked') == true) {//如果相等并且
                        flag = false;
                    }
                });
                if (flag == true) {
                    if ($(item).text() != curCityName && $(item).prev('input:checkbox').prop('checked') == true) {
                        $('.provinceCityBox').append("<span class='selectItem cityItem' data-id=" + $('.currentCity').find('span').text() + ">" + $(item).text() + "<i></i></span>");
                    }
                }
            });
        }
    });

    //删除所选省市
    $(document).on('click', '.provinceCityBox .selectItem', function (e) {
        var curProvince = $(this).attr('data-id');
        var totalCity = -1;
        $('.provinceCityBox span').each(function (index, item) {
            if ($(item).attr('data-id') == curProvince) {
                totalCity++;
            }
        });
        $('.subOptions input').each(function (index, item) {
            if ($(item).prop('checked') == true) {
                totalInput++;
            }
        });
        if (totalCity == 0) {
            $('.provinceTable').find('.half').each(function (index, item) {
                if ($(item).next('span').text() == curProvince) {
                    $(item).removeClass('half');
                }
            })
        }
        var curName = $(this).text();
        $('.subOptions label').each(function (index, item) {
            if ($(item).text() == curName) {
                $(item).prev('input:checkbox').prop('checked', false);
            }
        });
        //判断每一个删除的省份对应省份取消选中状态并且如果下拉框城市是当前所属省份取消每一个选中的样式
        $('.provinceTable .option').each(function (ind, it) {
            if ($(it).next('span').text() == curName) {
                $(it).prev('input:checkbox').prop('checked', false);
                $(it).removeClass('half');
                if ($(it).parent().hasClass('currentCity') && curName == $(it).next('span').text()) {
                    $('.subOptions label').each(function (i, t) {
                        $(t).prev('input:checkbox').prop('checked', false);
                    })
                }
            }
        });
        $(this).remove();
    });
    //选择省市确定按钮
    $(document).on('click', '.provinceBtn', function () {
        $('.save_province_id').val($('.provinceCityBox').html());
        var strArr = [];
        $('.provinceCityBox span').each(function (index, item) {
            strArr.push($(item).text());
        });
        var provinceArr = [];
        var cityArr = [];
        $('.provinceCityBox').find('.provinceItem').each(function (index, item) {
            provinceArr.push($.trim($(item).text()));
        });
        $('.provinceCityBox').find('.cityItem').each(function (index, item) {
            cityArr.push($.trim($(item).text()));
        });
        if (provinceArr.length == 0 && cityArr.length == 0) {
            layer.msg('请选择省份/城市!');
            return;
        }
        $('.areas').html(strArr.join(';') + '<i class="add_more"></i>');
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        data_obj.province = provinceArr.join(',');
        data_obj.city = cityArr.join(',');
        data_obj.catarccitylevel = '';
        data_obj.catarcarea = '';
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.areas').attr('data-type', 4);
        $('.areas').attr('data-province', provinceArr);
        $('.areas').attr('data-city', cityArr);
        // $('.layer').hide();
        // $('.layerCon').hide();
        var provinceList = [];
        $('.half').each(function (index, item) {
            provinceList.push($.trim($(item).next('span').text()));
        });
        $('.save_province').val(provinceList);
        $('.closeCity').click();
        $('.selectRegion').val('省份/城市');
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });

    $('.record_page').val(JSON.parse($('.tootip_data').val()).pageId);
    $('.record_tag').val(JSON.parse($('.tootip_data').val()).pageId);


    //切换日期 按天 or 按月
    $('.content').on('click', '.chooseDateFormat span', function (e) {
        e.stopPropagation();
        $('.layui-laydate').hide();
        $('.dateList').hide();
        $('.slimScrollDiv').slideUp(200);
        $('.regionList').slideUp(200);
        $('.regionNameList').slideUp(200);
        $('.regionMarketList').slideUp(200);
        $('.productTypeList').slideUp(200);
        $('.carTypeList').slideUp(200);
        $('.priceList').slideUp(200);
        var pageId = JSON.parse($('.tootip_data').val()).pageId;
        var data_obj = JSON.parse($('.data_obj').val());
        var detail_data = JSON.parse($('.detail_data').val());
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        var str = '';
        $('.record_time').val('');
        if (index == 0) {
            str = '<li data-id="1" date-num="7day">最近7天</li>';
            if (pageId != 'SYS048MOD000102') {
                str += '<li data-id="2" date-num="30day">最近30天</li>';
            }
            str += '<li data-id="4" id="custom">自定义</li>';
            $('.selectDate').val('最近30天');
            $('.dateList').html(str);
            $('#selectDateControl').show();
            $('#selectDateControl1').hide();
            data_obj.datespan = 'day';
            detail_data.datespan = 'day';
            data_obj.last = '30day';
            detail_data.last = '30day';
            data_obj.dtBegin = '';
            detail_data.dtBegin = '';
            data_obj.dtEnd = '';
            detail_data.dtEnd = '';
        } else if (index == 1) {
            if (pageId == 'SYS048MOD000203' || pageId == 'SYS048MOD000202' || pageId == 'SYS048MOD000201') {
                str = '<li data-id="9" date-num="1month">最近1个月</li>';
                str += '<li data-id="9" date-num="3month">最近3个月</li>';
                str += '<li data-id="9" date-num="6month">最近6个月</li>';
                str += '<li data-id="10" date-num="12month">最近12个月</li>';
                str += '<li data-id="12" id="custom">自定义</li>';
            } else {
                str = '<li data-id="9" date-num="6month">最近6个月</li>';
                str += '<li data-id="10" date-num="12month">最近12个月</li>';
                str += '<li data-id="12" id="custom">自定义</li>';
            }
            $('.selectDate').val('最近12个月');
            $('.dateList').html(str);
            $('#selectDateControl').hide();
            $('#selectDateControl1').show();
            data_obj.datespan = 'month';
            detail_data.datespan = 'month';
            data_obj.last = '12month';
            detail_data.last = '12month';
            data_obj.dtBegin = '';
            detail_data.dtBegin = '';
            data_obj.dtEnd = '';
            detail_data.dtEnd = '';
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.detail_data').val(JSON.stringify(detail_data));
        if (IsSuccess) {
            if ($('.mainContent').css('display') == 'block') {
                getData(data_obj, judegPage, drawTable, tootip_data, 4);
            } else {
                getDetailData(detail_data, judegPage, drawTable, tootip_data, 3);
            }
        }
    });
    //点击自定义打开时间控件
    $('.content').on('click', '#custom', function (e) {
        var minDate = JSON.parse($('.min_time').val());
        e.preventDefault();
        e.stopPropagation();
        //选择日期时间控件
        var min = '';
        var max = '';
        var pageId = JSON.parse($('.tootip_data').val()).pageId;
        var tagName = JSON.parse($('.tootip_data').val()).tabName;
        switch (pageId) {
            case "SYS048MOD000101":
                switch (tagName) {
                    case'关注走势':
                        min = minDate.AttentionMinDate;
                        max = minDate.AttentionMaxDate;
                        break;
                    case '预购走势':
                        min = minDate.LeadsMinDate;
                        max = minDate.LeadsMaxDate;
                        break;
                    case '销量走势':
                        min = minDate.SaleVolMinDate;
                        max = minDate.SaleVolMaxDate;
                        break;
                }
                break;
            case "SYS048MOD000102":
                switch (tagName) {
                    case'关注走势':
                        min = minDate.AttentionMinDate;
                        max = minDate.AttentionMaxDate;
                        break;
                    case '预购走势':
                        min = minDate.LeadsMinDate;
                        max = minDate.LeadsMaxDate;
                        break;
                    case '销量走势':
                        min = minDate.SaleVolMinDate;
                        max = minDate.SaleVolMaxDate;
                        break;
                }
                break;
            case "SYS048MOD000201":
                switch (tagName) {
                    case '关注排名':
                        min = minDate.AttentionMinDate;
                        max = minDate.AttentionMaxDate;
                        break;
                    case '预购排名':
                        min = minDate.LeadsMinDate;
                        max = minDate.LeadsMaxDate;
                        break;
                    case '销量排名':
                        min = minDate.SaleVolMinDate;
                        max = minDate.SaleVolMaxDate;
                        break;
                }
                break;
            case "SYS048MOD000202":
                switch (tagName) {
                    case '关注排名':
                        min = minDate.AttentionMinDate;
                        max = minDate.AttentionMaxDate;
                        break;
                    case '预购排名':
                        min = minDate.LeadsMinDate;
                        max = minDate.LeadsMaxDate;
                        break;
                    case '销量排名':
                        min = minDate.SaleVolMinDate;
                        max = minDate.SaleVolMaxDate;
                        break;
                }
                break;
            case "SYS048MOD000203":
                switch (tagName) {
                    case '关注排名':
                        min = minDate.AttentionMinDate;
                        max = minDate.AttentionMaxDate;
                        break;
                    case '预购排名':
                        min = minDate.LeadsMinDate;
                        max = minDate.LeadsMaxDate;
                        break;
                    case '销量排名':
                        min = minDate.SaleVolMinDate;
                        max = minDate.SaleVolMaxDate;
                        break;
                }
                break;
            case "SYS048MOD02001":
                switch (tagName) {
                    case'关注走势':
                        min = minDate.AttentionMinDate;
                        max = minDate.AttentionMaxDate;
                        break;
                    case '预购走势':
                        min = minDate.LeadsMinDate;
                        max = minDate.LeadsMaxDate;
                        break;
                    case '销量走势':
                        min = minDate.SaleVolMinDate;
                        max = minDate.SaleVolMaxDate;
                        break;
                }
                break;
            case "SYS048MOD0200201":
                min = minDate.CompetitiveIndexMinDate;
                max = minDate.CompetitiveIndexMaxDate;
                break;
            case "SYS048MOD02002":
                switch (tagName) {
                    case "对比车型":
                        min = minDate.CompetitivePrimaryMinDate;
                        max = minDate.CompetitivePrimaryMaxDate;
                        break;
                    case "对比关系":
                        min = minDate.CompetitiveRelationMinDate;
                        max = minDate.CompetitiveRelationMaxDate;
                        break;
                    case "竞争重合":
                        min = minDate.CompetitiveSuperposeMinDate;
                        max = minDate.CompetitiveSuperposeMaxDate;
                        break;
                    case "访问流转":
                        min = minDate.CompetitiveIOMinDate;
                        max = minDate.CompetitiveIOMaxDate;
                        break;
                }
                break;
            case "SYS048MOD0200301":
                min = minDate.AreaSalesTrendMinDate;
                max = minDate.AreaSalesTrendMaxDate;
                break;
            case "SYS048MOD0200302":
                min = minDate.AreaSalesDistributionMinDate;
                max = minDate.AreaSalesDistributionMaxDate;
                break;
        }
        var differDays = 0;
        var minTime = null;
        var canFillDate = true;
        var pageIndex = 0;
        var d = new Date();
//d.getMonth()+1代表下个月，月份索引从0开始，即当前月为6月时，getMonth()返回值为5，创建日期时同理
//此处构造的日期为下个月的第0天，天数索引从1开始，第0天即代表上个月的最后一天
        var curMonthDays = new Date(d.getFullYear(), (d.getMonth() + 1), 0).getDate();
        var endTime = max.slice(0, 7) + '-' + curMonthDays;
        lay('#version').html('-v' + laydate.v);
        var start = min.slice(0, 4) + '/' + min.slice(5, 7);
        var end = max.slice(0, 4) + '/' + max.slice(5, 7);
        var recordTime = start + ' - ' + end;
        if ($('.record_time').val() != '' && $(".record_time").val() != undefined && $('.record_time').val() != null) {
            if (pageId == $('.record_page').val() && tagName == $('.record_tag').val()) {
                recordTime = $(".record_time").val();
            }
        }
        if ($('.chooseDateFormat span').eq(0).hasClass('active')) {
            //选择月份时间控件
            var ins1 = laydate.render({
                elem: '#selectDateControl',
                range: true,
                format: 'yyyy/MM/dd',
                // theme: '#4c79e3',
                // min:min,
                // max: endTime,
                // value:recordTime,
                ready: function (value, date, endDate) {

                },
                change: function (date) {

                },
                done: function (value, date, endDate) {
                    var data_obj = JSON.parse($('.data_obj').val());
                    var tootip_data = JSON.parse($('.tootip_data').val());
                    // console.log(value); //得到日期生成的值，如：2017-08-18
                    // console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                    // console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                    var startMonth = value.slice(0, 10);
                    var endMonth = value.slice(13, 23);
                    differDays = DateDiff(startMonth, endMonth);
                    if (tootip_data.pageId != 'SYS048MOD000102') {
                        if (differDays > 30) {
                            alert('最多可以选择30天!');
                            return;
                        } else if (differDays < 7) {
                            alert('最少可以选择7天!');
                            return;
                        }
                    } else {
                        if (differDays < 7) {
                            alert('最少可以选择7天!');
                            return;
                        } else if (differDays > 30) {
                            alert('最多可以选择30天!');
                            return;
                        }
                    }
                    if ($('.detail_data').val()) {
                        var detail_data = JSON.parse($('.detail_data').val());
                    } else {
                        var detail_data = {};
                    }
                    if (value != '' && value != undefined && value != null) {
                        $('.selectDate').val(value);
                        data_obj.last = '';
                        detail_data.last = '';
                        data_obj.dtBegin = value.slice(0, 10);
                        detail_data.dtBegin = value.slice(0, 10);
                        data_obj.datespan = 'day';
                        detail_data.datespan = 'day';
                        data_obj.dtEnd = value.slice(13, 23);
                        detail_data.dtEnd = value.slice(13, 23);
                        if (tootip_data.pageId == 'SYS048MOD0200302') {
                            data_obj.provinceName = '';
                            data_obj.DistributionTypeEnum = 'Province';
                        }
                        $('.mapTitle .china').removeClass('clicked');
                        $('.data_obj').val(JSON.stringify(data_obj));
                        $('.detail_data').val(JSON.stringify(detail_data));
                        $('.record_time').val(value);
                        $('.record_page').val(pageId);
                        $('.record_tag').val(tagName);
                        if (IsSuccess) {
                            if ($('.mainContent').css('display') == 'block') {
                                getData(data_obj, judegPage, drawTable, tootip_data, 4);
                            } else {
                                getDetailData(detail_data, judegPage, drawTable, tootip_data, 3);
                            }
                        }
                    } else {
                        $('.selectDate').val('自定义');
                    }
                    $('.dateControl1').remove();
                }
            });
            $('#selectDateControl').css('opacity', 0);
            $('#selectDateControl').show();
            $('#selectDateControl').focus();
        } else {
            var ins2 = laydate.render({
                elem: '#selectDateControl1',
                range: true,
                type: 'month',
                format: 'yyyy/MM',
                // theme: '#4c79e3',
                min: min,
                max: endTime,
                value: recordTime,
                ready: function (value, date, endDate) {
                    // $('.laydate-prev-y').eq(0).append('<span style="font-size: 14px;margin-left: 10px">开始日期</span>');
                    // $('.laydate-prev-y').eq(1).append('<span style="font-size: 14px;margin-left: 10px">结束日期</span>');
                    $('.laydate-main-list-0 .laydate-set-ym').append('<span style="float:left;font-size: 14px;margin-left: 20px;color:#ccc;font-weight:normal">开始日期</span>')
                    $('.laydate-main-list-1 .laydate-set-ym').append('<span style="float:left;font-size: 14px;margin-left: 20px;color:#ccc;font-weight:normal">结束日期</span>')
                },
                change: function (date) {

                },
                done: function (value, date, endDate) {
                    var tootip_data = JSON.parse($('.tootip_data').val());
                    // console.log(value); //得到日期生成的值，如：2017-08-18
                    // console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                    // console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                    var startMonth = value.slice(0, 7) + '/01';
                    var endMonth = value.slice(9, 17) + '/01';
                    differDays = DateDiff(startMonth, endMonth);
                    if (tootip_data.pageId != 'SYS048MOD000201' && tootip_data.pageId != 'SYS048MOD000202' && tootip_data.pageId != 'SYS048MOD000203') {
                        if (differDays < 152) {
                            alert('最少选择6个月!');
                            return;
                        }
                    } else {
                        /*if (differDays < 28 ) {
                         alert('最少选择1个月!');
                         return;
                         }*/
                    }
                    if (tootip_data.pageId == 'SYS048MOD000102') {
                        if (differDays > 390) {
                            alert('最多可以选择13个月!');
                            return;
                        }
                    } else if (differDays > 732) {
                        alert('最多选择24个月!');
                        return;
                    }
                    var data_obj = JSON.parse($('.data_obj').val());
                    var tootip_data = JSON.parse($('.tootip_data').val());
                    if ($('.detail_data').val()) {
                        var detail_data = JSON.parse($('.detail_data').val());
                    } else {
                        var detail_data = {};
                    }
                    if (value != '' && value != undefined && value != null) {
                        $('.selectDate').val(value);
                        data_obj.last = '';
                        detail_data.last = '';
                        data_obj.dtBegin = value.slice(0, 7);
                        detail_data.dtBegin = value.slice(0, 7);
                        data_obj.dtEnd = value.slice(9, 17);
                        detail_data.dtEnd = value.slice(9, 17);
                        data_obj.datespan = 'month';
                        detail_data.datespan = 'month';
                        if (tootip_data.pageId == 'SYS048MOD0200302') {
                            data_obj.provinceName = '';
                            data_obj.DistributionTypeEnum = 'Province';
                        }
                        $('.mapTitle .china').removeClass('clicked');
                        $('.data_obj').val(JSON.stringify(data_obj));
                        $('.detail_data').val(JSON.stringify(detail_data));
                        $('.record_time').val(value);
                        $('.record_page').val(pageId);
                        $('.record_tag').val(tagName);
                        if (IsSuccess) {
                            if ($('.mainContent').css('display') == 'block') {
                                getData(data_obj, judegPage, drawTable, tootip_data, 4);
                            } else {
                                getDetailData(detail_data, judegPage, drawTable, tootip_data, 3);
                            }
                        }
                    } else {
                        $('.selectDate').val('自定义');
                    }
                    $('.dateControl2').remove();
                }
            });
            $('#selectDateControl1').css('opacity', 0);
            $('#selectDateControl1').show();
            $('#selectDateControl1').focus();
        }
    });
    //比较时间相差天数
    function DateDiff(sDate1, sDate2) { //sDate1和sDate2是2006-12-18格式
        var aDate, oDate1, oDate2, iDays;
        aDate = sDate1.split("/");
        oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]); //转换为12-18-2006格式
        aDate = sDate2.split("/");
        oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
        return iDays;
    }

    //下载表格
    $('.content').off('click', '.load').on('click', '.load', function () {
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        var detail_obj = JSON.parse($(".detail_data").val());
        var isMain = $(".mainContent").css('display') == 'block';
        data_obj.IsExport = true;
        detail_obj.IsExport = true;
        var url = '';
        switch (tootip_data.pageId) {
            case "SYS048MOD000101":
                switch (tootip_data.tabName) {
                    case "关注走势":
                        url = urlObj.indextrendAttention;
                        break;
                    case "预购走势":
                        url = urlObj.indextrendLeads;
                        break;
                    case "销量走势":
                        url = urlObj.indextrendSalevol;
                        break;
                }
                break;
            case "SYS048MOD000201":
                if (isMain) {
                    url = urlObj.TotalIndex;
                } else {
                    url = urlObj.EachIndex;
                }
                break;
            case "SYS048MOD000202":
                if (isMain) {
                    url = urlObj.TotalIndex;
                } else {
                    url = urlObj.EachIndex;
                }
                break;
            case "SYS048MOD000203":
                if (isMain) {
                    url = urlObj.TotalIndex;
                } else {
                    url = urlObj.EachIndex;
                }
                break;
            case "SYS048MOD02001":
                switch (tootip_data.tabName) {
                    case "关注走势":
                        if (tootip_data.subTabName == "关注走势") {
                            url = urlObj.indextrendAttention;
                        } else if (tootip_data.subTabName == "关注内容分布") {
                            url = urlObj.contentserial;
                        }
                        break;
                    case "预购走势":
                        url = urlObj.indextrendLeads;
                        break;
                    case "销量走势":
                        url = urlObj.indextrendSalevol;
                        break;
                }
                break;
            case "SYS048MOD000102":
                switch (tootip_data.tabName) {
                    case "关注走势":
                        url = urlObj.areatrendAttention;
                        break;
                    case "预购走势":
                        url = urlObj.areatrendLeads;
                        break;
                    case "销量走势":
                        url = urlObj.areatrendSalevol;
                        break;
                }
                break;
            case "SYS048MOD0200201":
                url = urlObj.competitiveIndexdetail;
                break;
            case "SYS048MOD02002":
                switch (tootip_data.tabName) {
                    case "对比车型":
                        url = urlObj.competitivePrimary;
                        break;
                    case "对比关系":
                        url = urlObj.competitiveRelation;
                        break;
                    case "竞争重合":
                        url = urlObj.competitiveSuperpose;
                        break;
                    case "访问流转":
                        url = urlObj.competitiveIO;
                        break;
                }
                break;
            case "SYS048MOD0200301":
                url = urlObj.AreaAnalysisTrend;
                break;
            case "SYS048MOD0200302":
                switch (tootip_data.tabName) {
                    case "销量分布":
                        url = urlObj.AreaAnalysisDis;
                        break;
                    case "竞争表现":
                        url = urlObj.AreaAnalysisComp;
                        break;
                }
                break;
           /* case "SYS048MOD0305":
                switch (tootip_data.tabName) {
                    case "媒介偏好":
                        url = urlObj.getPersonas;
                        break;
                }
                break;*/
            case "SYS048MOD0401":
                switch(tootip_data.tabName){
                    case "车型级别":
                        url = urlObj.preferenceCarlevel;
                        break;
                    case "品牌国别":
                        url = urlObj.preferenceCountryextend;
                        break;
                    case "价格段":
                        url = urlObj.preferenceMsrpminextend;
                        break;
                }
                break;
            case "SYS048MOD0402":
                url = urlObj.preferenceSerial;
                break;
            case "SYS048MOD0301":
                url = urlObj.getPersonas;
                break;
            case "SYS048MOD0302":
                url = urlObj.getPersonas;
                break;
            case "SYS048MOD0303":
                url = urlObj.getPersonas;
                break;
            case "SYS048MOD0304":
                url = urlObj.getPersonas;
                break;
            case "SYS048MOD0305":
                url = urlObj.getPersonas;
                break;
            case "SYS048MOD0306":
                url = urlObj.getPersonas;
                break;
        }
        var objStr = '';
        if (isMain) {
            for (var name in data_obj) {
                objStr += name + '=' + data_obj[name] + '&';
            }
        } else {
            for (var name in detail_obj) {
                objStr += name + '=' + detail_obj[name] + '&';
            }
        }
        objStr = objStr.substring(0, objStr.length - 1);
        if (isMain) {
            $('#ifile').attr('src', url + '?' + objStr);
        } else {
            $('#detailFile').attr('src', url + '?' + objStr);
        }
    });

    /*--------------------竞争排名(厂商/品牌)--------------------*/
    $(document).off('click', '.selectProductType span').on('click', '.selectProductType span', function () {
        if ($('.detailContent').css('display') == 'block') {
            return;
        }

        $('.dateList').slideUp(200);
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).text() == '全部') {
            data_obj.CountrySeries = '';
        } else if ($(this).text() == '自主') {
            data_obj.CountrySeries = '自主品牌';
        } else if ($(this).text() == '合资') {
            data_obj.CountrySeries = '合资品牌';
        } else if ($(this).text() == '进口') {
            data_obj.CountrySeries = '进口车';
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
        // 显示详情页
    $('.content').off('click', '.listContent .tdName').on('click', '.listContent .tdName', function () {
        var tootip_data = JSON.parse($('.tootip_data').val());
        if ($('.detail_data').val() != '') {
            var detail_data = JSON.parse($('.detail_data').val());
        } else {
            var detail_data = {};
        }
        detail_data.DetailName = $.trim($(this).text());
        $('.detail_data').val(JSON.stringify(detail_data));
        // $('.detailContent .detailName').text($.trim($(this).text()));
        $('.selectProductType span').addClass('detailClass');
        $('.selectProductType span.active').removeClass('detailClass');
        $('.dis_select input').prop('disabled', true);
        // $('.dis_select').css('background-color','#ccc');
        // $('.dis_select input').css('background-color','#ccc');
        $('.dis_select input').css('color', '#797991');
        var index = $('.mainContent .tabMenu .tabItem.active').index();
        $('.detailContent .tabMenu .tabItem').eq(index).addClass('active').siblings('.tabItem').removeClass('active');
        $('.mainContent').hide();
        $('.detailContent').show();
        getDetailData(detail_data, judegPage, drawTable, tootip_data, 1);
    });
    // 返回主页面
    $('.content').off('click', '.detailContent .return').on('click', '.detailContent .return', function () {
        $('.mainContent').show();
        $('.detailContent').hide();
        $('.selectProductType span').removeClass('detailClass');

        var index = $('.detailContent .tabMenu .tabItem.active').index();
        $('.mainContent .tabMenu .tabItem').eq(index).addClass('active').siblings('.tabItem').removeClass('active');
        $('.dis_select input').prop('disabled', false);
        $('.dis_select').css('background-color', '#fff');
        $('.dis_select input').css('background-color', '#fff');
        $('.selectProductType span').show();
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        getData(data_obj, judegPage, drawTable, tootip_data, 4);
    });
    /*--------------------竞争排名(厂商)结束--------------------*/

    /*-------------------车型排名------------------------------------*/
    //打开细分市场产地类型
    $(document).off('click', '.selectProduct').on('click', '.selectProduct', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.carTypeList').slideUp(200);
        $('.priceList').slideUp(200);
        if ($('.productTypeList').css('display') == 'block') {
            $('.productTypeList').slideUp(200);
        } else {
            $('.productTypeList').slideDown(200);
        }
    });
    //选择产地类型下拉列表
    $(document).on('click', '.productTypeList li', function () {
        $('.selectProduct').val($(this).text());
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        if ($(this).text() == '全部产地类型') {
            data_obj.CountrySeries = '';
        } else {
            data_obj.CountrySeries = $(this).text();
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    //打开车型级别
    $(document).off('click', '.selectCar').on('click', '.selectCar', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.productTypeList').slideUp(200);
        $('.priceList').slideUp(200);
        if ($('.carTypeList').css('display') == 'block') {
            $('.carTypeList').slideUp(200);
        } else {
            $('.carTypeList').slideDown(200);
        }
    });
    //选择车型级别下拉列表
    $(document).on('click', '.carTypeList li', function () {
        $('.selectCar').val($(this).text());
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        if ($(this).text() == '全部车型级别') {
            data_obj.CarLevel = '';
        } else {
            data_obj.CarLevel = $(this).text();
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    //打开价格段
    $(document).off('click', '.selectPrice').on('click', '.selectPrice', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.productTypeList').slideUp(200);
        $('.carTypeList').slideUp(200);
        if ($('.priceList').css('display') == 'block') {
            $('.priceList').slideUp(200);
        } else {
            $('.priceList').slideDown(200);
        }
    });
    //选择价格段下拉列表
    $(document).off('click', '.priceList li').on('click', '.priceList li', function () {
        $('.selectPrice').val($(this).text());
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        if ($(this).attr('data-id') == 'all') {
            data_obj.MsrpMinExtend = '';
        } else {
            data_obj.MsrpMinExtend = $(this).text();
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    /*-------------------车型排名 结束------------------------------------*/


    /*-----------------------指数走势-----------------------------------------*/

    $(document).off('click', '.selectPrice').on('click', '.selectPrice', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.productTypeList').slideUp(200);
        $('.carTypeList').slideUp(200);
        if ($('.priceList').css('display') == 'block') {
            $('.priceList').slideUp(200);
        } else {
            $('.priceList').slideDown(200);
        }
    });
    /*-----------------------指数走势结束--------------------------------------*/

    /*----------------------------区域市场走势开始-----------------------------------------*/
    //打开区域下拉框选项
    $(document).off('click', '.selectRegionName').on('click', '.selectRegionName', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.regionMarketList').slideUp(200);
        if ($('.regionNameList').css('display') == 'block') {
            $('.regionNameList').slideUp(200);
        } else {
            $('.regionNameList').slideDown(200);
        }
    });
    //选择每一项下拉框的选项
    $(document).off('click', '.regionNameList li').on('click', '.regionNameList li', function () {
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        $('.selectRegionName').val($(this).text());
        data_obj.groupby = $(this).attr('data-id');
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    //打开细分指标下卡框
    $(document).off('click', '.regionMarketName').on('click', '.regionMarketName', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.regionNameList').slideUp(200);
        if ($('.regionMarketList').css('display') == 'block') {
            $('.regionMarketList').slideUp(200);
        } else {
            $('.regionMarketList').slideDown(200);
        }
    });
    //选择下拉框中的选项打开对应的浮层
    var divisionObj = {
        productArr: [
            '自主品牌', '合资品牌', '进口车'
        ],
        carTypeLevel: [
            '微型车', '小型车', '紧凑型车', '中型车', '中大型车', '豪华车', '跑车', 'SUV', 'MPV'
        ],
        SUVType: [
            '小型SUV', '紧凑型SUV', '中型SUV', '中大型SUV', '大型SUV'
        ],
        countryBrand: [
            '中国', '德国', '日本', '美国', '韩国', '其他'
        ],
        price: [
            '8万元以下', '8-12万元', '12-18万元', '18-25万元', '25-40万元', '40万元以上'
        ]
    };
    $(document).off('click', '.regionMarketList li').on('click', '.regionMarketList li', function (e) {
        var str = '';
        e.stopPropagation();
        $('.regionMarketList').hide();
        $('.layerCon').each(function (index, item) {
            $(item).hide();
        });
        $('.layer').show();
        $('.selectProductBox ').html();
        if ($(this).text() == $('.divisionArea').attr('data-name')) {
            $('.divisionArea').click();
            return;
        }
        if ($(this).text() == '产地类型') {
            $('.titleName').text('产地类型');
            for (var i = 0; i < divisionObj.productArr.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.productArr[i] + '</label></div>';
            }
        } else if ($(this).text() == '车型级别') {
            $('.titleName').text('车型级别');
            for (var i = 0; i < divisionObj.carTypeLevel.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.carTypeLevel[i] + '</label></div>';
            }
        } else if ($(this).text() == 'SUV细分级别') {
            $('.titleName').text('SUV细分级别');
            for (var i = 0; i < divisionObj.SUVType.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.SUVType[i] + '</label></div>';
            }
        } else if ($(this).text() == '品牌国别') {
            $('.titleName').text('品牌国别');
            for (var i = 0; i < divisionObj.countryBrand.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.countryBrand[i] + '</label></div>';
            }
        } else if ($(this).text() == '价格段') {
            $('.titleName').text('价格段');
            for (var i = 0; i < divisionObj.price.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.price[i] + '</label></div>';
            }
        }
        $('.selectProduct').html(str);
        $('.layer4').show();
    });
    //选择每一个input填充到box里面
    $(document).off('click', '.selectProduct label').on('click', '.selectProduct label', function (e) {
        e.stopPropagation();
        if ($(this).prev('input:checkbox').prop('checked') == true) {
            $(this).prev('input:checkbox').prop('checked', false);
            var str = $(this).text();
            $('.selectProductBox span').each(function (index, item) {
                if ($(item).text() == str) {
                    $(item).remove();
                }
            });
        } else {
            $(this).prev('input:checkbox').prop('checked', true);
            $('.selectProductBox').append("<span class='selectItem'>" + $(this).text() + "<i></i></span>");
        }
    });
    //选择确定按钮
    $(document).off('click', '.productTypeBtn').on('click', '.productTypeBtn', function (e) {
        e.stopPropagation();
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        var arr = [];
        $('.selectProductBox span').each(function (index, item) {
            arr.push($.trim($(item).text()));
        });
        if (arr.length == 0) {
            layer.msg('请选择' + $('.titleName').text() + '!');
            return;
        }
        $('.divisionArea').attr('data-name', $(this).attr('data-name'));
        $('.layer').hide();
        $('.layerCon').hide();
        $('.divisionArea').html(arr.join(';') + '<i class="add_more"></i>');
        $('.selectProduct label').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        });
        if ($('.layer4 .titleName').text() == '产地类型') {
            $('.divisionArea').attr('data-name', '产地类型');
            data_obj.countryseries = arr.join(',');
            data_obj.carlevel = '';
            data_obj.suvlevel = '';
            data_obj.countryextend = '';
            data_obj.msrpminextend = '';
        } else if ($('.layer4 .titleName').text() == '车型级别') {
            $('.divisionArea').attr('data-name', '车型级别');
            data_obj.countryseries = '';
            data_obj.carlevel = arr.join(',');
            data_obj.suvlevel = '';
            data_obj.countryextend = '';
            data_obj.msrpminextend = '';
        } else if ($('.layer4 .titleName').text() == 'SUV细分级别') {
            $('.divisionArea').attr('data-name', 'SUV细分级别');
            data_obj.countryseries = '';
            data_obj.carlevel = '';
            data_obj.suvlevel = arr.join(',');
            data_obj.countryextend = '';
            data_obj.msrpminextend = '';
        } else if ($('.layer4 .titleName').text() == '品牌国别') {
            $('.divisionArea').attr('data-name', '品牌国别');
            data_obj.countryseries = '';
            data_obj.carlevel = '';
            data_obj.suvlevel = '';
            data_obj.countryextend = arr.join(',');
            data_obj.msrpminextend = '';
        } else if ($('.layer4 .titleName').text() == '价格段') {
            $('.divisionArea').attr('data-name', '价格段');
            data_obj.countryseries = '';
            data_obj.carlevel = '';
            data_obj.suvlevel = '';
            data_obj.countryextend = '';
            data_obj.msrpminextend = arr.join(',');
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
        $('.selectProductBox').html('');
        $('.regionMarketName').val($('.titleName').text());
    });
    //点击关闭按钮清空所有选中状态
    $(document).off('click', '.closeDivision').on('click', '.closeDivision', function (e) {
        e.stopPropagation();
        $('.selectProduct label').each(function (index, item) {
            $(item).prev('input:checkbox').prop('checked', false);
        });
        $('.selectProductBox').html('');
    });
    //点击+渲染
    $(document).off('click', '.divisionArea .add_more').on('click', '.divisionArea .add_more', function (e) {
        e.stopPropagation();
        checkedBoxStatus();
    });
    $(document).off('click', '.divisionArea').on('click', '.divisionArea', function (e) {
        e.stopPropagation();
        checkedBoxStatus();
    });
    //渲染弹窗打开的对应选项状态
    function checkedBoxStatus() {
        $(".dateList").slideUp(200);
        $(".regionNameList").slideUp(200);
        $(".regionMarketList").slideUp(200);
        var str = '';
        if ($('.divisionArea').attr('data-name') == '产地类型') {
            for (var i = 0; i < divisionObj.productArr.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.productArr[i] + '</label></div>';
            }
        } else if ($('.divisionArea').attr('data-name') == '车型级别') {
            $('.titleName').text('车型级别');
            for (var i = 0; i < divisionObj.carTypeLevel.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.carTypeLevel[i] + '</label></div>';
            }
        } else if ($('.divisionArea').attr('data-name') == 'SUV细分级别') {
            $('.titleName').text('SUV细分级别');
            for (var i = 0; i < divisionObj.SUVType.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.SUVType[i] + '</label></div>';
            }
        } else if ($('.divisionArea').attr('data-name') == '品牌国别') {
            $('.titleName').text('品牌国别');
            for (var i = 0; i < divisionObj.countryBrand.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.countryBrand[i] + '</label></div>';
            }
        } else if ($('.divisionArea').attr('data-name') == '价格段') {
            +$('.titleName').text('价格段');
            for (var i = 0; i < divisionObj.price.length; i++) {
                str += '<div><input type="checkbox" name="" /><label class="productItem">' + divisionObj.price[i] + '</label></div>';
            }
        }
        $('.selectProduct').html(str);
        $('.layer').show();
        $('.layer4').show();
        var arr = [];
        arr = $('.divisionArea').text().substring(0, $('.divisionArea').text().length).split(';');
        $('.selectProduct label').each(function (index, item) {
            var curName = $.trim($(item).text());
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == curName) {
                    $(item).prev('input:checkbox').prop('checked', true);
                    $('.selectProductBox').append("<span class='selectItem'>" + $(item).text() + "<i></i></span>");
                }
            }
        })
    }

    /*$(document).off('click','.selectProductBox i').on('click','.selectProductBox i',function (e) {
     e.stopPropagation();
     var curName = $(this).parent().text();
     $('.selectProduct .productItem').each(function (index, item) {
     if($(item).text()==curName){
     $(this).prev('input:checkbox').prop('checked',false);
     }
     });
     $(this).parent().remove();
     });*/
    $(document).off('click', '.selectProductBox .selectItem').on('click', '.selectProductBox .selectItem', function (e) {
        e.stopPropagation();
        var curName = $(this).text();
        $('.selectProduct .productItem').each(function (index, item) {
            if ($(item).text() == curName) {
                $(this).prev('input:checkbox').prop('checked', false);
            }
        });
        $(this).remove();
    });

    /*------------------------lixh（滚动条）--------------------------------------*/
    $(document).off('mousedown', '.barBtn').on('mousedown', '.barBtn', function(e) {
        e.stopPropagation();
        e.preventDefault();
        var positionDiv = $('.bar').offset();  
        var distenceX = e.pageX - positionDiv.left;
        $('body').css('cursor','pointer');
        $(document).mousemove(function(eve) {   
            var x = eve.pageX - distenceX - positionDiv.left;
            var maxX = $('.bar').outerWidth(true)-$('.barBtn').outerWidth(true);
            if (x < 0) {         
                x = 0;       
            } else if (x > maxX) { 
                x = maxX;       
            }
            $('.barBtn').css({ 'left': x + 'px' });
            var scrollWidth = x/$('.bar').outerWidth(true)*$('.tableHeader').outerWidth(true);
            $('.tableHeader').css({ 'left': -scrollWidth + 'px' });
            $('.listContent').css({ 'left': -scrollWidth + 'px' });
        });
    });
    $(document).on('mouseup',function() {       
        $(document).off('mousemove');
        $('body').css('cursor','default');  
    });
    /*---------------------------lixh（滚动条）end----------------------------*/
    /*---------------------------区域市场走势结束----------------------------------*/


    /*--------------------------竞争格局开始------------------------------------*/
    $(document).off('click', '.carLevel').on('click', '.carLevel', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.suvList').slideUp(200);

        if (!$('.carTypeList_compete').parent('.slimScrollDiv').is(":visible")) {
            $('.carTypeList_compete').parent('.slimScrollDiv').slideDown(200);
        } else {
            $('.carTypeList_compete').parent('.slimScrollDiv').slideUp(200);
        }
    });
    $(document).off('click', '.suvName').on('click', '.suvName', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.carTypeList_compete').parent('.slimScrollDiv').slideUp(200);
        if ($('.suvList').css('display') == 'none') {
            $('.suvList').slideDown(200);
        } else {
            $('.suvList').slideUp(200);
        }
    });
    $(document).off('click', '.carTypeList_compete li').on('click', '.carTypeList_compete li', function (e) {
            e.stopPropagation();
            var data_obj = JSON.parse($('.data_obj').val());
            var tootip_data = JSON.parse($('.tootip_data').val());
            if ($(this).text() != 'SUV') {
                $('.selectSUVBox').hide();
                data_obj.carlevel = $(this).text();
                data_obj.suvlevel = '';
            } else {
                $('.selectSUVBox').show();
                data_obj.carlevel = '';
                data_obj.suvlevel = '紧凑型SUV';
            }
            $('.carTypeList_compete').parent('.slimScrollDiv').hide();
            $('.carLevel').val($(this).text());
            $('.data_obj').val(JSON.stringify(data_obj));
            if (IsSuccess) {
                getData(data_obj, judegPage, drawTable, tootip_data, 4);
            }
        }
    );
    $(document).off('click', '.suvList li').on('click', '.suvList li', function (e) {
        e.stopPropagation();
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        $('.suvList').hide();
        $('.suvName').val($(this).text());
        data_obj.suvlevel = $(this).text();
        data_obj.carlevel = '';
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    $(document).off('click', '.selectProductType_compete span').on('click', '.selectProductType_compete span', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.carTypeList_compete').parent('.slimScrollDiv').slideUp(200);
        $('.suvList').slideUp(200);
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        if ($(this).text() == '全部') {
            data_obj.countryseries = 'all';
        } else if ($(this).text() == '自主') {
            data_obj.countryseries = '自主品牌';
        } else if ($(this).text() == '合资') {
            data_obj.countryseries = '合资品牌';
        } else if ($(this).text() == '进口') {
            data_obj.countryseries = '进口车';
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        $(this).addClass('active').siblings().removeClass('active');
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    /*--------------------------竞争格局结束------------------------------------*/

    /*------------------------区域销量走势开始--------------------------------------*/
    $(document).off('click', '.selectProductType1 span').on('click', '.selectProductType1 span', function (e) {
        e.stopPropagation();
        $('.dateList').slideUp(200);
        $('.brandList').parent('.slimScrollDiv').hide();
        $(this).addClass('active').siblings().removeClass('active');
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        if ($(this).text() == '大区') {
            data_obj.AreaTypeEnum = 'CatarcArea';
        } else {
            data_obj.AreaTypeEnum = 'CatarcCityLevel';
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });

    /*------------------------区域销量走势结束----------------------------*/

    /*-------------------lixh（车型卡片导出pdf）--------------------------------*/          
    $(document).off('click','.pdf').on('click','.pdf',function(){
        if($(this).hasClass('isExport')){
            return;
        }else{
            $('html,body').scrollTop(0);
            $(this).addClass('isExport');
            var type = $.trim($('.selectCarOrBrand .active').text());
            var num = parseInt($('.pdf input').val());
            if( type == '车型' && num == 10 || type == '品牌' && num == 7 ){
                html2canvas(document.body, {
                    onrendered:function(canvas) {
                        var contentWidth = canvas.width;
                        var contentHeight = canvas.height;
                        var top = $('.titleCard').offset().top-30;
                        var left = $('.sideBar').width();
                        var height = $('.footer').offset().top-top;
                        var width = contentWidth - left;
                        var canvas_n = $('#pdf')[0];
                        canvas_n.width = width;
                        canvas_n.height = height;
                        var ctx = canvas_n.getContext("2d");
                        ctx.drawImage(canvas,left,top,width,height,0,0,width,height);
                        ctx.save();
                        var png = canvas_n.toDataURL();
                        
                    //     var aLink = document.createElement('a');
                    //     aLink.download = '车型卡片';
                    //     aLink.href = png;
                    //     aLink.click();
                        $('.pdf').siblings('form').attr('action',urlObj.pdf);
                        $('.pdf').siblings('form').find('.png').val(png);
                        $('.pdf').siblings('form').find('.name').val($('h1 .brandOrSerial').text()+'数据分析');
                        $('.pdf').siblings('form').submit();
                        $('.pdf').removeClass('isExport');
                    }
                });
            }else{
               alert('数据尚未全部加载，暂不允许导出PDF');
               $(this).removeClass('isExport');
            }
        }
    });
    /*------------------------车型卡片结束------------------------------------------*/

    /*-----------------------产品类型偏好开始------------------------------------------*/
    $(document).off('click','.mediaType span').on('click','.mediaType span',function (e) {
        e.stopPropagation();
        $(this).addClass('active').siblings().removeClass('active');
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        data_obj.category = $.trim($(this).text());
        $('.data_obj').val(JSON.stringify(data_obj));
        if (IsSuccess) {
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    $(document).off('click','.openBtn').on('click','.openBtn',function (e) {
        e.stopPropagation();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            if($(window).width()>=1366){
                $(this).siblings('.mediaType').css('height','50px');
            }else{
                $(this).siblings('.mediaType').css('height','40px');
            }
            $(this).find('span').text('展开');
            var height = $('.chooseList').offset().top +$('.chooseList').height()+60;
            $('.loading').css('top',height); 
            $('.mainContent').css('margin-top',height);
        }else{
            $(this).addClass('open');
            $(this).siblings('.mediaType').css('height','auto');
            $(this).find('span').text('收起');
            var height = $('.chooseList').offset().top +$('.chooseList').height()+60;
            $('.loading').css('top',height); 
            $('.mainContent').css('margin-top',height);
        }
        
    });
    $(window).resize(function(){
        if($(window).width()>1440){
            if($('.openBtn').find('span').text() == '展开'){
                $('.openBtn').siblings('.mediaType').css('height','50px');
            }
        }else{
            if($('.openBtn').find('span').text() == '展开'){
                $('.openBtn').siblings('.mediaType').css('height','40px');
            }
        }
    });
    /*-----------------------产品类型偏结束------------------------------------------*/

    /*-----------------------lixh(品牌车型选择)-----------------------------*/
    // 选择品牌车型
    $(document).off('click','.selectCarOrBrand span').on('click','.selectCarOrBrand span',function (e){
        $(this).addClass('active').siblings('span').removeClass('active');
        var text = $.trim($(this).text());
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        $('.brandList').parent('.slimScrollDiv').hide();
        $('.selectList').slideUp(200);
        if(text == '品牌'){
            var data = JSON.parse($('.queryInput').attr('data-brand'));
            var tpl = $('#carAndBrand').html();
            var content = juicer(tpl,{brandList:data,type:1});
            $('.brandList').html(content);
            if($('.brandList li').length){
                $('.queryInput').val($.trim($('.brandList li').eq(0).text()));
                switch(tootip_data.pageId){
                    case 'SYS048MOD02001': //指数走势
                        data_obj.groupby='carbrand';
                        data_obj.serialname='';
                        data_obj.carbrand=$('.queryInput').val();
                        break;
                    case 'SYS048MOD0200301'://区域销量走势
                        data_obj.CompetitiveAreaEnum='CarBrand';
                        data_obj.CarBrandOrSerialName=$('.queryInput').val();
                        break;
                    case 'SYS048MOD0200302'://区域销量分布
                        data_obj.provinceName = '';
                        data_obj.DistributionTypeEnum = 'Province';
                        data_obj.CompetitiveAreaEnum='CarBrand';
                        data_obj.CarBrandOrSerialName=$('.queryInput').val();
                        break;
                    case 'SYS048MOD02004': //车型卡片
                        data_obj.carBrand=$('.carOrBrandOfCard').val();
                        data_obj.serialName='';
                        break;
                    default://用户分析
                        data_obj.carBrand=$('.queryInput').val();
                        data_obj.serialName='';
                        break;
                }
                $('.data_obj').val(JSON.stringify(data_obj));
                if(IsSuccess){
                    getData(data_obj, judegPage, drawTable, tootip_data, 4);
                }
            }else{
                showLayer(true,tootip_data,'noAuthor');
            }

            if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
                $('.top3').hide();
                $('.top4').find('i').text('03');
                $('.top5').find('i').text('04');

            }   
        }else if(text == '车型'){
            var data = JSON.parse($('.queryInput').attr('data-model'));
            var tpl = $('#carAndBrand').html();
            var content = juicer(tpl,{brandList:data,type:2});
            $('.brandList').html(content);
            if($('.brandList li').length){
                $('.queryInput').val($.trim($('.brandList li').eq(0).text()));
                switch(tootip_data.pageId){
                    case 'SYS048MOD02001': //指数走势
                        data_obj.groupby='serialname';
                        data_obj.carbrand='';
                        data_obj.serialname=$('.queryInput').val();
                        break;
                    case 'SYS048MOD0200301'://区域销量走势
                        data_obj.CompetitiveAreaEnum='SerialName';
                        data_obj.CarBrandOrSerialName=$('.queryInput').val();
                        break;
                    case 'SYS048MOD0200302'://区域销量分布
                        data_obj.provinceName = '';
                        data_obj.DistributionTypeEnum = 'Province';
                        data_obj.CompetitiveAreaEnum='SerialName';
                        data_obj.CarBrandOrSerialName=$('.queryInput').val();
                        break;
                    case 'SYS048MOD02004': //车型卡片
                        data_obj.serialName=$('.carOrBrandOfCard').val();
                        data_obj.carBrand='';
                        break;
                    default://用户分析
                        data_obj.serialName=$('.queryInput').val();
                        data_obj.carBrand='';
                        break;
                }
                $('.data_obj').val(JSON.stringify(data_obj));
                if(IsSuccess){
                    getData(data_obj, judegPage, drawTable, tootip_data, 4);
                }
            }else{
                showLayer(true,tootip_data,'noAuthor');
            }
            if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
                $('.top3').show();
                $('.top4').find('i').text('04');
                $('.top5').find('i').text('05');
            }
        }
    });
    // 点击input框
    $(document).off('click','.queryInput').on('click','.queryInput',function (e){
        e.stopPropagation();
        if ($('.selectCarOrBrand span').eq(0).hasClass('active')){
            var data = JSON.parse($('.queryInput').attr('data-brand'));
            var tpl = $('#carAndBrand').html();
            var content = juicer(tpl,{brandList:data,type:1});
            $('.brandList').html(content);
        }else{
            var data = JSON.parse($('.queryInput').attr('data-model'));
            var tpl = $('#carAndBrand').html();
            var content = juicer(tpl,{brandList:data,type:2});
            $('.brandList').html(content);
        }
        var li_height = $('.brandList').find('li').outerHeight(true);
        var boxHeight = $('.brandList li').length*li_height>160?160:$('.brandList li').length*li_height;
        var boxWidth = $('.queryInput').parent('.selectBox').width();
        $('.brandList').css({height:boxHeight+'px',width:boxWidth+'px'});
        $('.brandList').parent('.slimScrollDiv').css({height:boxHeight+'px',width:boxWidth+'px'});
        if ($(this).parent('.selectBox').find('.slimScrollDiv').css('display') == 'none') {
            $(this).parents('li').siblings('li').find('.selectList').slideUp(200);
            $(this).parent('.selectBox').find('.brandList').show();
            $(this).parent('.selectBox').find('.slimScrollDiv').slideDown(200);
        } else {
            $(this).parent('.selectBox').find('.slimScrollDiv').slideUp(200);
        }
    });
    // 点击下拉框
    $(document).off('click','.brandList li').on('click','.brandList li',function (e){
        e.stopPropagation();
        $('.queryInput').val($.trim($(this).text()));
        $(this).parents('.slimScrollDiv').slideUp(200);
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        switch(tootip_data.pageId){
            case 'SYS048MOD02001': //指数走势
                if ($('.selectCarOrBrand span').eq(0).hasClass('active')) {
                    data_obj.groupby = 'carbrand';
                    data_obj.serialname = '';
                    data_obj.carbrand = $('.queryInput').val();
                } else {
                    data_obj.groupby = 'serialname';
                    data_obj.carbrand = '';
                    data_obj.serialname = $('.queryInput').val();
                }
                break;
            case 'SYS048MOD0200301'://区域销量走势
                if ($('.selectCarOrBrand span').eq(0).hasClass('active')) {
                    data_obj.CompetitiveAreaEnum = 'CarBrand';
                    data_obj.CarBrandOrSerialName = $('.queryInput').val();
                } else {
                    data_obj.CompetitiveAreaEnum = 'SerialName';
                    data_obj.CarBrandOrSerialName = $('.queryInput').val();
                }
                break;
            case 'SYS048MOD0200302'://区域销量分布
                data_obj.provinceName = '';
                data_obj.DistributionTypeEnum = 'Province';
                if ($('.selectCarOrBrand span').eq(0).hasClass('active')) {
                    data_obj.CompetitiveAreaEnum = 'CarBrand';
                    data_obj.CarBrandOrSerialName = $('.queryInput').val();
                } else {
                    data_obj.CompetitiveAreaEnum = 'SerialName';
                    data_obj.CarBrandOrSerialName = $('.queryInput').val();
                }
                break;
            case 'SYS048MOD02004': //车型卡片
                if ($('.selectCarOrBrand span').eq(0).hasClass('active')) {
                    data_obj.serialName = '';
                    data_obj.carBrand = $('.queryInput').val();
                } else {
                    data_obj.carBrand = '';
                    data_obj.serialName = $('.queryInput').val();
                }
                break;
            case 'SYS048MOD02002': //竞争关系
                data_obj.carBrand = '';
                data_obj.SerialName = $('.queryInput').val();
                break;
            default://用户分析
                if ($('.selectCarOrBrand span').eq(0).hasClass('active')) {
                    data_obj.serialName = '';
                    data_obj.carBrand = $('.queryInput').val();
                } else {
                    data_obj.carBrand = '';
                    data_obj.serialName = $('.queryInput').val();
                }
                break;
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if(IsSuccess){
            getData(data_obj, judegPage, drawTable, tootip_data, 4);
        }
    });
    // input输入
    $(document).off('input','.queryInput').on('input','.queryInput',function (e){
        var key = $.trim($(this).val());
        var reg = new RegExp(key,'gi');
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        var data;
        var type;
        if(tootip_data.pageId == 'SYS048MOD02001' || tootip_data.pageId == 'SYS048MOD0200301' || tootip_data.pageId == 'SYS048MOD0200302' || tootip_data.pageId == 'SYS048MOD0301' || tootip_data.pageId == 'SYS048MOD0302'|| tootip_data.pageId == 'SYS048MOD0303'|| tootip_data.pageId == 'SYS048MOD0304'|| tootip_data.pageId == 'SYS048MOD0305'|| tootip_data.pageId == 'SYS048MOD0306' || tootip_data.pageId == 'SYS048MOD02004' ){//品牌或车型
            if(data_obj.CompetitiveAreaEnum && data_obj.CompetitiveAreaEnum == 'CarBrand' || data_obj.groupby && data_obj.groupby == 'carbrand' || data_obj.carBrand && data_obj.carBrand !=''){ //品牌
                data = JSON.parse($(this).attr('data-brand'));
                type = 'brand';
            }else if(data_obj.CompetitiveAreaEnum && data_obj.CompetitiveAreaEnum == 'SerialName' || data_obj.groupby && data_obj.groupby == 'serialname' || data_obj.serialName && data_obj.serialName !='' ){//车型
                data = JSON.parse($(this).attr('data-model'));
                type = 'model';
            }

        }else if(tootip_data.pageId == 'SYS048MOD02002'){//仅车型
            data = JSON.parse($(this).attr('data-model'));
            type = 'model';
        }

        var arr = [];
        if(type == 'brand'){
            $(data).each(function(index,item){
                if(reg.test(item.BrandName)){
                    arr.push(item);
                    reg.lastIndex = 0;
                }
            });
        }else if(type == 'model'){
            $(data).each(function(index,item){
                if(reg.test(item.SerialName)){
                    arr.push(item);
                    reg.lastIndex = 0;
                }
            });
        }

        var tpl = $('#carAndBrand').html();
        if(type == 'brand'){
            var content = juicer(tpl,{brandList:arr,type:1});
        }else if(type == 'model'){
            var content = juicer(tpl,{brandList:arr,type:2});
        }
        $(this).parent('.selectBox').find('.brandList').html(content);

        if(arr.length){
            $(this).parent('.selectBox').find('.brandList').find('li').eq(0).addClass('hover');
            $(this).parent('.selectBox').find('.slimScrollDiv').show();
        }else{
            $(this).parent('.selectBox').find('.slimScrollDiv').hide();
        }


        var li_height = $(this).parent('.selectBox').find('.brandList').find('li').outerHeight(true);
        var boxHeight = arr.length*li_height>160?160:arr.length*li_height;
        var boxWidth = $(this).parent('.selectBox').width();
        $(this).parent('.selectBox').find('.brandList').slimScroll({height:boxHeight+'px',width:boxWidth+'px'});
    });
    // 键盘上下选择
    $(document).off('keydown','.queryInput').on('keydown','.queryInput',function (e) {
        e.stopPropagation();
        var len = $(this).parent('.selectBox ').find('.brandList li').length;
        var $liArr = $(this).parent('.selectBox ').find('.brandList li');
        var index = $(this).parent('.selectBox ').find('.brandList li.hover').index();
        var li_height = $(this).parent('.selectBox ').find('.brandList li').eq(0).outerHeight(true);
        if (e.keyCode == 40) { //向下
            if (index == -1) {
                $liArr.removeClass('hover');
                $liArr.eq(0).addClass('hover');
            } else if (index < len - 1) {
                $liArr.removeClass('hover');
                $liArr.eq(index + 1).addClass('hover');
                if (index >= 1) {
                    var top = li_height * (index - 1);
                    $liArr.parent('ul').scrollTop(top);
                }
            }
        } else if (e.keyCode == 38) { //向上
            if (index > 0) {
                $liArr.removeClass('hover');
                $liArr.eq(index - 1).addClass('hover');
                if (index < len - 2) {
                    var top = li_height * (index - 1);
                    $liArr.parent('.brandList').scrollTop(top);
                }
            }
        } else if (e.keyCode == 13) { //回车
            $liArr.eq(index).click();
        }
    });

    /*-----------------------lixh(品牌车型选择) end-----------------------------*/


});

