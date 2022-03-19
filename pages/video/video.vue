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
		<view class="main">
			<text>历史销量</text>
			<text>成本分析</text>
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
				textdata:'数据分析'
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style scoped>
	.head {width: 750rpx; height: 360rpx; position: relative;}
	.head image {width: 750rpx; height: 360rpx; position: absolute;}
	.title {width: 345rpx; height: 170rpx; position: absolute; top: 130rpx; left: 395rpx;}
	.title text {display: inline-block; color: #595950; font-size: 45rpx; font-weight: 700; line-height: 58rpx;}
	.title text:nth-child(1) {margin-left: 132rpx;}
	.title text:nth-child(3) {font-size: 28rpx;}
	
	.main text{display: block;text-align: center;}
</style>
