<template>
	<view class="cencend-info">
		<view class="card" @tap="shuninfo">
			<view class="card-title">
				<text>编译成功。前端运行日志编译成功。前端运行日志编译成功。前端运行日志</text>
			</view>
			<view class="card-cen">
				<text>编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。</text>
			</view>
			<view class="card-bottom">
				<text>2021.10.28</text><text>编译成功</text>
			</view>
		</view>
		<!-- <view class="card">
			<view class="card-title">
				<text>编译成功。前端运行日志编译成功。前端运行日志编译成功。前端运行日志</text>
			</view>
			<view class="card-cen">
				<text>编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。</text>
			</view>
			<view class="card-bottom">
				<text>2021.10.28</text><text>编译成功</text>
			</view>
		</view>
		<view class="card">
			<view class="card-title">
				<text>编译成功。前端运行日志编译成功。前端运行日志编译成功。前端运行日志</text>
			</view>
			<view class="card-cen">
				<text>编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。</text>
			</view>
			<view class="card-bottom">
				<text>2021.10.28</text><text>编译成功</text>
			</view>
		</view>
		<view class="card">
			<view class="card-title">
				<text>编译成功。前端运行日志编译成功。前端运行日志编译成功。前端运行日志</text>
			</view>
			<view class="card-cen">
				<text>编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。</text>
			</view>
			<view class="card-bottom">
				<text>2021.10.28</text><text>编译成功</text>
			</view>
		</view>
		<view class="card">
			<view class="card-title">
				<text>编译成功。前端运行日志编译成功。前端运行日志编译成功。前端运行日志</text>
			</view>
			<view class="card-cen">
				<text>编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。</text>
			</view>
			<view class="card-bottom">
				<text>2021.10.28</text><text>编译成功</text>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			shuninfo() {
				this.$u.route({
					url: 'pages/infoshun/shuninfo/shuninfo',
				})
			}
		}
	}
</script>

<style scoped>
 .cencend-info {
	 background-color: rgba(247, 247, 247, 0.9);
	 width: 750rpx;
	 padding-top: 40rpx;
	 padding-bottom: 20rpx;
	 min-height: 100vh;
 }
 .card {
	 width: 700rpx;
	 margin: 0 auto 40rpx;
	 font-size: 38rpx;
	 background-color: #FFFFFF;
	 border-radius: 15rpx;
	 
 }
 .card-title {
	padding-top: 30rpx;
	margin: 0 30rpx 15rpx 30rpx;
 }
 .card-cen {
	 font-size: 28rpx;
	 color: #919191;
	 margin: 0  30rpx;
	 padding-bottom: 15rpx;
 }
 .card-cen text{
	 text-overflow: -o-ellipsis-lastline;
	 overflow: hidden;
	 text-overflow: ellipsis;
	 display: -webkit-box;
	 -webkit-line-clamp: 2;
	 -webkit-box-orient: vertical;
 }
 .card-title text{
	 text-overflow: -o-ellipsis-lastline;
	 overflow: hidden;
	 text-overflow: ellipsis;
	 display: -webkit-box;
	 -webkit-line-clamp: 1;
	 -webkit-box-orient: vertical;
 }
 .card-bottom {
	 font-size: 24rpx;
	 color: #565656;
	 margin: 0  30rpx;
	 padding-bottom: 30rpx;
	 position: relative;
 }
 .card-bottom text:nth-child(2){
	 position: absolute;
	 left: 200rpx;
 }
</style>
