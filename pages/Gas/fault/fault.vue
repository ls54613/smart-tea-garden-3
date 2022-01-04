<template>
	<view class="record">
		<view class="centen">
			<view class="search-box">
				<view class="search" >
					<u-search placeholder="设备名称/IMEI号" v-model="keyword" height="70" border-color="#ababab" bg-color="#ffffff" ></u-search>
				</view>
			</view>
			<view v-if="isshow">
				<view class="card" >
					<view class="card-left">
						<view class="card-img-box">
							<image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image>
						</view>	
					</view>
					<view class="card-right" >
						<view class="card-right-left">
							<view class="card-title top-title">
								<text>麓谷国际工业园</text>
							</view>
							<view class="card-title">
								<text>设备名称：燃气报警器</text>
							</view>
							<view class="card-title">
								<text>设备型号：JKD812NB02</text>
							</view>
							<view class="card-title">
								<text>故障时间：2021-12-1 18:54:29</text>
							</view>
							<view class="card-title">
								<text class="title-bottom">备注：</text><text class="bottom-cen">系统检测异常</text>
							</view>
						</view>
						<view class="card-right-right">
							<text>按键测试</text>
						</view>
					</view>
				</view>
				<view class="card">
					<view class="card-left">
						<view class="card-img-box">
							<image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image>
						</view>	
					</view>
					<view class="card-right">
						<view class="card-right-left">
							<view class="card-title top-title">
								<text>麓谷国际工业园</text>
							</view>
							<view class="card-title">
								<text>设备名称：燃气报警器</text>
							</view>
							<view class="card-title">
								<text>设备型号：JKD812NB02</text>
							</view>
							<view class="card-title">
								<text>故障时间：2021-12-1 18:54:29</text>
							</view>
							<view class="card-title">
								<text class="title-bottom">备注：</text><text class="bottom-cen">系统异常</text>
							</view>
						</view>
						<view class="card-right-right">
							<text>按键测试</text>
						</view>
					</view>
				</view>
			</view>
			<view class="" v-else>
				<u-empty text="数据为空" mode="list"></u-empty>
			</view>
			
		</view>
		<gas-tabbar />
	</view>
</template>

<script>
	import GasTabbar from '@/components/Tabba/GasTabbar.vue'
	export default {
		data() {
			return {
				keyword:'',
				isshow:false,
			}
		},
		components:{GasTabbar},
		methods: {
			
		}
	}
</script>

<style scoped>
	.record{
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
		height: 300rpx;
		background-color: #eff0f4;
		border-radius: 30rpx;
		margin-bottom: 38rpx;
		display: flex;
	}
	.card-left {
		width: 105rpx;
	}
	.card-img-box {
		width: 87rpx;
		height: 87rpx;
		background-color: #FFFFFF;
		border-radius: 50%;
		margin-top: 66rpx;
		margin-left: 18rpx;
	}
	.card-left image {
		width: 50rpx;
		height: 60rpx;
		margin: 14rpx 0 0 18rpx;
	}
	.card-right {
		flex: 1;
		display: flex;
		margin-top: 15rpx;
		margin-left: 8rpx;
	}
	.card-right-left {
		width: 460rpx;
	}
	.card-right-right {
		flex: 1;
		display: flex;
		align-items: center;
	}
	.card-right-right text {
		color: #ff0000;
		font-size: 30rpx;
	}
	.card-title {
		font-size: 27rpx;
		margin-top: 13rpx;
		color: #000000;
		position: relative;
	}
	.top-title {
		font-size: 34rpx;
		font-weight: 600;
	}
	.title-bottom {
		font-size: 32rpx;
		font-weight: 600;
		color: #cc8b3f;
	}
	.bottom-cen {
		position: absolute;
		top:5rpx;
		left: 80rpx;
		width: 300rpx;
		color: #cc8b3f;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>
