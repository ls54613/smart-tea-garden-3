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
				<t-td>{{data.regCapital+"人民币"}}</t-td>
			</t-tr>
			<t-tr>
				<t-td>地址</t-td>
				<t-td>{{data.address}}</t-td>
				<t-td>简介</t-td>
				<t-td>经营茶叶生产</t-td>
			</t-tr>
		</t-table>
		<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170724%2Fd83f0446db0b4e6da9dc498ff6ddf1e9_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650444902&t=0b97ed38395a5fafd2673fd4e77fcb0a" mode="aspectFit"></image>
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
	.container image{
		width: 100%;
	}
</style>
