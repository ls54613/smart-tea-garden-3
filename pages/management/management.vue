<template>
	<view class="cencend">
		<text class="item-text">历年产品成本及利润统计</text>
		<view class="charts-box">
			<qiun-data-charts type="column" :chartData="chartlist" />
		</view>

		<text class="item-text">历年销量及销售额统计</text>
	<view class="charts-box">
		<qiun-data-charts type="column" :chartData="chartData" />
	</view>
    <td>采购动态监测</td>

		<ct-tabbar />
	</view>
</template>

<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	import td from "@/components/t-table/t-td.vue"
	import th from "@/components/t-table/t-th.vue"
	import tr from "@/components/t-table/t-tr.vue"
	import {getcostProfit,getsalesvolume,getprocurement} from "@/common/api.js"
	export default {
		components:{
			ctTabbar,
			td,
			th,
			tr
			},
		data() {
			return {
				chartlist: {
					categories: [
						"2016",
						"2017",
						"2018",
						"2019",
						"2021"
					],
					series: [{
						"name": "成本费用",
						"data": [
							17,
							20,
							28,
							34,
							12
				
						]
					},
					{
						"name": "收益",
						"data": [
							17,
							20,
							28,
							34,
							11
				
						]
					},
					],
				},
				chartData: {
					categories: [
						"2016",
						"2017",
						"2018",
						"2019",
						"2020"
					],
					series: [{
						"name": "销量",
						"data": [
							117,
							120,
							128,
							134,

						]
					},
					{
						"name": "销售额",
						"data": [
							117,
							120,
							128,
							134,

						]
					},
					],
				},
				costProfit:[],
				salesvolume:[],
				procurement:[]
			}
		},
		onLoad() {
			this.jishaun();
			this.getInfo();

		},
		created() {
			this.getNowFormatDate();

		},
		methods: {
			jishaun() {
				this.cardData.a1 = (this.cardData.sonTime / (this.cardData.sonTime + this.cardData.slate + this.cardData
					.sother)).toFixed(2) * 100
				this.cardData.a2 = (this.cardData.slate / (this.cardData.sonTime + this.cardData.slate + this.cardData
					.sother)).toFixed(2) * 100
				this.cardData.a3 = (this.cardData.sother / (this.cardData.sonTime + this.cardData.slate + this.cardData
					.sother)).toFixed(2) * 100
				this.cardData.b1 = (this.cardData.onTime / (this.cardData.onTime + this.cardData.late + this.cardData
					.other)).toFixed(2) * 100
				this.cardData.b2 = (this.cardData.late / (this.cardData.onTime + this.cardData.late + this.cardData.other))
					.toFixed(2) * 100
				this.cardData.b3 = (this.cardData.other / (this.cardData.onTime + this.cardData.late + this.cardData
					.other)).toFixed(2) * 100
			},
			getInfo(){
				getcostProfit().then(res=>{
					
				});
				getsalesvolume().then(res=>{
					
				});
				getprocurement().then(res=>{
					
				});
			}
		}
	}
</script>

<style scoped>

	.time-title {
		width: 750rpx;
		line-height: 80rpx;
		font-size: 35rpx;
		text-align: center;
	}
	.time-title .time-left {
		margin-right: 30rpx;
	}
	.item-box {
		background-color: #F1F1F1;
		padding: 30rpx 0;
	}
	.item-list {
		width: 700rpx;
		height: 80rpx;
		position: relative;
		margin: 0 25rpx;
	}
	.middle-list {
		margin: 30rpx 25rpx;
	}
	.item-list text {
		line-height: 40rpx;
	}
	.right-text {
		top: 0rpx;
		position: absolute;
		right: 0rpx;
		text-align: center;
		line-height: 40rpx;
	}
	.time-tab {
		margin: 0 10rpx;
	}
	/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
	.charts-box {
		width: 750rpx;
		height: 500rpx;
	}
	.right-text text {margin-right: 300rpx;}
	.item-text {
		margin: 0 25rpx 10rpx 20rpx;
		line-height: 80rpx;
	}
</style>
