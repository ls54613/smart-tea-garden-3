<template>
	<view class="record">
		<view class="centen">
			<view class="search-box">
				<view class="search">
					<u-search placeholder="设备名称/IMEI号" v-model="keyword" height="70" border-color="#ababab"
						bg-color="#ffffff"></u-search>
				</view>
			</view>
			<view class="card">
				<view class="card-top">
					<view class="card-top-list list-title">
						<text>麓谷国际工业园</text>
					</view>
					<view class="card-top-list list-ixu">
						<!-- <text>修改信息</text> -->
					</view>
					<view class="card-top-list">
						<text>地址：长沙市麓谷国际工业园6栋602</text>
					</view>
				</view>
				<view class="card-table">
					<view class="card-table-item">
						<view class="card-table-list">
							<text>管理员：</text>
						</view>
						<view class="card-table-list">
							<text>设备数：1</text><text class="iconfont icon-youfanhui" @tap="toEquipment"></text>
						</view>
					</view>
					<view class="card-table-item">
						<view class="card-table-list">
							<text>常驻人员：</text><text @tap="resident" class="iconfont icon-youfanhui"></text>
						</view>
						<view class="card-table-list">
							<text>临时人员：1</text><text @tap="people" class="iconfont icon-youfanhui"></text>
						</view>
					</view>
					<view class="card-table-bottom">
						<view class="table-bottom-left">
							<text>故障设备：无</text>
						</view>
						<view class="table-bottom-right">
							<text>通知住户：</text>
							<u-switch v-model="checked" class="switch" active-color="#1cb76b"></u-switch>
						</view>
					</view>
				</view>
			</view>
			<!-- 常驻人员的遮罩层 -->
			<u-popup v-model="show1" mode="center" border-radius="14" width="580rpx" height="700rpx">

				<view class="popup-box">
					<scroll-view scroll-y="true" style="height: 590rpx;border-bottom: 1px solid #e6e6e6;">
						<view class="popup-cen">
							<u-table>
								<u-tr class="table_th">
									<u-th>姓名</u-th>
									<u-th width="40%">手机号</u-th>
									<u-th>备注</u-th>
								</u-tr>
								<u-tr class="table_td">
									<u-td>张三</u-td>
									<u-td width="40%">18574739808</u-td>
									<u-td>无</u-td>
								</u-tr>
								<u-tr class="table_td">
									<u-td class="table_name">李四</u-td>
									<u-td width="40%">18574739808</u-td>
									<u-td>无</u-td>
								</u-tr>
							</u-table>
						</view>
					</scroll-view>
					<view class="place_close" style="text-align: center;line-height: 108rpx;color: #2375fe;"
						@tap="show1=false">
						关闭
					</view>
				</view>
			</u-popup>

			<!-- 临时人员遮罩层 -->
			<u-popup v-model="show2" mode="center" border-radius="14" width="580rpx" height="700rpx">
				<view class="popup-box">
					<scroll-view scroll-y="true" style="height: 590rpx;border-bottom: 1px solid #e6e6e6;">

						<!-- 表单 -->
						<view style="padding: 20px 20px 0 20px;">
							<view>添加临时人员 :</view>
							<view style="display: flex;">
								<u-form :model="form" ref="uForm">
									<u-form-item label="姓名 :">
										<u-input />
									</u-form-item>
									<u-form-item label="手机 :">
										<u-input />
									</u-form-item>
								</u-form>
								<u-button style="margin-top: 30px;padding: 0 10px;" type="success">保存</u-button>
							</view>
						</view>

						<!-- 表格 -->
						<view>
							<view class="popup-cen">
								<view style="padding-left: 20px;margin-top: 5px;">临时人员 :</view>
								<u-table style="border-top: 1px solid #FFFFFF;">
									<u-tr class="table_th">
										<u-th>姓名</u-th>
										<u-th>手机号</u-th>
										<u-th>操作</u-th>
									</u-tr>
									<u-tr class="table_td">
										<u-td>万欧科技</u-td>
										<u-td>18574739809</u-td>
										<u-td style="color:red;">删除</u-td>
									</u-tr>
								</u-table>
							</view>
						</view>
					</scroll-view>
					<view class="place_close" style="text-align: center;line-height: 108rpx;color: #2375fe;"
						@tap="show2=false">
						关闭
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import GasTabbar from '@/components/Tabba/GasTabbar.vue'
	import '@/common/icon/iconfont.css'
	export default {
		data() {
			return {
				keyword: '',
				isshow: true,
				checked: true,
				show1: false,
				show2: false,
			}
		},
		components: {
			GasTabbar
		},
		methods: {
			toEquipment() {
				uni.navigateTo({
					url: '/pages/Gas/equipment/equipment'
				})
			},
			// 常驻 遮罩层
			resident() {
				this.show1 = true;
			},
			// 临时人员 遮罩层
			people() {
				this.show2 = true;
			}
		}
	}
</script>

<style scoped>
	.-left {
		width: 45px;
		flex: 100 0 45px;
	}

	.table_th {
		padding: 15px 15px 0 15px;
	}

	.table_td {
		padding: 0px 15px 0 15px;
	}

	.record {
		width: 750rpx;
		height: 100%;
		min-height: 100vh;
		background-color: #d1d8e0;
	}

	.centen {
		width: 710rpx;
		margin: 0rpx auto;
		padding-top: 1rpx;
	}

	.search-box {
		height: 96rpx;
		border-radius: 15rpx;
		background-color: #FFFFFF;
		margin-top: 10rpx;
		margin-bottom: 38rpx;
	}

	.search {
		padding-top: 14rpx;
		width: 680rpx;
		margin: 0 auto;
	}

	.card {
		background-color: #FFFFFF;
		border-radius: 15px;
		overflow: hidden;
		border: #CCCCCC 1.5rpx solid;
	}

	.card-top {
/* 		height: 150rpx; */
		margin: 10rpx;
	}

	.card-top-list {
		margin: 8rpx 20rpx;
		color: #000000;
		font-size: 26rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.list-title {
		font-size: 30rpx !important;
		font-weight: 600;
	}

	.list-ixu {
		color: #1cb76b !important;
	}

	.card-table {
		margin: 10rpx 20rpx;
		border-radius: 20rpx;
		overflow: hidden;

		border: #CCCCCC 1rpx solid;
		display: flex;
		flex-flow: column;
	}

	.card-table-list {
		width: 50%;
		position: relative;
	}

	.card-table-list text {
		line-height: 60rpx;
		margin-left: 20rpx;
	}

	.card-table-list:nth-child(1) {
		border-right: #eaeaea 1rpx solid;
	}

	.card-table-item {
		height: 60rpx;
		display: flex;
		border-bottom: #eaeaea 1rpx solid;
	}

	.iconfont {
		position: absolute;
		right: 20rpx;
		top: 0;
		color: #1cb76b;
	}

	.card-table-bottom {
		display: flex;
		border-bottom: #eaeaea 1rpx solid;
	}

	.table-bottom-left {
		width: 50%;
		line-height: 80rpx;
		border-right: #eaeaea 1rpx solid;
	}
	.table-bottom-left text {
		margin-left: 20rpx;
	}
	.table-bottom-right {
		width: 50%;
		line-height: 80rpx;
		position: relative;
	}

	.table-bottom-right text {
		margin-left: 20rpx;
	}

	.switch {
		position: absolute;
		top: 15rpx;
		right: 40rpx;
	}
</style>
