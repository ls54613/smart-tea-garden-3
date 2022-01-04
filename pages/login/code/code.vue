<template>
	<view class="wrap">
		<view class="key-input">
			<view class="title">输入验证码</view>
			<view class="tips">验证码已发送至 +{{user.phone}}</view>
			<u-message-input :focus="true" :value="value" @change="change" @finish="finish" mode="bottomLine" :maxlength="maxlength"></u-message-input>
			<text :class="{ error: error }">验证码错误，请重新输入</text>
			<view class="captcha">
				<text :class="{ noCaptcha: show }" @tap="noCaptcha">收不到验证码点这里</text>
				<text :class="{ regain: !show }">{{ second }}秒后重新获取验证码</text>
			</view>
		</view>
	</view>
</template>

<script>
import { baseUrl } from '@/common/config.js'
import {getOpenId,getOpenIdDetail,add} from '@/common/api.js'
export default {
	data() {
		return {
			user: {
				openId:'',
				nickname:'',
				image:'',
				phone: '',
			},
			maxlength: 4,
			value: '',
			second: 60,
			show: false,
			error: false,
		};
	},
	computed: {},
	onLoad(tel) {
		this.user.phone = tel.tel
		// this.getCaptcha()
		this.timeinfo();
		//获取openID
		this.sahjhda();
	},
	methods: {
		// 收不到验证码选择时的选择
		noCaptcha() {
			const that = this
			uni.showActionSheet({
				itemList: ['重新获取验证码'],
				success: function(res) {
					console.log(res)
					console.log(that.show)
					that.show = false;
					that.error = false;
					that.second = 60;
					that.timeinfo();
				}
			});
		},
		//验证重发计时
		timeinfo() {
			let interval = setInterval(() => {
				this.second--;
				if (this.second <= 0) {
					this.show = true;
					if (this.value.lenth != 4) {
						this.error = true;
					}
					clearInterval(interval);
				}
			}, 1000);
		},
		// change事件侦听
		change(value) {
		},
		// 输入完验证码最后一位执行
		finish(value) {
			const that = this;
			console.log('finish', value);
			this.$u.get(`${baseUrl}/gdadmin/api/permission/Users/getUserPhone?phone=`+this.user.phone).then(res =>{
				if(!res.data){
					//获取用户微信头像昵称
					wx.getUserInfo({
					  success: function(res) {
						  // console.log(res)
						  console.log(that.user);
						that.user.nickname = res.userInfo.nickName
						that.user.image = res.userInfo.avatarUrl
						//保存用户手机头像昵称到服务器
						that.$u.post(`${baseUrl}/gdadmin/mini/wx_user/add`,that.user).then(res =>{
							
						})
					  }
					})
					}else{
						that.user.nickname = res.data.realName
						that.$u.post(`${baseUrl}/gdadmin/mini/wx_user/add`,that.user).then(res =>{
						})
					}
				})
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		//获取openID
		sahjhda() {
			const that = this;
			wx.login({
				success(res) {
					console.log(res)
					if (res.code) {	
						getOpenId(res.code).then((e)=>{
							if(e[1].data.code = 200) {
								 that.user.openId = e[1].data.data.match(/"openid":"(\S*)"}/)[1]
								 console.log(that.user.openId)
								 console.log(11111)
							} else{
							console.log('服务器错误！OpenId请求失败')
							}
						})
					} else {
						console.log('code获取错误！登录失败！' + res.errMsg)
					}
				}
			})
		},
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 80rpx;
}

.box {
	margin: 30rpx 0;
	font-size: 30rpx;
	color: 555;
}

.key-input {
	padding: 30rpx 0;
	text {
		display: none;
	}
	.error {
		display: block;
		color: red;
		font-size: 30rpx;
		margin: 20rpx 0;
	}
}
.title {
	font-size: 50rpx;
	color: #333;
}

.key-input .tips {
	font-size: 30rpx;
	color: #333;
	margin-top: 20rpx;
	margin-bottom: 60rpx;
}
.captcha {
	color: $u-type-warning;
	font-size: 30rpx;
	margin-top: 40rpx;
	.noCaptcha {
		display: block;
	}
	.regain {
		display: block;
	}
}
</style>
