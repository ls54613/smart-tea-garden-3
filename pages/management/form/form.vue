<template>
	<view>
		<view class="box">
			<t-table @change="change">
				<t-tr>
					<t-th>序号</t-th>
					<t-th>姓名</t-th>
					<t-th>部门</t-th>
					<t-th>打卡时间</t-th>
				</t-tr>
				<t-tr v-for="(item ,index) in tableList" :key="item.id">
					<t-td>{{ index + 1 }}</t-td>
					<t-td>{{ item.name }}</t-td>
					<t-td>{{ item.age }}</t-td>
					<t-td>{{ item.hobby }}</t-td>
				</t-tr>
			</t-table>
		</view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		data() {
			return {
				tableList: [
					{
						id: 0,
						name: '张三',
						age: '开发部',
						hobby: '09:00'
					},
					{
						id: 1,
						name: '李四',
						age: '开发部',
						hobby: '08:45'
					},
					{
						id: 2,
						name: '王二',
						age: '开发部',
						hobby: '08:49'
					},
					{
						id: 3,
						name: '码字',
						age: '销售部',
						hobby: '07:57'
					},
					{
						id: 0,
						name: '张三',
						age: '开发部',
						hobby: '09:00'
					},
					{
						id: 1,
						name: '李四',
						age: '开发部',
						hobby: '08:45'
					},
					{
						id: 2,
						name: '王二',
						age: '开发部',
						hobby: '08:49'
					},
					{
						id: 3,
						name: '码字',
						age: '销售部',
						hobby: '07:57'
					},
					{
						id: 0,
						name: '张三',
						age: '开发部',
						hobby: '09:00'
					},
					{
						id: 1,
						name: '李四',
						age: '开发部',
						hobby: '08:45'
					},
					{
						id: 2,
						name: '王二',
						age: '开发部',
						hobby: '08:49'
					},
					{
						id: 3,
						name: '码字',
						age: '销售部',
						hobby: '07:57'
					},
					{
						id: 0,
						name: '张三',
						age: '开发部',
						hobby: '09:00'
					},
					{
						id: 1,
						name: '李四',
						age: '开发部',
						hobby: '08:45'
					},
					{
						id: 2,
						name: '王二',
						age: '开发部',
						hobby: '08:49'
					},
					{
						id: 3,
						name: '码字',
						age: '销售部',
						hobby: '07:57'
					},
				]
			}
		},
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		methods: {
			change(e) {
				console.log(e.detail);
			},
			edit(item) {
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
			}
		}
}
</script>

<style scoped>
.box {
	width: 650rpx;
	margin: 40rpx auto 0;
}
</style>
