<template>
	<view>
		<u-navbar :is-back="false" title="　" :border-bottom="false">
			<view class="u-flex u-row-right" style="width: 100%;">
			</view>
		</u-navbar>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" @tap='toModify'>
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{nickname}}</view>
				<view class="u-font-14 u-tips-color">职位:普通人员</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" :title="textdata" @tap="toVideo"></u-cell-item>
				<u-cell-item icon="account" title="人员考察" @tap="toManagement"></u-cell-item>
				<!-- <u-cell-item icon="eye" title="视频监控"></u-cell-item> -->
				<u-cell-item icon="coupon" title="环境监测" @tap="toEnvironment"></u-cell-item>
				<u-cell-item icon="heart" title="企业信息" @tap="tobasiclnfo"></u-cell-item>
			</u-cell-group>
		</view>
<!-- 		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置"></u-cell-item>
			</u-cell-group>
		</view> -->
		<ct-tabbar />
	</view>
</template>

<script>
	import {getOpenId,getOpenIdDetail,getIsFalse} from '@/common/api.js'
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	export default {
		components:{ctTabbar},
		data() {
			return {
				pic:'',
				nickname:'',
				vid:'false',
				textdata:'数据分析',
			} 
		},
		onLoad() {
			this.Falseinfo()
		},
		onShow() {
			this.sahjhda();
		},
		methods: {
			//获取用户信息
			sahjhda() {
				const that = this;
				wx.login({
					success(res) {
						getOpenId(res.code).then((e)=>{
							if(e[1].data.code = 200) {
								const openId = e[1].data.data.match(/"openid":"(\S*)"}/)[1]
								getOpenIdDetail(openId).then((arr)=>{
									that.nickname = arr[1].data.data.nickname
									that.pic = arr[1].data.data.image
								})
							}
						})
					}
				})
			},
			toModify() {
				uni.navigateTo({
					url: '/pages/my/modify/modify'
				})
			},
			basiclnfo() {
				uni.switchTab({
					url: '/pages/basiclnfo/basiclnfo'
				})
			},
			toManagement() {
				uni.navigateTo({
					url: '/pages/management/management'
				})
			},
			toEnvironment() {
				uni.navigateTo({
					url:'/pages/environment/environment'
				})
			},
			toVideo() {
				uni.navigateTo({
					url:'/pages/video/video'
				})
			},
			Falseinfo() {
				getIsFalse().then((res)=>{
					this.vid = res[1].data.data
					if(this.vid){
						this.textdata = '视频监控'
					}
				})
			},
		}
	}
</script>


<style lang="scss" scoped>
page{
	background-color: #ededed;
}
.camera{
	width: 54px;
	height: 44px;
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
