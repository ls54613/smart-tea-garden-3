<template>
	<view class="centen">
		<view class="title">
			<text>设备信息</text>
		</view>
		<view class="content">
			<text>质检设备：</text>
			<view class="input-box">
				<u-input v-model="value" :type="type" placeholder="请填写设备imei"/>
			</view>
			<view class="buttom">
				确认
			</view>
		</view>
		<view class="title">
			<text>质检条件</text>
		</view>
		<view class="slider-box">
			<text>信号强度：</text>
			<view class="slider">
				<u-slider v-model="slider" :use-slot="true">
					<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
					<view class="">
						<view class="badge-button">
							{{slider}}
						</view>
					</view>
				</u-slider>
			</view>	
		</view>
		<view class="content">
			<text>质检数据间隔(单位:小时):</text>
			<view class="input-bottom-box">
				<u-input v-model="testing" :type="type" placeholder="请填写间隔时间" maxlength="4"/>
			</view>
		</view>
		<view class="content">
			<text>心跳数据间隔(单位:小时):</text>
			<view class="input-bottom-box">
				<u-input v-model="heartbeat" :type="type" placeholder="请填写间隔时间"maxlength="4"/>
			</view>
		</view>
		<view class="title">
			<text>质检结果</text>
		</view>
		<u-subsection :list="list" :current="current" @change="sectionChange"></u-subsection>
		<view class="normal" v-if="current==0">
			<text>设备imei</text>
			<text>设备类型</text>
		</view>
		<view class="normal" v-else>
			<text>设备imei</text>
			<text>异常原因</text>
			<text>操作</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				slider:'14',
				heartbeat:'24',
				testing:'24',
				list: [
				{
					name: '正常设备'
				}, 
				{
					name: '异常设备'
				}
			],
			current: 0
			}
		},
		methods: {
			sectionChange(index) {
							this.current = index;
						}
		}
	}
</script>

<style scoped>
	.centen {
		width: 750rpx;
		min-height: 100vh;
	}
	.title {
		height: 82rpx;
		border-bottom: #EAEAEA 1rpx solid;
		color: #a3a5ae;
		position: relative;
		font-size: 28rpx
	}
	.title text {
		position: absolute;
		left: 30rpx;
		bottom: 10rpx;
	}
	.content {
		height: 118rpx;
		border-bottom: #EAEAEA 1rpx solid;
		position: relative;
	}
	.input-box {
		position: absolute;
		width: 360rpx;
		top: 25rpx;
		left: 160rpx;
	}
	.content text {
		line-height: 118rpx;
		margin-left: 30rpx;
	}
	.buttom {
		position: absolute;
		top: 30rpx;
		right: 40rpx;
		width: 120rpx;
		height: 60rpx;
		background-color: #2879fe;
		text-align: center;
		line-height: 60rpx;
		border-radius: 15rpx;
		color: #FFFFFF;
		font-size: 26rpx
	}
	.badge-button {
			padding: 8rpx 12rpx;
			background-color: #c2c2c2;
			color: #fff;
			border-radius: 10rpx;
			font-size: 22rpx;
			line-height: 1;
		}
	.slider-box {
		height: 103rpx;
		border-bottom: #EAEAEA 1rpx solid;
		position: relative;
	}
	.slider-box text {
		line-height: 103rpx;
		margin-left: 30rpx;
	}
	.slider {
		width: 530rpx;
		position: absolute;
		top: 48rpx;
		right: 40rpx;
	}
	.input-bottom-box{
		position: absolute;
		width: 240rpx;
		top: 25rpx;
		left: 360rpx;
	}
	.normal {
		height: 62rpx;
		display: flex;
		width: 730rpx;
		margin: 10rpx auto;
		background-color: #f5f6f8;
		border: #EAEAEA 1rpx solid;
	}
	.normal text{
		flex: 1;
		line-height: 62rpx;
		text-align: center;
		border-right: #EAEAEA 1rpx solid;
	}
	.normal text:nth-last-child(1) {
		border: none ;
	}
</style>
