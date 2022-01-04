<!-- 报警详情 -->
<template>
	<view class="details">
		<view class="centen">
			<view class="card top-card">
				<view class="top-card-top bgc-color">
					<view class="card-img-box">
						<!-- <image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image> -->
						<text style="margin-left: 5px;" class="iconfont icon-wshengguangbaojingqi"></text>
					</view>
					<view class="top-card-title">
						<text>6栋602</text>
					</view>
				</view>

				<view class="top-card-cen">
					<view class="card-cen-item">
						<view class="card-item-img">
							<!-- <image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image> -->
							<text class="iconfont icon-dianya iconfont_rec"></text>
						</view>
						<text>电压</text>
					</view>
					<view class="card-cen-item">
						<view class="card-item-img">
							<!-- <image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image> -->
							<text class="iconfont icon-WIFI iconfont_rec"></text>
						</view>
						<text>信号强度</text>
					</view>
					<view class="card-cen-item">
						<view class="card-item-img">
							<!-- <image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image> -->
							<text class="iconfont icon-wendu iconfont_rec"></text>
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
			</view>
			
			<view class="card" style="margin-top: 10px;">
				<view class="title-card-item-box" style="display: flex;align-items: center;padding: 16px;">
					
					<view>
						<text>备注 :</text>
					</view>
					<view style="margin-left: 5px;">
						<u-input placeholder="请输入报警备注" :border="border" />
					</view>
					<view>
						<u-button size="mini" type="primary">确认</u-button>
					</view>
					
				</view>
			</view>
			
			<view class="title">
				<view class="title-left">
					<text>报警信息</text>
				</view>
			</view>
			
			<view class="card card_all">
				<view>
					<text style="margin-left: 5px;font-size: 40px;" class="iconfont icon-jingzhong"></text>
				</view>
				
				<view style="margin-left: 5px;">
					<view>
						<text>报警原因：按键测试</text>
						<view style="margin-top: 10px;">
							<text>报警时间：2021-11-08 09:42:14</text>
						</view>
					</view>
					
				</view>
				
				<view>
					<text @click="show = true" class="iconfont icon-youjiantou icon_bt"></text>
				</view>
				
			</view>
		
			<view class="title">
				<view class="title-left">
					<text>设备信息</text>
				</view>
			</view>
			<view class="card">
				<view class="title-card-item">
					<text>IMEI：869664525187521</text>
				</view>
				<view class="title-card-item">
					<text>设备类型：燃气报警器</text>
				</view>
				<view class="title-card-item">
					<text>设备型号：JKD812NB02</text>
				</view>
				<view class="title-card-item">
					<text>业主信息：万欧科技</text>
				</view>
				<view class="title-card-item" style="margin-bottom: 12px;">
					<text>手机号吗：18574739809</text>
				</view>
							
			
			</view>
			
			<view>
				<u-select v-model="show" :list="list"></u-select>
			</view>
			
		
		</view>
	</view>
</template>

<script>
	import '@/common/icon/iconfont.css'
	export default {
		data() {
			return {
				show: false,
					list: [
						{
							value: '1',
							label: '未确认'
						},
						{
							value: '2',
							label: '测试'
						},
						{
							value: '3',
							label: '火灾'
						},
						{
							value: '4',
							label: '演练'
						},
						{
							value: '5',
							label: '误报'
						},
						{
							value: '6',
							label: '故障'
						}
					],
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.card_all{
		display: flex;
		padding: 10px;
		align-items: center;
	}
	.icon_bt{
		margin-left: 5px;
		font-size: 20px;
		margin-left: 30px;
	}
	.iconfont_rec{
		margin-left: -20px;
	}
	.details{
		width: 750rpx;
		height: 100%;
		min-height: 100vh;
		background-color: #d1d8e0;
	}
	.centen {
		width: 690rpx;
		margin: 0rpx auto;
		padding-top: 1rpx;
		padding-bottom: 50rpx;
	}
	.card{
		background-color: #FFFFFF;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.top-card {
		height: 295rpx;
		margin-top: 40rpx;
	}
	.top-card-top {
		height: 85rpx;
		display: flex;
	}
	.bgc-color {
		background:linear-gradient(to right,#fe3824,#ff8071);
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
		/* display: inline-block; */
	}
	.top-card-cen {
		display: flex;
		height: 125rpx;
		justify-content: space-around;
		border-bottom: #eeeeee solid 6rpx;
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
	.title-right {
		flex: 1;
		line-height: 75rpx;
		text-align: right;
	}
	.title-right text{
		padding: 8rpx 15rpx;
		background-color: #2979ff;
		color: #FFFFFF;
		border-radius: 10rpx;
		font-size: 20rpx !important;
	}
	.title-right-gr {
		background-color: #19be6b !important;
		margin-right: 20rpx;
	}
	.title-card-item-box{
		position: relative;
	}
	.title-card-item {
		margin-left: 30rpx;
		margin-top: 25rpx;
		font-size: 28rpx;
		position: relative;
	}
	.zuihou{
		color: #a5a5a5;
		margin-bottom: 25rpx;
	}
	.title-card-item-button {
		display: inline-block;
		position: absolute;
		right: 0rpx;
		top: 0;
	}
	.title-card-item-button text{
		padding: 8rpx 15rpx;
		background-color: #2979ff;
		color: #FFFFFF;
		border-radius: 10rpx;
		font-size: 20rpx !important;
		margin-right: 30rpx;
	}
	.item-item-box {
		margin-bottom: 25rpx;
		margin-top: 40rpx;
	}
	.item-button-left {
		margin-right: 20rpx !important;
		background-color: red !important;
	}
	.zuihou-button {
		top: 30rpx !important;
	}
	.add-btn {
		height: 76rpx;
		margin-top: 24rpx;
	}
</style>
