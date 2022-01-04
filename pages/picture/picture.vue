<template>
	<view>
		<view class="head">
			<image src="../../static/img/v2_r0sz2m.png" mode=""></image>
			<view class="title">
				<text>欢迎使用</text>
				<text>万欧数字化茶园</text>
				<text>开发全程数字化管理</text>
			</view>
		</view>
		<view class="conten">
			<view class="card">
				<view class="card-text">
					<text>工基地-加工作业基地1</text>
			    </view>
				<view class="card-img">
					
					<image src="https://wo-oss-test.oss-cn-shanghai.aliyuncs.com/wannongbaojiankong1.png" mode=""></image>
				</view>
			</view>
			<view class="card">
				<view class="card-text">
					<text>加工基地-加工作业基地2</text>
				</view>
				<view class="card-img">
					<image src="https://wo-oss-test.oss-cn-shanghai.aliyuncs.com/wannongbaojiankong2.png" mode=""></image>
				</view>
				
			</view>
			<view class="card">
				<view class="card-text">
					<text>作物生长情况</text>
				</view>
				<view class="card-img">
					<image src="https://wo-oss-test.oss-cn-shanghai.aliyuncs.com/wannongbaojiankong3.png" mode=""></image>
				</view>
			</view>
		</view>
		<ct-tabbar />
	</view>
</template>

<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	export default {
		components:{ctTabbar},
		data() {
			return {
			}
		},
		onLoad() {},
		methods: {
		},

	};
</script>
<style scoped>
	.head {width: 750rpx; height: 360rpx; position: relative;}
	.head image {width: 750rpx; height: 360rpx; position: absolute;}
	.title {width: 345rpx; height: 170rpx; position: absolute; top: 130rpx; left: 395rpx;}
	.title text {display: inline-block; color: #595950; font-size: 45rpx; font-weight: 700; line-height: 58rpx;}
	.title text:nth-child(1) {margin-left: 132rpx;}
	.title text:nth-child(3) {font-size: 28rpx;}
	.conten {width: 750rpx;}
	.card {width: 640rpx;  margin: 0 auto; margin-bottom: 20rpx; color: #50586a; font-size: 28rpx;}
	.card:nth-child(1) {margin-top: 30rpx;}
	.card-img image {width: 640rpx; height: 360rpx; border-radius: 20rpx;}
</style>
