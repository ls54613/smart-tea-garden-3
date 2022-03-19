<template>
	<view class="container">
		<t-table>
			<t-tr><t-th>{{data.enterpriseName}}</t-th></t-tr>
			<t-tr>
				<t-td>主体类型</t-td>
				<t-td>中小微企业</t-td>
				<t-td>种植面积</t-td>
				<t-td>{{data.cultivatedArea+"亩"}}</t-td>
			</t-tr>
			<t-tr>
				<t-td>企业性质</t-td>
				<t-td>{{data.nature}}</t-td>
				<t-td>成立时间</t-td>
				<t-td>{{data.setUpDate}}</t-td>
			</t-tr>
			<t-tr>
				<t-td>法人</t-td>
				<t-td>{{data.legalPerson}}</t-td>
				<t-td>法人身份证</t-td>
				<t-td>{{data.legalPersonIdCard}}</t-td>
			</t-tr>
			<t-tr>
				<t-td>经营现状</t-td>
				<t-td>开业</t-td>
				<t-td>注册资本</t-td>
				<t-td>{{data.regCapital+"人名币"}}</t-td>
			</t-tr>
			<t-tr>
				<t-td>地址</t-td>
				<t-td>{{data.address}}</t-td>
				<t-td>简介</t-td>
				<t-td>经营茶叶生产</t-td>
			</t-tr>
		</t-table>
		<image src="../../static/img/12344(1).png" mode=""></image>
		<ct-tabbar />
	</view>
</template>

<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	import {getBasiclnfo} from "@/common/api.js"
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components:{ctTabbar,tTable,tTh,tTr,tTd},
		data() {
			return {
				data:[]
			};
		},
		onLoad() {
			this.getInfo();
		},
		methods:{
			getInfo(){
				getBasiclnfo().then(res=>{
					this.data=res[1].data.data;
					console.log(res[1].data.data)
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 750rpx;
		background-color: #f6f7f9;
	}
	.container text {
		line-height: 100rpx;
		display: inline-block;
		position: relative;
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
	.container-box view text:nth-child(0) {
		font-size: 28rpx;
		color: #595950;
		font-weight: 600;
		line-height: 80rpx;
	}
	.container-box view text:nth-child(1) {
		font-size: 50rpx;
		color: #000000;
		display: block;
		font-weight: 700;
	}
</style>
