<template>
	<view class="cencend">
		<view class="time-title">
			<text class="time-left">{{currentdate}}</text><text>{{getDay}}</text>
		</view>
		<text class="item-text">上班</text>09:00
		<view class="item-box" @tap="toform">
			<view class="item-list">
				<text>准时：{{cardData.sonTime}}人</text> 
				<view class="right-text">
					<u-icon name="arrow-right" color="#888888"></u-icon>
				</view>
				<u-line-progress :percent="cardData.a1" :round="false" active-color="#00aaff" round
					:show-percent="false" :height="18"></u-line-progress>
			</view>
			<view class="item-list middle-list">
				<text>迟到：{{cardData.slate}}人</text>
				<view class="right-text">
					<u-icon name="arrow-right" color="#888888"></u-icon>
				</view>
				<u-line-progress :percent="cardData.a2" :round="false" active-color="#00aaff" round
					:show-percent="false" :height="18"></u-line-progress>
			</view>
			<view class="item-list">
				<text>缺卡：{{cardData.sother}}人</text>
				<view class="right-text">
					<u-icon name="arrow-right" color="#888888"></u-icon>
				</view>
				<u-line-progress :percent="cardData.a3" :round="false" active-color="#00aaff" round
					:show-percent="false" :height="18"></u-line-progress>
			</view>
		</view>
		<text class="item-text">下班</text>18:00
		<view class="item-box">
			<view class="item-list">
				<text>准时：{{cardData.onTime}}人</text>
				<view class="right-text">
					<u-icon name="arrow-right" color="#888888"></u-icon>
				</view>
				<u-line-progress :percent="cardData.b1" :round="false" active-color="#00aaff" round
					:show-percent="false" :height="18"></u-line-progress>
			</view>
			<view class="item-list middle-list">
				<text>早退：{{cardData.late}}人</text>
				<view class="right-text">
					<u-icon name="arrow-right" color="#888888"></u-icon>
				</view>
				<u-line-progress :percent="cardData.b2" :round="false" active-color="#00aaff" round
					:show-percent="false" :height="18"></u-line-progress>
			</view>
			<view class="item-list">
				<text>缺卡：{{cardData.other}}人</text>
				<view class="right-text">
					<u-icon name="arrow-right" color="#888888"></u-icon>
				</view>
				<u-line-progress :percent="cardData.b3" :round="false" active-color="#00aaff" round
					:show-percent="false" :height="18"></u-line-progress>
			</view>
		</view>
		<ct-tabbar />
	</view>
</template>

<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	export default {
		components:{ctTabbar},
		data() {
			return {
				cardData: {
					sonTime: 28,
					slate: 4,
					sother: 2,
					onTime: 25,
					late: 7,
					other: 2,
					a1: 0,
					a2: 0,
					a3: 0,
					b1: 0,
					b2: 0,
					b3: 0,
				},
				currentdate: '',
				getDay: ''
			}
		},
		onLoad() {
			this.jishaun();

		},
		created() {
			this.getNowFormatDate();

		},
		methods: {
			jishaun() {
				this.cardData.a1 = (this.cardData.sonTime / (this.cardData.sonTime + this.cardData.slate + this.cardData
					.sother)).toFixed(2) * 100
				this.cardData.a2 = (this.cardData.slate / (this.cardData.sonTime + this.cardData.slate + this.cardData
					.sother)).toFixed(2) * 100
				this.cardData.a3 = (this.cardData.sother / (this.cardData.sonTime + this.cardData.slate + this.cardData
					.sother)).toFixed(2) * 100
				this.cardData.b1 = (this.cardData.onTime / (this.cardData.onTime + this.cardData.late + this.cardData
					.other)).toFixed(2) * 100
				this.cardData.b2 = (this.cardData.late / (this.cardData.onTime + this.cardData.late + this.cardData.other))
					.toFixed(2) * 100
				this.cardData.b3 = (this.cardData.other / (this.cardData.onTime + this.cardData.late + this.cardData
					.other)).toFixed(2) * 100
			},
			toform () {
				uni.navigateTo({
					url:'/pages/management/form/form',
				})
			},
			getNowFormatDate() {
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let strDate = date.getDate();
				let getDay = date.getDay();
				let getDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', ]
				this.getDay = getDays[getDay]
				let currentdate = year + '年' + month + '月' + strDate + '日';
				this.currentdate = currentdate
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
	.right-text text {margin-right: 300rpx;}
	.item-text {
		margin: 0 25rpx 10rpx 20rpx;
		line-height: 80rpx;
	}
</style>
