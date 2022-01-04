<template>
	<view class="gas">
		<view class="centen">
			<view class="u-subsection-box">
				<u-subsection :list="list" :current="0" active-color="#2d84e2" inactive-color="#64656a"
					@change="sectionChange"></u-subsection>
			</view>
			<view class="" v-if="current==0">
				<view class="quantity">
					<text>您共有<text class="quantity-text">1</text>个NB设备</text>
					<view class="right-button">
						<text @tap="toPlace">场所管理</text>
						<text @tap="toTesting">设备质检</text>
					</view>
				</view>
				<view class="common-test">
					<text>NB设备分类</text>
				</view>
				<view class="">
					<view class="swiper-box">
						<swiper class="swiper" @change="change">
							<swiper-item>
								<u-grid :col="3" hover-class="hover-class" @click="click">
									<u-grid-item v-for="(item, index) in iconList" :index="index" :key="index">
										<image :src="item.imgurl" style="width: 76rpx;height: 76rpx;">
											</u-icon>
											<text class="grid-text">{{item.name}}</text>
									</u-grid-item>
								</u-grid>
							</swiper-item>

							<swiper-item>
								<u-grid :col="3" @click="click" hover-class="hover-class">
									<u-grid-item v-for="(item, index) in iconList" :index="index" :key="index">
										<image :src="item.imgurl" style="width: 76rpx;height: 76rpx;">
											</u-icon>
											<text class="grid-text">{{item.name}}</text>
									</u-grid-item>
								</u-grid>
							</swiper-item>

							<swiper-item>
								<u-grid :col="3" @click="click" hover-class="hover-class">
									<u-grid-item v-for="(item, index) in iconList" :index="index" :key="index">
										<image :src="item.imgurl" style="width: 76rpx;height: 76rpx;">
											</u-icon>
											<text class="grid-text">{{item.name}}</text>
									</u-grid-item>
								</u-grid>
							</swiper-item>

						</swiper>
					</view>
					<view class="indicator-dots">
						<view class="indicator-dots-item" :class="[gridcurrent == 0 ? 'indicator-dots-active' : '']">
						</view>
						<view class="indicator-dots-item" :class="[gridcurrent == 1 ? 'indicator-dots-active' : '']">
						</view>
						<view class="indicator-dots-item" :class="[gridcurrent == 2 ? 'indicator-dots-active' : '']">
						</view>
					</view>
				</view>
				<view class="common-test">
					<text>NB设备状态统计</text>
				</view>
				<view class="wrap">
					<u-row gutter="16">
						<u-col span="6" @tap="toitms(nab)">
							<view class="demo-layout bg-purple">
								<view class="wrap-list wrap-icon">
									<text class="iconfont icon-zhengchang" style="font-size: 84rpx;"></text>
								</view>
								<view class="wrap-list wrap-title">
									<text>正常</text>
								</view>
								<view class="wrap-list wrap-number">
									<text>{{nab}}</text>
								</view>
							</view>
						</u-col>
						<u-col span="6">
							<view class="demo-layout bg-purple" @tap="toitms">
								<view class="wrap-list wrap-icon">
									<text class="iconfont icon-guzhang" style="font-size: 84rpx;"></text>
								</view>
								<view class="wrap-list wrap-title">
									<text>故障</text>
								</view>
								<view class="wrap-list wrap-number">
									<text>0</text>
								</view>
							</view>
						</u-col>
					</u-row>
					<u-row gutter="16">
						<u-col span="6">
							<view class="demo-layout bg-purple" @tap="toitms">
								<view class="wrap-list wrap-icon">
									<text class="iconfont icon-alarm" style="font-size: 84rpx;"></text>
								</view>
								<view class="wrap-list wrap-title">
									<text>报警</text>
								</view>
								<view class="wrap-list wrap-number">
									<text>0</text>
								</view>
							</view>
						</u-col>
						<u-col span="6">
							<view class="demo-layout bg-purple" @tap="toitms">
								<view class="wrap-list wrap-icon">
									<text class="iconfont icon-chongdianzhuang" style="font-size: 84rpx;"></text>
								</view>
								<view class="wrap-list wrap-title">
									<text>低电量</text>
								</view>
								<view class="wrap-list wrap-number">
									<text>0</text>
								</view>
							</view>
						</u-col>
					</u-row>
					<u-row gutter="16">
						<u-col span="6">
							<view class="demo-layout bg-purple" @tap="toitms">
								<view class="wrap-list wrap-icon">
									<text class="iconfont icon-lixian" style="font-size: 84rpx;"></text>
								</view>
								<view class="wrap-list wrap-title">
									<text>离线</text>
								</view>
								<view class="wrap-list wrap-number">
									<text>0</text>
								</view>
							</view>
						</u-col>
						<u-col span="6">
							<view class="demo-layout bg-purple" @tap="toitms">
								<view class="wrap-list wrap-icon">
									<text class="iconfont icon-chaichu" style="font-size: 84rpx;"></text>
								</view>
								<view class="wrap-list wrap-title">
									<text>拆除</text>
								</view>
								<view class="wrap-list wrap-number">
									<text>0</text>
								</view>
							</view>
						</u-col>
					</u-row>
					<u-row gutter="16">
						<u-col span="6">
							<view class="demo-layout bg-purple" @tap="toitms">
								<view class="wrap-list wrap-icon">
									<text class="iconfont icon-xinhaobuhao" style="font-size: 64rpx;"></text>
								</view>
								<view class="wrap-list wrap-title">
									<text>信号弱</text>
								</view>
								<view class="wrap-list wrap-number">
									<text>0</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
			<view class="empty" v-else>
				<u-empty text="暂无设备" mode="list"></u-empty>
			</view>
		</view>
		<u-popup v-model="show" mode="center" border-radius="14" width="580rpx" height="700rpx">
			<view class="popup-box">
				<scroll-view scroll-y="true" style="height: 590rpx;">
					<view class="popup-cen">
						<view class="popup-item" @tap="toList(itmID)">
							<view class="noimgs">
								全部查看
							</view>
							<view class="right-text">
								<text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>中继箭头</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>电动车阻拦摄像头</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList(itmID)">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>一氧化碳报警器</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>烟感CO复合</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>燃气报警器</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>报警主机</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>无线手报</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
						<view class="popup-item" @tap="toList">
							<view class="img-box">
								<image src="http://cdn.1334.top/CO%E6%8A%A5%E8%AD%A6%E5%99%A8.png" mode=""></image>
							</view>
							<view class="right-text">
								<text>烟感报警器</text><text class="iconfont icon-youfanhui jiantou"></text>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="close" @tap="show=false">
					关闭
				</view>
			</view>
		</u-popup>
		<gas-tabbar />
		<u-loading :show="true"></u-loading>
	</view>
</template>
<script>
	import GasTabbar from '@/components/Tabba/GasTabbar.vue'
	// 定义图标
	import icon1 from '@/static/img/co.png'
	import icon2 from '@/static/img/menci.png'
	import icon3 from '@/static/img/ranqixielou.png'
	import icon4 from '@/static/img/shengguang.png'
	import icon5 from '@/static/img/shexiangt.png'
	import icon6 from '@/static/img/yangan.png'
	import '@/common/icon/iconfont.css'
	
	export default {
		data() {
			return {
				itmID: 1,
				nab: 1,
				list: [{
						name: 'NB设备'
					},
					{
						name: '工业设备'
					},
					{
						name: '其他设备'
					}
				],
				current: 0,
				gridcurrent: 0,
				show: false,
				// gridlist: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle'],
				iconList: [{
						imgurl: icon1,
						name: '一氧化碳'
					},
					{
						imgurl: icon2,
						name: '门磁'
					},
					{
						imgurl: icon3,
						name: '燃气泄漏'
					},
					{
						imgurl: icon4,
						name: '声光警报'
					},
					{
						imgurl: icon5,
						name: '摄像头'
					},
					{
						imgurl: icon6,
						name: '烟感'
					}
				]
			}
		},
		components: {
			GasTabbar
		},
		onShow() {

		},
		methods: {
			change(e) {
				this.gridcurrent = e.detail.current;
			},
			sectionChange(e) {
				this.current = e;
				console.log(this.current)
			},
			toitms(e) {
				console.log(e)
				if (!e == 0 && e == this.nab) {
					this.itmID = 0
					this.show = true;
				} else {
					this.itmID = 1
					this.show = true;
				}

			},
			toPlace() {
				uni.navigateTo({
					url: '/pages/Gas/place/place'
				})
			},
			toTesting() {
				uni.navigateTo({
					url: '/pages/Gas/testing/testing'
				})
			},
			toList(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/Gas/list/list?id=' + id
				})
				this.show = false
			},
			click(index) {
				console.log(index)
				uni.navigateTo({
					url: '/pages/Gas/list/list?id=' + index
				})
			}

		}
	}
</script>

<style scoped>
	.gas {
		width: 750rpx;
		height: 100%;
		min-height: 100vh;
		background-color: #d1d8e0;
	}

	.centen {
		width: 690rpx;
		margin: 0rpx auto;
	}

	.u-subsection-box {
		width: 690rpx;
		margin: 0rpx auto;
		padding-top: 45rpx;
	}

	.quantity {
		position: relative;
		font-size: 32rpx;
		margin: 30rpx 0;
		color: #000000;
		line-height: 40rpx;
	}

	.right-button {
		position: absolute;
		right: 0rpx;
		top: 0rpx;
	}

	.right-button text {
		color: #FFFFFF;
		background-color: #ff9900;
		border-radius: 5rpx;
		height: 50rpx;
		font-size: 24rpx;
		margin-left: 10rpx;
		padding: 10rpx 20rpx;
		text-align: center;
	}

	.right-button text:nth-child(1) {
		background-color: #18be6a;
	}

	.common-test {
		height: 46rpx;
	}

	.common-test text {
		background-color: #2879fe;
		border-radius: 8rpx;
		text-align: center;
		padding: 8rpx 24rpx;
		line-height: 46rpx;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 45rpx;
		line-height: 35rpx;
		color: $u-type-info;
	}

	.swiper-box {
		margin-top: 20rpx;
		border-radius: 20rpx;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.swiper {
		height: 420rpx;
		color: #ababab;
	}

	.indicator-dots {
		margin-top: 20rpx;
		margin-bottom: 25rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.indicator-dots-item {
		background-color: #ababab;
		height: 6px;
		width: 6px;
		border-radius: 10px;
		margin: 0 3px;
	}

	.indicator-dots-active {
		background-color: #2879fe;
	}

	.wrap {
		padding-bottom: 40rpx;
	}

	.demo-layout {
		border-radius: 15rpx;
		margin: 20rpx 10rpx;
	}

	.wrap-list {
		text-align: center;
	}

	.wrap-icon {
		font-size: 94rpx;
	}

	.wrap-title {
		font-size: 30rpx;
		line-height: 48rpx;
	}

	.wrap-number {
		font-size: 38rpx;
		color: #5c5c5c;
		font-weight: bold;
		padding-bottom: 10rpx;
	}

	.bg-purple {
		background: #f2f2f0;
	}

	.popup-box {
		position: relative;
		height: 700rpx;
	}

	.close {
		width: 580rpx;
		position: absolute;
		bottom: 0;
		left: 0;
		color: #2375fe;
		font-size: 30rpx;
		height: 102rpx;
		line-height: 102rpx;
		text-align: center;
		/* border-top: 1rpx solid #edeef1; */
		z-index: 999;
		background-color: #FFFFFF;
	}

	.popup-item {
		width: 580rpx;
		height: 118rpx;
		color: #000000;
		border-bottom: 1rpx solid #edeef1;
		display: flex;
		align-items: center;
	}

	.img-box {
		margin-left: 49rpx;
		width: 80rpx;
		height: 118rpx;
		margin-top: 65rpx;
	}

	.right-text {
		flex: 1;
		position: relative;
		height: 118rpx;
	}

	.right-text text {
		line-height: 118rpx;
		font-size: 32rpx
	}

	.jiantou {
		position: absolute;
		right: 25rpx;
		top: 0;
	}

	.noimgs {
		margin-left: 49rpx;
		width: 200rpx;
		line-height: 118rpx;
	}

	.img-box image {
		width: 50rpx;
		height: 50rpx;
	}

	.quantity-text {
		color: #007AFF;
	}
</style>
