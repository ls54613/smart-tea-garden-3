<template>
	<view class="record">
		<view class="centen">
			<view class="search-box">
				<view class="search" >
					<u-search placeholder="设备名称/IMEI号" v-model="keyword" height="70" border-color="#ababab" bg-color="#ffffff" ></u-search>
				</view>
				<view class="card">
					<view class="top-card-top bgc-color">
		<!-- 				<view class="card-img-box">
							<image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image>
						</view> -->
						<view class="top-card-title">
							<text>6栋602</text>
						</view>
						
					</view>
					<view class="top-card-cen">
						<view class="card-cen-item">
							<view class="card-item-img">
								<text class="iconfont icon-dianya iconfont_rec"></text>
								<!-- <image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image> -->
							</view>
							<text>电压</text>
						</view>
						<view class="card-cen-item">
							<view class="card-item-img">
								<text class="iconfont icon-WIFI iconfont_rec"></text>
								<!-- <image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image> -->
							</view>
							<text>信号强度</text>
						</view>
						<view class="card-cen-item">
							<view class="card-item-img">
								<text class="iconfont icon-wendu iconfont_rec"></text>
								<!-- <image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image> -->
							</view>
							<text>温度</text>
						</view>
					</view>
					<view class="top-card-bot">
						<view class="card-cen-item card-bot-title">
							<text>3.296v</text>
						</view>
						<view class="card-cen-item card-bot-title">
							<text>14</text>
						</view>
						<view class="card-cen-item card-bot-title">
							<text>40.0°C</text><text></text>
						</view>
					</view>
					<view class="card-table">
						<view class="card-table-list">
							<text>设备编号：85542323414532453</text>
						</view>
						<view class="card-table-list">
							<text>安装时间：2021-11-01 10:38:44</text>
						</view>
						<view class="card-table-list">
							<text>设备状态：正常</text>
						</view>
						<view class="card-table-list">
							<text>最近报警：2021-11-01 10:38:44</text>
						</view>
						<view class="card-table-list">
							<text>最近心跳：2021-11-01 10:38:44</text>
						</view>
					</view>
				</view>
			</view>	
		</view>
	</view>
</template>
	
<script>
	import '@/common/icon/iconfont.css'
	export default {
		data() {
			return {
				keyword:'',
			}
		},
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
	.card{
		background-color: #FFFFFF;
		border-radius: 20rpx;
		overflow: hidden;
		margin-top: 40rpx;
	}
	
	.top-card-top {
		height: 85rpx;
		display: flex;
	}
	.bgc-color {
		background:linear-gradient(to right,#1cb24e,#5cba7c);
	}
	.card-img-box {
		width: 49rpx;
		height: 49rpx;
		background-color: #FFFFFF;
		border-radius: 50%;
		margin-top: 18rpx;
		margin-left: 30rpx;
		margin-right: 20rpx;
	}
	.card-img-box image {
		width: 32rpx;
		height: 35rpx;
		margin: 8rpx 0 0 8rpx;
	}
	.top-card-title {
		line-height: 85rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		display: inline-block;
		margin-left: 40rpx;
	}
	.top-card-cen {
		display: flex;
		height: 105rpx;
		justify-content: space-around;
	}
	.card-cen-item {
		width: 120rpx;
		font-size: 26rpx;
		color: #000000;
	}
	.card-cen-item text {
		display: inline-block;
		width: 120rpx;
		text-align: center;
	}
	.card-item-img {
		width: 40rpx;
		height: 45rpx;
		margin: 20rpx auto 8rpx;
	}
	.card-item-img image{
		width: 40rpx;
		height: 45rpx;
	}
	.top-card-bot {
		display: flex;
		height: 80rpx;
		justify-content: space-around;
	}
	.card-bot-title text{
		line-height: 80rpx;
		font-size: 28rpx;
		font-weight: 600;
		display: inline-block;
		margin: 0 auto;
		text-align: center;
	}
	.title {
		display: flex;
		height: 75rpx;
		margin: 0 25rpx;
	}
	.title-left {
		width: 160rpx;
		line-height: 75rpx;
		color: #9fa1a3;
		font-size: 24rpx
	}
	.card-table {
		background-color: #EEEEEE;
		width: 650rpx;
		margin: 0rpx auto 40rpx;
		border-radius: 15rpx;
	}
	.card-table-list {
		line-height: 85rpx;
		padding-left: 20rpx;
		border-radius: 15rpx;
		font-size: 26rpx;
		border-bottom: #FFFFFF 4rpx solid;
	}
</style>
