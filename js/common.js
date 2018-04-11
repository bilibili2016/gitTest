/**
 * @authors lixh
 */
var lastDate = ''; //最大日期
var minDate = {}; //最小日期
var minDay = {}; //最小日期
var index = 0;
var getDataAjax;
/* 获取页面数据函数
 * @obj    查询条件
 * @showchart: 柱线图显示函数
 * @showtable: 表格显示函数，不刷新传0，
 * @tootip_data  页面信息参数
 * @loadType  加载方式 1：切换页面加载  2：点击一级tab加载 3：点击二级tab加载  4：点击查询条件加载
 */
function getData(obj, showchart, showtable, tootip_data, loadType) {
    IsSuccess = false;
    var url;
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
        case "SYS048MOD000201":
            url = urlObj.TotalIndex;
            break;
        case "SYS048MOD000202":
            url = urlObj.TotalIndex;
            break;
        case "SYS048MOD000203":
            url = urlObj.TotalIndex;
            break;
        case "SYS048MOD02001":
            switch (tootip_data.tabName) {
                case "关注走势":
                    // if (tootip_data.subTabName == "关注走势") {
                    url = urlObj.indextrendAttention;
                    // } else if (tootip_data.subTabName == "关注内容分布") {
                    //     url = urlObj.contentserial;
                    // }
                    break;
                case "预购走势":
                    url = urlObj.indextrendLeads;
                    break;
                case "销量走势":
                    url = urlObj.indextrendSalevol;
                    break;
            }
            break;
        case "SYS048MOD0200201":
            if (showchart) {
                url = urlObj.competitiveIndex;
            } else {
                url = urlObj.competitiveIndexdetail;
            }
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
        case 'SYS048MOD0301':
            url = urlObj.getPersonas;
            break;
        case 'SYS048MOD0302':
            url = urlObj.getPersonas;
            break;
        case 'SYS048MOD0303':
            url = urlObj.getPersonas;
            break;
        case 'SYS048MOD0304':
            url = urlObj.getPersonas;
            break;
        case 'SYS048MOD0305':
            url = urlObj.getPersonas;
            break;
        case 'SYS048MOD0306':
            url = urlObj.getPersonas;
            break;
        case 'SYS048MOD02004': //车型卡片
            url = urlObj.getPersonas;
            break;
        case 'SYS048MOD0402': //车型偏好
            url = urlObj.preferenceSerial;
            break;
        case 'SYS048MOD0401':
            switch (tootip_data.tabName) {
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

    }
    var str = '?';
    for (var n in obj) {
        str += n + '=' + encodeURIComponent(obj[n]) + '&';
    }
    str = str.substring(0, str.length - 1);

    // 获取loading图位置
    var contentTop = $('.mainContent').offset().top;
    if ($('.mainContent .tabMenu').length) {
        var tabTop = $('.mainContent .tabMenu').offset().top + $('.mainContent .tabMenu').height() + 4;
    }
    if ($('.mainContent .subMenu').length) {
        var subtabTop = $('.mainContent .subMenu').offset().top + $('.mainContent .subMenu').height();
    }
    if(getDataAjax){
       getDataAjax.abort(); 
    }
    getDataAjax = $.ajax({
        url: url + str,
        type: "get",
        // data: obj,
        dataType: 'json',
        processData: false,
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function() {
            $('body,html').scrollTop(0);
            $('body').css('overflow-y', 'hidden');
            switch (loadType) {
                case 1: //1：切换页面加载
                    if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
                        var top = $('.titleCard').offset().top;
                        $('.loading').css('top', top + 'px');
                    }else{
                        $('.loading').css('top', contentTop + 'px');
                    }
                    break;
                case 2: //2：点击一级tab加载
                    $('.loading').css('top', tabTop + 'px');
                    break;
                case 3: //3：点击二级tab加载
                    $('.loading').css('top', subtabTop + 'px');
                    break;
                case 4: //4：点击查询条件加载
                    if (tootip_data.pageId == 'SYS048MOD0301' || tootip_data.pageId == 'SYS048MOD0302' || tootip_data.pageId == 'SYS048MOD0303' || tootip_data.pageId == 'SYS048MOD0304' || tootip_data.pageId == 'SYS048MOD0305' || tootip_data.pageId == 'SYS048MOD0306' || tootip_data.pageId == 'SYS048MOD0307') { //无tab页面
                        var top = $('.mainContent .chartBox').eq(0).offset().top;
                        $('.loading').css('top', top + 'px');
                    } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
                        var top = $('.titleCard').offset().top;
                        $('.loading').css('top', top + 'px');
                    } else {
                        $('.loading').css('top', tabTop + 'px');
                    }
                    break;
            }
            $('.loading').show();
            $('.loadBox').show();
            $('.errBox').hide();
        },
        success: function(msg) {
            isLogin(msg);
            IsSuccess = true;
            if (msg.Message == "Success") {
                lastDate = msg.Data.LastDate;
                minDate = msg.Data.minDate;
                $('.lastDate').text(lastDate);
                data = msg.Data;
                if (tootip_data.pageId == 'SYS048MOD0200302') { //区域销量分布
                    if (tootip_data.tabName == '销量分布') {
                        $('.mapData1').val(JSON.stringify(data));
                    } else if (tootip_data.tabName == '竞争表现') {
                        $('.mapData2').val(JSON.stringify(data));
                    }
                } else if (tootip_data.pageId == 'SYS048MOD0302') {
                    $('.mapData').val(JSON.stringify(data.ChartData));
                } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
                    $('.brandOrSerial').text(obj.carBrand ? obj.carBrand : obj.serialName);
                }
                if (showtable) {
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
                            showtable(tabData);
                        }
                    }
                }
                if (showchart) {
                    //用户分析和车型卡片、场景分析
                    if (tootip_data.pageId == 'SYS048MOD0301' || tootip_data.pageId == 'SYS048MOD0302' || tootip_data.pageId == 'SYS048MOD0303' || tootip_data.pageId == 'SYS048MOD0304' || tootip_data.pageId == 'SYS048MOD0305' || tootip_data.pageId == 'SYS048MOD0306' || tootip_data.pageId == 'SYS048MOD02004' || tootip_data.pageId == 'SYS048MOD0401' || tootip_data.pageId == 'SYS048MOD0402') {
                        var isNull = true;
                        if (data.ChartData) {
                            $(data.ChartData).each(function(index, item) {
                                if (item.Data.length > 0) {
                                    isNull = false;
                                }
                            });
                        }
                        if (!isNull) {
                            showLayer(false, tootip_data, 'noData');
                            showchart(data.ChartData, { QueryBeginDt: (data.QueryBeginDt == null) ? '' : data.QueryBeginDt, QueryEndDt: (data.QueryEndDt == null) ? '' : data.QueryEndDt });
                        } else {
                            showLayer(true, tootip_data, 'noData');
                        }
                    } else {
                        if (data.ChartData) {
                            if (Array.isArray(data.ChartData)) { //数组类型
                                if (data.ChartData.length > 0) {
                                    showLayer(false, tootip_data, 'noData');
                                    showchart(data.ChartData, { QueryBeginDt: (data.QueryBeginDt == null) ? '' : data.QueryBeginDt, QueryEndDt: (data.QueryEndDt == null) ? '' : data.QueryEndDt });
                                } else {
                                    showLayer(true, tootip_data, 'noData');
                                }
                            } else {
                                if (data.ChartData.X && data.ChartData.X.length > 0 || data.ChartData.Links && data.ChartData.Links.length > 0) {
                                    showLayer(false, tootip_data, 'noData');
                                    showchart(data.ChartData, { QueryBeginDt: (data.QueryBeginDt == null) ? '' : data.QueryBeginDt, QueryEndDt: (data.QueryEndDt == null) ? '' : data.QueryEndDt });
                                } else {
                                    showLayer(true, tootip_data, 'noData');
                                }
                            }
                        } else {
                            showLayer(true, tootip_data, 'noData');
                        }
                    }
                }


                if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
                    $('.pdf input').val(0);
                    var isNoData = false;
                    var data = msg.Data.ChartData;
                    $(data).each(function(index, item) {
                        if (item.Data.length == 0) {
                            showLayer(true, tootip_data, 'noData');
                            isNoData = true;
                        }
                    });

                    if(!isNoData){
                        if (data_obj.carBrand != '') { //品牌
                            // 指数
                            var obj_str1 = '?groupby=carbrand&carbrand=' + data_obj.carBrand + '&last=' + data_obj.last;
                            // 区域销量走分布
                            var obj_str2 = '?DistributionTypeEnum=Province&CarBrandOrSerialName=' + data_obj.carBrand + '&CompetitiveAreaEnum=CarBrand' + '&last=' + data_obj.last;
                            // 区域(大区)销量走势
                            var obj_str3 = '?AreaTypeEnum=CatarcArea&CompetitiveAreaEnum=CarBrand&CarBrandOrSerialName=' + data_obj.carBrand + '&last=' + data_obj.last;
                            // 区域(城市)销量走势
                            var obj_str4 = '?AreaTypeEnum=CatarcCityLevel&CompetitiveAreaEnum=CarBrand&CarBrandOrSerialName=' + data_obj.carBrand + '&last=' + data_obj.last;
                            // 竞争表现
                            var obj_str5 = '?DistributionTypeEnum=Province&CompetitiveAreaEnum=CarBrand&CarBrandOrSerialName=' + data_obj.carBrand + '&last=' + data_obj.last;
                        } else if (data_obj.serialName != '') { //车型
                            var obj_str1 = '?groupby=serialname&serialname=' + data_obj.serialName + '&last=' + data_obj.last;
                            var obj_str2 = '?DistributionTypeEnum=Province&CarBrandOrSerialName=' + data_obj.serialName + '&CompetitiveAreaEnum=SerialName' + '&last=' + data_obj.last;
                            var obj_str3 = '?AreaTypeEnum=CatarcArea&CompetitiveAreaEnum=SerialName&CarBrandOrSerialName=' + data_obj.serialName + '&last=' + data_obj.last;
                            var obj_str4 = '?AreaTypeEnum=CatarcCityLevel&CompetitiveAreaEnum=SerialName&CarBrandOrSerialName=' + data_obj.serialName + '&last=' + data_obj.last;
                            var obj_str5 = '?DistributionTypeEnum=Province&CompetitiveAreaEnum=SerialName&CarBrandOrSerialName=' + data_obj.serialName + '&last=' + data_obj.last;
                            // 核心竞品/竞争关系/竞争重合
                            var obj_str6 = '?SerialName=' + data_obj.serialName + '&last=' + data_obj.last;
                        }
                        if (obj.serialName != '') {
                            // 竞品接口
                            $.ajax({
                                url: urlObj.competitivePrimary + obj_str6,
                                type: "get",
                                // data: obj,
                                dataType: 'json',
                                processData: false,
                                xhrFields: {
                                    withCredentials: true
                                },
                                beforeSend: function() {
                                    $('#competeRelation1').siblings('.chartLoading').show();
                                    $('#competeRelation1').siblings('.chartLoading').find('.loadingBox').show();
                                    $('#competeRelation1').siblings('.chartLoading').find('.noDataBox').hide();
                                    $('#competeRelation1').siblings('.chartLoading').find('.errorBox').hide();
                                },
                                success: function(msg) {
                                    var n = parseInt($('.pdf input').val());
                                    n++;
                                    $('.pdf input').val(n);
                                    var titleTime = {
                                        QueryBeginDt: msg.Data.QueryBeginDt,
                                        QueryEndDt: msg.Data.QueryEndDt
                                    }
                                    if (msg.Data.ChartData.Links.length > 0) {
                                        $('#competeRelation1').siblings('.chartLoading').hide();
                                        judegPage(msg.Data.ChartData, titleTime, 'relationDiagram');
                                    } else {
                                        $('#competeRelation1').siblings('.chartLoading').show();
                                        $('#competeRelation1').siblings('.chartLoading').find('.loadingBox').hide();
                                        $('#competeRelation1').siblings('.chartLoading').find('.noDataBox').show();
                                        $('#competeRelation1').siblings('.chartLoading').find('.errorBox').hide();
                                    }
                                },
                                error: function() {
                                    $('#competeRelation1').siblings('.chartLoading').show();
                                    $('#competeRelation1').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#competeRelation1').siblings('.chartLoading').find('.errorBox').show();
                                    $('#competeRelation1').siblings('.chartLoading').find('.noDataBox').hide();
                                }
                            });
                            // 竞争关系
                            $.ajax({
                                url: urlObj.competitiveRelation + obj_str6,
                                type: "get",
                                // data: obj,
                                dataType: 'json',
                                processData: false,
                                xhrFields: {
                                    withCredentials: true
                                },
                                beforeSend: function() {
                                    $('#competePattern').siblings('.chartLoading').show();
                                    $('#competePattern').siblings('.chartLoading').find('.loadingBox').show();
                                    $('#competePattern').siblings('.chartLoading').find('.noDataBox').hide();
                                    $('#competePattern').siblings('.chartLoading').find('.errorBox').hide();
                                },
                                success: function(msg) {
                                    var n = parseInt($('.pdf input').val());
                                    n++;
                                    $('.pdf input').val(n);
                                    var titleTime = {
                                        QueryBeginDt: msg.Data.QueryBeginDt,
                                        QueryEndDt: msg.Data.QueryEndDt
                                    }
                                    if (msg.Data.ChartData.length > 0) {
                                        $('#competePattern').siblings('.chartLoading').hide();
                                        judegPage(msg.Data.ChartData, titleTime, 'splashesDiagram', 'competePattern');
                                    } else {
                                        $('#competePattern').siblings('.chartLoading').show();
                                        $('#competePattern').siblings('.chartLoading').find('.loadingBox').hide();
                                        $('#competePattern').siblings('.chartLoading').find('.errorBox').hide();
                                        $('#competePattern').siblings('.chartLoading').find('.noDataBox').show();
                                    }
                                },
                                error: function() {
                                    $('#competePattern').siblings('.chartLoading').show();
                                    $('#competePattern').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#competePattern').siblings('.chartLoading').find('.errorBox').show();
                                    $('#competePattern').siblings('.chartLoading').find('.noDataBox').hide();
                                }
                            });
                            // 竞争重合
                            $.ajax({
                                url: urlObj.competitiveSuperpose + obj_str6,
                                type: "get",
                                // data: obj,
                                dataType: 'json',
                                processData: false,
                                xhrFields: {
                                    withCredentials: true
                                },
                                beforeSend: function() {
                                    $('#competePatternDou').siblings('.chartLoading').show();
                                    $('#competePatternDou').siblings('.chartLoading').find('.loadingBox').show();
                                    $('#competePatternDou').siblings('.chartLoading').find('.noDataBox').hide();
                                    $('#competePatternDou').siblings('.chartLoading').find('.errorBox').hide();
                                },
                                success: function(msg) {
                                    var n = parseInt($('.pdf input').val());
                                    n++;
                                    $('.pdf input').val(n);
                                    var titleTime = {
                                        QueryBeginDt: msg.Data.QueryBeginDt,
                                        QueryEndDt: msg.Data.QueryEndDt
                                    }
                                    if (msg.Data.ChartData.length > 0) {
                                        $('#competePatternDou').siblings('.chartLoading').hide();
                                        judegPage(msg.Data.ChartData, titleTime, 'splashesDiagram', 'competePatternDou');
                                    } else {
                                        $('#competePatternDou').siblings('.chartLoading').show();
                                        $('#competePatternDou').siblings('.chartLoading').find('.loadingBox').hide();
                                        $('#competePatternDou').siblings('.chartLoading').find('.errorBox').hide();
                                        $('#competePatternDou').siblings('.chartLoading').find('.noDataBox').show();
                                    }
                                },
                                error: function() {
                                    $('#competePatternDou').siblings('.chartLoading').show();
                                    $('#competePatternDou').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#competePatternDou').siblings('.chartLoading').find('.errorBox').show();
                                    $('#competePatternDou').siblings('.chartLoading').find('.noDataBox').hide();
                                }
                            });
                        }

                        // 指数走势
                        // 关注
                        $.ajax({
                            url: urlObj.indextrendAttention + obj_str1,
                            type: "get",
                            // data: obj,
                            dataType: 'json',
                            processData: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            beforeSend: function() {
                                $('#attentionTrend').siblings('.chartLoading').show();
                                $('#attentionTrend').siblings('.chartLoading').find('.loadingBox').show();
                                $('#attentionTrend').siblings('.chartLoading').find('.noDataBox').hide();
                                $('#attentionTrend').siblings('.chartLoading').find('.errorBox').hide();
                            },
                            success: function(msg) {
                                var n = parseInt($('.pdf input').val());
                                n++;
                                $('.pdf input').val(n);
                                var titleTime = {
                                    QueryBeginDt: msg.Data.QueryBeginDt,
                                    QueryEndDt: msg.Data.QueryEndDt
                                }
                                if (msg.Data.ChartData.X.length > 0) {
                                    $('#attentionTrend').siblings('.chartLoading').hide();
                                    judegPage(msg.Data.ChartData, titleTime, 'lines', 'attentionTrend');
                                } else {
                                    $('#attentionTrend').siblings('.chartLoading').show();
                                    $('#attentionTrend').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#attentionTrend').siblings('.chartLoading').find('.errorBox').hide();
                                    $('#attentionTrend').siblings('.chartLoading').find('.noDataBox').show();
                                }
                            },
                            error: function() {
                                $('#attentionTrend').siblings('.chartLoading').show();
                                $('#attentionTrend').siblings('.chartLoading').find('.loadingBox').hide();
                                $('#attentionTrend').siblings('.chartLoading').find('.errorBox').show();
                                $('#attentionTrend').siblings('.chartLoading').find('.noDataBox').hide();
                            }
                        });
                        // 预购
                        $.ajax({
                            url: urlObj.indextrendLeads + obj_str1,
                            type: "get",
                            // data: obj,
                            dataType: 'json',
                            processData: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            beforeSend: function() {
                                $('#purchaseTrend').siblings('.chartLoading').show();
                                $('#purchaseTrend').siblings('.chartLoading').find('.loadingBox').show();
                                $('#purchaseTrend').siblings('.chartLoading').find('.noDataBox').hide();
                                $('#purchaseTrend').siblings('.chartLoading').find('.errorBox').hide();
                            },
                            success: function(msg) {
                                var n = parseInt($('.pdf input').val());
                                n++;
                                $('.pdf input').val(n);
                                var titleTime = {
                                    QueryBeginDt: msg.Data.QueryBeginDt,
                                    QueryEndDt: msg.Data.QueryEndDt
                                }
                                if (msg.Data.ChartData.X.length > 0) {
                                    $('#purchaseTrend').siblings('.chartLoading').hide();
                                    judegPage(msg.Data.ChartData, titleTime, 'lines', 'purchaseTrend');
                                } else {
                                    $('#purchaseTrend').siblings('.chartLoading').show();
                                    $('#purchaseTrend').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#purchaseTrend').siblings('.chartLoading').find('.errorBox').hide();
                                    $('#purchaseTrend').siblings('.chartLoading').find('.noDataBox').show();
                                }
                            },
                            error: function() {
                                $('#purchaseTrend').siblings('.chartLoading').show();
                                $('#purchaseTrend').siblings('.chartLoading').find('.loadingBox').hide();
                                $('#purchaseTrend').siblings('.chartLoading').find('.errorBox').show();
                                $('#purchaseTrend').siblings('.chartLoading').find('.noDataBox').hide();
                            }
                        });
                        // 销量
                        $.ajax({
                            url: urlObj.indextrendSalevol + obj_str1,
                            type: "get",
                            // data: obj,
                            dataType: 'json',
                            processData: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            beforeSend: function() {
                                $('#salesTrend').siblings('.chartLoading').show();
                                $('#salesTrend').siblings('.chartLoading').find('.loadingBox').show();
                                $('#salesTrend').siblings('.chartLoading').find('.noDataBox').hide();
                                $('#salesTrend').siblings('.chartLoading').find('.errorBox').hide();
                            },
                            success: function(msg) {
                                var n = parseInt($('.pdf input').val());
                                n++;
                                $('.pdf input').val(n);
                                var titleTime = {
                                    QueryBeginDt: msg.Data.QueryBeginDt,
                                    QueryEndDt: msg.Data.QueryEndDt
                                }
                                if (msg.Data.ChartData.X.length > 0) {
                                    $('#salesTrend').siblings('.chartLoading').hide();
                                    judegPage(msg.Data.ChartData, titleTime, 'lines', 'salesTrend');
                                } else {
                                    $('#salesTrend').siblings('.chartLoading').show();
                                    $('#salesTrend').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#salesTrend').siblings('.chartLoading').find('.errorBox').hide();
                                    $('#salesTrend').siblings('.chartLoading').find('.noDataBox').show();
                                }
                            },
                            error: function() {
                                $('#salesTrend').siblings('.chartLoading').show();
                                $('#salesTrend').siblings('.chartLoading').find('.loadingBox').hide();
                                $('#salesTrend').siblings('.chartLoading').find('.errorBox').show();
                                $('#salesTrend').siblings('.chartLoading').find('.noDataBox').hide();
                            }
                        });
                        // 区域销量分布
                        $.ajax({
                            url: urlObj.AreaAnalysisDis + obj_str2,
                            type: "get",
                            // data: obj,
                            dataType: 'json',
                            processData: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            beforeSend: function() {
                                $('.distribute .chart1').siblings('.chartLoading').show();
                                $('.distribute .chart1').siblings('.chartLoading').find('.loadingBox').show();
                                $('.distribute .chart1').siblings('.chartLoading').find('.noDataBox').hide();
                                $('.distribute .chart1').siblings('.chartLoading').find('.errorBox').hide();
                            },
                            success: function(msg) {
                                var n = parseInt($('.pdf input').val());
                                n++;
                                $('.pdf input').val(n);
                                $('.mapData1').val(JSON.stringify(msg.Data));
                                var titleTime = {
                                    QueryBeginDt: msg.Data.QueryBeginDt,
                                    QueryEndDt: msg.Data.QueryEndDt,
                                    obj: {
                                        regionDistribution: data_obj.carBrand ? data_obj.carBrand : data_obj.serialName,
                                        tabName: '销量'
                                    }
                                }
                                if (msg.Data.ChartData && msg.Data.ChartData.length > 0) {
                                    $('.mapData1').val(JSON.stringify(msg.Data));
                                    $('.distribute .chart1').siblings('.chartLoading').hide();
                                    judegPage(msg.Data.ChartData, titleTime, 'regionMap', 'distribute');
                                } else {
                                    $('.distribute .chart1').siblings('.chartLoading').show();
                                    $('.distribute .chart1').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('.distribute .chart1').siblings('.chartLoading').find('.errorBox').hide();
                                    $('.distribute .chart1').siblings('.chartLoading').find('.noDataBox').show();
                                }
                            },
                            error: function() {
                                $('.distribute .chart1').siblings('.chartLoading').show();
                                $('.distribute .chart1').siblings('.chartLoading').find('.loadingBox').hide();
                                $('.distribute .chart1').siblings('.chartLoading').find('.errorBox').show();
                                $('.distribute .chart1').siblings('.chartLoading').find('.noDataBox').hide();
                            }
                        });
                        // 区域（大区）销量走势
                        $.ajax({
                            url: urlObj.AreaAnalysisTrend + obj_str3,
                            type: "get",
                            // data: obj,
                            dataType: 'json',
                            processData: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            beforeSend: function() {
                                $('#areaRatio').siblings('.chartLoading').show();
                                $('#areaRatio').siblings('.chartLoading').find('.loadingBox').show();
                                $('#areaRatio').siblings('.chartLoading').find('.errorBox').hide();
                                $('#areaRatio').siblings('.chartLoading').find('.noDataBox').hide();
                            },
                            success: function(msg) {
                                var n = parseInt($('.pdf input').val());
                                n++;
                                $('.pdf input').val(n);
                                var titleTime = {
                                    QueryBeginDt: msg.Data.QueryBeginDt,
                                    QueryEndDt: msg.Data.QueryEndDt
                                }
                                if (msg.Data.ChartData.X.length > 0) {
                                    $('#areaRatio').siblings('.chartLoading').hide();
                                    judegPage(msg.Data.ChartData, titleTime, 'overlayBar', 'areaRatio');
                                } else {
                                    $('#areaRatio').siblings('.chartLoading').show();
                                    $('#areaRatio').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#areaRatio').siblings('.chartLoading').find('.errorBox').hide();
                                    $('#areaRatio').siblings('.chartLoading').find('.noDataBox').show();
                                }
                            },
                            error: function() {
                                $('#areaRatio').siblings('.chartLoading').show();
                                $('#areaRatio').siblings('.chartLoading').find('.loadingBox').hide();
                                $('#areaRatio').siblings('.chartLoading').find('.errorBox').show();
                                $('#areaRatio').siblings('.chartLoading').find('.noDataBox').hide();
                            }
                        });
                        // 区域（城市）销量走势
                        $.ajax({
                            url: urlObj.AreaAnalysisTrend + obj_str4,
                            type: "get",
                            // data: obj,
                            dataType: 'json',
                            processData: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            beforeSend: function() {
                                $('#cityRatio').siblings('.chartLoading').show();
                                $('#cityRatio').siblings('.chartLoading').find('.loadingBox').show();
                                $('#cityRatio').siblings('.chartLoading').find('.errorBox').hide();
                                $('#cityRatio').siblings('.chartLoading').find('.noDataBox').hide();
                            },
                            success: function(msg) {
                                var n = parseInt($('.pdf input').val());
                                n++;
                                $('.pdf input').val(n);
                                var titleTime = {
                                    QueryBeginDt: msg.Data.QueryBeginDt,
                                    QueryEndDt: msg.Data.QueryEndDt
                                }
                                if (msg.Data.ChartData.X.length > 0) {
                                    $('#cityRatio').siblings('.chartLoading').hide();
                                    judegPage(msg.Data.ChartData, titleTime, 'overlayBar', 'cityRatio');
                                } else {
                                    $('#cityRatio').siblings('.chartLoading').show();
                                    $('#cityRatio').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('#cityRatio').siblings('.chartLoading').find('.errorBox').hide();
                                    $('#cityRatio').siblings('.chartLoading').find('.noDataBox').show();
                                }
                            },
                            error: function() {
                                $('#cityRatio').siblings('.chartLoading').show();
                                $('#cityRatio').siblings('.chartLoading').find('.loadingBox').hide();
                                $('#cityRatio').siblings('.chartLoading').find('.errorBox').show();
                                $('#cityRatio').siblings('.chartLoading').find('.noDataBox').hide();
                            }
                        });
                        // 竞争表现
                        $.ajax({
                            url: urlObj.AreaAnalysisComp + obj_str5,
                            type: "get",
                            // data: obj,
                            dataType: 'json',
                            processData: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            beforeSend: function() {
                                $('.performance .chart3').siblings('.chartLoading').show();
                                $('.performance .chart3').siblings('.chartLoading').find('.loadingBox').show();
                                $('.performance .chart3').siblings('.chartLoading').find('.errorBox').hide();
                                $('.performance .chart3').siblings('.chartLoading').find('.noDataBox').hide();
                            },
                            success: function(msg) {
                                var n = parseInt($('.pdf input').val());
                                n++;
                                $('.pdf input').val(n);
                                var titleTime = {
                                    QueryBeginDt: msg.Data.QueryBeginDt,
                                    QueryEndDt: msg.Data.QueryEndDt,
                                    obj: {
                                        regionDistribution: data_obj.carBrand ? data_obj.carBrand : data_obj.serialName,
                                        tabName: '竞争表现'
                                    }
                                }
                                if (msg.Data.ChartData.length > 0) {
                                    $('.mapData2').val(JSON.stringify(msg.Data));
                                    $('.performance .chart3').siblings('.chartLoading').hide();
                                    judegPage(msg.Data.ChartData, titleTime, 'regionMap', 'performance');
                                } else {
                                    $('.performance .chart3').siblings('.chartLoading').show();
                                    $('.performance .chart3').siblings('.chartLoading').find('.loadingBox').hide();
                                    $('.performance .chart3').siblings('.chartLoading').find('.errorBox').hide();
                                    $('.performance .chart3').siblings('.chartLoading').find('.noDataBox').show();
                                }
                            },
                            error: function() {
                                $('.performance .chart3').siblings('.chartLoading').show();
                                $('.performance .chart3').siblings('.chartLoading').find('.loadingBox').hide();
                                $('.performance .chart3').siblings('.chartLoading').find('.errorBox').show();
                                $('.performance .chart3').siblings('.chartLoading').find('.noDataBox').hide();
                            }
                        });
                    }
                }
            }
        },
        error: function(msg) {
            if(msg.statusText == 'abort'){
            }else{
                IsSuccess = true;
                showLayer(true, tootip_data, 'error'); 
            }
            
        }
    });
    $('.loading .reload').off('click');
    $('.loading .reload').on('click', function() {
        var pageId = tootip_data.pageId;
        $('.sideBar a').each(function(index, item) {
            if ($(item).attr('module-id') == pageId) {
                $(item).click();
            }
        });
    });
}
/* 获取页面详情函数
 * @obj    查询条件
 * @showchart: 柱线图显示函数
 * @showtable: 表格显示函数，不刷新传0，
 * @tootip_data  页面信息参数
 * @loadType  加载方式 1：点击名称加载  2：点击一级tab加载  3：点击查询条件加载
 */
function getDetailData(obj, showchart, showtable, tootip_data, loadType) {
    IsSuccess = false;
    var contentTop = $('.detailContent').offset().top + $('.detailContent .chartHeader').height();
    if ($('.tabMenu').length) {
        var tabTop = $('.detailContent .tabMenu').offset().top + $('.tabMenu').height();
    }
    if ($('.subMenu').length) {
        var subtabTop = $('.detailContent .subMenu').offset().top + $('.subMenu').height();
    }
    $.ajax({
        url: urlObj.EachIndex,
        type: "get",
        data: obj,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function() {
            $('body,html').scrollTop(0);
            if ($(window).width() <= 1366) {
                $('.loading').css('right', '36px');
            }
            switch (loadType) {
                case 1: //1：点击名称加载
                    $('.loading').css('top', contentTop + 'px');
                    break;
                case 2: //2：点击一级tab加载
                    $('.loading').css('top', tabTop + 'px');
                    break;
                case 3: //3：点击查询条件加载
                    $('.loading').css('top', tabTop + 'px');
                    break;

            }
            $('body').css('overflow-y', 'hidden');
            $('.loading').show();
            $('.loadBox').show();
            $('.errBox').hide();
        },
        success: function(msg) {
            isLogin(msg);
            IsSuccess = true;
            if (msg.Message == "Success") {
                lastDate = msg.Data.LastDate;
                minDate = msg.Data.minDate;
                $('.lastDate').text(lastDate);
                data = msg.Data;
                if (showtable) {
                    if (data.TableData && data.TableData.Count > 0) {
                        showtable(data.TableData);
                        showLayer(false, tootip_data, 'noData');
                    } else {
                        showLayer(true, tootip_data, 'noData');
                    }
                }
                if (showchart) {
                    showchart(data.ChartData, { QueryBeginDt: (data.QueryBeginDt == null) ? '' : data.QueryBeginDt, QueryEndDt: (data.QueryEndDt == null) ? '' : data.QueryEndDt });
                }
            }
        },
        error: function() {
            IsSuccess = true;
            showLayer(true, tootip_data, 'error');
        }
    });
    $('.loading .reload').off('click');
    $('.loading .reload').on('click', function() {
        window.location.reload();
    });
}
/* 获取地图详情函数
 * @obj    查询条件
 * @showchart: 柱线图显示函数
 * @showtable: 表格显示函数，不刷新传0，
 * @tootip_data  页面信息参数
 * @loadType  加载方式 4
 */
function getMapDetail(option, obj, showchart, showtable, tootip_data, loadType, titleTime, Type) {
    IsSuccess = false;
    var url;
    if (tootip_data.pageId == 'SYS048MOD0200302') { //区域销量分布
        switch (tootip_data.tabName) {
            case "销量分布":
                url = urlObj.AreaAnalysisDis;
                break;
            case "竞争表现":
                url = urlObj.AreaAnalysisComp;
                break;
        }
        var str = '?';
        for (var n in obj) {
            str += n + '=' + obj[n] + '&';
        }
        str = str.substring(0, str.length - 1);
    } else if (tootip_data.pageId == 'SYS048MOD02004') { //车型卡片
        if (Type == 'distribute') {
            url = urlObj.AreaAnalysisDis;
        } else if (Type == 'performance') {
            url = urlObj.AreaAnalysisComp;
        }

        if (obj.carBrand) {
            str = '?last=' + obj.last + '&DistributionTypeEnum=City&CompetitiveAreaEnum=CarBrand&CarBrandOrSerialName=' + obj.carBrand + '&provinceName=' + obj.provinceName
        } else {
            str = '?last=' + obj.last + '&DistributionTypeEnum=City&CompetitiveAreaEnum=SerialName&CarBrandOrSerialName=' + obj.serialName + '&provinceName=' + obj.provinceName
        }

    }

    var contentTop = $('.mainContent').offset().top;
    if ($('.tabMenu').length) {
        var tabTop = $('.tabMenu').offset().top + $('.tabMenu').height();
    }
    if ($('.subMenu').length) {
        var subtabTop = $('.subMenu').offset().top + $('.subMenu').height();
    }

    $.ajax({
        url: url + str,
        type: "get",
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function() {
            $('body').css('overflow-y', 'hidden');
            switch (loadType) {
                case 1: //1：切换页面加载
                    $('.loading').css('top', contentTop + 'px');
                    break;
                case 2: //2：点击一级tab加载
                    $('.loading').css('top', tabTop + 'px');
                    break;
                case 3: //3：点击二级tab加载
                    $('.loading').css('top', subtabTop + 'px');
                    break;
                case 4: //4：点击查询条件加载
                    $('.loading').css('top', tabTop + 'px');
                    break;

            }
            if (tootip_data.pageId != 'SYS048MOD02004') {
                $('.loading').show();
                $('.loadBox').show();
                $('.errBox').hide();
            }

        },
        success: function(msg) {
            isLogin(msg);
            IsSuccess = true;
            if (msg.Message == "Success") {
                lastDate = msg.Data.LastDate;
                minDate = msg.Data.minDate;
                $('.lastDate').text(lastDate);
                $('body').css('overflow-y', 'auto');
                $('.loading').hide();
                $('.loadBox').hide();
                $('.errBox').hide();
                data = msg.Data;
                regionMapDetail(option, data, tootip_data, titleTime, Type);
                if (showtable) {
                    data = data.TableData;
                    var tabData = {
                        Header: [],
                        Values: []
                    }
                    if (data.Header) {
                        tabData.Header = data.Header;
                        tabData.Values = data.Values;
                        tabData.Count = data.Count ? data.Count : tabData.Values.length;
                    } else {
                        tabData.Header = data[0];
                        tabData.Values = data.slice(1, data.length - 1);
                        tabData.Count = data.Count ? data.Count : tabData.Values.length;
                    }
                    showtable(tabData,msg.Data.Situation);
                }
            }
        },
        error: function() {
            IsSuccess = true;
            $('loading .info').text("数据加载出错了，请重新尝试一下吧");
            $('body').css('overflow-y', 'hidden');
            $('.loading').show();
            $('.loadBox').hide();
            $('.errBox').show();
        }
    });
    $('.loading .reload').off('click');
    $('.loading .reload').on('click', function() {
        var pageId = tootip_data.pageId;
        $('.sideBar a').each(function(index, item) {
            if ($(item).attr('module-id') == pageId) {
                $(item).click();
            }
        });
    });
}

/* 渲染表格函数
 * @data    表格数据
 * @currPage: 当前页码
 * @pageSize: 每页数据数，
 * @表格类型：main  主页面，detail 详情页
 */
function drawTable(data,Situation) {
    if (data) {
        tootip_data = JSON.parse($('.tootip_data').val());
        if ($('.mainContent').is(':visible')) { //主页面
            if (tootip_data.pageId == 'SYS048MOD0200302') { //区域销量分布
                if (tootip_data.tabName == '竞争表现') {
                    var situation;
                    if(Situation){
                        situation = Situation;
                    }else{
                        situation = JSON.parse($('.mapData2').val()).Situation;
                    }
                    var situationInfo = situation.Name.split(',');
                    var arrItem = [ situation.RankingNum, situationInfo[0],situation.Sales];
                    data.Header[0] = situationInfo[2] + '-' + situationInfo[1]+ '排名';
                    data.Header[1] = '品牌名称';
                    data.Header[2] = '销量(辆)';
                    if(situation.RankingNum!=1){
                        data.Values.unshift(arrItem);
                    }
                }
            }
            tablePage(data, 1, 20, "main");
            //分页
            var counts = data.Count;
            $('#pageContainer1').pagination(
                counts, {
                    items_per_page: 20,
                    callback: function(currPage, jg) {
                        PageIndex = currPage;
                        tablePage(data, currPage, 20, "main");
                    }
                });
        } else { //详情页
            tablePage(data, 1, 20, "detail");
            //分页
            var counts = data.Count;
            $('#pageContainer2').pagination(
                counts, {
                    items_per_page: 20,
                    callback: function(currPage, jg) {
                        tablePage(data, currPage, 20, "detail");
                    }
                });
        }
    }
}

function tablePage(data, currPage, pageSize, type) {
    var tootip_data = JSON.parse($('.tootip_data').val());
    var start = (currPage - 1) * pageSize;
    var end = currPage * pageSize;

    var values = (data.Values).slice(start, end);
    if (type == "main") {
        var tpl = $('#tableTpl').html();
        if (tpl) {
            if (data.Count) {
                $('.mainContent .num').text(data.Count);
            } else {
                $('.mainContent .num').text(values.length);
            }
            var content = juicer(tpl, { values: values });
            $('.mainContent .listContent').html(content);
        }
        var h_tpl = $('#tableHeaderTpl').html();
        if (h_tpl) {
            var content = juicer(h_tpl, data);
            $('.mainContent .tableHeader').html(content);
        }
        if(tootip_data.pageId == 'SYS048MOD0200302' && tootip_data.tabName == '竞争表现'){
                $('.listContent tr').eq(0).find('td').css('color','#2f77f8');
        }
        var table_left = $('#tableLeft').html();
        if (table_left) {
            var content = juicer(table_left, { Header: data.Header, Values: values });
            $('.mainContent .tableLeft').html(content);
            // 计算表格宽度
            var len = values[0].length;
            var every_len = len > 8 ? 8 : len;
            var td_width = Math.floor($('.tableBox').width() / every_len);
            var table_height = 56 + values.length * 53;
            var table_left = $('.tableHeader')[0].offsetLeft;
            var main_width = $('.tableBox').width();
            $('.barBtn').width(barBtn_width);
            $('.mainContent .tableLeft').width(td_width);
            $('.mainContent .tableRight').height(table_height);
            $('.mainContent .tableRight .tableHeader').width(td_width * len);
            $('.mainContent .tableRight .listContent').width(td_width * len);
            $('.mainContent .tableRight').width(td_width * len);
            $('.mainContent .tableRight .th').width(td_width);
            $('.mainContent .tableRight .td').width(td_width);

            if (main_width >= 1574) {
                $('.bar').width(main_width - 17);
            } else {
                $('.bar').width(main_width);
            }
            var barBtn_width = $('.bar').width() * $('.bar').width() / $('.mainContent .tableRight .tableHeader').width();
            $('.barBtn').width(barBtn_width);
            if ($('.mainContent .tableHeader span').length <= 8) {
                $('.bar').hide();
            } else {
                $('.bar').show();
            }
            $(window).resize(function() {
                // 计算表格宽度
                if ($('#tableLeft').length == 0) {
                    return;
                }
                var len = values[0].length;
                var every_len = len > 8 ? 8 : len;
                var td_width = Math.floor($('.tableBox').width() / every_len);
                $('.mainContent .tableLeft').width(td_width);
                $('.mainContent .tableRight .tableHeader').width(td_width * len);
                $('.mainContent .tableRight .listContent').width(td_width * len);
                $('.mainContent .tableRight').width(td_width * len);
                $('.mainContent .tableRight .th').width(td_width);
                $('.mainContent .tableRight .td').width(td_width);
                var table_left = $('.tableHeader')[0].offsetLeft;
                var table_width = $('.mainContent .tableHeader').width();
                var main_width = $('.tableBox').width();
                if (main_width >= 1574) {
                    $('.bar').width(main_width - 17);
                } else {
                    $('.bar').width(main_width);
                }
                var barBtn_width = $('.bar').width() * $('.bar').width() / $('.mainContent .tableRight .tableHeader').width();
                $('.barBtn').width(barBtn_width);
                $('.barBtn').css('left', 0);
                $('.listContent').css('left', 0);
                $('.listContent').css('left', 0);

                if ($('.mainContent .tableHeader span').length <= 8) {
                    $('.bar').hide();
                } else {
                    $('.bar').show();
                }
            })
        }
    } else if (type == "detail") {
        var tpl = $('#detailTableTpl').html();
        if (tpl) {
            if (data.Count) {
                $('.detailContent .num').text(data.Count);
            } else {
                $('.detailContent .num').text(values.length);
            }
            var content = juicer(tpl, { values: values });
            $('.detailContent .listContent').html(content);
        }
        var h_tpl = $('#tableHeaderTpl').html();
        if (h_tpl) {
            var content = juicer(h_tpl, data);
            $('.detailContent .tableHeader').html(content);
        }
    }
}

function showLayer(flag, tootip_data, txt) {
    if (flag) {
        if (txt && txt == 'noData') {
            $('.loading .errBox .info').text('暂无数据，换个条件试试吧！');
        } else if (txt && txt == 'noSelect') {
            $('.loading .info').text("没有找到对应的品牌车型，请重新输入！");
        } else if (txt && txt == 'error') {
            $('.loading .info').text("数据加载出错了，请重新尝试一下吧！");
        } else if (txt && txt == 'noAuthor') {
            $('.loading .info').text('您还没有数据权限，请联系管理员配置！');
        }

        if ($('.chartHeader').length) {
            if ($('.detailContent').css('display') == 'block') {
                var contentTop = $('.detailContent').offset().top + $('.chartHeader').height();
            } else {
                var contentTop = $('.mainContent').offset().top + $('.chartHeader').height();
            }
        } else {
            var contentTop = $('.mainContent').offset().top;
        }
        switch (tootip_data.pageId) {
            case 'SYS048MOD02004':
                $('.loading').css('top', $('.titleCard').offset().top + 'px');
                break;
            default:
                $('.loading').css('top', contentTop + 'px');
                break;
        }


        $('.closeDate').hide();
        $('body').css('overflow-y', 'hidden');
        $('.loading').show();
        $('.loadBox').hide();
        $('.errBox').show();
        if (txt == 'error') {
            $('.loading .errBox img').attr('src', 'images/reload.png');
            $('.loading .errBox .reload').show();
        } else {
            $('.loading .errBox img').attr('src', 'images/no_data.png');
            $('.loading .errBox .reload').hide();
        }
        $('body,html').scrollTop(0);
    } else {
        $('.closeDate').show();
        $('body').css('overflow-y', 'auto');
        $('.loading').hide();
        $('.loadBox').hide();
        $('.errBox').hide();
        $('body,html').scrollTop(0);
    }
}
// 渲染品牌车型下拉框
function renderSelect(tootip_data) {
    if (tootip_data.pageId == 'SYS048MOD02002') { //竞争关系只有车型
        var allCarType = [];
        $.ajax({
            type: 'get',
            url: urlObj.getAllCarType,
            xhrFields: {
                withCredentials: true
            },
            async: false,
            success: function(res) {
                isLogin(res);
                if (res.Message == 'Success') {
                    allCarType = res.Data.Brand;
                    $('.queryInput').attr('data-model', JSON.stringify(allCarType));
                    var tpl = $('#carAndBrand').html();
                    var content = juicer(tpl, { brandList: allCarType, type: 2 });
                    $('.brandList').html(content);
                    var li_height = $('.brandList').find('li').outerHeight(true);
                    var boxHeight = $('.brandList li').length * li_height > 160 ? 160 : $('.brandList li').length * li_height;
                    var boxWidth = $('.queryInput').parent('.selectBox').width();
                    $('.brandList').slimScroll({ height: boxHeight + 'px', width: boxWidth + 'px' });
                    $('.queryInput').val($('.brandList li').eq(0).text());
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        data_obj.SerialName = $('.queryInput').val();
        $('.data_obj').val(JSON.stringify(data_obj));

        if (allCarType.length == 0) {
            showLayer(true, tootip_data, 'noAuthor');
        } else {
            getData(data_obj, judegPage, drawTable, tootip_data, 1);
        }
    } else {
        //请求品牌
        var allBrand = [];
        $.ajax({
            type: 'get',
            url: urlObj.getAllBrand,
            xhrFields: {
                withCredentials: true
            },
            async: false,
            success: function(res) {
                isLogin(res);
                if (res.Message == 'Success') {
                    allBrand = res.Data.Brand;
                    $('.queryInput').attr('data-brand', JSON.stringify(allBrand));
                    var tpl = $('#carAndBrand').html();
                    var content = juicer(tpl, { brandList: allBrand });
                    $('.brandList').html(content);
                    var li_height = $('.brandList').find('li').outerHeight(true);
                    var boxHeight = $('.brandList li').length * li_height > 160 ? 160 : $('.brandList li').length * li_height;
                    var boxWidth = $('.queryInput').parent('.selectBox').width();
                    $('.brandList').slimScroll({ height: boxHeight + 'px', width: boxWidth + 'px' });
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
        //请求车型
        var allCarType = [];
        $.ajax({
            type: 'get',
            url: urlObj.getAllCarType,
            xhrFields: {
                withCredentials: true
            },
            async: false,
            success: function(res) {
                isLogin(res);
                if (res.Message == 'Success') {
                    allCarType = res.Data.Brand;
                    $('.queryInput').attr('data-model', JSON.stringify(allCarType));
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
        $('.queryInput').val($('.brandList li').eq(0).text());
        var data_obj = JSON.parse($('.data_obj').val());
        var tootip_data = JSON.parse($('.tootip_data').val());
        switch (tootip_data.pageId) {
            case 'SYS048MOD02001': //指数走势
                data_obj.groupby = 'carbrand';
                data_obj.carbrand = $('.queryInput').val();
                break;
            case 'SYS048MOD0200301': //区域销量走势
                data_obj.CompetitiveAreaEnum = 'CarBrand';
                data_obj.CarBrandOrSerialName = $('.queryInput').val();
                break;
            case 'SYS048MOD0200302':
                data_obj.CompetitiveAreaEnum = 'CarBrand';
                data_obj.CarBrandOrSerialName = $('.queryInput').val();
                break;
            case 'SYS048MOD02004': //车型卡片
                data_obj.carBrand = $('.carOrBrandOfCard').val();
                break;
            default: //用户分析
                data_obj.carBrand = $('.queryInput').val();
                break;
        }
        $('.data_obj').val(JSON.stringify(data_obj));
        if (allBrand.length == 0) {
            showLayer(true, tootip_data, 'noAuthor');
        } else {
            getData(data_obj, judegPage, drawTable, tootip_data, 1);
        }
    }
}

// 验证是否登录

function isLogin(msg){
    if(msg.Status == 401 || msg.Message == '身份验证失败'){
        window.location.reload();
    }
}
/*-------------------------------------------liushuai-------------------------------*/
function cloneObj(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj), //序列化对象
            newobj = JSON.parse(str); //还原
    } else { //如果不支持以上方法
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};

function getMinTime(success) {
    $.ajax({
        url: urlObj.getMinTime,
        type: "post",
        dataType: 'json',
        async: false,
        xhrFields: {
            withCredentials: true
        },
        success: function(msg) {
            isLogin(msg);
            var dateObj = msg.Data;
            dateObj.AttentionMinDate = dateObj.AttentionMinDate.toString().slice(0, 4) + '-' + dateObj.AttentionMinDate.toString().slice(4) + '-01'; //关注最小时间
            dateObj.AttentionMaxDate = dateObj.AttentionMaxDate.toString().slice(0, 4) + '-' + dateObj.AttentionMaxDate.toString().slice(4) + '-01'; //关注最大时间
            dateObj.LeadsMinDate = dateObj.LeadsMinDate.toString().slice(0, 4) + '-' + dateObj.LeadsMinDate.toString().slice(4) + '-01'; //预购最小时间
            dateObj.LeadsMaxDate = dateObj.LeadsMaxDate.toString().slice(0, 4) + '-' + dateObj.LeadsMaxDate.toString().slice(4) + '-01'; //预购最小时间
            dateObj.SaleVolMinDate = dateObj.SaleVolMinDate.toString().slice(0, 4) + '-' + dateObj.SaleVolMinDate.toString().slice(4) + '-01'; //销量最小时间
            dateObj.SaleVolMaxDate = dateObj.SaleVolMaxDate.toString().slice(0, 4) + '-' + dateObj.SaleVolMaxDate.toString().slice(4) + '-01'; //销量最大时间
            dateObj.CompetitiveIndexMinDate = dateObj.CompetitiveIndexMinDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveIndexMinDate.toString().slice(4) + '-01'; //竞争格局最小时间
            dateObj.CompetitiveIndexMaxDate = dateObj.CompetitiveIndexMaxDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveIndexMaxDate.toString().slice(4) + '-01'; //竞争格局最小时间
            dateObj.CompetitivePrimaryMinDate = dateObj.CompetitivePrimaryMinDate.toString().slice(0, 4) + '-' + dateObj.CompetitivePrimaryMinDate.toString().slice(4) + '-01'; //核心竞品最小时间
            dateObj.CompetitivePrimaryMaxDate = dateObj.CompetitivePrimaryMaxDate.toString().slice(0, 4) + '-' + dateObj.CompetitivePrimaryMaxDate.toString().slice(4) + '-01'; //核心竞品最大时间
            dateObj.CompetitiveRelationMinDate = dateObj.CompetitiveRelationMinDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveRelationMinDate.toString().slice(4) + '-01'; //竞争关系最小时间
            dateObj.CompetitiveRelationMaxDate = dateObj.CompetitiveRelationMaxDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveRelationMaxDate.toString().slice(4) + '-01'; //竞争关系最大时间
            dateObj.CompetitiveSuperposeMinDate = dateObj.CompetitiveSuperposeMinDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveSuperposeMinDate.toString().slice(4) + '-01'; //竞争重合最小时间
            dateObj.CompetitiveSuperposeMaxDate = dateObj.CompetitiveSuperposeMaxDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveSuperposeMaxDate.toString().slice(4) + '-01'; //竞争重合最小时间
            dateObj.CompetitiveIOMinDate = dateObj.CompetitiveIOMinDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveIOMinDate.toString().slice(4) + '-01'; //竞争流转最小时间
            dateObj.CompetitiveIOMaxDate = dateObj.CompetitiveIOMaxDate.toString().slice(0, 4) + '-' + dateObj.CompetitiveIOMaxDate.toString().slice(4) + '-01'; //竞争流转最大时间
            dateObj.AreaSalesTrendMinDate = dateObj.AreaSalesTrendMinDate.toString().slice(0, 4) + '-' + dateObj.AreaSalesTrendMinDate.toString().slice(4) + '-01'; //区域销量走势最小时间
            dateObj.AreaSalesTrendMaxDate = dateObj.AreaSalesTrendMaxDate.toString().slice(0, 4) + '-' + dateObj.AreaSalesTrendMaxDate.toString().slice(4) + '-01'; //区域销量走势最大时间
            dateObj.AreaSalesDistributionMinDate = dateObj.AreaSalesDistributionMinDate.toString().slice(0, 4) + '-' + dateObj.AreaSalesDistributionMinDate.toString().slice(4) + '-01'; //区域销量分布最小时间
            dateObj.AreaSalesDistributionMaxDate = dateObj.AreaSalesDistributionMaxDate.toString().slice(0, 4) + '-' + dateObj.AreaSalesDistributionMaxDate.toString().slice(4) + '-01'; //区域销量分布最小时间
            minDate = dateObj;
            $('.min_time').val(JSON.stringify(minDate));
        }
    });
    $.ajax({
        url: urlObj.getMinTime,
        type: "post",
        dataType: 'json',
        async: false,
        data: { datespan: 'day' },
        xhrFields: {
            withCredentials: true
        },
        success: function(msg) {
            isLogin(msg);
            if (msg.Message == 'Success') {
                var date_time = msg.Data;
                date_time.AttentionMinDate = dateTimeToString(date_time.AttentionMinDate); //关注指数最小日期
                date_time.AttentionMaxDate = dateTimeToString(date_time.AttentionMaxDate);

                date_time.LeadsMinDate = dateTimeToString(date_time.LeadsMinDate); //预购走势最小日期
                date_time.LeadsMaxDate = dateTimeToString(date_time.LeadsMaxDate);

                date_time.SaleVolMinDate = dateTimeToString(date_time.SaleVolMinDate); //销售走势最小日期
                date_time.SaleVolMaxDate = dateTimeToString(date_time.SaleVolMaxDate); //销售走势最小日期

                date_time.CompetitiveIndexMinDate = dateTimeToString(date_time.CompetitiveIndexMinDate); //竞争格局最小日期
                date_time.CompetitiveIndexMaxDate = dateTimeToString(date_time.CompetitiveIndexMaxDate); //竞争格局最小日期

                date_time.CompetitivePrimaryMinDate = dateTimeToString(date_time.CompetitivePrimaryMinDate); //核心竞品最小日期
                date_time.CompetitivePrimaryMaxDate = dateTimeToString(date_time.CompetitivePrimaryMaxDate); //核心竞品最小日期

                date_time.CompetitiveRelationMinDate = dateTimeToString(date_time.CompetitiveRelationMinDate); //竞争关系最小日期
                date_time.CompetitiveRelationMaxDate = dateTimeToString(date_time.CompetitiveRelationMaxDate); //竞争关系最小日期

                date_time.CompetitiveSuperposeMinDate = dateTimeToString(date_time.CompetitiveSuperposeMinDate); //竞争重合最小日期
                date_time.CompetitiveSuperposeMaxDate = dateTimeToString(date_time.CompetitiveSuperposeMaxDate); //
                date_time.CompetitiveIOMinDate = dateTimeToString(date_time.CompetitiveIOMinDate); //竞争流转最小日期
                date_time.CompetitiveIOMaxDate = dateTimeToString(date_time.CompetitiveIOMaxDate); //
                date_time.AreaSalesTrendMinDate = dateTimeToString(date_time.AreaSalesTrendMinDate); //区域销量走势最小
                date_time.AreaSalesTrendMaxDate = dateTimeToString(date_time.AreaSalesTrendMaxDate); //区域销量走势最大
                date_time.AreaSalesDistributionMinDate = dateTimeToString(date_time.AreaSalesDistributionMinDate); //区域销量分布最小
                date_time.AreaSalesDistributionMaxDate = dateTimeToString(date_time.AreaSalesDistributionMaxDate); //区域销量分布最大
                minDay = date_time;
                $(".minTime_Day").val(JSON.stringify(minDay));
            }
        }
    });
}

function dateTimeToString(dateString) {
    var dateTime = dateString.toString().slice(0, 4) + '-' + dateString.toString().slice(4, 6) + '-' + dateString.toString().slice(6, 8);
    return dateTime;
}