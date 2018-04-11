/**
 * 
 * @authors lixh
 * @date    2017-11-22 17:05:30
 * @email: lixh.xingyuanauto.com
 * 功能包括：1.加载不同页面 2.渲染左侧菜单
 */
var tootip_definies;
$(function() {
    $('.signOut a').attr('href',urlMain+'/MSlogin.aspx');
    // 渲染左侧菜单
    $.getJSON('/js/definition.json', function (data) {
        tootip_definies = data;
    });
    navList();
    $('.layer').height($(document).height());
    // 渲染省份弹层
    $.ajax({
        url: urlObj.getAllRegion,
        type: "get",
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(msg) {
            isLogin(msg);
            var province = msg.Data.Provice;
            var provinceArr = [];
            for (var name in province) {
                var obj = {
                    name: name,
                    data: province[name]
                };
                provinceArr.push(obj);
            }
            var arr = [];
            var n = 0;
            for (var i = 0; i < provinceArr.length; i++) {
                if (i % 4 == 0) {
                    if (n != i) {
                        arr.push(provinceArr.slice(n, i));
                        n = i;
                    }
                    if (n + 4 > provinceArr.length) {
                        arr.push(provinceArr.slice(n, provinceArr.length));
                    }
                }
            }
            var tpl = $('#provinceList').html();
            var content = juicer(tpl, {arr: arr });
            $('.provinceTable').html(content);
        },
        error: function() {}
    });
    var data_obj = {
        groupby: 'global', //细分指标
        last: '12month',
        dtBegin: '',
        dtEnd: '',
        catarcarea: '', //大区
        catarccitylevel: '', //城市级别
        province: "", //省份
        city: "" //城市
    };
    var detail_data = {};
    var tootip_data = {
        pageName: "细分市场走势",
        tabName: "关注走势",
        pageId:"SYS048MOD000101"
    };
    $('.detail_data').val(JSON.stringify(detail_data));
    $('.data_obj').val(JSON.stringify(data_obj));
    $('.tootip_data').val(JSON.stringify(tootip_data));


    // 控制loading图位置
    $(window).resize(function(){
        var  tootip_data = $('.tootip_data').val();
        var top;
        switch(tootip_data.pageId){
            case 'SYS048MOD02004'://车型卡片
                top = $('.titleCard').offset().top;
                break;
            default:
                top = $('.mainContent').offset().top;
                break;
        }
    });
});
// 渲染左侧菜单
function navList() {
    $.ajax({
        url: urlObj.GetModuleInfo,
        type: "get",
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            msg = data;
            var tpl = $('#sideBar').html();
            $('.sideBar .menuList').html(juicer(tpl, {msg: msg }));
            $('.sideBar .menuList .firstNav .icon').eq(0).css('background-image', 'url(/images/icon-Navigation-Pie.svg)');
            $('.sideBar .menuList .firstNav .icon').eq(1).css('background-image', 'url(/images/icon-Navigation-car.svg)');
            $('.sideBar .menuList .firstNav .icon').eq(2).css('background-image', 'url(/images/icon-Navigation-scene.svg)');
            $('.sideBar .menuList li a').on('click', function(e) {
                e.stopPropagation();
                if($(this).hasClass('active')){
                    if($(this).hasClass('secondNav')){
                        if($(this).hasClass('open')){
                            $(this).removeClass('open')
                            $(this).siblings('.third').hide();
                        }else{
                            $(this).addClass('open')
                            $(this).siblings('.third').show();
                        }
                    }
                }else{
                    $('.layui-laydate').hide();
                    var url = $(this).attr('src-id');
                    $('.sideBar li a').removeClass('active');
                    $(this).addClass('active');
                    $(this).parents('.third').siblings('.secondNav').addClass('active');
                    $(this).parents('.third').siblings('.secondNav').addClass('open');
                    $(this).parents('.seconds').siblings('.firstNav').addClass('active');
                    $('.sideBar ul.third').hide();
                    $(this).siblings('.third').show();
                    $(this).siblings('ul.third').show();
                    $(this).parents('.third').show();
                    if (url) {
                        // var pageName = $.trim($(this).text());
                        var pageId = $.trim($(this).attr('module-id'));
                        switch (pageId) {
                            case "SYS048MOD000101":
                                var data_obj = {
                                    "groupby": 'global', //按日 周 月 查看，只3个可选值
                                    "last": '12month',
                                    "dtBegin": '',
                                    "dtEnd": '',
                                    "catarcarea": '', //大区
                                    "catarccitylevel": '', //城市级别
                                    "province": "", //省份
                                    "city": "", //城市,
                                    "PageIndex": 0, //默认第一页,
                                    "PageSize": 0, //每页条数
                                    "datespan": "month"
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD000101",
                                    "pageName": "细分市场走势",
                                    "tabName": "关注走势",
                                    "subTabName": "关注走势"
                                };
                                break;
                            case "SYS048MOD000102":
                                var data_obj = {
                                    "groupby": 'catarc_area', //区域下拉
                                    "last": '12month',
                                    "dtBegin": '',
                                    "dtEnd": '',
                                    "Countryseries": '自主品牌,合资品牌,进口车', //产地类型
                                    "carlevel": '', //车型级别
                                    "suvlevel": "", //SUV细分级别
                                    "countryextend": "", //品牌国别,
                                    "msrpminextend": "", //价格区间,
                                    "datespan": "month"
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD000102",
                                    "pageName": "区域市场走势",
                                    "tabName": "关注走势",
                                    "subTabName": "关注走势"
                                };
                                break;
                            case "SYS048MOD000201":
                                var data_obj = {
                                    "dtBegin": '',
                                    "dtEnd": '',
                                    "last": '12month',
                                    "PageIndex": 0,
                                    "pageSize": 0,
                                    "GroupIndexType": "Manufacture", //车型
                                    "CompetitiveRankingType": "Attention", //关注走势
                                    "CountrySeries": "", //产地类型
                                    "MsrpMinExtend": "", //价格段
                                    "CarLevel": "", //车型级别
                                    "IsExport": false, //是否导出
                                    "DetailName": "",
                                    "datespan": "month"
                                };
                                var detail_data = {
                                    "dtBegin": '',
                                    "dtEnd": '',
                                    "last": '12month',
                                    "PageIndex": 0,
                                    "pageSize": 0,
                                    "GroupIndexType": "Manufacture", //车型
                                    "CompetitiveRankingType": "Attention", //关注走势
                                    "IsExport": false, //是否导出
                                    "DetailName": "",
                                    "datespan": "month"
                                };
                                var tootip_data = {
                                    "pageId":"SYS048MOD000201",
                                    "pageName": "厂商排名",
                                    "tabName": "关注排名"
                                };
                                break;
                            case "SYS048MOD000202":
                                var data_obj = {
                                    dtBegin: '',
                                    dtEnd: '',
                                    last: '12month',
                                    PageIndex: 0,
                                    pageSize: 0,
                                    GroupIndexType: "Brand", //品牌
                                    CompetitiveRankingType: "Attention", //关注走势
                                    CountrySeries: "", //产地类型
                                    MsrpMinExtend: "", //价格段
                                    CarLevel: "", //车型级别
                                    IsExport: false, //是否导出
                                    DetailName: "",
                                    datespan: "month"
                                };
                                var detail_data = {
                                    dtBegin: '',
                                    dtEnd: '',
                                    last: '12month',
                                    PageIndex: 0,
                                    pageSize: 0,
                                    GroupIndexType: "Brand", //品牌
                                    CompetitiveRankingType: "Attention", //关注走势
                                    IsExport: false, //是否导出
                                    DetailName: "",
                                    datespan: "month"
                                };
                                var tootip_data = {
                                    "pageId":"SYS048MOD000202",
                                    pageName: "品牌排名",
                                    tabName: "关注排名"
                                };
                                break;
                            case "SYS048MOD000203":
                                var data_obj = {
                                    dtBegin: '',
                                    dtEnd: '',
                                    last: '12month',
                                    PageIndex: 0,
                                    pageSize: 0,
                                    GroupIndexType: "CarLevel", //车型
                                    CompetitiveRankingType: "Attention", //关注走势
                                    CountrySeries: "", //产地类型
                                    MsrpMinExtend: "", //价格段
                                    CarLevel: "", //车型级别
                                    IsExport: false, //是否导出
                                    DetailName: "",
                                    datespan: "month"
                                };
                                var detail_data = {
                                    dtBegin: '',
                                    dtEnd: '',
                                    last: '12month',
                                    PageIndex: 0,
                                    pageSize: 0,
                                    GroupIndexType: "CarLevel", //车型
                                    CompetitiveRankingType: "Attention", //关注走势
                                    IsExport: false, //是否导出
                                    DetailName: "",
                                    datespan: "month"
                                };
                                var tootip_data = {
                                    "pageId":"SYS048MOD000203",
                                    pageName: "车型排名",
                                    tabName: "关注排名"
                                };
                                break;
                            case "SYS048MOD02001":
                                var data_obj = {
                                    groupby: 'carbrand', //指标选择品牌时 groupby=carbrand&carbrand=上汽大众，
                                    carbrand: '', //选择车型时 groupby=serialname&serialname=帕萨特
                                    last: '12month',
                                    dtBegin: '',
                                    dtEnd: '',
                                    catarcarea: '', //大区
                                    catarccitylevel: '', //城市级别
                                    province: "", //省份
                                    city: "", //城市,
                                    datespan: "month"
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD02001",
                                    pageName: "指数走势",
                                    tabName: "关注走势",
                                    subTabName: "关注走势"
                                };
                                break;
                            case "SYS048MOD0200201":
                                var data_obj = {
                                    last: '12month',
                                    dtBegin: '',
                                    dtEnd: '',
                                    carlevel: '', //车型级别
                                    suvlevel: '紧凑型SUV', //suv级别
                                    countryseries: 'all', //产地
                                    pageSize: 1000000,
                                    PageIndex: 1
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0200201",
                                    pageName: "竞争格局",
                                    tabName: "竞争格局"
                                };
                                break;
                            case "SYS048MOD02002":
                                var data_obj = {
                                    last: '12month',
                                    dtBegin: '',
                                    dtEnd: '',
                                    SerialName: '' //车型
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD02002",
                                    pageName: "竞争关系",
                                    tabName: "对比车型"
                                };
                                break;
                            case "SYS048MOD0200301":
                                var data_obj = {
                                    last: '12month',
                                    dtBegin: '',
                                    dtEnd: '',
                                    AreaTypeEnum: 'CatarcArea', //区域
                                    CompetitiveAreaEnum: 'CarBrand', //指标
                                    CarBrandOrSerialName: '' //品牌或车型名称
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0200301",
                                    pageName: "区域销量走势",
                                    tabName: "销量走势",
                                    subTabName: "销量走势"
                                };
                                break;
                            case "SYS048MOD0200302":
                                var data_obj = {
                                    last: '12month',
                                    dtBegin: '',
                                    dtEnd: '',
                                    DistributionTypeEnum: 'Province', //区域
                                    CompetitiveAreaEnum: 'CarBrand', //指标
                                    CarBrandOrSerialName: '', //品牌或车型名称
                                    provinceName: '', //省份名称
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0200302",
                                    pageName: "区域销量分布",
                                    tabName: "销量分布",
                                    subTabName: "销量"
                                };
                                break;
                            case "SYS048MOD0301":
                                var data_obj = {
                                    GroupBy:'gender,age,edu',
                                    view:'percent',
                                    carBrand:'',
                                    serialName:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0301",
                                    pageName: "基础属性"
                                };
                                break;
                            case "SYS048MOD0302":
                                var data_obj = {
                                    view:'percent',
                                    GroupBy:"city,province,catarc_area,catarc_city_level",
                                    carBrand:'',
                                    serialName:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0302",
                                    pageName: "区域特征"
                                };
                                break;
                            case "SYS048MOD0303":
                                var data_obj = {
                                    view:'percent',
                                    GroupBy:"mar,fs,estate,social",
                                    carBrand:'',
                                    serialName:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0303",
                                    pageName: "生活状态"
                                };
                                break;
                            case "SYS048MOD0306":
                                var data_obj = {
                                    view:'percent',
                                    GroupBy:"carstate,asset,tag",
                                    carBrand:'',
                                    serialName:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0306",
                                    pageName: "消费能力"
                                };
                                break;
                            case "SYS048MOD0304":
                                var data_obj = {
                                    view:'sum',
                                    GroupBy:"cate",
                                    cate:'性格,价值观',
                                    carBrand:'',
                                    serialName:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0304",
                                    pageName: "人格特质",
                                    tabName: "心理特征"
                                };
                                break;
                            case "SYS048MOD0305":
                                var data_obj = {
                                    view:'sum',
                                    GroupBy:"category",
                                    carBrand:'',
                                    serialName:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0305",
                                    pageName: "网络行为",
                                    tabName: "媒介偏好"
                                };
                                break;
                            case 'SYS048MOD02004'://车型卡片
                                var data_obj = {
                                    last:'12month',
                                    view:'percent',
                                    GroupBy:"gender,age,mar,fs,estate,social,cate,category",
                                    cate:'价值观,性格,兴趣/偏好',
                                    carBrand:'',
                                    serialName:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD02004",
                                    "pageName":"车型卡片"
                                };
                                break;
                            case 'SYS048MOD0401'://产品类型偏好
                                var data_obj = {
                                    view:'percent',
                                    category:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0401",
                                    "pageName":"产品类型偏好",
                                    "tabName":"车型级别"
                                };
                                break;
                            case 'SYS048MOD0402'://车型偏好
                                var data_obj = {
                                    view:'percent',
                                    category:''
                                };
                                var detail_data = {};
                                var tootip_data = {
                                    "pageId":"SYS048MOD0402",
                                    "pageName":"车型偏好",
                                    "tabName":"车型偏好"
                                };
                                break;
                        }

                        $('.detail_data').val(JSON.stringify(detail_data));
                        $('.data_obj').val(JSON.stringify(data_obj));
                        $('.tootip_data').val(JSON.stringify(tootip_data));

                        $('.contenter').load(url + '?r=' + Math.random(), function() {
                            if (tootip_data.pageId != 'SYS048MOD02001' && tootip_data.pageId != 'SYS048MOD02002' && tootip_data.pageId != 'SYS048MOD0200301' && tootip_data.pageId != 'SYS048MOD0200302' && tootip_data.pageId != 'SYS048MOD0301' && tootip_data.pageId != 'SYS048MOD0302' && tootip_data.pageId != 'SYS048MOD0303' && tootip_data.pageId != 'SYS048MOD0304' && tootip_data.pageId != 'SYS048MOD0305' && tootip_data.pageId != 'SYS048MOD0306' && tootip_data.pageId != 'SYS048MOD02004'&& tootip_data.pageId != 'SYS048MOD0401'&& tootip_data.pageId != 'SYS048MOD0402') {
                                getData(data_obj, judegPage, drawTable, tootip_data, 1);
                            }else{
                                if(tootip_data.pageId != 'SYS048MOD0401'&& tootip_data.pageId != 'SYS048MOD0402'){
                                    renderSelect(tootip_data);
                                }
                                
                            }

                            if(tootip_data.pageId!='SYS048MOD02004'){
                                renderTootip(tootip_data, tootip_definies);
                            }
                        });
                    } else {
                        $(this).next('ul').find('a')[0].click();
                    }
                }
                
            });
            $('.sideBar .menuList .firstNav').eq(0).click();
        }
    });
}