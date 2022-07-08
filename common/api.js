import { baseUrl,baseUrl2,baseUrl3,baseUrl4} from './config.js'
const token = uni.getStorageSync('storage_token')

export function getOpenId(code){
	return uni.request({
		url: `${baseUrl}/gdadmin/mini/wx_user/getOpenId?code=${code}`,
		method: 'GET'
	});
}

export function getOpenIdDetail(openId){
	return uni.request({
		url: `${baseUrl}/gdadmin/mini/wx_user/getOpenIdDetail?openId=${openId}`,
		method: 'GET'
	});
}

export function add(user){
	return uni.request({
		url: `${baseUrl}/gdadmin/mini/wx_user/add`,
		method: 'post',
	});
}

//报警信息
export function getAlarm(){
	return uni.request({
		url: `${baseUrl2}/service/jikaida/getAlarm`,
		method: 'GET',
	});
}

export function nodeInfo(){
	return uni.request({
		url: `${baseUrl2}/service/jikaida/nodeInfo?nodeInfo=869334058143721`,
		method: 'GET',
	});
}
//设备详情
// export function getGas(){
// 	return uni.request({
// 		url: `${baseUrl2}/service/jikaida/getGas?device=869334058143721`,
// 		method: 'GET',
// 	});
// }

export function getIsFalse(){
	return uni.request({
		url: `${baseUrl}/gdadmin/mini/sensorInfo/getIsFalse`,
		method: 'GET',
	});
}
// 茶企基本信息
export function getBasiclnfo(){
	return uni.request({
		// url: `${baseUrl3}/teaEnterpriseInfo/getBaseInfo/25`,
		url:'http://localhost:8081/system/teaEnterpriseInfo/list?pageNum=1&pageSize=10&enterpriseName=常宁市兴华农业开发有限公司&deptId=100',
		method: 'GET',
		header:{
			  Authorization:"Bearer"+token
		}
	});
}
// 成本与收益
export function getcostProfit(){
 return uni.request({
  // url: `${baseUrl3}/teaEnterpriseInfo/costAndProfitStatistics/25`,
  url:'http://localhost:8081/system/teaEnterpriseYieldSales/list?pageNum=1&pageSize=10&teaPeasantId=12&deptId=100',
  method: 'GET',
  header:{
  	  Authorization:"Bearer"+token
  }
 });
}
// 销售与销售额
export function getsalesvolume(){
 return uni.request({
  // url: `${baseUrl3}/teaEnterpriseInfo/getYieldSalesTotal?id=25`,
  url:'http://localhost:8081/system/teaEnterpriseYieldSales/list?pageNum=1&pageSize=10&teaPeasantId=12&deptId=100',
  method: 'GET',
  header:{
  	  Authorization:"Bearer"+token
  }
 });
}
// 采购动态
export function getprocurement (){
 return uni.request({
  // url: `${baseUrl3}/teaEnterpriseInfo/purchaseMonitor?id=12`,
  url:'http://localhost:8081/system/teaEnterpriseProcurement/list?pageNum=1&pageSize=10&teaEnterpriseId=12&deptId=100',
  method: 'GET',
  header:{
	  Authorization:"Bearer"+token
  }
 });
}
// 验证码
export function getcode (){
 return uni.request({
  url: `${baseUrl4}/captchaImage`,
  method: 'GET',
 });
}
// 登录
export function post (info){
  return uni.request({
   url: `${baseUrl4}/login`,
   method: 'POST',
   data:info
  });
}