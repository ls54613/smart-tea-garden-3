<template>
	<view class="details">
		<view class="centen">
			<view class="card top-card">
				<view class="top-card-top bgc-color">
					<view class="card-img-box">
						<image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image>
					</view>
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
						<text>{{gasdata[2].sdata}}v</text>
					</view>
					<view class="card-cen-item card-bot-title">
						<text>14</text>
					</view>
					<view class="card-cen-item card-bot-title">
						<text>{{gasdata[0].sdata}}.0°C</text><text></text>
					</view>
				</view>
			</view>
			<view class="title">
				<view class="title-left">
					<text>安装信息</text>
				</view>
				<view class="title-right">
				<!-- 	<text @tap="toitms">修改信息</text> -->
				</view>
			</view>
			<view class="card">
				<view class="title-card-item">
					<text>场所：麓谷国际工业园</text>
				</view>
				<view class="title-card-item">
					<text>地址：长沙市岳麓区麓谷国际工业园</text>
				</view>
				<view class="title-card-item">
					<text>业主：万欧科技</text>
				</view>
				<view class="title-card-item">
					<text>业主电话：18574739809</text>
				</view>
				<view class="title-card-item zuihou">
					<text>安装时间：2021-11-1 10:38:44</text>
				</view>
			</view>
			<view class="title">
				<view class="title-left">
					<text>设备信息</text>
				</view>
				<view class="title-right">
					<!-- <text class="title-right-gr">分享设备</text> -->
					<!-- <text>运行记录</text> -->
				</view>
			</view>
			<view class="card">
				<view class="title-card-item">
					<text>IMEI：869664525187521</text>
				</view>
				<view class="title-card-item">
					<text>IMSI：845454512121454</text>
				</view>
				<view class="title-card-item">
					<text>CCID：8775323546323232348343</text>
				</view>
				<view class="title-card-item">
					<text>设备类型：{{gasdata[1].node_name}}</text>
				</view>
				<view class="title-card-item">
					<text>所属单位：万欧科技</text>
				</view>
				<view class="title-card-item">
					<text>业主：万欧科技</text>
				</view>
				<view class="title-card-item">
					<text>活动时间：{{gasdata[0].register_time | date('yyyy-mm-dd hh:MM:ss')}}</text>
				</view>
				<view class="title-card-item">
					<text>到期时间：--</text>
				</view>
				<view class="title-card-item item-item-box">
					<text>阀门控制：</text> 
					<view class="title-card-item-button">
						<text class="item-button-left" @tap="showToast">关闭</text><text @tap="showToast">打开</text>
					</view>
				</view>
			</view>
			<view class="title">
				<view class="title-left">
					<text>推送设置</text>
				</view>
			</view>
			<view class="card">
				<view class="title-card-item-box">
					<view class="title-card-item">
						<text>万欧科技</text>
					</view>
					<view class="title-card-item zuihou">
						<text>18574739809</text>
					</view>
					<view class="title-card-item-button zuihou-button">
						<text class="item-button-left">删除</text><text>修改</text>
					</view>
				</view>
			</view>
			<view class="add-btn">
				<u-button :hair-line="false">添加新用户</u-button>
			</view>
		</view>
		<!-- 弹出层 -->
		<u-popup v-model="show" mode="center" border-radius="14" width="580rpx" height="700rpx">
			<view class="popup-box">
				<view class="popup-list">
					
				</view>	
				<view class="popup-list">
					
				</view>	
			</view>
		</u-popup>
		<!-- //开关按钮弹出提示 -->
		<u-toast ref="uToast"/>
	</view>
</template>

<script>
	import {getGas} from '@/common/api.js'
	import '@/common/icon/iconfont.css'
	export default {
		data() {
			return {
				show:false,
				gasdata:[
					{
						register_time:'',
						sdata:''
					},
					{sdata:''},
					{sdata:''}
				]
					
				}
			
		},
		onShow() {
			this.getgasinfo()
		},
		methods: {
			
			toitms() {
				this.show = true
			},
			getgasinfo(){
				getGas().then((res)=>{
					
					this.gasdata = res[1].data.data.data
					console.log(this.gasdata)
				})
			},
			showToast() {
				this.$refs.uToast.show({
					title: '发送成功',
					type: 'success',
					position:'top'
				})
			}
		}
	}
</script>

<style scoped>
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
		display: inline-block;
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
	.popup-box {
		position: relative;
		height: 700rpx;
	}
	.popup-list {
		height: 87rpx;
	}
</style>
