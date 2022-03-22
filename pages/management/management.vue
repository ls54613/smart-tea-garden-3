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
	<view class="table-box">
		<text class="item-text">采购动态监测</text>
		<t-table id="tb">
			<t-tr>
				<t-th>采购日期</t-th>
				<t-th>采购物品</t-th>
				<t-th>数量</t-th>
			</t-tr>
			<t-tr v-for="(item,index) in tableData">
				<t-td v-for="(e,i) in item">{{e}}</t-td>
			</t-tr>
		</t-table>
	</view>
		<ct-tabbar />
	</view>
</template>

<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	import tTd from "@/components/t-table/t-td.vue"
	import tTh from "@/components/t-table/t-th.vue"
	import tTr from "@/components/t-table/t-tr.vue"
	import tTable from "@/components/t-table/t-table.vue"
	import {getcostProfit,getsalesvolume,getprocurement} from "@/common/api.js"
	export default {
		components:{
			ctTabbar,
			tTd,
			tTh,
			tTr,
			tTable
			},
		data() {
			return {
				chartlist: {
					categories: [],
					series: [{
						"name": "成本费用(万元)",
						"data": []
					},
					{
						"name": "收益(万元)",
						"data": []
					},
					],
				},
				chartData: {
					categories: [],
					series: [{
						"name": "销量(吨)",
						"data": []
					},
					{
						"name": "销售额(万元)",
						"data": []
					},
					],
				},
				tableData:[
					["2020.10.10","采购有机肥","1000袋"],
					["2020.9.18","采购农事工具","80套"],
					["2020.8.19","采购植保无人机","1架"],
					["2020.7.27","采购杀虫版","1000套"]
				]
			}
		},
		onLoad() {
			this.getInfo();
		},
		created() {
		},
		methods: {
			getInfo(){
				getcostProfit().then(res=>{
					// console.log(res[1].data.data)
					res[1].data.data.forEach(item=>{
						this.chartlist.categories.push(item.year);
						this.chartlist.series[0].data.push(item.cost);
						this.chartlist.series[1].data.push(item.profit)
					})
				});
				getsalesvolume().then(res=>{
					// console.log(res[1].data.data)
					res[1].data.data.yearList.forEach(item=>{
						this.chartData.categories.push(item);
					});
					res[1].data.data.data.forEach(item=>{
						this.chartData.series[0].data.push(item.salesNumber);
						this.chartData.series[1].data.push(item.salesMoney)
				});
			});
			    getprocurement().then(res=>{
				  // console.log(res)
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
		color: #55ffff;
		font-size: 35rpx;
		text-align:center;
	}
</style>
