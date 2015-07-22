
//AJAX_GET_INFO-------------------------------------------------
//用户登录信息
var Ajax_User_Info = {
	LOGIN_NAME:"tangjiaqi",
	LOGIN_CRM:"tangjiaqi",
	LOGIN_PWD:"rick"
};

var Ajax_User_ID_Gao = {
	USER_ID: "393218"
};

//实时受理报表请求
var Ajax_Acceptance = {
	STOREID:""
};
//门店销量统计
var Ajax_Store_Sales = {
	STOREID:"",
	BUSTYPE:"",
	DATETYPE:"",
	STARTDATE:"",
	ENDDATE:""
};

//门店销量指针统计
var Ajax_Store_Sales_Count = {
	STOREID:"3101051010218",
	BUSTYPE:"终端",
	TEAMID:"null"
}

//终端库存统计
var Ajax_TerminalReport = {
	STOREID:"",
	DATETYPE:"",
	STARTDATE:"",
	ENDDATE:""
}
//零销量预警统计
var Ajax_ZeroReport = {
	STOREID:""
}
//排队机客流监控
var Ajax_Machine_Table = {

}


//ajax url地址列表
var Ajax_Url_Link={
	login_url : "/service/1/auth/login",
	//报表条件查询
	table_Url : "/service/1/report_query/condition_report",

	//实时受理报表
	Acceptance_Url : "/service/1/acceptance/query",
	//门店销量报表查询
	Store_sales_Url : "/service/1/store_sales_query/sales_statistics",
	//门店销量指标统计
	Store_sales_count_Url : "/service/1/store_sales_count/query",
	//终端库存报表查询
	TerminalReport_Url : "/service/1/TerminalReport/query",
	//零销量报表查询
	ZeroReport_Url : "/service/1/ZeroReport/query"
};

//ajax 回调函数
var Ajax_CallBack = {
	//获取用户信息并切保存至本地
	Get_Uesr_Info_To_Load : function(e){
		Load_User_Info=e;
		console.log(Load_User_Info);
	},

	//设置小翼看表 的首页内容
	Get_Uesr_Condition : function(e){
		Load_Uesr_Condition=e;
		console.log(Load_Uesr_Condition);
		Set_Page_Info.set_page1_info();
	},
	//实时受理列表
	Get_Page2_1_content : function(e){

		Page2_1_Content_Info=e;
		console.log(Page2_1_Content_Info);

		Set_Page_Info.set_page2_1_info();
	},
	//门店销量列表
	Get_Page2_2_content : function(e){
		Page2_2_Content_Info=e;
		console.log(Page2_2_Content_Info);

		Set_Page_Info.set_page2_2info2();
	},

	//门店销量指针统计
	Get_Page2_3_content : function(e){
		Page2_3_Content_Info=e;
		console.log(Page2_3_Content_Info);

		//Set_Page_Info.set_page2_2info2();
	},

	//终端库存统计
	Get_Page2_4_content : function(e){
		Page2_4_Content_Info=e;
		console.log(Page2_4_Content_Info);
		Set_Page_Info.set_page2_4info_display();
	},

	//终端库存统计
	Get_Page2_5_content : function(e){
		Page2_5_Content_Info=e;
		console.log(Page2_5_Content_Info);
		Set_Page_Info.set_page2_5info_display();
	}
};

//本地保存信息---------------------

//本地存储 Ajax获取用户信息
var Load_User_Info = {

};
//本地存储 Ajax获取用户渠道类型,所属区局,所属公司,代理商,门店
var Load_Uesr_Condition = {

};

var Load_Store_ID = {
	STORE_ID: "",
	STORE_NAME:""
}

var Load_ALLStore_NAME_ID = {
	STORE_ID: [],
	STORE_NAME:[]
}

var Load_ALLStore_NAME_ID_TEMP = {
	STORE_ID: [],
	STORE_NAME:[]
}

//实时受理统计
var Page2_1_Content_Info = {

}

//门店销量统计
var Page2_2_Content_Info = {

}

//门店销量指标统计
var Page2_3_Content_Info = {

}

//终端库存统计
var Page2_4_Content_Info = {

}

//零销量预警统计
var Page2_5_Content_Info = {

}

//排队机客流监控
var Page2_6_Content_Info = {

}

//设置页面信息--定义临时数组-------------------
var JQ_CHANNELLIST ;
//所属区局类型 定义数组
var JQ_AREALIST ;
//所属分局类型 定义数组
var  JQ_SUBAREALIST;
//代理商 定义数组
var  JQ_AGENTLIST;
//门店 定义数组
var  JQ_STORELIST;
//门店 ID
var STORE_ID=0;
//渠道类型索引
var ARRAY_INDEX = 0;


//设置图片数据的AJax数据-------------------

//时间对象数组
var JQ_pageAll_DATE;

//移动对象数组
var JQ_pageAll_Mobile = {
	name:"移动",
	type:"line",
	data:[]
}
//宽带对象数组
var JQ_pageAll_Broadband = {
	name:"宽带",
	type:"line",
	data:[]
}
//终端对象数组
var JQ_pageAll_Terminal = {
	name:"终端",
	type:"line",
	data:[]
}

var filler = {
	show : false,
	realtime : true,
	start :0,
	end : 100,
    height:15,
	fillerColor:'rgba(52,152,219,1)',
	handleColor:'rgba(52,152,219,1)'
}



var Set_Page_Info= {

	set_page1_info:function(){
		 JQ_CHANNELLIST = new Array();
		 JQ_AREALIST= new Array();
		 JQ_SUBAREALIST= new Array();
		 JQ_AGENTLIST= new Array();
		 JQ_STORELIST= new Array();
		myTable.setPage_myTable_1();
		//渠道类型 定义数组
		for(var i=0;i<3;i++){
			JQ_CHANNELLIST.push(Load_Uesr_Condition.RESULT.CHANNELLIST[i]);
			JQ_AREALIST.push(Load_Uesr_Condition.RESULT.CHANNELLIST[i].AREALIST);
			JQ_SUBAREALIST.push(Load_Uesr_Condition.RESULT.CHANNELLIST[i].SUBAREALIST);
			JQ_AGENTLIST.push(Load_Uesr_Condition.RESULT.CHANNELLIST[i].AGENTLIST);
			JQ_STORELIST.push(Load_Uesr_Condition.RESULT.CHANNELLIST[i].STORELIST);
		}
		console.log(JQ_CHANNELLIST);
		console.log(JQ_AREALIST);
		console.log(JQ_SUBAREALIST);
		console.log(JQ_AGENTLIST);
		console.log(JQ_STORELIST);

		//设置 渠道类型的下拉列表
		$.each(JQ_CHANNELLIST, function(i) {
			var name = JQ_CHANNELLIST[i].NAME;
			var Option_Valve = JQ_CHANNELLIST[i].ID;
			$("#list li:eq(0) select").append("<option value="+Option_Valve+">"+name+"</option>");
		});

		//点击渠道板块触发 区局板块事件
		$("#list li:eq(0) select").change(function(){

			//获取渠道的选择ID
			ARRAY_INDEX=getinfo.page_1_ContentID_select(0);
			console.log("ARRAY_INDEX="+ARRAY_INDEX);

			//设置所属区局下拉列表内容
			Set_Page_Info.Page1_AREALIST_Write_Info(ARRAY_INDEX,1);
			//设置代理商下拉列表内容
			Set_Page_Info.Page1_AGENTLIST_Write_Info(ARRAY_INDEX,3);
		});

		//点击区局板块触发 分局板块事件
		$("#list li:eq(1) select").change(function(){
				//设置所属分局的内容
			Set_Page_Info.Page1_SUBAREALIST_Write_Info(ARRAY_INDEX,2);
		});

		//点击分局板块触发 门店板块事件
		$("#list li:eq(2) select").change(function(){
			Load_ALLStore_NAME_ID_TEMP.STORE_NAME=[];
			Load_ALLStore_NAME_ID_TEMP.STORE_ID=[];
			//设置所属分局的内容
			Set_Page_Info.Page1_STORELIST_Write_Info(ARRAY_INDEX,4);
		});

		$("#list li:eq(4) select").change(function(){
			if(getinfo.page_1_ContentID_select(4)=="All"){
				Load_Store_ID.STORE_ID=Load_ALLStore_NAME_ID_TEMP.STORE_ID.join(",")
				Load_Store_ID.STORE_NAME=Load_ALLStore_NAME_ID_TEMP.STORE_NAME.join(",")
			}else{
				Load_Store_ID.STORE_ID=getinfo.page_1_ContentID_select(4);
				Load_Store_ID.STORE_NAME=getinfo.page_1_ContentText_select(4);
			}
		});

		//下一步点击事件
		$("#Page1_Next").click(function(){
			if(Load_Store_ID.STORE_ID.length>0){
				Set_Page_Info.set_page2_info();
				console.log("所选门店ID="+Load_Store_ID.STORE_ID);
			}else{
				alert("请先选择门店再继续");
			}
		});
	},

	//第二页面的事件
	set_page2_info:function(){
		myTable.setPage_myTable_2();
		//进入实时受理统计板块(1)
		$("#list li:eq(0) a").click(function(){
			Ajax_Acceptance.STOREID = Load_Store_ID.STORE_ID;
			queryData.ajax(Ajax_Acceptance ,Ajax_Url_Link.Acceptance_Url, Ajax_CallBack.Get_Page2_1_content);
		});

		//进入门店销量统计板块(2)
		$("#list li:eq(1) a").click(function(){
			myTable.setPage_myTable_2_2();
		});
		//进入终端预警统计(4)
		$("#list li:eq(3) a").click(function(){
			myTable.setPage_myTable_2_4();
		});

		//进入零销量预警板块(5)
		$("#list li:eq(4) a").click(function(){
			myTable.setPage_myTable_2_5();
		});
	},
	//第2——1 页面事件
	set_page2_1_info:function(){
		myTable.setPage_myTable_2_1();
		JQ_pageAll_DATE = [];
		JQ_pageAll_Mobile.data = [];
		JQ_pageAll_Broadband.data = [];
		JQ_pageAll_Terminal.data = [];
		for (var i = 0; i<Page2_1_Content_Info.RESULT[0].ITEMLIST.length;i++) {
			JQ_pageAll_Mobile.data[i]=Page2_1_Content_Info.RESULT[0].ITEMLIST[i].SALENUMBER;
			JQ_pageAll_DATE[i]=Page2_1_Content_Info.RESULT[0].ITEMLIST[i].DATE;
		}
		for (var i = 0; i<Page2_1_Content_Info.RESULT[1].ITEMLIST.length;i++) {
			JQ_pageAll_Broadband.data[i]=Page2_1_Content_Info.RESULT[1].ITEMLIST[i].SALENUMBER;
		}
		for (var i = 0; i<Page2_1_Content_Info.RESULT[2].ITEMLIST.length;i++) {
			JQ_pageAll_Terminal.data[i]=Page2_1_Content_Info.RESULT[1].ITEMLIST[i].SALENUMBER;
		}
		//画图标
		var chartcontent = [JQ_pageAll_Mobile,JQ_pageAll_Broadband,JQ_pageAll_Terminal];
		var chartdate = JQ_pageAll_DATE;
		if(JQ_pageAll_DATE.length>10){
			filler.show=true;
			filler.end=(10/(JQ_pageAll_DATE.length))*100;
		}
		var Charttipname = [JQ_pageAll_Mobile.name,JQ_pageAll_Broadband.name,JQ_pageAll_Terminal.name];
		other_Fac.Echart(chartcontent,chartdate,Charttipname);
		//设置表格数据
		other_Fac.set_table(".Detailed_box ul ul",JQ_pageAll_DATE,JQ_pageAll_Mobile.data,JQ_pageAll_Broadband.data,JQ_pageAll_Terminal.data,":00");
	},

	set_page2_2info:function(){
		other_Fac.Page_2_2_settime_Ajax(0,"移动","按天");

		$("#table2_2_search").click(function(){
			var index_mun = getinfo.page_2_2_month_select();
			var index_type = 	getinfo.page_2_2_Datatype_select();
			var Bus_type = getinfo.page_2_2_Bustype_select();
			$("#span_bustype").text(Bus_type+"受理数");
			JQ_pageAll_Mobile.name=Bus_type;
			other_Fac.Page_2_2_settime_Ajax(index_mun,Bus_type,index_type);
		});
	},

/*	set_page2_2info_Ajax : function(){
		other_Fac.Page_2_2_settime_Ajax(_older_Data_time);
	},*/
	set_page2_2info2:function(){
		JQ_pageAll_DATE = [];
		JQ_pageAll_Mobile.data = [];

		var index_type = getinfo.page_2_2_Datatype_select();

		if(index_type=="按天"){
			for (var i = 0; i<Page2_2_Content_Info.RESULT.length;i++) {
				JQ_pageAll_Mobile.data[i]=Page2_2_Content_Info.RESULT[i].SALENUMBER;
				JQ_pageAll_DATE[i]=Page2_2_Content_Info.RESULT[i].DATE;
			}
		}
		if(index_type=="按周"){
			var a = parseInt(Page2_2_Content_Info.RESULT.length/7);
			var b=parseInt(Page2_2_Content_Info.RESULT.length%7);
			//定义7天的总量
			var data_a_All = [];

			//定义余下来的总量
			var data_b_All = 0 ;

			//开始时间
			JQ_pageAll_DATE[0]=Page2_2_Content_Info.RESULT[7].DATE;
			for(var i=0; i<a;i++){
				var temp_1=0;
				for (var j=i*7; j<i*7+7;j++) {
					temp_1+=Number(Page2_2_Content_Info.RESULT[j].SALENUMBER);
				}
				data_a_All[i]=temp_1;
				JQ_pageAll_DATE[i]=Page2_2_Content_Info.RESULT[i*7+6].DATE;
			}
			for (var k=a*7 ;k<Page2_2_Content_Info.RESULT.length;k++) {
				data_b_All+=Number(Page2_2_Content_Info.RESULT[k].SALENUMBER);
			}
			for (var m = 0; m<data_a_All.length; m++) {
				JQ_pageAll_Mobile.data[m]=data_a_All[m];
			}
			JQ_pageAll_Mobile.data.push(data_b_All);
			JQ_pageAll_DATE.push(Page2_2_Content_Info.RESULT[Page2_2_Content_Info.RESULT.length-1].DATE)

		}
		if(index_type=="按月"){
			var str_length =Page2_2_Content_Info.RESULT.length;

			//第一个月的天数,和第一个月的总量 第二,第三个月等
			var mon_mun=[];
			var mon_All1=0;
			var mon_All2=0;
			var mon_All3=0;

			//定义临时变量
			var temp_index = [];
			for(var i=0 ; i<str_length ; i++){
				if(Page2_2_Content_Info.RESULT[i].DATE.substr(Page2_2_Content_Info.RESULT[i].DATE.length-2,2)=="01"){
					temp_index.push(i);
					JQ_pageAll_DATE.push(Page2_2_Content_Info.RESULT[i].DATE.substr(0,2)+"月");
				}
			}
			for(var j=0;j<temp_index.length;j++){

				if(j<temp_index.length-1){
					mon_mun[j]=temp_index[j+1]-temp_index[j];
				}else{
					mon_mun[j]=str_length-temp_index[j];
				}
			}
			for(var k1=0 ;k1<mon_mun[0].length;k1++){
				mon_All1+=Number(Page2_2_Content_Info.RESULT[k1].SALENUMBER);
			}
			JQ_pageAll_Mobile.data.push(mon_All1);
			for(var k2=mon_mun[0] ;k2<mon_mun[1]+mon_mun[0].length;k2++){
				mon_All2+=Number(Page2_2_Content_Info.RESULT[k2].SALENUMBER);
			}
			JQ_pageAll_Mobile.data.push(mon_All2);
			for(var k3=mon_mun[1]+mon_mun[0] ;k3<str_length.length;k3++){
				mon_All3+=Number(Page2_2_Content_Info.RESULT[k3].SALENUMBER);
			}
			JQ_pageAll_Mobile.data.push(mon_All2);
		}
		//画图标
		var chartcontent = [JQ_pageAll_Mobile];
		var chartdate = JQ_pageAll_DATE;
		if(JQ_pageAll_DATE.length>10){
			filler.show=true;
			filler.end=(10/(JQ_pageAll_DATE.length))*100;
		}else{
			filler.show=false;
			filler.end=100;
		}
		var Charttipname = [JQ_pageAll_Mobile.name];
		other_Fac.Echart(chartcontent,chartdate,Charttipname);
		//设置表格数据
		other_Fac.set_table2_2(".Detailed_box ul ul",JQ_pageAll_DATE,JQ_pageAll_Mobile.data);
	},

	set_page2_4info:function(){
		other_Fac.Page_2_4_settime_Ajax(6);
		$("#tablesearch2_2").click(function(){
			//获取1周 和 15天的记录
			var _temp_inedex =getinfo.page_2_4_Date_select();
			if(_temp_inedex==0){
				other_Fac.Page_2_4_settime_Ajax(6);
			}
			if(_temp_inedex==1){
				other_Fac.Page_2_4_settime_Ajax(14);
			}
		});
	},

	set_page2_4info_display:function(){
		JQ_pageAll_DATE = [];
		JQ_pageAll_Mobile.data = [];

		for (var i = 0; i<Page2_4_Content_Info.RESULT.length;i++) {
			JQ_pageAll_Mobile.data[i]=Page2_4_Content_Info.RESULT[i].SALENUMBER;
			JQ_pageAll_DATE[i]=Page2_4_Content_Info.RESULT[i].DATE;
		}
		JQ_pageAll_Mobile.name="终端库存";
		//画图标
		var chartcontent = [JQ_pageAll_Mobile];
		var chartdate = JQ_pageAll_DATE;
		if(JQ_pageAll_DATE.length>10){
			filler.show=true;
			filler.end=(10/(JQ_pageAll_DATE.length))*100;
		}else{
			filler.show=false;
			filler.end=100;
		}
		var Charttipname = [JQ_pageAll_Mobile.name];
		other_Fac.Echart(chartcontent,chartdate,Charttipname);
		//设置表格数据
		other_Fac.set_table2_2(".Detailed_box ul ul",JQ_pageAll_DATE,JQ_pageAll_Mobile.data);
	},

	set_page2_5info:function(){
		other_Fac.Page_2_5_settime_Ajax();
	},

	set_page2_5info_display:function(){
		var STORE_NAME=[];
		var ZERO_DAYS=[];
		for(var i=0 ; i<Page2_5_Content_Info.RESULT.length ;i++){
			STORE_NAME[i]=Page2_5_Content_Info.RESULT[i].STORE_NAME;
			ZERO_DAYS[i]=Page2_5_Content_Info.RESULT[i].ZERO_DAYS;
		}
		other_Fac.set_table2_2(".Detailed_box ul ul",STORE_NAME,ZERO_DAYS);
	},

	//设置所属区局的下拉内容
	Page1_AREALIST_Write_Info : function(Arrayindex,Listindex){
		//清楚所属区局的下拉列表内容
		$("#list li:eq(1) select option").remove();
		$("#list li:eq(1) select").prepend("<option value='' selected='true' disabled='true'>选择所属区局</option>")

		$.each(JQ_AREALIST[Arrayindex], function(i) {
			var name = JQ_AREALIST[Arrayindex][i].NAME;
			var Option_Valve = JQ_AREALIST[Arrayindex][i].ID;
			$("#list li:eq("+Listindex+") select").append("<option value="+Option_Valve+">"+name+"</option>");
		});
	},

	//设置所属分局的下拉内容
	Page1_SUBAREALIST_Write_Info : function(Arrayindex,Listindex){
		$("#list li:eq(2) select option").remove();
		$("#list li:eq(2) select").prepend("<option value='' selected='true' disabled='true'>选择所属分局</option>")
		var  Arrar_temp= new Array();
		//获取所选区局的ID
		var IDindex=getinfo.page_1_ContentID_select(1);
		console.log(IDindex);
		for (var i = 0; i<JQ_SUBAREALIST[Arrayindex].length;i++) {
			if (JQ_SUBAREALIST[Arrayindex][i].SUBAREAID==IDindex) {
				Arrar_temp.push(JQ_SUBAREALIST[Arrayindex][i]);
			}
		}
		$.each(Arrar_temp, function(i) {
			var name = Arrar_temp[i].NAME;
			var Option_Valve = Arrar_temp[i].ID;
			$("#list li:eq("+Listindex+") select").append("<option value="+Option_Valve+">"+name+"</option>");
		});
	},
	//设置代理商的下拉内容
	Page1_AGENTLIST_Write_Info : function(Arrayindex,Listindex){
		//先清空代理商下拉别表的内容
		$("#list li:eq(3) select option").remove();
		$("#list li:eq(3) select").prepend("<option value='' selected='true' disabled='true'>选择代理商</option>")

		$.each(JQ_AGENTLIST[Arrayindex], function(i) {
			var name = JQ_AGENTLIST[Arrayindex][i].NAME;
			var Option_Valve = JQ_AGENTLIST[Arrayindex][i].ID;
			$("#list li:eq("+Listindex+") select").append("<option value="+Option_Valve+">"+name+"</option>");
		});
	},
	//设置所属门店的下拉内容
	Page1_STORELIST_Write_Info : function(Arrayindex,Listindex){
		$("#list li:eq(4) select option").remove();
		$("#list li:eq(4) select").prepend("<option value='' selected='true' disabled='true'>选择门店</option>")

		var  Arrar_temp= new Array();
		//获取所选分局的ID
		var IDindex=getinfo.page_1_ContentID_select(2);
		console.log(IDindex);
		for (var i = 0; i<JQ_STORELIST[Arrayindex].length;i++) {
			if (JQ_STORELIST[Arrayindex][i].SUBAREAID==IDindex) {
				Arrar_temp.push(JQ_STORELIST[Arrayindex][i]);
			}
		}
		$("#list li:eq("+Listindex+") select").append("<option value='All'>全部</option>");
		$.each(Arrar_temp, function(i) {
			var name = Arrar_temp[i].NAME;
			var Option_Valve = Arrar_temp[i].ID;
			Load_ALLStore_NAME_ID_TEMP.STORE_NAME[i]=name;
			Load_ALLStore_NAME_ID_TEMP.STORE_ID[i]=Option_Valve;
			$("#list li:eq("+Listindex+") select").append("<option name="+i+" value="+Option_Valve+">"+name+"</option>");
		});
	}
}




var other_Fac = {

	Page_2_2_settime_Ajax : function (older_data,_BUSTYPE,_DATETYPE){
			var d = new Date();
			var vYear = d.getFullYear();
			var vMon = d.getMonth() + 1;
			var vDay = d.getDate();
			var start_vMon=vMon-older_data;
			if(start_vMon<=0)
			{
				start_vMon=12;
				vYear=vYear-1;
			}
			var start_date=vYear+(start_vMon<10 ? "0" + start_vMon : ""+start_vMon)+("01");
			var end_date=vYear+(vMon<10 ? "0" + vMon : vMon)+(vDay<10 ? "0"+ vDay : vDay);
			Ajax_Store_Sales.STARTDATE=start_date;
			Ajax_Store_Sales.ENDDATE=end_date;
			Ajax_Store_Sales.STOREID= Load_Store_ID.STORE_ID;
			Ajax_Store_Sales.BUSTYPE=_BUSTYPE;
			Ajax_Store_Sales.DATETYPE=_DATETYPE;
			queryData.ajax(Ajax_Store_Sales ,Ajax_Url_Link.Store_sales_Url, Ajax_CallBack.Get_Page2_2_content);
	},

	//终端库存统计
	Page_2_4_settime_Ajax : function (older_data){
		var d = new Date();
		var vYear = d.getFullYear();
		var vMon = d.getMonth() + 1;
		var vDay = d.getDate();
		var start_date=other_Fac.getBeforeDate(older_data);
		var end_date=vYear+(vMon<10 ? "0" + vMon : vMon)+(vDay<10 ? "0"+ vDay : vDay);
		Ajax_TerminalReport.STARTDATE=start_date;
		Ajax_TerminalReport.ENDDATE=end_date;
		Ajax_TerminalReport.STOREID= Load_Store_ID.STORE_ID;
		Ajax_TerminalReport.DATETYPE="按天";
		queryData.ajax(Ajax_TerminalReport ,Ajax_Url_Link.TerminalReport_Url, Ajax_CallBack.Get_Page2_4_content);
	},

	//零销量预警
	Page_2_5_settime_Ajax : function (){

		Ajax_ZeroReport.STOREID=Load_Store_ID.STORE_ID;
		queryData.ajax(Ajax_ZeroReport ,Ajax_Url_Link.ZeroReport_Url, Ajax_CallBack.Get_Page2_5_content);

	},

	set_table : function (_obj_name,_data,_mobile,_broadband,_terminal,addothername){
		$(_obj_name).html("");
		for(var i=0;i<_data.length;i++){
			var timeindex=_data[i];
			var mobile_index=_mobile[i];
			var Broadband_index=_broadband[i];
			var Terminal_index=_terminal[i];
			var li_content = "<li><span>"+timeindex+addothername+"</span><span>"+mobile_index+"</span><span>"+Broadband_index+"</span><span>"+Terminal_index+"</span></li>";
			$(_obj_name).append(li_content);
		}
	},
	set_table2_2 : function (_obj_name,_data,_mobile){
		$(_obj_name).html("");
		for(var i=0;i<_data.length;i++){
			var timeindex=_data[i];
			var mobile_index=_mobile[i];
			var li_content = "<li><span>"+timeindex+"</span><span>"+mobile_index+"</span></li>";
			$(_obj_name).append(li_content);
		}
	},

	Echart : function(Chart_Content,Chart_date,Chart_Tip_name){
		require.config({
			paths: {
				echarts: './Echarts'
			}
		});
		// 使用
		require(
			[
				'echarts',
				'echarts/chart/line'

				/* 'Echarts/chart/line' // 使用柱状图就加载bar模块，按需加载*/
			],
			function (ec) {
				// 基于准备好的dom，初始化echarts图表
				var myChart = ec.init(document.getElementById('echart'));

				var option = {
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:Chart_Tip_name
					},

					dataZoom : filler,

					grid: {
						x:20,
						x2: 10
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : Chart_date
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : Chart_Content
				};
				// 为echarts对象加载数据
				myChart.setOption(option);
			}
		);
	},

	//获取前几天的日期
	getBeforeDate:function(n) {
		var n = n;
		var d = new Date();
		var year = d.getFullYear();
		var mon = d.getMonth() + 1;
		var day = d.getDate();
		if (day <= n) {
			if (mon > 1) {
				mon = mon - 1;
			}
			else {
				year = year - 1;
				mon = 12;
			}
		}
		d.setDate(d.getDate() - n);
		year = d.getFullYear();
		mon = d.getMonth() + 1;
		day = d.getDate();
		s = year + "" + (mon < 10 ? ("0" + mon) : mon) + (day < 10 ? ("0" + day) : day);
		return s;
	}
}
