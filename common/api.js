import { baseUrl,baseUrl2 } from './config.js'


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
		url: `${baseUr3}/teaEnterpriseInfo/getBaseInfo/18`,
		method: 'GET',
	});
}