<template>
	<view class="content">
		<view class="head">
			<image src="../../static/img/v2_r0sz2m.png" mode=""></image>
			<view class="title">
				<text>欢迎使用</text>
				<text>万欧数字化茶园</text>
				<text>开发全程数字化管理</text>
			</view>
		</view>
		<view class="modular">
			<view @tap="toEnvironment">
				<image src="../../static/img/leida.png" mode=""></image>
				<text>环境监测</text>
			</view>
			<view @tap="toPicture">
				<image src="../../static/img/huanj.png" mode=""></image>
				<text>基地实景</text>
			</view>
			<view @tap="toManagement">
				<image src="../../static/img/renyuan.png" mode=""></image>
				<text>生产管理</text>
			</view>
			<view @tap="toVideo">
				<image src="../../static/img/shengcguanl.png" mode=""></image>
				<text>{{textdata}}</text>
			</view>
		</view>
		<view class="alert">
			<text class="iconfont icon-notice">环境预警:当前气温为5度，温度过低。</text>
		</view>
		<view class="container">
			<view class="title-box">
				<text>实时监控数据</text>
				<text class="right-text iconfont icon-dingwei">B-B302</text>
			</view>
			<view class="container-box">
				<view>
					<image src="../../static/img/taiyang.png" mode=""></image>
					<text>光照强度</text>
					<text>7.81</text>
				</view>
				<view>
					<image src="../../static/img/wendu.png" mode=""></image>
					<text>土壤温度</text>
					<text>23.6</text>
				</view>
				<view>
					<image src="../../static/img/hsidu.png" mode=""></image>
					<text>土壤湿度</text>
					<text>0.32</text>
				</view>
				<view>
					<image src="../../static/img/ph.png" mode=""></image>
					<text>土壤PH</text>
					<text>7.33</text>
				</view>
			</view>
		</view>
		<ct-tabbar />
	</view>
</template>

<script>
	import {
		baseUrl
	} from '@/common/config.js'
	import {
		getOpenId,
		getOpenIdDetail,
		add,
		getIsFalse
	} from '@/common/api.js'
	import '@/common/icon/iconfont.css'
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	export default {
		components: {
			ctTabbar
		},
		data() {
			return {
				user: {
					openId: '',
					nickname: '',
					image: '',
					
				},
				vid:'false',
				textdata:'数据分析'
			}
		},
		onLoad() {
			this.sahjhda();
			this.Falseinfo();
		},
		methods: {
			sahjhda() {
				const that = this;
				wx.login({
					success(res) {
						if (res.code) {
							// console.log('登录成功' + res.errMsg)
							// console.log(res.code)
							getOpenId(res.code).then((e) => {
								if (e[1].data.code = 200) {
									// console.log(e)
									// console.log(e[1].data.data)
									that.user.openId = e[1].data.data.match(/"openid":"(\S*)"}/)[1]
									console.log(that.user.openId)

									getOpenIdDetail(that.user.openId).then((arr) => {
										console.log(arr)
										if (!arr[1].data.data) {
											//判断微信用户是否存在不存在跳到登录页面
											that.$u.route({
												url: 'pages/login/login'
											});
										
										}
									})
								} else {
									console.log('服务器错误！OpenId请求失败')
								}
							})
						} else {
							console.log('code获取错误！登录失败！' + res.errMsg)
						}
					}
				})
			},
			Falseinfo() {
				getIsFalse().then((res)=>{
					console.log('发送请求')
					this.vid = res[1].data.data
					if(this.vid){
						this.textdata = '视频监控'
						console.log('请求结果' + this.vid)
					}
				})
			},
			toEnvironment() {
				uni.navigateTo({
					url: '/pages/environment/environment'
				})
			},
			toVideo() {
				uni.navigateTo({
					url: '/pages/video/video'
				})
			},
			toManagement() {
				uni.navigateTo({
					url: '/pages/management/management'
				})
			},
			toPicture() {
				uni.navigateTo({
					url: '/pages/picture/picture'
				})
			},
			infoshun() {
				uni.navigateTo({
					url: '/pages/infoshun/infoshun'
				})
			}
		}
	}
</script>

<style scoped>
	.head {
		width: 750rpx;
		height: 360rpx;
		position: relative;
	}
	.head image {
		width: 750rpx;
		height: 360rpx;
		position: absolute;
	}
	.title {
		width: 345rpx;
		height: 170rpx;
		position: absolute;
		top: 130rpx;
		left: 395rpx;
	}
	.title text {
		display: inline-block;
		color: #595950;
		font-size: 45rpx;
		font-weight: 700;
		line-height: 58rpx;
	}
	.title text:nth-child(1) {
		margin-left: 132rpx;
	}
	.title text:nth-child(3) {
		font-size: 28rpx;
	}
	.modular {
		width: 750rpx;
		height: 214rpx;
		display: flex;
	}
	.modular view {
		flex: 1;
		text-align: center;
		color: #595950;
		font-size: 27rpx;
	}
	.modular view image {
		width: 88rpx;
		height: 88rpx;
		display: block;
		margin: 55rpx auto 20rpx auto;
	}
	.alert {
		background-color: #fefced;
		width: 750rpx;
		height: 77rpx;
		margin-top: 15rpx;
	}
	.alert text {
		font-size: 27rpx;
		color: #ff6529;
		line-height: 77rpx;
		margin-left: 15rpx;
	}
	.container {
		width: 750rpx;
		background-color: #f6f7f9;
	}
	.container text {
		line-height: 100rpx;
		display: inline-block;
		position: relative;
	}
	.title-box text:nth-child(1) {
		font-size: 34rpx;
		color: #121a25;
		font-weight: 600;
		margin-left: 30rpx;
	}
	.title-box text:nth-child(2) {
		font-size: 26rpx;
		color: #595950;
		position: absolute;
		right: 40rpx;
	}
	.container-box {
		display: flex;
		flex-wrap: wrap;
		margin: 0 25rpx 25rpx 25rpx;
	}
	.container-box view {
		width: 325rpx;
		height: 207rpx;
		text-align: center;
		background-color: #ffffff;
		margin: 0 auto 26rpx auto;
		border-radius: 30rpx;
		position: relative;
	}
	.container-box view image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
		vertical-align: middle
	}
	.container-box view text:nth-child(2) {
		font-size: 28rpx;
		color: #595950;
		font-weight: 600;
		line-height: 80rpx;
	}
	.container-box view text:nth-child(3) {
		font-size: 50rpx;
		color: #000000;
		display: block;
		font-weight: 700;
	}
</style>
