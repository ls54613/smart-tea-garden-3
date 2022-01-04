<template>
	<view class="shuninfo">
		<view class="card">
			<view class="card-title">
				<text>编译成功。前端运行日志编译成功。前端运行日志编译成功。</text>
			</view>
			<view class="card-bottom">
				<view class="title-left">
					<u-icon name="account-fill"></u-icon>
					<text>编译成功</text>
				</view>
				<view class="title-right">
					<u-icon name="clock-fill"></u-icon>
					<text>2021.10.28</text>
				</view>
			</view>
			<view class="card-cen">
				<text>编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。</text>
			</view>
			
			<view class="card-bottom-bottom">
				<view class="title-bottom-left">
					<u-icon name="star"></u-icon>
					<text>收藏</text>
				</view>
				<view class="title-bottom-right">
					<u-icon name="heart"></u-icon>
					<text>报名</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
 .shuninfo {
	 background-color: rgba(247, 247, 247, 0.9);
	 width: 750rpx;
	 padding-top: 40rpx;
	 padding-bottom: 20rpx;
	 min-height: 100vh;
	 
 }
 .card {
 	 width: 700rpx;
 	 margin: 0 auto 40rpx;
 	 font-size: 40rpx;
 	 background-color: #FFFFFF;
 	 border-radius: 15rpx;

 }
 .card-title {
	color: #000000;
 	padding: 30rpx 0;
 	margin: 0 40rpx 15rpx;
	text-align: center;
 }
 .card-cen {
 	 font-size: 34rpx;
 	 color: #585858;
 	 margin: 0  40rpx;
 	 padding-bottom: 30rpx;
	 text-indent:56rpx;
 }
 .card-bottom {
 	 font-size: 28rpx;
 	 color: #565656;
 	 margin: 5rpx  40rpx 0;
 	 position: relative;
	 padding-bottom: 15rpx;
 }
 .card-bottom text {
	 margin-left: 15rpx;
 }
 .title-left {
	 margin-left: 100rpx;
 }
 .title-right{
 	 position: absolute;
 	 left: 310rpx; 
	 bottom: 15rpx;
 }
 .title-bottom-left {
 	 margin-left: 360rpx;
 }
 .title-bottom-right{
 	 position: absolute;
 	 left: 480rpx; 
 	 bottom: 30rpx;
 }
.card-bottom-bottom{
	font-size: 28rpx;
	color: #565656;
	margin: 5rpx  40rpx 0;
	position: relative;
	padding-bottom: 30rpx;
}
</style>
