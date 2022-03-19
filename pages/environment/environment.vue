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
		<u-tabs :list="tabs" :is-scroll="false" :current="tabCurrent" @change="change"></u-tabs>
		<view class="container">
			<view class="title-box">
				<text>实时监控数据</text>
				<text class="iconfont icon-dingwei">一号基地</text>
			</view>
			<view class="container-box">
				<view class="item-box" :class="number==0?'active2' : ''" @tap="tapActive(0)">
					<image src="../../static/img/wendu.png" mode=""></image>
					<view class="item-text-box ">
						<view class="item-list" :class="number==0?'active2' : ''">大气温度</view>
						<view class="item-list" :class="number==0?'active2' : ''">18.0us/cm</view>
					</view>
				</view>
				<view class="item-box " :class="number==1?'active2' : ''" @tap="tapActive(1)">
					<image src="../../static/img/dqshidu1.png" mode=""></image>
					<view class="item-text-box">
						<view class="item-list" :class="number==1?'active2' : ''">大气湿度</view>
						<view class="item-list" :class="number==1?'active2' : ''">64.8%</view>
					</view>
				</view>
				<view class="item-box" :class="number==2?'active2' : ''" @tap="tapActive(2)">
					<image src="../../static/img/fensu.png" mode=""></image>
					<view class="item-text-box ">
						<view class="item-list" :class="number==2?'active2' : ''">风速</view>
						<view class="item-list" :class="number==2?'active2' : ''">109117.4Lux</view>
					</view>
				</view>
				<view class="item-box" :class="number==3?'active2' : ''" @tap="tapActive(3)">
					<image src="../../static/img/fenxiang.png" mode=""></image>
					<view class="item-text-box ">
						<view class="item-list " :class="number==3?'active2' : ''">风向</view>
						<view class="item-list " :class="number==3?'active2' : ''">15%</view>
					</view>
				</view>
				<view class="item-box" :class="number==4?'active2' : ''" @tap="tapActive(4)">
					<image src="../../static/img/yanfen.png" mode=""></image>
					<view class="item-text-box ">
						<view class="item-list " :class="number==4?'active2' : ''">盐分</view>
						<view class="item-list " :class="number==4?'active2' : ''">31.2℃</view>
					</view>
				</view>
				<view class="item-box" :class="number==5?'active2' : ''" @tap="tapActive(5)">
					<image src="../../static/img/yuliang.png" mode=""></image>
					<view class="item-text-box ">
						<view class="item-list " :class="number==5?'active2' : ''">雨量</view>
						<view class="item-list " :class="number==5?'active2' : ''">31.2℃</view>
					</view>
				</view>
				<view class="item-box" :class="number==6?'active2' : ''" @tap="tapActive(6)">
					<image src="../../static/img/trwendu.png" mode=""></image>
					<view class="item-text-box ">
						<view class="item-list " :class="number==6?'active2' : ''">土壤温度</view>
						<view class="item-list " :class="number==6?'active2' : ''">31.2℃</view>
					</view>
				</view>
				<view class="item-box" :class="number==7?'active2' : ''" @tap="tapActive(7)">
					<image src="../../static/img/frlizi.png" mode=""></image>
					<view class="item-text-box ">
						<view class="item-list " :class="number==7?'active2' : ''">负壤离子</view>
						<view class="item-list " :class="number==7?'active2' : ''">32.1℃</view>
					</view>
				</view>
			</view>
		</view>
		<view class="time-tab">
			<u-subsection :list="timeTab" :current="0"></u-subsection>
		</view>
		<view class="charts-box">
			<qiun-data-charts type="line" :chartData="chartData" />
		</view>
		<view class="tabbar-box">
			<ct-tabbar />
		</view>

	</view>
</template>

<script>

	import '@/common/icon/iconfont.css'
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	export default {
		components:{ctTabbar},
		data() {
			return {
				tabs: [{
					name: '一号基地'
				}, {
					name: '二号基地'
				}, {
					name: '三号基地',
				}],
				tabCurrent: 0,
				timeTab: [{
						name: '日'
					},
					{
						name: '月'
					},
					{
						name: '年'
					}
				],
				current: 0,
				chartData: {
					categories: [
						"07:00",
						"09:00",
						"11:00",
						"13:00",
						"15:00",
						"17:00",
						"13:00",
						"15:00",
						"17:00"
					],
					series: [{
						"name": "温度",
						"data": [
							17,
							20,
							28,
							34,
							30,
							26,
							34,
							30,
							26
						]
					}],
				},
				number: 0
			}
		},
		methods: {
			change(index) {
				this.tabCurrent = index;
				console.log(index)
			},
			tapActive(num) {
				this.number = num
				console.log(num)
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
	.container-box .item-box {
		width: 325rpx;
		height: 150rpx;
		margin: 0 auto 26rpx auto;
		border-radius: 10rpx;
		position: relative;
		border: 1rpx solid #118448;
		display: flex;
	}
	.img-box {
		height: 120rpx;
		width: 120rpx;
		margin: auto 0 auto 15rpx;
		display: inline-block;
		background-color: #909399;
		position: absolute;
	}
	.container-box view image {
		width: 110rpx;
		height: 110rpx;
		vertical-align: middle;
		margin-top: 15rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	.item-list {
		line-height: 60rpx !important;
		font-weight: 600;
		color: #19BE6B;
	}
	.item-list:nth-child(1) {
		margin-top: 15rpx;
		color: #272727;
	}
	.item-text-box {
		flex: 1;
	}
	.active2 {
		background-color: #139550;
		color: #FFFFFF !important;
	}
	.time-tab {
		margin: 0 10rpx;
	}
	/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
	.charts-box {
		width: 750rpx;
		height: 500rpx;
	}
	.tabbar-box {
		z-index: 9999999;
	}
</style>
