//服务器请求地址
/*var baseQuestUrl = "http://localhost:8080/entityChannel-web";*/
 var baseQuestUrl = "http://222.68.185.232:9080/EntityChannelInteface";
 //var baseQuestUrl = "http://happyfish2010.oicp.net:8082/entityChannel-web";


/**
 * queryData Module 异步请求常规数据
 * @param  {jquery} $             jquery
 * @param  {Object} window){	var queryData     返回对象
 * @return {underfind}               返回对象
 */
var queryData = (function($, window) {
	//questObj请求的参数;parame请求第接口;doSomething传入的方法
	var queryData = {};

	//异步请求数据
	queryData.ajax = function(questObj, parame, callback) {
		loading("add");
		$.ajax({
			url: baseQuestUrl + parame,
			// timeout: 20000,
			type: 'post',
			dataType: 'json',
			data: questObj,
			success: function(data) {
				loading("remove");
				callback(data);
			},
			complate: function(data) {
				loading('remove');
				//console.log(data);
			},
			error: function(e) {
				loading('remove');
				console.log(e);
			}
		});
	};
	return queryData;
})($, window);


//imgInterface Module 图片上传模块
var imgInterface = (function($, window) {
	var imgInterface = {
		//上传图片
		/**
		 * 上传图片方法
		 * @param  {string}   fileElementId input的id
		 * @param  {Function} callback      上传成功后返回json数据
		 * @return {[type]}                 [description]
		 */
		uploadImg: function(fileElementId, callback) {
			//图片上传路径
			var imgurl = '/upload/upload_image';
			$.ajaxFileUpload({
				url: baseQuestUrl + imgurl,
				secureuri: false,
				fileElementId: fileElementId,
				success: function(data, status) {
					console.log(data);
					console.log(status);
					jsonObj = JSON.parse($(data).find('pre').html());
					console.log(jsonObj);
					callback(jsonObj);
				},
				complate: function(e, callback) {
					//str:提交图片后返回的应答
					var str = $(e.responseText).html();
					// console.log(str);
					console.log(typeof(str));
					callback(str);
				}
			});
		}
	};
	return imgInterface;
})($, window);