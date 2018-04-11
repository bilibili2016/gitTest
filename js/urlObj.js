var domain = "http://marketingstrategyreport.xingyuanauto.com/webapi"; //api域名
var url = 'http://oa1.xingyuanauto.com'; //域名
var urlMain = 'http://bi1.xingyuanauto.com'; //域名
var urlObj = {
    login:"http://api.bi1.xingyuanauto.com/Check.ashx?NotCheckModule=true&msLogin=true",
    // 菜单
    GetModuleInfo:domain+'/moduleinfo/getmoduleinfo',
    // 细分市场/指数
        // 关注
        indextrendAttention:domain+"/indextrend/attention",
        // 预购
        indextrendLeads:domain+"/indextrend/leads",
        // 销量
        indextrendSalevol:domain+"/indextrend/salevol",
        // 指数关注内容
        contentserial:domain+"/contentserial",
    // 厂商|品牌|车型
        // 列表
        TotalIndex:domain+"/CompetitiveRanking/TotalIndex",
        // 详情
        EachIndex:domain+"/CompetitiveRanking/EachIndex",
        //获取大区\城市级别\全国信息接口
        getAllRegion:domain+"/Common/GetCityMapping",
        //用户有权限查看的品牌
        getAllBrand:domain+"/brand/getuserbrand",
        //获取用户有权限查看的车型
        getAllCarType:domain+"/brand/getuserserial",
        //获取控件最小日期
        getMinTime:domain+"/common/getmindate",
    // 区域市场走势
        // 关注
        areatrendAttention:domain+'/areatrend/attention',
        // 预购
        areatrendLeads:domain+'/areatrend/leads',
        // 销量
        areatrendSalevol:domain+'/areatrend/salevol',
    // 竞争格局
        // chart部分
        competitiveIndex:domain+'/competitive/index',
        // 表格部分
        competitiveIndexdetail:domain+'/competitive/indexdetail',
    // 竞争关系
        // 核心竞品
        competitivePrimary:domain+'/competitive/Primary',
        // 竞争关系
        competitiveRelation:domain+'/competitive/Relation',
        // 竞争重合
        competitiveSuperpose:domain+'/competitive/Superpose',
        // 竞争流转
        competitiveIO:domain+'/competitive/IO',
    // 区域销量走势
        AreaAnalysisTrend:domain+'/AreaAnalysis/Trend',
    // 区域销量分布
        // 销量分布
        AreaAnalysisDis:domain+'/AreaAnalysis/Distribution',
        // 竞争表现
        AreaAnalysisComp:domain+'/AreaAnalysis/SalesSituation',
    // 用户分析
       getPersonas:domain+'/personas',
       // 获取所有媒体类型
       getcategorylist:domain+'/scene/getcategorylist',
       // 车型偏好
       preferenceSerial:domain+'/scene/serial',
       // 车型级别
       preferenceCarlevel:domain+'/scene/carlevel',
       // 品牌国别
       preferenceCountryextend:domain+'/scene/countryextend',
       // 价格区间
       preferenceMsrpminextend:domain+'/scene/msrpminextend',
    // 导出pdf 
        pdf:domain+'/scene/acceptbase64'


};
document.writeln('<script language="javascript" src="' + urlObj.login + '" type="text/javascript"></script>');
$(function() {
    // 显示当前登陆人
    $('.Realname').text(XYLogin.RealName);
});