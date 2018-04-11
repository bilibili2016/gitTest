/**
 * Created by liyr on 2017/11/22.
 */
$(function() {
    data_obj = JSON.parse($('.data_obj').val());
    detail_data = JSON.parse($('.detail_data').val());
    tootip_data = JSON.parse($('.tootip_data').val());
    // tootip数据
    //一级tab切换
    $('.content').off('click', '.tabMenu .tabItem').on('click', '.tabMenu .tabItem', function(e) {
        e.stopPropagation();
        data_obj = JSON.parse($('.data_obj').val());
        detail_data = JSON.parse($('.detail_data').val());
        tootip_data = JSON.parse($('.tootip_data').val());

        var $index = $(this).index();
        $(".tabItembar").css('left', $index * 121 + 'px');
        $(".tabBottom").css('left', $index * 121 + 'px');
        $(".mainContent .tabMenu .tabItem").removeClass('active'); //详情页点击切换div
        $(".mainContent .tabMenu .tabItem").eq($index).addClass('active');


        var $thisText = $.trim($(this).text());
        tootip_data.tabName = $thisText; //getData函数中判断接口地址

        tootip_data.subTabName = $thisText; //判断二级菜单点击
        var Pages = tootip_data.pageId;
        var obj;
        if (Pages == 'SYS048MOD000201' || Pages == 'SYS048MOD000202' || Pages == 'SYS048MOD000203') { //厂商排名，品牌排名，车型排名
            // $('.mainContent').show();
            // $('.detailContent').hide();
            $(this).addClass('active').siblings('.tabItem').removeClass('active');
            if ($thisText == '关注排名') {
                data_obj.CompetitiveRankingType = 'Attention';
                detail_data.CompetitiveRankingType = 'Attention';
            } else if ($thisText == '预购排名') {
                data_obj.CompetitiveRankingType = 'Lead';
                detail_data.CompetitiveRankingType = 'Lead';
            } else if ($thisText == '销量排名') {
                data_obj.CompetitiveRankingType = 'Sale';
                detail_data.CompetitiveRankingType = 'Sale';
            }
        } else if (Pages == 'SYS048MOD0304') { //人格特质
            if ($thisText == '心理特征') {
                data_obj.cate = '性格,价值观';
            } else if ($thisText == '兴趣爱好') {
                data_obj.cate = '兴趣/偏好';
            }
        } else if (Pages == 'SYS048MOD0305') { //网络行为
            if ($thisText == '媒介偏好') {
                data_obj.GroupBy = 'category';
            } else if ($thisText == '最爱媒体排行榜') {
                data_obj.GroupBy = 'categoryValue,categoryTGI';
            }
        }
        switch (Pages) {
            case "SYS048MOD000101": //细分市场走势
                obj = data_obj;
                break;
            case "SYS048MOD000102": //区域市场走势
                obj = data_obj;
                break;
            case "SYS048MOD000201": //厂商排名
                data_obj.GroupIndexType = 'Manufacture';
                detail_data.GroupIndexType = 'Manufacture';
                obj = data_obj;
                break;
            case "SYS048MOD000202": //品牌排名
                data_obj.GroupIndexType = 'Brand';
                detail_data.GroupIndexType = 'Brand';
                obj = data_obj;
                break;
            case "SYS048MOD000203": //车型排名
                data_obj.GroupIndexType = 'CarLevel';
                detail_data.GroupIndexType = 'CarLevel';
                obj = data_obj;
                break;
            case "SYS048MOD02001": //指数走势
                obj = data_obj;
                break;
            case "SYS048MOD0200201": //竞争格局
                obj = data_obj;
                break;
            case "SYS048MOD02002": //竞争关系
                obj = data_obj;
                break;
            case "SYS048MOD0200301": //区域销量走势
                obj = data_obj;
                break;
            case "SYS048MOD0200302": //区域销量分布
                obj = data_obj;
                break;
            case "SYS048MOD0304": //人格特质
                obj = data_obj;
                break;
            case "SYS048MOD0305": //网络行为
                obj = data_obj;
                break;
            case "SYS048MOD0401": //产品类型偏好
                obj = data_obj;
                break;
            case "SYS048MOD0402":
                obj = data_obj;
                break;
        }

        var str;
        if (Pages == 'SYS048MOD000101') { //细分市场走势
            var marketSegment = $(".marketName").val();
            if (marketSegment != '整体市场') {
                if (tootip_data.tabName == '关注走势') {
                    str = ' <span class="active">关注走势</span>' +
                            '<span>关注百分比</span>';
                    $('.content .subMenu').html(str);
                    $(".chartBox").css('margin-top', '75px');
                } else if (tootip_data.tabName == '预购走势') {
                    str = ' <span class="active">预购走势</span>' +
                            '<span>预购百分比</span>';
                    $('.content .subMenu').html(str);
                    $(".chartBox").css('margin-top', '75px');
                } else if (tootip_data.tabName == '销量走势') {
                    str = ' <span class="active">销量走势</span>' +
                            '<span>销量百分比</span>';
                    $('.content .subMenu').html(str);
                    $(".chartBox").css('margin-top', '75px');
                }
            } else {
                $('.content .subMenu').html('');
                // $(".chartBox").css('margin-top', '1.8%');
            }

        } else if (Pages == 'SYS048MOD000102') { //区域市场走势
            if (tootip_data.tabName == '关注走势') {
                str = ' <span class="active">关注走势</span>' +
                        '<span>关注百分比</span>';
                $('.content .subMenu').html(str);
                $(".chartBox").css('margin-top', '75px');
            } else if (tootip_data.tabName == '预购走势') {
                str = ' <span class="active">预购走势</span>' +
                        '<span>预购百分比</span>';
                $('.content .subMenu').html(str);
                $(".chartBox").css('margin-top', '75px');
            } else if (tootip_data.tabName == '销量走势') {
                str = ' <span class="active">销量走势</span>' +
                        '<span>销量百分比</span>';
                $('.content .subMenu').html(str);
                $(".chartBox").css('margin-top', '75px');
            }
        } else if (Pages == 'SYS048MOD02001' && $thisText == '关注走势') { //指数走势
            // str = ' <span class="active">关注走势</span>' +
            //     '<span>关注内容分布</span>';
            // $('.content .subMenu').html(str);
            // $(".chartBox").css('margin-top', '75px');
            // $(".chartBox").removeClass('tableMap');
        } else if (Pages == 'SYS048MOD0200301') { //区域销量走势
            str = ' <span class="active">销量走势</span>' +
                    '<span>销量百分比</span>';
            $('.content .subMenu').html(str);
            $(".chartBox").css('margin-top', '75px');
            $(".chartBox").removeClass('tableMap');
        } else if (Pages == 'SYS048MOD0200302') { //区域销量分布
            if ($thisText == '销量分布') {
                str = ' <span class="active">销量</span>' +
                        '<span>销量同比增速</span>';
                $('.content .subMenu').html(str);
                $(".chartBox").css('margin-top', '75px');
                $(".chartBox").removeClass('tableMap');
            } else if ($thisText == '竞争表现') {
                $('.content .subMenu').html('');
                $(".chartBox").addClass('tableMap');
                // $(".chartBox").css('margin-top', '1.8%');
            }
            data_obj.provinceName = '';
            data_obj.DistributionTypeEnum = 'Province';
            $('.mapTitle .china').removeClass('clicked');
        } else {
            $('.content .subMenu').html('');
            // $(".chartBox").css('margin-top', '1.8%');
            $(".chartBox").removeClass('tableMap');
        }

        if (Pages == 'SYS048MOD000101') { //细分市场走势
            tootip_data.subTabName = tootip_data.tabName.substring(0, 2) + '走势';
        } else {
            tootip_data.subTabName = $('.content .subMenu .active').text();
        }
        // detail_data.DetailName = $('.detailName').text();
        detail_data.DetailName = detail_data.DetailName;
        $('.tootip_data').val(JSON.stringify(tootip_data));
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.detail_data').val(JSON.stringify(detail_data));
        if (Pages == 'SYS048MOD000201' || Pages == 'SYS048MOD000202' || Pages == 'SYS048MOD000203') { //厂商排名，品牌排名，车型排名
            if ($('.detailContent').css('display') == 'block') {

                $(".selectList ").hide();
                // $('.content .subMenu').html('');
                $('.dis_select input').prop('disabled', true);
                $('.dis_select').css('background-color', '#ccc');
                $('.dis_select input').css('background-color', '#ccc');
                // $('.selectProductType span').show();

                getDetailData(detail_data, judegPage, drawTable, tootip_data, 3);
            } else {
                // $(".selectList ").hide();
                // $('.content .subMenu').html('');
                $('.dis_select input').prop('disabled', false);
                $('.dis_select').css('background-color', '#fff');
                $('.dis_select input').css('background-color', '#fff');
                // $('.selectProductType span').show();
                getData(obj, judegPage, drawTable, tootip_data, 2);
            }
        } else if (Pages == 'SYS048MOD000101' || Pages == 'SYS048MOD000102' || Pages == 'SYS048MOD0401' || Pages == 'SYS048MOD0402') { //细分市场走势，区域市场走势
            getData(obj, judegPage, drawTable, tootip_data, 2);
        } else {
            if ($('.slimScrollDiv ul li').length > 0) {
                if (Pages != 'SYS048MOD0301' && Pages != 'SYS048MOD0302' && Pages != 'SYS048MOD0303' && Pages != 'SYS048MOD0306') { //基础属性，区域特征，生活状态，消费能力
                    getData(obj, judegPage, drawTable, tootip_data, 2);
                } else {
                    getData(obj, judegPage, '', tootip_data, 2);
                }
            } else {
                $('.loading').show();
                $('.loading').css('top', '210px');
                $('.loading .info').text('您还没有数据权限，请联系管理员配置。');
                $('.loading .loadBox').hide();
                $('.loading .errBox').show();
                $('.loading .errBox img').attr('src', 'images/no_data.png');
                $('.reload').hide();
                $('.loading .info').text('您还没有数据权限，请联系管理员配置。');
                $('.reload').hide();
            }
        }
        // if (Pages != 'SYS048MOD0301' && Pages != 'SYS048MOD0302' && Pages != 'SYS048MOD0303' && Pages != 'SYS048MOD0304' && Pages != 'SYS048MOD0305' && Pages != 'SYS048MOD0306' && Pages != 'SYS048MOD02004' && Pages != 'SYS048MOD0401' && Pages != 'SYS048MOD0402') {  //基础属性，区域特征，生活状态，人格特质，网络行为，消费能力
        renderTootip(tootip_data, tootip_definies);
        // }
    });
    // 二级tab切换
    $('.content').off('click', '.subMenu span').on('click', '.subMenu span', function(e) {
        // e.stopPropagation();
        data_obj = JSON.parse($('.data_obj').val());
        detail_data = JSON.parse($('.detail_data').val());
        tootip_data = JSON.parse($('.tootip_data').val());



        $(this).addClass('active').siblings('span').removeClass('active');
        var $thisText = $.trim($(this).text());
        tootip_data.subTabName = $thisText;
        if ($thisText == '关注走势' || $thisText == '预购走势' || $thisText == '销量走势') {
            data_obj.view = '';
        } else if ($thisText == '关注百分比' || $thisText == '预购百分比' || $thisText == '销量百分比') {
            data_obj.view = 'percent';
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.tootip_data').val(JSON.stringify(tootip_data));
        var echartsObj = {};
        var windowWidth = $(window).width();
        if (windowWidth <= 1366) {
            echartsObj.downloadRight = '6%';
            echartsObj.echartTop = '13%';
        } else if (windowWidth <= 1440 && windowWidth > 1366) {
            echartsObj.downloadRight = '5%';
            echartsObj.echartTop = '12%';
        } else {
            echartsObj.downloadRight = '4%';
            echartsObj.echartTop = '10%';
        }
        if (tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '销量分布') { //区域销量分布
            var selectBrand2 = $(".selectBrand2").val();
            var regionDistribution = selectBrand2;
            var obj = {
                regionDistribution: regionDistribution,
                tabName: tootip_data.subTabName
            };
            loadedTitle.obj = obj;

            $('.mapTitle .china').removeClass('clicked');
            var data = JSON.parse($('.mapData1').val());
            regionMap(data.ChartData, tootip_data, loadedTitle);
            drawTable(data.TableData, loadedTitle);
            data_obj.DistributionTypeEnum = 'Province';
            data_obj.provinceName = '';
            $('.mapTitle .china').removeClass('clicked');
            if ($thisText == '销量') {
                $('.distribute .chart1').show();
                $('.distribute .chart2').hide();
                region1.resize();
                region2.resize();
            } else {
                $('.distribute .chart2').show();
                $('.distribute .chart1').hide();
                region1.resize();
                region2.resize();
            }
        } else if (tootip_data.pageId == 'SYS048MOD0200301') { //区域销量走势
            var selectBrand_region = $(".selectBrand_region").val();
            var selectProductType1 = $(".selectProductType1 .active").text();
            var regionTrend = selectBrand_region + '各' + selectProductType1;
            var obj = {
                regionTrend: regionTrend,
                tabName: tootip_data.subTabName
            };
            loadedTitle.obj = obj;

            if (tootip_data.subTabName == '销量走势') {
                lines(regionData, loadedTitle);
            } else if (tootip_data.subTabName == '销量百分比') {
                overlayBar(regionData, loadedTitle);
            }
        } else {
            getData(data_obj, judegPage, drawTable, tootip_data, 3);
        }

        $('.tootip_data').val(JSON.stringify(tootip_data));
        $('.data_obj').val(JSON.stringify(data_obj));
        $('.detail_data').val(JSON.stringify(detail_data));
        renderTootip(tootip_data, tootip_definies);
    });

    // 解释tootip显隐
    $('.content').on('mouseenter', '.Doubt', function() {
        $(this).find('.tootip').show();
    });
    $('.content').on('mouseleave', '.Doubt', function() {
        $(this).find('.tootip').hide();
    });
    // $('.content').on('mouseenter', '.downLoad', function(e) {
    //     e.stopPropagation();
    //     $(this).siblings('.tootip').hide();
    // });
});

var data_obj, detail_data, tootip_data, region1, region2, region3, region4;
var echartsObj = {};
var loadedTitle = {};
var loadIndex = 0;
var deadline;
var deadline2;
var regionData;
// var loadedData;
function echartsSize() {
    if (tootip_data.pageId == 'SYS048MOD02002') {
        var width = $(".chartBox").width();
        var height = $(".chartBox").height();
        // $('#competeRelation1').css({ 'width': width, 'height': height });
        $('#competeRelation2').css({ 'width': width, 'height': height });
        $('#competeRelation3').css({ 'width': width, 'height': height });
        $('#competeRelation4').css({ 'width': width, 'height': height });
    }

    if(tootip_data.pageId == 'SYS048MOD02002' || tootip_data.pageId == 'SYS048MOD02004'){
        var WW = $(window).width();
        if (WW <= 1366) {
            $("#competeRelation1").css({width:'1084px',height:'400px'});
        } else if (WW <= 1440 && WW > 1366) {
            $("#competeRelation1").css({width:'1063px',height:'522px'});
        } else {
            $("#competeRelation1").css({width:'1541px',height:'522px'});
        }
    }

    var windowWidth = $(window).width();
    if (windowWidth <= 1366) {
        echartsObj.downloadRight = '7%';
        echartsObj.gridRight = '9%';
        echartsObj.echartTop = '15%';
        echartsObj.fontSize = '24';
        echartsObj.xAxisfontSize = '12';
    } else if (windowWidth <= 1440 && windowWidth > 1366) {
        echartsObj.downloadRight = '6%';
        echartsObj.gridRight = '8%';
        echartsObj.echartTop = '14%';
        echartsObj.fontSize = '24';
        echartsObj.xAxisfontSize = '12';
    } else {
        echartsObj.downloadRight = '4%';
        echartsObj.gridRight = '7%';
        echartsObj.echartTop = '12%';
        echartsObj.fontSize = '28';
        echartsObj.xAxisfontSize = '14';
    }
}

//判断排名的详情页还是初始页
function judge(data, titleTime) {
    if (tootip_data.pageId == 'SYS048MOD000201' || tootip_data.pageId == 'SYS048MOD000202' || tootip_data.pageId == 'SYS048MOD000203') { //厂商排名，品牌排名，车型排名
        if ($(".mainContent").css('display') == 'block') {
            bars(data, titleTime);
        } else {
            // var selectProductType = $(".detailName").text();
            var selectProductType = detail_data.DetailName;
            titleTime.obj = {
                selectProductType: selectProductType,
                tabName: titleTime.obj.tabName.substring(0, 2) + '趋势'
            };
            barLine(data, titleTime);
        }
    } else {
        return
    }
}

//入口函数
function judegPage(data, titleTime, methodName, disName) {
    loadedTitle = titleTime;
    loadIndex++;
    if (loadIndex == 1) {
        getMinTime();
        deadline = minDate;
        deadline2 = minDay;
        // deadline = JSON.parse($('.min_time').val());
        // deadline2 = JSON.parse($('.minTime_Day').val());
    }
    echartsSize();
    data_obj = JSON.parse($('.data_obj').val());
    detail_data = JSON.parse($('.detail_data').val());
    tootip_data = JSON.parse($('.tootip_data').val());
    var currentPage = tootip_data.pageId;
    var tabName = tootip_data.tabName;
    // $(".chartBox").css('margin-top', '1.8%');
    var maxDate;
    var maxDay;
    switch (currentPage) {
        case "SYS048MOD000101": //细分市场走势
            var marketSegment = $(".marketName").val();
            var obj = {
                marketSegment: marketSegment,
                tabName: tootip_data.subTabName
            };
            titleTime.obj = obj;
            // $(".chartBox").css('margin-top', '75px');
            switch (tabName) {
                case '关注走势':
                    maxDate = deadline.AttentionMaxDate.slice(0, 7);
                    maxDay = deadline2.AttentionMaxDate;
                    if (marketSegment != '整体市场') {
                        var obj = {
                            marketSegment: '各' + marketSegment,
                            tabName: tootip_data.subTabName
                        };
                        titleTime.obj = obj;
                        if (tootip_data.subTabName == "关注百分比") {
                            overlayBar(data, titleTime);
                        } else {
                            lines(data, titleTime);
                        }
                        $(".chartBox").css('margin-top', '75px');
                    } else {
                        // $(".chartBox").css('margin-top', '1.8%');
                        var obj = {
                            marketSegment: marketSegment,
                            tabName: tootip_data.subTabName
                        };
                        titleTime.obj = obj;
                        lines(data, titleTime);
                    }
                    break;
                case '预购走势':
                    maxDate = deadline.LeadsMaxDate.slice(0, 7);
                    maxDay = deadline2.LeadsMaxDate;
                    if (marketSegment != '整体市场') {
                        if (tootip_data.subTabName == "预购百分比") {
                            overlayBar(data, titleTime);
                        } else {
                            lines(data, titleTime);
                        }
                        $(".chartBox").css('margin-top', '75px');
                    } else {
                        // $(".chartBox").css('margin-top', '1.8%');
                        lines(data, titleTime);
                    }
                    break;
                case '销量走势':
                    maxDate = deadline.SaleVolMaxDate.slice(0, 7);
                    maxDay = deadline2.SaleVolMaxDate;
                    if (marketSegment != '整体市场') {
                        if (tootip_data.subTabName == "销量百分比") {
                            overlayBar(data, titleTime);
                        } else {
                            lines(data, titleTime);
                        }
                        $(".chartBox").css('margin-top', '75px');
                    } else {
                        // $(".chartBox").css('margin-top', '1.8%');
                        lines(data, titleTime);
                    }
                    break;
            }
            break;
        case "SYS048MOD000102": //区域市场走势
            var selectRegionName = $(".selectRegionName").val();
            var obj = {
                selectRegionName: '各' + selectRegionName,
                tabName: tootip_data.subTabName
            };
            titleTime.obj = obj;
            $(".chartBox").css('margin-top', '75px');
            switch (tabName) {
                case '关注走势':
                    maxDate = deadline.AttentionMaxDate.slice(0, 7);
                    maxDay = deadline2.AttentionMaxDate;
                    if (tootip_data.subTabName == "关注百分比") {
                        overlayBar(data, titleTime);
                    } else {
                        lines(data, titleTime);
                    }
                    break;
                case '预购走势':
                    maxDate = deadline.LeadsMaxDate.slice(0, 7);
                    maxDay = deadline2.LeadsMaxDate;
                    if (tootip_data.subTabName == "预购百分比") {
                        overlayBar(data, titleTime);
                    } else {
                        lines(data, titleTime);
                    }
                    break;
                case '销量走势':
                    maxDate = deadline.SaleVolMaxDate.slice(0, 7);
                    maxDay = deadline2.SaleVolMaxDate;
                    if (tootip_data.subTabName == "销量百分比") {
                        overlayBar(data, titleTime);
                    } else {
                        lines(data, titleTime);
                    }
                    break;
            }
            break;
        case "SYS048MOD000201": //厂商排名
            var selectProductType = $(".selectProductType .active").text();
            if (selectProductType == '全部') {
                selectProductType = '全部厂商';
            } else {
                selectProductType = selectProductType + '厂商';
            }
            var obj = { selectProductType: selectProductType, tabName: tabName };
            titleTime.obj = obj;
            switch (tabName) {
                case '关注排名':
                    maxDate = deadline.AttentionMaxDate.slice(0, 7);
                    maxDay = deadline2.AttentionMaxDate;
                    break;
                case '预购排名':
                    maxDate = deadline.LeadsMaxDate.slice(0, 7);
                    maxDay = deadline2.LeadsMaxDate;
                    break;
                case '销量排名':
                    maxDate = deadline.SaleVolMaxDate.slice(0, 7);
                    maxDay = deadline2.SaleVolMaxDate;
                    break;
            }
            judge(data, titleTime);
            break;
        case "SYS048MOD000202": //品牌排名
            var selectProductType = $(".selectProductType .active").text();
            if (selectProductType == '全部') {
                selectProductType = '全部品牌';
            } else {
                selectProductType = selectProductType + '品牌';
            }
            var obj = { selectProductType: selectProductType, tabName: tabName };
            titleTime.obj = obj;

            switch (tabName) {
                case '关注排名':
                    maxDate = deadline.AttentionMaxDate.slice(0, 7);
                    maxDay = deadline2.AttentionMaxDate;
                    break;
                case '预购排名':
                    maxDate = deadline.LeadsMaxDate.slice(0, 7);
                    maxDay = deadline2.LeadsMaxDate;
                    break;
                case '销量排名':
                    maxDate = deadline.SaleVolMaxDate.slice(0, 7);
                    maxDay = deadline2.SaleVolMaxDate;
                    break;
            }
            judge(data, titleTime);
            break;
        case "SYS048MOD000203": //车型排名
            var selectProductType;
            var selectProduct = $(".selectProduct").val();
            var selectCar = $(".selectCar").val();
            var selectPrice = $(".selectPrice").val();

            if (selectProduct == '全部产地类型' && selectCar == '全部车型级别' && selectPrice == '全部价格段') {
                selectProductType = '整体市场车型';
            } else {
                if (selectProduct == '全部产地类型') {
                    selectProduct = '';
                } else {
                    selectProduct = selectProduct;
                }
                if (selectCar == '全部车型级别') {
                    selectCar = '';
                } else {
                    selectCar = selectCar;
                }
                if (selectPrice == '全部价格段') {
                    selectPrice = '';
                } else {
                    selectPrice = selectPrice;
                }
                selectProductType = selectProduct + selectCar + selectPrice + '车型';
            }

            var obj = { selectProductType: selectProductType, tabName: tabName };
            titleTime.obj = obj;
            switch (tabName) {
                case '关注排名':
                    maxDate = deadline.AttentionMaxDate.slice(0, 7);
                    maxDay = deadline2.AttentionMaxDate;
                    break;
                case '预购排名':
                    maxDate = deadline.LeadsMaxDate.slice(0, 7);
                    maxDay = deadline2.LeadsMaxDate;
                    break;
                case '销量排名':
                    maxDate = deadline.SaleVolMaxDate.slice(0, 7);
                    maxDay = deadline2.SaleVolMaxDate;
                    break;
            }
            judge(data, titleTime);
            break;
        case "SYS048MOD02001": //指数走势
            var selectCarOrBrand = $(".selectCarOrBrand .active").text();
            var selectBrand = $(".selectBrand").val();
            // var selectText = selectBrand + '及竞品' + selectCarOrBrand;
            var selectText = selectBrand + '及竞品';
            switch (tootip_data.tabName) {
                case "关注走势":
                    var obj = {
                        selectText: selectText,
                        tabName: tootip_data.subTabName
                    };
                    titleTime.obj = obj;
                    maxDate = deadline.AttentionMaxDate.slice(0, 7);
                    maxDay = deadline2.AttentionMaxDate;
                    if (tootip_data.subTabName == "关注走势") {
                        // var str = ' <span class="active">关注走势</span>' +
                        //     '<span>关注内容分布</span>';
                        // $('.content .subMenu').html(str);
                        var str = '';
                        // $(".chartBox").css('margin-top', '75px');
                        lines(data, titleTime);
                    } else if (tootip_data.subTabName == "关注内容分布") {
                        $(".chartBox").css('margin-top', '75px');
                        overlayBar(data, titleTime);
                    }
                    break;
                case "预购走势":
                    $(".chartBox").css('margin-top', 0);
                    var obj = { selectText: selectText, tabName: tabName };
                    titleTime.obj = obj;
                    maxDate = deadline.LeadsMaxDate.slice(0, 7);
                    maxDay = deadline2.LeadsMaxDate;
                    lines(data, titleTime);
                    break;
                case "销量走势":
                    $(".chartBox").css('margin-top', 0);
                    var obj = { selectText: selectText, tabName: tabName };
                    titleTime.obj = obj;
                    maxDate = deadline.SaleVolMaxDate.slice(0, 7);
                    maxDay = deadline2.SaleVolMaxDate;
                    lines(data, titleTime);
                    break;
            }
            break;
        case "SYS048MOD0200201": //竞争格局
            var carLevel = $(".carLevel").val();
            var suvName = $(".suvName").val();
            var selectProductType_compete = $(".selectProductType_compete .active").text();
            var competePattern;
            if (carLevel == 'SUV') {
                competePattern = suvName + selectProductType_compete + '车型';
            } else {
                competePattern = carLevel + selectProductType_compete + '车型';
            }
            if (selectProductType_compete == '全部') {
                competePattern = carLevel + '市场';
            }
            var obj = { competePattern: competePattern, tabName: tabName };
            titleTime.obj = obj;

            maxDate = deadline.CompetitiveIndexMaxDate.slice(0, 7);
            maxDay = deadline2.CompetitiveIndexMaxDate;
            bubbleDiagram(data, titleTime);
            break;
        case "SYS048MOD02002": //竞争关系
            var carTypeName = $(".carTypeName").val();
            var competeRelation;
            var obj = {};
            switch (tootip_data.tabName) {
                case "对比车型":
                    // $(".chartBox").css('margin-top', '1.8%');
                    competeRelation = carTypeName;
                    obj = { competeRelation: competeRelation, tabName: tabName };
                    titleTime.obj = obj;

                    relationDiagram(data, titleTime);
                    maxDate = deadline.CompetitivePrimaryMaxDate.slice(0, 7);
                    maxDay = deadline2.CompetitivePrimaryMaxDate;
                    break;
                case "对比关系":
                    competeRelation = carTypeName;
                    obj = { competeRelation: competeRelation, tabName: tabName };
                    titleTime.obj = obj;
                    splashesDiagram(data, titleTime);
                    maxDate = deadline.CompetitiveRelationMaxDate.slice(0, 7);
                    maxDay = deadline2.CompetitiveRelationMaxDate;
                    break;
                case "竞争重合":
                    competeRelation = carTypeName;
                    obj = { competeRelation: competeRelation, tabName: tabName };
                    titleTime.obj = obj;
                    splashesDiagram(data, titleTime);
                    maxDate = deadline.CompetitiveSuperposeMaxDate.slice(0, 7);
                    maxDay = deadline2.CompetitiveSuperposeMaxDate;
                    break;
                case "访问流转":
                    competeRelation = carTypeName;
                    obj = { competeRelation: competeRelation, tabName: tabName };
                    titleTime.obj = obj;
                    competeSankey(data, titleTime);
                    maxDate = deadline.CompetitiveIOMaxDate.slice(0, 7);
                    maxDay = deadline2.CompetitiveIOMaxDate;
                    break;
            }
            break;
        case "SYS048MOD0200301": //区域销量走势
            var selectBrand_region = $(".selectBrand_region").val();
            var selectProductType1 = $(".selectProductType1 .active").text();
            var regionTrend = selectBrand_region + '各' + selectProductType1;
            var obj = {
                regionTrend: regionTrend,
                tabName: tootip_data.subTabName
            };
            titleTime.obj = obj;

            if (tootip_data.tabName == "销量走势") {
                $(".chartBox").css('margin-top', '75px');
                if ($(".subMenu .active").index() != 1) {
                    var str = '<span class="active">销量走势</span>' +
                            '<span>销量百分比</span>';
                    $('.content .subMenu').html(str);
                    lines(data, titleTime);
                } else {
                    overlayBar(data, titleTime)
                }
            }
            maxDate = deadline.AreaSalesTrendMaxDate.slice(0, 7);
            maxDay = deadline2.AreaSalesTrendMaxDate;
            break;
        case "SYS048MOD0200302": //区域销量分布
            var selectBrand2 = $(".selectBrand2").val();
            var regionDistribution = selectBrand2;
            maxDate = deadline.AreaSalesDistributionMaxDate.slice(0, 7);
            maxDay = deadline2.AreaSalesDistributionMaxDate;
            if (tootip_data.tabName == "销量分布") {
                var obj = {
                    regionDistribution: regionDistribution,
                    tabName: tootip_data.subTabName
                };
                titleTime.obj = obj;
                if (tootip_data.subTabName == '销量') {
                    var str = ' <span class="active">销量</span>' +
                            '<span>销量同比增速</span>';
                    $('.content .subMenu').html(str);
                } else {
                    var str = ' <span>销量</span>' +
                            '<span class="active">销量同比增速</span>';
                    $('.content .subMenu').html(str);
                }

                $(".chartBox").css('margin-top', '75px');
            } else {
                $(".chartBox").css('margin-top', '0');
                var obj = {
                    regionDistribution: regionDistribution,
                    tabName: tabName
                };
                titleTime.obj = obj;
            }
            regionMap(data, tootip_data, titleTime);
            break;
        case "SYS048MOD0301": //基础属性
            $(".lastDate").text(titleTime.QueryEndDt);
            for (var i = 0; i < data.length; i++) {
                if (data[i].Portray == '性别') {
                    var gender = data[i];
                    genderDistribution(gender);
                } else if (data[i].Portray == '年龄') {
                    var age = data[i];
                    bars(age, '');
                } else if (data[i].Portray == '学历') {
                    var edu = data[i];
                    bars(edu, '');
                } else if (data[i].Portray == '职业') {
                    var profession = data[i];
                    // bars(profession, '');
                }
            }
            break;
        case "SYS048MOD0302": //区域特征
            $(".lastDate").text(titleTime.QueryEndDt);
            for (var i = 0; i < data.length; i++) {
                if (data[i].Portray == '省份') {
                    regionMap(data, tootip_data, titleTime);
                } else if (data[i].Portray == '大区') {
                    var catarc_area = data[i];
                    bars(catarc_area, '');
                } else if (data[i].Portray == '城市级别') {
                    var catarc_city_level = data[i];
                    bars(catarc_city_level, '');
                }
            }
            break;
        case "SYS048MOD0303": //生活状态
            $(".lastDate").text(titleTime.QueryEndDt);
            for (var i = 0; i < data.length; i++) {
                if (data[i].Portray == '婚姻状态') {
                    var maritalStatus = data[i];
                    ringlikeDiagram(maritalStatus);
                } else if (data[i].Portray == '家庭结构') {
                    var familyStructure = data[i];
                    ringlikeDiagram(familyStructure);
                } else if (data[i].Portray == '人生阶段') {
                    var lifeStages = data[i];
                    bars(lifeStages, '');
                } else if (data[i].Portray == '社会阶层') {
                    var socialBracket = data[i];
                    bars(socialBracket, '');
                }
            }
            break;
        case "SYS048MOD0306": //消费能力
            $(".lastDate").text(titleTime.QueryEndDt);
            for (var i = 0; i < data.length; i++) {
                if (data[i].Portray == '拥车状况') {
                    var ownCarStatus = data[i];
                    // highCharts(ownCarStatus);
                    pieDiagram(ownCarStatus);
                } else if (data[i].Portray == '资产状况') {
                    var financialStatus = data[i];
                    overlayBar(financialStatus, '');
                } else if (data[i].Portray == '消费观') {
                    var consumptionView = data[i];
                    bars(consumptionView, '');
                }
            }
            break;
        case "SYS048MOD0304": //人格特质
            // $(".lastDate").text(titleTime.QueryEndDt);
            // splashesDiagram(data, '');
            switch (tootip_data.tabName) {
                case "心理特征":
                    for(var i =data.length-1;i>=0;i--){
                        if(data[i].Portray == '价值观'){
                            radar(data[i], '','personChara2');
                        }else if(data[i].Portray == '性格'){
                            radar(data[i], '','personChara1');
                        }
                    }
                    break;
                case "兴趣爱好":
                    barLine(data,'');
                    break;
            }
            
            break;
        case "SYS048MOD0305": //网络行为
            $(".lastDate").text(titleTime.QueryEndDt);
            switch (tootip_data.tabName) {
                case "媒介偏好":
                    // splashesDiagram(data, '');
                    barLine(data,'');
                    break;
                case "最爱媒体排行榜":
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].Portray == '用户覆盖率排行榜') {
                            barLine(data[i],'','RankingDetail');
                        } else if (data[i].Portray == '用户偏好度排行榜') {
                            barLine(data[i],'','TGIRanking');
                        }
                    }
                    break;
            }
            break;
        case "SYS048MOD02004": //车型卡片
            if (methodName == undefined) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Portray == '性别') {
                        var gender = data[i];
                        genderDistribution(gender);
                    } else if (data[i].Portray == '年龄') {
                        var age = data[i];
                        bars(age, '');
                    } else if (data[i].Portray == '婚姻状态') {
                        var maritalStatus = data[i];
                        ringlikeDiagram(maritalStatus);
                    } else if (data[i].Portray == '家庭结构') {
                        var familyStructure = data[i];
                        ringlikeDiagram(familyStructure);
                    } else if (data[i].Portray == '人生阶段') {
                        var lifeStages = data[i];
                        // ringlikeDiagram(lifeStages);
                        bars(lifeStages, '');
                    } else if (data[i].Portray == '社会阶层') {
                        var socialBracket = data[i];
                        ringlikeDiagram(socialBracket);
                    } else if (data[i].Portray == '性格') {
                        var personality = data[i];
                        // ringlikeDiagram(personality);
                        // bars(personality, '');
                        radar(data[i],'','personChara1');
                    } else if (data[i].Portray == '价值观') {
                        // var Values = data[i];
                        // ringlikeDiagram(Values);
                        radar(data[i],'','personChara2');
                    } else if (data[i].Portray == '兴趣/偏好') {
                        var hobby = data[i];
                        // bars(hobby, '');
                        barLine(hobby,'','personChara3');
                    } else if (data[i].Portray == '媒介偏好') {
                        var mediaPre = data[i];
                        // bars(mediaPre, '');
                        barLine(mediaPre,'','internetBehavior');
                    }
                }
            } else {
                var selectCarOrBrand = $(".selectCardBrandOrModel .active").text();
                var selectBrand = $(".carOrBrandOfCard").val();
                switch (methodName) {
                    case "relationDiagram": //核心竞品
                        var obj = {
                            competeRelation: selectBrand,
                            tabName: '及核心竞品'
                        };
                        titleTime.obj = obj;
                        relationDiagram(data, titleTime);
                        break;
                    case "splashesDiagram": //竞争关系 竞争重合
                        competeRelation = carTypeName + '及核心竞品';
                        obj = { competeRelation: selectBrand, tabName: tabName };
                        titleTime.obj = obj;
                        splashesDiagram(data, titleTime, disName);
                        break;
                    case "lines": //指数走势（关注 预购 销量）
                        var selectText = selectBrand + '及竞品' + selectCarOrBrand;
                        var obj = {
                            selectText: selectText,
                            tabName: tootip_data.subTabName
                        };
                        titleTime.obj = obj;
                        lines(data, titleTime, disName);
                        break;
                    case "regionMap": //销量分布地图  竞争表现
                        regionMap(data, tootip_data, titleTime, disName);
                        break;
                    case "overlayBar": //大区、城市销量占比
                        var regionTrend = selectBrand;
                        var obj = {
                            regionTrend: regionTrend,
                            tabName: tootip_data.subTabName
                        };
                        titleTime.obj = obj;
                        overlayBar(data, titleTime, disName);
                        break;
                }
            }
            break;
        case "SYS048MOD0401": //产品类型偏好
            /*var selectProductType = $(".detailName").text();
             titleTime.obj = {
             selectProductType: selectProductType,
             tabName: titleTime.obj.tabName.substring(0, 2) + '趋势'
             };*/
            $(".lastDate").text(titleTime.QueryEndDt);
            barLine(data, titleTime);
            break;
        case "SYS048MOD0402": //车型偏好
            /* var selectProductType = $(".detailName").text();
             titleTime.obj = {
             selectProductType: selectProductType,
             tabName: titleTime.obj.tabName.substring(0, 2) + '趋势'
             };*/
            $(".lastDate").text(titleTime.QueryEndDt);
            barLine(data, titleTime);
            break;
    }
    if ($('.chooseDateFormat').length == 0) {
        $(".lastDate").text(maxDate);
    } else {
        if ($('.chooseDateFormat span').eq(0).hasClass('active')) {
            $(".lastDate").text(maxDay);
        } else {
            $(".lastDate").text(maxDate);
        }
    }
}

//折线(细分市场、区域市场、指数走势、)
function lines(data, titleTime, disName) {
    var myChart, titleText, yAxisName;
    if (tootip_data.pageId == 'SYS048MOD000101') { //细分市场走势
        myChart = echarts.init(document.getElementById('divisionMarket'));
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.marketSegment + titleTime.obj.tabName;
        yAxisName = '万';
    } else if (tootip_data.pageId == 'SYS048MOD000102') { //区域市场走势
        myChart = echarts.init(document.getElementById('regionMarketTrend'));
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectRegionName + titleTime.obj.tabName;
        yAxisName = '万';
    } else if (tootip_data.pageId == 'SYS048MOD02001') { //指数走势
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectText + titleTime.obj.tabName;
        myChart = echarts.init(document.getElementById('exponential'));
        yAxisName = '万';
    } else if (tootip_data.pageId == 'SYS048MOD0200301') { //区域销量走势
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionTrend + titleTime.obj.tabName;
        myChart = echarts.init(document.getElementById('regionTrend'));
        regionData = data;
        yAxisName = '';
    } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        if (disName == 'attentionTrend') {
            myChart = echarts.init(document.getElementById('attentionTrend'));
            titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectText + '关注走势';
        } else if (disName == 'purchaseTrend') {
            myChart = echarts.init(document.getElementById('purchaseTrend'));
            titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectText + '预购走势';
        } else if (disName == 'salesTrend') {
            myChart = echarts.init(document.getElementById('salesTrend'));
            titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectText + '销量走势';
        }
        yAxisName = '万';
    }
    var result;
    if (data == null) {
        result = [];
    } else {
        result = data.Values
    }
    var legendData = [];
    var seriesData = [];
    var lineColor = ['#4579e5', '#2e8798', '#F0B301', '#9BBB36', '#F08C00', '#e76a26', '#f12117', '#c8002c', '#ae07a2'];
    var xData = [];
    var timeBar = data.X;

    var yFormatter; //提示框格式
    var selectedMode; //是否能点击图例
    for (var j = 0; j < timeBar.length; j++) {
        if (parseInt(timeBar[j].substring(4, 6)) == 1) {
            xData.push(parseInt(timeBar[j].substring(0, 4)) + '年' + parseInt(timeBar[j].substring(4, 6)) + '月');
        } else {
            xData.push(parseInt(timeBar[j].substring(4, 6)) + '月');
        }
    }
    for (var i = 0; i < result.length; i++) {
        legendData.push({ name: result[i].Name, icon: 'rect' });
        var dataObj;
        // dataObj = result[i].Data;
        if (tootip_data.pageId == 'SYS048MOD000101' || tootip_data.pageId == 'SYS048MOD000102' || tootip_data.pageId == 'SYS048MOD02001' || tootip_data.pageId == 'SYS048MOD02004') { //细分市场走势、区域市场走势、指数走势、区域销量走势、车型卡片
            // console.log(result[i].Data);
            var data1 = result[i].Data;
            var dataArr = [];
            var datas;
            for (var k = 0; k < data1.length; k++) {
                datas = data1[k] / 10000;
                dataArr.push(datas);
            }
            dataObj = dataArr;
        } else {
            dataObj = result[i].Data;
        }
        yFormatter = '{value}';
        var obj = {
            name: result[i].Name,
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 6,
            hoverAnimation: false,
            lineStyle: {
                color: lineColor[i],
                width: 1.5
            },
            itemStyle: {
                normal: {
                    color: lineColor[i]
                }
            },
            data: dataObj
        };
        seriesData.push(obj);
    }
    if (result.length == 1) {
        selectedMode = false;
    } else {
        selectedMode = true;
    }
    var toolboxShow;
    if (tootip_data.pageId == 'SYS048MOD02004') {
        toolboxShow = false;
    } else {
        toolboxShow = true;
    }
    var option = {
        title: {
            text: titleText,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            axisPointer: {
                type: 'line',
                lineStyle: {
                    type: 'dashed'
                }
            },
            // position: 'top',
            position: function(p) { //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            },
            formatter: function(params) {
                var str = '';
                if (tootip_data.subTabName == '销量百分比') {
                    for (var i = 0; i < params.length; i++) {
                        str += params[i].marker + params[i].seriesName + ': ' + params[i].value + '%<br />';
                    }
                } else {
                    for (var i = 0; i < params.length; i++) {
                        str += params[i].marker + params[i].seriesName + ': ' + params[i].value + '<br />';
                    }
                }
                str = timeBar[params[0].dataIndex] + '<br />' + str;
                return str;
            }
        },
        legend: {
            type: 'plain',
            top: '90%',
            align: 'auto',
            data: legendData,
            itemGap: 30,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            itemWidth: 30,
            itemHeight: 5,
            selectedMode: selectedMode
        },
        grid: {
            top: echartsObj.echartTop,
            left: '7%',
            right: '7%',
            bottom: '14%',
            containLabel: true
        },
        toolbox: {
            show: toolboxShow,
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: 0
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeBar,
            axisTick: {
                show: true,
                inside: true
            },
            axisLine: { //坐标轴线
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                color: '#797991',
                fontSize: echartsObj.xAxisfontSize
            }
        },
        yAxis: {
            name: yAxisName,
            nameLocation: 'end',
            nameTextStyle: {
                color: '#797991'
            },
            type: 'value',
            scale: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                color: '#797991',
                fontSize: echartsObj.xAxisfontSize,
                formatter: yFormatter
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ececec'
                }
            }
        },
        series: seriesData
    };
    myChart.clear();
    myChart.setOption(option, true);
    $(window).resize(function() {
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        option.grid.top = echartsObj.echartTop;
        option.xAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        option.yAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
            myChart = echarts.init($('#attentionTrend')[0]);
            myChart.resize();
            myChart = echarts.init($('#purchaseTrend')[0]);
            myChart.resize();
            myChart = echarts.init($('#salesTrend')[0]);
            myChart.resize();
        }else{
            myChart.setOption(option, true);
            myChart.resize();
        }
    });
}

//柱状(排名)
function bars(data, titleTime) {
    $(".comment").hide();
    var myChart, title, interval, top, yAxisName, axisLabelRoate;
    if (tootip_data.pageId == 'SYS048MOD000201') { //厂商排名
        title = {
            text: titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectProductType + titleTime.obj.tabName,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = 0;
        myChart = echarts.init(document.getElementById('Ranking'));
        interval = 0;
        yAxisName = '万';
        axisLabelRoate = 0;
    } else if (tootip_data.pageId == 'SYS048MOD000202') { //品牌排名
        title = {
            text: titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectProductType + titleTime.obj.tabName,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = 0;
        myChart = echarts.init(document.getElementById('Ranking'));
        interval = 0;
        yAxisName = '万';
        axisLabelRoate = 0;
    } else if (tootip_data.pageId == 'SYS048MOD000203') { //车型排名
        title = {
            text: titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectProductType + titleTime.obj.tabName,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = 0;
        myChart = echarts.init(document.getElementById('Ranking'));
        interval = 0;
        yAxisName = '万';
        axisLabelRoate = 0;
    } else if (tootip_data.pageId == 'SYS048MOD0301') { //基础属性
        var titleLeft;
        if (data.Portray == '年龄') {
            myChart = echarts.init(document.getElementById('ageDiv'));
            titleLeft = '2%';
        } else if (data.Portray == '学历') {
            myChart = echarts.init(document.getElementById('eduDiv'));
            titleLeft = '2.5%';
        } else if (data.Portray == '职业') {
            myChart = echarts.init(document.getElementById('professionDiv'));
            titleLeft = '2.5%';
        }
        title = {
            text: data.Portray,
            left: titleLeft,
            y: '3%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = '3%';
        interval = 0;
        yAxisName = '';
        axisLabelRoate = 0;
    } else if (tootip_data.pageId == 'SYS048MOD0302') { //区域特征
        if (data.Portray == '大区') {
            myChart = echarts.init(document.getElementById('catarc_area'));
        } else if (data.Portray == '城市级别') {
            myChart = echarts.init(document.getElementById('catarc_city_level'));
        }
        title = {
            text: data.Portray,
            left: '2%',
            y: '3%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = '3%';
        interval = 0;
        yAxisName = '';
        axisLabelRoate = 0;
    } else if (tootip_data.pageId == 'SYS048MOD0303') { //生活状态
        if (data.Portray == '人生阶段') {
            myChart = echarts.init(document.getElementById('lifeStages'));
            axisLabelRoate = 0;
        } else if (data.Portray == '社会阶层') {
            myChart = echarts.init(document.getElementById('socialBracket'));
            axisLabelRoate = 45;
        }
        title = {
            text: data.Portray,
            left: '2%',
            y: '3%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = '3%';
        interval = 0;
        yAxisName = '';
        // axisLabelRoate = 0;
    } else if (tootip_data.pageId == 'SYS048MOD0306') { //消费能力
        myChart = echarts.init(document.getElementById('consumptionView'));
        title = {
            text: data.Portray,
            left: '3%',
            y: '3%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = '3%';
        interval = 0;
        yAxisName = '';
        axisLabelRoate = 0;
    } else if (tootip_data.pageId == 'SYS048MOD0305') { //网络行为
        $(".tableWrapper ").hide();
        if (data.Portray == '次数占比') {
            $("#internetBehavior").hide();
            $("#timePercent").show();
            myChart = echarts.init(document.getElementById('timePercent'));
        } else if (data.Portray == 'TGI排行') {
            $(".netWork").show();
            myChart = echarts.init(document.getElementById('TGIRanking'));
        }
        title = {
            text: data.Portray,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = 0;
        interval = 0;
        yAxisName = '';
        axisLabelRoate = 45;
    } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        title = {
            text: '',
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = 0;
        interval = 0;
        yAxisName = '';
        axisLabelRoate = 0;
        if (data.Portray == '年龄') {
            myChart = echarts.init(document.getElementById('ageDiv'));
        } else if (data.Portray == '兴趣/偏好') {
            $(".netWork").show();
            myChart = echarts.init(document.getElementById('personChara'));
        } else if (data.Portray == '媒介偏好') {
            $(".netWork").show();
            myChart = echarts.init(document.getElementById('internetBehavior'));
        } else if (data.Portray == '人生阶段') {
            myChart = echarts.init(document.getElementById('lifeStages'));
        } else if (data.Portray == '性格') {
            myChart = echarts.init(document.getElementById('personality'));
        }
    }

    if (data.Portray == '价值观') {
        var resultData = data.Data;
        var arr = [];
        for (var j = 0; j < resultData.length; j++) {
            var arrObj = {
                Name: resultData[j][2],
                Value: resultData[j][0],
            };
            arr.push(arrObj);
        }
        result = arr;
    } else {
        result = data.Data;
    }

    var result;
    if (data == null) {
        result = [];
    } else {
        if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片 修改数据结构
            if (data.Portray == '兴趣/偏好') {
                var resultData = data.Data;
                var Data = [];
                for (var j = 0; j < 10; j++) {
                    var arrObj = {
                        Name: resultData[j][2],
                        Value: resultData[j][0],
                    };
                    Data.push(arrObj);
                }
                var resultObj = {
                    Portray: data.Portray,
                    Data: Data
                };
                result = resultObj;
            } else if (data.Portray == '媒介偏好') {
                var resultData = data.Data;
                var Data = [];
                for (var j = 0; j < 15; j++) {
                    var arrObj = {
                        Name: resultData[j][2],
                        Value: resultData[j][0],
                    };
                    Data.push(arrObj);
                }
                var resultObj = {
                    Portray: data.Portray,
                    Data: Data
                };
                result = resultObj;
            } else {
                result = data;
            }
        } else {
            result = data;
        }
    }

    var timeData = []; //时间
    var barData = []; //柱状数据
    var axisLabel;
    if (result.Portray === undefined) {
        if (result.length <= 10) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].X_Value.indexOf('（进口）')) {
                    result[i].X_Value = result[i].X_Value.split('（')[0];
                }
                timeData.push(result[i].X_Value);
                barData.push({ value: result[i].Y0_Value / 10000 + '' }); //y轴单位作万处理
            }
        } else {
            for (var i = 0; i < 10; i++) {
                if (result[i].X_Value.indexOf('（进口）')) {
                    result[i].X_Value = result[i].X_Value.split('（')[0];
                }
                timeData.push(result[i].X_Value);
                barData.push({ value: result[i].Y0_Value / 10000 + '' }); //y轴单位作万处理
            }
        }

        var tooltipData;
        if (tootip_data.tabName.substring(0, 2) == '关注') {
            tooltipData = '关注指数';
        } else if (tootip_data.tabName.substring(0, 2) == '预购') {
            tooltipData = '预购指数';
        } else if (tootip_data.tabName.substring(0, 2) == '销量') {
            tooltipData = '销量指数';
        }

        axisLabel = {
            color: '#797991',
            fontSize: echartsObj.xAxisfontSize
        }
    } else {
        axisLabel = {
            color: '#797991',
            formatter: '{value}%',
            fontSize: echartsObj.xAxisfontSize

        };
        if (result.Portray == '性格') {
            var resultData1 = result.Data;
            var arr1 = [];
            for (var j = 0; j < resultData1.length; j++) {
                var arrObj1 = {
                    Name: resultData1[j][2],
                    Value: resultData1[j][0],
                };
                arr1.push(arrObj1);
            }
            result.Data = arr1;
        }

        for (var i = 0; i < result.Data.length; i++) {
            timeData.push(result.Data[i].Name);
            barData.push({ value: result.Data[i].Value });
        }
        tooltipData = '';
    }

    var xfontSize;
    var windowWidth = $(window).width();
    if (windowWidth <= 1366) {
        xfontSize = 12;
    } else if (windowWidth <= 1440) {
        xfontSize = 12;
    } else {
        xfontSize = 14;
    }

    var toolboxShow, barlabelShow, tooltipShow;
    if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        toolboxShow = false;
        barlabelShow = true;
        tooltipShow = false;
    } else {
        toolboxShow = true;
        barlabelShow = false;
        tooltipShow = true;
    }

    var gridBottom;
    if (tootip_data.pageId == 'SYS048MOD0305' || tootip_data.pageId == 'SYS048MOD0306') { //网络行为，消费能力 （没有图例坐标区域的下边距）
        gridBottom = '8%';
    } else {
        if(tootip_data.pageId == 'SYS048MOD0303' && result.Portray == '社会阶层'){
            gridBottom = '6%';
        }else{
            gridBottom = '14%'; 
        }
       
    }
    var option = {
        title: title,
        backgroundColor: '#fff',
        tooltip: {
            show: tooltipShow,
            confine: true,
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                shadowStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            textStyle: {
                fontSize: 12,
                align: 'left'
            },
            formatter: function(params) {
                var str = '';
                for (var i = 0; i < params.length; i++) {
                    if (result.Portray === undefined) {
                        str += params[i].marker + tooltipData + ': ' + params[i].value + '<br />';
                    } else {
                        str += params[i].marker + tooltipData + '占比: ' + params[i].value + '%<br />';
                    }

                }
                str = timeData[params[0].dataIndex] + '<br />' + str;
                return str;
            }
        },
        grid: {
            top: echartsObj.echartTop,
            // top:gridTop,
            left: '7%',
            right: '7%',
            bottom: gridBottom,
            containLabel: true
        },
        legend: {
            type: 'plain',
            top: '90%',
            align: 'auto',
            data: [{ name: tooltipData, icon: 'rect' }],
            itemGap: 30,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            itemWidth: 30,
            itemHeight: 5,
            selectedMode: false
        },
        toolbox: {
            show: toolboxShow,
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: top
            // top:
        },
        xAxis: {
            show: true,
            type: 'category',
            data: timeData,
            axisPointer: {
                type: 'shadow'
            },
            axisTick: {
                show: false
            },
            axisLine: { //坐标轴线
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                color: '#797991',
                fontSize: xfontSize,
                interval: interval,
                showMinLabel: true,
                showMaxLabel: true,
                rotate: axisLabelRoate

            }
        },
        yAxis: {
            name: yAxisName,
            nameLocation: 'end',
            nameTextStyle: {
                color: '#797991'
            },
            type: 'value',
            scale: false,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: axisLabel,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ececec'
                }
            }
        },
        series: {
            name: tooltipData,
            type: 'bar',
            data: barData,
            barCategoryGap: '52%',
            barMaxWidth: 25,
            label: {
                normal: {
                    show: barlabelShow,
                    position: 'top',
                    formatter: '{c}%'
                }
            },
            itemStyle: {
                normal: {
                    color: '#4579e5',
                    barBorderRadius: [0, 0, 0, 0]
                },
                emphasis: {
                    color: '#4579e5'
                }
            }
        }
    };
    myChart.clear();
    myChart.setOption(option, true);
    $(window).resize(function() {
        var windowWidth = $(window).width();
        echartsSize();
        if (windowWidth <= 1366) {
            xfontSize = 12;
        } else if (windowWidth <= 1440 && windowWidth > 1366) {
            xfontSize = 12;
        } else {
            xfontSize = 14;
        }
        option.toolbox.right = echartsObj.downloadRight;
        option.grid.top = echartsObj.echartTop;
        option.xAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        option.yAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        myChart.setOption(option, true);
        myChart.resize();
    });
}

//拄折(排名详情)
function barLine(data, titleTime,ID) {
    $(".detailName").hide();
    var titleText, yAxisName, yAxisName1,axisLabelRoate;
    if (tootip_data.pageId == 'SYS048MOD0401' || tootip_data.pageId == 'SYS048MOD0402') { //产品类型偏好、车型偏好
        titleText = '';
        yAxisName = '用户覆盖率';
        yAxisName1 = '用户偏好度';
    }else if(tootip_data.pageId == 'SYS048MOD0304'){//人格特质\
        yAxisName = '用户覆盖率';
        yAxisName1 = '用户偏好度';
    }else if(tootip_data.pageId == 'SYS048MOD0305'){//网络行为
        if(tootip_data.tabName == '媒介偏好'){
            yAxisName = '用户使用率';
            yAxisName1 = '用户偏好度';
        }else if(tootip_data.tabName == '最爱媒体排行榜'){
            yAxisName = '用户使用率';
            yAxisName1 = '用户偏好度';
        }

    }else if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
        if(ID == 'personChara3'){//兴趣偏好
            yAxisName = '用户覆盖率';
            yAxisName1 = '用户偏好度';
        }else if(ID == 'internetBehavior'){//媒介偏好
            yAxisName = '用户使用率';
            yAxisName1 = '用户偏好度';
        }
    } else { //竞争排名详情
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectProductType + titleTime.obj.tabName;
        yAxisName = '万';
        yAxisName1 = '';
    }

    $(".chartBox").css('margin-top', '0');
    var result;
    if (data == null) {
        result = [];
    } else {
        result = data;
    }
    var timeData = []; //时间
    var timeBar = []; //提示框的时间
    var barData1 = []; //柱状数据
    var lineData = []; //折线数据
    var table1 = result;
    var legendData;
    if (tootip_data.pageId == 'SYS048MOD0401' || tootip_data.pageId == 'SYS048MOD0402') {
        legendData = [{ name: '用户覆盖率', icon: 'rect' }, { name: '用户偏好度', icon: 'rect' }];
        var barLineData = result[0].Data;
        for (var i = 0; i < barLineData.length; i++) {
            timeBar.push(barLineData[i].Name);
            barData1.push({ value: barLineData[i].Value + '' });
            // barData1.push({value: barLineData[i].TGI + ''});
            lineData.push({ value: barLineData[i].TGI + '' });
        }
    }else if(tootip_data.pageId == 'SYS048MOD0304' || tootip_data.pageId == 'SYS048MOD02004'){//人格特质、车型卡片
        var barLineData;
        if(tootip_data.pageId == 'SYS048MOD0304'){//人格特质
            barLineData= result[0].Data;
            legendData = [{ name: '用户覆盖率', icon: 'rect' }, { name: '用户偏好度', icon: 'rect' }];
        }else if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
            if(ID == 'personChara3'){//兴趣爱好
                legendData = [{ name: '用户覆盖率', icon: 'rect' }, { name: '用户偏好度', icon: 'rect' }];
            }else if(ID == 'internetBehavior'){//媒介偏好
                legendData = [{ name: '用户使用率', icon: 'rect' }, { name: '用户偏好度', icon: 'rect' }];
            }
            barLineData= result.Data;
        }
        var len = barLineData.length>15? 15 : barLineData.length;
        for (var i = 0; i < len; i++) {
            timeBar.push(barLineData[i].Name);
            barData1.push({ value: barLineData[i].Value + '' });
            lineData.push({ value: barLineData[i].TGI + '' });
        }
    }else if(tootip_data.pageId == 'SYS048MOD0305'){//网络行为
        if(tootip_data.tabName == '媒介偏好'){
            legendData = [{ name: '用户使用率', icon: 'rect' }, { name: '用户偏好度', icon: 'rect' }];
            var barLineData = result[0].Data;
            for (var i = 0; i < barLineData.length; i++) {
                timeBar.push(barLineData[i].Name);
                barData1.push({ value: barLineData[i].Value + '' });
                // barData1.push({value: barLineData[i].TGI + ''});
                lineData.push({ value: barLineData[i].TGI + '' });
            }
        }else if(tootip_data.tabName == '最爱媒体排行榜'){
            legendData = [{ name: '用户使用率', icon: 'rect' }, { name: '用户偏好度', icon: 'rect' }];
            var barLineData = result.Data;
            for (var i = 0; i < barLineData.length; i++) {
                timeBar.push(barLineData[i].Name);
                barData1.push({ value: barLineData[i].Value + '' });
                lineData.push({ value: barLineData[i].TGI + '' });
            }
        }

    } else {
        legendData = [{ name: '指数', icon: 'rect' }, { name: '环比涨幅', icon: 'rect' }];
        for (var i = 0; i < table1.length; i++) {
            timeBar.push(table1[i].X_Value + '');
            if (parseInt(table1[i].X_Value.substring(5, 7)) == 1) {
                timeData.push(parseInt(table1[i].X_Value.substring(0, 4)) + '年' + parseInt(table1[i].X_Value.substring(5, 7)) + '月');
            } else {
                timeData.push(parseInt(table1[i].X_Value.substring(5, 7)) + '月');
            }

            barData1.push({ value: table1[i].Y0_Value / 10000 + '' }); //y轴单位做万处理
            lineData.push({ value: table1[i].Y1_Value + '' });
        }
    }

    // $('#RankingDetail').show();

    var axisLabelRotate, axisLabelFor, axisLabelFor1;
    // if($(window).width()<1440 && tootip_data.pageId == 'SYS048MOD0402'){
    if (tootip_data.pageId == 'SYS048MOD0402' || tootip_data.pageId == 'SYS048MOD0305'|| tootip_data.pageId == 'SYS048MOD0304') {
        axisLabelRotate = 45;
    }else if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
        if(ID == 'internetBehavior'){
            axisLabelRotate = 45;
        }
    } else {
        if ($(".chooseDateFormat .active").text() == '日') {
            axisLabelRotate = 45;
        } else {
            axisLabelRotate = 0;
        }

    }


    if (tootip_data.pageId == 'SYS048MOD0402' || tootip_data.pageId == 'SYS048MOD0401' || tootip_data.pageId == 'SYS048MOD0402' ||tootip_data.pageId == 'SYS048MOD0304' || tootip_data.pageId == 'SYS048MOD0305'|| tootip_data.pageId == 'SYS048MOD02004') {
        axisLabelFor = '{value}%';
        axisLabelFor1 = '{value}'
    } else {
        axisLabelFor = '{value}';
        axisLabelFor1 = '{value}%'
    }
    //柱状折线图
    var option = {
        title: {
            text: titleText,
            // text: '',
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        tooltip: {
            confine: true,
            position: function(p) { //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            },
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                shadowStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            textStyle: {
                fontSize: 12,
                align: 'left'
            },
            formatter: function(params) {
                var str = '';
                if (params.length == 2) {
                    if (tootip_data.pageId == 'SYS048MOD0402' || tootip_data.pageId == 'SYS048MOD0401' || tootip_data.pageId == 'SYS048MOD0305' || tootip_data.pageId == 'SYS048MOD0304'|| tootip_data.pageId == 'SYS048MOD02004') {
                        str += params[0].marker + params[0].seriesName + ': ' + params[0].data.value + '%' + '<br />' +
                                params[1].marker + params[1].seriesName + ': ' + params[1].data.value;
                    } else {
                        str += params[0].marker + params[0].seriesName + ': ' + params[0].data.value + '<br />' +
                                params[1].marker + params[1].seriesName + ': ' + params[1].data.value + '%';
                    }
                }
                str = timeBar[params[0].dataIndex] + '<br />' + str;
                return str;
            }
        },
        grid: {
            top: echartsObj.echartTop,
            left: '7%',
            right: '7%',
            bottom: '14%',
            containLabel: true
        },
        legend: {
            type: 'plain',
            top: '90%',
            align: 'auto',
            data: legendData,
            itemGap: 30,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            itemWidth: 30,
            itemHeight: 5,
            selectedMode: true
        },
        toolbox: {
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: 0
        },
        xAxis: [{
            type: 'category',
            data: timeBar,
            axisPointer: {
                type: 'shadow'
            },
            axisTick: {
                show: false,
            },
            axisLine: { //坐标轴线
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                color: '#797991',
                fontSize: echartsObj.xAxisfontSize,
                rotate: axisLabelRotate
            }
        }],
        yAxis: [{
            type: 'value',
            scale: false,
            name: yAxisName,
            nameLocation: 'end',
            nameTextStyle: {
                color: '#797991'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                color: '#797991',
                formatter: axisLabelFor,
                fontSize: echartsObj.xAxisfontSize
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ececec'
                }
            }
        },
            {
                type: 'value',
                show: true,
                scale: true,
                name: yAxisName1,
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#797991'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ecedef'
                    }
                },
                axisLabel: {
                    color: '#797991',
                    formatter: axisLabelFor1,
                    fontSize: echartsObj.xAxisfontSize
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [{
            name: legendData[0].name,
            type: 'bar',
            data: barData1,
            barCategoryGap: '52%',
            barMaxWidth: 25,
            itemStyle: {
                normal: {
                    color: '#4579e5',
                    barBorderRadius: [0, 0, 0, 0]
                },
                emphasis: {
                    color: '#4579e5'
                }
            }
        },
            {
                name: legendData[1].name,
                type: 'line',
                yAxisIndex: 1,
                symbol: 'emptyCircle',
                symbolSize: 6,
                hoverAnimation: false,
                data: lineData,
                lineStyle: {
                    normal: {
                        color: '#f08c00',
                        width: 1.5
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f08c00'
                    }
                }
            }
        ]
    };
    var myChart,myChart1;
    $('#RankingDetail').show();
    if(tootip_data.pageId == 'SYS048MOD0304'){//人格特质
        $('#personChara1').hide();
        $('#personChara2').hide();
        var myChart = echarts.init(document.getElementById('RankingDetail'));
        myChart.clear();
        myChart.setOption(option, true);
    }else if(tootip_data.pageId == 'SYS048MOD0305'){//网络行为
        if(tootip_data.tabName == '最爱媒体排行榜'){
            $('.netWork').show();
            $('.tableWrapper ').hide();
            myChart = echarts.init(document.getElementById(ID));
            if(ID == 'RankingDetail'){
                option.title.text = '用户使用率排行榜';
            }else if(ID == 'TGIRanking'){
                option.title.text = '用户偏好度排行榜';
            }
            myChart.clear();
            myChart.setOption(option, true);
        }else if(tootip_data.tabName == '媒介偏好'){
            myChart = echarts.init(document.getElementById('RankingDetail'));
            $('.netWork').hide();
            $('.tableWrapper ').show();
            myChart.clear();
            myChart.setOption(option, true);
        }
    }else if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
        myChart = echarts.init(document.getElementById(ID));
        myChart.clear();
        myChart.setOption(option, true);
    }else{
        myChart = echarts.init(document.getElementById('RankingDetail'));
        myChart.clear();
        myChart.setOption(option, true);
    }

    $(window).resize(function() {
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        option.grid.top = echartsObj.echartTop;
        option.xAxis[0].axisLabel.fontSize = echartsObj.xAxisfontSize;
        option.yAxis[0].axisLabel.fontSize = echartsObj.xAxisfontSize;
        option.yAxis[1].axisLabel.fontSize = echartsObj.xAxisfontSize;
        if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
            myChart = echarts.init($('#personChara3')[0]);
            myChart.resize();
            myChart = echarts.init($('#internetBehavior')[0]);
            myChart.resize();
        }else{
            myChart.setOption(option,true);
            myChart.resize();
        }
        
    });
}

//柱状叠加(指数走势 关注走势-关注内容分布 )
function overlayBar(data, titleTime, disName) {
    var legendData = [];
    var seriesData = [];
    var result, xData, dataObj;
    if (data == null) {
        result = [];
        xData = [];
    } else if (tootip_data.pageId == 'SYS048MOD0306') { //消费能力
        xData = data.Data[0].X;
        result = data.Data[0].Values;
    } else {
        xData = data.X;
        result = data.Values;
    }
    var marketSegment = $(".marketName").val();

    var myChart, titleText, topDis;
    if (tootip_data.pageId == 'SYS048MOD000101') { //细分市场走势
        myChart = echarts.init(document.getElementById('divisionMarket'));
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.marketSegment + titleTime.obj.tabName;
        topDis = 0;
    } else if (tootip_data.pageId == 'SYS048MOD000102') { //区域市场走势
        myChart = echarts.init(document.getElementById('regionMarketTrend'));
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectRegionName + titleTime.obj.tabName;
        topDis = 0;
    } else if (tootip_data.pageId == 'SYS048MOD02001') { //指数走势
        myChart = echarts.init(document.getElementById('exponential'));
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.selectText + titleTime.obj.tabName;
        topDis = 0;
    } else if (tootip_data.pageId == 'SYS048MOD0200301') { //区域销量走势
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionTrend + titleTime.obj.tabName;
        myChart = echarts.init(document.getElementById('regionTrend'));
        regionData = data;
        topDis = 0;
    } else if (tootip_data.pageId == 'SYS048MOD0306') { //消费能力
        myChart = echarts.init(document.getElementById('financialStatus'));
        titleText = data.Portray;
        topDis = '5%';

    } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        if (disName == 'areaRatio') { //大区
            myChart = echarts.init(document.getElementById('areaRatio'));
            titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionTrend + '各大区销量百分比';
        } else if (disName == 'cityRatio') { //城市
            myChart = echarts.init(document.getElementById('cityRatio'));
            titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionTrend + '各城市级别销量百分比';
        }
        // topDis = '5%';
    }

    var title, top, toolboxShow;
    if (tootip_data.pageId == 'SYS048MOD0306') {
        title = {
            text: titleText,
            left: '2%',
            y: '3%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = '3%';
    } else {
        title = {
            text: titleText,
            y: topDis,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        };
        top = topDis;
    }

    //根据数据长度的不同设置不同的颜色值
    var lineColor = [];
    if (result.length == 1) {
        lineColor = ['#DFE8F7'];
    } else if (result.length == 2) {
        lineColor = ['#DFE8F7', '#82A9ED'];
    } else if (result.length == 3) {
        lineColor = ['#DFE8F7', '#82A9ED', '#317AF6'];
    } else if (result.length == 4) {
        lineColor = ['#DFE8F7', '#B1C6EE', '#317AF6', '#164AA1'];
    } else if (result.length == 5) {
        lineColor = ['#DFE8F7', '#B1C6EE', '#317AF6', '#164AA1', '#000F28'];
    } else if (result.length == 6) {
        lineColor = ['#DFE8F7', '#B1C6EE', '#82A9ED', '#317AF6', '#164AA1', '#000F28'];
    } else if (result.length == 7) {
        lineColor = ['#DFE8F7', '#B1C6EE', '#82A9ED', '#5491FB', '#1F5BC2', '#164AA1', '#000F28'];
    } else if (result.length == 8) {
        lineColor = ['#DFE8F7', '#B1C6EE', '#82A9ED', '#5491FB', '#317AF6', '#1F5BC2', '#164AA1', '#000F28'];
    } else if (result.length == 9) {
        lineColor = ['#DFE8F7', '#B1C6EE', '#82A9ED', '#5491FB', '#317AF6', '#1F5BC2', '#164AA1', '#0B337C', '#000F28'];
    }

    for (var i = 0; i < result.length; i++) {
        legendData.push({ name: result[i].Name, icon: 'rect' });
        var labelShow;
        if (tootip_data.pageId == 'SYS048MOD0200301' && tootip_data.subTabName == '销量百分比') { //区域销量走势
            dataObj = result[i].Rate;
            labelShow = false;
        } else if (tootip_data.pageId == 'SYS048MOD02004') {
            dataObj = result[i].Rate;
            labelShow = true;
        } else {
            labelShow = false;
            dataObj = result[i].Data;
        }
        var obj = {
            type: 'bar',
            stack: '总量',
            name: result[i].Name,
            barMaxWidth: 25,
            label: {
                normal: {
                    show: labelShow,
                    position: 'right',
                    color: '#30333F'
                }
            },
            data: dataObj,
            itemStyle: {
                normal: {
                    color: lineColor[i]
                }
            }
        };
        seriesData.push(obj);
    }
    var x = {
        type: 'category',
        data: xData,
        axisPointer: {
            type: 'shadow'
        },
        axisTick: {
            show: false
        },
        axisLine: { //坐标轴线
            lineStyle: {
                color: '#ecedef'
            }
        },
        axisLabel: {
            color: '#797991',
            fontSize: echartsObj.xAxisfontSize
        }

    };
    var y = {
        type: 'value',
        scale: false,
        splitNumber: 5,
        min: 0,
        max: 100,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ecedef'
            }
        },
        axisLabel: {
            /* textStyle:{
             color: '#000',
             fontSize: 12
             }*/
            color: '#797991',
            fontSize: echartsObj.xAxisfontSize
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ececec'
            }
        }
    };
    var xAxis, yAxis;
    var gridRight;
    if (tootip_data.pageId == 'SYS048MOD0306') { //消费能力对调x轴和y轴
        xAxis = y;
        yAxis = x;
        gridRight = '6%';
    } else {
        xAxis = x;
        yAxis = y;
        gridRight = '3%';
    }

    var tooltipShow;
    if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片不显示下载图标
        toolboxShow = false;
        tooltipShow = false;
    } else {
        toolboxShow = true;
        tooltipShow = true;
    }

    if (tootip_data.pageId == 'SYS048MOD02001') { //指数走势-关注内容分布  删除 视频
        legendData.splice(3, 1);
        seriesData.splice(3, 1);
    }

    var option = {
        title: title,
        backgroundColor: '#fff',
        tooltip: {
            show: tooltipShow,
            confine: true,
            position: function(p) { //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            },
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                shadowStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            textStyle: {
                fontSize: 12,
                align: 'left'
            },
            formatter: function(params) {
                var str = params[0].name + '<br />';
                for (var i = params.length - 1; i >= 0; i--) {
                    str += params[i].marker + params[i].seriesName + '：' + params[i].value + '%<br />';
                }
                return str;
            }
        },
        legend: {
            type: 'plain',
            top: '90%',
            align: 'auto',
            data: legendData,
            itemGap: 30,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            itemWidth: 30,
            itemHeight: 5,
            selectedMode: true
        },
        toolbox: {
            show: toolboxShow,
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: top
        },
        grid: {
            top: echartsObj.echartTop,
            left: '7%',
            right: '7%',
            bottom: '14%',
            containLabel: true
        },
        xAxis: xAxis,
        yAxis: yAxis,
        series: seriesData
    };

    if (tootip_data.pageId == 'SYS048MOD000102') { //区域市场走势
        var selectRegionName = $(".selectRegionName").val();
        if (selectRegionName == '城市' || selectRegionName == '省份') {
            option.yAxis.splitNumber = undefined;
            option.yAxis.min = undefined;
            option.yAxis.max = undefined;
        }
    }
    myChart.clear();
    myChart.setOption(option, true);
    myChart.resize();
    $(window).resize(function() {
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        option.grid.top = echartsObj.echartTop;
        option.xAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        option.yAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        if(tootip_data.pageId == 'SYS048MOD02004'){
            myChart = echarts.init($('#areaRatio')[0]);
            myChart.resize();
            myChart = echarts.init($('#cityRatio')[0]);
            myChart.resize();
        }else{
            myChart.setOption(option, true);
            myChart.resize();
        }
        
    })
}

//气泡图(竞争格局)
function bubbleDiagram(data, titleTime) {
    var legendData = [];
    var seriesData = [];
    var selectedMode;
    var lineColor = ['#4579E5', '#F08C00', '#C8002C', '#f9a03c', '#22cacc', '#fd4836', '#a26280', '#42a67d', '#5d8296'];

    $(data).each(function(index, elem) {
        $(elem).each(function(_index, _elem) {
            _elem[0] = +_elem[0] / 10000;
        })
    });

    for (var i = 0; i < data.length; i++) {
        legendData.push({ name: data[i][0][4], icon: 'rect' });
    }
    if (legendData.length == 1) {
        selectedMode = false;
        if (legendData[0].name == '合资品牌') {
            lineColor = ['#F08C00'];
        } else if (legendData[0].name == '进口车') {
            lineColor = ['#C8002C'];
        }
    } else {
        selectedMode = true; //单个图例的时候不能关闭
    }
    for (var i = 0; i < data.length; i++) {
        var obj = {
            name: data[i][0][4],
            data: data[i],
            type: 'scatter',
            symbolSize: function(data) {
                var symSize = Math.sqrt(data[2]) / 1e1;
                if (symSize < 5) {
                    symSize = 5
                }
                return symSize;
            },
            itemStyle: {
                normal: {
                    // shadowBlur: 2,
                    // shadowColor: lineColor1[i],
                    // shadowOffsetY: 2,
                    color: lineColor[i],
                    opacity: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        var str = '';
                        str = params.data[3];
                        return str;
                    }
                },
                emphasis: {
                    show: true,
                    formatter: function(params) {
                        var str = '';
                        return str;
                    }
                }
            }
        };
        seriesData.push(obj);
    }

    var titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.competePattern + titleTime.obj.tabName;

    var toolboxRight;
    if($(window).width()>1440){
        toolboxRight = '4%';
    }else if($(window).width()<=1440 && $(window).width()>1366){
        toolboxRight = '6%';
    }else{
        toolboxRight = '5.5%';
    }

    var myChart = echarts.init(document.getElementById('competePattern'));
    var option = {
        title: {
            text: titleText,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        legend: {
            type: 'plain',
            top: '90%',
            align: 'auto',
            data: legendData,
            itemGap: 30,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            itemWidth: 30,
            itemHeight: 5,
            selectedMode: selectedMode
            //right: 10,
        },
        dataZoom: {
            type: 'inside'
        },
        grid: {
            top: echartsObj.echartTop,
            left: '7%',
            right: '7%',
            bottom: '14%',
            containLabel: true
        },
        toolbox: {
            type: 'png',
            itemGap: 23,
            feature: {
                restore: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/reduction.png',
                },
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                },

            },
            // right: echartsObj.downloadRight,
            right:toolboxRight,
            top: 0
        },
        tooltip: {
            confine: true,
            position: function(p) { //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            },
            formatter: function(params) {
                var str = '';
                str += params.data[3] + '<br />' +
                        params.marker + '价格：' + params.data[0] + '<br />' +
                        params.marker + '轴距：' + params.data[1] + '<br />' +
                        params.marker + '销量：' + params.data[2];

                return str;
            }
        },
        xAxis: {
            name: '价格(万元)',
            nameLocation: 'end',
            nameTextStyle: {
                color: '#797991'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: { //坐标轴线
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                /* textStyle:{
                 color: '#000',
                 fontSize: 14
                 }*/
                color: '#797991',
                fontSize: echartsObj.xAxisfontSize

            }
        },
        yAxis: {
            name: '轴距(mm)',
            nameLocation: 'end',
            nameTextStyle: {
                color: '#797991'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                /*textStyle:{
                 color: '#000',
                 fontSize: 12
                 }*/
                color: '#797991',
                fontSize: echartsObj.xAxisfontSize

            }
        },
        series: seriesData
    };
    myChart.clear();
    myChart.setOption(option, true);
    $(window).resize(function() {
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        option.grid.top = echartsObj.echartTop;
        option.xAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        option.yAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        myChart.setOption(option, true);
        myChart.resize();
    })
}

//关系图（竞争关系-核心竞品）
function relationDiagram(data, titleTime) {
    $("#competeRelation1").show();
    $("#competeRelation2").hide();
    $("#competeRelation3").hide();
    $("#competeRelation4").hide();
    // $('#competeRelation1').css({'width':'100%','height':'100%'});
    $(".comment").hide();
    $('.chartBox').css('margin-top', 0);
    var myChart = echarts.init(document.getElementById('competeRelation1'));

    // var titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.competeRelation + titleTime.obj.tabName;
    var titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.competeRelation;

    sortData(data.Links);

    function sortData(a) {
        var sorts = a.slice(0);
        /// 从小到大按属性b排序
        sorts.sort(function (x, y) {
            return x.DataValue > y.DataValue ? 1 : -1;
        });
        for (var i = 0; i < sorts.length; i++) {
            var symbolSize;
            symbolSize = 25 + (3 * i);
            sorts[i].symbolSize = symbolSize
        }
    }

    var strongRele = [],
            middleRele = [],
            weakRele = []; //弱关联
    var chartBoxW, chartBoxH;
    var circleCenterX, circleCenterY;
    if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        chartBoxW = $("#competeRelation1").width();
        chartBoxH = $("#competeRelation1").height();

    } else {
        chartBoxW = $(".chartBox").width();
        chartBoxH = $(".chartBox").height();

    }
    var windowWidth = $(window).width();
    if (windowWidth > 1366 && windowWidth <= 1440) {
        circleCenterX = 50;
        circleCenterY = 22.7;
    } else if (windowWidth <= 1366) {
        circleCenterX = 50;
        circleCenterY = 16.7;
    } else {
        circleCenterX = 50;
        circleCenterY = 15.7;
    }

    var propW = chartBoxW / 100;
    var yMax = chartBoxH / propW;
    for (var i = 0; i < data.Links.length; i++) {
        if (data.Links[i].Level == 'high') {
            strongRele.push(data.Links[i]);
        } else if (data.Links[i].Level == 'mid') {
            middleRele.push(data.Links[i]);
        } else if (data.Links[i].Level == 'low') {
            weakRele.push(data.Links[i]);
        }
    }
    var strongReleData; //强关联
    var middleReleData; //中
    var weakReleData; //弱关联

    var firstSymbolSize, symbolSize;
    firstSymbolSize = data.Data.Value / 100000;
    // console.log(firstSymbolSize);
    if (firstSymbolSize <= 30) {
        symbolSize = 30;
    } else if (firstSymbolSize > 100) {
        symbolSize = 100;
    } else {
        symbolSize = firstSymbolSize;
    }
    strongReleData = relevant(strongRele, {
        start: 5, //半径的长度
        end: 9,
        firstSymbolSize: firstSymbolSize,
        firstData: data.Data.Value
    }, circleCenterX, circleCenterY);
    middleReleData = relevant(middleRele, {
        start: 11,
        end: 28,
        firstSymbolSize: firstSymbolSize,
        firstData: data.Data.Value
    }, circleCenterX, circleCenterY);
    weakReleData = relevant(weakRele, {
        start: 33,
        end: 40,
        firstSymbolSize: firstSymbolSize,
        firstData: data.Data.Value
    }, circleCenterX, circleCenterY);
    /*   console.log(strongReleData);
     console.log(middleReleData);
     console.log(weakReleData);*/

    var firstObj = {
        name: data.Data.Name,
        value: [circleCenterX, circleCenterY, data.Data.Name, data.Data.Value, data.Data.Value],
        symbolSize: 100,
        label: {
            normal: {
                show: true,
                position: 'inside',
                color: '#fff',
                formatter: function (param) {
                    // console.log(param)
                    return param.data.name;
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#4579E5',
                shadowColor: '#4579E5',
                shadowBlur: 20,
                opacity: 1
                // shadowOffsetX: 10,
                // shadowOffsetY: 5,
                // opacity: 0.6
            }

        }
    };

    var strongReleSeriesData = [],
            middleReleSeriesData = [],
            weakReleSeriesData = [];
    strongReleSeriesData = fun(strongReleData, 'strong');
    middleReleSeriesData = fun(middleReleData, 'mid');
    weakReleSeriesData = fun(weakReleData, 'weak');

    function fun(ReleData, rela) {
        var releArr = [];
        var coord = [];
        var dataObj;
        if (ReleData.length == 0) {
            return
        }
        var newObj;
        for (var i = 0; i < ReleData.length; i++) {
            if (ReleData[i].isEqual) {
                var x1 = circleCenterX + ReleData[i].r * Math.cos(36 * (i + 1) * Math.PI / 180);
                var y1 = circleCenterY + ReleData[i].r * Math.sin(36 * (i + 1) * Math.PI / 180);
                dataObj = {
                    name: ReleData[i].name,
                    value: [x1, y1, ReleData[i].name, ReleData[i].LinksValue, ReleData[i].DataValue],
                    symbolSize: ReleData[i].symbolSize,
                    label: {
                        normal: {
                            show: true,
                            formatter: function (param) {
                                return param.data.name;
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#fff',
                            color: '#f28d00',
                            opacity: 1
                        }

                    }
                };
                releArr.push(dataObj);
            } else {
                if (i < 4) {
                    ReleData[i].quadrant = i + 1; //判断第几象限
                } else if (i > 3 && i < 8) {
                    ReleData[i].quadrant = i - 3; //判断第几象限
                } else {
                    ReleData[i].quadrant = i - 7; //判断第几象限
                }

                if (ReleData[i].Y < 5 || ReleData[i].Y > 27) { //超过区域重新生成区域内随机点
                    // var perAngle = 20 / ReleData.length;
                    var perAngle = 15 / ReleData.length;
                    var cos = Math.cos(perAngle * (i + 1) * 2 * Math.PI / 360) * ReleData[i].r;
                    var sin = Math.sin(perAngle * (i + 1) * 2 * Math.PI / 360) * ReleData[i].r;
                    var coorArr = [
                        [circleCenterX + cos, circleCenterY + sin],
                        [circleCenterX + cos, circleCenterY - sin],
                        [circleCenterX - cos, circleCenterY + sin],
                        [circleCenterX - cos, circleCenterY - sin]
                    ];
                    var randomData = coorArr[Math.floor(Math.random() * coorArr.length)];
                    var x = randomData[0];
                    var y = randomData[1];
                    /*  if(rela == 'strong'){
                     newObj = XY(ReleData[i].quadrant, x, y);
                     console.log(newObj);
                     }else{
                     newObj = {x:x,y:y}
                     }*/
                    newObj = XY(ReleData[i].quadrant, x, y);
                    dataObj = {
                        name: ReleData[i].name,
                        value: [newObj.x, newObj.y, ReleData[i].name, ReleData[i].LinksValue, ReleData[i].DataValue],
                        symbolSize: ReleData[i].symbolSize,
                        label: {
                            normal: {
                                show: true,
                                formatter: function (param) {
                                    return param.data.name;
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: '#fff',
                                color: '#f28d00',
                                opacity: 1
                            }

                        }
                    };
                    coord.push({x: x, y: y})
                } else {
                    /* if(rela == 'strong'){
                     newObj = XY(ReleData[i].quadrant,ReleData[i].X,ReleData[i].Y);
                     console.log(newObj);
                     }else{
                     newObj = {x:ReleData[i].X,y:ReleData[i].Y}
                     }*/
                    newObj = XY(ReleData[i].quadrant, ReleData[i].X, ReleData[i].Y);
                    coord.push({x: newObj.x, y: newObj.y});
                    dataObj = {
                        name: ReleData[i].name,
                        value: [newObj.x, newObj.y, ReleData[i].name, ReleData[i].LinksValue, ReleData[i].DataValue],
                        symbolSize: ReleData[i].symbolSize,
                        label: {
                            normal: {
                                show: true,
                                formatter: function (param) {
                                    return param.data.name;
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: '#fff',
                                color: '#f28d00',
                                opacity: 1
                            }

                        }
                    };
                }
                releArr.push(dataObj);
            }
        }

        // console.log(releArr);
        function XY(quadrant, x, y) {
            if (quadrant == 1) {
                if (x > 50 && y >= 16) {  //1
                    x = x;
                    y = y;
                } else if (x < 50 && y > 16) {  //2
                    x = Math.abs(circleCenterX + Math.abs(x - circleCenterX));
                    y = y;
                } else if (x < 50 && y < 16) {  //3
                    x = Math.abs(circleCenterX + Math.abs(x - circleCenterX));
                    y = Math.abs(circleCenterY + Math.abs(y - circleCenterY));
                } else if (x > 50 && y < 16) {
                    x = x;
                    y = Math.abs(circleCenterY + Math.abs(y - circleCenterY));
                } else if (x == 50) {
                    x = x;
                    y = y;
                }
            } else if (quadrant == 2) {
                if (x > 50 && y > 16) {  //1
                    x = Math.abs(circleCenterX - Math.abs(x - circleCenterX));
                    y = y;
                } else if (x < 50 && y > 16) {  //2
                    x = x;
                    y = y;
                } else if (x < 50 && y < 16) {  //3
                    x = x;
                    y = Math.abs(circleCenterY + Math.abs(y - circleCenterY));
                } else if (x > 50 && y < 16) {  //4
                    x = Math.abs(circleCenterX - Math.abs(x - circleCenterX));
                    y = Math.abs(circleCenterY + Math.abs(y - circleCenterY));
                } else if (x == 50) {
                    x = Math.abs(circleCenterX - Math.abs(y - circleCenterY));
                    y = circleCenterY;
                }
            } else if (quadrant == 3) {
                if (x > 50 && y > 16) {  //1
                    x = Math.abs(circleCenterX - Math.abs(x - circleCenterX));
                    y = Math.abs(circleCenterY - Math.abs(y - circleCenterY));
                } else if (x < 50 && y > 16) {  //2
                    x = x;
                    y = Math.abs(circleCenterY - Math.abs(y - circleCenterY));
                } else if (x < 50 && y < 16) {  //3
                    x = x;
                    y = y;
                } else if (x > 50 && y < 16) {
                    x = Math.abs(circleCenterX - Math.abs(x - circleCenterX));
                    y = y;
                } else if (x == 50) {
                    x = x;
                    y = Math.abs(y - circleCenterY);
                }
            } else if (quadrant == 4) {
                if (x > 50 && y > 16) {  //1
                    x = x;
                    y = Math.abs(circleCenterY - Math.abs(y - circleCenterY));
                } else if (x < 50 && y > 16) {  //2
                    x = Math.abs(circleCenterX + Math.abs(circleCenterX - x));
                    y = Math.abs(circleCenterY - Math.abs(y - circleCenterY));
                } else if (x < 50 && y < 16) {  //3
                    x = Math.abs(circleCenterX + Math.abs(x - circleCenterX));
                    y = y;
                } else if (x > 50 && y < 16) {   //4
                    x = x;
                    y = y;
                } else if (x == 50) {
                    x = Math.abs(circleCenterX + Math.abs(y - circleCenterY));
                    y = circleCenterY;
                }
            }
            var obj = {x: x, y: y};
            return obj;
        }

        return releArr;
    }

    strongReleSeriesData.unshift(firstObj);
    /*   console.log(strongReleSeriesData);
     console.log(middleReleSeriesData);
     console.log(weakReleSeriesData);*/
    var titleY, toolboxShow;
    if (tootip_data.pageId == 'SYS048MOD02004') {
        titleY = '2%';
        toolboxShow = false;
    } else {
        titleY = 0;
        toolboxShow = true;
    }
    var option = {
        backgroundColor: {
            type: "linear",
            repeat: "no-repeat",
            image: resizeImg(myChart)
        },
        title: {
            text: titleText,
            left: 'center',
            y: titleY,
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        toolbox: {
            show: toolboxShow,
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            // right: echartsObj.downloadRight,
            right: '2%',
            top: 0
        },
        tooltip: {
            confine: true,
            formatter: function (params) {
                // console.log(params);
                if (params.componentSubType == 'pie') {
                    return
                } else {
                    var str = '';
                    str = '总对比次数：' + params.data.value[4];
                    return str;
                }

            }
        },
        grid: {
            left: '0%',
            right: '0%',
            top: '0%',
            bottom: '0%'
        },
        xAxis: [{
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            interval: 1,
            name: ' ',
            nameLocation: 'middle',
            nameGap: 30,
            axisTick: {
                length: 5
            },
            boundaryGap: ['0%', '0%']
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: yMax,
            interval: 1,
            name: ' ',
            nameLocation: 'middle',
            nameGap: 30,
            axisTick: {
                length: 5
            }
        }],
        series: [{
            name: '强相关',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'circle',
            // symbolSize: 40,
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    color: '#30333F',
                    // color:'#fff',
                    formatter: function (param) {
                        return param.data[2];
                    }
                }
            },
            data: strongReleSeriesData
        },
            {
                name: '中',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbol: 'circle',
                // symbolSize: 40,
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        color: '#30333F',
                        formatter: function (param) {
                            return param.data[2];
                        }
                    }
                },
                data: middleReleSeriesData
            },
            {
                name: '弱相关',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbol: 'circle',
                // symbolSize: 40,
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        color: '#30333F',
                        formatter: function (param) {
                            return param.data[2];
                        }
                    }
                },
                data: weakReleSeriesData
            }
        ]
    };
    myChart.clear();
    myChart.setOption(option, true);
    myChart.resize();
    $(window).resize(function () {
        echartsSize();
        option.backgroundColor.image = resizeImg(myChart);
        myChart.setOption(option, true);
        myChart.resize();
    });
}

function relevant(rele, disObj, circleCenterX, circleCenterY) {
    if (rele.length == 0) {
        return [];
    } else {
        var releArr = [];
        for (var i = 0; i < rele.length; i++) {
            var obj = {
                'name': rele[i].Target,
                'DataValue': rele[i].DataValue,
                'LinkValue': rele[i].LinkValue,
                'symbolSize': rele[i].symbolSize
            };
            releArr.push(obj);
        }
        if (releArr.length == 0) {
            return
        }
        var max = releArr[0].LinkValue; //最大值
        var min = releArr[releArr.length - 1].LinkValue; //最小值

        var d_value;
        if (max == min) {
            d_value = min; //数据差
        } else {
            d_value = max - min; //数据差
        }

        var dis = disObj.end - disObj.start; //半径差
        var r_dis = d_value / dis; //  数据/半径(每3个长度画一个点)
        var objArr = [];
        var rArr = [];

        //计算原始半径
        for (var j = 0; j < releArr.length; j++) {
            var r; //半径值
            var disItem = releArr[j].LinkValue - min;
            // r = disObj.end - (disItem / r_dis + disObj.start) + disObj;  //
            if (releArr.length == 1) {
                r = (disObj.end + disObj.start) / 2; //合并简化
            } else {
                r = disObj.end - disItem / r_dis; //合并简化
            }
            rArr.push(r);
        }
        /*
         * 判断后一个半径比前一个半径差是否小于2(两点重叠距离)
         *   小于2，则改变原数组中的当前值
         * */
        if (max == min && rele.length == 10) {  //一个区域有10个
            rArr = rArr;
        } else {
            for (var i = 0; i < rArr.length; i++) {
                var rdif = rArr[i + 1] - rArr[i];
                if (rdif < 1) {
                    rArr[i + 1] = +rArr[i] + 0.5; //直接改变原数组中的值
                }
            }
        }
        //根据上述半径数组，生成每一个点的随机坐标
        if (max == min && rele.length == 10) {  //一个区域有10个
            for (var k = 0; k < releArr.length; k++) {
                var objGrid = getPoint({
                    r: rArr[k],
                    ox: circleCenterX,
                    oy: circleCenterY,
                    count: releArr.length * 2,
                    name: releArr[k].name,
                    DataValue: releArr[k].DataValue,
                    LinksValue: releArr[k].LinkValue,
                    firstSymbolSize: disObj.firstSymbolSize,
                    firstData: disObj.firstData,
                    symbolSize: releArr[k].symbolSize
                }, true);
                objArr.push(objGrid);
            }
        } else {
            for (var k = 0; k < releArr.length; k++) {
                var objGrid = getPoint({
                    r: rArr[k],
                    ox: circleCenterX,
                    oy: circleCenterY,
                    count: releArr.length * 2,
                    name: releArr[k].name,
                    DataValue: releArr[k].DataValue,
                    LinksValue: releArr[k].LinkValue,
                    firstSymbolSize: disObj.firstSymbolSize,
                    firstData: disObj.firstData,
                    symbolSize: releArr[k].symbolSize
                }, false);
                objArr.push(objGrid);
            }
        }
        return objArr;
    }

}

function getPoint(obj, isEqual) {
    var dataPos = [];
    var dataPos1 = [];
    var radians = (Math.PI / 180) * Math.round(360 / obj.count), //弧度
            i = 0;
    for (; i < obj.count; i++) {
        var x = obj.ox + obj.r * Math.sin(radians * i),
                y = obj.oy + obj.r * Math.cos(radians * i);
        var gridData = {
            X: x,
            Y: y,
            name: obj.name,
            LinksValue: obj.LinksValue,
            DataValue: obj.DataValue,
            r: obj.r,
            symbolSize: obj.symbolSize,
            isEqual: isEqual
        };
        dataPos1.push(gridData);
    }
    var randomData = Math.floor(Math.random() * dataPos.length);
    return dataPos1[randomData];
}

function resizeImg(myChart) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = myChart.getWidth() * window.devicePixelRatio;
    canvas.height = myChart.getHeight() * window.devicePixelRatio;
    var fullImage = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        fullImage.src = canvas.toDataURL();
        setTimeout(function () {
            myChart.resize();
        }, 100)
    };
    // img.src = '../images/background.svg';
    var windowWidth = $(window).width();
    if (windowWidth > 1440) {
        img.src = '../images/pic01.png';
        // img.src = 'data:image/png;base64,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';
    } else if (windowWidth > 1366 && windowWidth <= 1440) {
        img.src = '../images/pic03.png';
        // img.src = 'data:image/png;base64,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';
    } else if (windowWidth <= 1366) {
        img.src = '../images/pic02.png';
        // img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDwAAAGQCAYAAABCjHDRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZTNkYjg3MC1kOWU1LTQxMTUtYmM2MS0zNzNiYzEwMWJkODMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEJFQzIyNkQyNUE0MTFFOEIwNjVEQTdBMDE4ODg1OTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEJFQzIyNkMyNUE0MTFFOEIwNjVEQTdBMDE4ODg1OTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzQ4ZDFjMTEtNzE0YS00NzE4LWEwMzctNWQ3OTY5MGM0NTljIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MmUzOGRiODctMGUzZS1iMDQ4LTlkMTUtN2M4YjRmMWU3MmUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EiGNugACY2RJREFUeNrsvVd3JDuuJkqkVGabNmfcmvs+//8Xzfs9c8/p6e7d21SVpMRVSGlIEI4MhsksoNfuqpIyI2hB4CPwARAxhYSEhISEhISEhISEhISEhNyTHGIIQkJCQkJCQkJCQkJCQkJC7k0C8AgJCQkJCQkJCQkJCQkJCbk7CcAjJCQkJCQkJCQkJCQkJCTk7iQAj5CQkJCQkJCQkJCQkJCQkLuTADxCQkJCQkJCQkJCQkJCQkLuTgLwCAkJCQkJCQkJCQkJCQkJuTsJwCMkJCQkJCQkJCQkJCQkJOTuJACPkJCQkJCQkJCQkJCQkJCQu5MAPEJCQkJCQkJCQkJCQkJCQu5OAvAICQkJCQkJCQkJCQkJCQm5OwnAIyQkJCQkJCQkJCQkJCQk5O4kAI+QkJCQkJCQkJCQkJCQkJC7kwA8QkJCQkJCQkJCQkJCQkJC7k4C8AgJCQkJCQkJCQkJCQkJCbk7CcAjJCQkJCQkJCQkJCQkJCTk7iQAj5CQkJCQkJCQkJCQkJCQkLuTADxCQkJCQkJCQkJCQkJCQkLuTgLwCAkJCQkJCQkJCQkJCQkJuTsJwCMkJCQkJCQkJCQkJCQkJOTuJACPkJCQkJCQkJCQkJCQkJCQu5MAPEJCQkJCQkJCQkJCQkJCQu5OAvAICQkJCQkJCQkJCQkJCQm5OwnAIyQkJCQkJCQkJCQkJCQk5O4kAI+QkJCQkJCQkJCQkJCQkJC7kwA8QkJCQkJCQkJCQkJCQkJC7k4C8AgJCQkJCQkJCQkJCQkJCbk7CcAjJCQkJCQkJCQkJCQkJCTk7iQAj5CQkJCQkJCQkJCQkJCQkLuTADxCQkJCQkJCQkJCQkJCQkLuTgLwCAkJCQkJCQkJCQkJCQkJuTsJwCMkJCQkJCQkJCQkJCQkJOTuJACPkJCQkJCQkJCQkJCQkJCQu5MAPEJCQkJCQkJCQkJCQkJCQu5OAvAICQkJCQkJCQkJCQkJCQm5OwnAIyQkJCQkJCQkJCQkJCQk5O4kAI+QkJCQkJCQkJCQkJCQkJC7kwA8QkJCQkJCQkJCQkJCQkJC7k4e99qwf//7S/rHb8fLv+H1P8z+LOT1h3D+5fR7rH799n+Xj7z+BeHy8befwusP6e/PP88FL+/LWzR9Hi/fLdoMcG0QZD3JOwPXZ0H+i/y7l4fCW18R8PKR9z6//hzy55JBqUatbP/7w977dWlSKgYj+9prXyEbGcTLY6B4HzB/S8U74dRHPH3zMi+IeSNIW1P9Fsi+Q19DHkHXEkiLEOqxKtYJ8+HzqOCpHcCsWrr2LmNx+v/zO+hcQd63y6+waOF5BrBYT+/P/eWPQ/r9G1TTX40lpnINMONZ7UO4NKUcH0jifEA9reVqhWxaJUUAzDySHzArnZ9zpq3AL7+6GfRdeJ3rpKwxIOrgMh9ofzdZv+e6d5on2maum8U6RfIMx5ap5s2zxbJ3JPpukOcP8vedtwkKzwdxWcvt8/yCrEd1TGqVyuu1bLzR0y4yHly7c1VZqSdljPPPILd/8/0v6F72Z9xEaD/LxxKMZ2F5xGKmpyqbINNjKCo6Q4dw80fHDhk9h+W6tV5I349oKLp8bui7JBOBmCfItAcZnZevoeqZ2XygOmD0bJeHpTrMmbFmbUfSB852TNwYM/0Sn5/NcWZmJTTWzuVzzJiwS5Os6ZTNszR2Sfg+NweYjHZjPV/5HKCylbWNg8oRnawxzP4h6cMfP2H6y+ejuKuxskPJIoHrBGdWbDGchYWW+w2ZwYSnf191T93TaotfdNbV9kSsDxy82PVYq2BuTTMuSuFHZQvs7C9INj+ymyxb24puLZqTzcN7P7ODrPCXkmrtYWFry9bh++uYAbnYUJmVDkTRZM/Mx5za9JAdBFjZWFBtwsKeYo/EfO0pior4ohd9QxT92YM4r1Mk8ybtxb/+dEj/898edokrvI45wt4aNQ3s//5/n9LL0WnFZ0qNdRREy1ZWn/z5mS1gSLWFJHrSOehB3pk7Zph5O2wTgbTxvdN4BiAwd4qx9J4YcIf06ASYQHZw4hXAOCkWqIx2JN4R2pZ4Zl1Cbri+KWdgDMl6AoExyCTDnrNMK3VAm1/o0Bw4kJyOshGQdwxTcRjmJ0c5XQS2ADyNNfHWMs0zzdnlyRclDZlqf//+txdIf/v1wJ3TssGTjYGBC/AOHXNygWNLApJzIxEnMbMXkAM1KOBBnnfpD8g4IEC9Fipnlmx9Frhhxo/bDvnYAfB+CEDtxFdDjDywxIEnwGCZ4v5R5oEDlxNj5CbhXfnnCkMIZAdfmrrEYL3F/GvNh9IYA2b+PSAONxbVPmDahJ49pgAp1Xtz54msqUScXgVbZi1SDnvl1j4HqKKMXVbf4xxaQGIsMy9AqtOhtC+kdcqBS9USsTwuBpzweI4iuMA5t6A4nppVbFx/JMFfQKejnoMfqHi4aIFezBkg+sVOrxy5OYTyAgwdHUQBjHCBI8A4N9LcCc5oBZhpphIDlLBgHJCxyc0XVDGx4vtIAQZtPjgflYJmWNt6qD0vMfOaXz4wSva//nxMHx+wcokh1QNR+AJQO4eZNZ1djSHjD9A9hsX60k4CClwgNcWFQ/LaGiBOvwIG5n4Vc+mGFooGUAKt2YewWCR8IyhEcx0mvFxKV5uN2ZwonkKJR8Fz+5kswDc/K6UC0JBAqsp4o4De2Y6nUIzoJjKXp0iBjiuqXF2eGjd/iCm7hDaAeWE4H17djP/1/3xQ7d4tAQ9MISEhISEhISEhISEhISEhIXckweEREhISEhISEhISEhISEhJydxKAR0hISEhISEhISEhISEhIyN1JAB4hISEhISEhISEhISEhISF3JwF4hISEhISEhISEhISEhISE3J0E4BESEhISEhISEhISEhISEnJ3EoBHSEhISEhISEhISEhISEjI3UkAHiEhISEhISEhISEhISEhIXcnjzEEISH3JxhDsJkAmQeIIQkJCQkJcZ7bEGf4bs7wkJCQ+5BdAR6h4ENGHVT4nR5eeGsbCYROwI3PQei1XemCMGBDQsImi3FfqfGW8t05soOntsF3stYg9nzIiib+Zm3BVwlHLeS72n3o3JmYff5WTr7YQyH3sD8DoQhpVN8hO/agQHF46bkFhhcGzNmMyuIA5jznFhMon7HeERLe2q3tUWm/oaJwodHOHLFfrGdwv4fGNobtvOge2ss22g/gEYstJGToOXZPfu/3GrETEp78zbS7x3Cca6yOHGdN6fQqL8vJDgm5cXtjNBbUsv00jAsbt7/WlpCQkBl7eicbaReAx9SAADxu0xbXLnIs2xGMQ1M6SK3PpuSLqrw748N7wluTZjki3J/JMdHf02SEsP4wOj6TUpt/GEEhISH7cHxHfn8E9hRyQ4vHsi2070mHR1JsE3A8c0fO2tJTkJThloY6pfYgqdQwvUkxTz0ma8h+7MA97KNdAB5HTO0hS5q1i87PhKUccgPOoofmIkBDfvykQxGWeJFmaIWO+e7WHWeHxzII2YtzExKLQFRQuG3T9uS8wsYh+dqlXkjIrdhEAXic5HjUEcZW4PfmjcueeDzLyp7zPWnQpVw/TwRAWP5jD8U4/b4LJ7pXz5mfg/DQ9zSvId+P36kdwSHf8aLYwPOPNSfoafDdYwQgEXIzOiYlOyS/Jbze8FcPhwA83hy1Y2iGTQxtK3Uk2WtY3BPW3tr1YCRj0ydFMWxwuz/tIdTyglLykWD0IIloLAIvWjlgkbTaiHAr6zNkPgYDzvUaEhKyD+O7Q6lrqaxakG9KERK/5+XhKfpiYfZomD6cGZf//eZTW+bYotbmSbe5ibxpNclptlpBvp4/020PqSgH2H4PbQ545NEdISFbYx236PzeLWBoAU2wjyamFKDJnkCRbvtOihmOSQ0JWca7WCCKIezJ+1s2e3D8DnBHA6l54t/RmkopgM7V7DPYfg9tDng8H5M/NAaMjdviKDHPuFWHN+Q+nTZM+o3DJBPYgTtr93c5YRs4ykFBtI/pNwHTmKCQNQGFQXH1Hj7qkPWmdVcAgJdN/s6U/eHG10w4+SFbysPGG2hTwGN688tx7lbu/UyL1dD7/IZ2dOREiT8H3h/jbO9zKgTQNjNND+dqfxLpYD4w4ObWrrbXB6odz9iFDlhmSiF1zm/IbXqtKS12u6phHOHcbONkahYlrtGQ7/T2vudY9FQEmf59AJ/3Ianz2IchW6zzt59lv0Dyyyn6AvGacoLkYRf1QaoXYWOozAR4bJnWsingMYEd2FRLc8kMpxZmz55nW9+3SBCSYc5oWYvkuUCQDpS3DryuzvMUvS/w6/PzTZJzSBTYDeTAyuvzUDsxIp68FexAbmrPyu30s8tfozKRuSu9Ox3uZQAGgSPJoblC2tdm8xH1PapOT4lsr8dpAY0eYjfHc63KmaB0IUCMbZyHVcbes/bw9sfUa+nvrbt7qTYRstwRom67s79DwIKLj9O4aClocHn2nRIMTf3bMspjU8Dj+QUbCTDff7tOMQGLjraFGrEFBvOyYSbH56y7BetdaHwGjfdq5kMn9tQ4fZUyEg4sbw/2pKCPxxUVhcMo1zhTxTG1bjxvaVJS/9JurUJ1M0DKQhjm947bOTI0XcONPeDKKD1tHaczvKGWE9OzvnChIQgZ46QsPg+ejSaZVTcOQNzlohEUweXXxG7MHdOHQ+w9/4lin9LVJ85B5uebu7dL0tOf2SVsARbkN31o+DcVquA5MT1aRvKfLP/RspitQzApCgcccE6vb9tn8T4+bGe1bQZ4TLfTLy84fwxbHaM7vf3yxL/c781rL/ikATg9LpfFynaObkEyKXDSw2flzizY088nuA9e//dy9MUjxWVE/woC70b6Dgca9tqYBfR7BEX5xweN7eI9n0LuB4xYxadK6ebSN76LKjHW/Znidu1W38ENEZgKl0go+UWrASGjP2uVKfQuTmtXguOz1oIHp+IC/wYaeJK/vyX/O7dMpk/g6WdAfqPv58fXzbNVlNRmgMfksB3PBAQW8KUFSVjr6c5uiFsdN4vn9T6N+d5js5eFq5Ueilmgb3gGkjw6OP02V0In7hv0+YC9NBDhxPFqpdgz3wHL8W67aCJUywA7S5ltISHfFWjhbcAN+fJ3uwicJtX3BFRuVWKzGxz2BBssvph7WNU8yX/oPKlRsdnBuaq9V8stVwCe7/rbc/32OyiBwjvqN/UsgPYT4vC6cbaKktoM8Hh6wfqiO/nqGnvyXD2MFjflr7REtYwCejaw2HvxU7253rQkD9rW4yJ6I0aSa0W+gR244nqzhi2lxjyWthkKuQ4GtCi8GwJU4FYa6eHQ6P9ISMiqQIaVfTbLXtAi4iwDboxtPavp1t3vLpAW66OYBZEiA9KjzzXE72xveFxvv9MmPxXzGy46cfnIs6ySHoOrxVHwAg1W3PjcmD2Dg9AVpW3t4mu7rq2lUQ1wiqhO1eewinXA4jtps/3T+bYeVoPkwGOEafqwUVrLJoDH9Manl/tTobvyPSy9kJKjZMDtjHlyj/to02UusqtpnXpypp/mlY1aQKBF16OFUG2IYNwtgELsoRvEO24D6NAa3LmwvrPAw5AVHDXLBcC1Xrqjcbh3xApTikosjXDDKDDn4RLlwRs8lzv0Ik2ZyylpTafw2qFL2bz7A6BuifjW1Ukt/N7CdqxFbmNA7XhK4yBPPB5bREhtAnhMDttL1NNczZm4CYO6JUS96lDLbmtJU6HYb4nfQvOzwQFD6GFvL0fYXHlbZUtTmpcK0LVWFkY27ql2kNiXVk6tHeq43ZfTtSL10p0R2IaI63DzW3Tran9FgEKLOMG9TmSSx++S8phSGUXBdGj1SjAbrfPuNAztwVsO1FRxAlpuDb0RGRbYYRnLcyKSUZyGm8XUWkP+b7CTmwDeM+ThsE1ayyaAx9MzBhC9sBPjwQ12DXx4PEyXN9BD/59T8lgqRQYy8lC3nINDN/dkLe3h7tiDH9d7xMLIBrTC/tC3RG8NAHH4245f3o4K2WUXjIa10FKF3KbdnZIvw2N15KVXqc8EOm56Eu8EqJiT+Zzm4hA34Ghy43M4pAvP2hgwIw30znsrTF5/jzOglF1NmqbvBkUtLLH3rAgXbxpei9pfxQTaKK1ldcBjetnTU8MrvXwBnjKIYS02+4ySftAOPO/vVnW7zTy03iotKbWz6Op5RXk0Sf6v52OZ2nl5a16Cl4S5QkrfDaHmKtu7h/W35KZVL1ZvQVVVfbjhUlCtoNXi3YJl2h3SbwsvZux7g/t2Pna7bFyDw4J3tJ5Xe8FO1ujWDtz0bv2m2uuotKdDI0s82QpueIzlhsG/QRbfloKwIePkwyOsbrusHlRyPF4XFKby78V/xkgg2ViXf2cllpGu4rxu8/nrKOyA73Clo3MY6Fy1Dh06ft4+/LmHr7gBQNcELRWL5UJC4ctoRWd4en3mRgZyVpQESNOnpgwwRGHNZ2v73BJA5q3CoCIaE4j7X6+YeL3SbRhqsDoKJyIKmwPkdqLTNMEdjvul/Zj1A7N/4/U/VWnsaA3hXrYA6grRs+ykPklnr6Xze5trqRdtfVnvQMf6tMbCe9YtDm5xFjfsE9UCciLuNopKGbt7M/OGLpfWDb/xOtzy/EDUNLLlVnM2JDg0JzKRjOBEqawdbUwu1xUwJmeXSqJsGncmxGXCgnvnuMFcrx3hMZGVHo+DVqlVmpMBOCDzV1UsNQNO6HfyzXy+cYfYHcOm0pOXv8lwe8igF5I37g5cdty5veO6Sb4x0gGr2vkwC6zxoZ7CZTdV1YT87JbSfiQ7D7ZaoCnNIkh1kqc3RUzNiTDpeTY2tsuz33fh8HpY8T0dW7G5Kd0wGaCwnm4d/Fi0PxuH/HundgtKmvcoD230PcyQWtSHNeBwqS1yTq9B8VRrYaUU3ufN58XkzyjfkZr4LspN70Cm0s6PK6e1rA54fH26gSXkKIVcpBOQzQ0tJcOg03cOgEU9Llb1lLUzZYD3hAhFZZYtnUAWICRrWE1Wh32vl66mamiEl8W1Y2xgxyrhbSiYRQOaIb2ztZGSv8Dd4shLw0s9Wd3gmIJR1c23cH4s7EBy3nfn+N4QOQTeyqJQ1veNDPUYR81DUN2a3bvSst4dCSPkdv8VfuBSk3N2jHNiChTfqmcZxV2mOSs4Y3LgGiYs2TL55yzQdsNJtC5OPU35LtJbPAe8p3xtw0H88fGOAY8pLH8iLA2RvRU4V7EKQKPZx9zdkFmeh1OWiO4Y3UdIylkLt7u2hs79DKLUXud8d+Po5VhL+1o3PZjWFovRe9m2Z7BsLafQMog3r6LiMR43voq8OdAAfU4R3sCaxh4wY8W18j1Z+lcuj3JHYDZb1/+XPMeeE6aDsMbKqmleL/vdMeFtzgA7dKrBIQfl4yO8RXqsJY9rjukxStHqeioHO0JUlcodDbDnOW5RIPkjMO0X7EhlxidAGfVxq17UkGwldKyHmd6m9BjY++BqhyPse02gc5qHlcbtADu4r1g6sne9eyj4WoAIj+kPDWCG5szSvG2NtA57B2SJcO55ZFdd6ktjqOrhfBmqQxwoADY8Fneoe5r6g6mmYli54sS+3eBl+lzrkDx24xrZwQMfKGgkVDQVKhpLUEKVksty96WayTfsXt0mTLORIU83Lwi/l7KtOgZ2orc4PKzXzVVJSwPvUKwHqG9CUeM++s7G0nIsdj0sKFiQjhIAR4TbWMc52HGD5SNA0fuLHSo4BhTaG+CnOaTFUr8FhlbFz/SQag5ZS9ivZvKfa/8l40+LvBOE9YgOP5UDrcFx5IGjr9ozUPlu9zIE5U8r733H+nJXfMMgjCf6vnbLTrTrS9xNEK47PTewpMf7N8d8sK9gxzl15UpEr50gknFoV/drRldzoraz4YbAf1Ut94e72Sv5aFl2UbijhpJEh56BVIKr2KAcpo+vfJu7GuCx95vqLSznYkNm0R0XnQPEQGvJsbrDPQgGZsQpN9yzEjGuQne9Z84lcLNyuEVqS75mb2ytwlJN1UjbPbe2KB/yezIsLb56CRyghY+aAF/cfmtDWjBVxPLkBzuo6AQx5jg/yPit0vhikjFiyTHUQBRY2gnGJEf4cSVOQBn0DfbtzTiq4FvocDvYUj9woAUDbNjpWwOaRmz5VDFxgOPUaPE2LaBEu2XLPpM7H5j9rLqtaCF0WWZcNSBeOhMC2JhhsJ3tMKJfkBgCrB0HVz+2mCcs5+W4so+zGofHRLr4/BJLb6nz/kwSCKkEbVmDe2/J/jsax5T2k9/+8jqhR2yY/xudTjEs3apWsINOL8Ll0FBGBvY1HLN1mLkpd9jZVdXpoAnXSIjTjeoRi09NKwy5WgMtRH5n5QHwliZe0p8d07BFF6xaHm6w0SL5GBDx0dPOu0khwKv/X2SEpPfKE2XFlivgAQWjR/4JaeYtdpxBBC2YEY/mzywqM+CmW/ueqintXpcay/HtV3hdOnSSLl8HH5gxVWp5WCn0YrUIj2OEdyx+1gNmYAdcF10FIgf8adpMWxv/xY03YzjcWES0CRawhqgV9bmTdZMD4kMOZO7CRrBnVkjnX/WMVTu30+TwQZlJfZsHhMXIfAwMkxpGruGN9InFpyapkVVuocExj1rYFoxft9aW2+3ZgvavMMm3wZ40raX1BdderWuYhMZjYm9m54IdmPQ0PmwEj3BHa+cy1nnVHrz+Sf8rfp51BknHznYbXkrDQjXsqBIeGImTklGI2L7JkXivtC0DwY6WgExtX3537oo1f9y6pmuaRGkgs9wu61wAKTD7zBkby98FTMSH1+VfExtYLcKjtxztrZTG24Oxp12G5uFJQD9kJd1Dx0TdyZhu1TUtuqOl6uktT0sFHgMpfbsDS1y6eYC0IA+IdAEEDW3NymfjBmtdHa8stRjJAEO6nQVtVa2G0Ypqg/XuLednRVhot8LJ2FuLE2R6yrykdLPXkLtvsjHZt1hCtqvdWhmh7fCl/TuL2mUBuZUeIVOUx+GA6y4oqyLtxqS1WhXTuHO1pzjnx0NP5Gtaf967bQpYrzztKoDH9IZvz6gWYtIOBYutPaTBUKV5WQwokpKhmSwq/HSbk7MngOD5CLPr00PjtNzSnlILfOxkHXowxUXRg4Z8p71u3cu40epVVtz0jeVoDCuFPHhPaQCDVWXFA3pgA4hi2Q3osP8WQwnA4Xjs1Pi0guX3YPXTm8s9DmX3FPeWRurwFi0dv2vfSFEumAPiI+Zkpjw+4LJj4AV2Bna+Ze18t6knub5KV4qU8z+KCHyDTzZ/JnoMzBse8AnwgBVstFUAj+eMv8O6CbUIKG/cp969oY3EyXhfJMzYE4Lnmw8nmONgD5apMssLOk7tAWNuVU60omN3Mzf0piYjAN7T0vSAvIu8TFCsi1alWRMEuGEyk0WB/Iax8PhQWtSKJ/gIndOXkp2pvnT11yYvICXfJcEOEIVdgRoWerbDdg/1L1aO2rh1JxRJtB/uNExAjPLw2HI3UKXspqMzPBGycwrjJIZHMQM4goeklrV4PFYBPKboDhqe3+pUedDFvZBN3oNTb80P9DJTaZN0g+E8S9ziPx3BtvA0JbzgmO2aJJU48mfjKAc+9rZWVvGiDQUKO91T97Mw23XtouWQ41BczgtOxoGwGTKz4zDyBt7FPYE1XVPpJa7FZdu6+R5h9gsS+zL3TIp/Z+T8+3bisM9Jwfnqp8XPt8zK705/M8BTfolmqS7vGAbwUe7vNdJaVgE8vjxtM61axE8UKhlrPzeP46pX3es5K3O7MgGDL0fwjZnToV0C7Nj1pKR9cj3AVpv0hiI6luz7nnXpyLXvymtbcWw2q4qyJ+BjJznWuw07Vy5PrHsQ3Nm0I9fAFTzJ3WRPkQZo2N8t3nxrQRr5Zx4PyKfZrti+G6R02E5XM/oIGbsSYywXkU8fljdIFg8iOR6FQ02j7eXotFPHc1LGsMx8zFPPWWpCamjSvYMf0lQV4wpZqW/ypeJnNzZ4tDoHkr+jsr64NXlEaDMKtdsxb4Fy5+K1vrbpHqD7/mwsE8ZqZH62NpkXOsZzqAOcyr0m7dGtCze1tAW5CjaQdpnzKFVCWdyL5ap8QP/YANMXqa9eTNZqEjif3eVQe3SfZ7Mi42l4ywwstFYle2fhwi/DHA8kY6NVW1n7iEEP2MENLo5TAGgsp02wXgfJOh0nGvp/KzavBHJg4fvA6gYRh7F9V4Bzz0Bx+hrkcycCJv2ueEvFpuMKi3PxCI+Ju+P5ZSEDXvodGIdq65U8CaWjYEqC9hDle6ii0TWVcK0QgcLtMxvuCPeZslQuSbjslWEpWp7yIVY4tlOre27fYA8Dfl5/iVRkkzbmguSXi2VidD5wl3MmtRPqijN7UgyrVe7RXrzAIdOTtZiSPxXaE+E9+ybbc+aDE1TacbnkTZrVwB67YeGR2V0aBQis3o4lx4cJL7C47vfk+/ZmaktSRHnstG+79aK9kXKET5AS2HoqgQUQNA748NpA9N+Ph3cuj5sGPKZytMPe4F2ZvSeClWZBNiLMeEUL3nK/6EcSQ68vTMZJdlAv/24hdtmxTKksGtdN7/YYss6sMgiDHc49UriAxTWz8FZZdA9C1zbd7LbD06az8QO484W1HDax8mK6I+utBbXZgZG5S6O9Mb0HN2zebIfwnshGlQpEN+lAOx3f2WubUeaHVyfuAXCffVgLZbEWsgNA9nI8hvRNTwtR+VJu+5Ru8nHhtJZFU1po+PhqWr81TB2U76Os4JBrl5G/YOUrcik4OGhYdnsCpWTmSZxTD/JQyOIWAeXH3MoYHXHe3KJjO0gRfOa20fKWrHXfScKFjteuulzzNagNKHbqIed4zE6FgTarwRO9v7YframOfJwK4PQGiJCtzLTb9KBuTKRLDm7BwzbrCJVXw84X8zm1FXHWETG8eTjioIF1luUqAwP8HO5NdaLzv9mqTzOcBP06pfTj4D2/e/VtIfdepUW4M4BRuTdUeX5T90ra3p6f4ULtqPyftDwR8aKAxxFvbGWg4/cSaYXlQVLeCsaRR1LDGVP5OUuR39tmbUq7NmLx935QHI/rqmvNph9+Oq+s0NccO5E/YviADjjovQQM+5niWRN0DrEu2rnjxFsN5Bui80E4vzYmcIH9TokNkuE2G0ELQMG9LWjqvOws7Qe8OnBRb1oHbtfamkVXsLSvEHz22RZbFHb8IpWXrXPPb4Sz9isoSVml9v2DynEWotv4KfnpMTfxg24b8EBX8MPeHJrhXhYXHqjFFDm8GY5Ax8vteldASX7jntfAJpbCJTUmOQ0WvK+NbhlXLd1H75rXvPSZNvQWBz7HR4g4Hzjo8R+6VJLHk3Yq6F1Xe0FioN8oTT2MNu7RsKA3NsZ2tZYkT1M7swePp5dPlapY2GqsnJFtEqHilnus2FewzaGzB+eNgj9ALua+i6pXXuADhX1PFvdc2w6ZZXhT9jsqyorzhRp0YhCHtu8LEGxaDSRZzw9a9q3LAh5H/vyDZCPXVvrXTTrt3InGMXc7rnE1h9WqOHNXY5q3n3QgTz0AbxTPgJroPWDH1uOOSU9XwNR5mbkQoIQbjVG+Hy9l9RiDcK30GzT8s6UsSKvgwKrzA7WzAsg4Vd7wiY03o1RcZZHcczAOYed1kOkLot+YQubz3HtnAT9e5LClktXgTQ9OXb1Jup+GUiloxh5JSlXADRKfznTLDntLW7RKMzvypXcBooGsM+aAHpxbcDMOPiYxFAMln8hQ1WD4Md8L+IEO/8+TAs0W4rDORE9pTmxsFJKqrkts0aVIS6eHfvmGm+ocD7He5srDY8V6aPEbOnKubEBTPqy63YtVlNgJDgWeqiULyPMLlGXa8tr0mQMNw0q3rDyuLc0dcKqDA8da22ndwrqdVayjMYQDbsDogJ5DY0N7efC2aPOorZdsqXe8m7plPiU2xh1dp+4+h99J7LpH4ktzujdoLK64oKi9kTIbEZKSW7/wgrQKdnS/Hg1jAfvnio3Me/3hA6nYcqOBh03HQmXPpjI1ipu8eyQitSqV4ZyBljaERga74wH+9BEWMy0WAzxejil9e76PJesp3rJqiHcLSGI1bGHD9RYcoa7+ZOMLaHiamt56/dzTCwxtX0pldYqcvNF1Oq+4d4YhKR0PX6Rt1juzUn2w0YYY6tM7Bm9rgjHXMlm4lOvSAMlsfPYGCF27DcFkGIFgeOHDSnmMc4B3V8pV8T5RORJx4yZL5lT1MxznHCeHSbaIE8w4RudynrizJdQM/gyeH810tnxJSU18eLhPlom8LDw7JkjSSyWH+87qw3pM1Nl7HQ0wY6l6ywvKh0dIDwvlniwGeDw9Y3o+3tfG1uzgVW3EnlqlO3CsbrEcr3WYgRQS40TAplK0L8dxbS3WJJRlfJutjAUcs1nOroWedQAeay2iy6Gf3ZrtVZfNngfDl94E5znPgeTfw23oJK+/PkyJ3KPV6bVAHc781l3bXTt24MR0lZvVDLuZKM2m6Ze4j+23SioTjnsEJD9Q541WeoCpTO2NePRWBIww3micu9+jNFbnbkdPLCdrhB+5ojw8TODgMobI41KNPt7ZCrdADlh7B1mWsLXbVrDuUTgcbsm2lirCFA5sPv5aXhDT4aVy1i4pMKnBkFth38CoyYAxm3AtB7cqZUvCPNl+LTg/jcvUd4IzvxPLb2+gAziOyQsoiA1rYaVGe+YHRjetc0NYN54eW2tEdmfTXKEwgJwex8ZJ2tAm2cw2Op2JkIQSrwuPjUQv0eRMSAsX25bRIudKI5JT/XqFtemlwXGf8S1RWQ6FZHED9kTbePs3+USHdAOS7ePiZ06/uhir7wTs0AA9FuygUTFWpEbr5sLOzbqQqkoNbuebT/Sw0Fm1RITHVvwdWwEhHs4Lj7MxvDGWdal5Hy0eCdNJa+/CDc1vSnoqXBPIVByAkJ5fFl6YGcK+xS12r/OjdKfvA40cN5voECAEmxsAVTBikpNhqO5IB1hZDPk/kHHwto6c86TqzkIOvLnBHv4Lb3qJZDFpCtmbnrJDI3lWKP8ajWQWFs3N38MYcs6WuLYkw2TA8KzZ6QtxNspbZIu1jEs8RHnwrUTwTzweB1hhIrK/F5dfM9b2vfKMLLZXrPCmXtR/RZXvcWfQ4Q+3duvzQjweiwAeb/wdT2gPBOU/gGtOYWVsolI27MZAEQsoScY57fGxN+2k57QxFADAaj7e6k7KuU/PR3hD/TdPkTIWJEeiSucMld8tMXkmIaqmYa0cUvD79WtPSeI4QBZcLN2Pn4nowsYqrAAKhwzINudMc5M9Docnh8ZK8+uJFW9NiN4J94ZlUKa0Qx4O4WdIz4SdeUFmkwZwO6ztBKq8CLjtEmmJ6nKD+MLAXmwMtPfNXp3zqV2Pa3B5MPv2wh9G00zujDujEQ+aB855dCc2OH0bnTsWULE2iPpxIR6PRQCPib/j6UWxpYjR7rVloHWheJEGa4VIyvgGSO024ir1O5iDHq3Zu3udmG+ErFSz7/fUH1AOj7Udw6GRUcqG2UOFIuqQnw3ftUiHl6rwsjXQwTVibXBrqWU8tP1a9EVLFZSW87SFIdzDV7RDI38zihDBom0Jz94CKJrlmTd4xegwYRaZfJKCsYVHb/GwN6WnOOzwVSNlnLomj4zIIzCpxwRk75x/hkKfJ/JSgM7JoNEbSPwp4XIqvyDBLTZvB1aQfDjYorpQjUrc2bj1RK7sFet6XIjHY5GUsherHBnaa0cFw7BDUWif0YoV7+4apn2DANNNT3ry0IbQ8Rw4rrhXx0lp8ERWaike3PG6SqmsMgIbFIuHUQ9whBVuxtcjNBnSuCovIPysmW9nBkK3Kz4CvIJJkNZUlGP25WJ6hJ6TlDQBDY9JW1jQYAgkBejguBfQufBg2z29SVQfM1/a0YyOIR3pbKvvk+w2dDYW/V9Zus80Xch8H47bztx/1pyIP+Qegnb7V017lvhZoOwDV6knjzS/fByvc5ayn0l9PiI0rwnaNhTekf+MtuvyHdxe36FydqFjmw9xEiykABS/cMXzXNKJILivLTp6rybNUtyGj2s3Fo3D1Dp0PaSz0uXRGdlUwV3tas+6ldphWMEmOaae2Goc2z/PY3cxPadGHsmiRrD3RcuN09IRPej4BVePXfr3aLDLtTXRWEyJmaMGY2G0I4OMcQMDuEsse9QdoIXGn8okYZZvbIJsa4AGpO2XEGBufXu4jzZWPgsE17mdme5oTKsD1OrztEEjlx54JnlLWKZlmtB3XgsNWzOsmSPlRW+7ZzZy07EHJl1oIzNtvFHQhr/hmuNuOBugmK697Zxsv4eWAclexpom2DmfG3q7To7ZNmVhHXTe82UhkMOT/dlylK4yfa2MzJ6qZ5pzevaPllp3o1NaJv6Or0+3nxDW4rOD58st4cA7Ak66CPG2PrCgbz7XkunAe34Bn7b3gGwdE7LpXJ5eDt4w+MF7wuvAV78fnNey2NqD7PlZGdzLu1YAamHAAvQQQK9toBXTb5Fy7qHhvfMz56DcKRnblrJbShG0HSvcqLSkmZUyKEVptZQiAvDmgCniNuPYzLcxcw5WJ1IlqR+XS898zD3re/CGnUL2DwaTaLVG0u2UeLUKOahfAucG1Yz6FReb5obsnJ+0T5FQ0mTOzhHAc46cX+KS+fRhPI/HcMBD4u+4VaDDW7oRNeDDWtk7J53oLS+0mrU+w3Pfoi8TWekEDMLSYzMT0Vh7WaoVcBYup9wMAHW2ZTGgSUEHYIU5g1F7eelxmtNML5C9Q1Bj1ljOsdY8N6m9bbhx4COtCYAolvdmbZKWw8JlFIb1zWgnrjhuw/rT5/fs1zdbOWrGK1OllscDquO6BUi0yH7WQAvJT9q5vvcELtylCABTDs6dI6EpYE4/a+mPD4/jeTyGc3gc8fbnE5Q9J+WX0lA3TEnPYybPQ7idda7lvHpTOLscIRAGv+VFjLEnzekSaXvTs47HwSA0KB2CeY+U2rlEaJ3EOYMk5Het9a3OPxqWCTYvxXGKC7O0X25zDmyAy8+nMeqGNQeGvtnCuECSW4/nn6XrrcUeLB2vimziJGiIpFOBDS03T/u71lloPENWsP8sVSCdMbD0wsjTJxgna8lzr2kqpdvcQSRKw7aqQX4EKyzBgcNSP0x48B64rNjNhjVwBlxEzQ7kiDJdIKR1uHKW9qGAzgMKawsVpQn7WmLcPuB05i1XlHRPLFz9VhBsAyQEzIj1uVN9/7xHFshrGR7h8ftXbCIipZ2/y4XiODM1QmCwBlFCR+G2+q+NxzALp6F0qlb1oCcb6Qx2PB9hsbGchXU0lUrqa8fIeb0YMykL9YQ6jHVpx5JdFOhc3HlYreNghQGNzvmMaBTI0PlJnRVerDhQw3FZKzrEneHUUtB+Q53dPW7W2eMpQ+uprNKzXhbxdH1N3dUlJeGJgpUjEbQl3/WlhsFdJdIC140iwDlfcu4Za66WWN/5OBZVRjYpY+Tf3z1j8XhI6XDYb47KsMgvKzrX8mdW6ONdpZs4HS7Nh9noCK3s+x8+jjWIhgIeE2r5xzd0O0Et1WG/NyAkGfYjdfpudcB2hdfMTP3wzN1UinZtQjLL/zY3qJZSYhLaLO94an0YmOEzvz/SmBqLHUaubeZdsOJ2cgObM5XA1uqv6J83L3IjVac1rbmZ4Jhkz0PRWLtoKDbLE1nRoN6bEY24nXOR0szoxg7PZC1ejsu7cPm1NKudjV76Vqkra4JIszMptLKmwgBOfZtK1G7lE3f1VSsvvgMffydNk8+6jnQ9q4ryjWQBdcnnj/CW/jVKhlZpOR5RRYvzVYlEGaBm5CSZ2CS/5d2TwTvaf5OGpqi5naN2CrllVafbMiClQR1gtKNy4PRECTSH2A/QiN61dy4TtpaelfxH8HzBCkWfAYkvCmzR6h8LOxxN7afx447Y4CFjBMpmG7udzW3lAt0aY6YtDugtwY4iv3VnxCSeaq8w56Ge0iTgWDAWkIHGPuOeNzidS/NtBr7ShyQw4AYAE9a/clSCOGVznChsc4LmbJI8/LqyoRZEBdRh8RhDaOxPh/O/xBK55PLTKEOs1+8azv+s9eJJwebswZWPgtn740YiyXfj/INgR4NhxBhLizOTViNfXlEmTOEwkMdjKODxcuxckZrHaJRF0TYuGnt074EQLcoJablEYmizeYK5IW5ZwuhU8gs4SZaRKTYJkq/8ICS5tB30LWdunl420EJgOc/eG1DNmidj1RK9tUT6xOW5C0UzLJKqkZyROHM9M6ZCzlp60FwX2Ie+qEDeyv1iVcfeGFiTn290+MtaSVganTXz9zi/G9JxshnPjGDxFrgPCm1bKcVH9P0ky73DRoIlxh8It9QJucptrDUm2qxu4ck9aIyEWbT8MJLm4XiutGSsjfySFS37xlICnQM3pTiPqkThxQu7q65yJGuWE7aAD+RZs7ty+Bn7CwWHpgWAxnlL7zYAj8EdGprSMqWzHHtBjyYNX+9qAD2cEEA2SpHk0V8UMuEI2JPB2moHSWPCaUquZBrsKNe8yYla2bvRlu23Z97LXJJrohUUweSLSp+PAOgO/2hOl+ImiZKgwvh1UxEyWcSPFs8BLOiQkgdCSnYKhhbC24Cfpd55hvb1BGsrJWa8VtdXg/RCyFinY7QdXTmS2Rpcq5Rla9Eet1cz7+P9g8n1D5edQ/R2uJEIZclIRxFcwH3tx2a+mBXy0ZZMa1kllWvBkj27c96t3JJkGBxYgx55iXuk6dh4fwCGdj5y7uhoHo9hgMf0lN++osv5tqJaF8ic2BZlINUTqoWe6hSUrZ3gOd0u9B4QB2pj4AQUXb1Yk07KrAA8FkR7zooyB/lSqsG8tdcY9E5U49ob0VDI2aQJeRoMXodNyI9/GSyiQ2EBj3jIulDGyVpKm5RehpI4Uo0AgpXa5LDtZ6vvnSYao2PvOGzY9UOKaWpwfku44lizr/PU2bTIZBr90t5Jp+k+Sw5fU9s7+VZwdEN71gCO25ea7sHOveJdbzkPkzdLrwVo+fiAs+0wrVq6/ssdgU17AzQ4nyzVvFy74gxZSEepQLXnMGxJXSXy4ycY5qcMAzymdBaJsNR0ig2j4eZumrRbWw/xmpPAcG9AEOunAdPNHSNYM3g5VZkqs7wcN+gP7HNtQOuXRjrNjaDHxShOy0SC9PZ50f4bLxm5j7vSghwP2EvaIquzvaTAK+lLjwEv/Ymveu34ZhDitXQvXo1E6gCxTkwGJAJcx+j89wO8Gz0Ay8/nzKIgm1qpCKQK00bA0eiBW3oORo+X2yGfyTy4FCcVWgDBkuvGi3x4BtnphW5JLjyltDwe0FT1w6bBuTg9enCXTr51XqLen5vR956hMC41Xft848GYiEtHpX0N4/B4OfrBDo8jdHOLzUrs5TrM5K5qHG1p52NThGYBSRfKDf2dI1ioTFPv2B9xm+WIDDM4m8K1sOPsvrDWvFTlIMPGR3m80yIsfPDYiLdVWO4b8Dwg+bL/ZoNVdBIHIQpuDKPF4sr0EApcLmuBIejt10ZgR0pyqv95nCb9NaWrHhFPfxIwo3O9oUUuyrRq0mGH039weAdDzv8euTdv4oaSKO6L7oD1Xi8uXRgzgLhQeyuDf+BEN4EdxYHdqZsHj1OeArq00WmCDXSRtVSccVbA8HCwLSVvNAAHed00TYMnZ8A5n6CMUXL8bhfGOxepa+mDvYMYSYg0pNF9SQAvuc3mrR6xgUzEpQ+DDvdhER5fvmF6PmqqwpO1rUFM9cjD6//w9X/vf6bTv+rPl8ZtC2W8FWdsYYSkzZCRNnAWSuHpwOmfEkkJZA4slqfUq2cCp6sePEF80GSqOL3MAdgQMAYweDy4BTx0jTuiNdUq/920LaZytK0HzCJR7ZABa1DyWeQEt4WTu8LtcreVlwRFDfK8zl06NC0BYew8WSnE4PgSTWcaDYKoDuKgHKNZYJyRu+aliFpskFI5T0Bv59N2uPAUiTYZGe9/nsANa3xgcfXsGuOJ0P1wSG8G0gOMjXDTfKtFDP6OWOk1bVM3INTJ0dH59WaQRnSUZqIJTY9wfGj4hSDzzqWc/dnPZRYFAn85sGlqmQTkoN6ej4/OtJYZ5YV3NZ8LoGXVfrvhcA1PKVqVixKZqlI7KtfeIg8PKX3+sDPA47cvmJoelXsN1giz3idXZ22ORVzPePna959f/24BIx6AxAr017y6RFhtwEGUwhSNv3wtA4suDjFmIFGJyyzhD8zlr20CRwZa5BbJ5tM5ncUz/Y68D0/t8cURCpSX3KogSGeZtKWqq9EDV0z96Exb6eZNWBLwIFFdvYPp2eeuOeuY3DUJTTmi7C3T/Sbd9PLyDnA8H3myQYCGcRPGfAsAZ2r3w+EcNj4uF9jCW4d7FeRPZAzbtW1Wty/h4fJYy1HF8c+fhY0IoMMiXUcCsGr6cg0ArHMQLX7vUUAYNHwOZ6J0b/rpoWFDLEgQuor+cPSt+AhNMVaGee9ZAiaO7U15aAW+NuB08vZb9Wle//HTpx0BHm+EpV+O/KLLb5SposiYgCgx0BXPyLpuebZFndW59zHlM67txzy4NoNDkMZepHNWHn1SvRgsVWu5sz3MJ4zFfVlg7/A5gmC77qxKyxBPaqZzpmEVX5+hcHBEJe/RGh3jMrRSRb4dYWaljZ65FSoJjQasRgIBMIOXoxmUcU78sKwJop4pWS6sve8bO9YTvTUMEKPAWIv1kPoX7bQmn08gx/NLnW4nlsZzgt0gDK6Xy6xl3XuuFPLPTVEf043RBH4cDvqS2XU6KVOCdmkDvRpPJGeA08nz8tl1VdZINTDElpBdAOwagw6Nj4JIqU4vXtKJq/7uYQTO/u65x1yFTNZq92Bb4eMDbqJGNvCH3Yuo+NEOog8s7FYEwnoIPTeM3BkFbozCXH4aRFw6BPB4fjWcVMJSBrMo1kF26wWq0Q5XLQ5ozFJrzA4kXwyp9f3y91fwAwsgBERIW0qm8BQHT8kXxqBY0CcLBk4T8pYwdDFqMMFOkA7wQEUcBubRVp3OC7eKjqQ6C3IOgRfL6nSSvUDNXA+OZGQVfx8931YSGWgPmDnXXQAbLACoJEKCqZ28gnFRRWcs0T5vsNuo8e9FKht0zZJ6DSXgLDEpf858ren7T6/n9NNzmk2eXB3DLdEzLYOJjXpSm19BQT4eprKQ8AaCjLgmafaqmJei83zZAFfx9aUD9BjWVlzeMeqei6WjOSTwAMaCHe4Unc7Ns4VPS/VrXpFjrU03laedQ1XQWHxm2Y2wUqrU+oBHHeP/vn4sGgbr315jxYIY/KN89eawyGLg9XOe47C+TCktjw/zra8hgMe3Z0xfn3yP0TckBxaUTBwev6X4HcDbYrw6BUC0mWT0ej0Ij3rxJGwAWYqyHWEDJy3eHZebkF8NyM/IYZzU50euDpKw2VAjyTsqMBDeblOX8NNciEdKvlAUBVeDEQ1WttXa0UPg8aTXSINYgPfADHBofNHIdlXgzMD5boqA8YJCo8GWzskEVOZAWbcU5PAEmbWmyml8LWZRnd569FYoiNPyp3cpj29h5ZNh1abShjurqQY+lnQEh5TW9dzb9DjOzsbjQugQDv4wLjFhc4GYOcBG43qgpveaoB3uwPPWXv+YVWuZu1YX76Iz3aIizXe1danTFnndf3H+659iUUNeY/zPb/20WW9gXV/kZ5BBN3DJQ5DXZt0+e22NX30fH+Htv10AHlN0xxTlMdal63UET27429rkpu+aY4OoJ0FBgW5h7TEXH2ROeLZ4N2Wmy05s4K2Feomi6ebkiTM1MJKSr0ZuqhPOUyoY9rhfUxyFqxRiYQprgR+WIk5JuaV26OYinWXh9qPX6W3sQ3LgJbP7QHlByA3VUMDLM5AN4zG3QTBwUJsAirX5LWAn5Wwb0sdWi+ig6R9IUl0a1seUpjJdQkx/onOdWDC+2Q/HXmXXpsXMpukqdO5jtP0cmjP84eH1v8d34tNV89mTDQ4s5cyY0RwayNbg6C3CuYgknW4hfoM5Hx4ezaGAHks7573jsWUlRo7DZHT0y5wlMo3Lp0fcvDTxrIXCTG5Oa5C6cUkvwwq3QezDPnfH8GSkvPsu9BDO/2rdGlpJLy3WvBzFX3uJsr3uP50VEOVip598UU8eqJcIWhiKh9eD+IePOwE8fp34OxbddT1q17MY+aovqUD9EvkZrfYiPL+qyEKsWbpCiutPC5yoNy3lEEGmRyBaVx5LuoEN0jqcYTsHo6np5hWlLjSdZa0dAd4vDbq+H0Y/IuBts59rjU1rOsioNcukA+UOYw9PiQhfNqRwLVkVlYKdQ8Erba0402iWIrN19YdWTWqYiOnzX5/fozmOR8PigaRnQZLvcBV/wDHPRfUEg8AUmXEoqv6g71IRZ+hNTiYywelmiYv6WLQyi9PkX4W7Y0AE9aLtJGt0ibQW7ACplhiDvDw4Bx5io6PcXbjBU1CRWawtwKNr/VM9xaRqLrEAvTQMblv49LOPJK1lSPSVtW47KigtDmD2dIlzqy7gBXXO87zMlArCG2ugqgtuDTDw+Fp5lAVlgOQ9VL60hmbkM+Q4LF1E4svu5aRNibmkr4BNeOeCTMLHGxfJtCd++nzYHvCYvj0BHtu4p5Y3ai1GS8nnpKSpgg6u3go5YdkSsrQ8LcNF0oQYJtKPvDQvkG/RaA9NeQzg6RD2NACz5WnhGPTVy15rRWnlW632PTHpLGs6VF3lTTUQwKqVNQIMEDZkcROeUnFjMBSsabH6oGZoH8X3UJxDKc3iHkmp5Eoa0cBR6Tyw8H5ubfxWkWacvXFxYlId8XH+3JSq8u0J07eXpEe2NkaoeSp0eiOIYM64C6komo5bApB4IxV8nBwSWG6RYGmHL4lqWNlCyQI7GkqodvpW8oQP5gZQLx47HMLRgNdqURtuJka9be7be8GnXDPiAkdtHv0+sqyMI/uJbyktUkrdEp2n0cu4hPIcPFdlxPvJT8vscqQO6sn5vqTfowVZWQYSvzFynsZUXZ3n38xTSSgzhnfgGzhAWObmchEi60fSdJ8clEHTTWi7fLC/8fPnw+xo79mAxxQ2+8e3o+is5j9jl1ARiljmUdWfJ7TkoJlorUCJZfLJViNkjKxTCBRUeRyC6wk07osiicBfsxTNQIXq379pKR8HiJ9dqaYBlAdESiWuBFuFglDsijvrTlPx5Qnc4bX0RsIiA+wZ8VZVmogz1orWtBSk6XJiZyBGzTiCkxxylONMQ+x7J10lDvWqiTnlRYVFACPRIe51XBk7aJtiSfstAoxYtFBQUiu9pa08XdNWWqpvV5EvKbWnBgtzJ0VQgWAf7Knil7dJU7rLxw8wi2BQdEAIiAoU/BjoATeDBQ76stE8AvlNfmUOLd3fxi/23nBXY9b5oNn8K8LYrskFgUy0xpJ7G7snqW2OvPvi8Aas4nJjnSlpZEACwO1xjnKOygvcMnFDunWk5YnowNMoDWmja4qXciimVFN6WmFx2kq0ku65coVSd4T65QRsAbYUDqhEpVzMSfcmMWRKaZlLXDob8JjISi3C0qq7Vj4usYov00I+f+HpgNPCe1vnOfPsVWtCYuKF88UvMmsBn4JCesdTqlrulRIXeLJ0IMMxz3lT7UZih7c6w4keagc2OJomD8eKeAi+7Q1Y5N106XK0MNh6g95RDUZ1CGcOPMwY/5TqvNFRFXhEkMTwMmelvRBjGGDM/Jn8Lh3cLt19JYYurElkmvz6pTVaauTen57z9DIBqfgeOcaFbwsRaJuQARs6uNJdJEDSvH/D5KpsktIyke0T8PHpw7W8reVkINa3qV5u5yUciiYwoZNXoKkfjhyLUUEvaICLHlu9C2DQ/LSkBwa75nLO2kEBHB+1Fos0g1Te6S1QA3o2kGdd9KDNbd8jE4+H6/xr3QyCMbN4ZSpPV9gzn0Af1RrBEq2pFhT4nRZjkH3HJ612AmUUClt3l4vy19pvgAtVrXs8XcJz+WRcPkD+GD6BZitAbEotnc7bTQGP37/iGxM8GOfWPMotD2NBi6oHhvoepsG4gmFQQhjnxXkmRDVZ0kzT2yol6zHfag1djwDWKThV6k0aSuPRMoOLpHUo1i4AT7JqVvtplMkhmVJaRjgQw2+VjfB2WOAVoirvLFHac7BXayEJXMENuBvBZuuUJ+e524sPwcCF4ZoCAzf1FDnqagsQw8gIIfb0yV3VxakPl8QTns9Ax4vdau/tKDBM+uDRFYqXBQ50FBoxew3z3kPUtQh8KNmpNHR8rUos1bhpJLDJ5+yPdIbTQNJRs8/YZj4O4U3AcVweve8f9lwP2KVFKHVs4ObSq+jTW1JUyxY65vEB3yq2NAM0RGkibkcQa52zrIdknenuSfFGodcKAF2WgcXg4skHxzLyoiiIIXTWZGQuy8rWkMWI7IehWr+kBjH3xXzi0tmAx69/YHppeES9TLjiph6HH21Lr/JuMxY1KcyH5R0tzaz3fLB0YfEFQGFLUMIYifBFi792VFIRjUOKL2YZWa/vAwQ2hw+SEPbs1i1cbpOMtTQ7XR7ruCH7ZgnQZarOciEPnJE+0NrloWiUsoFh9NTMCEDqXjMKjtjbv5EfhgHPglHj1xDesIjjT0DL1tK6raCfR926S0XPkImj470K2vyhSxyIhAKxbRKAwp7l6CAjZkE89JueSzoonvzk6WcfHqfbWSPiIz8iaT8WDON3j03jFe/QTBuy33Aw6OH2oBcCA7jCfHMe3DT2CmLYV9XB38DRVXO6/N+UrAwFlhsmpfFpWpaYaS1GoPjOqDfUY7V9w3kN6LPjD8p7hWcVP+bqPjN+HHJl1lq84cQALt6Tx6O8wa8Q3E4CQ4SalfO95GZQzhpS4QUYPcRtvsPrxvj58zwr6zB3EVtgR84KwQ95TvQirXh0nMqpPiHRqJPEGrxlCBUyaNsbADKBBXid3Mt/5/Cnt9/j9TMgeQVUC0vjwI0Fkt+VWWQ5IUyO7uEpFhihXIRXkCcLqYMMM0SjKZo5m3cPdCZu7e/o9dyQ+XeSwQ55RPvkiA0WCs5DLHBu2y3uX2Zpuuaj1QsHYxssATjMeB/3dfQ2EAd3H/vHwuXTSh8CXVuNwDguTgIFIByRQNA6H8a6zz+7ZJbIpD+m6Ml//XEGO1AYXS2/Fotz9l2/IyHCRQJ2YM0PBdZ7GhSUY59gKqstFEd8ajiGBjjF+VKT5vv8u2/PE4H7e4ovagfc2ciTqr8vhBW65wv8nvRoBxBTbR/AjGe5dYBjkGYeT286jEb/AQ7Sjz1nO5b9ggH7CIkaQcxSz6B9UjnbBlv3PNQ+GgqgEyqadhSYINmb5/+O0gEqAWWn/YIkYBsG7CGpA7muQmdE1GU9JMZP5gYCPNosfxcHdiB5HFaEobVyJoONZETPgy35bhXjPD2VQQA7MOsJKj0G0n7knSy2n9Lu0WLwtVsfxjjCvCLodcGWRQeudoZId0nuzY9HnL3/ZkV4TLdPv/5xnH8aWjwNObFsYkKfkh6huEthQLs8fx1RJxysQEhYpnkGvmeDlikNiXOHpoXjQUWtslHCu4AQu2I6Rcuc0+bgbV98dZajBZoGoRFHgG8MPcF2zQOfl0/N/SGFpHgkYMGmnkg8vq0HvVEZpjVtRA1AgL59MJvTJM0vCeuKyFEWXVOqDhOcB4mCsH3jA6MUpLGxeiKPps9/+WY4zUXJIqwmuSxR3qIXFe1fMEiXvFjvex4ulwMAfHWzS0ynxOHdqKesxNGuCGiP0nREnsAhpc8f4K2yS8Glp+2dQR5VF3cBLvB8xzjnds7IPospLAsNi1hdDuf3R7RQmvM75s0f5YS8LF0cP3+zGogDn6ulPRHeyJw+wa18hN9PER4PIKuhvUVx5JXEliRYTiKkQc8ca4E44wZpMQgkCGbGMl1Hk+QFOKCANeoqoCiknHjL36bUlLfmoQeBHKSh46L4JykxVWEa8AFlz0ylaR9mhGnMAjwmo2wyzrq8AIuwVsu1W8i510zDrfAQzbbmctw51mtYo20MWNOEooBnwdinOT9nHl4VocQwY5FfHArkQc6vz4c30GPYOJNUvznEBBp+kmZuM3roQ0O7muZ0kC5w7e+F0jXAsbFghPIhVT7SIDBKJW5VAIBupQzLzMEsUlMBcOtdnlOEwB9fj3x0WIWO6uciuDSAx0vysvGUJdJLzwjZtM1LTTZoxpL6SDEbHCXPkeMhLJxy8ae848ODoG8XLEGLFiIwY+BmVwRZqBIIzv5A38dxJsiSBLfG/Qg0Mbox4zqDi2Oo004Bh8y3WqyiM+HIZDlKBr1wcuo+PmDPMA/FdZICtlWpCAuyntpltFtPWy9ayDhTpwWHVXbCqXCGK01EuwV2s54kX+5njcy9H8ckIiY7tktc4wTPQMoKgTgmu9WscMjnj/BGXroJ4PHHV3x17kglXZKvU1X/IdEa1eByRVGs0OOFAAevIlgF9WCcF6x98WUrpjjXqqfSIT+mkKokffEL/OBIdaPBskKA28jAavb320y5xuIf32DolGuEZ2DVo3QAjKBU8Zq1Tmip3Zl7sHCOMHWVim3qm3BbAZ0RBq7gDgdnhFsfCRFyi4A1qW0eUppXMyrfei1RRW5KaVrxZC5niCIT18/v3zA9PWM7u/M5ukJgUbd5snqh0TZgBEA+FTjQrLUCTjMA4rFH0f9O6zz8+OE94kNRK4s5MuIPGhswAmTCwYQRc9M3F6mC44lWdgABVSSHAm6MSrUACeDoLI87e64UcGwYAMBVzpEiCmcQeniqvuV///xh+TgO7a7ZpaQGAKcptRNT60OfIVN5CkXSytCC0LYSyEfXSvfsamuH+M9azBxoyA3vk59ycV+yQhzIVGwp2l2Eb81ns0HipYECVWnLbgI75hCXzgI8pnSW56NtzFo41uJAwpyIko7XgFOpjEZn8qhjsIycTRAcYuiewqHTBW1EW+OBZW7S0DHP1V1L+FFicomunzme0lkW4CZ1OY4ekA47b/tdjrrRECAGIS2L2AuKJK6cqXNfjyjYzKWLeJ8DdE46SwQ3t3vGO9ljD9oqb6QZ4Bos8dAkpDGh3YheoHCqvDJdHMiRhQ7DouKf4mrUSuXUoeCnL8GRosC7E55VzJVK75Sbk0LWGgCi+mHaROAyjnzlKDF6aCIj/PETVBUYlnBWi5lAZmkYL5/tVCr6BNFRcMD5DlqS3erTrDnOowo6Jq+ZCBN14M3vAMpfphGkIxxW75e4y9EBuIIO9kH/AHrAzuaKMUpnP33AN50xEvA0/f8OKzVP3CiBARSAAqfOxrxsIJIqJgpwUdyXWu71WAiNXyNMwgoy6U/V4WZszIUZdH11bZRl46mV3aiQHx5S+vlzf07LLMDjn78dd5NLRhePFd0zhyNBWhGcMukqhbgk6EP1B7PpYGhIC5dlp4BAlHSAYwE+I4+m4a0BHHURp0SNbfE0kgflaSpH+wwm6YlVFW8JXIqGfbpACwP06AYKuFSLgdFbPeVGYcaessqzehADaJkPB4eLCXYksh4GlJwGV/3e1FUCmUttYvOnU/9zUcJUvaCPE0CbgNFfv57LzGo3WXV0Bs1cNjd7ImklleK/Vh7LtSDVs5RcPCeCSwVwYiRA0ejO+s0ZWO1QLgZiIQYFDnSuWIdO+PWnD+9pLpDGOXZd3zXs/ObnGheXVXZTQyWWERwds7krcvAIF5gf6xJ6Rj/ElJtBoI3aD1yumhJaPuxgILEX5EvEZ6fZfoUTfPrM4wHTh4eSBwKKPPWMP4kiis1aRbsIlDVVX+VYR+mnTJ9XFa3sApvrePwEwKXD72rPgmlAaYCeUP/eUjBnUMmjaZz//OMGgMeUZ/zLb06igpY0ppSGRFv0GtHS9h7ucTm5FhbtuKaxmM8B6B8Z4aBrgc9YGMPZ7FXri5DsVcY+Vx7Yc6wBQ0RUUhV9eTqwOfjDljHH85DjQINAQ+mmW+OE8fJzQWtXKWEp+vprcvJAu37oApdAJ3r1tLtVMXRhloxDwp6Eo/g55gBP1EiEefPlWcM9nC+JGcaJq+P3L4SrowIBHIYDOSevhm9tooBqviQbrgGOcTNVzNolBRIwoBYyKB9MhggTnpXrfYY0pcMrn809kfyV2DlH7yxTjv4U7ZETsPXYudUyaEGgjemfGxGBs9CYTt+VcDvMcnBI2v5cB4IdBpTHvRtwGgj8tIAa1m3u7KXA8HakpKQQdeqEZpLjZPM3aZistMcm3fDpkdYYIU/GdIqUhszmyMnlsMnrxiI+AxpWck5Q7czlsjYKV6xhS3BAsYFoClSu/9dsWkpNMZfjG8FNuYKIFbwhBNSifsj5IxPg0Rv51A14PL3IFVqo41SRC6VU3e4iQwBZXDAtgABY+dyOwgO8AUQNowVusL0gyRJ4Eb0JzcN4hUu7mf0ub/5qUx7Z4OjzggJqfbJWnX5Pe93DdQRIfuP6+7eD6Sx14XrgQOMMQsVu5z018kVA2/OanEjarxlVYURwYWTllBFkm6SSk2dzzyVgBgIspY5xhpS8wVbDQFNxbXXkUZrr07GQgRjpv319r8Dis9TqWQQSC3vtn5V+Iq+Kuq5LidThqSNAI0RUxw34QShM6Zy96aRHoY4cSQzQTQ3rM68SFE+nZez4/koQu+jRnPqHgDze3iBTpMenD+0rXQJdcvCsN2VktkPKgKYjqpX0sl72ACaIDf7iiDHEmcAcU0DBsmpmYSeKTu++xKW+PIl8xAW9tuYoHMZBg7n95/TDh3MZ8Rr0KPUbichDK3e/1ouYgRakFhd5pxQSxt2WJX+eP2MvUELai37D5Qlc2RMi91uTXJmHRs8uDXy0pIQt1h7mUgBTGcGNdD9jw3yePj9VavnwsDLgMVVn+eMbuhrYZEU6PCEg6Vzs4kTlZrSzwkWz49T7WA8ZIy1la3hVLRUEXO11lpGhKXf2NLRya6CCN6cif+dsULOxheTGsaTRT3xiNgl3eCtH+wR6VxyRP5TPwqoGAJ59p03+DA6NJpCk0wtvIQTtqUYCCrAkllPvBYaYL4FjYptAMWPgTC6WlIYRnbrwTsNAghkvnpOqk3r1NvOl57cLAnzVEcjuRWAT2mXThIN5L3DFCZzA08YuAp6RC5fSlEStfYD5GRuFcVEuiY8OyYAaMLTb9RZTDrrlx0RQwpklhngGdDI4RgyXsE1H5OqtQhLI4lL68Ajpp0/g0jNdfCMNV+szKTVka7vjxh29zmZKTXfRVgfQy6CX3FWMFx/7/D0VF+EoYAh1W6K3RC2rMtF36d87Rq70OE+0Hcr++gh5K097oEvwHEn3HhmHlB0+kRtIlTyEPjkxdjUtL04Wl8UebVS6klrW8/PRoBc1/1FDRZaqsOV0D8XOeG7vWzhWZ6TAeWi1LK9vqtTy+UOfUdcNePz2BdO355kz7CSiBSXXU8RMOL4CD1/lDMfOGxHSbXEPYsIEp9JZ2kOANOJFLfViygUn4hHA1JouQloy2DJD1b89H94cm0rvgxDtM3PAtbKyzQBaBnykHDQUoq+a2ieVKnb0vzm9AQbsuQZwMKUS1JtDujoEWDJQsualx/D7zIkSagJdBoAP0KHfVWOqrq5qDuZ0OTBFdqh5SmSDgFlZRSjADRm4W5BA18jahcFdWO1l5nhdTysRqEMycSpuD8ovdwYcHGgwgLUzmRw/xGIMEFNykSWo5wxvAaKnvAtj6R0O7zdXj4705Kbb6A6jtNVXdjmkndU+THRhkCNcNdMROt8LqIwAPFTCwFEAk9C4FsoMTzO4y0q/Z+fCI3zYm5BelJKb/3i4TPrgw8OxzicHkg+ADuPO7T5rFKQ50MEchs4BH1pWfDTSQe47hwEqTJSsd7aaylODc7PRFDEnvtnVrqEgILylg64KePzy+/HtRnttAedEsA4JEsKgRCYbtu1LsyObDDTVSoOwNuCw+qR1Gd2rwXtSriflCXn5JJI3wwZauFcGDXZmenwyut9Do0mjTU9vinji+Ts4qhEAHlBAKa8/JXd5ZosEvAVF4fgnPCVZm7kQvGsM+wCGivQadOffCpLxgqUtkRm0hHcr8SYbDtqIZLrJXpEAWXPTgMCn2pr0DXPD7tg+QwHbX7/gWyUWdrmwNO3k3GI2G1TVUzzJmYk1XyFDZJFEIYhpfGzhKixuAxNbKJetw1LMzzsIoxxi2eaHlNh0mQqAuUT3nSM6TpEvyN1aes8UKFicKqeDA83TNe2GddCmKi4NKS5Nt3yWk9nrIHB+2Bj/3+WYVEPc0xenw9zcF2w3WF0AExNW39ll9ZauCIJNg6IrpHdi23qX1n+VyuXgFaHn5+hoATNaSRmDiavgWp4WHb3XQdiL/Xvm/hAdZuIJs2uZRIdgljKYRRnW/V/QTVbyUVDzSRZqmqqjPZFGaY5ya8NGekquuzeouWGVF5LvT5Va/vRDH3FpN+Dx91+PrkFZuvLEHKTBexZJjhFlG4fM0UiUI3PBrkhri/DJDfAkLBNwAOyTARzvti2Tq5jk21LOvEdCNtqMCjE1Emg49/TTP77B6svYdL7R76A3XYYzQwjQz6lhFsaYw7cwopoKfRT4DlmaT981No2NdEVxgL6fm9bfqKo6M0ryzv58R3qV9vGp+Movv2N6eUF9Yoo1koOyWmna6yeu6vIM2GafqUiw0LHruBLfhJYjD5jIYQaWAFrXtZDkUrpgxN/W0U0kdafYcFmsCjIzqaXdFL1MBE5B+VwSU15UNfoGePzkuMGaE1kxxG42Koh4b/d70xWwJf+beSnOiTbxeBGGidEEpsyM5W8qIZnmr5XWtCSNLLfZCVOqxMzuD71wwVo3znVOafPfeTwwIXtpJwEKnt3IXPMXSBpkehXKSDnmyjCHtMGAkrvBA+7SzVtaZOZceHzcIQDNDMINbyVYnDsR0K44uSpdEm+PZQ//9acVAY/pFvsfvx79XrHnd1qyFrOrwLFmVijyojo37hghYJjWoS5J7b1JdReiIpHU6HEIUuqqSepNDzO9atFzw8y2z2/SmGt9F6MSvzBBMHyfcv4O0BEolXum0Zkz6TpgXrSOSc5r5HH13tBTPwQsX4RpJAgGZmvJaugcLylltpvjg3mWZ1yB+MBSn9w8RAo3TUVU1QJ2WKezojN7gdoWwMM6V84/e37VBf/8/fhWepafz9yxt2cur1MiXkuRfDkQO2WcksDTqIO5iS3aNPt7dWsxI53W31GC40zYHCnDazHpoujRW7AwJhobk2gkiEMeHyD96TPUldEGxoL3+GYoFEWzHiL6uUSPtfBduFNuhMhEryfQ7Gj3lJBFkooNfePZuxBwhnPF/rwx+qTXWWQrbXcOkEeDIa1WaBW6SvPX8sTj8eHAf0tgECLRdUoe2OXvtTOAWbTeFe8AAvRap6Sn8wLaxQBWq1UcUd6xSHyK4oZg7eo0l8ZeamxaipEif69drhqoP8eluP3lp75KLV2Ax9NzSr+cK7RIVepSTdpbGPBep0myvBW2fxS+W3ycUDBQhbnGXX1ldpGx4XSSi/kFfO/z+hdVezwcbo2VOsp3zKSoAi6e/7wWrx4kVw2gbeSurf/6DBf+Djeo3qpNob5lAKNUrMfxE+cVbCR7dvnTDqcVvCBpg8NaRULNSC1B4iC2RL2ABSwZeI8bQHFs+lbgGJJ/YXSVKKbs5zPAu+qIcSxkTyTjt9PZqHJOCf54TeVx3Sjv+x3rz4kEV9eID8w8SjilBuaHCSiu3aX6CcCl5OH176Qk4tlEptUCoPTmCvJoRrNAAeLkABcy9V0s9nNvRF/Z7zwqECv2YlpargZT7NOLpMfQm4c0laWE9KcfrqVr1ZSATg9g1u0f1imanoeM5h5B4xkV1cEAp4c30Gqd32pdC5fofUPlZAzE1N5WdndpWCrOiNJ3bN0RN9asL4ANxrMyPu42Mn19fCtPe0ypKhgLJHEQeKRPejhqoEjG43FKo7xWwbKuEbAPaC2Lgw1Dx6yIoW4Qo4XMZgTYNrK9hh/pLZBQFeZh0vLNAgod8vMPfZVaugCPCwmb05lKlgO9hVgxczmS1mD0Nvhfqr+e6yNgEPgCFB1R+rLRUU5Jqebq0f6OLVuXDySZ39zpxJatQfHdpL6BMpP66v39G7D8Hb2RG5pSqMPJx3ARsMBHI2jXjEnNSH/J/9HzrApM7AUkWgCaTsecozJoQZ7MdlO+i84KNSLw0QkgtCIvvVVVoHEjcbbwdC5OnB3eb0LhYFN/ut78/BhfO5EDIm8gSaJcyzSNRLK0ZZ1XaUlS9IULpjhXEigxjvfDtYCe2XV7+kRVXAbLkuOuieNReqy81ZRKBmR0+LlKaCrJZc8SktgdQLme/vxq3D0+OCIU5jjvigOYSDGzOZeLvWBHC3lq5dCTImwtJJrY0M5eLg01Klh5lxr/Oio6hGyJ3jluSm9RvtSV+uQZK9BRQErqOPtynVcTLNfdO7ePweNR9IGAzQlIAQdkEict/ruOniMfwJEG6BET7kamskpSosgYk98sR+8Acbr9+oYCFWbhFYaz0t3ABSJJrHgH84749f9+/NxXqaUL8PgtI2LbEqsoJpcQ/wGmvlqxrflJTtLIJicX2zoPiQm1WwD8sDIKhlWjofuQhL6AuV38qTDX1O0TyVKR+l0iXgj0BhMuCuQ3hr9Dq0rbEllDO15VTEwD07eEFIXUSIDZm1YGTgfe7cwrOqBnzAokO/lSN3iyysSXrWzoPudwztKjo6IywDabWnT7LP4WC3Tr3DP0OxPQ8ftXTBKkWlW7NjVFBohIIK4avMyFP+IVCCGIVv1EFKERe0Ytxi7dswPgP5tDO2K9+gJOAOYNWDI7sbU0aRFGKGrN1M4Gf51fzEzDtT13gk0kbR8eBb0ysxqL6bSAULmkF+RYq0xuw5Voy+17T0TE5Xs+mpch49hTRaaXrLX4jsW4L4xjC30B6/Zza7UzGkP8iqB6EH2Je73r+cePx0wvMt74qeNFytmFOJTq9Vyrecqq1KNSM4mU6rcs7fpOYjp3Q7s5L60szk5nfpjHa3j4WFJZNa3l1QUJXRZTFKCFL7MwVZR5euO5+rwS4DFVaJnSWpqIYrzggkEAmIhym+NczXUKq0ljNlnxGZADS6y/j0QraIQARQDnEpmqDglXopTZDUV0DeeAKwutLKKoBISxCpDzPMs4LyA5JE8v7yktZnww6GvcyhBqIf6lwF/VjI5UmKSANdqi9dwnm+82ys2qJeg6Un48PB8AHZwrTpbQVnCB7pFex10CH5sxFZgR/aOdiq1pPVr5HSUyTosYoo/41x+Yfv+GMtBN2aO5PHCQwIqr0iyjos5gK2altEs3W7ONYMZG8PDzdZgilacCBhju4f0SuRsqi6rsRRm5IWjl4kArPWB0nIqYEWC/pwVhScxHyGF//nxIHz+0W+Jdt4vMMuxxhsuLC9ujxMaH9nI2tITMz7mxxQWBHmTMk+55sXzeVsBDMdHm8EnS/WH6GyjrpwEZYWxUwBK+6adHfIvyOh9O56pTWHjIGeG/mzbUU/aAmztarJbmWGMduYRpxsw3AElWtRBtQawBeCigcg7UsnYvDubvGYHTeKrNeKkqnAri8fE98nEVwOP//soQsjFcHlzZMCS31GBdg88Kl/A5557ocG9pyZaoEU8KzCwgx9FZLop6PGgEIg0ccKgRrTHOjmOZYw2Ek6MMvjYQueKqt8zPhtPvMC+3RVbFlyd4Az2SpNcHpxypAJ/nWr2HPJN7P1eO3ZnCYO4r8O1Ra5/RG6Qiw6mFqJJ+jzG8xDQdxumm41XowoZKIdZ+L3Ruw7PNajepP0KmAuDmpqkwihTABwyyw+fhFD39cqrEQqMdrdRva0y9ba7O007AobooZFKbNGA2ddg07j4CFE4ZKLqhKlNboEm0nIJlxJLRRKxKpHtPcuTq77BHEVf9oDzHptzlT48+Q31W+L+U0dMIKoipDCMcC4I7eTg6zLSGQVVKxPdyVT1anTkHB2XT3HiDYnvBo14iV2bCKqerhRtzwJyKz5lT09ihEx8PWO579jvIFiKXV75eTUsqao7aIikIc5jotkFIUE/0korzOAHOVQlLmaISa4Mb0li7+Gl6SXs85ZoPfZVamgGP6dN/+9fRXFn5PTtkLujFALhU0siIeOB6a3VxNi//hszRIKcx8TDo9yU1QovNlfc6wPCtQ/ln1oeKcYey65GT5WLIEQe0/CplqS/bCz3LF+qwrxrtRxJWLA71LC2u3sr3AgSa44Q6KW3vO3//dmD5O3qbjpzzjMkdyjSXK6dgO+8Yjxan2XIUzWflwIOzvZSotbo1Aj4ooCcaprWMLFcUAmaUEm4lYlZpJAYAeABtOsJcOo6Sw7NwYqFKDuJ7pOOXp3KcoaF6jtknpiMt5aKroYF5esmPmqT5aaFKfWoWMGeH4Br9ci6bm4MPFbMGUoIsSmJanpFyKGJ9qpW33wLTu2F4n//9syN/ubeaQS9ZoOmAWLc5yUcrq4EeXo+EvQBm2ofYYKfbGU7tYy9E13jBHdOB6Sxv630Rti4+bT05QZlurIEvTiVWeZubapXbHkXVDaESx1SR4sdPx8sCK1NKKI8T+BPnuFvnyxmGte2MHqtdHyXkoJPChuN491JTDWuTlqVjD2kvowT8Jh2PRngKPRuPPJbh+dDgLmngILVH3XFfROJ7gvAZWvJZ6/p/+fnQztvXCng8v2D6x2/HBbElm8hL+5S61SVouLMua2nKFNANU/3Dk6CQyDVjEmtiAyUBEt7cTuimDd9J0TJNg8TVl0tdvALNVUAsGmPwIZRdWM7rF3/9dnD3rXP5i46r+ybY9qXc3n1vikMi1TVm8yc0lEFuiRKA3igLBZlu4YuoolJS6o/6YFQJ55CDdW5BuwMvVdQB1B1Wazuwa5gSkAo2khuQMRb4P3/LwA4SXg0Oo9oTUg0MZ09VthIUkI0rZc5MMkeCnDgAzjOQgsFk6V9xDNS5gqIgTMnmC4rp66hMwJGYqgdO5szkJJ+Jj71v8jURKprBqXqLBnq4KpiA7LDPclKdN3su51RIGRAPoZ4UHOKkA/qjJAqHMGsXVwXZne5gOPfYMynJLndrRv4LW6CpRHASKubMiIhwrx0myKC4N01t5Xk50tkihW5GhAe3hd55PLST1o5Tr6M16ERy5M2pqQ71TKpTExBg99FKOR4VnzXt5wywE/xL2TkTjkUGgt6k5WEdp+kqkjXgLz8ermleSwEeX5/wWpLWaZSCMcbQpfEYHgaTbBiywwwzFuTSwyjQU67uDo0jpHXPAFzqmYNneNCEqA9S5q+yaiV63sIiy4paYUkUZzsHSCJZZFynaGofBtKCC8hkkgK3hAe11/iPnl/eU1p8aILf85pD/soZX72lg5qIQGeWdOUc8zmkpYWzrty8e1LKErPVrBB+cX4SudlJdkSJWqKaOPrWkFURJclG/7zpfK4pg3lrXiWmbgDCzCYK5fHeIju+tesqcCKFsMCYieCmALTRn6kwgvew5ypnSY0TShSCAHy8H3XXTV4eidSjTWwZUdsqzO9RhX4UJzmNdhW81yrKwRcbPxGZfv7Qx8NHizr0pAZgy4cooaLjRQhyCoiH0LKKZKBjPbfcR+MzKjBsULRCURnJQgOYy3O05o9Wmk6+dBI3uCE4XS1zwpJmdqTleLguXRMltKMJ4CPyOefxYHQaUoDiwv10LSmum3I66X+ZYlfH7eecOsDpFACx7rJVB9Eq29pKwpyQP48ReRvMpPzo8PqZomM1daBHb66AOHjoNin4Z2ZT4by+/PwDvJGXLgp4TOVof/9ytNvG5EFLNk/tt+ulRNtQzXrEoTIseAw0/wYwNzP5N5FEXlzKQZ1CaUXQRHG9SsijxGZrvvpaZZefKL2iM5jDhe5VsXWd7reYLWgt9oUrgZjOO7n5lPoyyZdnSN9eQD3UqlQJT+CPUIGnCf8zHBjTcXGCmNzWq5jSOV4F7oaaa59xErLREwoRbndUyeDSr16n1axC0+sE0zlzgEJNzn2rfvCGXYGN+TbPjbT/yJqZODsmgtICe27dp4kB9qyPdwBbFvA3B1itQrK5eTQQvHf9CknObeDBASkqDTJFQPVtGaWUlcQ9TQIiV1cHWYOfVULZYsyoSHVbpVB0XB0FWybitk8fZpAlcsCPMy0EPM5y6nBi6XcaS1iiw4HE3sZQIKCzbRUQkxrGykCdmjEcJGDJ3Go2wkLpnn8JgRDsCUQdxK0cYMG4sYhRfTSfHd6k4Cx+mHg8PiTiG2Xpehf9forcQAG4VcOwUuLT+Sghs9FjBB714O6Lk1YxZv4+lS5csQnVGtKUNjRhMKiBrtluAHk8a5hJD6OXVUgZIbDmnuMi+378BG//LQp4TNEdX7+hz38UiExZwAd53oCKSzLZ5IdIQAEfHsjzGoNUio6EMbyXuMuJLdPFkHqfRCwBHdVatThHyraUgbhOyryCEhguJay4plmXd12GMuOIS2hsNwGfYNSbPACGY5j/+LevkF7QmisnSSc6fzYX5OHGpeH2uZkckYwvpDQvwiQ3ZjhQAm1wwUeY6HOmU8scpxKoacblGlNuUJprJyBgEeBzQAU4B9h6jhiVVVapdjFjQhLyW41wmvzHUzWWqSQ7B74kh1rn+lumZDBr1eCYA08oj2d9NvAClQaMEQFZoFOcQQT1NTB3fawocRCBZnIVQIngznnqVT4P1rxbF/uEsSUK8hapNK3DQZDjQFTH+c8/lkSmbucby/WL3vPQ6yeg7ii2Wuve8XCl8WDfWFkVhnuiAnoINbHhhV3gV2qP+mF5N7xgRgNShCjbkc0gigWm4IC2G+sKGH4obk4fDlNay9n6R+IXTZeteBqTrIJLNa9WMqEUsm3SlfKGtYYIqrrBX2fGWpiUCw8pl0RaLkDCTTuCDiemjSrFD7j0rNdGYFiMqGTMBys66/zZKbpjSu1cFPD4+6/HNx6PfhcLu5y9kmhM8acY7obrIBMq0kkpFBPoKeZHoy+u0BRwsyglUHJXxhVbS/n5S++xBCjyeKhzFZE82Ix6WVeiVcnQFzzflrD1Ts+bYyWHGakhTY60VX6c+dK//jjoVYUSAdWt29zGUrbyxmaUvbRXKL/GDFSLbSI0OuSS7UEId92OpaPBHlDDNfwggyfcAaZwL7M8G+b7DJ4I6fvdqRFOspTmKBUB7PTFxvHhqs3VbbLv/PoV3wAPN1AENWe1FEkl7VXd/Kyf2cqto6baNMwlasXCKTiVneNnJXSNRKwNcxG6Z8BDSy+U57bHjamDt683yZkTgIlcNzAWymly8bTZZdK8PEIzizPB94sUtpo6vDPWf3hodJqRr7TVVSrUMHwr56KRWgydjKYcAXXuRIo3m0YkCFeNSwUhgDxbOkSwkWOEa4OH48PICaC6h/UKaIl7hxOLynh5Kvigco6iZ8gIoWSyStmiRys4iB/p/CqOKVsNSZCfPx31Reg6LbkqaYzm0qJclJsQxJ4WCZ+T3kE+w3tufDy+9RlNy130/BTJRxk2OUCJDU/QlFgZhUO9OCy84DojAL1xGpURARWbaHkZU5/HSXn7GvL4AM2VWpoBj//85aWqSNGgOxjYAI1q9T4ATLL9L7c/J0f//PfE5OHS4AskJgxwRpvbPUDngk8XZnkZ5WNykpXYF7pB8h7V/M5+bSSWYHUYniOiE7gLQQ85pCdkS8PBz+vk5QhvER65YU+dkILkiHFsJEMDBBAIWggaZvBfaGNSpatB35xxjfBSMngOTki1U9nTwOY9Ab5XeVWGNaVclZc8raQ3Kgd6WH1B50hxlVROfelH0Ih+eZfDxFv191+xMt659B3PcInOu1It25u2owGMbmocs0Su8xpU2ak0gaTnAAAuA4Y5YFoJjNF5XFvEoE1kjg6yO81nnao4/NvPkB4OoLYlpf6bPnRWTWgjZC3PyZZyrUm7RBhQXlYkYZUxZjmdZk6US0dFFr4jMsjSElFUjbsSyQOOfVJVkxiTyVD3S6kK5Jiy6++5s4kjp51RTUf6zk8fj28lOXv4IjykAK59xIDY1njijLmsguhSHa3XTDLMEAVY3yhssjNnlJoLBkVaI1TRMkDaUa+8Or1S9lxy/+19XK4RP+/rMQPnTcCslWTD5/FXfLjkogI5wufE+5vTUfdf/9TGWtoEeEyf/I9/vrRpSnqlDJzm5668knyKViZXzjdc/r1C2aycG2RM15Pmym9Zyi7ClTDtvJkqpagtWlcho+vzLwuXjkJyJGkrifqoe9RsWL3rulVBp7i8dOwopQn1DcSoCBTJ8P/6DG8cHtJWaORTrA15miKQSP5bjzPt0G8UQLLaWvGVUHDGai9XHS0HEYybN+5ZCXwcCU3j5QBBVKCMpvY4q9WIZKWSJwQ+TEwbB7ZYVC/ZLuhOaDP40jKHzjQTSZ5eMP3tF2RvGpEhUKQcOebaI0Ct+DUnkCx9t7poMsCZypeBxHBREQtYrOWb/KuRJ5VyIRZyFAhcoipMnlQDGbwYZEo70PBgKodd2ZQoeWKMaTQRGv7150M6gAKqjHD+HY5uj7eqZAb5gQbveCoP5LKsvHjM+bWtaRdIKRYcjUYLDRMiP6zQehpJ6Unyp2saOD4YEMY5+bljKhOWmaOUjOpXFjBEQS5G7c3hW+QAVbAiQU4///QB08cHlIElStw6F5UAZixaNrlxy1GBij0KylHR6C0iI/PVLlAD1ixNdk2S87+InykyKubVcDxQHYMAXi7spVIXEsWBRUprO24osLZwb8rXMWTpVqmgdGDOW45PLtWE1bTl/+3PD22p4S2Ax5TK8rd/HevhYQhKJUIhNlGHi9FUeDbk2w4t6qLeFTzXh33/f8Hr3lJigGAjyCwUJq7ThSzyv8t7CQw1aUqpLovL1TV1kXPQyJBBZKGcUc44sm4SSGLockgh5zR5bmIl9ff7N3h1iECuMOBwuEznkAnLbyEr1NRpFf7PkDWmZNJi6OAJiV4RI1daD7ZU33hD4m9X2Mg9DnyQckiE6JOWOfCW+6VzxPmWGhAFyg2MtqghydVfPI41uAeiD2iCVuTQAGo87345YvqPXzAdj4xOssZIivjRQItOfh5wAiI06qfJmswWMlTEI6Symbl16b+AEHzyT6h4qorwGrRBj0whsNiqUUhF9Q2c0Q1aCH9TmVYh/eTj43t6ixTtQrNWe/wWrWyqecsumR6Kw+fi52DOYE+5ShM0sD7vdXAbPoBegEeJQrJ42JrAo9S4Rjm/rbFiilnQAX3f90YyiBV0+rA7vew4k/KiFDApzv6JuPSHD8iDZV4ymA5uFtZNa9mPysOlq19sHmdayKHWfRVilrhDAJjaXGWMxvW6GXzKSC3ZSAF/LByXKwCLRKcB40MzOYoNxB9FRCnIoBqChiqTcPcq/JgYdMgYr85F8G8/H95SWxYBPKbQ3n/8duQfxNTtZR0tzfc3DXTgrynAqLUlgAxXkp/3Z1wqlyQkDgXoUFR1vaclOl6jNPBSQg+zRX2t+gKJ5D24izXTUhlA5qhk8XknXKVOVB+U4akSrOZAOTCZ1taZkRbQobBf5V9fDumYCGkhV41Fee6Q/pCqFR7OWmu+wACm8oMWmBsbbR+DE+BWh075vIsXhOTXQrK5LEVf0CI3VXiFOCfYk27QDBoY4AsYCwLqFE8zjIRL8UrJn5LIgaEtXCtcn6r0N2TAotO7/uOXia9KAYWZW9mDpfOk9BcHVw90gCPAoWEaGag1X6cNA2IURlbvDK/pozqyLoXoSlC77rHV5w4BbTwF3iQHnup6r1He4jwaHBWWHfjDR0h//lEOP+HKvHY5tSl1V99g3yNQn4iAlLCMKFeutl46Agv4crftOEgdFaGAEV7Cw57+iMCPI1XF7dQOKLqBzBxfHRkBEHKAaCnNTLlIQiRW44M97AuTOj3zeKgubGMuiaYSWx5XbUuDizqN0h3SKIpR61iCC8DVis4TRWiR8bJ+J1RxEEk2Llngpeb9qC660onLycMKKqK1cKric30VvZlFJryJK62upaVaZBXlcEAVA2MV8Tx/5i8TYfeHhQCPiaH+X1+Osq0kVFrRkH/JwJcGs4xSJcNaERAS/A9RjxwQ45JTNZmpSqKhyw2Y4Cbj74XFTZZBMa54DRMCEAxe7QpSdgmtWtiWIQ/KGmCNS4/3jwrioaVdNNdtrHGr6iIxM1B++XJI3u51AzYCoCCWhPUAAig7N+YwcfwdXnJIB57JgO0qRg2GRhT3uxH548QbalIvq40O514EVgTwCBue3xJxcjGyDBsFBLSInVsDNJDmil5WIPjSgJomM/vR//31mP745ptLqrol3UKJD93tBtfycIFRRThqYewlNun8/XxBUv2LOZVJ2MA1iLNcvGXaaVl2nZYavhCBZ/xbtW2QUh1OhsKe5gyzJtL7aoF6QvHRwaGg+rGOCAWq2yfA41yyj3XQFfDHC3S4CDiZs7yLIJUjzOxJW0n+aAMXMWVKXZVfPDwbzfORBIJO0nc2fR/k9BD2mBdAjB6uEUiNKS3e9zEX5xyQlpIzGqtloRgVV7pQldPPfv589FXKcNi6gwrB6uuMAx/doTeKU4JyNiXmC5UQM+ax/fUCKCi0HcA8pwtLIAMrYgNkQAP2hGYKlWueBDLcklnqTqZ08wiNC4jC5jF7F4VnQnnKWM7b9/J8/vz50FSatgnw+OX3Y/r9K9o2JHMbmCtiM7ceG36nMqYyBtFp9qu0lHTO8b1qQyi+w3lQzM5LXBJ3jgTWS5OFLADr+oXEwTiXyaufnVJZ3RpEPxiZ71tDWxwg0H7z6tkq7ttuK4IBmduA5ItkKH5PDJIplWUiLAWlEyiF1TM5+5Xj6IlJVapbmL6PQpBojbsbtGklzWTaRPte8bug4ZU3cB+wYBNjlFmX8TRzDzwDiiXQZo2ZCqSAb98AR2EEjakUDQhXxQHE7Btwohhc2GULyFaBCNkZ9a8vmP75W40KggDAWeVeQUpLA7kPKqDHtV8AVii4Uj5CYJ+G0jOldzwgGF3lzVfdcPqMPDS4XNtWUkTZi3rcsR7TBj4fLW1BM+k8FSe08p2e20/kdL1gD/+XnyF9eIQ2x4jeyidfm8TbuUZwSH0GkybRQyngy5lod3ppxEZxgdwItIi8JKkdOEsEoOiJaDHH0+kxuwhMO6JvtD6zhTKs76Q0K3rJ47NXpTqpS5H4qIipNO3jA9oDrATSseYkYyurX+AAFHLprJIxe0s70zRr7AFp8vOnZoDkaEzFOHMUCOKUA6C6HEBlU7uSAlPiaRqAqS2WgTyIhV7PmQ7qVzCD3kxO3QaAtG6oKZrxTz/4K7U0AR7Trde3J2xvsycvvNpEV2MrIU8/oVdSoaYdE3KUWnOZhW3JhUNRFs6UqpyD98ox9A2tLBkeS660fgFr8svSMaMII2E9uSjn04YCvk49tJ4GzI286tRY4SjQ/jWvfH06EZYKRkTheFopfD0Om0d3NN6gIxMJ0upQ5gf0AerbRbA4c5k+sucLhzJ4wIUG4AYaHXkzksNRZgVa558x3MGJSIGjM9Uckbno4pvgADFurUngXifQwYIQ5NnT+fafhKSUBfG9oIon1YkhJ65Y6IC49oQvSlvcUKwvibwmFQA7R1cGknlDbzaqSwbkURirZAC9+mXDqXLWe66azBkAoWWyGo0v9IfBS0SjVvlWLv3FE+UhgQ4Ph4nF/pAeoNF55/zPzrQGWh7Ugya03qx3VzBxWOyVM5ga0yHolmhMM9Bt5Mb0GSUqoymFiYswxMa+aA0wMtRVhzv1ZZSgh6RsQOUfL1qIIM/Xp0d8Iy/trdRiYn5CVNbomqMatxy9YEJuIasb0Da60fk5bsTYCP5T9Aiczik8RSiWlQ35krKSVVZCMbTaizKneLrMJ+d6PoaAJK6CyZVH5vICNXbbgoS9AVXu1JEfP7SVpm0qYns8tmgyBvlCYjljYuKcEk+/fLb98Dyu8D6pZ8MMyQFQWA2YRW7UwbCX/6rJPv8Jp+aeOD/S+2LGc3WWHNaEU44UUlgZyBX+OUwXMwSyDGHCAgbJW0qHVrYkIL8CP4cIp5pEHximNxTeg5iNKQhVOpBpLZJBTyXSaJJtcN2kw2LUAHdRvDi8mWfhfTlgc5ne7Iar6DoY2wjLdoPWViQfAL5zrD7JD7TT/iLbRzW8udSw3HBHrLd9MqYMJWMfmck8vzMfX9QeWP+oLGFN2o22Ay8t02rXchQKmHhiTic7PxDE3rOwwWmZSmNUABVOoAM0fWCFl+V6CtrJAy+qOQd6szU0/Ww63/7265G56MAiHZJVYFetXn4O0vXsSHkle3zTxWcyMsgp44EB3Co9I6cqXiq/nDg0oMDgkaSf8CFVefwEXIweZGBJuCq7kxEKQMKUaO05yJBguOp+OIE4ICk6lN0ZuBig/O+n+TvzVyF0OC1QArqeCI/LsAipHlTH0p9VeoXR79SczFfmy+t6/ufvxzbHj5hP6EincYHKRvEd6ZwG444HwQAhszEtjkghdaSyB9F5RmngqnXYCc9U+e1RD3bmTCJUwgbRsi8oWAxXe1z1GemaRuFgxHLcURtjILYE1P1F5/pEGtUgVGaS9gEkBqymfc/+pDZWoSOI/ULtmMu+Rn3doPBfUkxl1IwDCtx3Xjag0lZW/3B8j1mZ1fOAla7kFRzAs94n66rSx+yAnUCL/Gy7+JEnIAPf2/L+39UKQMznEAqDBRmwnubq5T7s+VL5fMGcPz/X0W9jcm4Hlj5x2Ue8/E4j3sbsuqNcQ1jpHGA2AxabukRnqV7FXE+DrcMw+/Pl2Oi6tUR4/PvfX5qrBWlIXquXWWJL4PJEKvbvgmsCCChwvQHiIxTK0B7AVIQMFfdixY0gQyTApL3widglYQwNGKZFeC/tyKH3c0lBSFem38utoe8mnw+0kmNqmCHnh1ItH+Jw1Bii0HNXqxJdTEh6b6WZib/DMgY9KSFJwJF7G1hVIkmu4A/3s1GrapIb5syNqBSpB1LqDmM4WhwIbhAL+EobwG1Fsn6aSpzS6A1ym2uR80o/hIYOz+EQkateKJ/hQCRr8WFycaAAc6GgNsJoe/7jiaT065NQZUTJe79ERZxJsJl7nPOHgUb55bFzGUBA64hJByhLsmushXp9wTVi5AJ+QkamTQ4K5Ffr+9cwO2uyf+e3FgjFPRueow6z8MB6H2YV0Wguw+nDZ04v1gAg7YYzORuUudTAGH9g3KbTSAjrWMNyKNibXA/HgwZe5+Dpn36E9PMncFVN0cCFubn/Hv4NFtfinuONkmgglpUA5eSZd3245Jt8+nmNmBWdkRIEFLGmtVqT3EVJ7zgqJMDmOurkwqD7GMHotLHVHEu2aGNVjhj8a8kDJk6f+/PnoxisZiU/qFEdM27bi69IHB4DSUslP1OL3ECkFXGuRRuqcqhF8iUQ1kZ95XAsHMAyeGTfQC7qUgltRY0UFFgmkus+hwslQvkBqVZydlmCqUP7C+1oWPuSH/M//vowHvA4vn7q//zjRbyBp2ND66kXVVFJzqqWC36N6m3JndGdHFSMR5wbLt0EBtUQDg1thSQojN6SoZqn4ri9r4AgLvZbOt3Y90JWIztV6Q54Cs2yZromw/PUd6lvNy9tAT43HE/K8Zc/DqzG5ar/diMrDBFsc8qDB41MDF+R5OzRaALQu+epnELBD6vKymUdNlagaXHwwQHeai8oqsG0tIcBjqT2ggSSJQLMOF6qpcH0lEI2ARiBEBjm6FOwVY6k23/9A9PffzteAhAqh1dbsLnOKcJwM6OjKiUHRZQGMPm3F5DEmBDwrB8BcbqOS83Dkeo3G8gkVx0Mi8uBsgVM7XAuxxGtul81SRswaTpcKg7kBxsxdTnwlq3aIowzGvU/RcedI+h0+GtCYOxbH/7bn0As36dmdigcAE2mLqU7S2XkhQdkaXpvK+mn8llExURSohvQuulIdnlZjwNbOHNJrlLTXZkE5fXW8nCTv0OwSa36E2b52pbSxNraB3tP0IshD5hRaT0CFnBf+pNGXGoV8ejHM5qdWosTqWk+muA2Zv0W9nSpZKsLDeBy8HLlrBnE5QiUVKJ6HRyeaQSqT5VPshjFkCllDUyueRIZpZGxKSiI43cw62t6DzAiqZr//peHt/T5oYDH0wum//znUUbWmDKPFaIG5aEM4FuvKi+p5Jgn8wLR9TurMTRkU6pf3GPAa9lCwMx8QQjLObXARzq42mlxzzAd1lKztReVyGRZ86YqL0i1FUjP4pTJFUyBPGwMyo1P2/D08uogfT2IZVKROpGG0wlp/noplJEw4OxaJQ1BBwcEGO3XnS3lsGdAj5T8QUDQwLPg4sZ0cG7kZyN0gAQsQCZjg828HCofpXAuzQHVch1fDQTDy8xW+WE4htz43SU1IqnmBT3b/r9/HPm0owpcoPVJoI7uo8AUy9ZafihPIgSOxZZR2pDqEoB1DsR1o4PgkdTLilkoJJ+6AHKK2wsQyoEkMqFnErUM+OBbIjD9n0adGKlYrONz5EdWHhevZfm4Svc9N5oWp4DqBAvGPr2JTIxTpKZxkB89Prwahn8++PvkAT6U0rwuZ5hG8XDRBWgbwhLwY+BJOsDD8BRqESlcYT9s9b1nOKMaN0llCwvOu1Y62YQ6rWo9De1XCV6ZBklAn7F0/dEyyKz1FoJWgdpPnC+OgJq87yeNuJSOC/ARL2wpX+OB6HEYMNlFKRVdovp7yFyW0FLFqEV6eI0KDkQvv4+nqMjzOYSSY5v7EsjHiFTwBF55p3IicDSrjxGeEcwyDk7n9OWaHU5ez2nBVQS/HAoLHBMwN3w1UzNdh5Swt/RVT61E2x2deKpMcu5WwOPLN3wjLW3ygzm2eIaRHDTCIg3atWoyCvkVICj93ioOmEpHDRglYYXxQfurm7avVl1FcrhEVQGyEfP+vLJwr2zit8TP8UzBVx+C8+ZI5exziUW6YSmcDimxeQ2ndn55Orz+ByIIVT1e2uwd86xGP0B9KKhlmBsAAPRU0WAa7X2/y5lOlf8lflkD2cTvM18CCuJSvdW5D9XSrVp7UpGp1qa3nKVcUUj3oeCONoaedcKuZyl9h0Y5UYLkhtAZqtP+zz+Ob6AHfZ+eu5Tfv9AgVQ6VTqkoWH46hKAAJWpggz6CjVRRQRmaskHSMmkvgK/DkijQUAAfUi2w0qKlNclKWJvyRnkMVazSO3OtXxpV5QLJP3shmePWoVBKDxinNyUfoFEQYDJ7BT0ACSa7CgL5+E+fIP3lR3D5KFyDXOVkUQdCmp12Z+UOFJwizU6UHGUj4IJ3AudEEjBgFb0cZEG2xqo+re3tan8yIpsE4MSaMrZyjfJFMW0j6Y6W6D8YYwIG0IbkwkJy7p00j+nzB3wjL5X2TnVpJKX2oA48pSSkpSggk3Yr37TYVD/ulMJolnCm0RbKNJv1IbgojiTUaZZOuPxjyBR7T/XEVePhXSXX36Ow0qDgiORXYB2fAsUljbj2vFEGrT48kb/+fHjdDz4r+NG7/p4tchCBjA+49UI3C/k7DRkFAf3m3l3cdglePEKqSMjUvCIp3YM4t0iQRumCf1TGjLueCxOWmxjyP+tWvSL6pbe32eDboI5JnSSqTLam9/kmL5FacLkxjll2/UVZEo8WswVSkEZcOyqR93LrmWMx50KZuZtxuo7N+UXZ8ASG60TCnFgsC2WjVAJigIKJzIOrctWKk0kJrdhgFkdJO6QFJRiQtug7lx7CGHaUvFe8jUr1rQQyMfPAkDZLgKpU7UgCgVQSekKYBpQkEJVUDwZM9US5iGoByndREDwnq25NRZy+88vvmJ6eSYioFBmXaCWrPCmRFmTFKxCbyhJFV/0DJeaaSBIJpoy7CSpCr4I4kH7nsoYw+17NjHvlE7t6tQi1cZMvNqgQqowjKrtNOIPf17nKjT7MznpgzltPDGdpVOCFKT9dOcJTKtjqIe/bZTHnI4+VrcLuW5D5G+g+RmRy6Gk5ylyvKV5EFeXB6SHhHuG3L5h++JjSx0coHX4odQtn+nL8JNZm1uxZ01xXuCg47lpQzlvu7Cp8hyQDKhbXKAITdYOCTaZ4+GgAaIX9iH4OFpW/y1m1heNk0BxlERgQvPvzj47ZWB09FVGQ2V8C6Ta9uMh9C4280QtCYGJsCqyJcpHzcQSg8Mhg7OffP79M1VrqO0CAC79mXZhB8K04MKnAe4GfQ0/AdwM2pz8kJ9U/cRJyvk/dn5JJEwpbHvmrAGQQo6rTWu5i3bILZ9RlfE+kqizDE0kxObc0ryyQGYWIlPOLViSVLz0u1xdIjIks9QWyiEjIiL9LXUDRcBIaB4pyZZUV6AZ2Ji3Epe4Ij4nte8pzVvEOEBwcqrQ9t3DIGxViloA3xwWTz/p37keUjPZGrobqIioZnol5JV87cbkjVt2KChEvnuFCEiEj8qBIpANIbi4vRneZ3lKXduLnGaAOHSsdLw3q5m8i839N/B0vCNUts4RIQqrBJU+EjieSgb39ZQBjUPYLcM560su5W5wW3lQNYNrZcg4mpk8I8i09KIu5OVKC3LKK7xEGgAPvRUCKK8NLSkFTcMMFUIO+Fr0RFEJ108ohcRGWEh6oThVdkjIzwMW3F0z//vejrtcvTmvJx8FydJBvA9NhKDyIq8YpETvQuXBO/zjkBgzwCeNQgdaC1wHAFOsrD4EzAWlOZlosU+CIQ+srH934JWBLgdFgYk6FwrtAKA3KurAe8qk9Who0nrlUyGUBKje0aMP5bp4JqUytBJooZs+HKbXlL4dElyE6ohM85Ii0HRyfQeJAX+Oy0ozsUBzxlvQF5GxzT/QO8ICQxk+CrdEZys0oChcUicn2Rcc7QfLjmEWNwFxqcpctzgs8mjoxh2OCje4gwKV0yUojGbm9J9lHqcXJz/cwd1nGGOITHc/Pn4+zxgVa94eXTEZ4hzQ2Uho1ovZ4IW81ORf3uYoJMQpqMJH3ArjeledN6U+gUuK2vNXD7K9l2HjOlgHZBQJqjNaVggImIgVY5DvPXOCbSm0bFHpnl9GllhPwvWJHbYpc/POPvnRNN+AxpbP88bVBczJjqUVd8HnCMhCUNCCkI6RabJbBk8Y6u+DXC9VEkrVX8Z6k2qGbw/vgHR9X+Dl1/rlqBVKoMMtGKbULBNNXyk/P/r8I1+eSJTkEqnzu339/UMepCZdiDlzuFltMeSD7B4y8JBiwJlgQwdN5YX+7gQ0FOeH4VNQ1y+1BhU8iCeeHGOHoAGaSdyyTDmpZKRia0UHBF08HpOop6pxyY8uBJoqB76TEYSM0uF//+z9OVVkoeCQQZJfM6hxpGaEZg7LSFu3r9ZxCot1SUQGGs12AifwqQcQyzAakWpyXCl68eeECW0Gx4FNi0+uS4hjSii3VTUgCk+kSJUNTZd2WDSxaB00Lnk6cA65Eb1iOlOqHZPoJUTkassb96YdXA/EHKJ1jw+iy2mOmGmggRWpzylkQ38OPogCtYpoIMhcHnugDDo/jnOukpEgJxKMmISTD34Ge8VA6ZL7PW0Wow8m2ot8TysBAEyii/JJL57YuYlkHHpixbwnPyR75lx/6AQ9tDEAZT8zAcUSjqY0XyjTNp3TmE4lL4BmwuMLq+ahRHig5BipVVS3ZymsF4CdVNWH4LFIivF9AQP22CCOX7kmpLgyASoQd1lhMC08uB3AjvUzl1jeQiCjG9sl//vkjpH/72Qd4uFNaXl6wRnE9OwjlEEPt8x5AUS2BqH2I8m3QQ42JUhGxmvoKrQZcmIkWnTYSfYGEYRhTDdSBVinDo3SEz6DisIn5+4VrgEqEAploJAateFdCSjk5jy9IzADSHcTWfyxbfzwe2C4ztq0ZxfH/0/a2W5YkSW6YoWqXpJbSkjzS0fu/nY7+iDM7H/2ZAXVm3gg3g8E8IrubNaenq6syb94b4eFuBsAADixXiUC98cFwlxFmfur6+w0YODWxEZbAtiOH1/veZIoy+rOmoL1lzTbYVhlp2IAPzttWTfP0/NrJrmmAgFsQZ2iGvgQ6hWHA6EETyjVya2jcnDYHZXzVw2RKLwpjomvybJ96xuHB7P7ffuCKoNWmtEWAZ9cKyjbHpSO+vvr1/S+lmmOEqPNZG/rcq24W8PLNAsBd8XGB6CEKOvAhIKpS35cvUktXWodsiUkffwatyqURJ5FZL0VQlVPS0vSVsIVYRm2m2qJsJPW40DGmGzyWQ6P8YKPII8HO+LSYxLMXkRRFccaN3tf++2jLe2pLwZRuGsxHexvuUwvbZ+PX5/2hZ6DzbpgyraegtvCqhjYCvAPNY1YzXKPP7nlWVS18I48boJemABkBmhtw666ympqoGNJhnsbruut4q3YZFqsbRYu7CYSQmiKb0nLvLUIVtOn74T2oFA/qj/f/fjsQ378dBRhu45W8cyHqpypbc1N/D3Iow4TJl+g/koOKwp/z6lDiRm5QxtnD+BrVC95LLppbQbM3sL+vqREG5a9YCTG698PWL9LsbYx9X/sE0eITZSG7Bdad2yIHgCXvN/ps0yTiUWqWAsyYtfN2PIeAvj39wjc+IwD/jF9P1BCtT757IQUl0h9TGzGkubcBuWT6unZzNhGv1svDxiaFTzUwnib5z3C36HlPLzjPjohm+j+mveSmYMxWz4UrdN5ONZPi8pZbEp7bke+MKJsdohrJEAPCNCyqy8smfTnDeB5Q7D8eVW4GHLih1TifEpe/wfVe9D3Lv0c39jQX2hfvAFpmVRfre7nW6VBc5pnTPJd6/txG+mYAXcDL7XO8KwJlzcM859P56OopuCLTNfXDdf1qlCCfZnrJnrez5P8jaRbluTDXevLP+BIrB9OUyBmAD9Ay4i//OOZmqNwiDo+ooj113GVFysYMfSIv3vWfJ2C4GlH0z/d6X3ArzxjplBGVZraat71UpsEjaCjvi+U9Qx6Wy5QV1WgBZR9B+znv4zHn6xWQDp9A+uffQ95aDxEP67ByJrWkC0oUpJYNfbhZ9ueex95gwj7E57urB8h7U8B05B3p6z7+B6b7tXY25uIZ6YwkX/Pfn/98/Pdv//wlG9BT2LW8zz2cYymfnabe+OJ+jE3p0orrYelb/7abUsgep6axtmfF8J7vPi83+08+d0udwer7RJoPJfstH1xsDu/d3WtwPdZkB4+sYSjvUJsBXDEEEaM+ursWgJjPRHKuG3ONNNX0Ed3DD7t7qteYmz/b3Nu3y/SnjlQsQJ2yDzIxaCybMBP0HGVXye/pPCuQmk90j7rcQF0X8fTR0xN1V/hUiiHXDcRwPTmDfK78eVrCHK7mRt/v6PpIMVOhA4bNos1Tque+DAyb1p+ULcypDxweY7h2wNTMDqCZ9tZG8N54R33Fw+MLCo97scDdvP/vuegh4EYBPcSPYudLYVMmVNL4AInhZiynyJQ3zPYEfBTPF+4P64ibfOthhlYJtIlJnUygmj+L8alxD3N/r7xmrfOWRkFVHfVEdtgcLo6x4ac0yPuLhS1epRTO8fxvfAB/rvGbnJ4zagl4M9NJ3oUwBrsP2Jcns8ZfiSZWhms3g1dejzfPEb4mQNINcQK4wM7Q3I1pjEQ7TfUm0W75YuDukL1xCZ7Iaz5MktJJrBa1bm4esd/Dy17CzUTAzU3cGYvipqG6ay4a0zjIQd7/9T//wcsUz/5corL4xoj5MiXFjmpEKQKRFgteb/SKtfvW19e6l10Gts4+dNorbdSlVMwsIJliuc9/11MJBUlfIyKMsNLIrgZLTvq2oWCMEp5X0X4NkSD/HD9GlDcHNvlyp0xQImvPS8R09nTUjGEMsc57YpQfbPSW04uv86W+BtN4zzpo2qx4ej2K58n5Uw7ZD378JeKfPzH+7T/D+vlE3MSDRk+LepJQggFYHgkvsch5wk5OJEsDMXY1Dvs5beNdNwfnSPa410B/P5MPXrnHvOl5jP+iM0jV5KtyzvHryRu7++2Mu+/ilsfaeKOSoCENiD2Ruh39wU1d45rim77GvU+NjHfjB+/39Dh++7/vGarAa9/jKymRl8KQhT5PZtLjVTOddT5c2W8YyQs+4XiET3NQtGsHr9cleu31u+Y7dLxD1j0NAQf2PYl2j/8CCMGbGiePqrKvhaaUuRl/cvvgtFfxq9dxWEI0fnNtPEemaVsfRLdCBIz6swGPdwSlIobn2sdVjPmL1Z31ru+B2J2QpVfVXGIVHhXXeWIxHOiwH14FHdEvtkbsTHDU+eCtQgDSOyQHezJ6uF9/5Fvhl03fsCRprhk6JbbNxcKcsnhJebWSfpZskOKceMPImLGkuyqgAVHJFM+jN/VDXtcrweqqMhlrknSaZ98R3+B//u4d+LObnCik2/MPP7N8sWohJkGCWNu9EsM9wKbwYAvUGVN7WrHB7YizBQ/pNmtTXG/7ZnZWb9c125GizRhO3nCPEMm1AHwNnEo/zEk1Nbo2MKQecwDPBmANm/EiDOzhWOyxsuijeekWYekWONPXuD1nt+5s4xM9BaixbAaF+/lXxt9/ODqzele4m5tFTWIpnmOfoIo15UVm4F6N6oG+x4cfV1xGzGsKGLrR6PwxXkx/cl5viPflJH+eXiiAAEcToQk8QkqVgFk2mOeUWI1WL+NZylmmn4GVEXQL9nS8Z4q5YUmboYAfURFO0xEybay20crsZ7n1ThuZqh3USr9kAhX1Fa9j8TgBrEsFIKarr1/vRvT/5T99j28bTzVg3veHfuW++fX41p6KjZnAiXjoCwEPnLTUMH6RqHPjy7uxbz5PlrSe1Q7Qn77RjMNMViW7IIp2nnAeCdfG36pHjZ8Jdd/fxLdavHQ3trKpp8YziF11facc2BacjmQwMTzO/F99EN//7l1t7IDjOs722i/BcjFRIlvO/mmzbzafJx1j0e9Fc6OgldwPFqE1aHFfmIRJoLm7HwZAc88k5sf8tj7a0SDt08P7xe0ADbqHZ/e+ME7gbEfc3LkG0w+0pK8d630ImDoA2ceNH+fZU71jFN8fzKs8Mi19LxL/37+83SPYA6KrjWBgM2fd5C2v4lCQShhbmv6CXxUuZZuzKcqhOubmRp2JEgF2PhSR4JBqgwds9JKTnfHNLosbDv9RUggGVkeLujuWuxBkyZbIzVRbt1PnuO/uV51pp8BPDfJ/Xd9V3LtOmfHXH75/jnfdeB1Yf7zNClXwo7Fo2D97VsigKTKT+emN4WUjNcMXUO7DOZYQeLbWWjzarhF/YN5519/apBd3f4Vla5n3eP4zd2xTbD63uwHTGpjMLx8FVYmvbwNgDar4ZZXfjfouYgZQwrAFik3kvev/+Z9H/PzL/T6zvf7VcdSC5ZB84QZ9J8UE2prpNwzpjYBrk0F6yChJKzEmU61xlqZU2xjKljhvewudwdzstfWVNXJLlg0z+K8iJxWHbuzFeen76neBN7w16lNlAKWyJmAad0XFUSpSpuqeF0HgZ8CDPSFD78m7u/1pYPrVa8+7v4RnVV3je8O3tGZoCyLcdCYjgDN9aNfQD+lst5djuBaj98hAkmgt1cw0h/qaQzmpUe+xiazNZ4H6DEyECO9EcJzJD8ag3FCSAHPjNaWM3oIqN3vTaDC5Kc6mn9c8zaQZBytx9v23P/j3/1JtPNHSRGJw0husmWkkW0T6qxp5ig2wnBck7abvWKLfZcv5ZFn58Vx84dmd9jY959DB07tajzugRGqj9tw+IW7ke/BkOURYMp2/50bs7oMa+fILCUKvX//3f/sW//ov95X2Y4XHkwOobCpH2FjMdmCxlmHFyfaaeZIHi+xIYtvdElOFIXcbqOxYKUz3Lr8s35dTQHBlFVcZK+QJWzPEGaUlXdIIZM5wctCvGnbk6CCk10Zt/zFs6VMD2p4TVS9ssAoaVqozuRAmrUJSz8qyCiddvwdlXn3dp/crcZwyYkASDD7v8NsxM5LNQyCejWc5o8zW195FUrvkHvaGgKpQ5BBIY95sIQlkBu+Q+Ko7ObQ74FUyWNg82n7FzvlZL6lhL9JCOKTgg2HMzvnlScZ8e68ELNBrABNg5ECQaT+2P1zZCslRJ3phqN4jCmiyjwJb0mpXPGAyNXwSaz0Uhxju+z9/ZPz0M2eA8DwDxK+Eaext7btYc8lYTPo5InLtGMhAOhZgUQ4+pn0/rr07ZNyvjiWJX70DnuyIXDU2JTR/BGb/YVo/qX23KUW0uI0skbHgj6FxmPBwy1RFB8IyDcUyxo7kgJGvggFF5Oy3BBZ2ICvMm5q1/mwvXO81GKWOuOoi6J4GA+18/vqPfx7xX//z9w927Ettxk3kKPGgO3RkmLueT0z2MNWUvum5ZWgRw/o2Z9FDRQjHjWfTzGMGljiZYqKP9um5YiYSGkA2PU/6szl5MW2IzJ0xaa5HDuxrHve+aN5LM0o3YNuNcHRUcTRfmEfxLfd71enjhKimjec3vxHp6Ue32ia2ZuoZwKYU59cewdqNUjZmjlepsl6X8h0btNQmmZjEqynjFrGNfdb6cEoJecJKqRUh4/eZ807rIEzL6D4uwu8R21owhsjfm5kW8mvXKIbr0cgoZ8Qd+72vYRS/fc2/Pnhbj0xLP5q8weWJziQxZAegmMkUs8RkgPM6sKtZIaWQRioBNQcEm40Fa5MDahxgcsWNmML4UJrmT+McfP7zapCZIgU/FB9MYzMIY3+3s11F2no8BEdHRZDm8Klmc0jSX24cdMRz6HWNWA1b6U2XMD1ICJHLJkBCtVHJqRJcjQTHChNDV2TYL9kWznnHT6VOKvvT177PTDpTzfLfzqTTPBLZwMh5omBz0LrCWt/PLR1xx9anwsS5I5PG7EuMlsA5WGWMAYxuQsUYPa3umbphs28/R5H5Ic3EgQ7Dljc68mvnRwE7aJr12N1b7kF+916o2ybnArKYaoZnn+KhWdj03ux6TlsTHZuBG0BIzp//7+8s1xwvXP48g0pt9zJmO0cXoW7zCddn+Id4jaMsIOE88z5GD4iyBzY7JZciYufbX4DEaQ4H2SdeHyDZZK5alMueDoh8NRIwL2uIbGoxq/qABzqimJ5iNj9LANs349x+lyoGORU0xU2uRos9vAr+koCwIhmzcTbdZ5iIVYbvuE4/FZ7XBfW1XjXF9XtZ6Ne+RZT3Rdn81Mz6r//k74u234wOTODvbq+fgOz9ApkZxcefR89cRp8dV3YC9Qy/+6h3MevM5yeieTfghr0tYEd0UB7TA4Jc2+0BgFIHTIbo4Y0481+qR8V4jZxf3O6AHc7BVqbgd4B7Msnm3hMkNAAx14Db8zndF62vdUM7kpsmSr4YEnMOexPANaoPsgD5/XscohUPHu5qqgxGXQDqp5d7n10u6y4qB+aaDVvytk6Le5WB1kMtNR3P6yEN0mhpJnL+ucCEa7w69uDHxsJx+xzQgDulRxj2ASaPROY9R0xcacjPJ2/w7e3Zo/xI4eFMQcq89iYvsIhcOeSTmZBrlN/7Nh/tQWSKnZOiUWA9ZhQTynzkMZPM9wgdapxBNZ5pPcSZjVnvCy6zTiWsOjOMOhCDLRadfmZ5GJmAGPcgL7q3GOgB80IcZjnLtWSCcThgxJlNzNeVsgqgOmxrBRuhjiqs8CHycC/EEG5djVf8ETwojc0GMkTY0YBAkzJkSgoK99GrEnEEPRyQAYMA76Rwzi8jknGvJTjS37vEn6mmHqWFvG9+CqKMhwAJhvN709hPoxDFvJYzaOI8TzTIwkXrjrPjJo1lUlTo/YZZZ7uDMKjPby1cR3Nbx7QZ+e+uh5yet/PP3307fnlbp/EJdkCROVRnpHxGII2NLJvJBJNLV3ECGUfelbC8GSaGc8Qljbw5ovuVKMtKyD0eZm2bP4yCF1QwAw0wqDed3dejpMgu89bmNQC/t5bPMszwK6i3IxXrfqzGKVhJNSfokdzRixmgGG5bryY7ZpB1M0ulQe1+kqT84/fHWcckdjaN/65bkM/Pvhe8f+k/fjw+Rlu+f8MOx7DNKKeGJIY43QEk3u6jbjyG9jI+Utc5dv7urG779YMxnB17bMdqVFFprtuOlFImuCk8pveBTgKE2Xd2pp83t6Ez4wpo0YNXdEbON34Nt6mzRra/XfMPPFZajbAZJdtaATzAXvK6ej/SvreOJdoAt875MA1513E+3iCJ91BAHcNOr31tU1Jfp8IcyacIZmR1l4maxeHcKCy4QwI2n5q1bZrxIFGQqHph513Xol1N/QZTtyc7qvvPLIAKbpQUjRsbjOu52dtumxr2685BLe6e/adJLQ9HWjg/oOwGgOLjJsCDSwDoAALTVfNeCN1XlqWRnjav5FT8+m92HqSbh8kbh1Q1dSOfJ8lQzDYFFrsuYJqRu4oYdNa3jW2snQY81Sji4EGmgnt+4nOG96musE2H5sOzF1TnXyB1fV0GWfWh2VAuxgbAZfSm2fYpgxv5+1+GeLoDRAtujF8P2MKtjY9sTAyQGiBbLbgife7rvem/rBMaf4T2+uysMEWtgQcN/tPiIxxjGx78wKY6PjjMCA+JTZNpZjM1vYmi3HmJbNJBrUzP+Z80TESzyuXwavfQAHLjKIkYZrUwiYjmym3vU/QRuKnwbMWhzigbkOcJ1joVFO/JLFblY010WI2EUzdS4OvzTR1nEddpSY341jx6YAD0ODj1Rx0tooyaRfeWe0TQAS1d1zq8zylcfb+FjFPUQq27zTGymSkbXK10AoshQ39KAaMgMk0OnY9GVkpoiQKm1oIdmIMZN8BuZjsbktbGpZ6xXKpMuNnFWmNFxF5Wnf7uL789H//X/wHbyriUiGmT12YUZn/adnO788I9GxsAfDTOQ28cyS80nxzGQ6LuYXcz7/atwbOb5F0XEmPjeZ2VISMrBizZvsed38UAeLn7dGzeYziWVwCS2zSVO+BrACExAZNuRHjaYidJq5Hru0a5pfXAe6qce9rbu+r4+5Gq1GSi3OaU18KE6SYpECxbfE6io4HVozUEcEWdd501rqjstqhkMajdx9T+ldQVbpr3zdiLjvje7VNfnoQxIgBmtAGbuPPoYWTU5BOGcW8Z3oKoi08QKoBOTA7XZvJeqve6z1tbwkrOTv18ZG+iKC9w8JlG8RHg8evx6GwqFwKDTC4vNNc422YuPeFMj7SD/9iG4PqukmECUtUcN8TGCx0lqnKg37XaZJ8N+BEGxhfDguLm76hW1AQb6C57gh2NOUuKEEaxZ23IknFhbGIE4682bfCsCYciv8ypAbFUOh0mWvfvTBtoFsFutlBK5rauVnY5XolBTPZP50Z9sI00VhbG+TAYRYG6b7tmZwJDid6wXWeWmb1F9ISW0KbpxugNQ7FzseT5tTXt5AmdoTn1qHO2mAw3b+bEmx+G9AXW+Ek8TlyDPY1gaNE6Rcm2mLB031ohJPXKx1wz53hHZxyMoVjQxtkd6KBn+hrbhN4IhI66YA/iEVJ8cnMwGhy7pZS+fr37FPz6JuBOY5C6Rr0KD8/Iz7ovIPl0aPtfwXukIsLD4lY9ZSTfGADmu3Grxkw5VZrzYcHEuLN9agwZ0S5yNdwam8DE9NAyOcIhSeUc8IuhocSGBl4TlRW9z2RFJj0u5YUjcRzb25g+GJVoSMLC2qwuqgR5zr53e1QlSgb05PO/+9v8/G+Mf/3eeV7cjUpuGP6pYW4AlPOUivsIRVd77grU82zR0nBqXhmzqtEq1tQ/xSleBloX0zXkgwutnJxRjsKN6kT3hrgrgkdBhlElOqAGm3jXXSnCgSFHYsM1ulX7+qwsjeSRcXDwUZnYZ8WcNLp2aJg4gHaqasz+HZzWOetIi67GRlBE6guU5RDiuLmIvy4szvOM2Pi0VeC2nv+sQPVoPPHql9jVi46s6yCZoAOgFAnnGjGNS5M+RCW/r1HU/iWXekWAAcrhwhLlW02Clj8kKrkUSQGTmBOKEj2MyofFyBziWpUMaYsUp+8NesbrqjvSQevMtOFiltEJtYaAZGDO1Jd/rsLjjXZh99oWlfGQQ+y6FocaAppOKgEmS+ZUUUaGQJ/qSCNNey64mMGT1L0fTR0A21CchUe1wECK9asfiKgVPV53nMfrGr1Ywg+28NJcw3dCrNAMbUl8vm5exPWBA4zCgp4hK3PPaEKUyvSiA0hIXTeNu/bKD6+MYTY7yuqIdbClk+ui/NE2eRXtnWk410NeimbI957AHz6lxK5hfb056viHenOI0RnDNK8Cpmxd5x1Dmfb1IwYJnGMCNYLVbHiumL0+/usaWGbrbNY3xehURNIF6sSshmjEg0sBCVGuwDOECu5MJmCYimTase+uLAkvmYQDItIa+xazQmA3ZusY4CkiFxiaBsMWuLoHT+Kszd6PDuyPLzKpa96v0bu6Ix8xRwymutOgvYzSISVsUNDCKw403V+IO+2lnnPJAWZUoMXKyd67i+7DZtSLJoLPJR7BZS1fo6FVZ3jusd9y8fRiQCgxOqTs6QU0gZAa+kDRNwzcN+mH2wMxEC+5hsljIWosSvmsTOfNZvG3MYIEjJFDQ5s3hrMGIYOh9ucoReoVswuNXFo/66/vKo9/x5a1d+MPj8YBYKTdrAQA1QSSG/b+d4Q5WOsUY7StPkrOj2o3AkITCUuzfxLP3jTMnjymg0RPp769ZEbS88TwFQIK65lcxjgHgF7X02gmLWcvNqM7mVgKAUQoRIgq7Gx/I+M03MW5TOw1bIvjz8uB4XfKn191NO5soFFbU3KuWnKVS7mKV++FKh2sMdzOfoBm7aeZXkQZX+nXjHOd6i47lbhLGw4iujPjeR6hFRIaCZHhA1xAsxzG4KzEOq0WUkx4pjuozQLPUco+T0xky4eqvDnrEpCFbkfL1ZkE4X4Oy4UR98+RVkCqgTCFOJR18zKFl76Juc/mXn729vbsMPh6SktszkN0K9mzyKmsBesmgoFRlgt5HeiX2Vr+vRvKo30wMrjJ4obh5thoCvQFwCCNfhTWR+TPemJnZoZcG0/Pe3UTkjot7eIxliFpBSdeZSVosl5kdEWFI1gGfE3yEer/XiP+lpJGT0cZMeKANqd1AyOFuFIUoHBJ0mogy6xxbURrHZ0/g8lQby3od/lgdNC7PNSOfXAmixMj22SNuGHSHKvtmqnYKA1M811iFbFnfpwjvNb64NyENcZkMhjVx1tSQqyiYmPMGfQjSPn9HbGcnaEFU9zIawXs412zJTcFm+jVy4nfAQIbLxjckXiqKAk/XmMz2TGYhz6Zk5VGFaaT2LG9GhF8fu3ffkjqjgKGiSREqcF8vKMWBCyxrkmvcSVhvbwplPFMNxubofw8AkCMU3vtdTiYztqoarvOVrGUz+UFoK5iF+iUB8FUQle/pMsUOhWKSIxTpiHyw450U2kQGOY3m4EpJCZsGDMrjbd453xLr320JKJV9F2m6vk9vxQUNN2uS2CEkA41/rGe5cq2XWQO2dXh6nxmutfcrPz9J8Z//61w/Jfv6OfJRj3TGrihGbTXPob9ZogyJ2cpxCNfh5tRED3L8NS7YbNH7cCJTArSgS43qS4ORG9n+BPCI/avP43yKmih9QRvrj/DjGpIOksJXYxZQdGS3TZKGT5wOnfJLnfgVFPOmjrG+ZK1loXze88/7zjgE92oTnTOEEJ/PlrtTCGS87jfAldWXDdF/9gO8tLXs48asypDahwK99HGkUfKmMIZJvXH9AwwKaIR0cAgGAJKpAtXk/4yn6Z2a2kwE9FsCy6S9vQOOwnqRKBQ8lt794oC2IS1bojQ8Uzb86ZuiHV1SEAqL8DqGnuaEJZLscG+lzZS2wstLoziIfj9MKWFWzDzcO+Crlrtb3UCbnSezCF+54Pd9THOv5LXPFIDUTDZ6fXf5yWzHGvRFhm8N3xsBN31w2dDt0hO/Bcww9fz/9SlKzVJsVzgq+/uekAyYHONLLQBdNk8SXe3ItqoEMMPO2JAACq6shzNUaSMUaIG/QGsIEaeu2K+SG2khp/yQceCUFiFTePtItPixrgzHpAJxL7Qsakq02vrzPXwfciXyhXC8OsvuC8e736VaSHEjRbesOA3F1WfiGwwq3jknfQaO/zUmcxFjEah9mc59QP2982dbaoqAE382VAV070PZ6B6U1iHAwIxbBmGYYzoo1t/+ccG3SvNq6ZepL1C7MQhiwIqQwGKy74aqjk/nMljR5nRcqzhCxvE0DxVH4sMAKOeXmmjQ4J6TkDCMUS4rrO6YzE16rg2p5TJtfaKVFpB2KrPl8D6c3QEDTCgs/PpwQxiFhBNUhOQqGwIKOoX9Cxlz2AYbcY7x+enExD1oEL56Z3NPb/1bz9sHtKYfaSezLxwIspyL8T59OeuUIwhIS7MmMcNkNqStDBbN4Y2qZzfm44Zqle5rYLG/Pr7Zx6uKYQ5j3EjIqUnaLBrxuMZuWPPFwz+Krg5SIwP0fgZHtTLO+DNfq2MtMC0AE9CRp7WQB+9F0PU3pXL19DaaBEKTGMQ7Os59zGMlFhWwSAqu5NvoovhcCmByScrv14h0zmDHaUGH3qAvv85DT9qrzFKks3ccyq4IRmbJ0DRHVNQI324CP2zv0VmV5PHWCEvSCMvYwdqxhyjlMhJvZZIhx9Wio+mNLGS3L5BiRLKMc1TMPbp1gWj+LMUHnzNjE9rh2km1KlqmdkcshpZZqkFFBHsMqkx+eP1g3KTvppRtGV7LWWaQ66dyBuXJGWbaPSH2TOjofTZU1npWkloQXe3LHqMDaWvUkxgoAGgrw9bNHA6BO9Q+BiqBURBdWlNR7EMVzM/pUYCoLNxreui6Bl5FZiL3eG6/q938vaGdg3KmIOYcGZ1B3YHnJlHyC7Teeac8ni4eNXdGAxNQT/ldbP7XM3FlGOOGTZ2T9V7qppoZl13bJ387FYXunnhG/PNu80V9CyZ+wxj859UGhOq4cyam5zcFe3sLFtusoH7azHt51PzjGnN6d/RF45bM0Q8A+q0Qf3nT4yf31ivQ+QZ2Cy55tyFhdpir+b6OBt/o5g7VR9OGUO3/odapMW/MifM1HsHPZoQ1iyME5hi0tIhaOg5x33to8zXeEWI5wWVDdqInL61pEpMGwWIYhYOUSqUvVpoZvUE0bnKFkE9sL6aeoQdO86k2tSYACApSGshWADzND6jZuV4gVDqiZOcZMIZF3WTY27N+d4VUf/t374HvsljnkdO6EHyMs7hjBrjJp2F3SAvJ/LwoTqBpsmlSazXONUdKN3uFVrwxT0pEZ7Wd7PsdgQEw3sd5iRsigSNGgc9aMCO2t7g6OWMGswh3UUaS2tDDLk1pSNTdEB+xMyy6GhyVA8xNQydiA4+IFIwTLlN4y2a+tGuJz4V+N+/ddY+/wkLMvE6qa6xuJChFtRRTabTj2xjL8UFkWh/ulSB6xy4xtdpDjtVqXHDiVIMwMszX/00Wu1lVGx0Wiwp6vqIR3VU7CCDZk1X0KkX0Ux9K0uffY1Ppl6a0XtcRvXOymdaNqy9KpqixIzi9k2m91CCRWYuhdu0H1qg2j2sk1qr4xBzIMGXAI+Dc2tEcYBsXl3X5pHACwcm2KwxpsIbae0xFQfr4VR+7ipskUxyAktyAylOwJ4LJlFJNaJwxdgBUhmy0uMMFzyeN53a5rtdOctzL4gE6QF0msFkMoQWQbsKdA+69hm2J3FHfvEvz5JcCJpEQuu1sO4bmmiL6T4iF5gliJ5VMhz5ni7VzppkQeh0+hv3jZnc8jZyrsAaOZt6soK9XlZqxjEQZt4zvMHh1Hi2QmTYRAZ1mjVRc0CJLRhoDD1DpP1uzzSeG86XYFQSOPBEP58WcOGVFXRAhvMaESZIN+vJfw87QGHnvxNdMr37POrPwx3oExvAaDo+NoaADrxwYACH5vxKZvk7rXkY0AFgnd2/gAVC3mNK2UIyIGU3KsU1ilDf+zfT5LkD3IGJzGy9i2aNrmZwEcEW7DI3oBY1azz1asyLrTNKnHk1MllACEtHwdXMJ1UGHfGQvam0QM6FoOnGsxi35qH45raZT94w2bqwCxFTDOCGTqyACeg+DWTPpw62vfQah0n1FLmPHM6Kvndy628/MP79v6Ie1zvQEf48miJkLXOHDZPPbrS79VHAZo9wZ00Yjw0DknMgJTL4wU1TPRIdkwpBvZSGNdi8KjaG4G6tT+v6MFhK3n92QALk2tMQKjb2/A7FmuKNTSoOH6o2wvhjsHVjtS7DBsRhzMDMbbqMbxNaGmC+h2+/Xczv2QmJCTRVw37MC3S2oqxjJrhsClA073mfsuoicn8f5OBrI1MYMASNLr684uCnxZF8FSOpA1PmeXm+L6NoGMJaYhHUcO7agxfK8vnayRiUYVQ5CzzKxf8CnVISJ3kRL05LX8l1I7bIYEqYezblOcdggDwdDq34pze7H4hKZNDFFMjvWMX3G8TjFvB4O3rHAIOIipFqyoo3SSjZ4PFYxdPHVxzucE1GcKxmW9c8EXDFrpZ4HbHlLo1F6gQNnJN+NKua5FyWWI7tGVSohxXaLiXZKGUIZh22vBDYXKUsX4XaBfZAu+R9kZr8tYh0CqsCGyXRZXINdAWAqVkAyrBmVgWhKjqsg6QwguyMY5QCj8UlGEp3E93V+ZUUc27aEAnD2zEwCjR2JGksoEUupgf1iMGcMi+duHG6F1Vdvg8w6GkGABpbOtT95F6oo+9zq0BFbEdMCpv4umhHeFZqGzvLaH4IWxEBhoInvZfRB1THQMx9n4CBXERy02xa9dm8xdyqVLhTWuzUj9GBOuvhsTMZhDf9K8/CJtrQGdcVseBv//nDz/z4J4a3AQcOpAtZG6IMcqQmU2ZrORV60RVgA3GZk7hbklOL8DXXD8OkJGIwSXUlLvKZ6BWL155dpLUV/OkKJQgAk/08mFR2XHswRfmglu4iJ20i5GaMxzFKEjO534t0jFubNDKcFUthukA957NHytEb6PM/jkIMpHV2iI/f4ZVO2ST2rz8c8e//9r16rO1ADM7snFNmYAhFaEDuTW06JlgM3S43YHpMkaYclBHw4DuG9zIpQWzkLzwIolgZh0XaklLCK1vcfdkRWK7BuVO3uP7EevlyywfbOHtN8LAhG+wAO58AUmEUS2FM3jkrTjno9blLhIm9VKjVnPFKavmOUj/pnaFG46RCkWIVrcqNrhxbD5CCfvmmZxU24kG8tfVLFHVWbABCsxf1Z74bnBHdROYAEohfT49GCGfgAiaaNJH21H03G1yLMbZmuV39bSYe0shijaDTt7AUiC5l5fIeMwahYPR0Nd4vW3uTpmAArrMLk7KpOF17rOL7jUnHrYdHMyylZNczWlDGAiNqogohHg86a9WaZnRDrwlNei+QkuaSGuFqD1dbbjeKDFkimliYq9kOFkO3Mn6LPpB/vL7yyNczVqGXGaXLYZ2s1zUXfGSduSJKisynaQ4k50Y/K8vD3QxwNswBBsalexKchke88kaJFctEY1JzeqQcdRA5IekLXSayuRu7MoUwO2lEzlHGmTF+wceveKwDhSm7zLVYCwnnVM4B1S4y9MFXYRtplw3P1LyTohQ55D3p3J36DXBvRDd6WdAXRvmwT+N/1f9EGQ9toDkYZzI9WFHBkjxnqPvGge7qPqVRRfQ9LibWBfNMYrDOSTaLgwdnR0uQ4VyAtzVohsWV+QH6PWmYSy4kKT4/uv4h78MMbuvcOqZYG4fHmM/z138ec5+ZxltQ1n2dYb58LYjEnEeRvyLv+VhFVea9Pvd6fqZpvP7RQdl1H9nNMcPN/2ZXxeV/MY0rMIxSAVHm+PXmY4O65b3mHEtZ7xNXagnTLDTBtojLNU979nq95dxxEhzMSG1680gpOKUAxKmIjDQi0iVQVQ78uldHUtNEXbfZKwA0BrGTQiHd+oPG80N2n6tIhlm/6ZxCrh2yIrR1V2Im9yraz/fx9vY5DhYDoGFezr9zpy6QZx5mz1XbChcTihsQ3j38cOoGRer5LEm9Nkz1vTJ8U90sVnTkRlQFkzVKs6eTvR1ur+YMNBtyvZ3hkzLSAU4MXwu5G1UdE+ragatRYo3Zw5xx+QzXravwh/AA10hQQF7HKTawuVB6fuNm3Ya3g7GGjYdykmzfk8cjkMFUsCgVomg52NHgZstRDTyZm2t9//mcZfSHJ6L5QlDO6Gl+V+vHVMH3YlrqobX38QqyyOcyxfeRKdY1n5mAk5wiWrxSJK+q0OzRGFNlQAOkpr5O42p7lAYaWIOgQFu9OOMt7Owe7GEWD9XoZp2hlKTiTrJzIPwuP5sH0bS3gMdx0DZuHDYaWjk9baVKdcBpLGvVHyCVM0RIgx5VaoK1S+YZ7RzZVSu9MNvLcpFVLSVLOft6aC5wAktdkj3vGCUQoMhVyT5QTVa5lOlCfKRsjQammYso8trJ5AcbNgG14alKgxTXm2eQCQGCmH1wVrJsiHURVrFfD2yI3DdVUeiaGrcDg6+NJOdbc5nEnhfrTZiCWJjN2rMhDS+GpnliioRRys1iacpNExOpeMZOITCs9KlQbVLlxkDWcXV9L7bpZn1UYyh4yM58kf1r3GdkiHO+MY11T7/z1CD2NUx+zYP1uXPAjr0P7AUFNl+Ldmjf/5zQZznmZJxScEoRAvpCkQJyTEqV29n7qCqHXXwjTYrm+8H3br6Yt6r3P1OPhoOMQ88wyxQtxcL1zzUumbbvozuO22fK6A2q6sr4WOUDnqnqTgjWkfd9E//oVDtFt4FU+gLBZhGqoOnrTG6bleyjIeonpnjCdBNPACqDZ1CWTL62va/rrBCqJMlSkdBiQBjQ8/ryJDtez/RRTrZ6DrxSJYj+HAflkhhQG3IAaLswmS+ypAmUMMluj1rq0DzW5WfK/uOHZCKrqRpMaY/xrBNGPD9/xv1PDwvMZ4eOFbafdeMSiTvgmf3nw22G5j1mL0jEPaj7iEmFB1ims3H3eZR9nbguPHg7204eG09q1Jow7s7NiVSISjA4gucOn+AQYRzx4JpqSR/RQsEcGaZ/rtPyGQw6WHumsiZzEiSX50Op7VGBElc3s8yVLvYKwZLS6NEfQeKUAURvkuGAAHulMdiMwmpGmFM1lTUB0lk7xOKOGwh6Go6MWNZlRANLRbJf0HAPHSMSkh4UZN7vfCyRFHrVho1EdzjxWLHrGCyBHgsbWD4k19/LCCJzKtCuEJZe6u24Zw6/rPDYphFENWpURFlVALAwM8bgkrUaT7SLiQXqYIFv5rPx18m2ifyLSUERzL5s1+JjbpCPm6qd6B4j52wvl8cHp7xOZfQQYwBRPkkuJ3CwulhAhFrQ8rs/6OMGn/aqI614pk7sXMTQnDJUZBKTtPjarGvw7cLLULrLdSBgrZPU0WTJVk1neOGdZFMn/XqYppiiPKDxWGAvjuOmUR1VGCFNqWmCnY9DIoIrg3LHLEjx5MB4feRSaEGPvnSPe3j/D2fIupWXTkURe6ydTU8ZGve8VjGxbjfyaeiRwb7dFdaJnqksX+cYSmGPnHeMw5jJ2QkbE5gUm/AZlXnLOpj8TaDNAOdIQMf6nr/+9uNRitsjXTeqgdxQwyhwQ/PBqSkDmyqYSUEBPc8QlTOSDM4MFp8qCFafZukHfRWfAmRe45JIzTLNuuXlmRVcLCEKW7S8sT7YwjRmtyJls8oCUv9+/uZbVKC6jOmlBYAWY7tQyRoRz1ajXZGK5zVHAgzIgWpee1kBgFCBeG1idia8x0SECQ8XRZESrdvKY6DZYFsjbXckdE7eyX/548+MX956GTx5U+2kB3cpVm7OfptuFfuYUqqnSBiD34foxjiWiX5OcvhgpNmT2eur2ybaAMhkjIP0Za/nzWfDQE5MCo+B/WzG9u4cTwTgEUOAww2Y0th7AZnwBaPrm+kaa6yu43owhAL1nM6E0IYcV/ZbazatTY4S452TFlMzmX0rkNm6/jCxWXci3XNeRCGHWs1SQZyvxZP78RQYpVwBRzxQ65E2tFJBGkIpCi6VfVKtZCKUeT4XbMQMh5lhRv5aHcWc4g/cXpnnRlbxk8Ey2GpX5eEyF1ZSMisZxqyKOXsvduaTZRGwLg83wsFhTbD++wHe8dDDY3NyWTyIciDH4AXQhrUrWkj0sNfMoPl5W7VRSzId0iCGJ3CBnl3PapJQzWXQJd+cxH/VOug0E0J2x2KO/lveuudIDMUw4fT4wOZ4LqMc1yGN8BERFNsbVHl82iObidMg4/scV/EbnSboNMAyS3KZsETIFlAg8D4QU0BkyrJDxKQ+UgDoyPPVR1UK4ZyNPmNbnHkW/ciH815opSpNkZFADkwReup6nzb87LsxFXV3suGpGYVJOCiv6/fzalC6iWTdJrCEjyp1BrnOM+IrjXV5vDh8RqPIgFHLYKOC0CQPLeR1rUxmlhDvKPcYjKi6eV1gz0biSZECAWSE+N/FCWvDcX6Ov/6D5bmxQBn6n08GqcPW0O4zXFpAOFnt8gKBmMoV8AJqSlMvyDUOCFl4wpSFTfthY8fU/Dgv2HNcJKfZQHhBJG8rCMgT5rnrDUE2FOUVjXuaz601XJNZznhysKPp2bYvMpCNPtahNxp05syJQXz/7bd10Xh0nxRGZ1KxTaHSIrNHPTH8xo4UUenMTmkqx+Ytld7U3/7J+B//O269TeBq7Lh5+IfEF+vPM/hocOR8I9TqJdxrSowpzQwHNeFs8uswFXkOHwxu4sTdXjQw/zSExwS4q3di3lIcN8dNnX+4sc1NsNVkVh4DmHB77jqiYzoP6Q3OYZnoTu7s/pwxRE9PZ5Pzh8FqFseUnwEsofUueMWEtgCI1Nfkvyu+i8pCx/oe5mSVaBcSrPQjDGHa6lIKAOAkqxGmuX/wS8xrnPHwGUJR23ekZ7vvnzB2B9DUgXRGFZyBFa6G1asgmZVG7T1brwxRgbLnpis8IffAEcdsm5Qk9Jx9N5LtdzIJEudIv2mVZ5hzAqVA9qUuntKX+CeNtJD3TCaFxXJqjhUHGkYrFkZZuRZYTxRGQxPrtDNuFSmVC4PIi6wMYRV8OFNBTEELrxopcUZcKSGMTD+u6jTPYwHdphnwUuP8ZkqMdoHEPCVwXQtUGRJ2kCo2B+9AA9uHIjZ59tFR+ylOFAOTQTeawW7IZlUIXJJ4JhMla0QIH+VmCzNu/n4zw1uWzIYdceoJ4t4MLr83xgOA0/w9nIHdrjAoh2KfAYYBU8IoCNqlpwRCuYJrA55M7Fv7O8ysmQUBOolrwY4CbMnvJxUGOLMoo0x6MhiVgtWxf5OaYPJ9wSQlFjUg+KzkyV4AP/7K+OmXmGXdMD2kkb+7j4U79he9hoO9r32j7Ald60UuXwxZt6iDDW1PVjZex3ZWTCouJeBVbmKpIaAlhtxD6LwwUMsVpNfG6eUBKxEgMNw3JuXxOhNPbw4g3ciUoKNRwRlMV0M6uHl9KU+zwXh8w8csC654dNOsRpelXwValCN/bZT0uw4aUpB1QTp3n1YU1yiPS1eiOW/f//X3H3m7b7iidEvJPvAuKDGy3ADeT3qfWpf7UQv0yHc95BB7ryXEcN5hkiXs92GGP98G64ntOa4jrm7fssaQolqZVBOqOKCdeR/OUt6csYjtOI5Lf3GAyc5AXT9I8/PamYnfrQWXGiTkR+Ps1HA99gzCkfspJ3WKXuSwjTpAAgFSyguSmuH1urxGwtfIII20i5HU8K8z5joK9AMibld3uTfiO8dcwzk/NnLZDSQjcjdPxMGFjdlFO7f5kE2COaFtDXcQvvChYxthxoCip6lc5AXQwdTomxCRTsXkmwhlzvLsIjIBnohs6kiOeTaFkMk8fwE5UpFfBDJhYpl3z8EfATzenlacBskhaCaI6rO55uuQ5nvzn1P+3mxGziTg9MAQ6Fw0BduIOpU64UImq1tVTUgxp+NVcCS51GXWGaVovbwtznlqJk1KUQDUKbDzfbGwIawGjslUbw1Jzt0ZSvNEnwRBs3nnSzDIkVxR9GRutkVwss5O8wYYJo2BYhg/pPT6x6Z4g5qDci7ixqbW+Xc425H0fYeZU92BfGrgGeH9G7QOgHnGaMwp3fgZFMQw13+Khp0ArWIW5uSyCsSpGoHDOuQmEYTPqksgWjSqrhUFJ4/o3kfYoLSwwKFh9xzjOCAVnGolfc1pZn5YeBwSafTzjHJVzFv8tMT/9g/W8Sd3TMgCbONOOho3rLVD3muzgmYH3qpxKpIxdTLaTgUkcyR7gUVYu2WUmmQs2hdAl5QBEO95aEEqo5KXSuw8s6aFAe/7dIEUC2hBipiBO4giJ2sto1gm5rCFpyNzZ2ushvnPAsXA9LznzVf2/I7TkDWP7b6barPbgZc9D1UtkGfxs1x+avCWjHo1IxEhLmYoc9OHSXgjzHk6NK7vY5xn0tHunJ5MTO04HPfohQO5MyC03S9c/wq/D+g3Ok8FCr7UXn8ieG7+mTy4YjiXKWbVLsbVEQWHgGquJ56A+1CQjr5MZHQ/r1xL0XhncedvQ3NmOdNxdICZuC8kd6Nmzsr/jgQmZ48QDmPNebRN722u0yH3tJBM8ibfuCBs2r1jad0zMNGDDHzTbzjZAmogj7sUwO3zfFlnItJzxQqek1czzpi964qQ8RNz3pJMdUylQtdZeUIOBWWaWUMaD+Gxvq/4WBVansZorKpi4GbSaBDX17VjAghKpo7UFPn5PKKGiBznWkheXY0Tv0b8szoS6SyefKem+jXHGtc1DLLX9+dnAbq59O8EPG5HWk7TUovwu+gqJ7uH8TCweXzWAqX9Hjm+p7H2tcJSSRlJQVWRmC3Ny+mOiZcvfykwl/V6KSYlWoJN25DQ02CJv70YnFTsnjkqRxdeGQURk8xt3YjPf4kk2mzvOXoQKssys4WcmuWQ5nWS1JpYy8KSSKjKYdgk7qhYzmx2w1DEZ+BNZnGQGlT1AThu5Pd2xIeeWbzx62lFZpNp7gAN+tEUlbzaEZAw/haTQECu8ZSM0BQAN4qQb3dsH02crSgmzqKjRQOr94KZvNMiHuFVFXcKCJjrFIb4UCCNGsG3+YyuWMOAyu3Yq3yNOLG7Zk00zC0DhRjOMPpUhSyDLHLl1xf/x4+sPbp5o0okfXztN1NQTSyduQ5TQ4BGAhj6+fUZvsmi6MaSSKkmaOqKyXS6AohpzDOPj16zwyfQvpSGnYlL5m5DxHSGHwClGlSqVwGIz/WBlex1tvUFiGFh15jGgzqjitptFPUQ6xKDJF5FPX8V5L9Sx+RrD80EZW/4mwr2MMqAxKgd6Q0e6WGm+KloJF32tJjENUyqkSMxeP/47Xn63/4TtiCHVfphYMhv9phWZw7jfxwPJNHn8kGM6oCiWKWOA/NzT8SNis6de+h7eRtxgZSS6ECJgu1TrLzGhnOTUDISVS7GfkjcsorAtL/Z9TgZd8voIsdiaA9wcKNi5DY7OLpPySa9sNQGAjrlOjLuzlwZfdEUmg9j5fdIzu/OfHTtrRrvydagRbH85PCE0rBGnGxGZbExHdz1uUIdUdflr9HYZj3k56/T3LPxrttFW/a7zDaxSLxRr2XevNKMFfOHAa/kxH6f1Bw0jaCc4yip6cIAV7Vo4mzaALV3hRh3RxuBzOEfUfrXYe+W3n8tCTb/PeS+qjWFfESQPRlpeQB4xNYUMIyYoc8hYrm17xBYasGJ4n2rNWydwTS3/XXRSlOA+rqeTq1ABDJzcvlSoAN3Zdie9kw9pbinjJgScZir6YvNyXIzNzALnT1JyOmRGLIU38msYLFABG2zg6EBiM05UeovDEAZpEGFAUS5UhtaM4R9U+58DoaXaJ/tOPoATmbroE39VE9NnkPD7DBc5aUzxZGoZqO6aSTtC5SBNs0G7HGgxZY54dBID4qD1lwigVnO3NLMtXIKedJm2CkU4Q3z6IA69H2HpvBtxSTmptlicwMwN5liErW58CMUcm6oVwWHfzt1CmcFR7YGUtBQrwdvPGI4AXYUZiCt1Xc2+j1S81rjHEeX+540gIU0YF43cediwdjntvWyAmXgoM3ZXnt1lpGLuQ2GNQxkYKPO1V4S5ev8YpTTJ2tMUU3wOgjHq/hqHer6kGI/glY4MV2PYAVLkBYyXyxQHiQtxap106xfkw8gShX9oUbNxtjNswENiONr7z2wPEIWeKBsANqacp4UCKfwSzPTpAUcasOIuj9w2NfVrjbVS+fX/eMnxv9pOuFsGbADjMamMrpQaTQ/kX2QZl+ZfJimY0dVOBgIydbIG/8Gcr6f8w+OFj8/KTPpSJ8d+mTIjGxHpylpDRyZriUbTrv9nBx8N6xSYgCfZJK7jYdZb0AFNgzBM6kkHQDETVFniQhBfTgxR2F8guj9dCZz7bOhPNKhVlrcRHBeHkQpFeWjn2EHKqpjk0tGYfdNnGh49coLbyKDCWBpc81hXQfqYh9ATrOXnSR1GbHQwx87ButFDSPB/ICAFWgIVrWj5gD5FhfKdY/IQkvXRV7NiU7/DTbfN5aeHUUlyMZol/t9EvIpSdSDu30zofPEkT1OPQ5dMqEuyz8lpaWhJm4N5Agr00Tlgq4Vl809MU+qcuPBIQvUPRTZwbz4HfAyBGXzqkWSBTFJlykSa6YCJzdieW7WSKjIFOeTI/IEviRto0iXd3oWr9lr5ICkjaxsaqoDpilKoHFFQ+P2+FcehUBlNB6N/KKnbUyzx5PKhGbDzKoDl5aCeJlCSbHX9vFhfCec+ZpuDEe67hzAAdZDDgYcss3oFA2bn3FXYMU8a7uTnOyijfvzKTUSjQM9O+DVgLBd4WVybzHRT2Ekramw0XWBqXCbvCx4QywO952xcTZn//m0dGQ/fzj9TPSU57b2cQPYTD9Hx0n2uLdXZQzP0t9+qGZoOUa2nCVX0lWSYsoMw5mgBXYznZzkpPGm+b3CMeCtwVq+FUcCuXOxUrOfWRI14AwVkEqotElosiCSGek5YvktR9UBPVaTuRxOf8MeW5fXDsz5fc1Bqx8POjqFUCVIXbAV9EE1THdeT1EXdsJoRlXW52vX71n3gD1k7lpOfRNh9DNMU7XAXA7LHPZZa7TRluRklg0Ir0MBXqKryhOcRWTED78Yj5jpvqoS7uZMb4BqCAlw4wmiJsyNS+CMOeQRAuu7leX2Aro0NQvuI7QnOrYltZgUspB1Ma3PXI/bukfOQu7uzcZzZEt+wKeYWM8jV4sZIoXwAAqn8zCDYBsiZvz84c/IkryNHhBjc3z1NTjcd3OvWlAj/f7x/pziipvFVb+jjLJEk0ggjKQs7TEam2xHna9RevobTFMYSSHIPZXWb5a5TiuGN3zMnbCeqsxzhv/I35vkebk/VNXC1T+WxEpVRCD1oGt89Ro9IVWXc6lI6BiqNjPGNjKHFEtchaYoLpYI76BPo0WZnhtkJWneiNjJMfcKlPS4PL7aPLFev/lf4+HhoteEBe1sOPrh1SNdkvlNP5jqfPlyg+/jVrh+JtPXT7OAHCmGzBLl+DoUqVF50JOT7TI17fE715IrixHN1A5BKe/oEUsDmzHH75HlAUIpkND2o+m/2yyyaagNITs2nWWMIG7GN9iLDauAiE1cpplnzzGqOjN7AjJHeGfQxtxGjWpy5hIOGKGJdsXGGOyQWV2mIoNhprEMq2ZNsaLPlTtwgkMF64oK0s9i0nif6AfGlH9q4tsQe3MvBXgON1ppevIpstXFsE5gEPDIj6ueV3dF2MBI7kAIRrN9aM2F2i7ovHSOlZ0KWE4KEMfMDpvGtvA0iq73Xx8mi6SYklWTL6bipe2rKcVK1WhtCQKtknZN0wI/RJ2BSlUwAQjMjlBM4yM5ppS9kVdQCIJarf54iXeRFIbnIjrLXTDM2BVms1THjpu64PT/aGsLrqZgwVRQ3bJKA3gVvKLwWE3AwCRChm3cPcWIkSZTv8/xzwNcMeyXJAAVXKYZa6CMYKQIP3BDpSMVwVyGtrnNIW4mrRXxSff97z/Q1GDVe4i4T2eKgSTFxkzT7RsY9gkOzXfbfpyx5m5jNQlo7tx0I6U6Fz+ZYtPtgayqihHYF+X91nB8ZyAa3eOFnO/rFN8eEWa9emAn1zt0RAi3fXKvPSdChPtl5YCUZhDLum0jbqKZ3TqS5LgnvxqxbOssTWGiiZ9mLC++5EVB1BMIUriuXO4Xs18R6hmAo4A8qfkvxO+mj8jr30zJBGeQDKqKKKmfSEOUeZSQtVa1DQwLGFLiyt2qTGoPMhPnSHuavILIkknDGrZZEVQXFSJBXrBoXH2G66hRFgeEwGdlYoM1rL5VB8W0ym/SOeZY3yXNZu6Sof6UlJY3s0PbgleYbBSjWZlLRjRHugk1bn0jeu6uv2FMqoKTfUFl3mjWTxhIv7w22+EL5wqVo51y7rHLLCcsTFz+fOqG2j4DA/r5a80Nw6zxSnqIFgM2doLRypsGsGwXr5YPB9mnu28FPJExGR4KVjUy5zvXcW3aNreoofyaRJIBpQP+fXNXDAygTzkwMEdVhgJA7nGYgA+OJP6tL4TOFbe9Bd3wEY5AGNALbj6bmqxNBTd3qR8bBUcYcCcXe9kgM0wT20xf8z3GjAO1/TbSnhz92Z26Bqti2e3Xhr3ETQE6/hn9WnDm7u/jLL++sRRsSCy8KwJXJj0aGFnA8sv0ki8J54oXbwU0N92MGFtm+jgXPOAaYyxjhNmiEhLoEZvYy7RY8sDCFcMHqp4vcYSdT6VIzbhF3dhqB6AmpMAV8eh09fJOyo70WIpF6dYKp0LKW0MCN+Q9asQOdx0Xa/n8Ubxhjd9c51QmMXLjMXNBx2YkoM2byz2g1ezXifVPI3hciQJkJZvO+up9rKWBuBEj2jD5esSwT0/e6WW/gQegQwCppvLgzX7y5JcZAXEAUJhoWZfCNZ7Z2Oy/U085jPc5gEYN5RlDmgktR+WC8+o5LmD3LiGR4e9ZcMTHpajYXCPEPIKrhJIxX6cYFxfSgJ2AU8BorNnoDWTdfQhDZsWG1HnjUJlhjduDCdy9JGRmny/xoKYQK6o81kVuTeXEGw6uZ4evswvwG9183fCKs+ls7YMgxSF5h4rVKoKsptFwB126RpkUXSPZSDWHOGWXU7miPZd6/9y3z3TQfEKDhnc1PiulAZGHORu1nulmrD3SOW56EetS07aNvvRVVYnZ9niHfpnehgNW8WXAg4dBgGnOUXhpdXaIjZS2ciW4oKOl3EVyMkJNeRgugieau7uCDSyy3OUi3LtzlPic/EDTTnijPSCQUjIDNKtAD/EBMV0e6qxwdWLOkqksn2Vz16TpzKdrDs4bshthslYAHH4IPDup+xTrCPM6mI2E8I6o+eqvt2OoNjTsRkjfUfWCeXYUX0D+L/BvuJ5Drbv1TwgTGUVZkq1Ip0eWyutsUnkwVVYdF/W9FO6j28Jca7f4LWO1MbRTWPppfKMtzhVYcWOA7pyKGE2d2ogLBgxLPHZg9vsnEmcOX4Pd86iScRi2DiVYpAG37+aKxYdG7h/CG/gxL0A4SXBS6vEcXeGAtEm8rUZX56QtNXhhvQBkZn2Y9tj6QwGtRSHrEC1290xIWdF0CEwrNW9IecQlMXtA/fm1OE8/H/151zErTcGrPiaS1pdN0E4He1moq8jLEA4qUME0xpnO4hy5mK/HtyLZT+xdiclBRZrRm+Z6RsvIE4RNhoxBxSpGKbICiiyBgjhqfK0VJqei9J05++kXdvxnYLPvVBe61LBDRu5mDjYv3cYBUK/1l5QoDoyX8Z2tjwj8OcPs2cC+Z9yx/rdnmutnBnB/VJ06sIubum4as4xZEcIHfhWtjtH9PgYQQ0CZYvwq6sUI4xM3L93xvmBn1DskiGmtNY1HH0bRcBSvoZy6wbJHZXaHJjYNo1ohBCxIwNH1Z7CoWc7DWutfpC68W/TY9ijTsudmc2BKnznPNC2uYLwNUc5pCjhkpNeCErNEw1V152IEEo3PlBBK8UjCArPQZETysLDv/ww9rxKoAsgUxARkwo96myemKu77Ys+EXPZgQ07NcymN7FjFlwGP90bPIZBHAjFyJChcIcnaw5dFKw/PCifps8BknyvPslzP7mL9PR3w+FKBHDrrwroxvCS45eF+IVrQkRj6jv4siKpZavVEXuhWsZFPBmvnoYiyYJndgjM6a94ai6x61tgvZpddLpilygUb4gCOVmgGp9wXqYAf531ZZufLaBA2UoINA0CyfK4ooFFIWcmiJLKZ7GzpVds6rYQdsIOGN8bjq8FIasPrWeMgzJDmjwaQL/v1kFp8pA1oclaP8ixvzNvCj1rmyDEFMlps+jTvbOap3WuF8ZXJ90ctBTABzvT58BEe8GF0bw6atTVF4ro0F/GqKmuCGABLRJsLtsPwm2LNgUYhjAyHuXXuQKQw19c0S+//vI+z5OP+kEPxIKoPS8rSJuubZKEnbmbuzGhGBpmO0mQxFZv4eJNnChaQm/KFChyZUToLUmBmrUnRTjBF2p776WKDPiMD2QzraHM8WOgFBWaZn5cUlTsprhD3XYUG1QL9HiKwZ9Ff5806x1YH+Cnn7uNGKuVHLMNxBW1YKOio/iqX0jOBMPSfvZzVx1S8904ORPi5QLnOyOqQKqd2mynSCNGp8qDs7R6J3nciLdXIjbbBAAWbEbltYmFah0UtOuPePVXQgR6YVRjhmnGXcAJPQOeaYpdWZizrvPLirp+kH5UuZ59idzcxkaN62AAim+yADhpF92GhUVlEDCPx4WPLXU03AR2jIliSdDjIPTiMFrnxkAKGZHVIVtQceKk3WGtq5NRHJssANEckFkCdBohfNfvlA3EB7OxutlEiF5Z3VpP9VhSNdoLcp4VyeP4tDsc6Uq1rgbn4ZmrQEW0c4PpcUK8g1MNwKNZOn6nldRFzoYcKKJWU0VMhgtOEfDDEWej963synfIy7T4BDqIl9ygonmNpmb7wxAYqCBQr3rbUviw+a84yYeLJpw3/bqzl254J5YxobkwRoR5dhgUr0upU+UNOFhCJsUNp5LnLm+zBrS8mqG9eGAfsKwTNZPLG1rlGNFc4vTPZRJQry7ixfciRshJti2pABAePI0um++FM90CEyMDT/N65mSF4FchlqwRTQe0mxE72a1nRnijnKZciuI0kzrjz5QzcAt3RKO3LAOgyV1qn9hpS4rUGkaCPcwUdB7xEUfY2DtlXW7VS9kZgLcxiU+NZ9/BhxtgltewMM7mVp8y/tzUpB08JuCpCm4X+OmhdyKw2GKPIpGlpqT+YvfKeePY2Mzxhqh1zyJ0M1zRxGIpEGBkOJzZWGFZM8+UPHPcb6PRkrMssRkBMsE0DXID03377y9tioKl7egFj14N6xbKRl9dRVXdkXyXTTSMaNZ1BVNxGV0VLYGj7xm8v8u1SAHK//qA82CrLQps3UZ0wj0GA5bloXSNXjHtXAqLUxnrfEMZD5DJPNWqV6E3X+Rm/RVUCrVuYmTmmdYCq5X99HhRKOo+9oKuQ2ly8lnXlRFkwEvsI0sdaORTEYB3fmMDkkg6QvE1QSZdqLLc2mWvqHBWI8Z5Yn9//w0+TfCJsxK5DIuiQ+BtlJulrTUNcbhNMaIABxkNVScyERwH7OJATE+gTsx9HRLVVye+9EIVGzcD90eGb+Z0PldY77KCPAyOcT42OP9NE0DYPKOwT9vDk2mJeF5OfZhNUssZKwwAXeh/ttRevHrr8gEKuilLWPDBv5WFBB9eu8cNVXDFO4pErZVJBUejeEUvleCaBSZ1W9YXVxwOlToQFQDGMxGJ6Xm7IpbaZtgKRNka2oYYpmQbFvFQVQRNjsxbM2btU4jX7pCQvAaIoFfOCZTHdQ39YZWFfUwBB/8BckcUs/SNzjPFVE7IYoBJqIyDxxjpHdzcjF/dAul7p42asZa/w2B1GnJk5F+2Ettu6jicjVwvXy23omUG2ZpvRDkMkpQbZEdgJtdKi4pqDypk46WQ756+OcnshBQ9EOdBNTJkNxiRCgvZK1tRrqpaQaYYZTGMtgwkFVdPAxbCTtQFtmzNlRp/tE2cXzGXsubr7TxMcpGi/ihgqa3oaBkKgiSrTRUfqxfSAXM56q+AuorXXQ2TQ9hCAwklz0Q89ZfbVn8YWSYad4KbRnkaSyPV5aJZMK6SUbeHQqHJ2p2/nz87JPp036tUweYYMop42L2tvjbuIhxTnhzSKTsTlwCjnB+HYKlFlOOBldOIXOa6yPlYBYEAGDs8aoyb4KPPJIYEOpugvIxWmQCwy4x2xa0a3/vnj0VgzZYXQUDnRNOQEltcbzDHZRDrokz9UqKRX1E9oiPOZCLLKgWyMvO7f5574ybqgKBVKMzUpdyhRqS1CDaWAWc8ELmNSZ2yL/BpN0cHrPVmJemIDp3uqptQFBDEBaN+a+gpJIYZrjyaigPKh5+3rOlNmbA4BctroWmbemgvrKhQ/ztFjFa+Xgi4Z/NRo+s4G94wazIqza3AWybh3beLH6REGtsJUx7jff70Dir8ez9QBDDPqCBMzvhsVzPf/QTTt5DWlY5N8Wjnz2XlWvAXcBihN8g4EaaoM97M2RtuuIcw9Bm4+zwH/sz/EaFGVBc0/zZEpMN4XG3D8MMACh0Q+3Ny26X6riBuSfOLUBUfI5AfWecleVhaWmwOQRdMz3TkQkHP9QmtSz2tPP5l76LNeRvjXzT1SscMw7EpCtPIYDF0EU6Al0zCfTVOym8MkYgDb0Ee2yM3odlpozF0UsWwXzk7GeA8e1z6Odv3X91HGjCpTxxL+u6RuLNnRsCbz/hToFL8aBMHGAjOZ0cO6csP8N1KU7W5fapI2m7yL+ryjc9iNCDBjYW/8AwqP44iNw2WapxniFMd88Z2Dnd0cahUMnkXi598dyLFVvBzJ28VqIxirPT6C1tylFMKvYnjdCEoiBqvxTQIE6vwtxa2e4jPC4WBykXwzlJ+b8ExuwW3gYdjjrcy9prxAmvEcOZvf5kHKn9ebwlhGamfRr+vvYLoSJRYrCgRDuacxwFqQp29tSVjzkvSXgbngZ5drNrHEAByR5p9DUk0yWHesZlwLhPPeHWacgDfGkVZGSx/1q1YGvGPrzGibFshH9PSqIwYX9l0R+/6ej+qeb535D7lu0Y1529z1Od4DkUkOrJ3+ndsXOVSi3DGEImfZpqfEkJbjCtDSNEetRmMw6eQ816xeTw7I2Zn9NtWErJu//8RySJb+qBycaIBhjiWPYuKYQfYos5tQ9SB6ClBpzmWGugyGJHXDZf6VRgmu5K+o3YhjstSyszStrMDD6vMXwNH8P85RTgPczFhLHT9hvgZpDzvKDDdHkt3KyrmPuSzxnoWlQo1uLNImFnVjvtPH6wee43w8fHx2AdfOESqKx8cFlklK2hGV4Dh4Fc1WHg/W9VnoB8hs/flZ8Cl9P2uoxFVOe1e+yD8k81IIk0WaURGY/RQ38/c0aSqxaVxEGdiKZD33REkHp9Iw+2W4s8CMdjZSTfxrmkIiv6cMiAwN8lb5MyhgHIkBV2tzUOBQQIzopISCJy5mVcMZJzG0BcbYE95oxFnWDF7W0jT+wugJddikVLYaztTPZ52gDbkzmtZUnyN8yl2rTc6vOyAgbDqzEqhaVB/BSgug7uJXpHvyClqmnVi9VvKDEGvryP6DS+XKdi2m9LXYqbywvEiQpDhIveM8EpbB/XTtYIj5Vz19EqVQAuwEOEphhQrgxYsc51KaZ+3mShZNox6x1De5VuFrHCZiFwpQQRPqGQ7TXzqjbhmJ6/l2TPUFRmWTzoqW2kmk4MP0cDrL/fP8h0ZaDpePKONdMJMbMBv7pDKycWdYTc5hUO5jArQUNKJh2dkZ1Z1MnRjUK+I1MM0gcHMYgCLVzw2BiB12buPYsBxkR+LdA0KX8S0/73AU+sHWjKt8Oh9Q1ZiRxU+D9fEv8YXXRg2I/gLNyBZq33SN5cSa176KDBSxuPoavx0GbDBmOe8P2tHB43ogs/4dzTOjoKfDA0d3IFoSvCor7gw+IZtcdCOtQxlAiZV0xZmqQoqCwHwejhtENLmnlTGipmHlw3UCaNzsdp4vLIqZTVGqewcMcOQy7oM9OjZUyooOWOb90u6t7A70CgRhep8P5/NHEzez+WuaV/t6g63CNTGpEXPS4Az+kQjrRn4ZbcCAoVEcBS+ogxRgg9WxHCqcSwktQIm+y8JPpIeIrBUBd+cm9XzJTXxcs8Lq2vgtsTuT8TOGhnhuCpIik8oEscXKrvePUjRBzchPPwzxGnJBZuc+jG++YNL0gTzUUd5HBku4rkUfVxONIeU8OQtyLb9zxH2R/DNB7zGYpJ3pOiiF6GLreQEsx5UrxDRWGpd/GTYFWX5UMuAxpXs4XqsQlhtEFI7Nv/sloEtrAIwpJjmMT5iUFXvumrM2PwubyYNSsnAgFci5htQzRN+LU4yqeqL9PT14gl0bha4gmUQr1u8CnrlvSocMThn/ED3n7FjJph7VNeP8RTREAbz3gAkY5c1ALrbrB2ns5KycFEAH+wZNzcMSr8IFwqcYd8nsYnNwfb02sk9I8gxMtfiRFdPkVadkGwGXwkSkfdoZ4DXFFK7+otahfpYJ0qz3R9REyGfz1bTPI8Q3y0VY8STHV3zrCdQwA+BcEef5wlA349+u/ZGMyq60FrKkyOQz5QLhYylrUFJDUG0C1G9Vk+K6PqWoBRvRJclhy4QediwMBkNoI9qtj/0DIy08NpFJISqo8KilQzGP8Bstb3owcjDlC19UY0AEywG3KdYLOBk1JaBt2A9dteE2QcfsimmUJhboZs2jX3DqfaSJl2Q/BBUlP0zDT85GUruL4O4LpjgRpQUCvptENV2gSshOs1ZqE4mUK54Yt+TKyvRz9PpBZKzOgFNnVBtIJYe6mvNO63H0QtCixMzTHBsFRgH28hrv4Ue2srONBHxkavntEWMkXSlanGGtFqWTYMxIjzkssSlqdB9p3Q9lwKtRYMAiezagsyA6F327hw0FlpstdgAVjRcWZH3RFMkWkJUGmXVCwqqEjg1D++tbxM9v8yGzimFeHj2l2CpviCmFhemeoTL1qRg8IvktoR7mzZzxzK+nGm3SLyTMPWKgFmU1ajU7POG11sSTKSsCkItMFgGfM03M8XqB7MmFy0BzZQVoflqO6EOtEQXxLGblSOBM9LWozHExAL9YszWuhBJJVK8jXnMyxTEeYp9awDpYI8qV80ORX9WIezYwEwX0t8Xci9GlMEtZnVjdtBIrq89vBpKyOkQehR9+MdY15gxzvUncNc/mHKtDvP617/6sncWqMhGvBd6M2agKAXI+0YFH3CgP8vnKW0zHX9vB+8YCUDfgE2Jg2GMwlUbMoQEDGdNUmowxca+cWexg1mDltY0xbkvXjVFsQDc+w986aREdVCT8mdkKGAx9mNZs07C+NfJaKVVR3ClEXqrzsnmKITEa9bxPY35ke2ZOMNxLyzZd7cbAHRkwgO4jvVjVEcF1dmYbA298wNQIkpU2BzVOBCJkVIsDQwKEhGgcEXkM5n3vB7CeCZmnpki5Vx8i5u0ho7rSRLhcL9epqel53OzFUQAtLyF33oN3PkPHHxpp4bCJhJ8vbI0z+rOmDa9VROghpJvRTrqt8Zt9jMnH4d3cH40TDvbZdPdQIu5nKLcPs2O7R3RrOBi0SBv8BxDDtVKpJR5WM8PBZ1kEc5qq3U6LEjNDrCzz+ctPBawnT37QmmcmzDPA+/vWRngQdrZtLNY2KS/uZvFm7dLF0b2Y3d1z3ApY40Wi68ABGy0SVeOnMuCGTmJKMnSNqfTR3nORNgChMfw+A3EwII1Mdd0bu7I/Zw2QNakXzQvE7KmxKbQnIFj3YKrPRqR0NGU1YQCmKR6avrFRMurAdaZ3017OheU/f2b3kJI5UeRqyEUrsIKdGWgpElc5Y4oybye9T0ada3SmShRWQ0QjCZYfj+gqN4N0n4ZmpCgrIF5QV+KYuUnyXKKdtYJiY9q/cclwkR6uFW8rRfNZMKfCGcYoFsU0dgaLL6aTddxxqXEgM7oGqIkB2G5jkbl85eXtwhJvn9JVGkufY2dVyZOKbZyF7CnzgmwGEpWYMqZV6L2YelYFbfrZv/zKD4CxPcSY6w0HDretkX6UZjcid1d2YFB0TA3j3Wta5Vn05jtMbXrrzaAqFOw/Kx1pkoGDjZrAfoAp/UTPGJovYAddtOYIzOBWUV26Qpn+s2a1tvrFkBpbbfGD9v6dYPZpeXtT8i5gCP18tJ4HDthV0gG+X6M4dZzA6YdPni421mb7AkuZAhFMo87EjlJqpl4DS0z2pWJjiR/vs003zLGrnV8+VxpYQhfdxa78L41rMEX5nvsAC73ArMYvKTMQ4CuHyqN4SUEzLqlxUjUufUEfKYCBTxBgqj21WKHX9+j3IA7fu36PXZMLA8OzE6y9TEO4aZup5/nDgAcHdMWxzeUBRUU3p804BrKLG0TWXkgza5mAuza39DTX3c19Ums8aYAQtyb9zZH4y5sqh9eDIOe9Ah0P0daQsccUQpkj9xmlOtb7BhmgzY90YfdSrCPOIo8GJGEIWrpc+tkiS6qZEuys34qkdbmkOioEc6jZ4seNqsAXS+M6pPRww4anPhRgNWMcAT76EYd4wLbd+r9x8AOJNHIhRUiZrb6JsCFuYk8NW+ckeG5OuYEmdyiWzHCPufAx+OUMY01TnG9MrzFF4gqKblTOZXSvAFDs3z9dB3B48zmlKPr+6ZqN/HH++RN7YehkqteBuhKienpr3ViQc+rdnOb0gVHb8cJyNXSZyVMjFQyoSSYtqaBIbvP3re9FUbTUGef6MugqB1OkO986DLO3y7x0mWfDVezZhPya80axAB8GgpPbvMcdm19AMV3DlU5Qxx0rwB5AldRP84LGqwFp8TMlI+i4XNkXMeP5eXPOYNz1ytrFcY00tW6plJ0sRTo2zd6PvzCH3GzPrKtmd+q0aV/+Qs/jLpCrDYGwipSGd+4aV0Yx5LWjHIixKMfDs9IZgDb/DczP5ESOIzZScPqzZNrTMYwnNoDI+Z/xvr5pdVHs1cPO3JjyfER40gbmwAP2LcpTtKORWMJiYyrJ8/1FJSVafZJe72B+hlNYwUn9ZULQSVUZEs/em+SeSIVm1g7bCFcHkHzdmd/LLVKILal0qkeuBJrYB24UwieDJmE25wIQmRqnjGWm86R4KChggHTWr0YCcHmXa18nFiiFPGojqCLNSk75YeXn5lN37vjc2SBqkhFdNECdwXaqxUWDg7aN8h9SePB4BgQ4IK+467rYRc67/+2hMBQCMJtFMZ6d2KqbnwXTEIw330xj5CJiV8z8oQ02+lzmtcmFgBbDqmnKnHKwws94o8+2tJz2k42C7PREl2NSRFTFHBXl/TNcJaBuaqgNM0RnimwkmM1P5bQ0fQ50dGGIwmLYyRsv37xRbYAG39nJh/TwxPwtoFdRqHGzzsnSAG+uhuGmH89rgDtwj12dZSkV9KXe3O5hEjWEKSP7PcEAgDXQYjB1nuLyYKmhZ3shNvvQgMPURwEGPF0kTuuTYEY9MXx/y5Z7gv7DNCPoPd0PP9OypfUcsrB5MisT1NqiyMmFXoxiEROgxbl7utaFmOU0pHyNIBQTRN/atwe6OMNTDsZzzA9ejNrGR9L+3eMHkRhV9LUWRn6ejOZgmo4si67JLSjqK7j1MTWEWjydBadG2mfAya2vSKqTvO2IDhca8xisQEuTq6P5TQT9z7bzcmmm3qEHKJGVGrucVCGDL9k74GGB3+jqSJioU0ht1J5Zbjmwteew2OvMpEsMSshHjGi972R0pj32NexeAr5PoLIkifiwuUkAywPFbBLa3nfzIBpiY6eygzMrwruGdqNMJoU8QMwpRaYuscQCw47+8g8U4+qjgkn9hGc/Jx8LQFWwYMw3zukeXAkt52inXDBK1jB1PzB0rzaibOw+iyH4NnUUT1noPsNbIr9fSWLQw1oOM5oHkjtATrp0deGqJCOM831cpC9Mn8QJNAAvr6biXnh6QiHv+X0ThVBXXHC/fA5YFYfPy7tbtBhIofn7io9cBm3T9SPu92r+IdNSAxPTXIdSGLOmVyihtYsJUsCk/AMPNMDRn8La5e9v5jgPzjxRPZebUxgRepNTVQIybtjap1sqegNXJfhrTo6qdo2bHNGozSA3YyxA3xbNHlGoEYchNr3wGduHAoF8FpWocnJcHh1p/rlY6fQrDUD6sDTPHmfkMOaMeQMoKArvwnewiX7lzUiLSUdrqpPRNT7jPBtQojFKLgnCeDRxaKx7NPXm88EztZOVy26LnkDZolzCUGvDFJlTFc7O2ECdqDcbzfa6mNEhl6CzLcCdlDb6Om34nmkobWEH7+fDCGuIOYI1HGTiIlfO40Y//8zt2llgI5MVZppJRU23WOec+rzzUk3sgHqU94DCjzEdihVsQXLf7ZR5OUc5FIpgkr0y7f+qPvAzQ6Q3aoOgCVcxKdF4kQzsAkxNIa5ijAo2mblSwNnN9dlRBZGByjSO7HQDvXThmYc9e4wQda/n4HtweqeYyv4ERQ4uf5jcMEA8NSgmhuNugSG2I2oU7+lfgmxpyAm5rb//6Rc/DlDOrcFqKyZAl3tEfPKOmDyDXF3ZGPYta+W3eeC+V2f00cBNS/DYdwl33j6sKSPADXHY8p+l+cDQu8Tsm1GudyIUpnOj9VI7sZxK3qXeUdC5ELA71RB8Os1TT6zxPEOvMbRnxOQ7qOuP/bPRJAIeBjkki5NQIjNZAFYIcpSGNkyn4zAirwpYx04f0UQhwZN55t2VN9H0KNH2MHUU/LrCAt4r2EfxOWL7XP36JKYMHFhMpLojqR7NpsnUdOV7jaTmRE7hwSw5LnWIpFG6zRX2qZ+Kuacab15eih5LQrFv2O4zv8Nf5x7w2OQ+t+itYYCWYnjCvHhE+5Iui8wy086rZHkVi6SE6aGuA4J1dmrLC3TkIlgJuDT3imJUJzl1LU+KMvvGGknFFEkXlDn+jl4g6s9ji1pZxWgvmoZDRg4XUICPIdHFzokyvEymFMLZ41c2qYSW5lm41vGDJaslP0goObl1nCWJ1y2IpWrhI6SgcFnznBkeQp8Huyd3K4a0VxzikcMwzTs8+wns54IpBmI0tTRktnd0+nfRd+GREReVmlNhjjCeHca0k2Z9KtuXFR4xrF2yioYQg7u9M1zKCgCV8ensbZj4uRAPFEn8eVp5eZl9AggkBQYOrZIFYs1IMaQRDKNB+nu4mXOzqeTr+PMvnFws2to+eMaPr+edLWCNUuAzSVjh91RVgEk09PlwsJpv1G2rFOMs5matsUMYwzOWEkxPX0iMY2TDuPO/NyNQgK8BVmOR/Ta4Im71Ec+yorRRngkyMBPG5/cUZUcuRkvh1ytxGDIlBPQqDc95v/JZ9Nv1OZCgr9b4oj0Ti3hLdYawqNCMz3fn/evsX40J1MfrXANHnbimAmBOW1OQyHjJo9kJCyWIXv/+6VeOpFckUmv0fIGk0Tt2S8uuaLYq9nwN379bSy3iWfOPaV+dcGkMnnXxIIbc/IW71gyzX6LvEVRFpyaa7ZSENypDPgCaWu0Ye8JT153tV6lEm3mJElca+zEaDn75D85YF/NugaWJ6MYOlJXHOKmL6NbgSQ6KqRaQ/IqGvR6c3wwtc+IdixDGfHoE+SCEHC0i5UA9wgT3oafKsRg2VgPOas6/6v8WbNG+RfpZHX+N6OoS8UFB8CZ3PXUliSXNY6Irx76WJJO2DGb+OtEjEeU+nqNKT2cPNrvwlf5yfgx2n5/S38majllp5p6Y48bE41+2H4NtmaR9IaF958wU2Xp8iIlkM2ZocmeKauTV4ILVefwDmXy5ub8kqQWZpsyonj/rG5dfxMEkBXKdC9tnXkY7MgKRo1uQnbAW9HiZx6kJQ0Y2xZW1KmXUcTVkYe5ocS5lxABR5DhFsLON2gCWeOInTPt51ZhjEz+vC62s+vXgIUVsvebXLu61ZENXDQ2ZfafRpAzAS8WkpoLpwh00Iyi4ls4FPkCZfPiNvozzGdVQbkRdGhiEUL3YeVamwzkbc2KMTPFKDqZoQ/FFcxjTRCFT2BpnYMw7xcJwPiPm5jzCyH3RmxdrnwGT2pIb/d/+/Q2bgtVNKrCrQ8i5wG6vSe8NAsMC6meGYaIAb+aGTez3ZHrXrpNJtNL1R/oiTgv8bG714y8dg8iAXruXacHVWDyumdnj1bgXhVziRE5GiKgMtgARn43qMlqG2+tTqYTUKRdbNJpzACFaaVxKOGYlip5sYAE7kGJN9QiGmXfLysZzD66OddXq7PL4+DircZ3VLBvgUh0wXUykzQMiJ6hyXJRzEzZSSZsHlAasFq247i8FFFnkDpJvBq5Y9Shgx9pgrncK1JHJ6zx73bejj0aulBcToVnARqaEFzaNP6PWFDUuisu09SpM031Kv97e4iOq/fs34Rs4e38oWAGRE3KIRW5nqmO6v8DysTV5m1HA6AoeGmAXqoig/95R4XHzAdwkIHbJXHk/pyWO66gqN2oGeLIjJhWCqZ7LnjJjqj65ZgANspLFlbx5vyRnznm3fvAASG9rO5FhSoL5vqgrS1wssWPE3dcczDuPeZjOv6eZ500kMbamFywjcaE+VzRSmislkSVBijTeMhxLzaYIotkT6j6DNs6m++Di37G87cjmca4PlEaM83VW1xQipP4Xa4S1ds+m09SNMp1rjOo/RQjovRs+y5apvPb4YqiaDWrzJqUyXPo6nTkCXdYPjdyZrj/KggsmwAadb1IW5k8zLY0mzBBAIVZ86TlH8/5ejuPzn/c/O16FwefvE8JzrB9Y87BZkLePHOd3tkWqC3K5ldf4r1SMnEXsgVK8MugH/VKRcpUT4PWgHJL7yUZ1oOqs2tLGcjqGQJOoM1hMoA01CEiHYqUDWFJlMZCg76RWkzdLqx0b4sKw8pjPmTl9vN7XcTJnZ8FHFM1NjxQ/jZfWZhmx5GvMSQtFywPZUJOOiB0ypsDFx9ELZjXBA83DxmgeF3QMy2GWn5t70ni7/LMPwzZoASmjLRyUBIecj+fPOVLRdLDFuV/fG12U02eQpxjrB74TWXmwVSrJCEQu+njH1sCQbnLNDsEzD5OQxNe+NyZUaVMfe0VDIyC5MaPjbKzqFCrbyROnJgqJWnQsIAywM4AaVkHgzu70ze9ss702qoah+cys58YVH4dlCEkpII50aIsgoJ+NVqatHfhqLn0zGt3PIXJsqUjFNOpPzzLqbExd6AVQ0fd4Fm9A8j1azfaHuRg65fy5Fy2alZ4XXzJfZPBmJQ4ckWa1sUDvUnAPAYReHUMtgas+Bqr2QTKffREtjBQzHDX2+8VqZd3gWnpLu3pEBaxVsXbtPUdPYdO9m6yoJiv9u/amQ+5tMty5RrLA/kxhKavGZtvt3SrfZ1d7tFUx7NMOtL3DiCfP21F1gT3LDFUXIIZZ00GpZ0CN5vck5zwFcOEGMIABkeDAnAiv+MVGpOniy3cpN5IgRvWB+oKSooF9uVeRc+kiqzBMTkk8fUifvj0PNTmGHQC71oqpk2Aa91LXDerY87ofR0oqTX93DCrRYsqdVXbsC7F6ms2GOmSUJlyf667yYfFumlL1spJFVdbzAxuhHy0vBGzMkglnwYB1zuT+BZ/n0BEml+vVx6zzMC4S/qw1osWYK8naP9RFXJyJOHG+L6QRepSJIDe8w6ZPqZ4AZHSPL41eTeOVHJU43JbkLlHQpnbmsRZw9Xib3ij4R01Lh4dwPaCQv0cb98hFLuAYwtTkov9ePxOkHOCU3Xdp+F6FYEYw08mCRg2zXYPTo+I07gSx5EaliO+xcFAzqNbROqkYTMXfQZMa/4yWOclNckSn8NikfZ+9NEeUfGS0B0qY2TvvZARxF/PA+v64gJ8KFKyCLqtokDeN4JpdlkMJWVKVLsShxYQUJmchuvWnMUEDRJeNqiTPGV4GPJvkItDGeDX3mnIoHBMbIsqC7I2Ti1QkluUuvlX7q56qYCJuvb+jbexzjGzz3BmK2tLQtpEATTC6OYxdgbuprMC5mCq/l2hiZ/46SX5dsdfeCkyB+BWm0oEe07NhpMyT0uh82z/+XPeACsCIXuyQ9Z0axM8oTpbEJl6jgqmBRpVcpt7fA1mBpJ7J874JrMjSW41anoDU7NaebirO/Q1Ztcey8H1z32/o1fAyw+4vsDrNDV++E9kLpUXuuDwC46l0Mk+ZJDhN25A8T9JM+rlwiBwtK8A53LOFMCm3sv7EvRlpfEf3m6y+O4ZmPA3k5+f2OOMN88DtGVecznEYSuxSGdouc6lSnVqHCfT7/DeX/HiIkW9Aozx/GPY9wid32M1k43lEA9jrGZHVjqQHMzjsi+GarDCjqJQzCR6vxw5wMfEhVlHHYS+QM1+mlzuwo0a/3PiamCRvfT6cGmEbMIDBj0XOEGdQm4lmXZdNXGBS83gn79iHf4xlLzbqkBb0cWcW6+Qlxv9DrZjIeU23+tus1zD1UDz47OMex1m1U/ZhM26kxJ2uVwfeFRIzXHzCvi4vZvlXf5JJYgEhxHzhJIh1rIQXECEoKKz7ZP05ak6DPCWBbhZ9PRNYBIOcrapPoZzs1QQXvdAB22gvWjWxNli48ajLAww1v8LV+EVgUj1iiKXExXAJfwfgQf/wywqGOMcD+6If6mY55Iy5qWS15YZSCWlnveSdrypn1WGQLPrJHiVJfUS5cc1kR1WhaJQAsR6MhYqmYk4DUfOsV5l+4SY6QyJ7WD+PNm31wGZ5jNnkABB2kfUAFhNYN2ADpyzJozZjGKZnaBq7QxY0Yk1NGRf7rIA4jeVCbPLy/WNXWExxqLFh4ynMDLgBAoZC7iwED7WmiVoQ0OTTY8OoNfmogBQIbwwWAiS4Bnhr1okBATbvc3KzJ03T7ebdU5N76Gc3M80YmnwtcqcMdFGMD0qoGTTkJrHAbsowcmD62Wd93KhY7R1AZgCNrVHfLoVhiCAPs+b07fz0C2tDgMpm0UVPKhB3AvUJPS4makn+AHFT5xArXc82XMDKEc7AmnWDZHRA1m0zxhSNThyr9Kqy+uiLmymRhpBXxvv41pqjg6gIoMarGol7aTZqDO4yLHXqkpDISAqdukxQmfT1zmOmHQlYzvmIPGOMhJFL4lc6xZnMUpuRc7B3xi7LtLj9r9VxADWVy8S7How2TsJh5hx2bVRjRE7yh/Tr5189yAzD/BV15DAaZ9/LtO9Oo4wUcYV4S4H133ajwkzrIzbpYDDnCYbm6k7BYPZCBxVaGw7ORElJQBjGhPQNcGpcI8YEt9bzovnVjyQMFDgbPAODm2PFxDxPwJXWKcQ9aJPJcTriILoi5olvCe969JkHrCb6pvmT4KjqqxU92Sz7pjXAbQd44eHnhJBRBszZmdxzuDgMGA6Jt7XWqWi71qeTVV1nM+Tn4To3EOx51fowxFTcKWOY+9nqz1hrLRkpGk1poo+bGmvSSyUITfDpsUdVOSn+mnChFGbhYCAC2xhbHWnBqZrhgH39LsAjHvyCkWGyu3PTUavc215r6I8vpDHLVGWw8GKBqHNujFGUhxXJyhC6URUBk8N8+V2lpinFbQZOcsJArty6SgQFunDYTTOLHaIXWrqAnipA36SjRhtiQO4du8eRiaY05NAQxCaJwJHQz4S8FihZtXJUlLCWHBTKOW/QdBF0ZnQkM4talI2Mg4PexEwUhrXJ4ygY0lscM2OjZk0xAvZibBeVugsV0PTPfDCP/tCIccyqATKDQgK7eoLVxwAOvHNNv3mxyUvC1tmDqenNFjn6f2BoQnYzwq2pGJoD5yvDHYMi1kM2XcB9NAwg4qsA++Vt+DrDUizAF71LS28WTF4dWgUCl39DBgW3jYxGHjiVBaUEIXy6xbk3E0NdUIGEYpQqyo92a1FpXbRn8yrtqqUZUgHmpGcKLLXnNYP1K1Hg/c+/5VMzz32cANT1OmznEAwb6hRVeXzjfOhLms/H+0jF7MmMXZG5KQLSzXgA7X4LHVGJhTQi9P7ah9nLGKZ5NArcfCbd7dNEbNNK8jr75VeOdDcmoBYewJzOGS2A22gNLUdkFW+jtzRtqdFHd8OoL2/Y4s5sytmFrutVIJ2DGmVML9iMjU7Ys/p5EfM55xK7XMywIzFwM4LamnKPM9z3KZq+ZsB4DJ5hX/FoZBgfDnc/BwVg4f441wbhzOKHs4f7KnoRRNMzxAH3Qzfj3RHatyasSsZM0WpfwFLmz43RRPaaFkmeXHnxw8eVhdp9nuTKCeVf8hWY2S1wXzm75glYBK1A48sQHkImwxIhV4KN1PiAeJeYZzjSBAaMAzQ1UeZquQyrZYmWPknT6sgdwPmHAQ8+XHCnE2sU9YtnXYtbNzc4A9pGwMysJAYOrWP6LAqREDmKpu82FizRzdSYhkjxhHSnWo2bqyhklPcDA1YsJ3pc/hWn4WkOScRe9zCXLWr0EouFgybs3MjlEJsoX5utmMzamnoHXbaWkXeKAgX11OFrkym+9WSlGeRaUXQu+qloKGc4kCBMzj0Ma+/QzK/s6h3nKkg9FHuDMA30UXHtvnJwtDds3VjooDOqW8IiZdNzQzS6GXaaCOW7SPfpiSE2Xh/shz+MwxbSMo27OEPMTNLUPJhe3F9PAaXLo2bMMHNTsb1vqOsdrmkY7uOk8lUwrc18p+coy+q5GyBPIw/ZSYGmcIlcrLAab53O6kT6/XU/EtPTnh8kBV6OyF6jLi3iVZs/cZkvozFI51xJgUn6RWJsnMaHvjQfr5FQ0IJPlyqlPPtso57LmBV1IxKj7ovIkA4XUg0wJ52Alfp4ATzZr2tS1fVx0wyqwA26RqRoP7ehFmVM1RwXQ9PK+OEiV8rrT1wFqwpXwQFNVmsJTU5Ohfsa/Ne3u4XUCbCInm7n9t/Cvot/TQMj4EFmGCPnxw0TvYmqpmWMstOYfbXh1JjSzLZEJEeUuFt269Ta98rxOm1KyTYuwz3wEMLoxwYYvwNb7gjZch6ls6IpH5wvZDuMBuAhKWDpg0W2hQaU5GAYu/1eErcEHnpj2DAkJB4w19goUFuDecfibJSpnPzbbpJNGQ/ikO/xvgoPncbdufDh0DynTYwBD6ZcgAHWP1f6QJ4+eJgtx66wPIGNnIoDK7WhBQggkcMQ5Tq1l77pzYrHV57wuOq/bFIeo0LOpV5OiaL8wp7wuwEPbk40UG4KXcxlpRsLW13yvFBQsxqxyfAclTTzPBvf0wCNjWnxFy27cEJMRl8FyBl9ekqgkqM/DdzL7cLmYABKKXIYxq9XroBo2yj0jv4Ms6BJNhf54tRtNjty3iS7xXlFyM9v/jT3QdHN2YgniwjXcSIUaEwn5UTjmNcda2hxcaBTCaTMTfMG7NZ0lg/jI0iT/xA8LxuKWQhlosmxV2Fy4WGYANxsJCYBpTEYNxFvEJZDlylv2Ao3djKxhU51Q8O2tA09BkVE3Srqug5JqxnZf1MoD5GgbbRBkw7uUEgtaCTRZCPCagymFo5u/Chtu9ZvRb/XeGi2uNr8lnLTNU6YtQgFCOueTI0h6CEk4LXMi0L2QLYzr0uGaiWgMvwGJsEwby1aFfHtlVrVZYKZDKA8D7NNWtFoYxVGATk5X3snU6WyGqZ0dpJ2LCmrPaoiI2kMqeOvKOTGXrHFxVjJaQ87QzZ0AC14dr2n+ixR2YJCUNQ9YxVO0CHQJCMgaNULdTIUVXH4Ok+OkHhudvBe/OjsdaDxl3p/9naxqu14wdBIqwIN0tSwn3lk7Duz2BspT8B8+1lmBKV5K3E+/+y5lCPOFYTijf/FXU9urOGsbhm2h2slFXmDwcOAQY6b2Yin9UVznCyMCugOsG3ppuhq0Xwf24T1UIBR8Nh87k7+E3ZUK/KYYD+DYyLSxOsCCSCCAQrd1qbeam7dEHMTORmNEzfAlwFkhok+OzINs7ynvWcL1AQHhCUrHlDIevtOJDq1gvDGiC7PcqWbtaiPTraykfv52eSlJFnEnPZGPZ2rrROwelxhEymMMoBbXzs9dHT3G8YECAMDmL13pH1titcpFfH4kwCPO/SYrjBG/nzriaooMXrDPjQw6wZqljSEdUkhRNdm2jQHsZJS3NVnLA3CWuzZzXaxhrtcybkdZlvmSOKFF8OFMz4I5RFpr3jF4yHatC6jLdZtvjzqVRxHLwhpclAOTJyVV36dYyJoOG9iV1QWqtmW6ey2o9LQTaoOqiatSGjSTPGCyCw4fHF4/vchBcURooCCLzqmJs6OJIiqqplpwiDgA62wjUfdPPsTKNwijM1yep9DPyAJKBPj4CKRKeuLKbZOnNFtMT3cP5jiq3wPO3OHTeEyFRBwr2lM1WiKDZeeUop+c5901Eln2xsj6TxjuC82/I7q2c4M+mFTreVLorJ6GKf9vKCTG1OsaD7/vRnsQGaDXMEXy1eCCcy8dpRKd6w66P+n7U2Dbkuv8rC1zvmme293377dTbdaQ0sCCSQQIIQGJCEkIQYZxGAbQ2IbAw4hLscVu8pVjlOppCqVclXyyw6xU4VJhTIhtiFAkJiMEYhBA1gTg2S1BiS1pO5Wq4fbt+/83fudJ+fde7/7XeO7T0vJp2r16fOdb589vMNaz3rW81j7IwmYI6m4kiRFtOhgFiuVa1nVhzKK+jAlVNciRk0odD4rlgxdASqb98AwASxPtu8NqpeVqbDSowIH+L0h2F/hgCJWwIQFvq01IVz/C83C2BsBPsztRtD3JgqYVIFCskJV7CIsa+3qD3QnFcLAfjraJmktiYBUCmj+pgJe53213i7r882bSDJh/5iUi4xJHKPkJa3qGVoIAlvulO32NKrwSYdxW28T1iuSDVzFxjLssFbyHCVqFOo/qdoW+mCLAx86VX1XMOGFmJH6kgSZI1v0nYiEyMkn+pFmRSTo6+KHrE1nod3GthzJc6371sbWXCmwBUYCQGJBu0qAffPfcbCHogPoyXERtfhRwLDscRA43r+T8MCmC/rhROB+EALwwgOyabkEwKzYJpl2cyfgaZH43h0R+7qjH4v9w1q5MmlNKNhSRGBsMOtG1uPNBi7SPY1FiyxE5MOk5ABsLCCrsjYoZQ+YsTTPMLKlUPuvpcoh1AQFLRMssAAQf2kMjwVElYxbg1woZftSk+yArxI5AVKn1GAWLrNTyJ1zCm4hbAhUj5N4/NapAOBgsvLgUqKS4UlcbVNdaqhZrdZdEaq7y2qRjGJkNRh2ApP1e9FU8OHwRK1TsRHUA7ZKxVVgFWyC3mgscmgDxYmgY7iriB53+3vmDD4ngglJbRAMCQqpSSvsgyGDUNNOJHo+QFohuNotItBf2URV+E6BEAvK31lZ0rJAaIHdgIBWiwxIhZ6f3VYPQde0G1CIXYm8DZRb5llmgQr4JBCG+D4jcFJDurP66gstWOCFm3zU/8tx8M09QIT75ItNcHobxIGDcwcI3FUAsyZniYMRsJStYxwULnr3LmvHjZxjkIj7dru7oN2QinCiHfc1mYctzdmLQdVFMoHRtAZUK/MNN8CyaVhCB6uspIB0MD57BWLWeqjHn7UwBHgnOzxc7zbZ4BDaopLHfWUGOeaxUIGP2nIKV+30hQtrt8RKwHTW+DB2SrpfF+7ZcjDTWPkJBlWTrATr2oBMe4gRS3XEFYpM0EQwpoJotKqcGEuOoWeJRPMtbK2WwdKhRN9aYYNUXznYuyVB2IirjYpbpWtR4JITxyb2yaK0/Kv6OWkCSxFIl+9vHKzbHMX6Zk9CtP4lx84cAMi02DPytcjqH7iCnBJO9sBAVGlHBvIadhzDox5u7URvIzYADjox/lIcEuhWhIUBo8nstLnMhrGh2IlHzlkEzibo2JYyzMGjtQ85K4KSpB0JEAlfa4wFk8XnN+ZUNtF+z7pO53CuABUwbqi61TnpK9sJIDS6XNHnM9c/VZDhMIUI5cPQrSXDkdwlQJaCQRvTNGlc0AbwGP67INwaNNDiVy9ZJPf5LMfinmaRRmCBqMn4LW5hY3uOtNDe3FpsXN7aK1jHVolzIkRZQ+2bUawBDbCHmh3si3O7iYp+CYDHEsrHSJIPMwFVL1mnSQ3BN6KXmsCXOcG+9gPjRaz7g0dbuDo7nF/xdPI62WMBOlSLWm5BDSL6jwjyKuMCgnAkSv0tAWlS45aHAGMyRK4mWZ9JcxfAbKtrBp5NJo3aN3q+9Gr9g68YSQ5HRuEXFdKIfggJXs19cjoqgFEWZtI2iYhMoCHspKhVgSETE2vlZtcjGLSd+9gGB7u4BFHB/XnNQeWNoiQzYAewAS/ggm4TBMEo3kNUMirQUcGXzQ4VB2hEnQwoIClsHAUiWV9thCRkrS7s6d1dMCliZ+wgvhbsxTqYYlNhQFj0CKsmDrQK+oiZtUuBq/gEGUo6vnuiask5hmQf5MylpSDdPqwbJ8gjcZg9AFarp6F/kMm7undNYWgjmYBgPYcTlyCYtpCZ4UGBOnrde1gDxhAPDFFFFtYiDmZ9lf3JeqIrdxTJVKnZyapWxYwQt7K4ZSO+OTEh2ILb3v2qiZ0KYzuWNu9aaJpFOVSCJ9ohjgOQTBcJ2HQzuviFI2EcDl1x5HyPGJEbcca2HxxCh0R+F7v6mS5AbAJCCUSw3qrA6Fj86eOklqnxJQ8/Jye+MBKu0X6YUmjkYwsgO4huAHE7BiXrPtm1D31R7dRFNBIrTxiJIF9VBufOLE4rIXKC4qC4Yvd6C+whKczIMZPYrqdFT8l0yECDpMDCybUy50DCJtp3EAA+epnJNbIosvw2fxsUABUzZ2Fv5Mj6N2mZ2qVC3a3UkKb0I2A/hA8hANC67SORs4+tLTwNIE1uv2DdOua6ay0SYnocAFPsZJtXGBY/N+PuWb5LZCNtPOq2eNYwf1Csb3vSXAJ37TowhYCgkYdlW6jYiyWbUUwadb4cmWe0Ca7CXLUN6UkN6MmmmjA5NnkK55pl54l4i6MC5QwKsiue/f8KeCCZYQgGrORjMWvWggukNbVjTmQ51BvWCvcbwdbYKHtXNpM9kh1LsMOojxeN/oy5Z7ap8KKq6NoVg7wa/1whnIPFCpJArbCwK5AjTMikn5xXuU4sDU3WtgwFC5cVU+KljS8YLb6Kq6uZdnYguF9KSM6WiWyTuxOIZSWKyrBqVi06gBO29fa6thrIpl0v0s1Y0qCwwAAWUHJn8Qf/rORxLBgiQY6VWGI3gaic3FDm27WarnUzvd6hBwe7OH0EeiaUBOEc3Q8KFPQTtXwE5DKOqkLBA3H3Bp11kMnbrxlAioPxFKz5HtCAqdTs1HgbPF+JDyTCpBFtnHwHQPw8gwDFOUxwt4DkAZfp8yeb4DlaFkTdSNnuDDBJGLeklKUgNNx1pu4psJUvv+c4O3YDVoQOCiL1HdplpnVuNS08kG0YVRsLrNgBLBYCK06mYiahxSUjT+bWnsKRjQ+zWzchQRERnFVQReusTIfZaLSRJW/cORNEAjbQ+ggBcurGutQGY229xcqvWU+EGTqDKa+IubISDjRVQBXRfGfxjMg4uIDDPSjUKlKtT22zgCiLwwKPQTKJrOorHs/NDbQ2R0d/z+1LFDMgiCOauXcgC/cCee7orLvmfDPTAKJEfJS7S2z6O3BOH+AEVEpzvKBtz0qvIViboxZlmKQjXZezPWAHVx/5uRTPXtLaDzSkelbvtvWDM2Mh9sBL1NHDZq/khIEZ96b0r8+O88gNJ7U1RrLvUsyadFokHANy3ccSiQmDUhZVdM7MgROMHZNI7i/nMYyby4hAizbIKxwx50qsablwOhTs1DYgirVImg1brhGFbIl9mNx3AK0XRYLR7lSho8mKGDFGZ4IrjS3NaHRzwnyPAikC4SGei+8s3POSRY3h3I4gXNqeDgDSBTw2WIY/IggBJqoFNX97tiKJYC2wxDwmZrBa6JgYRvAbEmSXEsy8wHxDQRzA3FGzot+9Wanfi77cWrljz0XU9Tyae8M5RaHZuIoEA6taKMnrEYPRjl3VyFJ7vUJvZv38nOe94Yxix0osCeAClmImxoJV4qiUXgmUMJn+n+CRIVMUY5+VYUZBI+M6OGFXJLtUr78xdWOBYRLs6FK1IZ3MWUCj/tHGJOnWtnCTrIc2J2N5nUaQBJGu0cYEZhxXf9LFY/diRryRLvytDSYiQSSpdYmAIRFWNpNKJYvpvKK4ypbILxu9mrjqGAzrGHwJgp4sUJIbC3cAE1h6ot6fNKJPibC7cRkKvSSDwPbmSWdOinaDqju8UWswC2kwU8/ajNx9BDonEOCmpVBr0V2p1cDkwy3rLahLHpJNqvbA2orD9liSTAqfYDF7oDbxzmx25DDFCsVJMHucFKHH3NrCG6+K5TP3GhdAOHiJ95FMBLXosNhpg/ggc2Ww+wiyPZF1+44Tr43k3hpAvyHdHsfKpS0tGTSWp5wzG08B3tShK6jFG2rVOTZxD4J4V+2amX242CJPNn4dWCxGJy1yTl89cfVgxGM3E3yUyVtXh5AoTVPS6jYnDM7OefVaSa2Oh9Oal4yDIG/hoOKaikcaoN3Nj4UkPXLQsyAJOqgRm9jdaY71NvDAbjl9Doj3t4jcYG+Ube8E5207tiCCpYAF+XizznNuHvZ0BpDrLrpWm4A5iwBQQ4biQbe+ghc6YINuAGS2z7TMdA5Zqkl5HkEfLxxoB9EWbxNaK0bdU0NkISxgkydE1haGrR9pKkEXYaELNVLDD2yCdspzGN1qDWUkozcdcT2cuzem994G2ObaqluOrwg2cIQNm5sTR5XNl2JL2/UiTV6DTdJsi1mmylQZDwoYmQc8K9BifjSZNVkFNmRQyrJaAj2ZOELYyIjcsK40Qg9myAqX9U+dBYq0CiPE+6iOAHOpXZ/LEOBsoNQrjPRavJrW3jJU66GxYsbSVsmK6HCyMENXT9J73618INgYuZuayv4yvb6xKRezGyMWi23PBEa1k7SFVGf9ZAMa8I7TBUGw4azE4DfNsB1X2IkiqM4jYTukyXAQdLrkV9BcQwpo0HMMdEQoKVbqtqJkNiizmh1RtQuZxxsnuhDZmsZGyyLOD2kJZJabwiaoMkZYj12f7GIvA2RkwTx5QyJQzEKJgKJo/GcuB5FOSERvTVt1EFud2S+WocPNDeL7AF1lsVTVQUNpYu3xpg1oxVzg6XebcP91VpFaRLldiG5sZNHKwA6stC1ObjmfgV/WlTX/dMny9WEGEWc5nNDFaImyAWxsy4zcbwC9VtTAZAbGWBQJ2mRli3aZwcdiIjU9J19KncNCcTO5k/TY7Jpl+5AIKeXCPNvcs/hkqPLMs94LmXkLA2ZBaVhxCBLbpEoG8lxZo7DUbzZABnyxDQtsBeumV51aNjvj1D4BxQJQkABPqr2Ak2NT/n7YQkGLjprp4hW09vs5xtS/wTu0R8oQJdKcyNpAsgf0tBjhSTGGjUuZBRI56GKLkn0YRnRXMF1KsbHf/xAVo7AQaSZ27RLkgAW+F9jOu8gORJbAWMqzorxnKcYJAENXBMHy30YnqdqQ4RUGwnHExmVwlzbWXpDNZFzNTEt/AlSFrVlUzR96qKcPqGVxnQIlQJ/XyP+HK4polk1DeWfBcW5FiQYa1gJ4pHopWJOqnTfXd7I6OhQWLvrIJIi8voFA1WArYUZDSgZECCx80ClSfHGAx9Kgi4zBEfTUG1G5qASuUSNrCSs/A5HssEjG2Ux8ngeDBD7AtmMK3iGEJ+HTkKQkdTfQWlwUbMnBfrH97EYazPaygRYQgj1qzy3UDFfSSs8FQzdHaT23MFG2VGoOEq8sQlBQjWzMslZ14EbVRtRn1pauCtBA4Ke2l7XZLvpmSbd4sM3IkhJ5cH9dhQS9amnnvcTxYZH+iACwCFYtTgJMVWHJrNA6px7GbFLvxQPDgf20+T6reo84aoh0NRCh0dkjMEKTUnTLtkUge65io09t1jo3kHeJI4Q1F5KAEBzmtT7wQWfJZgMW7ah67SqVnXKis2pNYvBoTCk2SVCl3WwCTIvzvGLWVtrwrPkA48rBcrCJtrlYvC56qH5Rlb3E7MqxMGMPYeDOBr0ZabocSO7raHpuJzEtf4gSJiOcWXuGaztQO1/We2CWIMt9gHQjrAZq5J4KUenWDT22GgW3AEMbtou+FkTl9qRtQ1W8uRVXOOj3A2sAJyweuHY1uLBQtbuYFtruvsBji1P9/EYJi2LWzJU92xuRrW06YMGSHyQ22G3to9jaNtpbovbdKMl24q3JggJeqj70rSydRkcwzbiz/9g2iCj564bXUdsLB/adAUDKpgiAHZJwmQBzpusUF2m9g44B3eU8Ci/dsgEXqJrotdIGxo9IxiRHbcKRi05nGGGHWMkCYBDrDTi2sk0BLOSf2XRSNSVyax3Y0GmD2sGCzcYkS/GwlUhajCcyEMhpMJm8C0LvShwYYT/dxMLg6FnAFVKgTClafpI/MO6gqGy0GDV6JMxo2zeLSgWkULcR+mYzMiEmLAvQH2Blqcu2WGyRJKKgIojdQDPo4opdz9m6FUZU692/9UsEPDgrmXQGujLWDZoYnAquDg+sXSqMbwubrBqCzTEG96Iqg1YJkh4sM8gxDTT2Ls7i80rbV6GLkr4k7YBgxG2YbFnazDRmM8E4WNdjbzeW960Gykn1IAWNmXdL4KNFXtozEbve5XbPKRASYZeINJMliMTERkNS0rX9N4vKarvPSBqhJQ2B46qLaR1XhgVJHsAm4INtTOYd5pwt5LLUKaDlPljKCTpL7aac7qLkhVsptmXrtZxENr82zoyYCRn4QoHQLvd4pMbNgXuukOY8eGlx7wBYGWsGSYXSMiHCygWcyLanPBsdDXACnHA+/xXAwHHVpUev7o0xJMFe3UI2QRKFZBWEDUSg0+8KICgWobHcVtsdw2n85NfWqipgCprGSbTVcU6bjvwFuYEQ0Z4aUsAEgBG7UQjnFNvjbwoAao8x7R2IJj3bvbwVISJtFDbjlVVEIKtWRsCbBaAeaKNooBAOSBnV7pFj4fNurpEANrEzQq9GFg42MHsai4KFGLMKx+F0WAwMm5nZyu0YG1JVKKnJtZGWlB1fQDZr3QmeRvs0Bz34vX2lkztZ5h+ixAwLtrxG92q3eZwU8HJnYu2CRYkeGvJicPe8MhYM62r7ovtVdnwmJ/uWsYOok49Y7WIgAFaSMMeCOHFxcLk4FLE4mf0eGBVgM/BiqfOHs2cWFFoYXlouA+gWe3bB8ds2NgviMhkXLNn5RrHPYhwkgSYEOl9MT5/pISX+gvHr8x1WxRFSKemUE07Me6vpwUH+ZcN435xCpIwVTI6jPT2tojK8pbDddWE7GcjZ25OLR9p+MbMzGU5gHWrj5U7fHJafVSY2K+vO4LCoFmrc4Gnx1Oafvf55wrcyofU8uQXBBPgXLt6kC5dO5s8dHa7o7K1reuSxG+oB3PfMgzDacVUhEFFoHgqPzUsK71zlYaEqDUdMYgMTzi01guMkFeGlvogWe2OVdMuZCdNrzbYELYJYQN8ImcyzC+Qloikmg1TznYEP3k3nEAEiu9CTGS92NoCGmrBKcZXllBVAlOrzYjMOEG7YGMwGQL/2+0/Sd7/+9nkMfPD+y/QNLz4twC+iX/39J+h73nCHuruSNfTUpZv0vj+/QN/66jvn8y7B4q+/41F63SvO0dkze3ECv/3XxUtlHtyczofogYeu0u237dPXvPAW17u8qIRmh4sRbIKggzFTf/dGXNZSWkGc4NM78Jk5SJpkOxsThZ6C6GFtoNQGTbEjkAQwHLTtc9Diw0ZhncdnN+m1avfLBECM7N9AiS5TMGUkVVgpaS9VI6OAJwKFyNyvqPUpq/p0qmyhMr1NXrlPjojWHZlspViAOpz3OmMIrYjpNx/+xOXt/L4xvPfcew+H9x54+Hprktj+Xdm3XrKdr2pirxqDSTUPTINH6T4xqYQcEBaxFRSegSfftEEQ+hjTAGljD+na44JSGNaCcI/RD68BOy2uAa2YPdgi0EpuKlcz2AOYjsEguZj1puzYnNZhBCNd1VBcCYT0/sscc9GRQT7tWSrDcsYEoEeLQMAQs4l1bZtxCaDgnLK1v9CQzOCyYvvppaC6q2A2/RcL1LHZL4AdAGnkIONinUwA4aGmlywgsNcP4UA/imyAzN4+1u4R7tcgx65jskJ5PlFDtudxYFlLRh7OsBWyFgtCHNuwLcIEaz0CoehsSwVi4IYDC9uI5Re5ryEAuFw8YMYWk9YrYV7eJ6KwJHJhCmpkoadx1n7Zq69E5iW2czpUxDXn9eGPXaK77zygL7vjYPh9iT1LLvWcZxzNf/Ohj16ie+7afmb7ubiviujf/ubj9H3fem7Iu+pvfufdF+gr7juk5z37KB1j5efTD16bX5+/cEJPXLhJ3/iSM3T7rXu+QGaF86N1JGDwcAY6LgAfYXw4kxPa5gchZwAjgE0mzp8zCm57lipnS3alyhGzgQmd81Wwes5Hq+QAmxwqoq1IHUs0JzXSmpLoRn+s9bcAVeSCyL/cuWS2SeY7fIutWI8DoLS8/4XHb9C1a5v5AyXOKi+fLLjB9LiODlZ0z5379qhhzRL4EgCPTeAOkOY87CdwOelPP3h9/uzHH7hGP/gdd9CnpvfKm+/808v03/74veqPK/UXHeuyeSBLb2lTmm1VdWjAZoq2IZvaQX4YM88DbCbR1mCWmhCrznh8FtnOdQy4a0DD1IJYzeln3XdtgkIvUlevR0AZCHqkaBewA8rz2VbZKFjkF3Nf1ULAQvnYVJY5qu80fY0oyPrgRy7Re7ZjqP489959esvrz0mMhT798LECwt79p5cGwEMmtQ88fEPhn2XcPvveo/k6b71lj65e39DvvOfxGfR4z/vPD/8+u/3dRgRv7//QhW0SdaVtYJ+6St/xqrN0arvxlO+6567DYeOQeje7gh3O4tZUl2zwGLnrFPHRKIhQVFreAddYCETmgHbHEpMMvrNggckX6jnaJzL3GvjNcmWXj0B0M8IKupW4joON1dEIWzE4uP6IacLx0GH0+/JDcKoTzbEN4Op4XPnxpP7UUhMjMDUQAYxAdGTsDxZI1JT0uXVLOa2NFqg1/Sub6bkCxG833wcevja8e3TAwzytz+Ed770wAR7cgGQ1T8ZBs4JgUYi9on6nHQBSs6FJC7EDk9kIAsoK1Qq1VdOzDqMCIKvjZGVZfbfb39SgEKrUMGspMcdC2Cb+YibVvyy5j7CDba7Yy0ICU0pIqGNhsrPdoFXqGIE1pwRL5z2y7cEwGSSCkciIRaARoqB1H2z3aiNDl07SKxPBFWrQeEz/7p3n54//8PfeTf/nW7/gJv+bv/kc3X3HvhKMh1hI6zxGwBpwLS3IgdYIHGfLIkNgo91bpxINFkaC4waoMDh63hQyXzlo1XT7U7KcKrA8zcbj+5YFV+gA3E7vT7aRRE5i1BcSd9eG4O867M5eERiU6G1F4DuMgw0vx0myjUHqcFAgxNlrzVwiG+Tp7ULevn3zZ37pYfXfb/mWO+muOw/mz5+/cINuK8DC9EYBOx548OoQj9Zx9eRTN7bJ4d58DY9u14DbtnEonW7f+sLnHtE/+7lH6B//Z/cO9/VTD16j937kCr32G29Vz+3qNuH86V9+dD6lzz9xk249taKXlxh5+9+nj1YDSFISTwfWcZ/pY/cs9Xws6IFOIU6nOg7saGsSB3k5t13R2tgqUIJ18XB2b7G5k4TzG2gh8xp2pXnMlvMcTHBAgi4UeApDxFFQNuayGNDExn2xnTvFa9kB0XKn3kZE2q3MzQsmyauHKWbWK3/40WM6/9TN4T+eeOqEzp1d01c864g++bkGuH30M9fpJ37gbgGsxWc3inXjiwc8drHX1IEtKxDiuc88FJTNEfA4e9sePW97QTVc+ZOPXnUzRXcayJoRnCluquKONsBZ2u3VWxXQyR0ZDA6HCKJG9txgkCqxgyTqyH4hz3y3wCrxYQka6HCzIYciONSbYgVcKMhe5KWwR14TtkDcY89B9a19ZlNpt9o/xownkPOgni18WTEzvvzZh3TutnEYP/yFG/TBj16hD24X9ccv3JzPsizgv/PHT9GbXnWb2fk51HV49wefoj/8k8v0D//WCMR9dpsEfaawMrYbzJPbyVmAjvJ3v/oH5+k7XnmW3vm+84qx8bKvPksv+5qzAzL/1t95lL73defoNS8/N1zO5z5/bdi8vuK5p5tcwMpUbDpBRFY9cMzxaJnqOOOEwRzv4N/OmvIf2aBxpCESLLwZU0xW3jL5m8DJeUwiyAd8liViK3aZFoRig0CRptLe0jBIYur2kYeaA52AKuwXDgLzrECmKJFRPziitV4HMuG1ImGymICcEQMbGRNgs9Hriq4cIKWYz02F8kK2r++6Y39ejT7z8GYaA5xmGgXcXMGDUrKH2i8r0Ho20vY1mONswCYJmLBiObBxDdFtLLoKDNcS0eyDmuBOBYzmMFGU2pmrLbv4qhXPuie2E1l0VwTgqs82oO1lxvspFifHiAyCumGP3VAT8xQgmOMCQguoqhJ9BO8H7W6w9LW5ehdUx6U+B+Db9aRQuxN6hGZjTN9x1x0H9Le+555hvfu5tz4yH/+Hv/ee+bPv+sAFunZ9s70t3MYBdIzCUrCP4kR5rnh3xE6jii0oB6MjlkXoqGjPTWpWCaH6XrIqATUE+4lKyILklxfADkKHcZYITaZBNfWr4RmJRSVtHIM30UWwrZRybCEOysHrbgGAYgFuynFWdQ8cMzN7FuJaQX1hUNhYgBPQAzGbRXYpynZlW8iSx/q2V5+bv/9t73icHnn8mO7/1OX5ez7x2Wt0/uIYv86sjiBGq+9du7Ghf/XWz9P3f+tddO/th/Tk9m/f+6HLw3c+/5kH9DvvuTB89nfff2mbTB7Qu95/cfj7b3v12eHfhQHy9/7Te4bPvPuDF+kD91+hH/j2c/SMuw6GNeO3332BvvoFp0amSNSmbBm1kUZlxGyyYEUQrNm0q0ezQXCv9fob0uLIC0miFSJEdYEBtUb7gcsNvLDBFAvNR5mfqjxbAPyAYHM1FgdDgPDw54BNdBOCiqabsxBvT/qPCFSa6+9VrKVhIClqimB9mx3Ktt/xouefGgpN5efo0eOB7XH3XfvqSRXAg1kSMEDoTugvFvBYiuFhFooZhBg//cCD1+nfbyfbV953NP/t9e0E+rlff5y++evPDB+/dG1jkDtrLdfr9oZbjDRLFRNyJehDs61cFUODSr59BsTCNZAFxVYkRlGEJyaYsilCgtN32g7AFFL5UUVnJD2WWwuObMyJmR26LQhzyw9menFUucKS4mBSNWmghQZINPAhWoSgBzLI0xCvXQd9+ONX6C1vGDeRJy7sK1s/BvuJAJqZR+Xn3u0Eq1/9q793nv7jp67R3//r90zB4cjguO+Zp4aP3PdMoj+7/+Lw+r/8oWfO53NY2BvTaT11+SZ96KMX6Y8/dJG+8zV3DGj95x6+Rh/bbmoPfuGY/tLr7gyrZdSjtpJf1BMSjRM9Q2Chm/X+1teLNM2A+dCTHoBhVnCnNDIklOyTpVTMLFmXw7YYzkV7FR1TnjN8wNajvzASNMJ3PWgwh9z+GOtaJArvNqbg5DNhkoKAHcLLQayjKrIBkheCFNZmS922KQRq8tY2kILxz85ZhNV5fuQTV+iD91+iK9u96CUvOD18qlQePv/Y8QCcfsVzjhzwXe/PxktUNH5AQNmRbltzG2UkSg3WLbMQgElQOSLWwLAG3CtAw/F83ehFpcVHopYyO3yJwE4uGGxaK6fPrOxaYhyQYAa9phJrTqNidUBXs1jQlivQMQP94JBqW0XPQSZrgS6yqMgkCAp1lQ2+Wh8M/DZmaxuKFJVjVYGd927BRLXL38Y47Dz+5E161weenP/+U5+7RveVdi3Z8sIi2rJgbyeBqWt0xg5IwXazHnDA0kBSXYvItIxQDocc9keuUNpZ1Mi1mmB5GYsDZbnOBfmVFZ12IBGC0MXa4kagTHQvl5jppHX3e+0e1CcDdm+SrA+iU0SlIF9bZMEm3x3pwUQxAjptJtFD4ozRIP92Q67F44P/8SK9/pXnhriysCdK+8r5p26EsUx9XVpKSuGt/BweNunFLzxxPIAdb37tHfSC557eft3JwMR44X1ja2ZhZjz0hRv0Bx+4RD/xl+9MW03u/4ur9PY/forObM/ne77lLF0/3mzP8zK9608v0Yued0TntueKIAexjNdozvVySkLiKBsweiOAzAJUkWCtXEd7gSCkAYbsKQ7QOZiHXdtMKtgBt8HZErXfYSCCQhg2JJliDVfLcqk1Nu0jcD2C0BIOpnjA0Ibzzp7TkA3gjOphpoetUAYCf9Mn3/0nFwdmx523rWeGxwMPXafff99FeuFzD2OdO+rMxYXFYW/XRYMooN+Tpjs2pG/85YWnbtKrXnKGvvYrzwx/8oZX3Eafefj6AHa8/hVjtf31r7xNdy/AC6TJNhMI1flohwK14A8qKNP1EwkfcublKHuRIc8HehPmaHcWqBdI2cFaEu9s32fESlnA7XUSzv1f0qJQ3SPWNUDmWKzRejuT5/k5rRpbiQ0q5X1RSm+izs5MlrxHJ2O2SQS0X/Q9283igc/fGNqkPvyJq9sF/mhgfNyxnUDPfdaIjt//wDV606vPqmipUKbqHTh3do8uX93Qz/zKo8OC/49+7BnDfT6+MZ7jrbfuDS0t9dw++9DV4W9niqG5T2Wz+Ivt8V/1klsH6uEffuACPfrkDfor33oXveJrz450xayanuBeMgFGkowTxYJitjUhez6u4r4UGxpqvWoRsYJnrAvKG/NvGWSqHmoEwHQPhGDPGEirSJSzUsLqVACORCwcx4qKFuiAtuuOwdkJGmCEAps1Mm4yiSnRUnU2BbM4YMywZmPK+xBSvEm7+PRU7eXrm9BJJWADsOzGktIUqtd5/6eu0He+9hwdHjA9VXpHubATaag8lM+URLH8U+b14TaYZLnXUNC3ClJrOht4t1X2TZMiC/G0IPHSgKFk5sHsbeM9WFm9p2Req7QeUUJq0FAJAggQhCtDZNZLiVsNGAGjTyBW9d7BUpGBZJLYJFGOAt8rwqYa6xX6IlFaw5OfmYqRxZQ2A9NfJpgccCpp8wOfYRRRPo0q2DX8/Cf/8rN03zMO6DOPHA8fKEWm5z7jiH7jnefpu153bvjcQEmfGTxTgUOFBDBCvxRLoHAnOc0S2YyaAJ8wuUIJAlvyCIyNGLkI9sSn2a8QOsvac7KsjICeLzUAYZkAybqYJagyn4qYCFIGJtSt6rFfKG9r4oViaGQNm0jrqe+MNJmjokMmap6eVBKUWgednsaJq0H2WpHRmRPTL77hxbfSL//2o/TX33LPALIXwKMwiL/xJTVGPb+NXU/Rc+5t7I4CeBRmcPkpbOKh8v3Jy/TBj12mH/m+Z4x6H9OXFibG8551pK71llPb95555Iqn9SQ/8ZlrdPe5PbpzGwv/2cev0i/9/lP0+q87TX/t288NrTNpKB+5MCZTPTJ+oo4outVbcaceBcxBRqQdtJCwCzsIjUC2WqlC78Xznixc1OAEY4z8got1OsqtEPs8s2HTT0KrqfItO5jCsjv6VDOoTgtbftBi5l4EPAy4p5M9/9QJvembbhvAv/qNpX34za85S8951uFwS97wykCPJ2G1Lf3sxPAoFOLzl1fbDRN05TrTLUcY3tvbzrvDFXRPsPnyP/7Q5eGf+vP6l91KH9tOrvLPgFCeP6Ef/u47hoBSBcrT/xe/94tXV0NidLQHun5zPPDh9vXVGytab/fwg3V5zdvXTAfbK7pyvP33mrb/vX1/+/pwe57r7Z27vH19an8UXrt8fXs9h5sh2bqyfX3qcKjn69fHKzq9fV2u6/qNcv2b7XVvE+HtOZzavj7ZntSN7evD7VqzOeHtuW5f743nXO7PwT5vfz9edzmv6zfLeWzvW3l9zMO5723P8+o2RtnffnaPx2s62NtsP8fDdZTvYV5tz4u2r8eq1pXr6+3rMeAqz+P04Xivrlzbnu/RZphw18rfHo6vr9/g4fNF7O/G9vXR9vM3t+d7so3ty7mXcyyfK+d4fDLOu+H+bq+tVOjKNV29MZ77fjnf7fv723u7txrvdfnsevvL4RzL/d2+P99rGl+fPhgnQHl95mCcnOXch9fl3G+Mr69tz+XOM+W+8KySXJMAGB5qXXT/xnb8/NQvPkaXrm62k2dEp//FLzxK/+PffSYp83YxVd70qrNqnD70+E369u3E+4YXnxH2kePf/tzbHlbz4bEnb8ygifx58zffOYhIlc3nh7/v3qF95Y/+5AJ97QtO08u/9iwdbAPOn/r5B+l1Lzs7tL8ETpIqMbFr+bXt15Yxd/3G+NzKKZZnV8Z3qbjdPBnH2Ukdf2UsFpp9eX9//Gw5aJkbx2NeNzzP45tjW83+any9LnOnADcn4+/LGCjfXcbB/Hp/fH3luMzL8fXV6f11fX9/vK4yvk8djj3iZQ6cOhjP8Vi8Lude/rb8u4zTcswbJ+M1lvePxza/4RzK95e5s19eH49zqJxnGX/lmofXx9P5rmiaO+Pry9em19vzurx9/8zheE/K+2emGOHK9Lp839XtZ04fjve33Pfy+XKO5XzK++Welnt8an+8p5vpdblOms69nGP57sO98bzK+R5M5zvcx+l1uV/lui5N51iew+WrpYd2PN+L29e3jGQDulTPvZ7vqfFeleOUz2ww3qfhfMu9vjGebzn3cl/LfCznWMbJqYN2vkcH4/kSj6/L9ZfzOFyP96uMo/3pdTn3sgZcvDYeu7x+6sr4/eV6L14Z7+Pwupz7qRHcemr7+tbpfMt9v/X0eB7l3Mv75XzLOZTPl/tb/in3YHh9Mt6/S9fHgKKcy82pj6SO5XKvyl5w+gBBguZLo0Wb52OfvjIEEi954Wn6P37lC/TKr7lloAaf3waaBaT/5Gev0Ru3a8azC8VYAdq2rYdVm9djT/FwXuXbyppbxmexEj3ZPqD9vXF9OdnuG+Wahv3uZBzX5f1yXfX9cn/WY746zJf1VOQbX7cK1aqsm5MGWLkRw+vVxAKYjlfO5WT6ns20Puzvj3vAje3kK88Y85wc7/Pxybi3lcCqvC7zs+ySN4fP82BTeqNc33q8GeU5lTFelt1ynL3pfMs1DfcDgsk1Jd6r7cJX7sV64kAPf7c9Xrlf5e8OVjz06I73cfxsOd/D7X0s13ZjM86xk+3Bh315v8QpmM59PM5wfasRaL05jaXy5Temta6cR7mOvYm9PTyb1XiO5Tt4Pd6bJmjeEtNy/BW361xP13lyMj7f0s5Z7vV6PUJR4/s8nGOJHfbXY3Xw7CnpEgPhZIZQhODB7T7zDV95mr7r9XfSo08cD/tOab/8zMPXhoSqVMzKT6HO33HuYDpf4Q/DwkJ4AuMub2Of8jzKee1NArzlvuyvp99v/+ixSyNifaXMz/1pvTwe1xNM6095PaydZa3fG9f2cq9rnFTuZRmHNU7am16X7yv3/fo0dsp9LevvvtiDjiZiZvnOslYNegQ3xvW3XNO1sqZOpJbr02fKcz8+nvbPaT86ms73+nTMzXSOw1zdjOdZ99Vy/mWfLK/L35TnWsYRTec7rD/rMbA+Pml7aYlrhvlD7Xvqnj7skzSee72ma9P5Dp8X51uOX/f+42m/PTFxwPx6M57nMPam811P51u+bzW9LvezrNHl78o1lPXieLrX5XPlO8v10/QM6nUM709z/LheH9rrcq9vTH9bP18/U++vfH0ynW+ZhycT8Xtv1V6XdaG6A5Xznc+dx3u9N62Pw1xejedbvrMcj6fnsT+tp8fTGKz3y54Lic8Det0aXk/rw7BGrySwQKH2jJy2Bch49t0H9K9/7ZGR/b79xUNfOKajj12ir/nKW8Ic7AXPOaJvfnlrhfnD952nz23/5r/6G88e4kr587Z3nKcHZt06GuLiEt/+5L95RKWxr/36W+hlX31meO973nhuaF955/sv0mPnb9L/8OP3DAXDj3zyKv3M2x6nf/A37pnFTyM9RclYjWQCSiywDcuHfaOMwUvXeIrDMMZhB1McNr0eYoPjMZY4qfHA0fh8ypwd4pqb4zMqr69PscEth2VO8RiHHY5zZ3g9xzU8zLES1wwx2f74nftTPFlikPLvsjcP8c56/N2lIT4b94LLU2w7xpDjddR16JbDca+6JmLFcm63TPHL+JqHcXljOHcePlvmZ4nJrg0x2ZgvlfWAhuvgIW6suVg5x/UUT5Z8an+If3mOedcrEf/OsThPsTgP62O52TWOp2kdGuLc7RpfzqF8/81hjRnPpZxr2QvKOn/thFvceGOc56e29+v6FKMfTfli+b76ejXlFwVDkJTecm2/8O+eGM6hFJ1f+qJTw/u/+e4L89j5xIPH9D///We79rCL18Ycszzvcg/Kfr8Eeuzc0lIOVh4+b5PlEoRgeyfXEX1TfOFzn3VI73j/JXrjy2+hr/uqM/TTv/Qo3XPXPl25CnrjK8b3fv+9T1HPx7c8vHFzwLhw8chyWE+iZOVGrqcAtrxXFvHT09+tJ0bS/gTKbA7G4Khs9CVwOpyCvEIEqwsxH27mxa9cawn0T0ogsxqvf9jkVptpgeZ5otzc/r50gh+sxsCPpu9drcYge3jNI2AxBK4HIyAznGMBPmZr0c1wzNWUzR/uTUjaYZl8k0zOIYbAsr4uwdwQ2B6NAxjbXWF9NJ7vGFRiAItOpoW6BIs3t1+2KddUJsiU2JdgZm+CUvfWE6pazm1qWF9Pr3n6fTnuqn62hL+HPD+j4ZQPGoJYBnoVxiljqQZch9MILPd3uI7ANlZVzNn3dZy9dZ++8cWn6KOfvr5dlAugs6ZXfc0pevsfXaA3fdPtoh2i/V2lMVcc+IXPPqCXvei0QTfH377hlecU4Pkbf/D4wNj4a9v3ZcWhMjeKgNQvv/3R4TOv+bpbh37Mn//NR+bP/eyvf4G+5aVX6bvf+GXxqE8m7QA+rBposZko4zVY2JsAtAHwAA2B/WqiVAzPi1ogWb5wNb3P01xZTWNwTBjH4H5PsNUP1u11DYbK4jkEDmVx4xbQlMWwBhRUX28aaLZZjedxMAXBw6K9N763mb5rtWqgTEX4h++dArS96ffr6TyHBW1d14M6RknMIxrm0Tjvx/8+qN1MRy0wq6+HezS93qCdbwVbhvOd5thePV9ur1fTuanz5SkI5um5TP/NEyhaq4aH+y2RqkHwbUct2C0/ZUMvz3rYCKeAeDWtlyfTOQ2JxRS4lfeHZAPTdawbGLuaxsdwf6fxUJ9xOc5eHXfTJlqfRR2PR1NAfNupKfmYzv30YRvbQ2AwTesKIg3r+0FLxst4qgnG0fa/b5TxsD++Pl61Y9XAdT3pRox7wjjAVlOQ7FgkRtC0TrzC7igg6Z999DJdvHRCd53do1e/7Cw99Pmi3XOdXrN9rZlK3LR35voO5tYTIdQxBAurqvW2Xd/KnOKa7E9jpIAfdQzUeTwE7puW7N08aWNps2l/e3MCPOT7c92pmsmISnd9dhVs4Ole7U1r65h4jxd7MgEOEqgof31zg+kceQAfhn13NQIUqykuuDEBBeUcbk7zfviuk2ltwRhQraa1aGR6TZodk5jquEeMe8YwVqgBIesVzaBB2UfH9zEnHwXYWE9gxvD+ejzwjZM2lo9v6iSpxgs3aiJF0zlOkfw41yZtEbSWJszn25bvk01bs06m54IKUE17ez0epjGwYk1lmwnPUt8McXtbKSA9/rZH6Fl37w9MjsPtHljEeD/0iat036ClRvSO/3CBXlyAdgi2fW2TYcFamc5rf9rj61pVzqbOd57G9jAHb7b1cm/V1o3y93VNPZjW9wFIm9b7OSHfawnysP5Pf1O+6+Ck7Un76/G529d136uxSI1dhmLYdL779f3pvGrCWr77YN3WlBkAE4lsnZMDODitUzfR9tDNqJY3rvF7bZ/d34j9dDp2BUnmvWA1zSsW+/H0fj3fumfWPW1/ipn2VgKkW7fX5ZrX6zY216v2ut67YXyt2/0Z4+Rmcb+3atch99cVt3u3lnsw62uqQO2e2PfkXrdet/tb/r0W4Gu9Tyf13Ddt7ZJstz15vmv/ekVt36Xpdf3+VXB/yzpTxnI99zqehnGyqWuOeX0y7p29th/2xHH6lleco3/yv3+Gvu2bzg3nWlpcfur/fohe8LzTOvzMGKSlaLf9Wwt2lD955deeoa/7ylPze3/0Z5fpI589HgCOO25fz6F1YTbXn199x3n67fdeGuLgFz/viH71D4rux6j98fDjN+m//skH6b/5sXsGXQ/JumHDqpXtsBL4KABCkVhdT+OjFCP2p/mLg/YsTu83YP+MiOdWh20vXNexOhWLhrrB3vjeEPNM+9s+jxluOY1hzE5x1P70nTy9f3qKtYY16aB9z6npXMr+cho85zyntgdYT+vN6YM6prZr5/b9cj773MZ4jauHOGWf5/M/WNc4ewLsJzCynnt9f8yBa9465l9FUH2MyzAAGaspVjuaxuWqvL83nWN5DZ7XcuyP++Vqil3291rSPrxfBNt5/J5VyXtLUWtvfODlX+vt/5XdZLMev79qbo1xAk+x8PYzEOcoW4YU1Qf0zLsP6PELJ/Qt33jr8PvSenn72fXAtH/d9r377j2if/mLj4RsLhmLr3k3v7BlwGN6YIXVUROdflNWI4OWBPBHv/dOuv9T14aAckxO9+jv/OCX0Ue375XK2ULn5zgJDjbzfTpYt88frps6/eG6zcDDdbuxteJU/vtgf7KUm94fqUGbofJQKUlH++2JHM0SdJKTt5lXf15v5ms+FEFJYWjUYxyITqfDvZbeluS+PvdD0Th7tNf48wUYqLSgg70qWjcO8vpdNRmq5zsk9SW5qcRmtqr+mJKrzUxFOthrThXl+uvVHu01stNwX9DAr/k79xtn9Ijk+y3wPtzHrIB/uI9ZO2WsBI2r5NF00Yf7ur+ChaCPFkxsdKui4/H7H7g80Pbu/+RVetGXnxqAjrBdxhiQw8Lw0/tFvOkrn39mQKaeLezAPjdUzU7ojS8/O2hyDI4txoKu9FiWjezadsyXStsjj10fKIl/6/vupes3Rlr8u953fqTI76926gniaUEsi87BWjBA9nQCWIGJuunsq02nHX5/r31drYCgfmZ6pAdirh/u6YWmHqgm6TQhuw0gbZd1eBALpHKgwsn2e+r57ovzWuvvV5+ZnkEFMtRrHl/XimY9L0zAR928j8T5HkWdQYkgxtEBiTnSfi3vRa3s1e+f79G++M799nxP7YlnfSDm+oE4j8P2Xacp7medz3FfvBZMoqM98xnSz7Seez3kKQHInBJj4LS8jr0WBJ3Zb6dyStzfM/uxLst8bHHz67MYKph7beDsrZuX/fg64ci798Y1tYiWlp9SER+ESx85pn+9TR5LdfzK9Q19crLo+6rnn2oWxaJPhIW40awXNSWqhX1XQRLZiztbzIp+V9tCeEo8w1Ug4MokXWDkMYQw9kp3DrNoA1PtUFWwWqjKsuinY8U4YOV25FuizTU93b77YVcmJzKuCbVOlkkAXD3hz0a0PXPgBYtBmr5MztWldWDrY9cebn9O6B6vqfvDtKhujPUewTsYldfP2u5P/+CHnzX85ufe9gV6/rMPVZtOCVmw8rTvZo8oCgEDkDdW9WD2lb3DNnXK+xXwOCXW0dOHYp4fyooZxT6elLSFhGrTvm0Qct1lvQbPa920jkDMq0h489S+byPrtI2nbZ7Rfx5SrDli94b53Pfaudc9Yzh3cYwj0Rl7JPY77CcsctMOgGm/BfU1NQ6T1/LDB/ttaT0Uexz2WzKs4gnZkiA+T/umZdpG4IjdbMJrwHi4ujYdiPtyIO6djZ3mWGEvb3Oa7/U670LI3ETKz59/7CLdc26f3vZ7j9Pf/evPGnKlv/ODzxxZFBy316KjX/bY46Pm1OteenoAJepPYW28688fpX/wg3fRb73nKfrHf/vecA6+4L6j4Z9hXB0yve8jV+iHvvMc3bs9VolXy7GLKcAzhJsMmU5HJXBrTvPUgdYJqgzFcozTIp7b22vPszIdyx5Wp/VaxLEiFaS1uJb1fuufXQsw6tSqPcRT63YLTu030eYzoqC0t2rB6t6BfN2ubv+gCj3zDB5iJcbOkJCPa3s5lYNp4K+naypr73qvNamu93Sxn0S8VaOHch31DE4ftBxmXG/HY+0dynW7XffpdZs8e+vWcrK/nqKE1QQU0Zhr7E/7eAFDqqzAer81yKz2W54+FB7mGA/zfTlcIe0T+voXnaFzt44OmPWiXvpVZ+j5zzwcZAqODo514UqMuyFXhY4Fl+KMFX3RP74TyjoTF/bGr//Bk/RHf36ZfuMPnxx+V0COX/rt8/SO912k9//Hy8OEpM4xKOw6ItW/z0gafKQeBYuuIyEIx6ILKWzGY9lTjTlIVgKHym7MywdaDUP9CdtEDPVPHWSjuKoW97T9UStm3aDIup+eVa+7fqXjCSFoEzVdRq1eGUOBoXofpSezbTOBuDsssrbW364e+vxlRWj0DS87Qz/yPXfST/0/jw9jqmwcIwVP+PkpKxMe3Fz++//toe3nT0TgNX7+Ax+9OtiByWt57Ilj+sV//wX6m295xtBv+fHPXqPffc/j7tHfdmZvADve+YELQzA62FtOH/qZX36Y3vX+8/Tabzw3gh0stBai/Iy8OBZzDhOqPsnAuUSKc3E0VQKhx15wxxz3XFqwJuoTjsaQE5+29nfc77NER31f6SdpGR9vvY3FWFblz/J+M2uFfwXPsSIALC+xgYBabOXspW9CBwJ7nhTcJ0ocaoI+cyuGKzvI5JyA6W9WbiTZ2EoiRyu/PPerq21ACHwl3euzdez09pNPnQzH+om/cg/9ze+5h77rW87Rq77mltHtogD4t+yFAXjml8DT3gGugqUwPbPcBDM7S6laL+v1oCXdWigMDaxYwQMSFAjTC50OkDxPbjpLaOc7K8Xb4B+7ytV1hjxPulPMTtB0hiogIR8B5qAJFwDBGGIdTcxJMyi2ukC8kCHyCDf7VgM1EMQwkrXRFC15FutmI+DbRG5sQmeLTfWtkqA8sI21CmD3wOevD0ylr/7yUy0mgYb9AW1/UoVUZcwhQxu7Dvek5cOE0dqKB7eao+HEyfNiP44soO6Ome0hwZ6ULc3ZcZBV+dm4enCSFHOHKcBqCuSW8ZHdN7yoMy3fzu4eheC1ISs5AAnRmtRJmDkCOyiRZRGagiys5mnp2VN0sHwjdPaeyRLCJsYoDODffe8F+vEfuJfuun1vcPmz+4sdE+W5P7WNR3/tdx+l33nn4+4BlZj3/R++qIp85b1/+nOP0I++5Y6hdaU4tvyv/+aRwQmDjW7K8591SG/9vSeH10X/48ypUavqk9uk83/6mYeHz31DaX9hE/OIyr2zHrf3IhrriegHRzGldYdLByonDBmOH3ndp6HXNmkt79wjAncXSJAOUJNt3j2rNhVz4GiGMP+NOiA4WCy4b5YtV/tJ2ps1yq9i56bFRcLVtGl6yD2YY5Mp2Tps09vt/5X86vf++MLQvvIbf3iB3vvhy8Pf/Mn9l+nnf+uJ7Ry5ODA+SquLjl/ZAaK7/uzR01wDMuA9ekR33LZHL33Rabp9O5ELXfh0SUIPSvX7Nrr7zhGy+l/+r0fom77+FpX8Nw9krTQf7U6QjshCrLQFSPAWQrNonZR/4xyir0HYrILLzfrVJHxaOb8FaYhEaiYgQ/ozK93eObDEXH2r9FkyMjIyKJHvKgp3Vpqm5soCNFGcqhzMPSEfzlb+9ktJgasBbQv0SFRGG/hTA/wm0FpViTVb49f/4Al69PxN+mvfecdwuP/iL985/L5MpuLvXGxkrd/aI0/cpP/uXzy4TWZO0z/84Xvo1OGaHtkeozi31GN//HPH9KN3HdClY6KLl24OPZMf+8zVAewoNoDlgz/y/ffSr73jUfqn/+oz9B2vHlWyy8/bCwiy/b4f+8ujre31CupN77393Y/Tz771Yfqh77pnAD3AfetQZeVnQIle4MVBEMedic3x40sBLflMmRPxzUxcjQK3FvJCrFhQ6s6YARE+Z6vNPV0za6lsK8vqWDZwNwKdVtfICQEGgp0wqv6hMB1i55pIUC103Amdn3bDMdOqlnUW4CTJBoVWxnbcRKKlvArzIHNMxJ6C4qbVdbLM7yJW+rHPXqOv2iaFRfPg4w9cHTR6Hrtwk/7iwWvbpPGY3vehp+i1L7s9GYLSelzbpzK8hQTLoKEpdedWz/AAepsvYp+0eiJkEG9j7G6DLResTGuzdCxrc2AS1ZyAcZYBlKE3hzZCiUsgJDJrMmsJerBQjWRoOToIC9f0aSn6NZQ9FYJIR/rGyLhiM4sYIg2ytYipfpZjTAFhWQsjoogQ/BahzHA+jz0xaku9ZjtG6zgsY/g133CWPvyJS4NrHhSbQwvMKZsWkvNEiw5zkuCiEx6Ezz5woHNCvUHVXpkowFuppiKUma0qUTz3FtzQwvPjZXFQy9DpOr2YQggH+2bgnK3vCVGyYHrmEC2ce7YHRxbzaVJL3l7WWa9nya25SEYfvCJaECbdFemxGmuU2/f2cJKntnvNP/+3D9GP/5VnDMyJ7/u2L6PPPXRtONZnJ4ZhERAtoqX1p5g/vH2bGP7F9v2Xv+TWQf/tne8/P4qYTtdZBEyfdfcYlw5aHB+4ONjQ/sC33k4ve/GZ4bg/9JfuHCxq/9FPPkjf+823bY91hm7f5mif3u5vP/0rj9N//v13DmBHGcNF96P8zYu3++HpQ6Z//vOP0l994+2Dxp3TnoMRf7ZivIEQfQ/sSO9fJIoebPE+hs19lmqeWXMeKHCtWnX7vaC+Z82DoISdyPQzsRC8Rc1a1aSMBUS1Y5ke4qz3RROUJtYUwtVMW83PbY3RAiLjfWgY35bNOShcQg2Y8f17t2P21S+9dZgLv/z2J+jeLzsYMIIf2uZzt23H5nGxRf4PF81wQQx28DJQu33WOU7yqc/fpBsbRNGRDqIjz+zpP37rXU/SZx85Hnpyvu2bbqe779ijC9tJ/wv/fhQque+eA3rza2/XPaTh+iMGjUS5FKWNhftITINjwxxhxcRAC6Kisjqggp0WoE2K65X6G5YuYCpS+ex2ThFik9dJrl1dWFSxWARGzepOJanBThZiIpl4cLbxKXUZnoXXbMLp7kSWXEOIqqkaG28X+ivDIl1oeBIs+uBHLtF7/nREDP/qm0ZP8ar+X6yQyiZwdLSav+D+T16jh75wfR7AZfN4wXNP0WOX1vTPfvYz9MrtRvPyl5wdJqZKZrefH8RJ//TC0IdZUPoPf2x7/JeM4qm/MGl3vOalZwdApF7ihz5+iV74vNPD8bLFnhcCyKiCFrZdJJ8LwRGbH2aPfUfghdlT0Vyiy5H4o1dyXxlVdTKUfHuiocV6UgDgLPBNkGtOAmDqPaMEOJCWhdZDPkMgmPsVRsvUcde6pLq/47nvZKnL/esm+GdlbQPlT+npvv/Bm917zeIGKoBZoXvj7x8qFfCHrw/6UmX+Ht9oVulnb1nTbbfuD4ytd7//Ar3p1edaSMHRRjsee6V+oa1w51WKG+DN7FkC8vpX7j42gH+2EBf7F6/aoGJdyMrzH/ago26RkcAMpipVsH8E1hQcoVt2DsOVJxT4D4ZDKCEA8zlBlxWrgBHh21igyo/GJNaAnQKkMLbf1l68Vbbb/dhIJBC6GAJxoLDtxcQ79bzL7979gSfp4cdu0PO3e+GH/+LK8NHC7vj0w8f01c8bqeqf+fwx/b3/5F665da1dgtSyCtSYJZFWFvo08++c50mdmHSj2XWWMoeIB+WRTquEaBlgUAsnICKGzvuAOiBASAPuMWGPiFI7u5V5grDif1s5tCSuSwuExr8+ZhYY5MAL73nb02MOJmrFtCOxkcGakbFIoqA/6dRMUaPidAJnUtM+NmHrs1aHXLIFPZv+Xn2Nif6ttfeOR+rMEKKgPYLa/w4gRrv/fML6otf8XVn6d7bQT/7tkcHu9s3f/PZ0WHFON0UTbnfeucFeuF9RwPzowiTFjvQ0q7yrm1s/IGPXBkYHn/7+79sPnz5/tLS8uKvOOUKUejcB1tsgi30wMd5GbOVaQGwSlE/fzaRaxmCCakAW3HSgHEngQEOHEoDBR6TYeuzu174fMpduo5vtLcoUvRP5a2SzelcRyTE4GOc2TlT2bP30CpoddvpZKpGx52379FbXn87Heyv6GOfukq/9/6Lw/vfVDRpXnTGFVKin/0V0313r78EwOMEu1G9yCpvILBxnMACB55wtq3FVVqBV7FrbKXWsqL8kEV1qlbdHMsj3q5ZRPJzZUv1OXO8ClIVSOVZI4MtumijfRhTaWfJVq0O9UVL+tEK1ccZMy0rSmA6+MK8Ua4Mqgdeev7i2Se7H3eYJu5oVvWZl1Y11s9nvhZuAbuKgIw1pDifIuD32MVVnMgirurQjla9ptU9roj3klEDWi0l7z2wwx43SmiRgB0UJKzqOpBM86DaRR3gi1MQzNxL0nijwruDYbfo/MqBLattI9nlfMlXDm1lgAOwk3tgk7ELZ06+M7LA7XyHNTJxY8a1mCwAJEtAxjSWRVvvHDxzMEbKtX7kczcT4EXPe4cFs6fmQzAu6oq/4mgMBICEQQ18i6dsYdKgx6yNISzHlQBccEwNhEjdD63TIa3uJAdwxRwV1IWegwY9Ih0PDWywYlWwtVSf3q8A0KzNwRGfX+7HE+22Wvui7fsuWJ6KDbI1gwVo0EQ5SQWoWXuIbvGo9F8oHZCa4YF1dwpNY1cnRxAaH+xYZBXogMhCpeXsDICgBZ8Q8Ub5/wK6lxdFb+ra8ck2aFy7curnHr5Ot92ypltv2Z9BMRnochXjZVA63Sf9lgJ4POeudZdWjAxE6MSSoGBPNIAAZwkxOXJKavlKITOXutaH2ftRwpwF/hmogSRTVkwkkcRvdLirgEAgZjlEAA4HiaUDFLl/b1Iwif397TkDy/uo2n6iv0E/37UhXtYKQ+h0PnQQLtBCMZA6Yzf6fvZtyEsXGLmF33FmM5kMGKDBFpUiACiwPFanEqA4eBq3ISxkLSAaWALRFlDWjFho27FV260aM11URIPypGMsuMycDRCp92ZEkbzx1IYo2kj9pTa/2S+44txmcII9854DoFbmdMtEL8lQydgeS/1oPgDH00AilwCPnV1a7MP2vfg8i1HW6gdkr1etQCEoAYseIZhs0mpdwAIRISUqorPaWy49hG3ZEY66uhHIHNQ45MBHvLWIbKZv20jQx2TNmjKqp4DqZRbIHIKUjifxtM3EZEAN5hkKJFIIJtcAbTznjdb088JRQaKlmQAR0KUBDDLTIuoAYxHsKUJWiI9A9aFLZRYQdHXS7OLtMw1FgEpw4qAErBfH+X4llFaXVHMcoHBvQeGkhSwAouSYkhTMTQJwcQ7ApgBMdXvgZD+QwW3W452KmZIPEGxi7QJV9u0mvACwdDdk7rwHA7aQr8A6YMxuiAEbwmm1RJtCUCnnXoCWAFn2RlaA0yaVUUWO2d+PrAUHBjQjm7SyBjmQsFsks0LRLok8139OZtqAHhJvaBgbNspxSVE7wWjsRBowzIJLwi05nbVduGV0c6tkCBToZEcvGtMVrdjrxEgx1Q2LXv7RTm7Fkok5rYCAAaFYV5kAU4EVgI1qw2xtLjoQ8hXc2SHE7MEz60HccKWeMR1/o8oeyJNtJtPaqqkBgPg9BEUYRva6glKVmVEXJMBX4hXNmw1ALQRKIfc8cR3c9i2IBRLy12JSPeeeoyGYLc/lcFKttqDAM+89Cvf2lkSPgFgl9TbQj+f2l3o+ayGM26vq2ri7mygmcQdRnnNEyRgS4dGsqhu2pSD/vQVKwtaRheKSZD0iSWKVm44Fc6I4wFTOo6SWE+DIFnTseq+KCkavIbv+Xuy4Sep8ZPWwsjFl2D0cgC22UJOCJ+wZPdkxHdjCwV5NvpuCxTWDg/067GOmWOCXAkbFrFmEeHMyoEcIXCABJahbj94d7ADFrGHOQQqmGCiK5ixF5IqFZ267XcBJ1RAsS9SSMaBytLk90ka3ckKKQBehLhnP+23VymJHeUHAFpv+TgZWBsjnwQ5NaEaBtHxAsPdHN9PPO8kQgbgXzQHM9GC68+cQuEVaFn+apKxxT6Mv4qcFcSy0PYVyDXQQDNZdRDArSaX7gk22PdXdItkvCbiAZKWFRfsvk+ZaCDlQbhWnmR7KWgSuhhqbyqio51gDmPk4wkJ1Cvg2rKVFdesuWg+VEFpr2iICy4NGCTeu/GsC0/lqmKw+CYJVBmYlUjRzKUoIXxWGBy2NnogEKqDOg4NnqieyRRTQrk0NEVYLOqwOCLHZgREoVE7noijgWMzQORBeXGgB9Zt/EJT12lKVIFdSrc/0dTad6tMG/hykqN9GHKMG8xvz95uAWgvba4ucsZEGSgYUiQCgsOoD8tbGpAXM0r5lMSVtIIZOAC4nwrxGbTwIpKjq9rV9YOlDo5RGyjagzKqIYu1UAWJCLY2o9lZ8D9C/t2J5Lmmw0zJ4llbzqtoCzgmr2GvQbs2YBM7r+3RLzZrCES2Jg6qMbHtAUlRizQuwvUVwqKfeHJA9a25uJTPwjtGBYwhiNgbvAbdWCxHYxLUaOUeajsSwj4mVGtTAcUxsAAiAAsKJxD5DVME2tCR/ABTYZxFSHG28DuiwAqYUyrACGWR7mFfyaQAKTMLMPuF570EAlariA7wSLyzbxwDh85oIGSYa0e56zM3UPiN6xREmBSIw3USCQnWt2MYCG4h7WZ+FHhubDdw6qWqP8LFVtD4x4snL0aS2TKqo1Q5CBHlJywm0U/tMJLkCkyukQTXn4uEpc9YKOia9OFaYlO2+zMF6Th44h9lvwZ6Jl3bRWP0Lyz7YkTUaJe4wDA4skcjhMW3K9DgCwLg3TlS8xIYdRAE71Ozv9nthlj/V7lP3H5MqRa5T7gGxvvWINsUMbLJOVUGQuNi+ar/ciuIuMJNlvNbRhQ+PkQGqTpDYgBbsblGw83E05jGD4FXbCWxBiWndZVaaYbDol6Lt6n4MVvmagvoFU4NVFslcv9PQcdgoVsIvtDy3fIqcEaxQV7d/z6wFzO2j9cYxSUAfjg3ttE/kRBMFnsiHAIZhogv9cd7zpQMemYAMEsoHs6p6snIwkOKcFrUEhTzTzgDVH2dDL6K5AgRJL5IpNoh07Uhel+bzsuwRnoNBKZTG03fpLNSj1OPnJIsALR5RnoEStAELIqsARJQjwbygsGaJKETQZn8CjskomQjEu+AX5xh9Q1h5jhxAVDUNuoSO0P+QReAre8UbHspOJ1uwHYyqPbEfA5baSwFeohK+YOOx7jx2g7B0eCbzmKJ5J4Q5u33FHM8djotq4xikANRhU2nKBCt3aOsIgQIE7Jcl9JaTxZJ10JgyN3o6HNExsg0d2vWlZoXDcrExNOKgkmLFB10lbslxC76nUYHBEZggA9XATYaR6xKQq5x74MmOERClejDOfYEWRP9q9XmlfbW4V2qWMupEZuOWoI4XBiPZgsnQTjtJwD1rMoQoZzy5G9sii815ciERLRczW04/LJjMmEUriJwDG/KBdwWIyPQZS50LZIud2oeE7igFFS/ZUzyj1U1MXAV9kpJb6bgSFokCKyNKtEG7FgveWgxRRxJaO2xulRFc8nBubYz46hIdQkwiNQ/mZ6rXGZ6ZKayrmIDOJNH+2MY+cwFn+u5NVsXeCMZKDRzXQVLrQC4fU3SxCgTbvKnoR2BzMMXD9VJpzqEvS8ZYXoN6GhIZEbW7wEWFDPTZKciSSLN3OTaKAQ04SSR7tR87XjNAiRGzRnhhCNiqe49hhwiIWWoxMm23FOzLyXISfw6dAha8k9lO2Rqi/aWt4YykGN0DUXZoQ7PgkqNXRNfeWd6QxUu98/CmkykNxOrqsXUhC298sDaJYGUwijByoFDoFvkcLGTkwuRN0sKcTRcDi3bF8WaNeAPmvbKtUUz1fw41pDx4le2eFTphi6IhSkYMrQpGVRNsxls2KLSDzZKmEgtAiFNQZDfkY7XE5Oi+L5LGObBBgKzNFlFwveFuFwz9IQMY0UKdVo1QDXZXCzHXpm129EouBvwUZbASSmtiq61C1warreOwQO6ctVjg7wQVGLIDadp1NhSCoTdIO7HczklBhVHSlziOHjhAqp39pqm3WRZOw8pitgds6WJ2AwBF3eggzQdh1teiRpVSy5/shlnW/DidD5y09kStJXbhDsBXta5EbSTMYRyTsiBtfqXsWJcQdbOmR60nT8t1sqfqTv66gRQjiemHCeIb7dGUVIg4AnqQgEPQ4BcoOBb8Rh0+TyanPk4UC94hqkowxa0ztOAGYKisEbuWo70zCjoMIQIUJx9pn3QmfkpBAFs94tceS8gF+Eylo0ZdkqnIxvbMqJCTC056AWRAeZlXFA+GzFXz2ooZal5DVXDYCCrN7ZAshEunFXQDu+9B0asjYB6+ChD7hJoSrdr/1ESD5+5LiIl1BQeogZnwlJydaLxgAMyKCEhOvwc8ESSgM1hgOKEwCGjd/9uexmHCrkubrO4ZZmthMrEGK5aQM9gxGTnDgwymXiCaNymwCkRrDbJMLtmqbAD3/dWOCduu+ZZZdJDoSrDZ19isyZbVFsWuqtCYZXscSMvtyKW2wIJr00vo+9Yl0rYP08J+l5bGEYND3UNysCdGIBPHDNeZJcEa8H+6eg+2IBG1VYdADMcYk9u6ONknOWD5GGkFy5CMilOgjsD4jnY+kV4NI44Fvjgz8ByLAyf7v22H4Xw9YArswZlyy88ASAXvsLVzXFuQItBZ/xVbTQ+pleS8sDkOwCX6A46Dd2X3SqrVU/UgsAnupofeiuwtJ5XsD5XuGBv1WRaCWalswoiSMpNntVItNNDc/mLLQ0xPv80kNTugREcmGGDYAbPYCfBI56jfFd39YQQjQY4D8MKOmfjWi2CHoywjQO9rBWllNvAY8tBmzDwrzPMgBlqDktX0vgQDQFpNX4Zjszq/FJpnqfRumg4hdCkmpoemepp0HKxgBaVTYiSuYRBBjmAf8DLy3tk8Gb6CywGYAmIl5JaNAYYOssGBKmbkwYMgI1TwS+QiHU8eRDR7ju9BmOxysKCIeBgRllcrj/BV9V7lLOvxjXRAJHMtOkDaxsEUCpvaqlIWgIVin0jitkwYhXLWgCRNIXpAGcKMHRdtDk6Hjd+8WR94FeKMVpuqyTzYYN9t5kmQYRTtIztDR0tF8Eg4B504WaoVLZ2DCqP9fgsAJKCO/N69FeWuq2pJYF9w4SAUg6CVsk78ESkiWqCBZKsr+3useOesNY+4Jfy17cMs6Q0Yq0DNbFlOJHXZIUpVWnem6l6QYkfYlq8mxs1eWwM+8h/Wb5PJwTw4TJMCRnR0BkdguCSwCkocRrwSNJD7nXp2FDMU1WIDuy+wssRlA39s5kBTc/0RJOoyOYT4nE7YpfWt3ZfZU+rN4qP0pGQwy+3sI0QDTNqJYBogc1uYuHmWkbpa9YE/NoUSZAB2VGlF5Ljk4u8Y/F4QZoZZLxCsYxE7pecuxL2KNlHuJMPxNujYtBQncrYAy7QAiFDe4vG02gsiICUBGDgrsPBu9ZHoPjp2wdL+z/F2Geov2aJGUj22zmq7gBmrZO/khRuhxO05YI0EDykrUmZfxrv8d6j+meiH5VTFuPCRFLKwhIJFxUgO4jCX28HPxVluQOc/chdYvDBFO0YYr7aCbSQaLPI6GQjM/Wgj6MHsxBJEbgn3fYoZogo/rFjC8z4auRSYfZMV4GL2X15w6RN31ett5XUDWRz/YsC9pw14ZIQMuAVQoRuBSjdCJVn/UOw/mAEAedvaOONZEX410XlXVSCNR6BCOaaAnVqIrW5C/W4cHRtjaatEV4MoXbeaCMSttmKwhYN59oImtu08WfYHzeGKpMfZ3ukYRWt0SWghyAjEyKoopo9QC+VJnQBfoZO7zvwcBP/e09ugKrgsIsRQsFGU4BHejWCh5371yDHWTZzZtY9L2DLzRJUq2wbsY+QBk2IQoB9YUSLEykG8zFhAauG92MP9MKjWYInrCl+ts59xFH5aBlu64G4SrKYVQW4Bisv27XhaiQCFDQBmkwZOaMsZ6Gi0SBCW6uKAf0lCRGKzkUCg6t1HMK6TNh8mK/roT2Jvj12brF3jVAOGle4B+3VTgMFy82bbzG3BJ7lGzjZtUDGLUlmdmXiRUwnb5S/InC3IE1Nt5N7YdqB5yDU3GOmQI8RXpAOaU7UwlFuATYCV6OPUBBoVbJaynCzaZmD+W9fcZJjFzO55soJb2DF0Zfug9WOZu7IlgwStHMCJgqQFWFWLohrfrDXPTDziJ+l0VisTzMuLWeksU+2tgv6gtcgSgAIaqJQEnXqo/TV3AQsELkdktCnCvYe8U1W43EUDjM00AJlEIAfVeZd13xybeYGZH1SyOQH3Ea19AWjBQUXEOULZ+8N5ohgWrDjuwEMUDyFnjoYAlQFxpQg1c15AkoBiWlkP4g1ggTkQ4IiLSTv5AoSUk2ORWLEBW1ZWz2xHdz4KrN+jTm/5PiugnJwuX9ryG+zTmTuOW644KEZbICbQdIsE1iOHFl6qiwvQma1AeYdSEzvVGdUIlvtLdoxAgEflJy14HdfKmKUubybYBP0CnRjfdtxMB+ex+Y2IjBpQzp3FVowjWKc6MX9hi1gsHFOZTP9x6EujY1EO9hU8PRbJ0wY8lhD5NtlZsm98rxkH/c892nNUUWUSPUvxKlHFT6szTGMkedkaa3NLtWKlKMSsZTBn9XQYmiDPLS+yRrUSyJkM8waFX0DZ6MrVC2bnRhei0P89f5MoM0MK2HGO78/PE4K0hDz7YfJWe5lOharqwaB1hjFkoV4G5zS12uMeXI3TKVF8QDYLY+S5mQctMhF1LS0dESpFA2QfBEV94YN1567QZmCdypwLqllBKWZfmbLB6CqqkkVzGYGiuamksXWmiLRQkmJlFhQzBxRbCpgQ0WbXz0VjdkMSPNBSxQILzzECrTg+PyRMj7rSZ1ZwEWNztcv4gg++FNMNeuNKLXCDNlROgKLy8mCdAH6ulcAzPUjxE9rE5eDivDq6CaxtjENV80mujCwkH4TgZxZ/MUX636StS6cgZkVGB8NXtkC+BGuBS4QJQYtSgEj0dhIelQGgOJeY96EVcpUjiykNsLlyFoOB7TNm7/kJu8/Pz0UCUbKQoTMP27JiWzui/ny1F2TladiAjmfr9DaYTaxSgSXSVIW5CCCYQQFKJxgSCNu10AMw0RENpk5bQcKqkKenCojs12WngQUPzC4xBmQSxkYUlClpAY2A8qCdPWMkpDIdHIBJwV7AmVg2UV8MRROUw0KAS06tLp64T+iB6kjAfgMILAlZOqOD3r5u9APCpJm0QCsnbAJO7reLY4Nid/xw43GwkuFnpEfCiVCv38pSqn/3TwPx5Chg2glsMcK3bOJLQq41FhlictaXTXm3CKVzHn5dyTNWnbWIB8IcBIOMeQ9iw/mYAQVGXBUUdCBma18ruYOBiBF0NALTwzxnqVaTMBiYPbvxMJeNKr0c7JXqzrKreiFEvvR66IqDSOJt7IgVfDGAR0hbTKqLEJatqgJhsQlkdxyOYuZxoBZQzY+buQEDrCt6hJgk6gMDzKwQGFudkvSvGIpe2ipnzR5wTlSZlUWStmtlxyKpaNAGqlVrtmNtwjSa9ULOAcBnP3IRxwzEcMBo4ISWySGT1ltwIU4EwSm6DgqU3gOtjVlY1f+xqrTN/e+uICrCVbmoSYfpUCWTZ2ZFbzNjS7NMrDQNQBw7u3AiGsZBGzx7z3ZXPeJYINPjvy0Y5KT4Jt9fkbZT7RSNdPtiYOTESQLJnTahJH7R7JjEJo+DpDJjcCCo5IATanG0rAVotNXqIOr0p1JgWSiD5o3YT6G1VygAiKxiv2OOsB47i33q7PuTzampz3AS7KITvYF85ad8rFSYQ3kP6B7WNv78Gm6zFmmRzTw3Iar1J3RYCpzJ2DRZIAOsBSA0M/oCRimn4j3cnuUKXpWQfJEBoVUyJ44BljHRBlcJoFayhqSetf47S/mBA7e9xSwMEZdICLKi3eG6t9nkx997aNHqqQQ9ipdq4FuvUbINCSrgTXFL6dowV7p4fk4gVmAHw3CAWbrjoKMPy4K9IYAQBOiWQJyZ2LEIEBUxhF6J1GM42OMQNKcO644RFD2DddyCEWzWVMvSifZM50bCOXOBs+SPg2Q7KV4s5oqIY/7o9xywYJh1m2yPfSiF5nuEBRCFFsCc1H0cm1vK+CQFLjb7uY0HZOtlTyCbAqHL0EFUgltBMSnbxxAUF8K2FwpENDkvgGSCssxxDKDW6oCJETmqzflasn9afW7ivltSprGSioeSc+fO9dWs2CiWQRuOwDqikP3Y1oesQ4Add27eu4y6Ksu4A76aBKd9ZFE27sRzaOx9NupgSuGVzYqseTgsjELUQmHYwvLvKqMDE9OPOQIyIzV+MkLFMPeS9X2P2GayKC11IBEDitXp0+ktJYNm9aVoeKySSjBRrkjsgmvb/Mm5jaNFWI0ma0jqYBHszL2/VUTUrUgaIECk+wAd1Fkkv1YLK6CzmmmirGGCqJo8DVBmbSNb7pG/17wsamSjVvG3hsTg9BbsyIlalVR3DFNo1ZnuTbKfzTKuuTFYQFFlVSQsc1XNWGuAjMBb7NYMaCso30/bVJAt1SusZmc7Q9bQS7lgZJSAMPfpAgo0SeZhWIlgn5SGIIWt3Bv8ylqzitbCsFMCiIOJNLlPEm3Z+58FmlGbDJIgLwDSQ2DePfcgOUeURBoXmZAyHamVB8/JBejwCtUcVUt7xxZuD7FrUpy4KBcXxLdkrmrt6kFnqNEBHu2CqP11sCeZQLKy25Q99gSMwsosA0mYqnkGUaSNpNrUXV25ipROq+CcDHIIyAHB4sUI5PFZuXWpJSrgJTdaPrQOCetrgEVjGcJZqw26ZuMXtAyp0AiuJD0LlKJpmWhZNdkKCi9nIVgNAxvOah04+rPld3JS/dITolbyuk5lLnEW+4ssZU3PH44hiKbZksRNUg8NssJI5PtTwApQsiCKYl1PLUfyjks7zdUqF5xWLWWRZamJA62DgxXMdks6NGPE2UEb1jdRbq/ZDa+CDbJDiu3urREAQ5Scf8Q6iL4g2UchQEeQ10PYte/d2ZN3zpd7wqq2KgsN+sMAD9QrQHCyV0UFEY5jo27cQTmoEj0TcKTBsJiT5eSJaD9Rmn+CkRdimXmrho05EDj+ZEM/zO/sGCA97qL0JBqPButO4+ewZTb4srnFEx1bPRVbGXtx6RImNQ+DO8XCsIJVxRMmbhNQuQUfCCI+sXQpNuMccwsoDCTMYnDaYg4LhA3KFldINUjgJTITcbGpBVr6xTr1gGDEhYOvRAoqieJlsAZ+SaKlbnHJqFccU07m6rtNuKTyDuudD4p6DEViVdQpZi9oZMUN5hIrjA86Ah90NmV6YUmrwKnatiKIujAZb9DUPvsIA7NIJ8vkevY61pkjjDIVAoQIphwBskFS62PeZRUGSTFVyj3IeYcE2mRl9X4xWNXz4NOKmZkyC7y6nmeIxA8K2dXHkagnz2BMuydNudhCFMzo2pshATqYFnzMgyoDUWzz6SoUvEMQFlB/oyhhtkWWr9EsG6Pfw2zEUYBqqzmIY97YsYo7HVSgQKchqKwmAR4nfFDZrhPayCG2C3RVuU5QkAWNlFRbHF4RGGbA3ntowAqdViwr7MXoB2xuH0yODQ6E9noHg1eDt5Upe2/299gHTNGYhk7a9XgV9EPuCXSyBv46bms1mgRsHx87URWoug18UMnedSALQjJmxpyYZyrzplLL8voDABiBgmLtQ97Uf5PFmFmBIzqZHp9R/VsYXSXJ8tgIlgfAgSqwDvLkI9yYOQ0O2pQkLDbHLmzaR9hhCljYS3Woaqs6TFG4B/iM1QrzOT002AVOI7ZsCiJKF2tOSNixleaawfS+ZXc4hgLIsxITu1o2a1EkdokgnwNi5l+XmBYA6pwB0LvQNgJAp9tqwMv7FycuVykowXEVHkHrB8OIYKNjE06u85cyHczdy/PLGgxZxy4jNtjg6H5ErToUiwmDjaTA0j2PvBSiItNuWEuumxGs9ejob9hCZtSmpXKgYCzuKtQeOsMIEIXJa3IRaRkKLN0Qit03FttuOECLog8amjZU4Mf9scDCtVPpHAnlKGgAZNayUCzzAIV3+iCSc8jk1SDZKX8g9ULCXASC1RiTcYjVLAtyZZeLISiQZL1XmXYMOvsBBYxu+DXyS2N4rPyZhb340A4fs0I4R72hHPQB6CwXCGv1usVCQdCsYWC7Cki0d1a4hULFwsDV9VXpKhNmJgUHKolaNm8z7TD6gfJUPWFFixoCuqpBUttyrIKhxPICq4hZfQStw5p3EBCIGlyiJNzbrwbVMVivalsmJo+2xpDFTLu2rhIs2pSs+4JaDCAAMNYqotbCl+0E6Shec9KG4mKmLHlBYA2J/BhSvCdzukCyQUnaJDixVw8KhDKH2tCC80onzoyCHg6qVmnQEwi2wRe3U6cbslMUcXUjFsU11WKfV/ohy/0ALQOXOdnH/ZpoNoqINh0x6yy2C2+zrP7G6L8s9lMiqPp1RMrS+4Kcxlg0BPZWRjyNq7OErDxyA3Al+FHbKK3FoLjTiLYEyqm9sjDDLJQtWAQb0qLWOp7I9SgYWu7f1fdeuIfFVDMoHRPlGGKBAMtxh74rzWmFBSjKQkgcEzgxHnQDFm0o8ntF9YxZAe3KWhzCKtjMAKlfobSujJ6FJZl6Mo/URoGJOmRxRQBBk36J1n6JKlvsgn4t3Gmabh1QKgJT1aKqGR4y+mrCu2ysLWWbEzddLLF4Anrs80au++P1H+zFiWPU2h25oGTRB1MexpFJ1rhX7eUdWBsIEqrO+cEyAYL9ER6TX66aW2Yz4uR55/0WQTtPhuF0tCO4k9zvkKumCaxrrwjy0IyVic5GGjEwLSOcl4pWRH2fTGih5xBFifLvTn0jezauoOhspuOijQv7gvhQtToz5Uz9zthT6zTH+kYhUJL0S3OwGHCG/USgZBQcYUcrIMG8YFAn0hL7rmPOCVakqwJaRy0RY9jWznnt9bRxDjMMyc8kozZF5lhN3zKad2x7uB2rNI6qOcmQVTXXTF5EManVcUP2JDidZ18S4MHJBES0OIt+YRJ9yOwSKcQl3gmIoOiem1tdRUNZcPrhlssAtuRGIY2eOBYgTWUVSY3loca1ADJs1UjSozYic+VKGa2on+Fl12uFqZx1swSulbRAFRa5VQWbWyfRW1sJcb1w6Hsis60shPbWOsVrQZCofM0Bry2zyCUDhj3CFFuCyLYrCDo4NCMAC0krL28WDqgIKipk7M6YfFWLObAJi1rMIqZ+Z34jqGIrVweKnydxQmdEIBoWVXpMpX8X9J+SiojVzeAFICa0pl3QlLBVL4VGwyc3hH4wyYm9LXX2c6W+XsGrVRxghHop0g3GiJlF4njhMLLtM1G1kk1wzXkCEs0pBOdT3zvcZ++2wabKJHn1ot+Vk7WepUWqbJsA4g3dLKuwJyxUEnUlCL5tk6XbFwzAwn7Oy1Kt3I8CVTrm1gaCwE+83Sao5B4qqWsGd0PLiCDFVrvWjTjCJsjQ6j1YSSs9SKezWiEbv3gls30YuTiJKMLSLZA7RKUWyLoZHwIpYUAtaOCJ/Wd0WsIKFgRThaGc4ZSf0Lx+cdd+W4qnGyNCZ2+IoJqoIQ2NWnKQuTUi7vh+ZXgg0K6xZKIQOM68XOU6gVjTI+s2dZMxY88l1cVMR8glkYhjIApa9xElpJa9G5T4uxa+shvKtpLCJ57dxAQLZBZ4FkAEzofraaeVMnJ2bEDx8l7djQECxpstvEZ5DWOHjN+AXFLHCr0CDS0woIPrsXNruc8kbveR8ZwdJ9lYZ09mcOCQFSjlgNDoAOCABSYd3KI5m3UbMfsYjEG5aGqWK0HveU2ICmnpQTqAeWti28vMrp3ePiw4FxkJXcCs2LK44Ssu2iQWkYrI9PWJBpPRScyEwNkQHBCCMm2h4QSQW9l8gzUgx0HDqWdi7t6u1wc8VsmCMw809mrGSAJ4tTrG8qswsm7RQ7UqsKNoKXuhH+V3ON5FqffhbEjZEJdZEIdEzwFgqxE8a3NAZraGa7BSAaNPXFdcaaaCtgSpfCbBCNuIF/TuASrw5xpY7kDDtQs2k7EccsdI3HKAYNOKVA4jVFNQnMWqKhm73t7LKNk7xWVSliQwzbBwFTcOnVQQ9VImfbeMeEdDUOm2vdA7anfFYlsGza/J5soAESvyNmb1cxysIivyKLwUHlpRooye4cO8UNXPqqcZwGQqeFiiS7AXxUs3++A8IjV3cGAfax93x8rPPUcDToT988E1wTLxuB9UWlTLUckTWnKWvyDqMExYEVEvdBiAibl3dMAuGVmFzAvM71tdlTnxFMiJkqZGFkVy0qMqxwcL15LYH8wZ55mJAwHAQNq/crZQNKaHY1duWItLwjA8ZHHKRJzymAzMncTaDRVq3qyEpn2bU5Ng5obn/dB/xvvkaAlZyTURKToQrv0I5m5rsbH+4EIEfdWoy1j1HTeW6g+q4CHYPyrqYd0TnhYoOXre8v7GSIN9tvoey+KNHnvDnrpp11+AxmhB504bgbOFTdhbAOVtGrskvBSw8KKsnBNHr6w3nIxrSWCzqgqkgSYdJbFBEA6p7+RgXoQC4IZF6vCUxA0uld2wH2AK25hDjU0rVp4BA0G/KwcpAieOKKoIYGzQ0+8044/NvV/SE5H7KyjRyosc3jiOB1LxY473SnuuaYGRPDMpBaasiHlCkrDEfOeqhwSIScxLrJufDSpSV2PE85w7cWV00cpNjXWLBzsatTW716bqCCAaqc+kERm4ScgM42VOqhNA3jhWrS3sK1nkuIUj0A5OehcQdxEYNghbX24iZeXunhU3CYpa0GCCm6ts6B5soB37z8r8mwPM4mkDHivuI7+QtXP2oAcjZg0EvqjKNpANwKEV5NE8jKmiRwEmDq98C478ili4xBjOVhWBQeu5VigFi0oSWrDB7L0wJN+D1SIAYbPbknZV8Yu0SZxBku1/5bECp2yhmxrKirRiMQcEEO5ZtJnnpPNQVihglK2wyNZgBRMcxZcVRaKCXDo6YLFAs2k5M7LQCNqo5H0X52FdWiKrU9Vfavs4OdawsEAK2wU8UiXm3PrL0b4Qq8+HbQhWLyA4VqSarxwPog3X2LuqgnQAoq4C+ukqWrAC1CcKLKLN0TnXkKfRKSABIa7kQMEwqOIdLPkobpcAYqG7DDDiqHLdLRUGARyS64p6g20wz7neSNq/LSpwGyj3XDeG1frENfEKgB9KkiXWmzxYe9S7XjHGnNi3xLKOQcStRizWP9cfpus2bKxfKxjsdFs4tiQHAklsBVQYwH7ep6GLAQLpsExc2TrDthhR126jDMiCcQFIPRMdaIEbYG8l2CCobphNb1n1pKOTMoB0e4wcCLZCaVkRtriCCPwWemKRhpEV3wUL4KsyVQATo5ARuLPtLQKe6FC127NBzJ5iVgUl2CwHfrRZEL4AjQj2igXtbi8qaY+BNGcKBTHdKScCkiF9OmGtc6fYQP0Cu06uAyck21YMznWsyIivKn0pjpNcmPvqLtEkt5m2xU4/rCuy6bPmvJ1VhbNWjDYSAed8P8v2xVBDKmutkMA8cpHZp2MJq4AKW4zpERACSogVgp9jBI7zNbsvAbnAazThuAvmeyANuwwZowuD3jPJBmVkgWxZ2F3FWlZwsbyo2oEAIHAeQigLq5cTmwHpXcRfTnae7LQ+tAEIq72uzQ/TUCeQBQiUj13sbCyXQgcCu/AGVlM9u8HMWkqIc1fHNgTjI7qH/59qeHBHoShlDBohPIT3kYMGepC3gyMRIkn9DvgCAzpqOI6qKUQ5BaTMIZKn9UlY6UYIoyNGUvc07il1AsAE2xI5nNgo5ptFFRBC0C0sWs/3fDX9zWoqWDGsqS0MNOM3at5hgbTEJxiUgNVKbXuY5ViDQhNRq15GeYul6IYhWrF1X4BvddJ0YBYBCJsJZOi9MhlFEvBw3jOazXlwnrTJqhgQBxhhG2rkcc9JmgBjVRqLRXsmwwId0VJ95WdXctxhavMyAY/SDOGJJi9RcZtTIp6KUsIFHANF6FW6KNEvShL80Okk+lI29yYYP4vVn16EEZwXBffQ6h327I8dEBJVX4W3empTacAycFIMM61Q9Z9TBxxfK/Se4/toRPACbm5ZSliUVQVrNW2mzFKzwlfwM0EfdWoCeG6aQnCVW80ECfR84AOKul428U8Ix6ymQjnvoCtRCGA7N/S9craK8h46TSAo9gEIgSaLBLulzkpQPxaLLVZ6vcLUzgM294stVZe1NgZrZ58Ktkj2hboHEPeUMipDoLaJan3YslF9rlqiNY4vm+sYlFOeofdGCp6sadk6JBfW7PCJ2sos7uvty/2VB1OZ42Qu1WVGIHzcYTciWT9AsbVrmkzuYKcRgbzRtSA5PjLXNPY226CkMh7hUBm4ZcHhrNLNiZhkZ/vgXZAe5La1WmvGaUW2vZNz1mP2/N2zMHUtFQugoz3mrDBzwI53BToidkPABuNO7OEYHggs46HbATp/HrO1zZ7j3PUo3tclMLQISMg8kPN7kk567gS7nE3tcb3lKH5Ve+y07jKLdlNqsYDeuKVKkin0wuRTTNaNxRUoKGYZyYCcZYHALpSsA0VI/1b2vchMHgllcX4sJ6ZkAkqGvaUPB+LTO1X4OJAWMEXj7lKdjJkvyaVlZTx91cJtNjslqgNpG8PKKqvSNuPSNFyNRT0okTnFVC49SBtRgucBA5FRZLUhWSVjYTVbHVMaqgYtMcNWEcsQOiXTghE6NshQq/V6w2nyNgDFODAZnhdIu5FsRNuGdL9x1XvW8jkbJNRC0urvFE5xxIKnXU+jJqDHktFDo62vSmaMzDbcN7JRx59sE4VuDEv6ubyiyH3FipWJJJ1N0MdL8RXCQnBow7UkDIUOCsJL6D1psf8I2XXOGZl+g8xRTAK3Mqe3kq0aJKwkA4ZL/bxiwySCV8R54MkGiHUAg9XjiCyErbhSp88j1NAg72KQ9VjvCpqFz5OT5w4PTKnXrATG9WUhr4y6Sg60uHWm4cGIj+vGsXi7uUUI7Qu1V3mkylVLOBAkmly4ZpidpXOVvnFhe5ny3KxuT/a5tOZGCAcrWEeNoEfbtlFBUnPlTRZuYHU9RQJoh3aBAW9c7WgyPoCetCCpl9X+cMPsQsRmmTf9YwRVlSWsAKkithonoj0AOxqv2y8U40UwZkT3KEDdrFxFBAxTPTOlDyvQRLS8sE8bACxiOI8bwSo1GwYbL9g5mAaU5G2NmcgUmMrP0X4QqO/ocMG9WJU7+l+JBkdk956CE1jQmegk27wLpmzEvt2jRX6tIcIQjW3q7+Fy746wr6gIsiujI3Oc0yLDJg4NQHf2S2PfQj7YNzMEiBFojnHclcNhP0uwdHd+MjaTBKJkW5hiN/HuwFOEtERabitGDvhlrVWmSOe+tvNQOIjVor9J23Z6Kr/ZXA0AKjn3XOuiSR0lnm4FSmdNDpbiouyK5WSyMajMLJ2xob+KaWg1bi/GQtf2gYjJxxZVDALzKv7NDnSDe+ZzKV+ynWoXhFCoHj/PwTrBCdIUbJ9Guw/Bwg5raJEU21cLiMfTamnJKYZG7EsF+wK2iBreE1NxjuYCPMbWmBamhC0DGuTpOVTw5XdZiF2C4fnrMO4rsH0C6qGZ28DBMmDLnKo446t9cIJLTfCN2UzD2t8rriNbbCEtgrlV42VFXlUMHCKIWMnaAiPsn6cGb3gKyPQNZqllolqHLEFZtP1wkKnO1TvMAF1vDjgwwgIWWCbSgWPv8SVFe5uML23GsmD6/9L2tku2HEeSWHj1BUB88HNGWtMPvf97SSaTfuysxqSZNXKGbBf7dlVlhIdH1rlLCGYggYvTp8+pysqMcPdwz8mY2DAl9iQXt3BgYObCJPlkwIUD88LaJ1rbjdOfgS84f+nYWAiwoFsQ9j22L3zUcCuMPwWNSVvkzPP+fpTrv71XD34vu2WkyWtwiaVmXGdyk1fQhI61DCOp1UnEzQy/Cro+2OZPPwFJWyqtrOPQPuWdSGcH6SlZorI7Tb1ko6Grso0ZnuaVYJL2POhNpY8xloFxGjleVjsutQKLKaUq+0gxYwyRl0e/R23+t6BXXXPPdubmtDPK3pM+M26Z4qeyI50tRbMAk6QRXdKO9rBUt+Qa7od6j1j3eLoG6TL3pMibkJQhTClBooQBK9nTmmrKCTqMgtKhmYXlZS9LkRpFLkVOLhJ/+B7l82hN44pSOqDXAP+jCaR4D43+cAZMYRizZrcx5rPKpK9MIwg05KWWoa7Ma+qOBzU1TOPHoQQv/QI2TW54H46IOSnMNRvYECjOS2XynZiiR8l9XKsFc9CsBvo9cNeUzjjxGYvEcCY29WauP/AMqmzVE+KFMSW9heCiVEWLY+rDxH7SnwHka2AZTVIh9oEomy8UDRmcVDQjIYjVl93kr9k4KBcSpWtkIaqbz2Sl2dsejXbir2KZgV5I378t0R1o0Eg4lelXywV9IIl5Y0iqzBqkcFpNiB8IGsW8IB6YRgLFL0VM51l9PHSBDnjqP6bwwAghd2uW9fCxyciYZJz9xKJhcKLRjSumju3AgRvIRK3mnSkaWxM+a6iYWL6vQMJ1U5Kx6GJtYLMLyx9BtTz1ZufO5FOhEmV+oDOA9Xguhm1p1g8uKSTMTFRKVSAtZjfGYwV9M7w2y8/7cdxJMu2sursbsJ+uNKUApFOXjBfJ3eTp/XLF9aIKj7LpbLeG6QyGKzywqWV0rpOdbAb8+EHZj00Dbw8+msNu48+DQUVAZay04A/PormDhtjPeW8Nyd2hH5154I5Noy/4QllvzGaEEbN0GgNLZCNNwxvUOYf8iCHmd5KBT6ADO7jlag87XhK9uIZzpDWmd1NqT5nTjmGE1Cg9fvyhn4Cq7arqhZzKxTLCQuO5lDfZfIQXMsWSANfztrwgyigmYvk40A//c1xraXBEO83b2FQHIpI3hFZzpGc1deZcgfUy6sI0QXiqG/K5f55hl+fHp+Iixfxw+WZVTWOs19KVjWmEUo1iG+uNNRLC6lFSkcBa1S+1Jbbqi2azlWoc5hQcSXe5k+ZKTK+xbIffW4/rDhPlu1jffMI2wIWNVhY/vcVPP8D7FcV+3HuqN9pe4PyZHqK9sUl6KuIjdGDPYYnWfPQVMHlI1iGNZwyG38GxX+lKvA3jSbOR5wQdGHX5wM36cyOvSad0ovEcMSMtjDbN19ZGGx3c3RtjIkvuawi49DhR8LomejRFDpN0AkNiCnBlwRNs1kUj0TkTXzGrNdy68t2k3L8hgWZnJK+AC6Mb3X7TzNAdpy0G+vZr0JrdQcGplj4jhmyoiSmaVKKh9sQEH+ZaQ03Mz+7knhtnAb2vvhMmqhGOWpYR8I68wqcURB5dVz9KNgKbcgNvQqMUECh7o3o2glPu6jI+nbb8f3CkJfY7oZPGlQMS/kNgLoqR/wfZjT2k3GRloXSYPzeDTOqGlHCC2M3w5wWXmVrKxu+ylTyVUIwf0wJgji/k+i5IM9gLJeUJEjgHjtQ1UCKc0stAGpfCGJv8Cdjg8BqY5u6WGqam5p2fpqBHuqCHMThYM8a471t5HBjGcxgDGpw2Gi62t2bxrhP20IHOo48QQWmw4blhTtvIrzsSIXjUQ5rTPKS+Z4RsInORRrwuZY2p8TUnqi0AsUH8w6SiDEXxlGGvEcqrmVzjMYecV3yYa3bjBCNTMFSHrFtYn5MV7xOapJcY9yYDwj3Igu0TgO4/NQFUmaEhBkpQCjsMxn1jg7CZwa9jkevlP33fwQ6k2XEXCsVibO0rPKh7p4lVp2v26NA+iiH75aMhNCJyKlcyRs3xuM3otso9icz+o0TcMtsalYIX4zofBYtpMXcNDaqPijE3zS56pbghUgIWaoTvFe+a1BjdC422gPSAKoS2QTrjT4AGS/5CEWDGoCbJZ3XEsl6vnROstACZVRNiBvSpBVlhc9m7HtIYIs8bm2qqMJ66L6XD5cfvDNAwjZK4PckYnbrGqzV9ZjwyVE2BucQs+CVijEm0RxZeOAd2oIzWU/LAYFhP9rwzXka7GNHWkCK894p4KU2G2SMwo2eqdXV2IZ+1hEbMI7/Gh3FWKLtOfPgONOBe9vaJJ3s+dx6mloCTKSiN75oBhMo12qw5J+d3yTmjB8au3m/plPVMwM64NKvjTGprq/84ECQP4CDNOlMXxcl0AkoWZwuEe/9hBZewAiVQYzSLMhBcJxxbWIJfl8yLhJev41B3MvlDFnKpK+cpz1C9B9bJOwVH9CrJT4YxZa/RPDMs+3BTEQ/MOgtt45fEQ0jLg8Lj4d93xobIIETUeafdX+xcnO8rIMkLCgUrK54/S46ZvReMQ0fR/HyRFRhg8uJI3c0Ee1/vyuTnkRtwDFA0Ku4HQHm6iq+RtwnZPTDCFbt6GfTQW9WXEbFJprpLoFCBTh6vIKs5UBmdaTgly0w0wBpS5Abos0pCT51iMFM77NIUpC9y7MLN8YLvADbov44sffzru2zc5sAGzYb+iqdDyEjSKz+wa7olO3t8jSR+WKdwdtPOHSsTMWRwmyI8H4K3eW/I42oYkZ3clBPLKN+hgToboISGNeO0xtB7x3HPduk42sQiRjXJlIDAJ4Oa3kvtwZipsYCMRKW/fv7N6WSbxRg848ne888gpWI5OS5NxFxiaIo3hTZSnFW55V5mG+5z5JAd/dNinckRlAKeaYz2p2Hp1Zyz2GFqTjFNOJ1j1Nlmo9EnKVgVdZSzvMz7X6oShITO5XtCKQlZHo4WEZ09sXIBTB0RYtG5UL4IwaJYgcavqGdBHiVKJq7OK6MAf6wzWqUgTgWhY0D7I5Yj7ZOYOBniLs+xzExykTo0dZCAXF++RHz3xZjovnumd9wb6c8KTZJg+LSppmZ8kqEPjSrjGRygSK3tXsVNv0DfuMakrNiMbNI0qBzqrdhYwozHvYB5NGoSoKNDO5Jl9HsyTbw9dzEAWRw4lYfIGbPdWmXmpJjV66/3jDQRxg8FxEgmaYLfA9FyoHs25HNjSlHLKakjHjJIuPCti+yBKMqjDeCGNzMcL+TsWCrpwQRIxkvYlJ41ZANpsyEqDX/vrKBdoDj9qbAOJqcljR7F6Ebx5YagI4MF0Mjx8Ox2FE19gWpUet0YXMA/qq8mS5+WjLnjCX1dbBbkkIMxRdbrZHHEX1PhMRlCIXaNUTaLc4yaQ9o6Y5RNK1dRlJdMlKGzGpErAw9tsHeyDM7FURoTSU7uK46WrflWAxeUg5TdPIaVSvXxsHnqN3ecNfIB6fTDKeMtc2rsktciM9SGxYx2PHhIRcgMNE7GDMmgdkUIGjg9G67d85Wn3wZp8lCZHPcpDFAP/V6bwAKSIPHE2FAmxNDEDm7coYWDY3mOjRNxVgkw+gbmvIDdPPumWW0FBR/UDeFNN/UQU2NmE6qx7peL8HvaiKI7jDsTWIckY1Cqmdp/lvuiM+JWHm4KDL0gYF9nLZ6VfQwN8aAEwTMYtgW74Hlz550Q4RMGdiZ8ralXxsN8/u/fEF/ehO2lYRWLTM46JJTkqBwRi6FyZC6UXKpNmxPqFA1b5j3L72+NTPQY1dx4F2O291zQ9HSuEisuv6Q2bOl9BfwqhTQFMKF4T7Ce59WTinNXYxD3HN+sRV5jbxMQnqemVbxXlaDJsHMYVcmGdRnwYS7eIIlhbVYDtcgbFjrzRlv2M8kvjToS276PPMHkjmaqH/enH+YYiCklLjiMZtGPtrWmk9IYD+MPanw3d7nPJI3zkHCs50uKRsyN/2NiDA0Ysvt5DiMb8Q1TAuxeJxph78ZHR7ADD9dYzia4woB9gW2jYXc+Idu2168LO15bRdmWmMpvgN0afBqbgqnbaKJYvWCrjy2h+WKOn2NSsxYAFi+kx22jhgyox2HNmMQ4VYREUXDOxj1sdp3q6eiDaC9SuUAe2Uy6oUopaTIZW9PQvHMBpkZGnNmhsiAqoH73wkxE742xGAYwfHpcIywzdezmk2hi1nXWikl/K2B/v+202+0/ZFqKY5a64gVL7stZlm7mJsfaIWrReUpz8viKT21gP6IhrN41HkJohHGUjBKYY1QkYKuxQ0l7IBxErtFE1/dFMg+9TNTMyZbiIwjuKVSzaVAZZla2Yoo2bSkN6Czv5O0AA3cUrwRWSXlBtpPPyg1jXeBVuq4sOYLs6EO6p9RNwDKc+QClQHT4ippjYNkOFoLrjLP5/Lu4QtOAH+6eRTX1RBg2BRJMYzd8wcGGYsqpMRjzzKqXr/frwg3osQUQxFy1+V8Ycy5XN1zX8V0KuPfoDvGMPierPhscvve2mA3BIE3znhlMDFbmwFzUZuAEGBNR7WcrRt7czN1GUnOxF76TJDOmOEC3SESV05jPrd78743Yb1bOsWXBHrXZMBQjZWQgYkWQ5wO8ekoUfx73wDTks4Ic2Uw6H+5wPkocRl3ymcaqGrh/7vbQSDO5Ohd3F/TikkUKSGCAxQz4wRjEnCoHBsUAbyWkXCfCO3tRSvHgucddoo64aqpVUWymfZ/smpIF7KCbu8YGnykpw6jg+kV+cJ3tPEdQCJEBW6AInZuRB7gn2JweY2nDue3kii8W7LN//fWhpkIMYCQNEWKeO5qPzacmS/dLDM/5MBYB+4zMzL7+fsD4Ck99hkslhj8nLXPILvOeWqIwnzMGkP3+18GXiu5c5qAq2aJD/f1GcIwxpi2Uc8cc8MA8HkNJ7VSDeN2OHkvq2o95Ain62s61th3XGuoOfwF7vaFn5TGol7Bjq+W7ALFX1j8kG03jwSPKZEastimE6N+JJmFuEVAGLd0RfcaXwkFlxNqPoQ61ij5p7Aj4/PvIRuIWiAbhkawBq0BJl4kVaEG0vuj23yJkjCOnsqB6a4ijB4wUiMPs7yLucjoblu8XNiNrDbOI/3HA4w3Wdy6F6Hi/B01tuEw+LQrpqAGkYitHBKEWMt47gXWQ/7yQBAsDw/yaeyNM3WS1jC2uykyFBF7iC3ogIK8YvkhmrOrKlP69NhdsQqjCEvWPn8CnZ/UZzMZlKZzpZ8shzOZwf1yP4HmpD9Y1FXJAI6k8vs4nMxUiyAksmVmnoIE41yFOdLYOK6GidOs9gGrwZZDzvLY/PDjyQ2dd52OpOcr3yH4gmyatJALkZyB7GKAntOjhC/EBaQAy+3NdrkGP+raFi/pZMPZGoG7vbkXGgEvmpIHs+p/j6hQQytfjMMXWoQDIdYtSn3r50xyDakELjtsNfqO4US8RooPvLYFsShXaGbOhqhPGuEj0Yg3uvuRN4PDYBo95hKmtd27i8T4asR9Q9xGYWuqI7r4KeFOE843u8Yb7/GHxCyDU3KzLu5On9QIClJ3PYeSnIpHRJ3x9ehGa2uH2gbiVUtl9atEVzBGsOekEURSM+XO30Yy7qUJLtogERJSRFlDWO+X/BDURQMOOrQnVWBis9N3zSE1u/ht5fl4Ioqo3B4/wclblhhHpO5XxWdR7dylpKJHHI1t/Exi4awl3CN/fu8kAjXoVK5bl608dKGfDzz8YG1Q8mHdO6oDwyS5b02t0dduUMFG2YOcvAVEXDHMFaoII85kDPvb0SOcHnDJE4t7vPX4ClB8S2jLAYhUOQ0pKJZ6qWhGOsIGQgAaYevKfKJ+TVQilOmugx7qmnqiX6/maHHXvpyFXGpgidfCqW6OY+YepMcbr6paYex6muk/MNPOzsJKXDMhhajRHgu1GU2iM8UOINznyfR0voJtrlxj76zaCH+GTcqq7am1o8+e/+tSi22upjYgJk6JualmmLHFBIArI0b5rBp6I+4TKPWf1sZEvIpKoZiqaR0vTgwWyy+uE0VD79pUng+aAVjY3p+5A8hzLkwjX6PGpigG7YGJKxHz7h0ZaROFxbBrcg7Kpn1/o4IAYnjvZNCtWzNeyUqPtvO5DmUiNvJKoqR7OAX9FuzYEIboTb4d106rFYpOu97tiVa+G+quaBuaUNjNtX6+bQvVgLzSpkVDwUswNGky+Pp7Hoi5Bb1YSPYMwpkDhOzrWKbRlEkSkebgFSh2pqF/Fh9e8Ihfl6UsfaQ0ch7k24Q/8g3sg6HDgoZmLBO2Zt5p5VpUJZKkfsUbScFTLkkPYoKOBVFIUutNHTzhlWHYO6k4OL+uPm4LOAUD2Z+kiNKWAMmZqRTRkxnEOxSXd/dN/R42pvfPNFVQW5oMmqTrCz1uP3ixD0lCZgZ9UQtyMFhklBZ16Y/L1MI762RQ4jDmve5+ff0RnlyV+HKreQS7EeCc13XukFraDn83NSkg8tYvIo2w6uJQMXOqRe4ziKm3uhosFA8jKyPydl5t6dnVnMUwlV5tPLj1bmX/OegnyGXzMg4BmpKX6d+iYwBXX28EibhpkmlG/LJzJxR1ug1eK6jSbfeJMXlMgvK+dDFrqSEgZMzGD6BfBkVnVNjIGAyaGZzLROrS4v2McWY3KtnfzIqOAlhmQwZuP+Ofvv3SUM5sDt3OR9bnlrnAYFAwuWcXYSETxrMcMgLTjVsS93O1Zg+fGWN9ORPgwGcSHuqopPwbn0p0fhCOSaYs4f99AH1XdTA7hSwXXlI6jGI6UcdeNA8svQHBrLjHfv2MABDSis4GeYfxMJwXoDujTlEVJ1gnJSDiO4T1g1qpM2jncXwEfwKhhx2i+/bNHB7rAELWm3tyl8zC8UbIdELzHL5nWC9L5DQH4NThj7ZdrW8WtgECsCNi67bpYL5fKdRmXJ78p9DpieTRmjxENf080Oav4AOY5RysWe+4LLa9359GJyqzPjjYAXoq06oNDAbCMKABXb/MPjLS8HU/yn36oKXJaovzSQtJirTQMxdkWq4SAAEaOjqyzJ71KcDuHajXKd8lIWbbUpDDlEhcxaZmZHEnyZ39P1eB7P2H4HtUtuM1Lq56N6eCtRdfkLq5N386F3KHFCPFIoWtQWffJVDQhpo6N9adu9o2VouEqU2uxiN6Bng3HFU8LecDzfT+MK413y/+GzR+bwor+edb9x8VhbnOpR+MMYW7M55lmVa8xHoqsuA90G28GDEbIw0fEzotiShd5gYGM2BtjtaUz/NDki9JSedIZwGlUjD2Bokr/w8qEOY3Zc9OwCrjBAaRyihoacIR4WPxTg8P9CPD0Zz+8Ib77ogUze+RZqSUoyTEsRsnzb2cFnFL1SxPvmxUcGhhK0Dwg5/7DPj9Me6ZV5uXTo+kC1VfleI95kcm9PRVGTLO9zAkpKAoITdtx0Y86lz95uORr38zUXCwpZ6n5+lxL1Rms5tfrwy6Qg+2hEoacqdCjkcjfzyYXmFqi+KbGCdG0iOJ58qBCl8/I9D3Tgcp0PSAx7sO+U8CD859/+QH95RAgd2KOpSFlmNJoSrsaUljCnX0wZ8wD6GGVH7q2dvMkeZQGnVN5HFNQVQHHnrUAHc6vpClXTPO6M2xVMLzt9+z3dTuyaEY2+LS/o3ujMR7MCFUpwqH2cQsA/jpvRzX50NS/YJxaSiQM6gth+7kZ/znAvX+NQWIc2OPS0drZPKz12MT0to+B/W1xdUr5OcygTsh1pZGGLHAjja9yKb3Vuw+2Et+gRHpNb48PiDozgxMyfoNFDi+yIpPAUY20p/nlW8v3WRNQVIdL5Zw9wfoBnMM/YCscDlvc5KHyYPaeIn/7tA4t+Xn8IyMtQGe2goNEWXZM0iNqLQS8gSQ1S75YuxSjRhRFAd1la5URKyMD+Laa2UQgYXx6ogB35F4zqtOd7UpmaU9hBnMMRZoL6uuxIIaNr2oHCybJHknUirYue2gjKnZ+Vzb6sWEyTCnOTacKkLFnkW+VB9rJeytH8uYCzpXASFmuFx1HWBPHgo6yI/7z9uMLAwi4MDb9rAcHN8xB+fpmlt3dv2Y2GCLtdQO/F/BhnLw18u4xbmxgqLJK0CVJOMBCfVT8ASjXxQBR4zwpN038FGlnCkviIclk8PMo944mZSC8H8rIvujBYvyc6djM7DHj7oEuiU3FDcZLLnv5LX754ejv07daUcvUh+8enWtHMe+Uk+w1QVVYDCAxKWMKabNANqKEBL5R52RRzb9sYZmGOFj/JJcmn7g6o+vN2VIqKGZslWli2fcpSTJqROvuhQNTJn9GphdkoKM4+DJ5cjADWeldLlDHmSkwJePcNQFHL7dbrdr2SKR6Brc8+TbiznckMYx8WPFM93oRTmgHCVxu7GTDxzQnasDvX35Ea5y5iZhtzSoNQI8HIOCBLXYM7zf/PH0za0GVBzTWjt6FqpKfAYfAS5flsZOG2dt35U9+vrlr5mVM79uQJd/kco+N99EZtz8Y1GIE/I1SgRjMuXdnOPpnytynk7i0+2IMyCMEcItKkKja9diparczGJaT7d9d0M681sF98p8Dk7Avj8Ju61P9JWuyjflaMI5twWevJo65zJwZy+zenpR919jhioqV14Sb8UExtc5G/Jcq9frcPa8k7eMX1JGVoqig90rB4/IlM6xuDULYo37Y5QfbJQUDJ6mF7NzjROz9/V4CPF5BTAC/igvaRlFbJv+PJnv7GCc4Yc3MR1wz8hGXSvPT6OuILhkCltFlmeXXAlyqUxOQlzZ61EIFy1Oi8CbZdFSH3Aq6uRg1nA9gQdrOGCAc0qCew6G8Ymzb38ko7tTmZeCKQYvMNrf6G1LaHF6I0dAzpub/OohKhJ7zSq7CsSgjcagKn5RRTZlvYLl3NF0/+kIlyjr9+gxM0XocnKUxFxIwGGAMB/o003w3p4wd9txlupgRdp0PtRFsubiU68JDvEkcC+eaGvh0E5q9EspmxQDYZbYdnckh/KlLYRQmgA+GQmuGeWoCtjNoG0ZXVrrRQ+E+xafY6mHwRINReDw0NFoMWzk3xSgOMt4qTQtf6Ev0MP7tT2gsEGVHqUkeFwjsLQxBtdW95kuRxh+yKaWAnqYmcsoBIhtiMnJ8bm5v32n2HfHX0MXALDlhHQK4TKIvYDgcS58pyAKCZvUCokkvuIl3NuMtupeSxkAyVb4szDsL2NP4uL9/9oMJMtINmz1q8Ha2ADx7SY2ORvoc7CcZ6iacYaisXbzZM4gnTJFcM40gSkJd8qLCfeBcP4M0ooLiO9JURqjv/VFv/fg9alOWo8jNWELMuLcPGOCw36B7EG15ipjf5wkN4TAmuW3sX41357C/KfswpIM9NZIjiDSd7RuwZWxclXSKedp1BDuGn90dZaW+NBfExvli4MtUQT/440xkWyP3BuPVRiptIuXL9d2BbaijmPle2Rp1+r2bX7qL4dXREooPDof1NYbCYv9Y2SlWDjWfgFwQgLr5DinQVXz0uNo2aL+X/QYlgQT0bqrhwhooBAC7dBCwrNEn+L6GR+gefkUIwUUS59jd7EN315n0fdv5nfJYG2hqJ6GMlg/iet2BGpCu0e3TBDPmJeknUr4Z8DBP4eirY9ininTCw8355xFtJhnZbMxICBAm0SLYJMRV/pRkS0nqilSxwSACh5TRV1FEfa+cBJNPinseiV8rCRyp2zkBjutCVOdpiVwFRWalU2JcD1X6eVz+IWJWyagdCIrZTxjr7rrRMeaJCZrAeVb3PrNXs/3vagRYZQN5Xv0aV5ENQOGse94NAu2f1yevnrcd8ANpomlGQ+SwJTYM0QvgfEtp2bFG0mTdWJw0G3qo6Fy0+jzerzvq4YtjLq5oChK4E+7oDvelWJqi/3bFrwOj6AsQNUHlYOtf4lgHNoEvRCFqEVnw4/N+HakXgQMeHfOTwaqnMRMB0WyRsWMose8B2vyvSmJNDCKH94BpID4iM9/eBJTJmwKF4weLoWfVfYh0KwP16PEzl6nWHJspKSdZyHcXkJfPUx3l1Ejz+jxwKNTTOE+R1KRPc7FDqPO+REfE7hhxR7dRiio3osXYFjPToikgj9kvsi/H1yKVeTQExZ+JJZa2Eiz3+A5Zm/qsbGGvVerHNkl05SRmOmMxA9tTUxxptjzVIEfyAsuLn8hZYyHKSco/sgO4ybflwyPnMIbFsRk/jId9cadssOcCN806YzaMwB4omBr9SS04ec65fbGQzyXZqYIpanTsfI6UuNulYjkGRFVX/IZO073lcZ5JSgZzUDbI1HE7/6Cv0WfMgB2ONHgkF9zYxStRt9E/FzZreUr7KeSCA2aMib16nRQD2yPvA1CasM2QAJAZsUXM1mhyGE+JqEWGUZRexIADRwqFip4m9MTfuL3H+r8kVcNqY1jr1lv9nXwm5UEsQgaqw0Xyfro8KYixmPx6RpElRS3D34AWlVEQGZR0LXkNJ2mXKhszUMNErldAhpALfNUJSbVQ1xcTN3L2pvLdBZ5vXiIDrrjVjnxrJO1LgEdDTYxsVx2m64OJBGJwCz3WRcNm8BqNsUuzqTmOVhyGbiOu2w0d1fEWuYDMBpm4byK+Kk/kBmsiBK+4HyaFQC08irlRcmyPjCrS09Y3mltdJ6y5GmR2BEZ+0Rn4XlUSypJgPJBzQki+lZ1ERd3AsTt9qwFpsc2BN9CCyQb7ZOxWxUH6YUZEj3F6O+oDfrl1X6kcjGT+maahsqloeU2I7DH8g2/PednvuGFzVCIeZv5RkyY4NfwcYtslpYAbYuBIB/oRPeGmBGUMrzvk8yKxkAVXPISVOkT14QrLmNcTjNkbYCJ1TeXDiUHU85FSTKVNmnLf2sgoOsGg7wtTuB/RiYRJWwwZcWp+CpjXJYxkvDUNnNNnrVxRxl1/++PRi8m8x+Z9l+c8a6ne6C8asmmo7qvdcAEC4EPmTXOaTFU7orLKwEo0AatRNnjLbjVKuvY/S+W2klRQ0kCKZCTNFVvrgQayMo3soAAju1QCVQOJELKt5bx+1l7MJRmmLKJQD5ezWATLdclFIYlwRcdTctHXe3GsBxGxir57hSUDoiMli31VoFzMWQiLiE5jHPkEFNIAgBTNmeU0k/TM8YrSgadX/+7HwzuFPpDKxRQ59kaCllkXsMM16gyfgpZVZG6chPKoczN6kdfi1MySW4FFTUxzDCV6ksXhDlEzGgyI2lOjoYexCjhCBlthQ4/N5bOIwNacJm1MjcTDKFj1jHSpPwUYGkYsbRvCZ9EO1Uh7AgGHOsU16Af69QgD5pTrLQvxQE+BrM7GFzCvsz4X0KsEsequU7x5qSPxkknwzeFD1uZYPBn1jomd9v9szM0y7JsvC00NnXrG+yyBI2MlzjuN1BdQKavuA3aEi4lkRogn4Ql0V3UP7t767gYBgxAOpq1Fd4KO0SDZqEPMrA35CaCOyly9WjHVRk1UyuEhMioA025mOsqCGb+KwuPw16qQdSozYp0zbZnbynBJZawXF6xiGT2MymhD2omQZnARWbbDNUvLTeLKhbwxzVERp9llnhGOCtgQw8ldcdPLWA0J2r4XPVFGZo7zfY7CGQ7xqqjD0lAOivYMrfcVySwGg1JLm8cpYx6sGW3ndWVirZCighl6YjHlMTPNkKOks+i3QKCwvKCYSETtc3pU2Oc1Pixa3ePjchF8ZHZd9l0YV284psYVD5K+gycmzTAwzhRVFSY0MWKtATIVXktKyT0EHooKIYrHUxR95CNvaKP8jeYMNJGFwKDmEHCKzgzliSaKXujpvrgzcg1X7GUGFCb5xUStl82fkt4WXZrbADd0Bg70z8nE4rb5bLmOdgpUz5EEPP3uRxMhncarjiaJYZqHrZ0JxWQXwmxR6MEM6nNiX01RneNTc7zbkZjUxWCws1sRVoPeHe5Zi1b1jE/d6UqNoek8e1xItbOsoekU6bCCtZpCQNZ3oFEgMXlwMLnCMy8KZgO2JJq9fFGIzkaeD8Wl/inPjAFHK4lCYaEQNZGMyXzwAonQjJPsMxHV34M3Q3ZG2191DmlRqeIrYD5vGcu9GLyz4X77CiSmO0zfPE7e23wwX+UANrR9/uF3vbS/KsHTR959k29+oUZ7A7PZpRb4SCBFDOeQE65szQ/Yz2SXJOK8vEpjzg0gNalwhBRD+HhRbs6CCch2xYL1IEO/JxzAygLsD3G0fBC+IMy4vJA3jq4ma8O48y+JBOa7bT4/N2/Q2jd7Ma2+ADqvLAz1raDGYNSNkolYPiBN8c+ssDAPMKVHmTaBR1+vIalodnJlbaizKiHXU6xkc8jVRfsmuQ7mw8esK4oRHljKaaHZjzLd3zu69iaRmcAGJGIRt2fiDWZcFhKoP1/3OjSVBeXUj3IOh6kV2EHspJS4z9IcW0+YUsovhOOFmvtZ4QHYDZxS/OqDXpDZ/KEZaXRk0/WkgueKqFUc0g+LLcaNCTGjxrxeaRzwUTt1DjohT0kedYMsyGoNjprsgpsiUrAR6ywUo0Ql3Wxq9v5wdAucQUN3gK9sNvtWgNmIiKiMckFr6Q99mi6HaraTtJ1AxYXLRgO0/Go9gigtxFqQzseDPdJM3tMihwL+PLlN33dLDCQxSjP2VAPlwLQjBU6+isEASgoXMB6fUJiIXk6vGfwknCv87vcT3vej3T/XOKMD/ogwJsu+SEH4lBQqkBtm/I6meIdcH0aY8cm+FNQglfW72ajBMH7IMWCz3OA2WYmhRSaEjY8+ikUznqCFs/dYWveBA9P8029wKxLbtShgEr0shxVJg+zbzF5CUuQpgJGBSUqVn99H0cHqscQClbMw3ZgpVDWJLCaTqKaXBXTIvhIskbnkBRbAxsDeMLzEB6k6xCWcaAH//n4BL1ieH+kNSEgDAjn680mLxEGgpLhQS7ObgEjxvUXNweopUUCWrPhZ1/NWV94CGhbX/tiN6XGObSJy4Y6+f6Wx3mym+vHaI3Vjx4Nnz88/ovnv6POuIDgHcuzxXDSlHBl+LcWDwsSkhLWG+SG1jEoqCNOu+y5eaMpbCsnGe0mbikcVArzp9kQeYNjXY4hsDwdYCAKQvW9VeRbme7jY16wWhoBRel3sSKyqxTAALex1HPHclTz13MUHbPqeQno1w3QOYNJAAB1v/ZNkrwk7bpdq4nXNK7uJgtAl9QNkPKGhMKlGJ8oeXanfZM49zqvFbPhiTPUxKZmoSV1RlG0LDF6+TNmTiVMkUVYF3kB6nrlVVfk5BtPAgcntpD+FkAcdmIMsMqmcQzJuxQmvhJpEBhDtfALQjNpbv1zu/DBOwC7haXkgCULqk0Jse8JXrOIFxONlhYetU4xxgzYrYIrTy3NAY9YUB5YjIZdKOU+7U26gkGZbKUqLUKZKOxWKnAblcKGZm3I6+MJEtXgrmi8NmZlCRScdZK+SNbCZTLC4w3kRJoWlyWhjDOj6NJ8N0D7DTHQCC+sBWQsVOlFOr3WMZfada2Z9eggHIPL6k7fjvby1RvrBxLPtUtAyM84HdYbBc+osIvamZsSebd5urXj2wSpjg9gUW7lYNLFzTVFhZpshgGXe862/j7wH2c1R2dG5b3LFp5AheGD4MjjkaCPAgMrGAIFG4UEaYCcE70MvFJxcf/IKcQW97mlE9wJpxYl7etnXgC3uByXUcY+1sKcUaXFL9GzfoBkHQCl57mqjjUv4Z0KJjAg2RrJ+d4ghaNQUMMJGw2uT6E1e+/lGHTblAm7qOYxisHlDI1djfxeE6IBr9tG4fu59qRJoQL5MNDApNbIHx9dgqEymZPVH1Aef1kwnKVqUSYIzY0GhjvP9vO7zO4wnTIlZmNJcXCJFNdwlanFdk29W/DAC9iFD29P52Nj9/sfDNu4Mb3AMYbB3j6xL+HNR6y8Mdj/vtwLSvOo1OgIs6p21IzImQOkFfyfsFBAZCHaj/eGNv3dfmIMn2FQj2Ovuzq7oapLYfH9MJHEMQhfU/QYD2FVGk2C8Vb7l/J8uI00CxnCEuWlvh3bdoCB9cXnA53UheUVwrNKzXnqN9X/uJxC3/bjNu5WEbZJ81jofypru3IZ3RmN2bZjs48HMPtfdSEUwkpeWU29ACrdVzyZlPdjRlgtwKMYnUI3l5os+Rc6Y4kNzLxkN/mpLLTPXkjJzLb6utIEfKVRW0yVk0tfkYcBMiLzaJYLi11F41PXnDrjcXMGNwZZI1c2BW9hQGF+FlM6hUaNu5iIFs1NOh8uUDER0MbIE5ST2C9kgM28mLVfP5ZwhgSOo9MEyAWmnaA3UQyuQOu0iSCbFZcmYChWhVWImj3ZuoEvTjKyTSsvLptNloz1TYcIQ0VBEWKQAYIvaZaO3UWb9EfmQuuamISY86bY5hm5IFvGQTAcQ20iCOSHJynrvDt9QfwvjNzApJWxR65rtGEZztEDCQK5PWbkTOwNPbluaDX5kw/pFYCPnVfYAkgfPB8bRvY+aO1KAKGXMphhdAdQs+/XULDB6Itrw4od6dYwY3BXOOhs+McQwDce1pn//Y37+/Xmbb0gBwlMkZxnN4mq2b6NLl7Sl3xe96WDhLlaHkYspjJET6/x7L+cQ7bNqAZUpwhro0u/OFZXN5wIl1phGVmSwANo6YlLmzBPFz+ZY2C1AI6snkEZELvnxuemxzBGu85qlGKzDW82omP6cyxt/eSmjDOSw3WunjBgqIpp4M9Yzm0UW9Zlwx8r0yGJgJ0WGMvuj9vtQeDCGxtGpBDaeHW0MxMRl0zXqD826NXllHdHQ2gacNyQ68GWjQMELoxd2f0Qfh7Bm3gJgTFH1Iz49RR4YwKmRGOGntKfUMPXsyaVWmaqh8RZxaxE+CcXukLKdxGASr3HYTSCHTiTh4fyk2fcL0C37yIBrWMUvBIjSdDOgNnIUtXMdMkRXOcrI/Z3/wRJ7UpG9q17nUtNd3oghgG3usZDei+6gQgUCnoDM3C86w3UPE/AejadAQev9Ss5IW2QopmaoIxhGlgadZcs+IjBz1U0vJLPWwCRDiKq57PNQa2qAa32KQy7U9CwgBGICcLLxdVPyhG2GaPoRteHi2Cv4w+BXSWm5ZSLclLMuDceYDUVelDC7D2C/YHUDyVA0DZOB0uBm0GI18iw6ddhUFxhAIc/g9azlfFgQvSG/HjSk2ePbbI1mp2xMIJvMcyd00V1ixd9WN+dIPiGTN8Jlw9GMV0N9E1CNEPMWnFll6Ix8NDw1hFnt9U+SWBT6YLGPSFJmQljatGEhX6eyQxngD53JKAfnES0atV1P9zQd0b0y0I3NLjb7mrPO295haogjFWYwB6TdGNQgMAY3doaXOcMXL2NcXgI91Aw1jLL7Sc3hiHtXqB/63QwwUaIXB1DEpuXI+TRYVXTJnouJ5jyX6majHVBFUZZgQ2kCXTECTtCi+L1wUG3kezWlBdAlbu3BmbwGf/wN4vs3GAYIJdrPmfhVkASnoeS5Zx9qQtf9kNpIFuthXmJUGVHDSXvLUP0NGC2dPqkjct2jaxmsflZhEkuqkxVChlu+ghfvqBO7HeDOrf7nGCnRKZx3ObiswuM9gyL5dcvELRRQSLzmXcSCt7yYhcW89kVxsKeJWpfPX8kN1vOJrsNxNcxmf7pNV1HvlThMXzPXx+V7djJfVwwgmhNsJT00nlub2N/9fHyOv2wiX6dul8NYmzM8nZLJIEDyDnhxSoUWMR4D6GzkHIRHLeD2fPV9Mn5JkyF5O8aGGHSbeLZRVlvFQfRRinydCee/5jd8cFN7yno5tETjPmbS1g0vqHyma6XjLi7tJqfNhShR9DGKB/BnIrJiAyAp4dHGiugUWrk2XYVTgZPRzxa2TwnjmZSbeBYjoHIPhagk1VMQtTfPYGTnXgOvgIUDSLkTM7sFpeEH14X+rH1c5CLLGWNPznb4OiSWCW5PIylI6gtIGkCYgz5qylounLR/ZqXck5DjAq6W3AKkBRVWEouevRXoGPtShw04cthhAy+Qar+Kh0dJO7gXHHtD7ubtxJyUJXA2boOSfMjnXN4pbxfuZDJSTcUu14OxfDcYV6ZxxDYRPO2A2Zl+hRMl5UgzcmM6tFGWumvms8tqHQ9KxjKx5ozV6VZHLuycKZ12YkPJbk5qloSBZVKL6aC8AJT7Ie8MtXaz3dGYiQHov+BCTqkH0r3T1g6yzLWp2cLfX3sc7IecMDScjCvz9T8sSnTHi6kli5uV1ea5JD77pOKqUDHNP4zywTJOsWH54FM+mukWPS5dmLSHk4/0DbVTNeApBnFgtjK4pKDRpP6AA+JR91IF89HDE/zUxjAMD3NtwiXImHGsDQhfVCh8UG9kgKOoNuDVBrpOWiQvzUjWhtnLru9/+MXMk4pJQFY1sDT41YSLpzFkpPi5FjdYgMlqhgZJa7rXVKMexUtIKgBmNl8Q1ix3vkc9orLohOykCDGjqH9+JKd0JN+kryoTSfZgCUKk2Yu5rnPaX7MCoiXMHBwY3FU0ZlJh3UEUE06kSL9rVRzRlRaayrLEECwAel3rl2moGJFHGqlhVkhUAyUlASAc4pFegJT6goYcpgL+UryI0x8l77M1QcYk+I8/oSiqXJo3BwQEJiihjYJCQHJt9jE0kXjej8CdFMVsJhulpPMReWKRcz2gMdruc+gE1djND+gQsBkMwLMqZjf1YhWADszmvjFFzGQEdvd1l/A1YVbwU8wjX/s0VfHkzqt7h3kf5jS16XUP76/PwVf/jqMblgBICjv0lEb0RcTmw9AJZG34SK3fucIlrtE/9Vwovck8B+aUiYqfF2Iq8cZ4KG6KBiJ9BxKj2pglvFX1MibS/q4pYCtuCIgSwQooZeU5Vqf5SVov0gOKgqLZxkYzIwBSEEQsm4iJ3SzTAzT9gnpTDgVSOm90HqWfL90AB5j34uPXUXhIdKT8M0xTmmOWjriauU/m/8ioIFpQWmtSasSq03StneM4WQ9NLeBVIEWSwAZs9093EspmcTEoOeEFSnura7uV3uesFZEQZYMyplgobpAJpqi5Nue5oniXAsX5hghgRZEIijPl2rg3iGAZVsxyu/5lyB7Q/VkwY405YWD/Q6IdS9OVZ+gqWlpnT5k8Z5YjdZZLNRZbZ5V3UmGaxn6KVI6HIhPy++CLTadE4ANDFuFSa/y5nNcIXUHF6FFuNM9+1HWFje/RFK3n1AKkL0ynw7OMilDc541jelvju89lijCa82GbFGAObufDwWlMNqsOoiuKpuKXrtB2Co/ofiEtcWAI/cDQaGwZPXnd7386rMIsH6MQaUED+bTapneUR2aIkrSNueHPSWGsZU6JlSvjEEi+FUmhAba94BqpKaorDqyxcwplfyCYv/PJ+LTCKj3ETEAzE1qF7AWSQYMc/5RmG5giZVsySfFi8t1tPlWYx0GLR4rX/5M+avOO9G1jPywpYK64ppmpEHGhl/5GMl2XwqjoglDTa+7ajJJdc/47ATtepfjXT98jfvgee6Jt8MBSr4GmYEA0kGUXddr2La4SacRt0SMt3SGGRORyOGciZjPLHSgNAe0nLweNOYZDVIakjpcocSm9dmIJ7PbZ2i/52sKMbvCBLdkZm8MUCXxSNb/y1441fmCnd+gQjNrAnjHhY9YfCwidgOel8OhGJXkEkdozcf4SY9IGdL6IvSkt+19WhCQNOFPNTVqEA6kuz/YGtqbMAEGKgMW0sgvgfPaGVkJWC2uIJWeuvmCrVBg62RdyYxQDli0BZDSz5YsODvy3HoUohA4y+BBrTp/5IaB+//RtgUJ43+O+sSmsmxJmiSF0SRL1zLyNZYd96lcBPL68YUSLIWgME8ZXb6UwHzCIjVTLlDnsrKlG8lT4+kwd9eotFRDuNJDy0EGMW5LtP9zuneKJIjM36YYTMAwamv/FvRVJ9vUqkPOc7mnQipRkfbGSV6KJe0gS/oFrtAcss3N6PZyxU2iEFvqJTD3cZD/iZoa4yIdtA3WNAFUJ+RFRGoUSq5fe68hAlEAidzSTAJtHaPzx53t8EYXHEVUeejDGeLsClsK8hxRoei5RL1+YQkpSPsr9wHD4wjR5mY06fEGlngsFBOX6bkfUNOKvqh4jrw3ZAnYJMa2Q3dUwGsE3+BbSGcJGZ6FKEgo2hW54QA70a8L+GTw4gqFadX8OPAAvutPlgpX+9VTDRRpAT0FJo/wB/fd3YIZlVTHEC/PjzIr45Uc0ACnORhDUgpP3vnLNt95RpkxW1kSDPJgSMkh9TlD9MaCL4J4mvlkwtDjxNUt9sfQ5CQRhVCepEX6Pwbg3AwBYAEd+3N/vPUjjJShROWtM81ZUcKkwrpS2z1G6HgOkJudrjjvuZn2tGRYqLwMzkOQnGjD9UmZ+/fH38N4M6FAZEprENGPxrqijnGMH6xz1PQZ0dMBaxOEVfBKDJZTNayXL5PjkGj27rqXmmV3g8pH2rT/8LC5ZNGqEodeBiSqHAz0G8DvC7DURo3Jwq0hw+yxb/W3BVUbMviXDiApe2GsVkMdwiNH4e+SIYYjrJR4IjPy+dGbZ2BjKuhohTGyuadxh06oqKO+eQUJGSQcFphI8xyBmwNDH2GZ6IIq2STexakG6lBikmHGkWjb6mA3MGdkM4pEbvZkRyU1z7RhrselV9Ui9zJL3ALz3HPuwNbI4jRhq2qbFJNj+mUI2aj1Q+Imd+ezBOtqe+8mj9gaQm4F0o44MVWTFN5juJUTpOuWr0RTbaXoBKTX0Aj9KQgvazGB18VijnYhsPA7xk2M6v7sMwMmZ4PZoGDYBQ+yTTStC3a/TNMgx1M1fXphp+fKo8MgyFNRGirEzr0NVF2S/DA6DkanYyeMKQHUbvo1S0hAxcr4alo04UFUWOE1E8q/8avRFJCVJrVyumKIsV741B2D5fVWtceYb0yGl63tdpm/dQE2XrG7wfvdlSl+5C25WG6PJK4RSMuZTEJjRZsKD/CDd3peK9AU04Yztm40NaaQj5z1tdFF9sopYrzAunyDSmrVfKy2zUcfBPi4hag2VretlhFMSoMe7lr35gYrJ1/5gmYbaOktyJ404YowedWbLWoASNsCpqtuE9cK0qbg4N7Sz2kquFahwCwtSgHDHXAne5872a223KMfclLkCztzP3dw5PaGWRvX6fpF/P9nfSwnzcQROpejRRQM3SGoaoPII45tIyhZZCzMf/fGvf/z5iH/7739brPgFDh9XJ68RamUS9f4igIbooagJLpNM3ucKqpTdgHN9DHGlhcC5/p0L68gNeBqBOcheRkkGuSMTkVQXcAB2iuZD8sAIMaq7k8y4Yt7vqHVSGlsIC4QWI3upERDVfJT5Bt/vkUEPekn5naTWzfKotTqjphuIuzTSKM/SDHbTHBYV1TL64xDLRUQ7b2kR1RM0eU/mrPd9+TCzRUkRyrluuIgkVkWMkoIfasbf/Xh0QJd9ytW2NzLOynxOmnPTr8sOwNJT0BapSKF05Xyh22u52WdMJC/Nzz7F0k+JaI4smoAbrSEIH31rgeN8/8SfSUeQ7T3eGNI2QpSb9Dm5/kXtM5VxjmyF2P49jHtm3wJ6wn/yw7Q1xvZsSuBhUyOLGbz2VLn+CmPa6GqTt4PDE7QW/jXebWdtwPH+X2D2PQaHHPRgin6azSC672CTA5uP7h73Ob7WTchUBUTJejTJkRjqHLTK4Dwf4KKgBJVByEzpAozIkOQcMw56Ak15RGntsZdXlk90UfIepfCrFxvJ8fWuZZiDKpguWZ9JR+lVXaE3PJhCXiE9qBjGHa/IYA3L+1UUHseBeSNRxFkPkmneBsPcZhsT6VKmbLhDPkGwPd+SqPqBlZyisPSaV2LaZS8c9BpruRm+E4VbIzSqZOkmJ0h+/EiF6Y0wtmkobDbcPkALQcMpn4lOcRQsSTKau+yMmLgBwagwLNXUj8WzFUayzATVEKiHKT0dLYF+UdPG476vJengntVGYkl5F4F2vzZ0PQcPj60EFHv1gm0qk7qkqS1iZukLpoc5WpAutWUCcrFSjrFRZlgFOLxjemxm7F0ii5rdNXZSsEzXtDuMCIP5nksHsNGEQ/HSk0Nqc+AKS26aDueBAgyxs5uYd6IWrM5nxf1uW0jCy3idIaHF5zAb3XGYbPj4v59+QPzmuyTXzOfFEVY63oSgqANy955C8XaX5lIvlDPsreMntF3VpawoMv+k9rgUdO+Amdtd+2CJNJTnhdn7QetQpjHQO4J2jYvcYMP5c+8CRET6/JRFtWJvs5NHnu/lOlupYy0sZq5M/KTGzTONItEnzq/nhn16+JbbljxsCu/IpnYqY7gVsbnXYvNhSp5dt89Y3suT4S3Q8114F6bsDyESbJWN8FDDyj7+5w8/HV+LxydPCJsWgq6QUFXcpNxSw3tu5vafRjKJAfx2Z+hDWo01pOQLKg6NTA+JHk7gwFbUuDGN3l0LO96GwfdqMM325r2bxp/+Pj8m4tpRdlV4x9akv3o4DJoH7EdjTTZGM1zVzzP+/CBhbKRGVrLotoGuEPampRPFvhYYkmrjUsuBJTBVChO0BhoJNWLI+AKFHE/vBXjiozW/9EDV019+vBny37JqG02VBFd8oY+yQqGh6/qmRYLJME+ulSo8oPPfNwixxlLWtYdJmdjF2S6w41aeEMXsa4Ed+drxTmYJ9QIr/xQerdrdQZNZsh0jTMWgqtPfXsil/SYPjzCNUW50ClLJatoEoTMQHhVEqpxZZk0NSCDN1qQIqq6OXUaTU1b0YFXfiPZgmnWG4QR1ksene8TdwUIxH3O53ZZdoD3oQovOBLsBA6stzbAaWCKGexKyp96Kin48Qr4UiCo/uIxLs+yYYu92GRnJyQqgSMbg/FaijrTY+c6M5g/FwcT6hDS8mmT0aCSGWRZbC2q5X5g3ASudRR9ldT4c1jODLxxYYuKqgIotugdgFRz2XCz5tiou4LCz6PGEYQCg8pw/SbGHg5qyBqbXgjOzWHoZtw2pJBYySovY7A1DfJ77XoMZIAfHQ7gtAlnO2NfQYUimvM/+8bdvn35SFzN1mEK8yVUd9JWNxZJOLqnClI6FARy2a75kcXWloYLuGWKBGK6u9czip+Ck/nCSCF7jH1lGmxUhvM0xI80Fl0T2lPDSJOyJImcGrinmeaxA/KXUKHZSBUhZ8bSUzqCRhxyIFJutnYAbtWpzaPA5OsO4QBQWM94g7b5hH7T7oeUaD03+Lgv4QKqD0oR5IVjoZ/Nl/v0Pvxy2VsVmH6NJJWpCPQNWYGiYuVESFCCBA2gSfi8HO0DjAInH/U2VBZMXETfgkBAM4/m+MTTdGY/q6INVS0Y8mleX74GZaZ8IC2xGkSYV4+gb49SH0RHzKQnFhnvRN8/W9HtD6ARmgohDDWOTl13yl/PaP//h7S2Po/AeBVdEphv54m6mI6IkWN3Kj+JSi07iWqQPrdcoAJJDccITNNwCGpsaaKyaa9GA7Bd3j4zWOazqxMEEymCNW0YUbyhe0fUI62mRrwra2Z8NTFGvSxEZ5ERJAbrztdYYWTXZyWNNkNAIpFAKMNUsDNCZJaOGZ4QB8eSZme5t+fNjhvTuluHXUHgUdtsZ5UlMM2NuVKijvxjYT/RNQ5lFndtC7AqGerBoOQnMLGMh/0M8LSJegLwrMkuD9OvoQP7uhxbH6e8P9c2Bmg4BVLmfCkv0w2I3MmGMmrgZvyhkZQN+a2XRozhpDijNgHUjP7xTW+qsxNpAcnZ0k2bmz+RMA8/f3a7zAOTQsDYTMPA4v8sH5idqdnVwyJWXvej2QGFaX2yphXXdY++7QDeyET7tvSl/wnsxhLyOhuVpzbtT3KAXKoz63fX6wzalYSXDijQTpsHk3GiNe+Ygv+VQEEIbGHOvMlsHKab092i6AjYFhjYcVqorADWjK/1oer0W+zztzRqr+SP+XgxWwK+wXGYNtMjx0hyde84FfiZDGuiAO7P6gLW5UUNergIiZ9ojXVREVqtEfV9KUgglecNFIjYWxbntZ3M6SBHFBSQpbU3HqotjPVNCSxnhYNMttAOTed6dyZdCIxH3ngpZvRKFnattw/3a7JZZZqUpzyGthxPGLl+8+ukkKAvFvI3Zb5n5grxwLJN2XNG1sebtNbYcQmr+7ifEd1+8uiArLrQhg/iRgLYPaiPRVs0Vezf+0fDZdLVOgbeL0237JrrioW3g2BNBTnkZGzD8MfpWwGq3b4/MGTfnG8yZLGfzjlhx/mUhIQdHAuOxmY0CDdGgADk9mJUNPd1ad1ODT6OVyGLx3QGo61/IFAcETedzA6eMb8qRvCTczo3kl0d4Or3mRcIUk9doIZcymstDqngHhe7fVWnxef1YCHNtrrJPhq4TRB9bcVzqCFwSttYgV9V/jWrCgBQXIcrICTjZnFpSsy4vsAKIGSVhCAJGHZfJaWMo98bX5Tm6trvkoFiCd/VEfiCqqg/SvzmyKPfnxjpWLUdkjcQGBHTAbrwIdrwMeHw5XMHYN8t2mKIzBJOy41UWuJxnKrmn7yjz/CYNmMKnRjQzFugqijCb0kt/GT+MokxK/05jDMZNQXAclcXQ7OtmNnltnqgjSofK8WBGBrRACBNRrAZqrPUcA2YT6Onga6abd4pKWxCy6WYTUoq0uMrl81R21zAU41K5HuoxMUkq2+iGjsAYs8ctoyBKAtBvDqoi2bE13dSxvv4In85xSHF4sL+2CDhYm0Aa2QgMuNjAQXogwsVYYWjqlRDRm2bNQp0B9WCM6lJtYlPcw/i+qMR2i7du9iLwwbFfrjlFTeNUNVb5AeMBI2dqCPDhTPCaeeFwHmgawsd6/Kefj7p+6xxbfz5SUVGbr889ZBk71nkkpi9W2UX2zwqz1jkVPQKMlwoNZbSue1iklJLgabDJAlBGKkJ5j8agAk31G7YbvLw80GoCsCKVxfhOHp4FsqLsCzPadUXdps94r1Gs8cek4GugRxszkljCktKDW5XCtMmgxEegRB42AFdUmGvZLHYP9+eu97cYERKlVbkbHyKmrepO+CHGGNY//XL4Mblp34QZl5q2oo1Jz06IbTsYDhOa6K/ZRay3OlaILbePUkEBo+rPmBhM3HeroTFOcD6mZo3AngK9wwbKzXnBgbwDZmNtB8q0ONWBYGjMrxs7xXwdgQ0o79NBC3tuZfUCOGFD6uaaGxK82EaTaMxeBaihqddZyGgWA7QFtiY+n2s0PdB3c6bcJwiiw1RY3oP2yYOKOfFx9CGlrH2oQDvVjZTxk2FTgG+RFcbhBCAm82+kZBc/WqspJXUigGAimYRNuq8rkxoENcI+9ShIKor1Z8sINaM+12t74yUP/b12mZ5bdKCi3AwOzzbDTetQQBrm19Mv3prAxCIKAPZ+LWgYxfM4y8uAh6In1lfNyLDvh5ymIWTdMK1L8QvAR4RpfoSJaB6pfNjRNwqGzGaEOxSxP0AamAZJHNAijL0o16hNKwuVAtk1MLqBkHsfhfFAwVBIckL4UA4aMkKF2vVnqtPzWku4ZxCzqVw97POMd59DyvGRd3tAdVD5fIe3wx+85fochh0zwHreaFRqD4nno7KxGNQPRt3xwlJsSpJStBkPhenxIXvByAmn4S7iOkpUb0PwORS402eK4nXoGRmPPW5B2aYayb4Z7PPjI2vJ7nfF3eaHDh44xnOSjI9rIhuqcfBA2Wyb2gTlvSicUoWemaEDsWMYg43OdGaF2e9+PtZzS6Mkco0MUXLlc0NHtykm/QMbiIu7gR0l1ug8Ek8DZyZwqABlWHsfE4OP5h0C0WjUYq/dkFjG0UX8mtWXyADP+pmiqiPK66OkuImthbjnXjHkPGhZos5guj1JvDXIed8KlOSVW2lys5ma2gWhnnqA7v07mUAZeiCAmCs7XCbao3FB9jmB7ZLZnuMuM//46+cfED98h7pv5XotPWsN5DSjvRzAV8YsY+bQ2Y8+GzTborEweeKhNHmME6tIYdsNEISNh+TEVrqLsht3dqOBowplqAtiA0Txhfo7YkgWM6oLxmbElTOYQ1fkujGm1GcCvv55+k6uZG19No3qkaJCUQXUzs/QADBU4suoXUtvlhO3TJVWPwJWZGsCmpHJRLA+0CW4Ivv+LFiBhjCpaFfv6oD9s9j3wmjWJFXJS6+iH284qt8Kw8i56tl1nz4tWSwFbJyHPczNBYpWJCa7YhsecSdSVrWkOeGjw0c6lpnOUSrD5aRwSdHYJiUGWVP5c469Yi4l3OWHXK0Dvf7+dRUeb9ii8q75hcqyWVlLoqKZ7YCjASccS5wOmWMo3hVQ0fuD6eFwhwrrrH1GoDnNv7soTFcwsDcweWa/+Nph8EpwG+tgTBlTtKZ8b2eya5FtUQcUZBI1BvJK0jqQ0nYsU5E20+TIX6ni1JyUmXEkkx7KeHa9+XdEU0ogoHAoH7OSuwqA1A0/mrrmYp7b+JwqZ85Y2COrbRwoeJjz5Ag/ytHmUCZ5gFF2IGwMqSbScMfcmJ9zo3CqctzNbtIVBLGPli3FxfVZjnYWWvQVRkZ8hFG9JMWbHtJaFNs0FHrBiIv/olGGTGDONCao4AmGZBtMYKdECGIq3GnWlrDebtRrO7877EufUWURf/xgreEbpYyAINY4yJVZX0wfW6OCxiIfQSm4eRuOHfLZaoJQTtVil/+XOUGmBv7ve+n9WauWP88VQ2aIliEoq/1m9uGgAFfaJQPFt+Pjd73fiVkMxyUqjZ7jsYmoBft73ptXJHuArZFZuAbW56YfT6V5qNCcFlFYtmuDJ7HdMtcYEerss/FSX88Z03NSU8vqubgekgL2XaNWYAHqygipqwfk/P/n3x3z9xoiZGHGl7Jx5OSwzE0j4kYGHBkUQ93Inb5dTDEn3mr6zHYm2jD+GtVuPSGMYiSft4VgQ1cFHhtiTn2uXCjG2NXTq06eEkpiIAk4AO4BDy4UU/voSnvbCIeMEefRUqdI2XAJTolTys1o25jUvAqgh42snpQ5qqqyfiXn/39B3eFgdtvIiSBkx4LtE+CLQ8jQxL1XoSsvoLrt87MCtMDv7pooOGiN1PkCy6/+FJEUxqj9Xf7Oh66S8zscSe+BtFHWaNWkfCRKX4PhAYTEy+odjvF0zflrsPdzxZGzG25atjR5nhDd5Dh/qrQBIHlVQYQIoFFdQZRQUXvGMGTa9aNvb68pPL689KJjj1CmmjAZwXlCcmvW6X7HIXRzLomuJBGyNF73wrqkRoJFkVVnCF7u5Xlh11ghnlJTJNONO4T2dJQ/rpi8SzEAjyCAefKMqxGC0dnmGKN7jm7N8WZ5Vct9S8wUz5jBJtclzMG/imZqE8gctdvvGaDELFP6ykKfbnO5lGFNYcKRtKFAj+AsJPBVfLNG+UY29uF+M19eIHlrWOvtTVy2MYBFeX0i9gqE1mimPzs25pNFOQcPj+fPcSjaj8qeHA5lVzPPo3rOKIMYBkSbRi/44I6P6BG2yva9amLVmDhnPsYOXLk9q0T4wReZSurlZ+VgMd/u9zOqSmFizMaL65RmxmiN058PTJa7nnixEs4SRQzZh87SaWJCbUSkKovS8/mnn4/41397j78llAE6+HqPsbAAGoi64HEBGHfULVLsqHgYwOQ4MwOflM7Q0BEpRv3a/yGSHmKFxS3lYGaRYgWtlmdHJMqQycDzr3e33mno6yvG1hr7JYO8lqCRSjXSN7wM6w3SgTG2uNDrsx554psm6eeKRWePZKegu7X4zv4aCy26YtYnc+/38+J+rKX3YAddCtuXTiXSdo5Ipi04a6IPAOq4wLpN7ujPv0H8+P3OlXQYM2lzxmLavEmnKg0wxLzZvO+41bD5KdZ9nz4pakoroQGwmjrQjMBQXgfd33STe3WEmz2pNIPnHM6PvPcX8MQZqsPHnEcy+J7p8uGexOCFIcmY0C0vg6HsnxsupCD6d326rnpuciBS8j4xCXZgahc+mUuYyOWs8NReydVLxxGxd6+AOfRp6krWs/FSK5ZROwF1oy5AxGRcUuWJzrfnAmQwKlNMhLiSa80IXVUQcZ+V17Z8JFUipJsqi6yYeYpaAnqW5PM4d3oLRGfptWQR5k3rins3vUwevndgFdpQjhikotrUovivdYCEJct67pPyhgc3Ko6qhquG7Cy1p460Tb6GX17DO14DPD7Rkz6LfG08rlk6hhGXjDhjmFvMKQPFqLw9DOefHNElhvcgd313pu4PacGGNLthHsp7caSFGCVtD19ZeXDqZhcggbQZpJDB8z1xp5EwL1SuGSGche4hE2+Qbue6RtclOlKcUQ9FCgEL5Bpwoid2gFgGR2r+aEn0mU4roDDBlBgkjTMCVkTUBfKs3gB+JhACrkVWD63N6cPDQ4sqnJVrmQN96AO15jngT049aI/QrGppUAYAoaVewM9MT342qlRxwKU2shDwanp/d9vL62hTbF9KC2H0Ubown0lj4qx3CQuOWD02Qv48us8IhubfSakRg8fHJjHBUkFS8La0GlOpZcY9j7YEzPU0v7IAG9JUZrlxG5WjuJA/ASjTFoQOIH4AdX/67RH/9f/Joxr42sgfUZMtChSQP3yiU1e60bpgOIy8JEW+6hjXJYE9XGwvFxCf1QytILud3KOC+0UeCTd16f95uPBHFm3I5SiBsskfZIIyx/QmrCbdjVrmAk7XMlTtKIa8d8R6JM8nMy+MtHmtZ5YlJYhGRoT3s1jLRc397OUoXmnc0oN8nGRETgvgueEft6/I+eeQQyGzi/dYEOpcuapa8Qm4XP/+z789+hn1YJodU2IHBnDbpDKFOft0ZDdfzwYWmxqTg8rVpkUNQPD4ddnHLAoAO/x8aYikmaUBTaZnIAxAMdUO19pQcsGN4YTxjIIBm2PgV5h/jzE4pzkjFHAJjyU1U/92/qX9CQYscWM7iH1kcTujzM/r9nbofuWUN0dJAe3nX15XFD8Do+i+yWj2bwYsUhFg7SWQgIyrB4EHAC+SmMkg8+4hGlCUKNPMhEPVYOi+ft0hqtUxtgbAMBLM7LSRT0/WvRnoz6grrBBRs66w9kkzz4fSTVXVRoQfSrHz5R99Xl4vVEIbA2mI9M3d0MsnEH4gjSvJ2KwrzAsIZlE8Wg8OVbQoBsCmFOnAShgC4ePfL3P6X03hMZkhKZ52s5j5gCj1ZJU69TjXOi2FO3FY8qDTBeobMJayoERyKDxOnx3c4Pu8caRc5uOS7pyfEksa+/nP9aS/3HxpdOJIXQivuW/tRK7fz8X01XkqttNMxWPtoYGX6F5M1f2dacgJern6OHuqCSlGLWFnYmPIspcGIf/QU/OkbHNhHsJL7L68Daz8sWkYHgAhuBlVJHJXCjn4vsqspa6UyC77Gn07ygg1zkyQC1ugdYPvNu5B9vSPGIAWBSuc8z4cWLL5HpbwHBQqWmAf5vppgRADAz2qcMK7tJfPOihK2ggaOht4OKXIUJHCNDSQ9+UEDun6cJHjrlh1EnhlII0XSnvmh3P6I2rzX//9b/HXv8m1n8Zl0MEa94yVfXHzjDZgNilRLCuNuoEjAba3ig3rFLyvzb1ns8X96WJR0JL5jGAvaAuIN/g1lLPXsnYohtNIh0FOuIJxq5+f+1Nxo4/awHojbUo4R2ZAZNohihGWOhuzFoxl3Klc/ygjJnrGRNTpyjYSSA8owLCjYe9l39vyVnHVab/8GLd3h7L7Trmg92CkvgU82XpKOeNH9158FBZUFnowf56UFvpZ9Xq4cRFtcviCYqOsh2heyg3Uf3pPBdMngMKpPwamKga7q5G8iUEBW9YfTaM6FGjWAzI8iFFqHDfy4NIiDZg1KonQ17B7f05k2uC5lT0ktK6GEC1hzqKPRu8CZsv+xdXwX2BHU8qWTMKQJjYnZC1l/K1eD9NbKBWN/H4oByXImZ1yY6/hiRdX++Wzu3wCrqmARfyhRS53E7W6WYAV/URma9JN5A3kp2jX8+G/zucbOqCMb5RghnIVT4+tq9/2+c3dDxGiNtH6koYRZQFyoahVnQeIcKHntsfwLGYnrGhVyDBgxNuv6eHxduwjY64otcaC0GWwr8VENYkpwIB/CvQguACABaZEQRSRaAogLIIG6XKqzQuWIVyyv6zZ1NfMbWZSYMAHmMaOxfinoHDADRAxDTYiObgjdWVEHzhF8Ux5JUs3s3QyEQgz4x+uu94UMxIDRszFApzyZ1PkTFWBMgU0o23qhwLzea4Um/xVbUwd1YHYN5RTAEGR5NMDGU93UQ+Mgm8Jkz8xHEdu6tFn7lSpsQNeLAOPzVmHucBVQU72OQkzrws3NKseIYOnxlbGjc5EtHCHwZtiGs3a4a6U6+4eZTiAZFCqN8WHW8sxA2NsBsX+fcBevMTwuyL8hIcqfZwsdpeM9PH/f/oFPRLNRA5xM5alvgWIOc7QhjzkZJq5Ji5m0+s7Gnfsu7hiEZYyxXbfgH3RWDOdsfUsyikCTDcRLzDhVAAju68Xw9MFrnymqbD4hKz58nqRGa62RG2IydbgSv12JtrwLteW1rKaq14fPlvFsUTCJrIm+VZpepYagvOVxjgejIPZ78MY+X0shlmBjw91BzaN9W50rcxjP0RpOt8QZ2yqFluvHHaMeezNqlUmZ8Mh6tU9006Myl3cn0S8c9pgQqLNX0nlmsACOGPk2CMb0e8j6MHZqb93iWkh9QeGsIJxdtl8fhrvkd2orNauzXR1x9WJt8q2Dt2pMl24g3wel/iof/bp40J71iHtUXQbh82lZD07JDcXSAqPNJI+ey5z41T7dBG7ipfxaCPYwBpWpDuyJ6uymkjO3Ai1UNiwMAG7aSNJc9bznnrfnByZNnimIo53GhcFjL16XFqwg031QVkjmK6WRRhzFK9bPYxhTZfQmNVFF38c4+NWn1U8rp/j10xpueQi3PW2Zc65RqmqaViTFMnPc7hRCJ1CEqSSbE9KdapPBlJpjOVWigBGoiO7mEZOXbJhrATsOwIo4nbSr+6888OK6B0T0TO2cRdZk5kGxdCQ90NYEMphC1ncIW9p2mR6tjOpdM1lM+x7MZaYzsiSXd4YQ5FALdAmkCGKOri8Jo+1uIYwFywtrpeV7dXmyXp9YH9pdvFrbvygxCLqQWtAAOLhHoYvTFyR7MCVxsgJ00U57eiKcO4Y5+G6SeNRGDbOSTRubZViiNqpbMZPhmbXWSOE3BOGkVhvGEFrYCwGUTvAcDRP5QDMmHVM9iIVA7ADF7m8Wfe7IvT6fr//+YgfvsgZYBpGF2NHUWSEAewacMZ9cgKkuYcWx0P0eAbfL3AdTX+9PtU70ad6cyPPNUNdj8+USFJMXDcXfWBOW9RweURo1VEOAIP5d5ajnx1xZE1rotwVCRAMNXG7aov77KADINjOyLaoaNKbBhFJxBznbBuwF9DwpjDBh/IJ8d0XPCZ5fQvwq3uQ9WTYNMgw93UfzeeVeLrftDEaM8YIOVM0UZG7PT0eDJWxP09s4y3niDPfbNdSlEJw6jjUM3ZKoWw3JF+TjblsGGIoT9rB+VjJ53UdFeTcgJhmC1d4/308mJ3uwCB7Jgz3Pn/XfMYor+ver4jaJArX/f3lrReP1ZQ/RZeWzj7vdsNAsXWDrxcMyUFiNbTJhLns6WvMBgHrGsx2EdETCBFeXTUgox6MqabZIG9/jnq25OvKNBQDOYvDo4GkeAKyAP4cKvjLh2p5CrJE/+a5BrbMY9zgVGj87PVdMoAl/Wg37l3f62jEUo3ZLeez3Rt4n6MTWQVp8EjJABqevS+/akrL0XdW6gLlYmPyHK0yrYUZRM2zDxl1wWB9RnNh4Wj3vHAbcphMeq4Z2ZB5oSLURWtyb0HuVVTltBHTDSLgM6YzLpcWMIiSloAU30qpjgpCd/QqBBmJPWI53ofPAr5ipwhUtgHms6Pfm9gUNKqMOoaMc/s3/HuXBiaMP0J4KaoqvbeRwjwfrJ28Up3FTcFzDI3DGIG9kcqOXhb5+TwWs4cUKdIick0Bccj1zM3qocWHxsKZfQowvgEid3VKG/eeGUAB5wKyPBKoCSStKFKViClAiW5sygkRGAyw8/rQgJ0C5HGI9MMAGpjrXZg+o2Rwz3HQM3BWdcEH9tGZxAgIKcdAUzeEAz6eivSojcrH+/1Pvz9a0esSgfIsemsoD1OEaT258SJ1hrmFddKEFFOwMReEB8sNA1UVmUgDiWctveMZo3qrRjjHJ5d0lqEz1meVUkTnJBhyHlcgDcWH9HlDATNId5rAEAqSSzQlAkphyN5kIg3lFqFNj1bKY+zlqB1S+iwIl5QD76hm2MjnCTzonRnjnBD2IQP+p1PdEVMT60oErXEG9WLgGUBpTV4MaSnGhGb0YMAQeY19+lP7PErOpDMu6B//fGYx5mhw4vmabL2gOcd022cWAwBDc6bGM3jGqYfe7HtFMW/IlO39340EP1yvYobvPKQ4g60ypdCu145wKp+RFjvyBNXwXfWSvh3+F9aI8JVcBQvpG5RQ6wugBCCUzwg/TIzovoCIkPRD2jIhCr07EJRaXw4y72vPR0N+888kX0UsL0cG5Jpli4UatKCIKxN7mhNWQKTrAek3HVyD4leZwQYkpQbMNXUmopmtrUAUwuJiwXFTQj94z7MX457lkhzlOE6q6NmUUAHntxcVHi95eOCckXnfDfVtTJEO2cwOZS8dZQOkDRL9RpYUgcsEBQtRa6zdyWLIbsWcHDLyPtW7v0h907waqDQrJZ+XZde9PxeSiuL8vihOh8toCLd/h+K2phMUk4oqWkupLYaxcYVANQKKMX3Ey/QNTD+wHmoAuaWaUOfIYNC88nnYpZOzDwbuRIZr8/xA1fFXVBb3xWeC9Js7Xmxmnx7pY2g0kZ5DTbNoRpLq1QADGA1GpGol74r9VqQMzSzMdyiNNvqcN9P3oUTJO2NGO6Uphe5hqEjrPL0BnsIV40Nh6LbY5g2hxfrGaI8ioMMTLRkPpqETKztZ1zvKd/jP+V/0mXWF4+5DYqiifvoB8fMPEf/9PwRQOLfnwyjE8KRYMKommHU+rQ+rEIsUbQcd9TxVHWAq6Nf5U/JmkFijXGZZfxEkPkubieRkT3TAaxNPXV04MG7nfKrFo47awE4Oo5iB3sUdlu04UrLNsuuPZhTDVn6vc1w9XO4mWeIwDg7noTNrVsNCg3KPRaOa9XJIjkrP0j/9DmfKQwU53Rnixuf44KuggDDcdzXf0wrisiE0/ZmaYyWbQhH9Hu0CU5yvhqLx2AENRjXG6ZdMe6i+lP57uH05eylhkzjpUsCswm7317Q/uzXh/t8ZYG9Go3UkM6enufsJjW6XlBdN/MZQk07qYYvbTNPjGNacIASEJ7uQ7v0XuIWAc3/rSgbaBb2QHCgDyJXYgRKZJ5K1fFFMuse1sEi/vWffxZSF1mpnqGGwSlVD+hMpKlu9xJQKdioYkUyhfW03yHWLhUE6b5B8tRLYc/lxXb+PkgBzx/dS0goN+oCSRir/LYVU1I0YvbBKMTyUP2Zi+dA/aVSjUrcpRwsNsCRWWuPLqyyacjZjKh/YBH7NlJaPv757Q/zlr2wN6cMeXhZraxyKm6+7IKw3LYtOkfsrNTdB3/3Q8z2uaME833WZqhVnZOT5Z1aQ5VK1OFM+zCdCQ8cyyrihcxXtW1Ngiqo6h61zhCdlKQPsEH0CRZhTS9iTSDRJKUa2WQf5e0wVRCXRDF8tAqrNRk2/iVLCO6iBpopDYnVQgJEvh9xi+MoJmjJlHnQb2RYPBZAzWXP7mSo99LIb41EnwUfM3ir23+Gf9bxDtgb2CdBBmAasGzbD7SHGTNWZy1JdxKf1vFnvMPeNwwZvQbEQc7xs/GlAj+zzMnpX4AHEGG5uM/XdFPIjwBevgTIT6DGtN3f2NJPbze/7UHn8b//1vQJbx25CAyMbZQ2zL4UEvBVchiBSePeS+l470JUCJjeSUlUD/aLf3hQ3WI4OHhnQ0gdwraKJtxHe8My65Iqo46jO8JoOBHBMaYU15KjEcNsrAtt0L/pQlWsBaeI+//c9QUscjxEURvNmOfW5ZapvCPFW523+mjdvyFS2NlkWHE1/+MPfu6Xf/3S0c6QZThsQUy0AnDIvTLPGgUxz4IrrZybQV/1ZSlKDAQEegYono4ANyKqjvjTgwjTOAOP7Eg4EsHmdw2Y6AIijd5Tu/wLCud9D9SRxQAGrl9irQLr7WjTguJorj0AhBwLDgOhQY/bYm6y2PmBAmTAQOU4JeWAACz8avTfWB7f4I1CSG6UoIKXOdzR6VnXDjhPTxbwJiI1JGVS+TzbBZDdaRjdqp5730/fQP4H0jQXsyEB4d1xrlgodjeh9CdBMRJm+/GVInq8F271anh28yOom//V6oBZlzeThlR/KVBzc0eK3bwtLjQwhGrTrakU1OnpegjmKZyqqqS0NqM9vV3d8E+Dx1cfjrxW15fZM8IgIVL6OoaJNNBq9BmAVUBnM0MH2smFzZQyfRSGKWzwSi1bjYwFYuBUluzoktBzDSZU3ZfaDxOVJI3pxzCjsnz8cmR4kVZdolQQPKcArI1xclO4z7XLsJM/oEaEeR09gkx7MrXtPjUOO7XWwfaDnq8o2f7tix6yKiJib+tGd2BRtzhhwN75gm2thQ5pfwKa4a67X7N4pTQliKilIUTf9Pm4YxpBkl9gICiYgJga1BMOMZ4iHCByIi54G4Fi7DRZogamIF2aGYYgF6VPs+NcEnDwkDHFgYKfvRVdgDAU8w/gLcAOaSEoO2ZsMCJmR3+/Ds+CPPyP+27/RkkRNkyDn2NTsXz5NcNoh8rYeK/t5iqCFRB7g6RdON4OpyEqgiZqENed/l74UYtsmPjVTJHaLCYzecLi0jF3v1kYY4Gs9Dgy02w/H5m/obCgL2MZpsxplQq3WWWsapgK7Al8s5FAxfkcyD0w34k6Mc5+XGfRDPRN0HFR7KZO6ZOuVTv/5IAaY5Jch9nRn1KwKIScWtqqNCS94wY+MZq/JQDjNdRy21ZHlZ2E6zfrdrXf0RJhpr9iCxwJ675J1GBvJQ9QI1kdQw6X/hGknnPrz4TMdmIH65j2D2e/N1U1w/+4Sl2KTNoT6GhcWcq2LNxOd1KLLcxM7wksc1NiakNX/dxy6MaMHhUROC68C6+lZh0lphKtp6/fnBjqrzX8KubhVMdEbGy7FBhrrwEKKrshVnYlzAzJpTuA+oM/7l0Iq1nORVBtkIU3WvkNLydyJMbGMuj/7YXb1WXoflF5XVknrUyv4vp9rqwBQVUCxkr8PUVGv+nfcxP1LgMcBy2ZaMiCZduaFXuWN2MhX6ynZM70zR3M54LKiRcZZkKrHD9+krhny5GmrjpOtG8rRsUjGPCwGMji/0JEHt2VQrRVVqA5Vazzntkn1G3KiYpjYJjitFmjPK94P15w44AogH3Mbd0xWHo9AkndNsAyTQVIGuxAY/QHyydHtmbjRLVQzn/xkf9w3JwMuBWJUDwhuunIMvrE7FejEksGw7NffjP658mA2N0ZspGdGKEVKcM8qjt+DpuGe4twmuenwo5RKmfDmia0RfzaGnpsKaeb4wAo275fN5l5UqcZ7pu1n6imw8Y8Y/TAi2nhQaxqwx3kLK4QuLW8jOrE3SS37ER4aZdPY/umXI77/gp48Ygxa7jHDZOZQ3J2g86Y7FJHdvbHINWmNc8t1NMw50UO4NCKRlQz0iTlYkaXtcXCmm7LEqMls6WfovtN7v0eFUKHsP5qal/0U6COyLf9lnv/39Bmbp4TZ76ZYYw7jsQzINUcIXhGHtU1H4+yq/xbTvWB/BiQZ7fc/I378Hs2DzZoPmxQM55U2+m5kX6QY1mdev/CRoTSlBmlGzGL2sogHZcG4+Zm1aaMz1dcu+vXSMaNwBC1lxCJmz7R8X2cQtn8XCBgPlz7HPgqyO8O2HjDZDwozSg7n7WH2ounvYFiD0x0HbBN+NGUiX2vaULoZ7DGPw1NN4JRwOQziiJwYKCCHLJKbtNUvdxrS8PTq65FQrKlDEaJC3JQqQ5xaqe1prq8p4Wnm1YkJl56htAzUVCJqhU7kz7muGcwz+NkTHnAGgC6YAivZS5UQsUP1BewrBqUUQmpaYbmfwUoSA4pf1dc+DN3wd/W14vd3728SfzMaMbLUgGHIg6sPIV54cG8xxusKj5cBjy9v9TO3SwtfDFyyzmjGlOyVxPj0o4AViO5ldSesFFe+evDgyn/OWcxl2Hg9DBS9PHO2lzTkuN14TynOOcODc144bm7vc5EdKYzWeY6oCAu2QWeJtvVMTnLzZ434wSAJQQyKmg5Y2tQpDDgIHR3PVeSvtVHvMcR0ArGZAhc6cR2CCnUM0gmwBxRCjC4+3LHVB2ZQrew6/Vz0cABDuGE9w8jBsycH3HywqHHUjJLm8SnSz42buf2zwb02SxE1KrdFokYfV9l6ZaA66SM20b+xTxUqBqfaLG2KTGUaY1A2NB+VjfknJmALMwADw+pZ4zqYyDtX8NMXxDY6UaNeY1jfm4U0iaLy6DCc0W1s/EHSm//Pv6/KhSMVFNWjEnfXnRmSuAHhfv1X81mNFTJAu3rVGgXOqRiX6+zk/dp0UK+zAAbWQIy+CSNnA7kGWpo6oYGo0s26+1yeM/p1XOTPzuB0MNm08cMvyJdabCnXqUKaBvn8ZStCcMXbA2iTfyz/W6Vc2aVlKT1hG/9DUy9O0+1//uXoHKB6DJgxPk3MavvacF90b9mp8RAejG/7JqtCxPljtcbJ7LGqhsMTwLCJ+HZY0CsHZma0NX0FG+UFZS/FcOZqWpwFseiJS+z26s11aORKPJxDUT2G23fn7O0SUwR99M8/XR+rfjMA5nhG6zrXugmzmb9dMxvj9K+j1W85ZSU36JnFr+cJww1VoHsAKhnP+i6gKjByzZ7G5889C5RNPyNJjGZ41SZSsSGK5DozLZb6muTt1LwKmYhtJDg5G7Ams9Kk2CCNW/SlnACXD0UkI9OiQgkDVrEVnpfS9Catzw0Nqbm6ieNOgdfkHJM847u2bLCaUuFSB6r2rq0BohEz0KRwXUQ8BXR8Dmj5ppGWbwI8JiDcop5pkX8uEvSVnFzQJ5QzGLfPBtKcWpU6ojvQoVYdTEqHywCU6C4QLDdVKv37nuUHZMGuq7kSGKwOXiu2t1pz5IUYhtvJCBzOGT8uZO4CUAqShliSJ3qWzdZ4qFhnZoh1w2DdcBhDtng20nOGdERjqCKrPyASXyvOSJuKmOhU+9k1Y29RvGTDfJefJ/D25a0WlRga85y84TwxQOM9IAcoRM5rDdAoy2zSzKY5aIj0+IieyKEpHU8bTygyyzm+FnytgGpAHms6jGuGnkg9GiauFGhTKkndtvwIzqSOMEweZ0C/s0vKGLpGAQZ4G+KOKf/CDfXUpvmGhnFX22+mcsZrnGOkJySI8GvGqh0yIPX3v3/z/YePAZpRHATRAtmLbzLF8EUynjZVa4ssrY50SOZjq8ilBVFVhNKafj405zIalq9VwwjYQRNuhCwKhBeChPLPw2tbWot7nh3QLt4SRXWC/h0Is99Pj++QwJTvAcUMtu3NmXgpE93LxK5HoafmITUahfAgiz/K7tn6+MN//sNR/GomAoMclnHMIBBQlzclWvkFEUVLvUIMyp3Nm7HzPkZ+bW4p58aeGwBs+7slEn6XtrZLu9LSWVNHED6tzILHqDV7jjqPqH4cTI28+v9Mqg8NnHIXna88ZwOgvyMpVDXU2Gg507bHNp9fk8dfKD0fDDi4A9AYL6hScDV5+UsstJkwTTR6q6u/oWlE0OPqIA87GIOaIJ9hrApWdVW+n3W6ICaf1BG+XF+1liCjEVWiqO7OcNAiLTN0KetvmrkhYyweGChjJFy1RTS9i2epyjOHs/YQPzDUO0mJIwSygWkek0HxxpyVMhSAI4xdODv5EdiqpfN6uBJOIb5QznNJn4+3bxhp+fv150tGzH/+D8b/9a9/m4vWna0zOpo8zo3nqioNFq/Zc8hNuF7qjGO4eUqQIvogozIhuBU3pn86qOkt4NykXETyz78M4VTLdi94dfpFcc5ns4Wr38KaBZkj5PY5ka4KFKd0wwLlr++mTCpqi+p2P0kvnXlC2dKZ5lAhhrfd9BQ2M0DyJ41RSb4uf/lrxL/9+SiM0RFdiumSTqaFhOk/nQkC09IuiSSRvCVCjEzhzYZ15th9RJsq6mZso1PtiBdSP4zLuttzm89DzGxW7AAa8TDgA4ize6/dmNHkSVGuqTNlwnwdxhg8DuBKvHgPhhc+porEKxfcrx3Q+87s4q1fe2jM55U1ct2b9/eI//1f/hZ//ZsBeTb31pnnlZ87HzQkV73WmMK2t8bHKKeP+N/Z7IuGyMe8xraGwdibC3IyNFRDObOfEbN6x25zFENfDik8DD/epNOt3O+D+rN6PGzTSbLpde4g35fvWEUZYAFhJoMarUry9Paq51H8PGgKzF9+g/gvfzh67TmkKEUn5raNBx/+TK+pA7RausrmzTkAYhqW085jsx/lc/O1aBK9XzEmbu2u9dP1QXQFKDk3AW5saxugZfzYdGRyey8jnhmGBFJOz9kjSRHdZ6gZ7G5+phmd8huTaF5cB7o/OBN6Pvx8SzoyRvi//MD4/su73xeY0h/Pxcl02F6vsS67ZZFdfhSxvA5pUis3RYBqGdRk2jJfO8879udWIRs+PauljmEzfd3vcnsihzThA2ESgMYxfMpDgr7XFQJqbKIbCE5Wj5NO8dPIxNgL03GxcnmNtLlxVIMeLINu3COZi/i5euE7VW3cwT/8qN7ih+9eU3m8DHj89W+M/+Nf/vYaS4e+QWkvaVMQyoJAQgnnW9saAw6e8ypxuwrSVHE/LfnqrE/TDFZbmvy/GWSo7snJLfeMnbWOiuMVf212/P40tuDVh6NH/mmzPMU+AtOnGCj/qTC38bMLlBnv2Q18UGARd28x5PfJPZOF9/dHIf7vfz/8VzDg3s5kNJ6abXrggFOTOmy4GheLmJn8GC49X4wEHRt304Rm87oDvdizl2M0V5xtQGyzmJqZXZIKHoqX/Hng3PXlGmr07ctNvZw905uAHfjQyEDieTxS1zVoANAJ991cQ2z2fm4AkqdltwO3rBnv+Tv//J+M//O/vbfGAvGEZqWROZFrIV0MtCILI2CFU3k2zofrcwVfl+wAn1cAOwf8cHeN9TOEAca5AX9dk4BNJ2uY9Fca1lfUjWMzqkBJa0wumXNYQ1Vm8gGL1cxjl9mdbJmsh4AfvnPcgUcfZtv/6z+9FdPGV5v7J9XW2LQPjb6rh8c3NQ3kpBrkBqyzkZio/Y5rSKHKB3cWPDTeLwNDu3VOfxZb0G13H14ALx6vb0Rs+o/ntfF0qaY3oBlDewG0/MZ+enwxN2U4h2ux+0wGq30ZfPn9j+9f1d1zpjw7OszamCoDgOhR3C70myWVwxO5/iKZTOh2uWsYw3bvYa8pXqC8HxBSv65p2oVvvWfxP/gzW1D6xZjtEFJ0dFLevNGTT/U34oIvXRfEszH+//KH42Ufj283Ld01eflw4cCGpNg3oPqdFBWU0ZNJxkabH7vQIegqSKjVrWjCmjFbW0CxtZFvi8W6RDJrCRcDmvKRi3Qqkvnd55zXncfcZjBZJVPFw6RL0q5rcf8/kAxCWYpfwEE59d/ZtrphDGFyAW9/9KC11m+n5jmRZs6Qt0d1RkNJWyjZ1/d3g3SGdRYASRODczGX4vHjNUc1BGV4v4d4MGCzr8XzftfmTUWP7qR++tCXcYkpjxbd2yNeYL+vA+hwk0fqeWLUG5ORHESeXmbWoyoxpzGQ0MIYVf6uIzTcHEA6M9xYtfTn1nsl5vGZNlp0/n0MFRrgvU7aZ5xOFjXcVS8Us06oBR/82IM9tHp4xbrH8MDaVFZhV7Dm1zGa18FvvsNXI0dtlnTNr3EnVqNSMHvAhZeHqkJDZrtuc+sJdTQJGcbNETZF7MVGP/p3na6zPs9Idkc79rfI48W/w6kK1HDTbVfqb9OMInd7FiuvALNe9BhnREd1zg+Zxzj6KGAiSnJ6Gj2dc4/fpo1+nYds3xPu+Ts/w3/5/RGHejrIyKQehU/F6QRyOMA377UYDM7teASflV5sz2fMihAhAWjU7259TOA0+OxvsbtmT012fq53HlqY6nC8DmCl3ndTpMwKTAV4nRfRy2CHGXmm8X4u3mIvdl14BQS1MdOxl+cP6xkT6fpa6Wc//9FMYur4SDG+kXmlNYxZJQ8975GmR2Chezmu7k02sHkYS/cFWu+qNp2SLjxZU13iVUAXe3JkGveljk2Z97Rjok8bwPTQyLUq9cwLYD6MySumWpablu0bCZOpVuPzI2d/xv3c8f9HLO3Hxfjyhq9KD5XYZPa/IU/toWfZQBo4kWZdEM26q63JT/mLom/0Uu+kqePF0OnoxMCot86HK8c5UlzQiqiFGWSOMmNXI3xUXABZkKe0R5jpTt8l5QNSZFH0TPSAV3LslvUdvZg+C/qe9MJh30d+VAEE1xUlSKY2//MjhAapRKguh2UzT0cCdAzm87989/ff95/nzTwklQOy67q1NbHvtqvQe+6aSYjk80FZUhh/iSB8NYbtlXGCtjqV0Z/iPs9RHid53kagmpl5xvA7Il4ezdgdVtiAW3jlgXAyVvefMRwMA8qfD32YtTQduhOG6ZQGk4zbgQ1KPsVQCLY1SAG7dD2/sBbteFBaG3/85Yg//8d7/OU/2Z/JyKqZysshp19loLsoFEMdkepsZ2a37gj0uH2XQo2mQ2eW5WxURcVD4QLTfNpGCBrrNxQrU/SjJvO4ez+QTBTSMr/IsrQaG21+j5pNc+hENFb9iBorz+t+Ua5DdtZPKEgZpQXXvoX6pXAqMsvpdEnKzYyJihUvMOUPv+ArqNe2chM2pwVx+WzDtS5jVJxVdqTZkzn4XpiRDpozggYA4yP5EmPnuYt4HfkJyjPBbwc92p40qGD5Avvazrpd9LMT3sJEgTJmjxhjRt0UFPTnVKkFNk3n080EHnrJ4T1boKH7fZyT3Ur9FcOoarzIgk/1lzZtx2XwCBkFxl3X20NOvhSimyCPH0pQdpgdug7P0ys/TIfOO2SADaizscrDfJaLV6ZR0+Z7RL1Mu7oEg/prUvd0PHxUQd7PADaKMRNIwBeAiDZOM1wjbsjW2IDckGsBPAObh4wCYqgNigLPfMe340UfPSF7X/rrQxap8VItOcCZWm6Y4Ea3lXjWOmiB4l4hBmzCIqixAG4X9VNVcSo8iBzvmoETNnVCjiqCPMTLVCaZ2SVT1cyAlcyZtOOCCg3mweFrLjhlJ0NylqV01v9223WiM07NsdhSXXEXYmEO08mpvDcv4sVBQXjvBB2vfV9Q0S4kPpoDHxJ4BtOII+tkoIaC9YreJr4Dc4SB5XpqDMOAABgYWFXA7ByvFGChKXxgEIXm/p/TYKKaFR+OcUJPcVZ8bmrkstEVHjb2yRlfcaRsvssXkX845UNu7gYj0QICDt8HO0LkifnBHuxo1+Vphsogl81MUHS4MMkC5Rc/5QEWlnv/uUaPSVE2cUg24uYg/1i7H6ktQOzdAosjeYr7yy9OHUtxIc/JT8OXRJvdNsCwfAlOyS3ZjBV74ii/V0tIusyC3ztlhXRc6BGej7EJDac0wzaK0lHDrkCSvZcSddxSmqcEoUnZYiKg2Yz/1MhNIs5Jv58hne+52sljLGwaRdlDunHq998h/vDzsR0xsP9NosjJOe71lUZ+HA2I185JaGJWYiVHwsXQq4wZySXmZoHcfFZR1sAUQlZ9I+eneqhrYzHWDMOZgol8gAe/MZATuqdzB944g/OhodHvPbLemHmgGLB7KkGyAVBc/KyNVI8hITJCVArmDEStF1ztphMqgFe6LpNGluQRYsgpA0dH/Xt0ROSk0AIvW2wODsJQ9JJqtIxynhRD2Vz9C9iha6Rdt/RtD/ff4NcMsR+9iqEMsKEdUoDle3cY4EyTk6C2lfrfUPejl2osRPdBHQhXlwY0PWst9WlQW2vriBgS9XQkfAN06sd7+yYE4xs8PD7++pf/9z3+/c/vzyhlGKMWnhJNMp5tKrA9SRH7OarsSbveCgUwsbueo6mqnEJ5jVs1cs3cXiMtsF9MP123S70f/GvkRi3oobN5EyRuWMK76WJCpbHhIBZmu1DRZDbzwFrgG5gNr3WfYfA1C32pTVjUMXZoF+t6IgYKgzre0iH7jz/9y39G/Ptfjm2zOs4Uq4Q/Nv5Ro+JoZgf+P/beRDuOHdcSBVKShzNV1a277uvV//9rr1e/vq+GM9uWlGiHlAMJYmQwMiPlYK1TtqXMGDiAwCawd8W1gn53S6exZa2fiLJyHiOQOTb4SVFFIoYtERkG5wsKmQgkIP0iEatDvIlaYIXBuRx0BhselvIzDnNshOizBLfQ+6D2K3T6Bpy+BIXTh2UtEcrJaggg8/ugfEpR/UzpJxBOg4/3+e0zwf/5eV9vA1KpCED10G23FHYKa/prFIh+kAO6iE0oDRXc35KSHOfnzhlHZCex0xX3LIvSs91aDa/I5SJNLgPAOPoJwEy5eWqEeODQUJLRhIC7zGDg2FKZuXAOhF/J1JpsSQlNPH2Pan6Og5rbHiTuKfn9iD0YITuPVaQwJuf/f/7H7iUzVzkwVONATmXleYlW+rjmwPbUgFfYj0b+yYkp2QeIBbPGVJRtbyBIspx2La73CEIj34dmXja8jOKXPWJSixdAO2AIcbs479SYCyd7hhywjT+DhrVESGG1+xC1ttB7LikThhRD+907gvf3/BgT2XOWEYV5Rg8qcQ7i+fkP/vU5SR7D8GlJetoYc/CIV+T7ROg31O8wn5PMCWfPJXUCogyyNlmAhk3OPFZoQaE+3F5ATaTHOQCizoYb/JHkOxITeyB7fL97jy/ZuYsAHv/+Yw+//L6X/RgUHIlTZ0mZBM5k8SY+SilMMlFpFcsSk4oVIoISuKjTt1rXk5/ucIiAoCx34QE7c2BRmgWc7asEWQh44cf5tXmul8WmeU7BpkaYVim9CER41sKVrEP9E5nlWb2DAuPXYULd3+c5enj/E4v+WV2BkCog6niPpz3Cz39i4n2dhYiOgaLYBSMqSOLlJDlFh6uDtFR5XsJD8umZVwusPjfGZE698ky1Tk4ARprZitDo0VNmvKGVpFf73woWrRRMo09CAJqFM2SUYxILQSO4lQhM1ZPhqHKLsjb++SvBz1/3OlWdSCsXQ90tQUZ0XZJaI/KdgxHNYY10ncewZWKv1+iB7VwDr0ABrrzyoCbdGBuPHQVWCtlJRUZLrhwPVLnbGIugDn1HnCyeZLI9ikRLADVxOaEQ9DNZmerNztGM7EsLqeW8XpKEdHEh8J8UWSaHkEDgmqBArCEgRxIZKaEejHYR21H8MyEuCIUTwrqARlYaeRdORFpx6RvdLCo5gE18SR5yZQXtHDRSAh2UgCbp+5Bv5P6Alb7weRgoISLHt9BS/q05XZVelxVrpCv2gMRxFDzULT/30weCHe7Bhutqu1OfIdfxDFS2mOrdRQChSfHZM7s78QNtdqLW9D0qiEBArafyRYFl5iigXYRvJ0Jc2lxLUpgKCze059wR/lHQDp20flOUNgn0MmbrXi7IF7D1OyUj+4ePCD99XAjw+P0TfXUGn0NAnGikC2uFqLDFnoyPLH2kHhBhreiDlU6nHLVLzgVnddBlekCE/U8s7RLggBIPxTnbgLAFR9pTSkepWqPhRSo2b5QJMDN2Szr9x1DcaiMjWJhSKvoC0XAJ69NRHYIFHaZkJDR4Iqmtg4Gyx//1x64N+tFgnTfKHoLxt65iIUmbUgukNAisYKXcTAbMqZJGMzas/pEC24i6TZOyG1HhUDrdzJZBp57S4s5AG4Sw1qcJ4IB9bfN+GZCCzzWu8pyVYrbeU1O4wUBA4nHUFL/4//61f1FviUwOZJrQlRIXt8cFeoPM1WwnbGvfNeCFn2RX90UFRAASyxqJ5JRf5PB0+S5FFmV9PMPTuPgYOUfETcH1+WhBGw+ilk4fDRlTMxjTuA+oVD0TSkhPQACdD3yadzh3NhG2GR/8FDIRXfzl+x387Xuh3JXsRJswaHBolTBm8Nms+3MlMJLUSgKeNXlgKz/vAYEDB2THX5y2gbGRliORDCaTUDciJqRmhkzh4RID66AsrRkUCh1HGveTUtYrDjXPxDKO9DlxuHbI3dyLAXmSylojHyzYCivLQ1Tn8Rbl15//9eNencj19TgKUxzgEQksdnUWszzzjchYGM/Ka0cKKWiV9sTkDlIO2SlgyroBWZZg3xzAkaxmaQIyGgggKVox4t4hkspB8BazoI+ThlPJRkvrXStbLfp/2ucmUD/aUhUwL7wFKNconp6K1cXWXB94ZheHsrYKG1WCkiujvg1XZcGyUqFwaKm1oocVUhM/ngnHkC10Am6RSAj8iBXxEat/O5PgHdU/ypo1ZM4mVh1JhVpNe8SPAn8HScwzWFIN82JPahQXwAl0kYEAwDcdj3gJ5SjujLDXtfHUCHhJ04+E0ED7OydoaD17KlLVz2o+VTU23O2UOhappl6oc2u6AwzOBqyHsKwblhj2xYtItYylwgKvJXQAgACXmBk3V4S9jBuLk9yJDOka/bWi/0fsdM9l0C7sChoEptamicagcj4PM/hnZoBxIcsIER9LBFEqVZpXgI6SEN98JCJC472jmIqkMlPSZFTBFucC4TwzEsGsSLgC8J8/7Zz6UCy4nF5JsM8cDHiy8ZzDA4nveOWtX0FvzglTctZr6j28gPzIFaLzotB5ny3nIGFhErHZb6E8G6Qy16Ret4TElAKoyu2lKvuBauUWOMrGw6F8EqteIHU2laThtcEjTtyrZFURP4EsQSQq113pN5Qz4WzPsMxPRKwJUuBcAotUZ/VUxKElbxbFHLuP7/AF7NAcUIVKqTn9k2ws50FBave8BIbc3EIiOZVAG+u0XlQU40pAFu0/syUNT528nFx7hijclvM7GP7TaY8OZFSIAYi2j2onCwygcdVyWH+IWYsC6CiNV8l5QhIBQMmNohE2KdxaaHRJOc5cAao59EChHFngneAcEprKFEKdUSoN3/2ORJimXI+I0gQ/8AlRoRDVZJ9TdRh7fj5sNFzaulPhxKriN6NGnQkMPxjYvo8mQU0M7ODrwgO+QjEQ+lmypXaFRQJP5JPcIykvFXW6E4Clx4OmEoAHHT2RB6X8N0lcV7V9PHEpRveeTIbH857gf/3z2TntMjpFOCUlMkiFKgOCZ2UVAVeiU1YIKfXb7XKoK6shUDpRWO2yvEQT4D44vCgVi0PBqnysPS54O05ne6gdzaDBRmjporQsJqIijVQqI0gzoZbeLahOiDXxkfIlc1SwJotDKd9RIKI4PYOkS8ezgGTr8+cjwp9fUDx1aTIwAMyyFI1uBLRgFvSqATX9n6Dhz5FeTT0Q0zIHjCwFnsnlgh+a6odw+M2dUXXTKsdmx6YE2KU1CLo6jDWIWhWKhGykMiyE/tdALXFFYWwuWMuTpzcS6tkzGo+MRE5LQR4QM/MJbTukPogw3l8eCf73v/ewt/pcSYW2TuhUm3l4gPK8DpVjJM784c0p8dlR34PV79M5u+OU1XF4ISIqnG3z/BQiPE31Ho4sa0I/YiLVEz6XuKBUTn4Eq75+Zn8kzoaWo6MtKCn9EJTBIYAz8bgQWZLKHxbgTii2vHf3CP/jr7tX2XRQsmjJOblUsnOJ9KBB9EB4+ralLOKkpaucIkaKtdptxPwXkMsVCRRSaVYGIgXxAEaWCjhZNRp+31Y3x7Iv+LOh8byRFSooNKGW5i5kO1SJAR7PhYHFQCDbRzpFBm9Mk9EhSXtIVqFFmBvS9z7cE3x4oGYCHjkEj2X7x3LG+sCTkamR3hFV8fdpvGplF8lboILXsKIBKDNmUjVJBocHKQoqZOzxmrMcnHyispA0cAwkrrNRUNOwGdt49hm2anmEQtmXdcAp2UbhWkK41fLhWUTkyPi1lPZff50OpuLoTgrwmNr/+48nPXWxeuADQKE4XRKvBynBRvUdJLC1Oww9KEY4wn2zkgwM6/MZ3bsCTjwq3RYZtZCcTtxSiPPIjJVuEBYpatCm1Usi8aicTuDJxZ4DDrpBikyQeXaWyzS7soAUDXigklRFPoLy98+yvcBWJrJ5ypz4Ygf98ozw2ycUF2tDfhcoo0hQdZjBGwoOp0qiKcnFKWUwKJ2WMg8JLS9FW9uoB13kBW+BmgiP0LORWdUY7IOAFVh9bUXsXEJU6wuMnbRFymvMOWLNA69/0X8gUeZWA8GtflCIuNRSGh68GWPz5xeC//55b1ZKAzBHRsu/rGRnSSA9PWdAHvdHPBLHIdW2S5Dp5siSTj4rg97W5OW5hK3EXT0AyJxgzutBrM+aMRad3WMqNotUBV4OLYugjfChyWWvRBqprjuvS3H0AkQifoTAAgryPW4raJJcsPsdwP/zt7uXP9V1pwTLBAZAArGAQQOatHIPctlC1WQ9VVnGcNMq20JeiaECVjZKKcp1LLlKgvg93XiMEzBCsK/j8ZK4XCQQJojf2HPKm0/8fSD/Thic77y0jyJEDQQiqTHG8Bn3uSfC0oe7MWEygb1/isBlCFFkSFBgjcW4MCQ+Jf0gt62dAEGnVnA8FAoDEpFTabJC61SSd/JJTtRUMj9ieJVRg85SDT5pbONV4BIgF0nO6CrOc76rEqR//e9//C2X4rHLLpK7uzb3DI+5dkV+PVV5aufSgJP05yH3Clnd8Dm9C0+M5ufTYmJlLbXDJ4bqpIjqYFFUwiig22ml5dKfi1PO3+SFKVg8X3WWV1+HmIZnmVfHiqmRzjK6p3QzpDZLQ5H1QZJTo/jpFH97ZEJ8Taoel4TSJIubPEISC04tOdIG5iKsTt94Sh7P/8KjQSYOxZayktJOdu7Xh11tsZEjzcXQIjGiICcoJSePFNkr1WnpulhNNZ6kI9hI7RjzwBSF1FECRfqPzZlq3lCd0obkpAiToowmzXUDEyEur1qCKYL0pib3W52cCeV9ko488vWo4JMiFiqUb5Dw3uq84vu0V+oBtd9AoKekS3swoizHxp1XIoOMsDCFYJVulXMRbaUAZL6QBNJM5QH/8eNO7NvKzqHybMy5wirTuMwxPI/yvvCYqUGGgNVbywQzDS1dld2MxfoifdIUC5Iq+cLXb+2b6K7ckegkxCs7OchovVnXo6wZQ1iTfp7GmHF+kWIL+L7cfhjPWSx0zjOn+qhBWSzUkP5RwedSfh5ZL1TXoqOPdN5Tie2dXIZ0+vd//WVXgx2onEZTW9YnlV66RhXKEibZXkiDwdXLKjPpn8/YQJ2nOAAG3wYHaVDfLyRQSns/gd+23mPiZxnyCS60hxZhKfLsAxCIugCRQwf3F8Lhi/m5jldD4exT5BNhZ2FEQfAP2jHn+zd1jMc5hZ86IRM5emk2XNTBDmQlxmjNkcZI2I+MTgCPAvBAFZSMdlkwGdaEJOMmZHuTvAucnZyyvIhsZ4rVDVLpiGIZwUDF7UhVNEMyIFM+IRVlSSicViC2adKcRbkaJK0kA/0J10g/gFgqhQa8Uv49k9lxtrnJDI9//PIMfz72GekgCbxrb9V08cjmJznkwCQtg8fwzZ4qpAwB2vKIFHhX8YRS+bK437OTfK52a5IqSnZMCPLB2GBFdJsf0pW120DFukShQAzFs8XaiDEiWXb6WKeL86iKjB2xLPUh+PnPu5cAReIIpMSYmidTShmCetqOhuICi4/IUWMxlUCC2RUAevmERb5tqgRhzKBUQA3YUr3NGjPIX6UNX8tQsAIKTuLGSWUxMkdQiEUc6V03gECVa9m9ADp2JGSmUZ9/ktJ3z76CzmQsf//P3wh+/XOvzxEvOMO2OK60TVjwT5yA5ypVS3jZkjC1mfMkZwweHraVa+YZI+3XrZPtEr7A6kSK53kYZICFs3b6/EmVBACk8y2WeuaexoKQvE38NK59g0qelkoCPonh8azw9Xo4UXcYyyFp7IBF015mQpZ+yH/+ZQffvUOTrJI6cqhVpYuIMgK06dOa00PG9ySpT+1GksIGJV5W3WvA2KiclydHypZkbDQkA0EJ+RgvZidH7QXAVusMfdDpc+99Iq9LoOynFFPUkMgz+VK0SrmsZ1NVYzTS1uLvux3BT+/Jv24HCGI+j+efBudb6rmoVQBFCUhNvPiZ7gBlWysGf7KTKe+bskHgapo1LG8gfoRNWet5Tyn9WqoyG6GmTWd3rK+PSIZSEhYH6ef99ezQ03kvFMcjMpkUJzSQrff+ISdJ2wV4/Pz7Hn77ROH4COwDhxBpHcV9fneRIsrGmctLhoNU4T6avjAoSgK2pC/bgJWac4HcP/HwScAJ5awuKQUePKBKKzkCsvPHBUSQqqQv+aEqUeCj1BYaSgFGWDj9/2+fX0tbIoGkqeLh9Y11EYG1HTXeD2bTe4DHRmItUnoQYIXCSGAqKAKJ09xYLybIAaCr3IByshWVp1WAAYlUyywTITGGVSVdMyU/Db7A4jhpbWdkhSEwnf1fynxAiPkDTa2fpa36H7/s4Y8vpLwrp7wuHZQoMFMPGJ4C+Bpkrecf2muU+XNubZYDAJ7/bdtoa48mwXZLorS1ikF90tBk5gQD8MZmiOnaHJIodpii1Kj8rOTYyZKhTS5xRQJLgj6C91KT0/fDB2OzDXJcuIFLq2QfiHxjgRBZgY/iN0t+HKENqHjlIaSUFaoylgKHFJJCJJ3tf4mUOgAWaeVPHhDYAClamQO1Zbsm2BPk6QjNCaVkRLQ5gk/KMxxR6l8HYOL+r1atIKnCQCC+0ObqVMoylbRIYyTRdBg19ibRO+fkIkdaORNipIojhA2Eq5NTkalIswMdGdmqMyxAkE6BltCMZEPASQPaclVqSvrlfRCFdG6oOKqqPQegUslp5n2JiCPGDQUI8a62QGuspO15zCnPTOosP32XAzw6S1p0b1ZiMS4dVM54XLHdsrKH5lrCZ6QyCdJSyVFJdVXYnNVADG0Hekcy+zNAkxFaAS5V0FMYZGRzXCwdK9lrA+y4YmVJ4PfVoaNBd3xci1xuiFd6N6uuZHQuKLJLjRT+d+ClNs1SopZqCY8pakeuGZEEpUFIseLkf62bllQTkAniiCoqhQEoFUQI2oxuVMguOfszgqOYY6jFWPTlfO2hehGFgBLrPgK2RnZKpjgqpSGNWoCypkKLmqmXoAKqiMuJ2lMlEOY9BwqwVbQGUJYUQF2KhgKDvBewk7HGpfUJmb4LBj0kjKGoEhMIvi2sxQO1ePUA8mchEFIvAf7+0+6lxEVaSyf7U83ZgieqqJlCQgW4pRNp9Ssgy86J8AwSEMqpDCio+JzKn1hpBinACFcowGLunjNgjZqzolSKGkvM3olKhRtoTtHOxoeqsUeSBx7Jn4hl4UnZJyVajMVF69c9q9sQnElUzx3EdivOqsfGjI7G4pgJcuj0upyTNGyrAjvEsjQ6z2vidtlY9KLdKMsWsfVbmo1FUu8T7knGokUj+GzKGtH3eUT7x0Fo4QuoGVEJ1ENBvYHvaY4fWdkjByWRREzEFUAxO0uCHw8BpZIWWK1tBwX2GrX6gfOEoT3ltH2rsmmF/Udon9frFyLNobffEyGgciP4AFw1rCpjRiUzEqEtE7LSyrHOyi3nYRUraWpX1vzCNnMXDXC1eVYuCkAkFElIvUnqDiSNTKWJhpxEAc/BDxULVAt0mvev60aQTeaKpqEkeYXzviDWCEMt8XKOerCqyUamotqWrwiTGe3Ji6VRYKncKvCK9b6EyMpMKzxBNlb3dxcoafn8SPD//7JX/V101hNJUokG9CdlXniApcVEz08qpTpNDKhqADPkoYQKTWEDWzbr6lSVs/1awZcDxgBzcol0bXkr3YVz/ogZHGLqtAHpVsApVtKwbcr9mcCuooQtXqpUFOBmRUZq0P0Zss553iP88mmnvlfj73Zm3CCXrHNKkMQ5QkawyvW9MZ59hQGCShcr1LKDItkTWuYDgJhBIcQ36rM3JULGtRv7EXl/buMxUGYEjlKJ9GwCWWzloIOeYOk+R/HM1cmQZo+Vfg6YBzA3HmlZcLAYFGwTYv09fee/v+5/n75QWzZodBxKzPjYHgciYDH+BbWntEEItOZYbq6EgawSRVqHjW95Qore/k7CPla8Zvu9hnEkSPJ3Lj/hJWRekKgcbgp2hFRiVj7RiOXjn/JDqMj9Qfvot32G4rps2P/6/Q5+/Iiu72WeykF76g1WwJztS+13xv1YAkxtW41HsSoyyvuKmUBGRoNlDFE75QSHaJT5BSKBo5LJ5yreJAYnUHGiAg+zModIOICkwHx1iHAj8zDysqSlqDkZDsFKJP/7wgV+eE9wtws8ANuPeEYOJO0EuHY4MYGM/iQCWUDGWqNa7CIpYQGnzvZGgX+TE6IeyxuPPjNL8ScuqQHmfXmOikBLLuyUQqcSCWmekooC+Y4W2XO8Pq4BmTSweR+JI5MVfpIc95ftP77uf+8ecsFUGvCYpGn/97/2KhLfODxQ/1wiOWp4JJyJLqazc+dKM1DGPRBjCxqN9cbnnB8t1plPyBY+gKEiEOHc0IJwtBFlTbsatO9ErbsqQ1QsgsOAlgnFjUQh4+NHLQqnusyFMG62MQSzIfz7z12bWQbKfEwEV3zMyJDQ1Jw86yZIclBIRixUrTtFGdnjUwgFsV4pCga8BwWgNu+NEJLWRkb0qnLtkBw4NutbGR9C/cTHOg1yASFQVGuC07Qpg0EjUDYAVSvGSOOC0rsp6km9JX/HS0zKLRP436wnlJ36sj/Om7mu+kVggLQn6UEQa3VP368yFcidNSi57IqqF0l7lcYJJ+yFkpynZnzIOizQ7FbxQXkfJBXhf31edFVR6vxqaKQ/SImOCLm2qj7TOAH18Vc/fdzBX75DLwa14xAlVT1amuEGx1p3cXBdGH9NdtRzvBVMzBZUYDaZIsfvQZ/Qk57tCSDJ2/+0cewFAzjNjRKQk3OcpAESJcDlcbQ0zwTOeZXzznW5QBtPAAqBuMMTFFZjCfAUlA/604d9DDWRDmBIB2N6gBl3nQErs1E6n8g2L7FnM0gz2WnUayx1iANIktnVyByN2v0GcS+0Y4qy+aNkb11YL+w/wPdtJvHLQHVkgAGAVDZ6zGYHoeRGcjrJmNNLCOrmr/mfP+3SxKVpwGNq/+ufTwCz66XGdRFKvJbOThTZoNJEeA7pZDh4gFyVtVULiNEXcdJUmoOpyJHw0XFESp8cRzu7VlM6kvnQQeGHWt3JE1FPgTUissCdZCOgZM39/hnhcY/uJud0VQwgA9BPs5W10TiMgcDWBAYA5JIRQdIMQMkgwr45YHFbhAFGZfvCyCILgCqgvXcE4LICaMVQWVlf6YwirS8l9nwDJdUyLTBpXC1Tqkn1Etj30ZZzhhN3IiqeMh0/P1EYfMIGDSJTbQKNJ2tBEV5/W5KKAQBXCcODdOpJor1wi7Dll4iIlWvUblxQN74HlGdroJzM2cF1k1Vy2htKc0+1zaqCH9n5FLk1TtL2xXUbR/YodX4mY+VEc+dHaF3iqf34cQd//Q6tA7kQSSa2jyj2nwQWhKViHVTECoQjE8XipyCSD+IiAaoEoFkHYuiERWKA7gSfTcZ56VdhLJMpzdfCwXhoMw5J2L+JbKNA3oOh3ifhoFu6fIRQF0x1XBen0OZfmk/IAAbvdwTfvyMzPqDA9YkE0QPrIMDNpIBGEplnI9P82FbYUbDZISgAtGJBJl1noR5iAtJgBi7OTuDVN1QZJcLJJxIZAhkCeRrpcC9BTYDO/w0VWOHNFk8zGOvNFVFHpJXY1suI8ipHpn//11/v0vOnC/D475+f4fE5Fuc3HBMeKEAKUz+AfypHTiQhssv7X8uCDWLm8bBAPzYZPFRFPHEbIWGGbAMQAFMMF0JZnzjWshNLJa8Z7M6kgfWJKAAwgtNjP1BRY8+zQniY8fq3z487+PORhSdCZgbnGIoGz93zhqu18LhI+Tw5AS8n3Dw9cySA5cRY1nNH0AHGbUMo88VgIMB2M2ICwGA135kdSySlyPxPyphYpTDSSlNNMMplaA3BMuRLQdTAP1g3gwbY1wVKgwy6NWTRBhoy/XMiMv30SHJNEXN0+LkOCKcw7buwVECOciExUlOZo11HpLHoW8aSKGZA1qF4VbJHMhk3Hoz/ke+ilD/XcGSROJLsDQoLUtGWyK0mt5Z2FGKS8SdYqXE6ZeFELerzDm9JCpiUCPwv3x3KWLzyC7DLEcgsoNd/LHEDoXRW4LxwpCQhEyFSqI7GB4EisVnT9WSA/Apg4cl6cPU/rcOtGNt9bjZuZdbVKGJb7XDH6l9xTmXSELT+W0JdxED65qim8P76cE/w/p4yUyj16I1ASCB+ICu0YtmrlO1kqUSH/V3OfZBq4ZRTDuWh+DECCNAKuXkp+sw/7dhWGcAJoDnHMGRZJpFVtt7x2oIeFPJCkOUn1mTssfisHgcqOBmlTHgp2aSKEwRVpIm/4+8/pilI+wCPf/22hz+/kFiXi8K/tTlhln0IJSwRYGIUqNB1LQH40iQtwUG5qrpwL+1EqB2NlhOEwR4uIysEQWAY0LZm3qhplqRTVWMoITjy1o7NCdpxYdUlL8h1/LAARwrn93iN5z3Ab0ceD+OYuLFJKL8OBx2agJ2Xj5C87jDoyFlqMFE6GwnY4IBXNVeEwJqUMpseIFL7TnUADoYSirHfa2tJ5IVQAK0SyOixYxhatL7qTxbkxET/wIznb2wj+skumLipJbmLEhBsHFH849fX/bDpH4crRAL/ZBVo2bXllRFH5ZTmdAflCPdkxRRES3eo61O1SliXRyrNIpd+JkQ4iGp5S6tlciaxk9HBuvj/DJIXkrenjAtkpTqvGYAtAcW5R+R0X6niW7LtLTDGfYfj+E6cHT98tNVYuC0lDUwKyKVmYpRGfpacOFMpZekJsCnhwHmlPLHir34/MgPkiFnnFoAEYNZiWmNhbkJkg3WVheLmJgiiUbYDc0IS/hyOBOCk8KuAHeNIcVG2ffee4F44Beq+pKGIykuVqaf+pRPc0TKhGgyDWrAdlH0q/9ito/1KkMq5mFpH4nW9ahLv3CE4/5uOBxfF/lhlRnJ57hPHoXA6E0L59ENn7UyvOSpu/PMim0VMCWbjJzxC+3P5+SdJ2r98fyHA47c/9/CrIU1bT5U6dReaEJSgj3ar9hyxJBdDbRKActrNCvZEJ9Vjy2EB9eGaR9b9c4AjHYtH4But1rsjGDym9aKd1TYCQmrjBOLudrq2vh0Jahh+eWqmJAlcp2Qe0ow720RcSh6LrkE8htieaGAgI8EtjQmQm4a4HwJBbyjgBqNOOjCXtcwTEiSZEVpUObpgLNXVjNyr+XOPoBT1zBkMOI5o3DeyaDWFBAu0Ammvw7zNcAGL4ILIUHVY06PkbiGBM+Jfv+/hj8/yhTRQCUGWY0OQearAA9x041aX7YGdIUOCPS07McRsRAKhMdiZoGg4xKLj5dV0UH8Azx1rCmzNFCB0RAF8IE4KK6ij//V7hO8/oCy3CaCe0Ec8KtXLoGD/oJydQtl0/kDmB48bTBJJDAIilAugU+WnI4JwdACLAChkzUtMPA+lCFSMdetI9qZIMi0CVMk4kYOJanGD7f6LY+TJIIPgD3LJ0OmPHzl/h5flbpQIZfAL71CapKx9xxaqeC21vgMpG13F+5ICbHkWQ6TOX0FOg2l5PBukZh3MFHEEciwEzdejlG597qEYRtGY9yNc1ESq2lvrOSLSm358j/DDhwsBHtNp1s+/74cZ/CYakWQEiBpnm8+zJqWKIeWRiIoPgCwtXKJhWFXfYrPTsuN9lNC/chFCpcWMJrMROtZbDwjO5RXHE6xzXfERsEHBIzmVeFANV4l19B1qCB4GmYqwPc9ec0Kd66MgW/n7l1ceDyn7vEGhMaawo5LBspNAzTbzGm3MdDoaAa0RTHozU1qz3vOgNJ+EcikMjl/ZN24JCD8FxCAJatDOoPVzdKLE4JqoSIo5jwbKQBxC/tmlxdRkqmHHehYIcS3wywOHsHftK/bk+J2f/yD47ROlgRYNzDEz9QTQCSTHOcDJElHjmnPKPZrizK+etrzqeOBJVrmYFhhBe54RTavX3utvPyJ8eDA4ogJRYpcaRyTqjIIUhovX/LtjrNRn02JrEoCZuRM1SD4Zei+PhNIC47Q+DS5QkUfF+GwW2EFNKacDHBLLMiQwC+TM2a55BTG1IegBb4Q2KbN89y4pD8NA0Cw4MGdMVE7MEfcSVCFjiLXAUUUoDCSw7Ddil8CidBJaWTqktv5GXVko6MHUTBxMkkEc+JbFhGcelnEdtMSX/LTEXJzx2RwpTACoc3Ci4/rTd7uXPfEigMfjM73ULruBAjiIn8R94i7mwG7iMuUonzv9+MiwWwZGjERGoD+uKqRO9dVtCj1wkESqearQNkXiRgxONNo4FP/d5bRyngIj0CAhyPGARW8ahJ9XOPXPBFdW1gm/3OdHhE9PNrsaon8AAcCyCJgBlsYhFJQqKQFoIRaOL6d+xVBUCuFUKHNgRPBScT4KykQYcEQR3VjXB2sSEr8W/tVwwYDNcxRNZjFJNjEu/a1yv1gPwOgWrPnnggE8jb6DJRk7DCIvZfr983QYQPYgdCgaiW4TsxHetTgVBVrjTUGwRJgHouMjrEUOGnDlXS2gaLqSAeueMoY6mcjg7iN7OomVOJqrG0z7nwjo//4jwsO9rFbjBaNB7EDtKy9TInyaLQSf4ewRL8gFmTgSlftkSne8oNY0HCSD9hCU1o0Sv5LgP4W+ShCW/IwHlyBz+YBOcOuBVdKhZZMFRTIYTtYaNUDCHlCAtPkndKBUomzd773A36HaqEHlJ932gpdjBcKuXsC7fVZ2mHwsLymMwekIuWFwbYMWMrw9mzuEnCMVXk1w4NGquK4O8AdhAAbQ9JK5gx+B4Vgp5knkQQf7RJJpqSZfqrroTGz52w+7Fx6PiwAe0zf+z8/P6YmZ9D/DMSnjJ6sktM6nwRJ4gPpRQGJS1PSXpVAQqLKAcqlPLbRaE7sJrC9Qe4hteZC3uxWZJdgO8mu3CUfqHhU56sG+illZ6xH95Z34uhX/+1GgEpA97xF++4xNAA5ebW3wPbrXiVSekFBLcbkkNDnoCBiQDEbNfpHqThM4lxUEiQTHCr+OR0zaTAunH4ZIs2avZRF7OqpXNhdFEERA6CvVA6V0KShJpBGyZrMbJrnaf/1GaadOw/Sl0pDUuBoldeI9NYABjcC004gQ5UrkrBNuSa2NlNRu6WDPI5CMBIASaX1Pu9u9gh1R2b2wqkRQ8lNTrekOmIS9xyrYJdklsQ8mQHlmLR5QfIFGYSJw2InQ9ll1Es2yMTl47ZV5qOCLBXK59QpQZ4ta34mQ0CbQkXCGjqQKJ4A7iUQuvQ+gvlcvcatGS6SmxDrjOfF33Cn8HdjTrwEbrapcDWwS/wuAwb+ZqRMqJg+XUPfRP80BlIiHuJRs+W0uT46V7lldeoCCNJZywhEmP3JUZcyvdzD9YgAxRRkYbTirHPmh//zpDnoYCHY9E3W6UWQjxtDP0f2t9u4lOdupNo8ZR2ygV2CRkZTnVgoQ8WWJFWRxnlRlSg4J1WFY3ZyaDI/zVU6fQSrwAyxmBnsWPMocHX+nc3WfMkfwtYQFD5107B6iMguFkSGA0hWG7EHjCEjrwfPUoD45pIjxdOYgL+VEMI4j+DQQ1vWUdogodIn1wGSDeb1IhyrrhxCSU838npi9puiDB15Ug+xQ+cBpqFB8VfH6KN3I4Y9BzsuAMZLYyqlGodTOmCYZBw4NrI6Cg4worFsQ1oFQX665D+QOBJtTWQdOSlEPTGJ01ioJY2GeyD3g1w0ZYbfLPXrDZVA+fja9X/o+P8wiY2OV3l958RJooMjk5/OsBxWiVgGJA0PE7ELj2pKw5g1lNdJ8Ze19gnaomT/3k0O3c30sat0e8ZdIZ1fHRf/pbJtO302YdPKMV/FvD+xo1ltUloIad6v9CDav3dj4UEbDce87rIHjGmmyAxX0lyBuKNWDFKxtHUaNJwr2XtNpN8qwCH1fg6TDgqAvU2Z2EMi2Bg2QXZwGJNs2pP7yPRPslw4BhdJIXnr/EmshyXuxMe1B+Htj94tBKdd8aQ+J+mxYtr+oeGCS5iFF0FSA49EwHTr0qLBIDPE9xj2VQ4d1AIlFEInicRuy9X2+NxqnpSdwpDz1Kt4TmxpqrB1HjG2c534l5jNLkwkFpygia4HnZywmlHhpXmLGbDRy+6BoUdzdIfTSLXZleEzt37/t4fMTpSe4mfiDZzZc9ypKLaEsI8jokpsjnzpHDvnnpK3ZYtThsGVzdNiSWzRT60SiySg/q800yt9h5D0Ladm2lK6+FczK5jGIiUTyydHGN3KKgzYo/OfE4/GMsqPDygYzyjpm8CCUEqoXNcqL0BpAgFSWTYgcMcCpkp47RgmTlF2HgtR5+Dk6M2bUtWJkk7gkrsl0pjkErtycRhzY0K0ku4RCNkxAutOdz6gEEBEmzQQguD+QmX55NOwNyiSfRDog4CawYHiqzvJWJYUoVPYRUIaKlzojK3tQJb5JcKo6+QDMw8MI30awM7nNkdqkwvLjBx/ocNUVA6nBEtDAXRdtjar91B6whk5moxkeWhZCiHJEOc03O1ghgeT+EyllryYJsvKMEX6LMBgDnWVNUAe9kbFLPaOgZhhZyhoJalMCp4AbAQwnTvQrrK9uOV/FDj3sCD48zEuxCCVKzCx9wblzzVqrNCeTJXeEWLFn8JitIf5kyDrfgEUSExQAmromQANJWsZIw1PlWfkNbwjJC0rI2G5rEyjHozV/ClRtKvGc5NkvCnj8+ufESk8hMKMNRJRePQAetcPq5JcOwRkpoMhS8voim66lF0iCrB9LZQJQSl5QzAxpeTe43FJNeqpOGpFQhLGYAnZ5xThuKMT6eABbsUJNa+alYzhmCkkHLV+edB6PnlMDcTxR1jmPXiMLrCAp3BEBQEbjfdGCMtdyJsEA8/r56VhzqEi68BgkI3V+oapvBMEEEYzitdWC0kxmjpocMR1krZbsqwioWGU3MOP+yruEuGvUvfJMZlrdjldXGgB492mjVdol8dZAfcKGRn22i3KP1vJEI9CI1pwEfGMSeMacxC89iLBkUdn6/Nv3+JIdNCegMfmYAhKh7nBQy7PkqYygUYKQHa4eMkTeP5KajddNGpGnRh7cgH6RtUDsdJuS75YF6qJgIMXnR4rvA1qemGzsLSp9BOe8JQMQju6F/YJoXPA3cXc83M2/kiV9MA6lGBTwcs4TrIlua9EAS2nFZbRyf3KK3ego5HAkLJVOWSRymPgKbEV0JW0TT59P0RbmHcrSJ17tKraa5WJ93DnqxZHjHmwf302KZRcGPD5NSi1/7BUVE34apxQFW/Cg5rUXBRfnSWn7Xq9fReXIQvFAqgksSQUcgI/ThkdCenyEzY/ntZ31nE9vh8hOvopiniZ7xdlNQ56qHSC4J/WkB3IQJHHsRSHQIK6ce1Mv0J5OdH/7vJPBFuEEAFE+ITV3X+sEHBLBjXBaNzdGmZN9Ez3595R/VE4RAyhTM10csSMAW7mmeiZl7kcpXlRS7QQgFwUZUFtX2NajixwMdK68Q4oOdAeoBjUohyPWspRpxv7t9au0Hj890ouKy34PdlaTpmSDeqDFTX8Dztm4pHwvcvblRQz4TO8d5wX1mg3lpIAYIN/M8Abe7yYSNvz6J5rP6+q1BXztqPiKGhx2BOXqvRy0gUAHEIh098wNnIU5Q5k+kAAsVpLXkPZDIAtCuA7I8YZIsOuNKT8IkuKflJqP0o9zAIyq/wZwSFBkcTtASJa/R9ofSQBQtVi1bN+/p1P5Q0OKSufYhhpCSP3UiA4DJSnwVTSH7LoqoCRJ8wrZGWb3J/YU3r8vx8iHH5z7+xAjaXa6I1KnKvasj75J4B4jLSucpIUuOF/UDhKRBIvwV9F0Ww59VRy/qxtGYyxe743M2SMiJvKLVfh7tit05oMETQBDj2bK5//x467rYGAW4PH0TPDP3/bqpJ8jVF5Sd9aflr/XnvCXWRtSfQSYSjH1lJKmku4VtsSh5Lr1WORoyNotZQ0Whz61Y4KoAWkpVkHMGPFSK3SLxmWkRvrOzbQTwMlaZkoJmjJ215i+E+CxF8h4OHmoR0QYdZYt9ZRQUBAAPCQSPvQiPCEQdbMWejIOhHINKTBPAS5KdksqiE4c0XcH6hny28M83JXzEmoQyQLWoAOsVLNAYExfzB2r0HVByA5NvHxZMfn8dbv89x97eHzyzWbICEiSg2iDhxLoHMLLg/1JhiOWOOjOn75moyAhMBHLPpjP6SIPSqdo7/D9e/zqwGErJdyRnUJOp5GlouNEjGSRcAfAATGwIR3oyHQBRVAmLkOLNXhDiWVXgS8Q28u9vnI/I5UIJQN+8Z1GqPowMC0DHvV9QN7b0kaCjR8F53UUhw13gKYWiZN92ENThgAHIEI6YSJeY+WuSKglTpHFBVDIoyqWX2SflN4JFZmG2H7Ss6h4Rhj3D6ORWmYNu/uWwzowd5PL5bX4UxM80+9t+pGLJzr8L5NCS1+CRz/gMX3rv395DjjcPIwHD1vqdriokJUVOfKLmoazI1rgdqhPeU1C1hotMZBUuD+4QasyQ5Tj6tdn59HlUQq3+DvU6iFEsvQyBiZoJcdEBempUlKTAsQMw1/a8e4gJGjQwun2Qvv02PJ4SOAP7wvLsKCRyu2VRHi4lJbdIIEFEfnMcDCp7ApdMragZMb08oMIpynmsySQO3MqGdk7of7wvIdeYMHLAInMBSX67e47jc/DeBjVvgUmeBh0MyidTtK1nwh+/URiX4zKtIpkblByLM2lFS2O90ADDCAerUBZW661l33+6pDN2ATUANiosNVO66WT+onQ9i/fIbx7YLpqnWUNLjCkMeUDk/i01obiM3iPKs5pVgIogR7ZoDXiMLvSxWhcewk0Y+alPf6WRtghA14IWSBgxCretLE6k0vNpjkbCMbJMmcBQZx/I+lrD3dTScvegY4V3obTH+cBRCyhCyxiH4bwg68EokpDV+WFWvqPs1aMPuUKp0uuKZ5sIU38pgQU8spW3nzPqg5pMYY36TT1QNJKX+E67e8/7rq/2w14TO2fv+7heU+ux8Rj93KWNOleooNwtob1IntdtKXn0gAHAdkeS6dYwFahghFOGSWH350mSl14RkgNE79Mu60btipdSMg1KZFZLpjUFojz4viy5OV8/IXh5Rmimo2lkgPMIJ/oDOoCD97wNAjpqhPY8ecjtpkGUoAejzFnPz+Xn+w9lQpnXTgkolEAE2n+gKJij6LSuCqAhPq7eXGbaoXQD7yzwFIYPOGlnagAiwozbbakCTsmW2+FWtPHQdsSrYxT+WqULz4+E/zyO8HTXtgnBYeuKSGSVMqz/SHwd1sTX5S0NZ6Tg5gkgLySfGNTqoACgCCVTjvcFR5vRAg04AG/lCnieB7vHwB++m4HO00KlgRvAH0nNQ0U4Hz5SdIQDScADQWS0JaiZwNfihh0cCRfHVnbJVpvQEEA7mmxy1sSQTgF0mAVWHFKAs1aB+MdenEGyR9rglcvwFcOhJrx8xRPjUGfyErvd+cLUJMVjuw4tu5EVnQBNffCubQlRDEQrAFpiymk1xaILyOn/skSuogKcAoFQTsEqnxKWE7OV7VB1pzkpN+arYgkAlmnAjyUdOKgJj5xbjHJtf/1+ysBHr/8sYfPj+Qaae00tkm/jea+SoWCM7aM9pMl2BG4JirGodJY5seZ9csiM0bQgBWg7AreDI0lTb7cv4tbIxd6lFkm6hNiAPoMqidoabyml+vjYOqJNzEej9AUVUCVzJKIdAbyoCIBRmTKBCiQYTEnOJPKLVKzHgNBfDYol4JWb+6BUvLUCxYoJySoSecELpydd5j8grr+ueqHAC5mEsVEQIl0UCi91qRMEiddYxr3KdtjIv/WAjO0AoKR4BJA2uigY5Yjqcpe8CgOV/TdA+UTs4NXTqhqOLsTwDGVr3x4h0EPtgVYZjvF2vvPPLJryEQDgWoGlOkt47AAKytw0IxJN8CU9ENHZCWI5URB8KwHOBuZ3RABzYZwbQbLvbJj05h+rsjFfUdiuMLX9v07AlSepGDxg1wRoECyWCVh1AQCkq8e23Ftix625V6IY9jJYWWRhq/IfWjO4yLOUWMCj8heyR5J94JDJlgVrYtBWYVH4yl6d48vSmZXATwmR+33z/vENOfsHLwvogvHK2ymGELIHOua/iKS+6xj5cjUVc6BJrErIits4dDX64yo+0fOMa+YOAgrxJFY5kfcuvgeNCpGiTjuMztyNyAfLrMbjK66pOO8dfGI8LxH+fZz6uWlU1XBYKokzR2BUXUi7owjBu9blZ9hSwbYNRe8kpaEZGwFigDjHkY7Rmxujy3AxK8TLi2QAOIAIau1wVX93wtQBKPqLPdHdb85AErkwwLpWHp5YiujDRpPdPGQEx/WL3/Q1z8dpw5jOG3ICfL4l0h5N4TLcpY63hsJKjcUTC+OrA/3sF9I/5du+fHdJDnLsjqsyA91RZdMt8mp5v4F56RUZ8ETNyhgDnBXUG4EPV5+rRcoA8XAvhBQDKJ4YTvfoIPjpAN1MseG34P6AzZVbhZyHAohbsokF81cwNFaV9ozT3bi48O+sTw1M2HNueFfWe6ZKnf8Zf0efkIkrAUrlUcOsLR+tOgHQ/5BsPZJss9etLN0coZEhE2ab3nh2pFof6iKZJkOzRhzfFVo+fjuSoDHlN0xydPOx7OzzqzC0VECFUgVSQ5WMhnYsk5JkUpDtw0mdIVCcpm8uD3sUZBFkI5sm+C9TWKryYeAIcbz3dYK0JFS22fcxuBB1YOSKI/BzJILq01lLZM8rdcFJlFo5j07QSTMfjDB4xAGKRxL2801obCQp/rEOfHOlJdwlRVK9iNCfIJ0cz8kglmMrDtOxAh5ThIVIJyTmaQpseBgbilJOtdY9C8HCJ8oXISZmoMKPt9zKGPdawkwpCehw3Iu41GtXVoeucyUgjtldUwnUz4qIZ92DeMfSL4/JW5AGgVA7/MKNlcrRfAGr0n77gELjAMzL37mIAACxBJyhfKcOaS2fLxnlczMKC+IrrtQTJTJAMiCel6qAIBKSDw38+TdHcHDPS9nKa+NIDLxSpEor0WEaMqz8vMDgvCq2nF4lgrpLxbaDEMWTdAzM0WSKR4U3Gtnb2SWPWEHxeqoBR5oEa6N4EkBSbL2wkBWvGwg8O4WL/CDtpcG227Oe9/fHbsUe01nBVRgdS00vkHNp/AAakhmAcUiYkGqovxTElav8j5KGKF1A18la7H4JAp60YU3X71QeUxC53dGLJBKOn+NCrSXmFxhxbpcvrs/ZijWGx3ui3wkjmMAsu5mZ6yAfH0gC5jRyLdG4QLceh26msQ3DURPKDm5JHcB1n27c4IyZBchbgQQQgSd5T2lLokuV0SwM2iK50bU5pEwHoFU27QhxtywoRZUU2sitPmprqGybAXPmCUmXvA0J5mJRGztoOV4az/DcpMl/ZmOY6ueGmJhA1gHYdjWHB6BznOWSPc+UFj2WdMj2YDovCv7sDLlgdSx8lffvUf4+087+PDQvgszWc17qgpU2AZZyKmcoEyPrhXKUDGp2mLCAPKESYCuJzNINAnSyxDbs4xna+Z9Md4kbOPff0D4jx928P7eKPYvAANOvOruQcL+0MxfAncvsuK8TGYVCmn5qYEkBRBQ9p2M0pLKvypMaNL8emOfImWskL0XatfSxpcEW0/GWgz0B2G7j5gXYzb85Edwey/5XKUvgOz73n5s2B/1u4m9FNHJDJHsAhr+DtZzCjGRCcl+dncHQnx05gc8rjckYv1Cp5+dwwkCMGUFUEHclI7F0vPH81ygw9HnYYIiFRtrR9Qd3ftI8G2PfgxKvrJhPKx5R8rcTdkjkgJXtl6Ynebzia/B0u+Q7Bn3XSESo2HHhozKPct40VjQldCP8rn73bzjlFkZHlP7x697kY9B1tllZISM2oJ4+u8MDofuDjH2NdeZ8xRoE0f9HoA29wWlE2eebr/EaZ2lbV4/IEAjeQXKxBHUcXQ3uIMTpZYAAs67gsJ28vtnfHlEV8Z15vx2p5VFjjVIKlVzMrMTWOyWgIzObF6QIFEoJtd+T/o/SuPWM05WaUL2mZLZRCm+CDbne7OtMhkws+e5Iu86d78p/z2Vt/z2ieDxidyHxoPxjhy8ZJ9KV2k53LMiRD6kQRdqaeLmX5B7VzXQ9ErufVL/AmAy73UHkFizUhPiyXFQa1SognzYbiCUyLTL63zNiaNjAjvusLMEQ/MNQEn5pq5LtT3hnED2vEuTXZM4Lk1xccyofadAlkCa04IM7iltQLyxVRRIwVBTCXa1zfmReHX32YNktt2EpBA4mY8SDhmeIfWuYe3dWXn9x3d7+QFJqrUV6orL42E8K7LYlh2gO59BlRekhrtE5OOigH8A+Ufrzr6JEDEPsI+dr+Xv6xE7RIqaXo9a1gXaNJ3mEJYOATx+/mP/1SnT43s27+uJruTPkoWEd5C1ecbUiz+76sIzf4chFQqzV5hZwz7wgdqxODibVg0L9nR6C35Qk5OizAqWO3rKHmLKAIhUFTQdUe/PX9fE4xPG58bsPkymtAsBZk/ApIKCUo19co1qN8KgvKbZ3YEaqa7hkjhVsmBkApxyzaIwQL0n5ujhhb3ARxDwTYMeEBvX8DoynrFXLQUcc/fp8ZXY9LlATznvCoUBI0ejssJ4C/5/hFNNtyifRPXmcVQkczdRjaiFIfF0yCqUIjoqfl5S+LUTmNHBp5zKuviclBT3hzuEHz7gi5zkjNBBt7skp/nOCkqtB53h/JY+HiXrgCjaKQK/x6z+oGS/RYAPkJeKWK4iZF5xkJW0yUH6djYqaIncuyv4E65HnLAZ+nhlmgNVfltBbQZo/rqaU0owKbO8v687Ru5PSYNYePlGixurhUmM4R+p1XecM4tILsKxpZWtjXFwFB5iifQk92aUeXnA9MUkYNlZMoEsG+6qvWQ7NzgxpoqSHz9eGfCYnLFPj9fBgSwuUs4uLEq+mRfoC/gXAy7QsfpZnoUBD6a+q5dEIb4XsmgWGvUESTTY3mokEKMdfCx3PTSSHEtmLmcwnvfwIk/rbYA4t+MZaAZcOnfAlFMn8wweBU2Zx2K3wSC4UdkAWIhvZMBYIsbXcxQM4tdBZ85Aj61CffNLmzM0Sj8SG77UBXy5owN4967Bqt6Um4iZy5pOwAfBH1/32j31Xo39BgXwsNWOVzZbpjXfLOqOovpK49V4J1HjG2SNTACVXHKk7zwBHd+/R3i4H3hdaruUZhwzu0kM0lwOnl4iOPwKwpd6KSiyF6HIM3L/EIWMFOFl3WHIyiVYIJGz11Bm8BMcHsSei/dT6VP3AGLhvuPSySgmM4TXh5fbcMJdWSZahvjXGm7rqx/u6YX7RwevJEFaL1OZDyDUmSIvwMfh2K4k0mTchGWGSEmjmrd3FkvvYPAxCUDMzsrrvbkmqFP4L2Hb0+lHzeosZ/JX2ZGKja3Omdnv3j/gS9nvVQGPibh0Sr3tBSfEz2TUZr0alCR9PTJgFKA9NbskSz0KzlpIQKYTS4mYzTBaZ4wLioG5L04upR5Lnz1hyi+IdVkRg4KzT8IzBOUSqp/WCjy/fdn5xxIJ9r+5PLDq7Qcp5rg3kuS3sHWmIu8YytgAP5AO9aeAvuCMLLNIYB8FHpAgUXsXGMtgyUqInLlDQcZ7V7Xcx5OWnrmG3LImRzEn4ydY7c/Hg4zt3icYfd07ODuHvAtnEpwjVZmkclyRFW8ya0ppALV907LAhao9vrYZZ5DkdUsoFAaUDIIS6Jjr54bTrA0bSzOfIeTcCvjTTEyny4N3QReqq2DTp6VK1kG09MF8R4BQCaXnHqTf5zhm0OCBfaVKSUWeZFyr3hOc/X50kFo9qweIQUypxnLbv3snE5uRaQkzITu2nVmSmpoqLABGjsnwYJqE2OzUx1EgM0I1kASLo0CymsGSea4EsfaSoFDIcZGISx3DTVZyf1EVO4Ed7x6uDHg8fXW8fv597zqpkSNuNb1+ZllLT1CIl71t2x0as7eXjjzyGaCjVCJQ94ZDMUjdNX8pQyEGRJT6oBLNesLVr2SAGewx/W5SanmRmsw+/kLDy8vM5pbXqOvCeKehGSczgvyZFUXpE3yMRJcdoIBEb9Nrb8Tdei5Q4RnVJMDTZLwkwKc5IGFoviQ6aO56njI+/vwC8PxMsqfteWjqz1rQmEMGmIJTqd/TzASTAMKpZ/mb4ufUZoCEFtjhww/3rydND3ez/flcdoRSYjKnZKbr+6SfwmWChmg5SRdYJHygq8yClVeQo2pjJgAo5cNZuxCJOTwRQOmkuAf0gGiw1cGREZHDtSJMl7MGxpcLUOS9jY6+3wG8u6cAgGETS7QQbwkhC70gnT41GuvFExwcyGMWSFtvuVAHZ8ES1j1SMuAc2xMJbcmbu1ZZwIJ1LW6FKYwt1ZrbpnKWu3kVLfMBj6n987d9sBAq6Ps42VhlalmkHntAEkQ+iir+jQLjOgob6RIn+M0CRJa2KQXCwDhBwdmNEuhQzoke8sanB8IKcVFYdEO7NLJXJeZ0n8HACfRQ+4Lzry4E3KXmayLYczN/QM58H1FKBZ1BLoGRhaBwSaSABwEYaYBLxfFpRKF6gIDEFzH5gQR9hwwOEXST8ZqgwxKlhgYAxMmdXVJC5d8jlvyXJ4A/vxA8PtsbMAacGjfZrAwceem46BlJwAIjquF92fQ5KyoG3ZmOWPBMpilvHx7whZD0fobT1VUGIb0P9b1MLxcFBzuQgkG+c81GzRJsmpl0nyglHGEiT8oTtDbjTDbIMRoMtUAJCn64IiPunTteHwmcRCFF1MSzoAXOOVlS3cGdsoa5GZPmw/upnAW9B9DSTLD4BLVCAEK2dA2RJAM3sU+ZLC2BeYo/TOYVGDcktmsYa+oS94yn69mC2RiRHPK0OqGFkQVJYCNnJFE/amT2z3Sdv8wkLB0GePzyx149yZYUWwAYYl6uY+5gCYCAiL6vofH0Sa43LMTaSzy868RGLQ8OCKp7ljJXRaGaNBRPREtY5FPIUOi53vCYiyHJc8nITYWVY+u4nA2pzFA23emPz2NTb5AZ9saQB8alJ1HIBS3abuqe2qE565D+dq8bTAI7HhAwUm2ls5wGoHb6MCtDJSh0Y8eSR0lcqXcuACyTjcL6THKgSrBypK1WAaJATu20/376QvDliUTCQymAMScwMXBCSSQBlKbRlFlX8CNJDn9hYcvflZ/lmTyhvYvXn4hkpwLJjaD2Mf1qUsF7/w5fwI7dLgBmKeoTtNQJHfMt5hyuqkodHVkcmRs11DEA4RTuVFBgAWUJ4tNQVonjYUTO69EbSFQUcJLPjx39SLMQAR8opg67mQnWQo9vpHo3oO/coPXQJnUWFFQciNdziKiaxiQpb56zlGdEAERBEiJUA87B6pJZOdK4c9Jc0g5vhSqgpex9FFtblIMkQtqKbYwOghqrdFCiXX7K7Pjh40oAj6mmeOLymCOLNyrrIpVUohHNSWoxzka1MI5SJyM4zn74xLE3+Bw4OCrZaUBF4wgqYFQKx8RXJSZpbsBRps1HnVb18yO+ZHpUQR+wzAdJmWhEFoTg0OkTC8zSCp6pNCfgQw9ICVy7VwGkt+xDPcDu+H6Yn0PrikT/iI5zAh3qAjZgzNwQl75h4CU5bZpry1BRFBsJ5mUH0ji9mXbzaS/+/DhlmJEekx8Z+UUTgKDKTKRsVDQtcM7O7hxPJfyP0g+YylYmkrR3WX6ORA5wqu474qRDm4kzKxalVjjHfA/v4Lc3dTzowaelJsmPwV1wo/QXqQUDh0XCgk1AA3ijmZMqFQQbMqsEbTZxTyCWnQtzY7rRAE4krp8A1ff3e7Drdg5gcnMPFkVyRApRqHUSmNHJg2+wIk6lygMPyj1Zi6EZX1SkdGrQRuvf5SJJD9DE4glZUaXCZbeUCk3f8ysqLZIiSBR1iWx2yvtP3B0f382PRocAHp8PRGrDgmKtU5ST3dLZA5YJQkLd9yVZR4crtZDTVxxlzOEHy3SAsqLipRL5BOQSvjgZ5oP3Nk15bCIlaXeWdNDr6KuemmXI8Pr5p/0kUYuzrREnaZo9r9iJIE8rzszdtGQrzpjuRsyEOCDAjQSrPWBDBCQAo7oqGU2jB4jOUPKREgDm1AyisJdiYM7MWQsef7BKjtoBPIWBcnR8xgCCU35sUoqa9uYp62O/X8bR874/52otBL2sJ3h/9wpwvL9/zeYQ/bjBj0IjvshOngHGn/qlfHIa8J4SgFPJJveVvUgH4uK9eZzVQRzY/DwKQhlkmNXzRedTsr/UY6HMiabCFwIJ+pwIIGfGCB0mjkZaSXI2G/azd4U6S8/atG4b5bmJbG5ROor4wxs1/U2/keqo5khxPaKD6GR3Cjw4XyCcHe0qbsBakqWUAz77RT2HBF5vICt/8o8mZFCk3q1HexcT2PHufiWAx+RYTWUtUcePFOBR0su+pCLKrI5kEkLVRiMEMQ1I2+NQJ0/ChwTK1n0kJL8jDR/AU2PxOk0emOZUPpReoDPBnJd4SVXKvzWRC+7cEpKwgl2Exyq5S+Gg1PwQYuGoWaSkUQHU+ujsPK/IP4U+bXhWDPLNMKAolJlkJV4xM5VHgTQcOEuUw4VoL9yyheQ89IAmZPW/0YtJCl992G/uIkqGh5XdPJW8TMDH49O0X1PsAZXnqsDXw4B9dSREvJgEcE0qX6kzBF5LYcgoweKJdSrDO/kgx/v71xMkbgcbGUoIbA+dUpVDU7adAJQol3bdjfGQb1OWklMdBvY4RJ8uaIMCaCAtregcYjKpWsdWqfZCuZOLHveAXkbESQlTY3ZpwF/RT6ZHII3Lza+PDzTsWShjFxbAlL1zgvkGTZvwr3+nwyZlS2lLxZVZWMl7SxbUHlUhD2X6x82LTuWfx3LQ4zw/l4eeMjIr5BfZRLeccEVqPvT5/KFzFICyMqCPP//hw3zC0mGAx9T+/fteJMH0nHuEegPmJJ6iI5rybPNoLSYWL0SdVmvkO1CIFHHTqAsKz82dbPTer+s9bYgcQ1zcTqiB0VBFNgIoAjWHspanQ1kLxDJtZithAHNwcBDQpZUkdYJaPctYrW/uzB4R5W0TLMej1lYvqSsGo2qpdKqrKkFbPgEfpZf0NJs90rt2cMAiWQpQVv0PxaBYdmayRY8T+PE8ASFUBRHkgR3KXCMN4GDZ1ZUTd9ovzpl3jQJPAYK5B5ISEMo+N3Fy3N8jvLt7LVvZKeWEpPmSnojXwIBhjoRn9YgcvE1EHWZwy8Y1mv3SRXSqxDejkCJKdkDkVYmUMrtAdZcaqGGblWl1bjgYHyUH3IEAzI25Ve4ZGBvge3jBnDYRlb6qs4y1HQBB1ZwLqYCMvY0w2dW9qwZEpCeT/p9SkyjLYm49tDVIAvnsae88l9KcCXvRZl9GgVV2MNClr51zhokFp/z03W7IjBkGePz65/4l02NNLXNev5hj6j0MtE4qOX7u7OBYc/hBUB+w2PQvNXjKnyhGqp4FjwhgA4MvJG4Pa+eoO28KML48oR+YzuiqEd9110pUgtgBD7HzpeauWzcbwniGrnujHcFg71hlDhoGgUzDjGUPnwoD8mDEfO/gM+maW1H8NJDhF52DmXk6fXbK+phUXqYsECn7w7Ks2dhBV9+JXSFa8Vq2KYvjYfcKdPRIyYb8ae1nGbZ84YKznTNODjeA36MrgGFzPZtl4g1Kz3VmZa70SN1Kjy6VYYND9g9jBy9atpMBHMJKRAYA4Qmzjm4iyGlTSIT6LfKxd3c05AR7iG2LIjuZOoiZwTNpT1um1IsoP+mMoyJCVgZkksQP/3kZKRyhhlbcPQZiWNABCVFJrfR47obDbxtOIaagU/WfdEIQWXFjS2BFMHCH8P2HMZZvGOAxSeNN9cLXBDdctAmdGHUoiiA/EKJv0C8KKIBSbjQ32AtO8eb9I/WOqPVZBOTwU7OkmjRk2G9MD/1oABE+fcFm01SJt6/AiItd2rN+sBdlm+dd2JSoDCJJdReclpmQACkatRcu39mZCUMJ+dmhdkUpZ8gGt6Gg38mmoQHv19xuxtzvBpeSxLERnq8R5mLCO47Ax/HPPWXf1z+1iQAp/Iwt8hhT0DA5SJN07AR03N0tI/NpPlO0qF7xJYeUswR4vInmXz4VCQf29rSqDPW/S8/jSg856+Q6UKaDS2T+kt3/ZqgjlKrEw7U8ahJZPkMyB3gJkpAEvBSb0IeHMbxHI80GB+WaeN9DomYgVPl+9jwDyygLv6+kEOtgqFKaU7JD5Dfx4HrLCnqwvsEQKkgK0bFEhoqMEHFII2UwgeDS+rJzzancdFJJWxXgMaXI/h4kLl3Qv4xFZRrwFuVASEgqzlGu6QIusAgQywV6/DvUn+8SWB4IeISCAl40jn13wq6sD8GINMLe0GpuMk3LKcPjmAHlascsIHmJ0XWhBLipYDay6eGY4C2tohToFHeZa3uPsdCzXCJu+VzAFuGcdSlxc3QAYSaOkbgezjVRbNxRUeJybX9gKoS3iWimh2OplsbrJ8Bjsl3Pz/T659d/7/c0P8ic4dlPdmkCNiaAY1eAHKMyECNrMFwGkczrnp0672WVcPlfCxgZAfwYQdEQCgGhn7V4xVNoCb1LYh5nwAeJiLSXNHxE2VDzXNRfbjIkQ8MoL7oUUBDUDIjPGTyUs9xRfn1dq5HCOXOBB6Uil6I1dbpmY8xgSKSjDlEXSkbUT+eXoZFIp47q5L4MeCqOflX0WsqAwyIzhcerZD/Bd+/x5fBiVYDH5BRNxKWRlNMqjpVUVwSG7hCBxkBPzyOdXhITcA+CPNUFiktmXuLZww6VdzJlBpgY2pKkU0Qf8dWZWJHO1X6IWBDX1uJUk1rLlyccPjdFVdxB62GYtKf0WIM0qLkj1lt+0a1ixJVKZnDxiFtIRLkDxnG0zLEd2GsojIt0A+LSwQQmgMCOV8FRF0k+nJ8psZDzSa/7/v4AgEx/Hn9Gx/8ODo7L73CYc3ioQ375E185N6b/cAI28ABwLPRSnivRBTZ0gAmLBo38fRjPRC/y0HWCD4PvIbybCix29lVUapHI319G+1w+01gfiEQ0f951Z2YYdbZNdp6xf9MCNkJcS8WNGw4j5UEadRZeKhXM2Fqu1gdaJShBmGHMsyQI1JhlpKqwhOuPWNdVJNi5w4AMHCFPQcAuX2nhA4+YKOI0ReRNPQDFQaelDpGEaKiUdQCl1Me3LT983A3b84cBHlObAI9uJugRQZpQ6+0dsmRUtuYoGWTVhEpDqfHNoKYgcQWAg/PeqORaoY7UpGatVGlkSimkbLpc/cUiODXq63j2yfG5TlgIN7cInx5RdIQaWyGo3TTvgiwbJKvaEuiBVLBv7A9LOXbN+gzceMSzITiAbCIDTP248ssot3Av2FGlbPZcBlvVjZGAdFfWSpn1hpebk11IFycI1ZSx1y5dpp2iS4EgztgrV9CabAJqVct63i1L/zEkmMG+1P0QX0PEuQI9gO1+vZnqLjSgX2GJsQvipSOyaERwjL2rQG1QH2oOBLRS8TLUJdtLlqZk1/D07w+KOksjz846SXxVFi8szXvSMyZkBWIuOVT09NszLBj4lJQGGkzb4RtD6bSLsS8jW6piCwDrNEQiWEUFPskH5t5n8uotGT956oJJoWWYnRwJePzxmV7Iz6JOvubrlbwJuaUbVeuImYCXoPUkEVQGq+0Tc0mh+vaFdGnhqU6fRVFcPZq0rAflQenvYnFgvUmd1iG1UhxV8SwMzaoZlU2Q8gYEW7XEs3x5Rnh+joGpET6Dod5SAAlcgjRRDb4lT8gYo/SptmGLRSnpzsBdVJWZiZFm5XsxMLaLBfvCmAEMT0aSr+Omz+QwiSXXVsYWXpLi5wqYyG2BHI75nh1hJy5Emft4fq6Ukkzzxs1UeklGZaMOkyWXi+a+VwcY4iXx8cMQnGuDhM8QLb9WShdaVPbpBAXnRAlRgCrDIRJ9prsdxYiUPZl2glBWNAdF1mSD9cwcJzujWcSSHFUvh4Gn9lhDDlgV2HheqlU3EGAUMll9GQKpbFYcAKwTXbCQ7u0BSebv9lMpy8d34zydoYDHRFqaJy7NUJv1Ls+YFvEpAQcPQ02vQMYZ3eaKHRqRpbfAImlGMirZGtJ6YdVgUb0cQ9InzfEUGh+Xvfjom1lxQFjqN5JmKqX+XyFqmFK9PwtlLTNjag/NknmCpDpumHGyH5n9UfUiB+Dp3cL4l5Ac0spOn1K9jKU45Lxb1zMp2RredUPYwAzypdlZEVLGy8wstwzAGeIjscZ8NKiyAqDC29mSh/rhE+u3ApCYUVpSvaKDasJ+dstlmNEXs1RSAuFJBOwATX7Y29gSjxiVUPbi73CJqWdUpBKFS60vSR3mAusuFUHMlK7NrLWpnGWHF+oIFg/DTABzOdvYHnerVpQUZ4DX+FeTDoMDL6+28xhLiiytaKwPEGQO6gujjMJ1JYS6vI6U7nY42K/fGDsow8e39w/4dY2MWyBDhZDu7jLUfFFYv6f4E+VBRhbQl/nOx7/iqfi4uDsekK9jzZXKYes8N8nPd/qsplRcLjViUMah5vn0c6zADih+Li5oLP48FlET+12ZmlX9KVvV136i5s3QGCn0AiwKTB0Uhl7hOSC8fISxE0j1glQGuZ0WoT3ZP/QFovAMys97Ny0pyEFlaUZflor/UPkqZvoJBF6cme9Pkctg/PtdgADW8x4xP7dCFZ00f67MCnQOHfay7xcVZiN4NCMkgeYElRY3yf1m1oSvOHjXXl8aJt4N0t8xgB2R3o03hXzwTOemE9De59D4OxrzOMWBQfWfaMUEAwCz7uioFzgs3J2qy4+2EyNGMGSK66El6NprJG4qdXzJGHThd6gAaMNdpKJkkooxAFjOFZt1fTQGU5kfqL2TMmd3l/RBC78QqXPdLDhG539jwWlRdz+Ss18j1GICR1CEqHD6KbGzowh7IItssLFDdPpM/XntjghVJYC4aAsnQ0NRqxMgfiM6+Ux8k+VxEhaw0zGWQ8NXQmMvmuNi3w1eIEMzPKYL/frHfpkVQX2LiIyN4yWDo8IUC+DjNAlQKKajRC639nMfSWzFUevduq7VozrKbQgVeIE+E3A2CRKix6fUMGlEnPuRFtPjN6UrGvnpXo/PCI/7BUpSFLSeVVX1AyrgO5muIkdn+oKX8JdZhWV/YO9FjT6s+BUS9TZdmT3CZEdsMzmx02ZiplMTD4+DljsvX+GHOyOuP2StBFO4riZR/tbbUkT3HTE6eZnKgzMoukEZIdUZOrkwhoJ5wZejEWMFkEuhyTxPMKM+LUo3dLKCm0mv2Ula6FHUcVlEp1b3Galn4JEHcwAPOxp7v+iLIMQIlgFqgliwObrGZAf174ASAWhNZMrucAqVNDZcrOOpiqU1uyKiKwSVN2nfSJZxr7MzsPpkNLB2pKw8e6z6iLnZ8f3H3VBfaCjgMbXfP03SdUoqjROUxWvBNRBCKli34I+MJ29FLn7aUs1Xy0AK1yI5hejVR8vSFJwh21IuHC72dEXHlXXTiW/hGo6zspdZkqj7vVDW4tX0sLTba4A34n0aTXLb+VqScBOo3aNgQIlD+pJO1IpLLQcrTSAKLGX3P58PbNEg3lTkGUSQKsoAK85ehCzX8CmX4zDqNW3adkO1fDGA8DNqt6fQ1hoFJ7RSveh7XAjk8HZyRxXcnltzpFCzoEIR7JT2YoT3GJL6TKjGS2DBLJ4NFszN5btI5SxH6oEHuDAoAQkzEKVB1U/ZITq/C7Uy6zB4zBDmZehNUrTRA+zo9KdLGLZx2FnnRO7d3FsrXMrDUhVHcu1dkMkuXDDDy7Pz5BXbnqMCxEDHs7CYRNDh6MAUDwnkFEK0Vyx+tvu6OCZJ2qF+zmjA49MjweMTVUkBPEHAThgokoLCddkZoCJrGkqmjnKC1RhajSiCrtWkZVdULL3K84qkpppUi80JgiHh3cERRDBwKE+prfG/1EmouC6LYF+c30bEMgEee/IdvJI8dtF3LfExBkpiVs4oG0hG54mFRIiGDeZla3iJXEEOC5w5JtxsEFdTmRkZi6+RzfocHaRLATO12Rw46BZdz580jwtb1WXMQmkPWN19M28kiXlFIaH6TvEB5MGqFGRb8fgAYs1rAiIp+5oAgUaWTZlbARMoGJWhEuZdMFy9EKgSuAfP4CMrZhkZU850BKJJebPKDA2umaGAXGLyVNOCZ0LSMreO/H66/wR4jMQeFrV5ATXASqURfFYKmt2jPShhz9XOKiv1niQTpJ3nFmfmBSNNCdiBdW+/RLNLanJVrKQrsHp3rdDGOvFpeUwiRzv1s09kvhOHx6oBjwns+PQ46pIdeq4ughbBStvvtZAGCYlDpfcmHAlwD66qNyAlF16bNJYZ4c8OTKO6Bm7iFm4GsCGxMwqOwlrSulMBUVDJ9vizp/3X/55xsec2ulfv2+gJtqGSMhKQQglgWmB+hA/qEySdAxNNmgBUxDZn4o2pF7mUchBARTSOF7AJuGhnXqC/LmgcG6l0hwRPJasuAC1r/mnS7DyZ8ZbIPcIB/Uz1FsuDGBpcsqxLoLF9BJF+mgsyzUQmaPDcSHcQzE5GSwNS6QF0DokvLRcLRZyJrHphqYe5vyO4Q4iVAwQd1Mg2RMnIaHhnJ8pp6BbZqaVXV9RtSVmwXD55Vmh8hfJNgDFVmx8eXlVaVg14TCfXv38axeMxZ3uSv4tBh6OVpC2vwSxjczQljT7zDKpjS1QssVcwVdKRltkm0BCbtthdFjmMYkZtRPyqdMMYjA0BmEsBHhG1gaZ3IuI7Aavw6QmHro5ykwir20QCecehmj1enDwJas4RhLETozG+mfpDx1kIK58GvPcqu4cE/uCZoE444NaS1ObF+uF1mAYWgzvBsFIwvMpX14R95MTplJPVjFbbLTu/Xe8yOFK3zPyQKJhlx83NJHFPimciOb3jQsoZlZadNKIPslLIuMAc7urqgUQfl8xsoN4J5KAJ7x+o70VnAjFDMp3m2AUtrAka/KhI7C3sA91z2JW0HG3cr9M+vsfhpL670Q+5w1eAYOzUiOVX16yxJHyy5pSdnrMWKcGC5Jcq5YpSxOQE2eFBIoDL3B7/UtKAV3IZRXQnRXwClTY2wkfSG5Xv3srZoicZIHVmSY+ssVZDwWV86KgTW7VQAI8gs1mnFTc6AwwU9iO07s9VT6RpWhr2ADp/txsTBDUZct4LWaJAaMwDx+amSgGE/kRqJ4Kp7DJgs9Gqw9Q+VK4jMdubjNQEsupQobDSgDIz50dgSH2t2qNDH7nWTF84tNlj35gPUyGw1rvw86hPck3/BDteHyCeRKyBHdn73wpYZM090QZ57g6NG+PZijeSO6GAHTgj+0lTPDndeqZEE/bOQUWWoAKnUdjHgvYLlTGzTM4l7UPafuKYQcALvjcq/1W/52qAikjksWm+n+hUYABA6AA50HBBrPHtHnPvkC0q94HyOjz6THQDGwQ6bjo6fiQitLKFzBa7vu3K+2l6xyUUjIZneEzt0xeCx2eyN1te9VF8gkp6z9OptXHEEaod1DSIoZZtEHk0LKpqTx295tZlejAVLWic1Q0gdgbi5aRHoUKqiHqwWFGS6G0UeBwRa/R8p+Gn4M+8cJrJdMlpeXx5wmpqiiOEAudsuE5lXh8uXUZQcuqOnDjN3po9Pg4qqQzrGw6mDSDbXPILw4ZK4O0pT2xxsK1Qh9likOwcj5lCNssYSWFL4TwbVRAJLb2Um+VmOebsWU5rH/wtrrlcud9js0XVhNZU21KVdHIFR4SqxxGpPgVIpSssTSx5ehRWltbcPHG9rkPujpSAoX0iqN5Qxzv3/H5J4GzRfuvMCLlKFYRi/zjXGxz2tnf3FAcAV6AutZhqzDDjKNvxSlJb43WBG2qsNIY8YNxLPV5xydD9AvwdiwEeE9gxgR6hTKbSWeG9Xzo7HIuAZMyesv6epygz3J6/VReW1EUl9TXreVnCIZ4XDq10BzGAgozo4vTRIlsFUPEsClqbkrhneqdGGec6aOmseBGXfT6tZybyUooGVx0knFGFgEWiSlyma1NqKTMAhNmiJ5ZU8AAuDg+QAUgqyghfWBK8RCnoxWXmijE9h9qJgJ7W9biJAixyZa3xKVCFWoUPiQEixtiRUP7Et5VGYUsSW/OCSBSelVrSVVVm9Erer4cJzQoKBgQ2s7vFOS9aquslwTrX2TceYhgvB7Wk5xcDJQTX+holZKFxjzKpRhbNlThCrMeZAA9r7Q21BTNZY6OyD5EYe3GQyXhwiWwYBfTU4szQQIZbLbcMKcxGRUmjm1qws94vwN+xGOAxSW/+8WUf6OFgNkX65xwyIMXgYkXmqT9sBBMMClqLn5eyVrCtU5AK+qvLUcGNUYAth+/IAJQlO+sxFmbOH2IaBW7QhslbLBRkj+AdeSEv3aMJsc3APOb5RSxgl7TWRz1MhlZ4FlhFLfnpUn1XEk7hheZkPzq0fEC+VB94TlnaO+nsBLzwOoXgLuPaEsU5KTMjokmA4rYGkOPIiThTka1auF+TnUL5GOtajmlqGpOxV4IdlfRyRczerLh6D40LJMJKOAnEZ3hQV3KAQOsW04gIS5NyjuyJjLKOBiJCFLTn6r19mruhBLpzAt67HcH9buh08bPCFk5p8BL8VgsKRFl9hUlI5Edyb4F3KjrukWygSMLJsX18h7dT0jK13z/RRQc70rFeYHrx07dojjzJyRz4hhZPyDfmTvgFNFu9eTWX7fzLE652PEYDG5m+HVYbnFh+3RcQvLYlFGQu8ZKLgR0LZnEM6YuZYlQAF5KQngGERGJi14ubg/xkiJJ70nADUtakBLMRnOZaDuVi2RAzykpooZclL+IdEKCGIze6wD2jj0WF8k12bSpV4FFHRsQUHHLaSxCJzl6zNHYZRX7/cE+LEsl2v9ZgctERAfRqo/sEYNLoUkiZiW8UGYn4H9rvv3u/jAe1W+pl73bXm48aoSJdA+ywGAzJ9ySOpEjaPkdvcHFoXJooMftphmgQCyAlApoeTpHdyvCOkjvkxQEdwDYfvafL5TaYbGlWDC4twIXKeLrWOcIQJvchz1+UQSydJh0eLwpsCsmxWVNZLIFMdGg5GiWwTJKNtdafxoQpEfRq9ll6QIslj/+e7HnRKFiRPjXWNH4zl3Ns0WD8mYb5ShKnCzCiz0F7S2pz75gASxNnEnqL1n84VNYvYa4P+SGIeLC4cJlwxBSZPyPnwwlibO99T5fCsd1ChiuSXg8auSg5AVKnMZC2Yil+w961vZSTak1E4bPl3CBl80WyL4MzH/OasUR0674UdrBYhsfjE8HnJ93vlP4uIT+0woHsDo4spmLlJau6MWwvdyvvzmtXRQWOKx+RDuK2TLVJxvnxGZd9GdRjE1zBRPKodd0vsV0SnU101Pyo5vKC81YkYZ35Uhe1rSwzqyKeHETQ2k3eF7XBK3UqlvLrrGoSLoUtet+aQU0EbCYvuB8/i1vKwoeUVwNHUpFRxzHq8NN7Yb0RBbgtFuizLplgp4uXfm4sSkxCtRY4jB4s9pAXGsdF1kvg3dQLGZlp93d00QOuSMb7LNtxRcN5Zfql8ZPNGRyvXOYtJYm8u1+Gv2NRwGMK5P78fEND4KTDNiUljAzNy5CObCqrATGYhWw05SWFnUgOtRYUDn7xiN7N8Ft73rRxky+MvFQk3mOkgshqaq89f9QSGIu8KDEIHunqElgZDg7ONecDI3Yp4nhh5z1mAj7Hv5dBy1LmeRHjwNYZKCoxqwOZSzDZqGNPqaq8peYZCcVocCJdiU9C4jpaw6uq8clgToNRWY7p+5E+Jkv1ZciISjw4UJfzLZqyT8Jj4oqWoEBQ3OwdFogwsNMiugezbQv77PSOD3d03TGw1ir7kAkSe2KRHoNpiJylfywjt1g1YCA8WMUHx/qcJP+LbN4ftF3Iq/bFh4X4OxYFPKb2x2eKobxRLtBgMbJE3oNc3m5hAsMlgsl0rK0wD1eBCgtUywXjMoiuIBPDo0EJK3poF+m4YDZbaSIvfd7jKuZZeCfwNjPr54ElPyRQj9gVWJ5wEqPPkyF3XAIQEMauCuyWGKMOk59CRoyLBCgfLrfutGDLeiaPHcx6WQ+EvHUwpCelwyqNQVZSGfBV19oFplM7SLLlEvX4tPAgWD5F0yWebLDRf57ahftKmfU5MyvwovOcA5GMRL2Unwb2s7W1KU3/rqxdIMN0r/i4PsKHfBqrUhjSeq8o8/bArBKCOIVixkRefe1k1Gui348SA3MAhv0+onAzfW8iLF3M11oS8Pj0SPD8PMDTnZkdMFticoVgR7MhltkYktzfjTqxF69wmRFt9cas1yYvRW8D6mEAdvarJd8WkaVHB1N7l5izapDa0RGXniFNhsvgh4hU+uHAC1dp4DcSw1sBF1rOIgY9O6/2ay37hLf3R6LSiJea8GQtHrvoPr6WLiWvz3qvOdPPid6QvPl9adClJ4IkG6i6SECU2HfKwObSPEbl/o4oTF32+2quXOFof8ruQMFYkJBFzTOqUVAFWWvuvIf7RbMxsmvG9ONX1A8U3NtX3UaUKygvvttNkrQ3CnhMPB5fnpWRtjY9llLMszGkzzS+W8mUm+z7W2uoOcGWA7jy9wFYuATFMoyBG3oHptm4duLx2NPYuQAddokiAAjkg/aLEAVLNoMuA3JEg/jMHJs7tqPRMFzmsuONYOAGq+FB0qQiNdtSlLGkDCV1GKU5HbRU2UwP8BH5vFUTonyG2DU44/4ay17CIMOgoNDaNka+FAFcTBOyO/07CMRkgLSL+pVrBY0iY8XigdPP+PJegKR9CuLudwltY0s2Wsg0uyXuBg937gI/MLjOEOIplFZ69iBb2GNf8AbHPNMe7hDu7xa0aUsCHvs9wJ+P5B42QeLnbwWscA/MrdQuLbJeOaLTXXIyYrfOQM9XCNwmsOPpQF66iJMRldTqmasXnHJinIJt3f0l5m+Yg6NTT/oimSh4dv4q23OhFDjsWccQn6+NGV0bPwfnEIH61NRUAHiLvBsr9tIbTgy2dk7zihSHVNjTL42FeNnJsyNWo2wDA18fjUhwmVukWo3o4hkgkRMS4ctN2TFcQBkGLscPRldcANyHGA3KTQHcDpO1YMJD3FL2WHQI6Fo391i5NceXrtNPmql4a2DIlN2xJLHvooDH1Cbi0jUNwNw5OysW8FRaLhXpzOyvq5SZZCj4sSCWTWYfLKHuEW1TlgdFZItw3Dxf/D2NB1EZ+Vma5yXW/OwYv0Nq5pLrqFFHArgI8ohLrP2Ofl5jU+UcLfApUo6yASHLRWNejTkUp7BsLKOO/rUCGDfQi0redHjddKmXYzcUX2WhARjCyRFlZYyOaXZv8qSbPDmJawEdyX7m5NtEQqZdFUjVJPJHv2YK3u7vxpHKNASVxbjwUp0yg2WtyEj2YHsmtVAuq23OAvKc7Sv2sbf+LlWWJt33w7tlHZfFAY/PE4/H/rrOpGS0iYxUcwoY+Rt2Li+aadEbxCyAi6y97b/umE/7seO7iv5gihEkkAhfez0sHb3jpV6iyGC4ZDnPEPB3BZlWw6Y61s4wKPXkN2WgtrYoeFKmq9OKjuuGnMjO9KAveSpMV4jMZ3VPB/dKhM4nbGQ9uVJj4KJqP6uJ1ZO2eiIrDWd3DJq0hLUyTkMW/1brIZKgCl1iTkQAyguTeBCsMytoWivv7pd1hO6XfwmE5z2tYsJXDqg0V3HGzLlB8IOCG81iYIdmgTrRGCsZ4haGZtoY8ev/aMC44lqCw2Ba5ioBDm9zSnxtcRNBsn3DC5WmpG9jqYtg3/RaA00RKQ7oiXfjSCiNRkCwgR9vz+NmY1oGIshLY1YSmBwfe5jdSh7LXjoWKN9XW8urCkB4B2nG0HhHtGwmfyhtEkgX8T53uB4qYEjw65cP3JKLYBGww4o7qCYZR8k/UC7jxee3Zm65/aJ+UxSfE1G/hq6HPOBCboZXref19R0u7/hcAPCwbag1IJ5KqLVQvZjZzHJAY3VoQdANgR0WCI/XeJCB/YoOmLN+0APgmfz3idhThJVlT+Dl7+sRzHUF6hi3Xa5TuRDA1NR8Lzz5LbxytscS2GTXemrRlNYVnlelpLWBHd9G43xDWnBP65i74MfQ8kt4C5JyNmXRtV1mwvGy2CvE0OGUfe4nUf5eKUcR9fiuKzLyAJYBgds194U7XHjCYBBwyhB4K8EB0u0AID1+F3bOHXdueeTXbyjbBo1/R8Zit7vAMy5d0jK1T1/ohZQRlZli8XJWtede/faoI74LRMZWVYcVkGW1ohd74MjubElWRF5MkBy7iZggYCUrojtW5/34jKs3apLcKg3k3RhhcPtfJh4EaPcftf449wYV5SqcxK4CO/A6/a2CxqEvxTsPV7bMQyIx5Rp5I3wbSwUTt3zCWM7hJpBgxoPYOrdszFqlbatn89SBrGA6gG7QNV6s+FnDoSBJny9wexqxRqIXEcbLE69IATU9PnhQTSlbXeC5q3Pe4+GObslUhcaAFPBD7KObN+IJ0yBxvqDOIyiRX4cGKZL25tX+rXBcpr5aUo72ooDHl6cFeDxu2FGMOMerOfDz6jGdoNFLmcuUha4ZADgFowo6o6qICC/3tMcXhaNLjW2pClHVekY3wgtMP8zO0YGaxmtQ9MArGoN0XJ4BO0aDWBfuFBSUIAJmcWtbswESgIrAGoUSqbUHFhT5pSH723uviyvf0DqGwARJMjLUBGI2h9Xfo0Cc1EWuSP7oJTNNmbp3u7dNluEqPr21WplgX2SEYLpvYE1E7wZLjMHMa97dvUrSvgnAYwI7JtBja75jv9pA36oz92iAMQ/4vIWxDAfijQOF8Pi8kDHyUoigIFmEdRxCp0EPDO5ACfxkNXOrCLBxwQecSa0RRzBuJJsDImu6GJ+Nm3Rrc53nUyDtkXyv8dmvEMjSJV+Oc1OtZCxmAz8l6TXEsiV6A0LLnQw/ewbIgYAPC7F15t12kqK12Ng8XYSl49MRAEfXemYHBJjom28hgvT6uNobkPWLUI6XwsYp6KdlDsCDGSgP99jQX9ws4DHdYCpr2VoMS1iFsx+UPVMRGwXo6MBHbmYMTQLcCOxbtKdnhP3SKOzKpTxnBYqD0jJmy9Veep6taQyiNsP51eptApfELgDDVYI2W1udk/vqjEHF8UHWQlgp0JF6tAGZHUPAlmSkXgYdq51LMBN0Ctqta9pmL8t/9lyIEgYKoPf9jOyOiNrvTUXtkWxb9oJlqV/JeeUyY77RDJIlQJRM9WFy+NKu4FTOchE1wUsAHlOb5Gn3b3wiRkqzr7JBeMooVzyCfLPZHdakCPTztFaeZnB5WHWqGgpLeKVSjSWnX+fcXizDoWfMMjde6EGH9IFXg4q3ZyOqV/JSS98AZ8fWLhjB8VPlUrYWLq5mOB7kWCjYv/YYEjJOk4jHfy2gw0Dzr8IVN3AJad2ePcsz9ynhS/d3NLRPEljLm7OHxDjuJM4WbyA3DGRZ8CQzJ6XPTOVfS8vRXhzweHymrwFcPDa5pH94NRACrKgUFj9azvCL3pKPHkEaw+81kI8g2ybAg1bYrxnCXbevI7mtHeDJGuek9G7XXFu4xIQwsrtWn/FQSoV6edfeHP1GgA3LyfEcIK/y7I2XfY91VDhozYOBFfN8hEGThcGCawV0wEiptQfa1sEy4z4SPJiucb8i7g66xfljOY5BJSj3fFcDTKAmkN5a3qXJiHXBy3qZQMI3BnhMJ9ZfHrdZ1B05KpHCCpI01tuvArFgxaS88r6aVuZEYHrtrlzs4gNvdK3Dc/e+0TW+EJDRXQ60EDqBN2hCbuoFOudHtHzX80ev7dD3Bri3HEyeSmA4uemK3y0pzhL3sgdHsXSJiRt4+SGEnyuwObeYlRCZUsefTWDHWuzh1oKOUAkWM/vJ1bO2/h3fJv6O3YUWze5SL7V7y1E4Jj5TrprjIkTFmpLwmeIypTwUN8rf9MJkEctJIYWhurjyTsJBJSaY+B3CwiSVsIznRlfa9M3UcnT6gpbpXprbzbScJ0XQ2qw1mW3C+pfTv4//VQ99wwaWlD0Clf0DjdfGzrGfM2/4fic9NynzTdlO1z+c2gCwTjmNbfGCawU7hpkYLTU1eVHqsBezjA/mh/yWfDuLB+DFt8GF+naB90DBjUfhdyj+UPmw5ydg/7NG/vOm4psK2QK+F48HsMi+wkT/ZnztrV0WG7hYhsfUJqWWi8htjlgc1rGDB/VqkZCSjiGy7pJeu7+VgRtKKNoYCazqt9CH+68POlLSOaseMUsdZYFn9jaLiyrLINsoj+uXr92FStMWO2X3ipwDHbw2stfoK4fIvQz56Vuzod5Bs1d5mSHVQwc0iVa1ZTMC3mS9e9EJlb0RkKpbyQ5IEeEtMKBRVRK6VF/Qle7bY0uEMoAqm5ZqAsoewOkWArfdjnKde2FSjmy5wZuxlZaaiLdBDTDTW9PXzMP95Zyn3SVf7u5W0jwynjqH/zweDgHZPaVOlT9euYLGUK87gnazn51OsSSDZYEgh//wZgxCPkXS6k5KBqTo/ZCcdUTznr333XHB6Vr9/ZhFhMz5g5kvsuRmGsk8QWNAAl7xzZxCMhus2opiDJGnCawgVQCT/7YABu876AAk6KxHdD6bKa9B0LPUItt15LlxuSU8ZMBRQa6I2r2OVrzxpZYRBgc7sSBwRbbsaHNQ8FnwgnYk+gXiawsFO0v1HDxmIZGzpeCQB72Mr9bduRdCHzxfr8cdv4kYg4RJCkbsZqXCoG8feJbdJXzTmwQ8LowJXDTDY7rT5ye6ylyXfuadOHkO/TZxdadXxY2i0rbehfE2+mVEe/5qOcXMKEvm9kLH6zfD1yhETohvd86kFm0AXF1rtkbXVH8LzMwzgsebIJAd4W8ofXGrPAhDO8Xbi68Xk3W9kjqmV3xoWvk0OMkgJ9JIVNuBtzHnZ1Y9qe1uN/kTF07NAMVfXsEitUjst6yHmR1pjXmR1WdlYKIRLlxyfCZ1FnyrJS1TeylroZhUFBhjuoEOywcR5umaleL+hgbGqlq6ZJvIS2mh97mpwAcNwGLlNRQXw6GSEe0tqKWOknt+CzbIUhbf2uV90DdZLpP0iNdYNpPKVveYeS/wfLTyOdEoXODbtDunKU+tokelplP4IaUyS71k8PD/ZAAs6KAYnpXRjnCRDR6eX6pMj64uG4nEMl5l35pYgH94az3AirQmymlV2gAOtBR2Qhq4S5ezXAXweHqmoZwEW7P9EdEEevZxa6sDBF64PCj2bLc8nGoce0V54KvOlcFr9VYDZBUsukE0wAK+NvDi7fuTq3PePW4BsAN/uvFxmR8ZLzMMq5onb9UwOUfhpETbJWfJlN2xQ/1IVga2PDnGnrA/AUhEJttKJt9NSuveOtgh8R5Ce+BdyqAff05Bw3p3hy+StG8a8JiyOx7nlrUMnvXiKb5Qc1gCotKAn8jstmO34YZJq3bBS75MkIR2qfb0jBcZIxQistJKYCR6W3nAuSgwNCCVQ0tDvBXz0swtLJ67VE+6EVuW8f/fhOnvJIMO/RsSfnwWJfDu9w34rjcRHBQnf8hP0IW0bCnQXEM/LxIjLjiIkTyBue7RJe2f54ZFtAfmmsm7nTZw1qzRdgztjeq7llDKxPI2/b39BhafsXyf47cH9ow3CSjQTZJPecHY30sgtebemiXB19Lu7/Di6q0XBzymNpW1NICjAhaUGshiMBEJtrZjs24H3xOh8Ta6sV0fNB9YTKhSUkHcCSVpjWxxFTjev0fHR4fN6fXvVKVBnq8xgYXTfxIZ3dpBhrmYwVVeaRDZQUQZZ41Dpq7rG8u2yYIZNwE+RKRMttrP5aOsCAi0QkDkphxxLjNPfpx0hVhpaHxIi39xRUbWyrJY+ZqaXMYdWiiVxaDgwTOG9NJsPzkGe0WC+pu02eC80I0iFdHZdO1zgOn+ly5nuRrg8fQ8BW4b7rWkb+wdpK2WVDKCDGP2gpHe0quQX3+Lhz9LPF2LMyzgIxuJ1M/1tL/8XIr2VjQdd2jVQWZjGnDjt1I6VL3PDZN4rqY8JDsPvTIlz/nPBkIwv3OiMrae/+hlzFiQ8qghGI4eeEBI9AWuHLR6YdtNRgDCC9wKee3wMhfPWHqB4UyQY/E5RZc1Cq/ZHVFAI2pEtI6PyC1khLqj3503ahk2kpttnjrnFu7WMwoR7u+ucN9rAB7TKfXT89uaAdnMh1VEB5FFirfV92d4Qnr8qHZBFAruKTjweJPtiOeY5RGJo1YTgV7xod7cITeykpCi7A5v5xVuJxkpxOC8LG4SSWrc2vUD0mXp/ALz7sbQCbrBcaYb7etLjMu3ov50Dtrg4in55lhFMv3AwFNuAknQXipSEmQBUdEcCAx0ZCTz27r2+fexI1Fk2eDtcW3rO0TKmHCgNajb3Q6vsnauAnhM7XEBedo3UVftrac3pk4QgRlGLbJclA4Qr9SNnEeOO/O8KOnvggS3b13+OQuBnf6eKVe4obV9lTG2jMqVJK8ze9RWlbkeQGPE51cVJ2e4Vy4YYN8EhhCYGERs7RoKN7dUfrO1Y9C2TmjAXUMZ1/SiQEbPjjfHQpPjEES5VSKr10v9iMQdulfJM8/PsEb7TK3bw7+3vCP2cHcdb+ZqgMeU4UERUjQIjL3ltH4jx2EZIqrNgc6IIEd3AK+YiE3QimcEKpIaLGXETubsXCozKbZIWR7R5IpNISJmbkLH7W+kD97Mgw9CCDZwYWu3CtBI7vSQwH7lnApe+PImwIQk38Baywci/OZrLn2YTqcRb2/OEMsQXXfWx1yPNCL16zkSESAjQjTbEzv0xC+jv4cnVkHrMDqjG7T7unCuBRZeDfDY7wGe9xQLJEoNaStSK4kotc+G1tLcVV+yJpd8DzKShqdJVf/eDsuxCoRlTonyM0ssiAgokCVQiupT0IxnjnpvBY18yRR6mluM8JRI/u5pzpW65zX4ccJiv37m5VKnn0A1hsfxnrI8KGhuvzWAq8uss2lxIsaLTENc53t7SaCw9jniLfNO1tdesY+NB3Rra45nPJc+TYQZTVexfLiVyVpmPYQ54cWig+xt/ALpf5ZPa+5QIoDtg99w223Gf0VAiJTp8Dr5J66IU5EHvXJHnN3xV/8codYsIGA/yNi85u88boiywPV6GN5pXKREyIvBvOe0neTd7nrr52qAx3TT52cS8YqojbSHdtQ2Nfc6mTQo74w+KiqWrfqOhEmRz49atMkhKPgLuIJJZchYNyDHIW4omiGDy2NONwPY1YwRZwjBUSGxcKY3HFneJDeoV3PmlcIGDXq04GsDGra2tVsIPZJeU/SYPxK5r6xvPA9uk668sX0ctz3oLdqvsGRzhKqjY1GX8tyLhbMraNcgK7064DG1l1NqWh33esf95+zUlssPY3Z6xHq1lhkLzb/biKKmwinzDKIukGUdtq2jt+03Lym9it+UWvWVyva2lXvb08KjNLn18fUknyPJylsQehsBykXH6g3JS1xTpaanoABgHWq1yAAP7zm3trVr7HnSulYTUCznLoPQBib9tHauyX1zVcDjRXFiv/KZFGDVPMpwE5Yde/ioUNmwta1toMc3GkBfILVjMzXrHu7ejMar7HletOLtlwBxIn3vu6Npl1bmmG5B0vrGiW7+Jtftw7e2HyGeT+LN/XylpV2ZzPlEHLu1rYXXzzXLwa4KeEw3Xj3gsbU3HYiAEpDcxEaNb3z9uLUx651PW7suqDA00N9qarZ2ixH6oEhlO7FeL5iwmgjaq6aOOF7B6HzoXIwKcUABdlwDmYiyQo5WF73wK2LydUds71u7XJv4O67pPl0V8Jja8wZ4fHPBSU82VET9msfIF49NPO5V67MgOA6RjYMAiDo6PPO5CI9DZHBXlMqxkU9eb+336h9VyyLCbQywsY1ubWvZyEP6uVBHUHLEl4s4w2W6BSHXAUqWDCyze8Et7V/b3pGwKRmfLyuK8g2Y4Dmft7DISDkWBIcCEsOBB8Djqmv42oDHEuSLqzeaMyf8NxclRQziNxzQ0OYxbi0BMAxdkwCbvvHWtra1y0QCtPzttu10a+K2h3rcvc2bb8D2RG2TRcfoEfVHCbaiMU+GUtF7j4gv6Kyfa1M7XB/wgDYtP1PfnFFW3trCkVUUsNgCovHraNttv4lltvj63RhJt7a1rb21oGVhoGQLet/43os57p1tLmzt5u2mlxoSzWY/fmx3fbfy6oDH1F4yPEal3Ue04Ddnfms3EuBGT+iJtg3WAgkWj+E30GBriekBl5qXW7sJ/zLhN27tW5oQoPiwF4p11raPZ99DAyZCPhWcy1hwZdOjtzzBu9Y11Xu29rbbbg2l7GsAPLZgbWtvLai+dCBDcP0sj5tJ4NkizK0Jjq80hzdAYmu3HjtvAMrWxMjf4xG7RQdMM+4eCZyRIo7fiI2wfp6haQPw+fY0/j1v+mHHd7a2jiWKG+Bxbvttxm7tAuDDWw5g6NYs/8b9sLWBYAVs02drW7tozLy1rbmRtPSnFCXfiJuytetOp97fW/YrSmkhTW3NleXxCDjLwYphpDgGjHtA4D6XbLuVLKIN8OhwqpcO1EdeI0OulFVC2TaD9TqkW9va0vYsquK62YmtbW1rPYFNr7OeVX/a2tY2sGNrW1toHW2AB9vkrljW4hHnahvxZhC3tlaHcWvfroOWIfHe2ta2trWttfvnBohse+nWtra1AWtpAzyEjWbbXba2tWEO21sN4i0g0uoTnNmnuOD1t7a1rW1ta1uL7i+j9r0Ih0Pke2/R79ja1rY2cx2taCFtgMfWtvZW0YGtbW1r61mDrhxAIkrZ2m1GrdL8wG8kgtza1ra2ta19W+7QinyZ3eocxa1tbWvzneqtbW1r612DVPyH2z74JucAgc6MV/6MAyG02fGtbW0VsQgqP5P+DsrPUPgvej00nqd3z8Btj9natxnTryrD48VP2Db6rV1jQWYE2t9S4LW1rd3KOtVY/7e2ta1ddl/RyIK2trUtSNvards262ebnYsvpQ3wCMRo24RqHX3v35420da+TeO9tW/TVmzsylvb2ta21hfwrEnTcWuX30cdN7zncgSx63r3mvv7rSlr3vq3NC+Wlru7dqw54HprcztXB3i8zKNttY4JaiR9t619e8Z8a9+es2axvG5ta1vb2tbkvRKdf2/t7W6f+G1NdynO36b51ka6omtq9zfrtGfpp8m4jjY65DyLlv4Ewd9bG60FXqDxM23G4bb4rCkTHarshhHJwLcSeKRnjz4XwY3sYB6Jn7UOrXXjDXi0E3uyJbS078jkweDzWqeQb6k060JTDxNrPBtDecPQq8IQ2cIgsbQyUzsz1SGwxcHM30WWcMQ9iCwZy/T07CUwYAyie84W0AQ9dAwuYEpMbM/QUCBqyGTxZRdMxFmK9IHluGwR2lVBjuOrRu3H1rb2Zkz8KjM8tnHZ2oIBTTQIeVObHN3goG3ZCVu7kI+7TbetfSvBzta2tsjkuuVMGPz27L6G0212Ymsjfas1tfu1dtS26LY22snzEmLesuGhtT9gOVjb4t/aFRw/zVZsbWtvJbDZ2ta+mcgZF/nomwxIt2TwrX0Tc36NGR5b29rWtra1rW1ta1vb2ta2trWtbW1rc9pu64KtbW1rW9va1ra2ta1tbWtb29rWtvbW2v8VYAAWabjn/e+vUAAAAABJRU5ErkJggg==';
    }
    return fullImage
}

//散点图（竞争关系-竞争关系、竞争重合,）
function splashesDiagram(data, titleTime, disName) {
    $(".comment").show();
    var xName,yName;
    if(tootip_data.pageId == 'SYS048MOD02002'){//竞争关系
        if(tootip_data.tabName == '对比关系'){
            yName = '反向对比';
            xName = '正向对比';
        }else if(tootip_data.tabName == '竞争重合'){
            xName = '下单重合';
            yName = '关注重合';  
        }
        
    }else if(tootip_data.pageId == 'SYS048MOD02004'){
        if(disName == 'competePattern'){//对比关系
            yName = '反向对比';
            xName = '正向对比';
        }else if(disName == 'competePatternDou'){//竞争重合
            xName = '下单重合';
            yName = '关注重合';
        }

    }
    // $("#competeRelation").html('');
    var myChart, seriesData, formatter, titleText;
    if (tootip_data.pageId == 'SYS048MOD02002') { //竞争关系
        // myChart = echarts.init(document.getElementById('competeRelation'));
        if (tootip_data.tabName == '对比关系') {
            $("#competeRelation1").hide();
            $("#competeRelation2").show();
            $("#competeRelation3").hide();
            $("#competeRelation4").hide();
            var width = $(".chartBox").width();
            var height = $(".chartBox").height();
            $('#competeRelation2').css({ 'width': width, 'height': height });
            myChart = echarts.init(document.getElementById('competeRelation2'));
        } else if (tootip_data.tabName == '竞争重合') {
            $("#competeRelation1").hide();
            $("#competeRelation2").hide();
            $("#competeRelation3").show();
            $("#competeRelation4").hide();
            var width = $(".chartBox").width();
            var height = $(".chartBox").height();
            $('#competeRelation3').css({ 'width': width, 'height': height });
            myChart = echarts.init(document.getElementById('competeRelation3'));
        }
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.competeRelation;
        seriesData = data;
        formatter = '{value}%';
    } else if (tootip_data.pageId == 'SYS048MOD0304') { //人格特质
        myChart = echarts.init(document.getElementById('personChara'));
        seriesData = data[0].Data;
        formatter = '{value}';
    } else if (tootip_data.pageId == 'SYS048MOD0305') { //网络行为
        $(".tableWrapper ").show();
        $("#internetBehavior").show();
        $("#timePercent").hide();
        $(".netWork").hide();
        // $("#internetBehavior").parent().css('padding','0 40px 60px 40px');
        myChart = echarts.init(document.getElementById('internetBehavior'));
        seriesData = data[0].Data;
        formatter = '{value}';
    } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        if (disName == 'competePattern') { //竞争关系
            titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.competeRelation + '对比关系';
            myChart = echarts.init(document.getElementById('competePattern'));
        } else if (disName == 'competePatternDou') { //竞争重合
            titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.competeRelation + '竞争重合';
            myChart = echarts.init(document.getElementById('competePatternDou'));
        }
        seriesData = data;
        formatter = '{value}%';
    }

    var gridRight, gridBottom, toolboxShow, toolboxRight;
    if (tootip_data.pageId == 'SYS048MOD02004') {
        gridBottom = '5%';
        toolboxShow = false;
        // toolboxRight = '2%'
    } else if (tootip_data.pageId == 'SYS048MOD0305') {
        gridBottom = '14%';
        toolboxShow = true;
        // toolboxRight = '4%';
    } else {

        gridBottom = '2%';
        toolboxShow = true;
        // toolboxRight = '2%';
    }

    if($(window).width()<=1366){
        gridRight = '10%';
        if (tootip_data.pageId == 'SYS048MOD0305'){
            toolboxRight = '6%';
        }else{
            toolboxRight = '3%';
        }
    }else if($(window).width()<=1440 && $(window).width()>1366){
        gridRight = '9%';
        if (tootip_data.pageId == 'SYS048MOD0305'){
            toolboxRight = '6%';
        }else{
            toolboxRight = '3%';
        }
    }else{
        gridRight = '7%';
        if (tootip_data.pageId == 'SYS048MOD0305'){
            toolboxRight = '4.5%';
        }else{
            toolboxRight = '2%';
        }
    }

    var option = {
        title: {
            text: titleText,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        dataZoom: {
            type: 'inside'
        },
        grid: {
            top: echartsObj.echartTop,
            left: '7%',
            right:gridRight,
            bottom: gridBottom,
            containLabel: true
        },
        toolbox: {
            show: toolboxShow,
            type: 'png',
            itemGap: 28,
            feature: {
                restore: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/reduction.png',
                },
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            // right: echartsObj.downloadRight,
            right: toolboxRight,
            top: 0
        },
        tooltip: {
            show: true,
            confine: true,
            position: function(p) { //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            },
            formatter: function(params) {
                var str = '';
                if (tootip_data.pageId == 'SYS048MOD0304') { //人格特质
                    str += params.data[2] + '<br />' +
                            params.marker + xName + '：' + params.data[0] + '%<br />' +
                            params.marker + yName + '：' + params.data[1]
                } else if (tootip_data.pageId == 'SYS048MOD0305') { //网络行为
                    str += params.data[2] + '<br />' +
                            params.marker + xName + '：' + params.data[0] + '%<br />' +
                            params.marker + yName + '：' + params.data[1] + '<br />' +
                            params.marker + 'TOP1的APP名称：' + params.data[3];
                } else {
                    str += params.data[2] + '<br />' +
                            params.marker + xName + '：' + params.data[0] + '%<br />' +
                            params.marker + yName + '：' + params.data[1] + '%';
                }
                return str;
            }
        },
        xAxis: {
            name: xName,
            nameLocation: 'end',
            nameTextStyle: {
                color: '#797991'
            },
            gridIndex: 0,
            axisTick: {
                show: false
            },
            scale:true,
            axisLine: { //坐标轴线
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                /*textStyle:{
                 color: '#000',
                 fontSize: 14,
                 formatter: '{value}%'
                 }*/
                color: '#797991',
                fontSize: echartsObj.xAxisfontSize,
                formatter: '{value}%'

            }
        },
        yAxis: {
            name: yName,
            scale: true,
            nameLocation: 'end',
            nameTextStyle: {
                color: '#797991'
            },
            gridIndex: 0,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ecedef'
                }
            },
            axisLabel: {
                /* textStyle:{
                 color: '#000',
                 fontSize: 12,
                 formatter: formatter
                 }*/
                color: '#797991',
                fontSize: echartsObj.xAxisfontSize,
                formatter: formatter

            }
        },
        series: {
            type: 'scatter',
            data: seriesData,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        var str = '';
                        str = params.data[2];
                        return str;
                    }
                },
                emphasis: {
                    show: true,
                    formatter: function(params) {
                        var str = '';
                        return str;
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#4579E5',
                    opacity: 1
                }
            }
        }
    };
    myChart.clear();
    myChart.setOption(option, true);
    myChart.resize();
    $(window).resize(function() {
        echartsSize();
        // option.toolbox.right = echartsObj.downloadRight;
        option.xAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        option.yAxis.axisLabel.fontSize = echartsObj.xAxisfontSize;
        if(tootip_data.pageId == 'SYS048MOD02004'){
            myChart = echarts.init($('#competePattern')[0]);
            myChart.resize();
            myChart = echarts.init($('#competePatternDou')[0]);
            myChart.resize();
        }else{
            myChart.setOption(option, true);
            myChart.resize();
        }
       
    })
}

//男女比例图（基础属性）
function genderDistribution(data) {
    var result = data.Data;
    for (var i = 0; i < result.length; i++) {
        if (result[i].Name == '男') {
            var malePercent = result[i].Value;
        } else if (result[i].Name == '女') {
            var femalePercent = result[i].Value;
        }
    }
    var myChart = echarts.init(document.getElementById('genderDistributionDiv'));

    var center1, center2, titleText, toolboxShow;
    if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        titleText = '';
        toolboxShow = false;
    } else {
        titleText = data.Portray;
        toolboxShow = true;
    }

    var option = {
        title: {
            text: titleText,
            left: '4%',
            y: '4%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        tooltip: {
            confine: true,
            /* position:function(p){   //其中p为当前鼠标的位置
             return [p[0] + 10, p[1] - 10];
             },*/
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                shadowStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            textStyle: {
                fontSize: 12,
                align: 'left'
            },
            formatter: function(params) {
                /* // console.log(params);
                 var str = '';
                 for (var i = 0; i < params.length; i++) {
                 str += params[i].marker + tooltipData + ': ' + params[i].value + '<br />';
                 }
                 str = timeData[params[0].dataIndex] + '<br />' + str;
                 return str;*/
            }
        },
        toolbox: {
            show: toolboxShow,
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    //                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: '4%'
        },
        series: [{
            type: "pie",
            center: ["25%", "50%"],
            radius: ["45%", "48%"],
            clockWise: false,
            hoverAnimation: false,
            labelLine: {
                show: false
            },
            data: [{
                value: malePercent,
                name: "" + malePercent,
                label: {
                    show: true,
                    position: 'center',
                    formatter: function() {
                        var prent = malePercent + '%';
                        var sex = '男性';
                        var bgc = '';
                        // return '{bgc|' + bgc + '}  {sex|' + sex + '}\n{prent|' + prent + '}';
                        return '{sex|' + sex + '}\n\n{prent|' + prent + '}';
                    },
                    fontSize: 10,
                    rich: {
                        prent: {
                            fontSize: echartsObj.fontSize,
                            color: '#000'
                        },
                        bgc: {
                            width: 14,
                            height: 13,
                            backgroundColor: {
                                image: 'images/man.png'
                                // image: 'images/icon-man.svg'
                            }
                        },
                        sex: {
                            fontSize: 14,
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#4579e5",
                        borderColor: "#4579e5"
                    },
                    emphasis: {
                        color: '#4579e5',
                        borderColor: "#4579e5"
                    }
                }
            },
                {
                    name: "",
                    value: femalePercent,
                    itemStyle: {
                        normal: {
                            color: "#ecedef",
                            borderColor: "#ecedef"
                        },
                        emphasis: {
                            color: '#ecedef',
                            borderColor: "#ecedef"
                        }
                    }
                }
            ]
        },
            {
                center: ["75%", "50%"],
                radius: ["45%", "48%"],
                clockWise: false,
                hoverAnimation: false,
                type: "pie",
                labelLine: {
                    show: false
                },
                data: [{
                    value: femalePercent,
                    name: "" + femalePercent,
                    label: {
                        show: true,
                        position: "center",
                        formatter: function() {
                            var prent = femalePercent + '%';
                            var sex = '女性';
                            var bgc = '';
                            // return '{bgc|' + bgc + '}  {sex|' + sex + '}\n{prent|' + prent + '}';
                            return '{sex|' + sex + '}\n\n{prent|' + prent + '}';
                        },
                        fontSize: 10,
                        rich: {
                            prent: {
                                fontSize: echartsObj.fontSize,
                                color: '#000'
                            },
                            bgc: {
                                width: 15,
                                height: 10,
                                backgroundColor: {
                                    image: 'images/woman.png'
                                    // image: 'images/icon-woman.svg'
                                }
                            },
                            sex: {
                                fontSize: 14,
                                color: '#000'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#f12117",
                            borderColor: "#f12117"
                        },
                        emphasis: {
                            color: '#f12117',
                            borderColor: "#f12117"
                        }
                    }
                },
                    {
                        name: "",
                        value: malePercent,
                        itemStyle: {
                            normal: {
                                color: "#ecedef",
                                borderColor: "#ecedef"
                            },
                            emphasis: {
                                color: '#ecedef',
                                borderColor: "#ecedef"
                            }
                        }
                    }
                ]
            }
        ]
    };
    myChart.clear();
    myChart.setOption(option, true);
    $(window).resize(function() {
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        // option.grid.top = echartsObj.echartTop;
        myChart.setOption(option, true);
        myChart.resize();
    })
}

//环状图（生活状态）
function ringlikeDiagram(data) {
    var myChart;
    if (tootip_data.pageId == 'SYS048MOD0303') { //生活状态
        if (data.Portray == '婚姻状态') {
            myChart = echarts.init(document.getElementById('maritalStatus'));
        } else if (data.Portray == '家庭结构') {
            myChart = echarts.init(document.getElementById('familyStructure'));
        }
    } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        if (data.Portray == '婚姻状态') {
            myChart = echarts.init(document.getElementById('maritalStatus'));
        } else if (data.Portray == '家庭结构') {
            myChart = echarts.init(document.getElementById('familyStructure'));
        } else if (data.Portray == '社会阶层') {
            myChart = echarts.init(document.getElementById('socialBracket'));
        } else if (data.Portray == '价值观') {
            myChart = echarts.init(document.getElementById('Values'));
        }
    }

    var result, titleText, legend, labelShow,center;
    if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片 修改数据结构
        // if (data.Portray == '性格' || data.Portray == '价值观') {
        if (data.Portray == '价值观') {
            center = ["50%","50%"];
            var resultData = data.Data;
            var arr = [];
            for (var j = 0; j < resultData.length; j++) {
                var arrObj = {
                    Name: resultData[j][2],
                    Value: resultData[j][0],
                };
                arr.push(arrObj);
            }
            result = arr;
        }else if(data.Portray == '社会阶层'){
            result = data.Data;
            center = ["50%","50%"];
        } else {
            result = data.Data;
            center = ["50%","50%"];
        }
    } else {
        result = data.Data;
        center = ["50%","50%"];
    }
    var titleText = data.Portray;
    var pieData = [];
    var lengendData = [];
    var color = ['#f08c00', '#4579e5', '#298899', '#f1b400', '#9bbd27', '#e96a0d'];
    for (var i = 0; i < result.length; i++) {
        var obj = {
            value: result[i].Value,
            name: result[i].Name,
            itemStyle: { color: color[i] },
            emphasis: { itemStyle: { color: color[i] } }
        };
        pieData.push(obj);
        lengendData.push(result[i].Name);
    }

    var toolboxShow, radius, seriesCenter;
    if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片 修改数据结构
        titleText = '';
        legend = {
            show: false,
            type: 'plain',
            top: 'middle',
            right: '2%',
            align: 'auto',
            data: lengendData,
            itemGap: 30,
            width: 100,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            itemWidth: 15,
            itemHeight: 15,
            selectedMode: true
        };
        labelShow = true;
        toolboxShow = false;
    } else {
        titleText = data.Portray;
        legend = {
            show: false,
            type: 'plain',
            top: '88%',
            align: 'auto',
            data: lengendData,
            itemGap: 30,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            itemWidth: 15,
            itemHeight: 15,
            selectedMode: true
        };
        labelShow = true;
        toolboxShow = true;
    }

    var option = {
        title: {
            text: titleText,
            left: '2%',
            y: '3%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        backgroundColor: '#fff',
        tooltip: {
            confine: true,
            /* position:function(p){   //其中p为当前鼠标的位置
             return [p[0] + 10, p[1] - 10];
             },*/
            trigger: 'axis',
            axisPointer: {
                type: 'none',
                shadowStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            textStyle: {
                fontSize: 12,
                align: 'left'
            },
            formatter: function(params) {
                /* // console.log(params);
                 var str = '';
                 for (var i = 0; i < params.length; i++) {
                 str += params[i].marker + tooltipData + ': ' + params[i].value + '<br />';
                 }
                 str = timeData[params[0].dataIndex] + '<br />' + str;
                 return str;*/
            }
        },
        toolbox: {
            show: toolboxShow,
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    //name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: '3%'
        },
        legend: legend,
        series: {
            name: ' ',
            type: 'pie',
            center: center,
            radius: ["45%", "61%"],
            avoidLabelOverlap: true,
            hoverAnimation: false,
            label: {
                show: labelShow,
                normal: {
                    show: labelShow,
                    position: 'outside',
                    formatter: function(params) {
                        return params.name + "\n\n" + params.value + '%'
                    }
                }
            },
            labelLine: {
                show: labelShow,
                // length: 40,
                // length2: 40
            },
            itemStyle: {
                normal: {
                    // borderWidth: 2,
                    // borderColor: '#ffffff'
                }
            },
            data: pieData
        }
    };
    myChart.clear();
    myChart.setOption(option, true);
    $(window).resize(function() {
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        // option.grid.top = echartsObj.echartTop;
        myChart.setOption(option, true);
        myChart.resize();
    })
}

//2d饼图（消费能力-拥车状况）
function pieDiagram(data) {
    var titleText = data.Portray;
    var result = data.Data;
    var seriesData = [];
    var legendData = [];
    var color = ['#f08c00', '#4579e5'];
    for (var i = 0; i < result.length; i++) {
        var obj = {
            value: result[i].Value,
            name: result[i].Name + result[i].Value + '%',
            itemStyle: {
                color: color[i]
            }
        };
        seriesData.push(obj);
        legendData.push(result[i].Name + result[i].Value + '%');
    }
    var myChart = echarts.init(document.getElementById('ownCarStatus'));
    var option = {
        title: {
            text: titleText,
            left: '2%',
            y: '3%',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        backgroundColor: '#fff',
        legend: {
            show: false,
            type: 'plain',
            top: 'middle',
            right: '5%',
            align: 'auto',
            data: legendData,
            itemGap: 30,
            textStyle: { //字体颜色
                color: '#333',
                fontSize: 14
            },
            width: 100,
            itemWidth: 15,
            itemHeight: 15,
            selectedMode: true
        },
        toolbox: {
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    //name: tootip_data.pageName + '-' + tootip_data.tabName,
                    //backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: '3%'
        },
        series: [{
            name: ' ',
            type: 'pie',
            hoverAnimation: false,
            radius: '72%',
            center: ['50%', '53%'],
            // hoverOffset: 20,
            label: {
                show: true,
                position: 'outside',
            },
            data: seriesData
        }]
    };
    myChart.clear();
    myChart.setOption(option, true);
    $(window).resize(function() {
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        // option.grid.top = echartsObj.echartTop;
        myChart.setOption(option, true);
        myChart.resize();
    })
}

function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}
/*----------------------------------------Lixh--------------------------------*/
//桑基图（竞争关系-竞争流转）
function competeSankey(sankeyData, titleTime) {
    $(".comment").hide();
    var nodes = [];
    var colors = ['#7aa9dc', '#75bcc0', '#8ccc82', '#eccc7a', '#ec9d7b', '#c6928c', '#c2809e', '#9b77b4', '#8089b7', '#8aacbc'];
    var len = Math.floor((sankeyData.length) / 2);
    colors = colors.slice(0, len);
    $(sankeyData).each(function(index, item) {
        if (index < len) {
            var obj = {
                label: {
                    normal: {
                        position: "left",
                        distance: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: colors[index]
                    }
                },
                name: item.source
            };
            nodes.push(obj);
        } else if (index == len) {
            var obj = {
                label: {
                    normal: {
                        distance: 10,
                        position: "right"
                    }
                },
                itemStyle: {
                    normal: {
                        color: colors[index - len]
                    }
                },
                name: item.target
            };
            nodes.push(obj);
            var obj = {
                label: {
                    normal: {
                        position: ['180%', '50%'],
                        textStyle: {
                            fontSize: 16
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#e8e8e8',
                        borderWidth: 1,
                        borderColor: '#e0e0e0'
                    },
                    emphasis: {
                        color: '#e8e8e8',
                        borderWidth: 1,
                        borderColor: '#e0e0e0'
                    }
                },
                tooltip: {
                    show: false
                },
                name: item.source
            }
            nodes.push(obj);
        } else {
            var obj = {
                label: {
                    normal: {
                        position: "right"
                    }
                },
                itemStyle: {
                    normal: {
                        color: colors[index - len]
                    }
                },
                name: item.target
            }
            nodes.push(obj);
        }
    });
    // $('#competeRelation').html();
    $('#competeRelation1').hide();
    $('#competeRelation2').hide();
    $('#competeRelation3').hide();
    $('#competeRelation4').show();
    // $('#competeRelation4').css({'width':'100%','height':'100%'});
    var myChart = echarts.init($('#competeRelation4')[0]);
    var titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.competeRelation;
    var option = {
        title: {
            text: titleText,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            position: "top",
            formatter: function(params) {
                var str = '';
                $(params).each(function(index, item) {
                    if (item.value) {
                        str += item.data.source + ' → ' + item.data.target + " : " + item.value + '%';
                    } else {
                        str += item.name + " : -";
                    }
                });
                return str;
            }
        },
        grid: {
            top: '0%',
            left: '2%',
            right: '2%',
            bottom: '0%',
            containLabel: true
        },
        toolbox: {
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right:'2%',
            top: 0
        },
        series: {
            name: '',
            type: 'sankey',
            data: nodes,
            links: sankeyData,
            nodeGap: 15,
            left: '15%',
            right: ' 15%',
            top: "10%",
            bottom: '10%',
            lineStyle: {
                normal: {
                    color: '#F2F2F2',
                    curveness: 0.5,
                    opacity: 1,
                },
                emphasis: {
                    opacity: 1,
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: "#71bcc1" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#76aadd" // 100% 处的颜色
                        }],
                        globalCoord: false
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0
                }
            }
        }
    };
    myChart.clear();
    myChart.setOption(option, true);
    $(window).resize(function() {
        echartsSize();
        if(tootip_data.pageId != 'SYS048MOD02002' && tootip_data.tabName !='访问流转'){
            option.toolbox.right = echartsObj.downloadRight;
        }
        option.grid.top = echartsObj.echartTop;
        myChart.setOption(option, true);
        myChart.resize();
    });
}
// 全国地图
function regionMap(mapData, tootip_data, titleTime, Type) {
    //地域分析地图
    var titleText = '';
    if (titleTime && tootip_data.pageId != 'SYS048MOD0302') { //区域特征
        titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionDistribution + '全国' + titleTime.obj.tabName;
    }
    $('.mapTitle .province').text('');
    // 公共参数
    var option = {
        title: {
            text: titleText,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            }
        },
        visualMap: {
            show: true,
            min: 0,
            max: 0,
            left: '3%',
            bottom: '6%',
            inRange: {
                color: ['#b1c6ee', '#0b337c']
            },
            textStyle: {
                fontSize: 11
            },
            itemHeight: 80,
            calculable: false,
            text: ['最大值', '最小值'],
            hoverLink: false,
            borderColor: '#fff',
            borderWidth: '2'
        },
        toolbox: {
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: 0
        },
        tooltip: {
            trigger: 'item',
            position: 'right'
        },
        grid: {
            top: echartsObj.echartTop,
            left: '7%',
            right: '7%',
            bottom: '14%',
            containLabel: true
        },
        series: [{
            name: '中国',
            type: 'map',
            map: 'china',
            top: echartsObj.echartTop,
            bottom: '5%',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: null,
                    borderColor: '#fff', //地图边界线颜色
                    borderWidth: 1, //边界线宽
                },
                emphasis: {
                    areaColor: '#eeeeee'
                }
            },
            data: {},
        }]
    };
    var mapType = [
        // 23个省
        '广东', '青海', '四川', '海南', '陕西',
        '甘肃', '云南', '湖南', '湖北', '黑龙江',
        '贵州', '山东', '江西', '河南', '河北',
        '山西', '安徽', '福建', '浙江', '江苏',
        '吉林', '辽宁', '台湾', // 5个自治区
        '新疆', '广西', '宁夏', '内蒙古', '西藏',
        // 4个直辖市
        '北京', '天津', '上海', '重庆',
        // 2个特别行政区
        '香港', '澳门'
    ];
    if (!mapData || mapData == 0) {
        mapData = [];
        if (tootip_data.pageId == 'SYS048MOD0302') { //区域特征
            $(mapType).each(function(index, item) {
                var province = {
                    Area: item,
                    Sales: null
                };
                mapData.push(province);
            });
        } else {
            $(mapType).each(function(index, item) {
                var province = { Area: item, Sales: null, Rate: null };
                mapData.push(province);
            });
        }
    } else {
        if (tootip_data.pageId == 'SYS048MOD0302') { //区域特征
            var mapData_1 = [];
            $(mapData).each(function(index, item) {
                if (item.Portray == '省份') {
                    $(item.Data).each(function(i, obj) {
                        var province = {
                            Area: obj.Name,
                            value: obj.Value
                        }
                        mapData_1.push(province);
                    });
                }
            });
            mapData = mapData_1;
        }
    }
    // 规范省份名称
    $(mapData).each(function(index, item) {
        if (item.Area == '新疆维吾尔自治区') {
            item.Area = '新疆';
        } else if (item.Area == '内蒙古自治区') {
            item.Area = '内蒙古';
        } else if (item.Area == '西藏自治区') {
            item.Area = '西藏';
        } else if (item.Area == '广西壮族自治区') {
            item.Area = '广西';
        } else if (item.Area == '宁夏回族自治区') {
            item.Area = '宁夏';
        } else {
            item.Area = item.Area.split('省')[0];
            item.Area = item.Area.split('市')[0];
        }
    });
    // 图标按钮位置
    if (tootip_data.pageId == 'SYS048MOD0200302') { //区域销量分布
        // if (tootip_data.tabName == '销量分布') {
            var right = $('.distribute').width() - 50;
            $('.btns').css({ 'left': right, 'position': 'absolute' });
        // } else if (tootip_data.tabName == '竞争表现') {
        //     $('.btns').css({ 'left': 'auto', 'right': '440px', 'position': 'absolute' });
        // }
    } else if (tootip_data.pageId == 'SYS048MOD0302') { //区域特征
        $('.btns').css({ 'left': '0', 'right': '0', 'position': 'relative' });
    } else {
        $('.btns').css({ 'left': 'auto', 'position': 'absolute' });
    }
    // 控制页面右侧详情的显隐
    if (tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '销量分布' || tootip_data.pageId == 'SYS048MOD02004' && Type == 'distribute') {
        if (tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '销量分布') {
            $('.legend').hide();
            $('.chartTable').hide();
        }

        var maxVal1 = mapData[0].Sales; //最大值
        var minVal1 = mapData[0].Sales; //最小值
        var maxVal2 = mapData[0].Rate; //最大值
        var minVal2 = mapData[0].Rate; //最小值
        var data1 = [];
        var data2 = [];
        // 解析数据
        $(mapData).each(function(index, item) {
            if (item.Sales > maxVal1) {
                maxVal1 = item.Sales;
            }
            if (item.Sales < minVal1) {
                minVal1 = item.Sales;
            }
            if (item.Rate > maxVal2) {
                maxVal2 = item.Rate;
            }
            if (item.Rate < minVal2) {
                minVal2 = item.Rate;
            }
            if (item.Sales == null) {
                var obj1 = {
                    name: item.Area,
                    value: item.Sales,
                    visualMap: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#eee'
                        },
                        emphasis: {
                            areaColor: '#eee'
                        }
                    }
                }
            } else {
                var obj1 = {
                    name: item.Area,
                    value: item.Sales,
                    itemStyle: {
                        emphasis: {
                            borderWidth: 2,
                            areaColor: '#4579e5'
                        }
                    }
                }
            }
            if (item.Rate == null) {
                var obj2 = {
                    name: item.Area,
                    value: item.Rate,
                    visualMap: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#eee'
                        },
                        emphasis: {
                            areaColor: '#eee'
                        }
                    }
                }
            } else {
                var obj2 = {
                    name: item.Area,
                    value: item.Rate,
                    itemStyle: {
                        emphasis: {
                            borderWidth: 2,
                            areaColor: '#4579e5'
                        }
                    }
                }
            }
            data1.push(obj1);
            data2.push(obj2);
        });
        option.visualMap.max = maxVal1;
        option.visualMap.min = minVal1;
        option.series[0].data = data1;
        option.series[0].zlevel = 1;
        option.tooltip.formatter = function(params) {
            var str = '';
            $(params).each(function(index, item) {
                if (item.value) {
                    str += '省份：' + item.name + "<br>销量：" + item.value;
                } else {
                    if (item.name) {
                        str += '省份：' + item.name + "<br>销量：-";
                    } else {
                        str += '';
                    }
                }
            });
            return str;
        }
        region1 = echarts.init($('.distribute .chart1')[0]);
        if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
            option.toolbox.show = false;
        } else {
            option.toolbox.show = true;
            $('.distribute').show();
            $('.performance').hide();
        }
        region1.setOption(option);
        region1.resize();
        if ($('.distribute .chart2').length > 0) {
            option.visualMap.max = maxVal2;
            option.visualMap.min = minVal2;
            option.series[0].data = data2;
            option.series[0].zlevel = 2;
            option.tooltip.formatter = function(params) {
                var str = '';
                $(params).each(function(index, item) {
                    if (item.value) {
                        str += '省份：' + item.name + "<br>同比增速：" + item.value;
                    } else {
                        if (item.name) {
                            str += '省份：' + item.name + "<br>同比增速：-";
                        } else {
                            str += '';
                        }
                    }
                });
                return str;
            }
            region2 = echarts.init($('.distribute .chart2')[0]);
            region2.setOption(option);
            region2.resize();
            region2.off('click');
            region2.on('click', function(params) {
                if (!params.data || !params.data.value) {
                    return;
                }
                $('.mapTitle .china').addClass('clicked');
                var data_obj = JSON.parse($('.data_obj').val());
                var tootip_data = JSON.parse($('.tootip_data').val());
                data_obj.provinceName = params.name;
                data_obj.DistributionTypeEnum = 'City';
                if (data_obj.provinceName == '新疆') {
                    data_obj.provinceName = '新疆维吾尔自治区';
                } else if (data_obj.provinceName == '内蒙古') {
                    data_obj.provinceName = '内蒙古自治区';
                } else if (data_obj.provinceName == '西藏') {
                    data_obj.provinceName = '西藏自治区';
                } else if (data_obj.provinceName == '广西') {
                    data_obj.provinceName = '广西壮族自治区';
                } else if (data_obj.provinceName == '宁夏') {
                    data_obj.provinceName = '宁夏回族自治区';
                } else if (data_obj.provinceName == '北京' || data_obj.provinceName == '天津' || data_obj.provinceName == '上海' || data_obj.provinceName == '重庆') {
                    data_obj.provinceName = data_obj.provinceName + '市';
                } else {
                    data_obj.provinceName = data_obj.provinceName + '省';
                }
                if (data_obj.provinceName == '北京市' || data_obj.provinceName == '天津市' || data_obj.provinceName == '重庆市' || data_obj.provinceName == '上海市') {
                    return;
                } else {
                    option.series[0].map = params.name;
                    var titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionDistribution + data_obj.provinceName + titleTime.obj.tabName;
                    option.title = {
                        text: titleText,
                        left: 'center',
                        textStyle: {
                            fontSize: 14,
                            fontWeight: 600
                        }
                    };
                    if (data_obj.provinceName == "海南省") {
                        $('.mapTitle .province').text('> 海南');
                    } else {
                        $('.mapTitle .province').text('> ' + data_obj.provinceName);
                    }
                    getMapDetail(option, data_obj, '', drawTable, tootip_data, 4, titleTime, Type);
                    $('.data_obj').val(JSON.stringify(data_obj));
                }
            });
        }
        // 点击地图
        region1.off('click');
        region1.on('click', function(params) {
            if (!params.data || !params.data.value) {
                return;
            }
            $('.distribute .mapTitle .china').addClass('clicked');
            var data_obj = JSON.parse($('.data_obj').val());
            var tootip_data = JSON.parse($('.tootip_data').val());
            data_obj.provinceName = params.name;
            data_obj.DistributionTypeEnum = 'City';
            if (data_obj.provinceName == '新疆') {
                data_obj.provinceName = '新疆维吾尔自治区';
            } else if (data_obj.provinceName == '内蒙古') {
                data_obj.provinceName = '内蒙古自治区';
            } else if (data_obj.provinceName == '西藏') {
                data_obj.provinceName = '西藏自治区';
            } else if (data_obj.provinceName == '广西') {
                data_obj.provinceName = '广西壮族自治区';
            } else if (data_obj.provinceName == '宁夏') {
                data_obj.provinceName = '宁夏回族自治区';
            } else if (data_obj.provinceName == '北京' || data_obj.provinceName == '天津' || data_obj.provinceName == '上海' || data_obj.provinceName == '重庆') {
                data_obj.provinceName = data_obj.provinceName + '市';
            } else {
                data_obj.provinceName = data_obj.provinceName + '省';
            }
            if (data_obj.provinceName == '北京市' || data_obj.provinceName == '天津市' || data_obj.provinceName == '重庆市' || data_obj.provinceName == '上海市') {
                return;
            } else {
                option.series[0].map = params.name;
                var titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionDistribution + data_obj.provinceName + titleTime.obj.tabName;
                option.title = {
                    text: titleText,
                    left: 'center',
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 600
                    }
                };
                if (data_obj.provinceName == "海南省") {
                    $('.distribute .mapTitle .province').text('> 海南');
                } else {
                    $('.distribute .mapTitle .province').text('> ' + data_obj.provinceName);
                }

                getMapDetail(option, data_obj, '', drawTable, tootip_data, 4, titleTime, Type);
                $('.data_obj').val(JSON.stringify(data_obj));
            }
        });
    } else if (tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '竞争表现' || tootip_data.pageId == 'SYS048MOD02004' && Type == 'performance') {
        //图表
        $('.legend').show();
        var data3 = [];
        $(mapData).each(function(index, item) {
            if (item.Sales == null) {
                var obj3 = {
                    name: item.Area,
                    value: item.Sales,
                    visualMap: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#ECEDEF',
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderWidth: 1,
                            borderColor: '#fff',
                            areaColor: '#ECEDEF'
                        }
                    }
                }
            } else {
                var obj3 = {
                    name: item.Area,
                    value: item.Sales,
                    visualMap: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#4579E5',
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderWidth: 2,
                            borderColor: '#fff',
                            areaColor: '#4579E5'
                        }
                    }
                }
                if (item.SalesSituation == '优') {
                    obj3.itemStyle.normal.areaColor = '#c8002c';
                    obj3.itemStyle.emphasis.areaColor = '#c8002c';
                } else if (item.SalesSituation == '良') {
                    obj3.itemStyle.normal.areaColor = '#f08c00';
                    obj3.itemStyle.emphasis.areaColor = '#f08c00';
                } else if (item.SalesSituation == '较差') {
                    obj3.itemStyle.normal.areaColor = '#9bbb36';
                    obj3.itemStyle.emphasis.areaColor = '#9bbb36';
                } else if (item.SalesSituation == '差') {
                    obj3.itemStyle.normal.areaColor = '#2e8798';
                    obj3.itemStyle.emphasis.areaColor = '#2e8798';
                }
            }
            data3.push(obj3);
        });
        option.tooltip.formatter = function(params) {
            var str = '';
            $(params).each(function(index, item) {
                if (item.value) {
                    str += '省份：' + item.name + "<br>销量：" + item.value;
                } else {
                    if (item.name) {
                        str += '省份：' + item.name + "<br>销量：-";
                    } else {
                        str += '';
                    }
                }
            });
            return str;
        }
        option.series[0].data = data3;
        option.series[0].zlevel = 3;
        if (tootip_data.pageId == 'SYS048MOD02004') {
            option.toolbox.show = false;
        } else {
            option.toolbox.show = true;
            $('.distribute').hide();
            $('.performance').show();
        }
        option.visualMap.show = false;
        region3 = echarts.init($('.performance .chart3')[0]);
        region3.setOption(option);
        region3.resize();
        // 图表右侧数据
        // $('.chartTable').show();
        // var data = JSON.parse($('.mapData2').val());
        // if (data.TableData.Values && data.TableData.Values.length > 0) {
        //     $('.chartTable').html(juicer($('#chartTable').html(), {
        //         Situation: data.Situation,
        //         list: data.TableData.Values.slice(0, 10)
        //     }));
        // }

        region3.off('click');
        region3.on('click', function(params) {
            if (!params.data || !params.data.value) {
                return;
            }
            $('.performance .mapTitle .china').addClass('clicked');
            var data_obj = JSON.parse($('.data_obj').val());
            var tootip_data = JSON.parse($('.tootip_data').val());
            data_obj.provinceName = params.name;
            data_obj.DistributionTypeEnum = 'City';
            if (data_obj.provinceName == '新疆') {
                data_obj.provinceName = '新疆维吾尔自治区';
            } else if (data_obj.provinceName == '内蒙古') {
                data_obj.provinceName = '内蒙古自治区';
            } else if (data_obj.provinceName == '西藏') {
                data_obj.provinceName = '西藏自治区';
            } else if (data_obj.provinceName == '广西') {
                data_obj.provinceName = '广西壮族自治区';
            } else if (data_obj.provinceName == '宁夏') {
                data_obj.provinceName = '宁夏回族自治区';
            } else if (data_obj.provinceName == '北京' || data_obj.provinceName == '天津' || data_obj.provinceName == '上海' || data_obj.provinceName == '重庆') {
                data_obj.provinceName = data_obj.provinceName + '市';
            } else {
                data_obj.provinceName = data_obj.provinceName + '省';
            }
            // 直辖市不可点击
            if (data_obj.provinceName == '北京市' || data_obj.provinceName == '天津市' || data_obj.provinceName == '重庆市' || data_obj.provinceName == '上海市') {
                return;
            } else {
                option.series[0].map = params.name;
                var titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionDistribution + data_obj.provinceName + titleTime.obj.tabName;
                option.title = {
                    text: titleText,
                    left: 'center',
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 600
                    }
                };
                /* if (data_obj.provinceName == '海南省') {
                 option.title.text = ' > 海南';
                 } else {
                 option.title.text = ' > ' + data_obj.provinceName;
                 }
                 option.title.left = 45;
                 option.title.top = -3;*/
                if (data_obj.provinceName == "海南省") {
                    $('.performance .mapTitle .province').text('> 海南');
                } else {
                    $('.performance .mapTitle .province').text('> ' + data_obj.provinceName);
                }
                getMapDetail(option, data_obj, '', drawTable, tootip_data, 4, titleTime, Type);
                $('.data_obj').val(JSON.stringify(data_obj));
            }
        });
    } else if (tootip_data.pageId == 'SYS048MOD0302') { //区域特征
        var maxVal4 = mapData[0].value; //最大值
        var minVal4 = mapData[0].value; //最大值
        //图表

        // var right = $('#Ranking').width() - 25;
        // $('.btns').css({'left': right});
        var data4 = [];
        $(mapData).each(function(index, item) {
            if (item.value > maxVal4) {
                maxVal4 = item.value;
            }
            if (item.value < minVal4) {
                minVal4 = item.value;
            }
            if (item.value == null) {
                var obj4 = {
                    name: item.Area,
                    value: item.value,
                    visualMap: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#eee'
                        },
                        emphasis: {
                            areaColor: '#eee'
                        }
                    }
                }
            } else {
                var obj4 = {
                    name: item.Area,
                    value: item.value,
                    itemStyle: {
                        emphasis: {
                            borderWidth: 2,
                            areaColor: '#4579e5'
                        }
                    }
                }
            }

            data4.push(obj4);
        });
        option.tooltip.formatter = function(params) {
            var str = '';
            $(params).each(function(index, item) {
                if (item.value) {
                    str += '省份：' + item.name + "<br>占比：" + item.value + '%';
                } else {
                    if (item.name) {
                        str += '省份：' + item.name + "<br>占比：-";
                    } else {
                        str += '';
                    }
                }
            });
            return str;
        }
        option.series[0].data = data4;
        option.series[0].zlevel = 3;
        option.toolbox.show = true;
        region4 = echarts.init($('#Ranking')[0]);
        option.visualMap.show = true;
        option.visualMap.max = maxVal4;
        option.visualMap.min = minVal4;
        region4.setOption(option);
        region4.resize();
        // 图表右侧数据
        $('.chartTable').show();
        var data = JSON.parse($('.mapData').val());
        var data_table = {
            province: [],
            city: []
        };
        $(data).each(function(index, item) {
            if (item.Portray == '城市') {
                $(item.Data).each(function(i, obj) {
                    var name = obj.Name.replace('市', '');
                    var arr_item = {
                        name: name,
                        value: obj.Value
                    }
                    data_table.city.push(arr_item);
                });
            } else if (item.Portray == '省份') {
                $(item.Data).each(function(i, obj) {
                    var name;
                    if (obj.Name == '新疆维吾尔自治区') {
                        name = '新疆';
                    } else if (obj.Name == '内蒙古自治区') {
                        name = '内蒙古';
                    } else if (obj.Name == '西藏自治区') {
                        name = '西藏';
                    } else if (obj.Name == '广西壮族自治区') {
                        name = '广西';
                    } else if (obj.Name == '宁夏回族自治区') {
                        name = '宁夏';
                    } else {
                        if (obj.Name.indexOf('省') == obj.Name.length - 1) {
                            name = obj.Name.substring(0, obj.Name.length - 1);
                        } else if (obj.Name.indexOf('市') == obj.Name.length - 1) {
                            name = obj.Name.substring(0, obj.Name.length - 1);
                        }
                    }
                    var arr_item = {
                        name: name,
                        value: obj.Value
                    }
                    data_table.province.push(arr_item);
                });
            }
        });
        if (data_table.province.length > 0 && data_table.city.length > 0) {
            $('.chartTable .con div').html(juicer($('#chartTable').html(), data_table));
        }
        var tableHeight = $('.chartTable .list').height();
        $('.chartTable .con .list').slimScroll({ height: tableHeight + 'px' });
        // 切换城市省份表格
        $('.chartTable .con .tab li').off('click').on('click', function() {
            $(this).addClass('active').siblings('li').removeClass('active');
            if ($(this).index() == 0) {
                $('.chartTable .con .title li').eq(1).text('省份');
                $('.chartTable .con .tab .tabItembar').css({ 'transform': 'translateX(0)' });
                $('.chartTable .con .tab .tabBottom').css({ 'transform': 'translateX(0)' });
                $('.chartTable .con .list_con1').show();
                $('.chartTable .con .list_con2').hide();
            } else {
                $('.chartTable .con .title li').eq(1).text('城市');
                $('.chartTable .con .tab .tabItembar').css({ 'transform': 'translateX(100%)' });
                $('.chartTable .con .tab .tabBottom').css({ 'transform': 'translateX(100%)' });
                $('.chartTable .con .list_con2').show();
                $('.chartTable .con .list_con1').hide();
            }
        });
        $('.chartTable .list_con1 p').off('mouseenter').on('mouseenter', function() {
            if (!$('.mapTitle .china').hasClass('clicked')) {
                var name = $.trim($(this).find('.name').text());
                region4.dispatchAction({ type: 'mapSelect', name: name });
                region4.dispatchAction({
                    type: 'showTip',
                    name: name,
                    seriesIndex: 0
                });
            }
        }).off('mouseleave').on('mouseleave', function() {
            if (!$('.mapTitle .china').hasClass('clicked')) {
                var name = $.trim($(this).find('.name').text());
                region4.dispatchAction({ type: 'mapUnSelect', name: name });
                region4.dispatchAction({
                    type: 'hideTip',
                    name: name,
                    seriesIndex: 0
                });
            }
        });
        region4.off('click');
        region4.on('click', function(params) {
            if (!params.data || !params.data.value) {
                return;
            }
            $('.mapTitle .china').addClass('clicked');
            var data_obj = JSON.parse($('.data_obj').val());
            var tootip_data = JSON.parse($('.tootip_data').val());
            var provinceName;
            if (params.name == '新疆') {
                provinceName = '新疆维吾尔自治区';
            } else if (params.name == '内蒙古') {
                provinceName = '内蒙古自治区';
            } else if (params.name == '西藏') {
                provinceName = '西藏自治区';
            } else if (params.name == '广西') {
                provinceName = '广西壮族自治区';
            } else if (params.name == '宁夏') {
                provinceName = '宁夏回族自治区';
            } else {
                provinceName = params.name + '省';
            }
            // 直辖市不可点击
            if (params.name == '北京' || params.name == '天津' || params.name == '重庆' || params.name == '上海') {
                return;
            } else {
                option.series[0].map = params.name;
                var titleText;
                if (titleTime && tootip_data.pageId != 'SYS048MOD0302') {
                    titleText = titleTime.QueryBeginDt + '-' + titleTime.QueryEndDt + titleTime.obj.regionDistribution + data_obj.provinceName + titleTime.obj.tabName;
                }

                option.title = {
                    text: titleText,
                    left: 'center',
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 600
                    }
                };
                if (params.name == "海南省") {
                    $('.mapTitle .province').text('> 海南');
                } else {
                    $('.mapTitle .province').text('> ' + params.name);
                }
                var cityData = [];

                $(data).each(function(index, item) {
                    if (item.Portray == '城市') {
                        $(item.Data).each(function(i, obj) {
                            if (obj.Province == provinceName) {
                                var arr_item = {
                                    name: obj.Name.replace('市', ''),
                                    value: obj.Value
                                }
                                cityData.push(arr_item);
                            }
                        });
                    }
                });
                regionMapDetail(option, cityData, tootip_data, titleTime);
                $('.chartTable .tab li').eq(1).click();
            }
        });
        region4.off('mouseover')
        region4.on('mouseover', function(params) {
            if ($('.list_con1').is(':visible')) {
                var name = params.name;
                $('.list_con1 .name').each(function(index, item) {
                    var text = $.trim($(item).text());
                    if (name.indexOf(text) == 0) {
                        $(item).parents('p').addClass('active').siblings('p').removeClass('active')
                        var top = parseInt($(item).parents('p').position().top) - $('.list').height() / 2;
                        $('.list').stop().animate({ scrollTop: top }, 1000);
                    }
                })
            }
        });
        region4.on('mouseout', function() {
            $('.chartTable .list_con1 p').removeClass('active');
        })
    }
    $('.mapTitle .china').on('click', function() { //返回全国地图
        var data_obj = JSON.parse($('.data_obj').val());
        data_obj.provinceName = '';
        data_obj.DistributionTypeEnum = 'Province';
        $('.data_obj').val(JSON.stringify(data_obj));
        $(this).removeClass('clicked');
        if (tootip_data.pageId == 'SYS048MOD0302') { //区域特征
            var data = JSON.parse($('.mapData').val());
            regionMap(data, tootip_data, titleTime);
        } else {
            if (tootip_data.pageId == 'SYS048MOD02004') {//车型卡片
                if (Type && Type == 'distribute') {
                    var data = JSON.parse($('.mapData1').val());
                    regionMap(data.ChartData, tootip_data, titleTime, 'distribute');
                } else if (Type == 'performance') {
                    var data = JSON.parse($('.mapData2').val());
                    regionMap(data.ChartData, tootip_data, titleTime, 'performance');
                }
            } else {//区域销量分布
                if (tootip_data.tabName == '销量分布') {
                    var data = JSON.parse($('.mapData1').val());
                } else if (tootip_data.tabName == '竞争表现') {
                    var data = JSON.parse($('.mapData2').val());
                    TableData = data.TableData;
                    var tabData = {
                        Header: [],
                        Values: []
                    }
                    if (TableData) {
                        if (TableData.Header) {
                            tabData.Header = TableData.Header;
                            tabData.Values = TableData.Values;
                            tabData.Count = tabData.Values ? tabData.Values.length : 0;
                        } else {
                            tabData.Header = TableData[0];
                            if (TableData.length > 1) {
                                tabData.Values = TableData.slice(1, TableData.length);
                            } else {
                                tabData.Values = [];
                            }
                            tabData.Count = tabData.Values ? tabData.Values.length : 0;
                        }
                        if (tabData.Values && tabData.Values.length > 0) {
                            drawTable(tabData,data.Situation);
                        }
                    }
                }
                regionMap(data.ChartData, tootip_data, titleTime);
            }
        }
        if ($('.chartTable .tab li').length > 0) {
            $('.chartTable .tab li').eq(0).click();
        }
    });
    $(window).resize(function() {
        var windowWidth = $(window).width();
        echartsSize();
        option.toolbox.right = echartsObj.downloadRight;
        option.grid.top = echartsObj.echartTop;
        tooltip_data = JSON.parse($('.tootip_data').val());
        if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
            region1.resize();
            region3.resize();
        }else{
            if(tootip_data.pageId == 'SYS048MOD0200302'){//区域销量分布
                if(tootip_data.tabName == '销量分布'){
                    region1.resize();
                    region2.resize();
                }else if(tootip_data.tabName == '竞争表现'){
                    region3.resize();
                }
            }else if(tootip_data.pageId == 'SYS048MOD0302'){//区域特征
                region4.resize();
                var height = $('#Ranking').outerHeight()-$('.chartTable .tab').outerHeight()-$('.chartTable .title').outerHeight()-30;
                $('.chartTable .slimScrollDiv').height(height);
                $('.chartTable .slimScrollDiv .list').height(height);
            }
        }
        
        if (tootip_data.pageId == 'SYS048MOD0200302') { //区域销量分布
            if (tootip_data.tabName == '销量分布') {
                var right = $('.distribute').width() - 50;
                $('.btns').css({ 'left': right, 'position': 'absolute' });
            } else if (tootip_data.tabName == '竞争表现') {
                $('.btns').css({ 'left': 'auto', 'right': '440px', 'position': 'absolute' });
            }
        } else if (tootip_data.pageId == 'SYS048MOD0302') {
            $('.btns').css({ 'left': '0', 'right': '0', 'position': 'relative' });
        } else {
            $('.btns').css({ 'left': 'auto', 'position': 'absolute' });
        }

        // if($(window).width()<=1366){
        //     $('.chartTable .con .list').slimScroll({height: '206px'});
        // }else if($(window).width()<=1440){
        //     $('.chartTable .con .list').slimScroll({height: '276px'});
        // }else{
        //     $('.chartTable .con .list').slimScroll({height: '372px'});
        // }
    });
}
// 省份城市
function regionMapDetail(option, data, tootip_data, titleTime, Type) { //地域详情
    mapData = data.ChartData ? data.ChartData : data;
    // if (tootip_data.tabName == '竞争表现') {
    //     var right = $('.chart3').width() - 25;
    //     $('.btns').css({ 'left': right });
    // } else {
    //     $('.btns').css({ 'left': 'auto' });
    // }
    // 控制页面右侧详情的显隐
    if (tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '销量分布' || tootip_data.pageId == 'SYS048MOD02004' && Type == 'distribute') {
        $('#Ranking').css('width', '100%');
        if (tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '销量分布') {
            $('.legend').hide();
            $('.chartTable').hide();
        }
        if (tootip_data.subTabName == '销量' || tootip_data.pageId == 'SYS048MOD02004') {
            var maxVal1 = 0; //最大值
            var data1 = [];
            // 解析数据
            $(mapData).each(function(index, item) {
                if (item.Sales > maxVal1) {
                    maxVal1 = item.Sales;
                }
                var obj1 = {
                    name: item.Area,
                    value: item.Sales,
                    itemStyle: {
                        emphasis: {
                            borderWidth: 2,
                            areaColor: '#4579e5'
                        }
                    }
                }
                data1.push(obj1);
            });
            option.visualMap.max = maxVal1;
            option.series[0].data = data1;
            option.series[0].zlevel = 1;
            option.tooltip.formatter = function(params) {
                var str = '';
                $(params).each(function(index, item) {
                    if (item.value) {
                        str += '城市：' + item.name + "<br>销量：" + item.value;
                    } else {
                        if (item.name) {
                            str += '城市：' + item.name + "<br>销量：-";
                        } else {
                            str = '';
                        }
                    }
                });
                return str;
            }
            region1.setOption(option);
            region1.resize();
            region1.off('click');
            region1.on('click', function() {
                return;
            });
        } else if (tootip_data.subTabName == '销量同比增速') {
            var maxVal2 = 0; //最大值
            var data2 = [];
            // 解析数据
            $(mapData).each(function(index, item) {
                if (item.Rate > maxVal2) {
                    maxVal2 = item.Rate;
                }
                var obj2 = {
                    name: item.Area,
                    value: item.Rate,
                    itemStyle: {
                        emphasis: {
                            borderWidth: 2,
                            areaColor: '#4579e5'
                        }
                    }
                }
                data2.push(obj2);
            });
            option.visualMap.max = maxVal2;
            option.series[0].data = data2;
            option.series[0].zlevel = 2;
            option.tooltip.formatter = function(params) {
                var str = '';
                $(params).each(function(index, item) {
                    if (item.value) {
                        str += '城市：' + item.name + "<br>同比增速：" + item.value;
                    } else {
                        if (item.name) {
                            str += '城市：' + item.name + "<br>同比增速：-";
                        } else {
                            str = '';
                        }
                    }
                });
                return str;
            }
            region2.setOption(option);
            region2.resize();
            region2.off('click');
            region2.on('click', function() {
                return;
            });
        }
    } else if (tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '竞争表现' || tootip_data.pageId == 'SYS048MOD02004' && Type == 'performance') {
        $('.legend').show();
        var data3 = [];
        $(mapData).each(function(index, item) {
            var obj3 = {
                name: item.Area,
                value: item.Sales,
                visualMap: false,
                itemStyle: {
                    normal: {
                        areaColor: '#57a2e5',
                        borderColor: '#fff'
                    },
                    emphasis: {
                        borderWidth: 2,
                        areaColor: '#4579e5',
                        borderColor: "#fff"
                    }
                }
            }
            if (item.SalesSituation == '优') {
                obj3.itemStyle.normal.areaColor = '#c8002c';
                obj3.itemStyle.emphasis.areaColor = '#c8002c';
            } else if (item.SalesSituation == '良') {
                obj3.itemStyle.normal.areaColor = '#f08c00';
                obj3.itemStyle.emphasis.areaColor = '#f08c00';
            } else if (item.SalesSituation == '较差') {
                obj3.itemStyle.normal.areaColor = '#9bbb36';
                obj3.itemStyle.emphasis.areaColor = '#9bbb36';
            } else if (item.SalesSituation == '差') {
                obj3.itemStyle.normal.areaColor = '#2e8798';
                obj3.itemStyle.emphasis.areaColor = '#2e8798';
            }
            data3.push(obj3);
        });
        option.tooltip.formatter = function(params) {
            var str = '';
            $(params).each(function(index, item) {
                if (item.value) {
                    str += '城市：' + item.name + "<br>销量：" + item.value;
                } else {
                    if (item.name) {
                        str += '城市：' + item.name + "<br>销量：-";
                    } else {
                        str = '';
                    }
                }
            });
            return str;
        }
        option.series[0].data = data3;
        option.series[0].zlevel = 3;
        $('#Ranking').css('width', '67%');
        $('#Ranking .chart1').show();
        $('#Ranking .chart2').hide();
        region3.setOption(option);
        region3.resize();
        region3.off('click');
        region3.on('click', function() {
            return;
        });
        // 表格
        $('.chartTable').show();
        if (data.TableData.Values && data.TableData.Values.length > 0) {
            $('.chartTable').html(juicer($('#chartTable').html(), {
                Situation: data.Situation,
                list: data.TableData.Values.slice(0, 10)
            }));
        }
    } else if (tootip_data.pageId == 'SYS048MOD0302') {
        // var right = $('#Ranking').width() - 25;
        // $('.btns').css({'left': right});
        var maxVal4 = 0; //最大值
        var data4 = [];
        // 解析数据
        $(mapData).each(function(index, item) {
            if (item.value > maxVal4) {
                maxVal4 = item.value;
            }
            var obj4 = {
                name: item.name,
                value: item.value,
                itemStyle: {
                    emphasis: {
                        borderWidth: 2,
                        areaColor: '#4579e5'
                    }
                }
            }
            data4.push(obj4);
        });
        option.visualMap.max = maxVal4;
        option.series[0].data = data4;
        option.series[0].zlevel = 1;
        option.tooltip.formatter = function(params) {
            var str = '';
            $(params).each(function(index, item) {
                if (item.value) {
                    str += '城市：' + item.name + "<br>占比：" + item.value + '%';
                } else {
                    if (item.name) {
                        str += '城市：' + item.name + "<br>占比：-";
                    } else {
                        str = '';
                    }
                }
            });
            return str;
        }
        $('.chartTable .list_con2 p').off('mouseenter').on('mouseenter', function() {
            if ($('.mapTitle .china').hasClass('clicked')) { //
                var name = $.trim($(this).find('.name').text());
                region4.dispatchAction({ type: 'mapSelect', name: name });
                region4.dispatchAction({
                    type: 'showTip',
                    name: name,
                    seriesIndex: 0
                });
            }
        }).off('mouseleave').on('mouseleave', function() {
            if ($('.mapTitle .china').hasClass('clicked')) { //
                var name = $.trim($(this).find('.name').text());
                region4.dispatchAction({ type: 'mapUnSelect', name: name });
                region4.dispatchAction({
                    type: 'hideTip',
                    name: name,
                    seriesIndex: 0
                });
            }
        });
        region4.setOption(option);
        region4.resize();
        region4.off('click');
        region4.on('click', function() {
            return;
        });
        region4.off('mouseover')
        region4.on('mouseover', function(params) {
            if ($('.list_con2').is(':visible')) {
                var name = params.name;
                $('.list_con2 .name').each(function(index, item) {
                    var text = $.trim($(item).text());
                    if (name.indexOf(text) == 0) {
                        $(item).parent('p').addClass('active').siblings('p').removeClass('active')
                        var top = parseInt($(item).parent('p').position().top) - $('.list').height() / 2;
                        $('.list').stop().animate({ scrollTop: top }, 1000);
                    }
                })
            }
        });
        region4.on('mouseout', function() {
            $('.chartTable .list_con2 p').removeClass('active');
        })
    }
}
// 雷达图
function radar(data, titleTime,ID) {
    var indicator1 = [];
    var value1 = [];
    var max1,min1,splitNumber,showToolBox;
    $(data).each(function(index, item) {
        max1= item.Data[0][1];
        min1= item.Data[0][1];
        $(item.Data).each(function(i,obj){
            var objItem = {
                name: obj[0],
                max:0,
                min:0
            }
            if(obj[1]>max1){
                max1 = obj[1];
            }
            if(obj[1]<min1){
                min1 = obj[1];
            }
            indicator1.push(objItem);
            value1.push(obj[1]);
        });
        if(max1-min1<4){
            min1 = max1 - 4;
            splitNumber = 4;
        }else{
            var n = Math.ceil((max1-min1)/4);
            min1 = 0>(max1 - 4*n)? 0 :(max1 - 4*n);
            splitNumber = 4;
            if(indicator1.indexOf(min1)){
                min1 = min1 -n;
                splitNumber = 5;
            }
        }
        $(indicator1).each(function(i,obj){
            obj.max = max1;
            obj.min = min1;
        }); 
    });
    var option = {
        title: {
            text: '价值观',
            textStyle: {
                fontSize: 14,
                fontWeight: 600
            },
            padding:[0,0,0,40]
        },
        tooltip:{},
        toolbox: {
            type: 'png',
            feature: {
                saveAsImage: {
                    show: true,
                    title: ' ',
                    icon: 'image://images/download.png',
                    name: tootip_data.pageName + '-' + tootip_data.tabName,
                    backgroundColor: 'rgba(255,255,255,0)'
                }
            },
            right: echartsObj.downloadRight,
            top: 0
        },
        radar: {
            center:['50%','50%'],
            name: {
                textStyle: {
                    fontSize:14,
                    // color: '#fff',
                    // color:"#c6d5f2",
                    color:'#3c77f5',
                    backgroundColor: '#fff',
                    // backgroundColor: '#82a9ed',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            splitNumber:splitNumber,
            splitLine:{
                lineStyle:{
                    // color:'#b1c6ee'
                    // color:"#f9fbff"
                    color:'rgba(207,223,254,0.6)'
                }
            },
            splitArea:{
                areaStyle:{
                    // color:["#f9fbff",'#fff']
                    color:['rgba(250,250,250,0.6)','rgba(207,223,254,0.4)']
                }
            },
            axisLine:{
                lineStyle:{
                    color:'rgba(207,223,254,0.6)'
                    // color:'#b1c6ee'
                    // color:"#f9fbff"
                }
            },
            indicator: indicator1
        },
        series: [{
            name: '',
            type: 'radar',
            data: [{
                value: value1,
                name: '价值观',
                itemStyle:{
                    color:'#F08C00'
                }

            }]
        }]
    };
    var myChart;
    if (tootip_data.pageId == 'SYS048MOD0304') { //人格特质
        $('#personChara1').show();
        $('#personChara2').show();
        $('#RankingDetail').hide();
        if (tootip_data.tabName == '心理特征') {
            myChart = echarts.init(document.getElementById(ID));
            if(ID == 'personChara2'){
               option.title.text = '价值观'; 
               option.series[0].data[0].name = '价值观';
            }else if(ID == 'personChara1'){
                option.title.text = '性格';
                option.series[0].data[0].name = '性格';
            }
            option.toolbox.show = true;
            myChart.setOption(option,true);
        }
    }else if(tootip_data.pageId == 'SYS048MOD02004'){//车型卡片
       myChart = echarts.init(document.getElementById(ID));
        if(ID == 'personChara2'){
           option.title.text = '价值观'; 
           option.series[0].data[0].name = '价值观';
        }else if(ID == 'personChara1'){
            option.title.text = '性格';
            option.series[0].data[0].name = '性格';
        }
        option.toolbox.show = false;
        myChart.setOption(option,true);
    }
    $(window).resize(function() {
        echartsSize();
        if(tootip_data.pageId == 'SYS048MOD02004'){ //车型卡片
            myChart = echarts.init($('#personChara1')[0]);
            myChart.resize();
            myChart = echarts.init($('#personChara2')[0]);
            myChart.resize();
        }else{
            myChart.setOption(option, true);
            myChart.resize();
        }

    });
}
// 渲染tootip内容
function renderTootip(tootip_data, data) {
    if (tootip_data.tabName) {
        if (tootip_data.subTabName) {
            var render_data = data[tootip_data.pageId][tootip_data.tabName][tootip_data.subTabName];
        } else {
            var render_data = data[tootip_data.pageId][tootip_data.tabName];
        }
    } else {
        var render_data = data[tootip_data.pageId];
    }
    var str = '<i class="Triangle"></i>';
    $(render_data).each(function(index, item) {
        str += '<p><span class="title">' + item.title + '：</span><span class="text">' + item.text + '</span></p>';
    });
    $('.btns .tootip').html(str);
    if (tootip_data.pageId == "SYS048MOD0200302" && tootip_data.tabName == "竞争表现" && tootip_data.pageId != 'SYS048MOD0302') { //区域销量分布
        $('.Triangle').css('right', '7px');
        $('.tootip').css('right', '-3px');
    } else {
        $('.Triangle').css('right', '40px');
        $('.tootip').css('right', '-34px');
    }
}
