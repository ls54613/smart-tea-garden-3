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
				<u-cell-item icon="star" :title="textdata" @tap="toEnvironment"></u-cell-item>
				<u-cell-item icon="account" title="基地实景" @tap="toPicture"></u-cell-item>


				<!-- <u-cell-item icon="eye" title="视频监控"></u-cell-item> -->
				<u-cell-item icon="coupon" title="生产管理" @tap="toManagement"></u-cell-item>
				<u-cell-item icon="heart" title="企业信息" @tap="basiclnfo"></u-cell-item>
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
				textdata:'环境监测',
			} 
		},
		onLoad() {
			this.Falseinfo();
			this.onGotUserInfo();
		},
		onShow() {
		},
		methods: {
			//获取用户信息
			onGotUserInfo() {
					const _this = this;
					// 获取用户信息
					uni.showModal({	
						title: '温馨提示',
						content: '亲，授权微信登录后才能正常使用小程序功能',	
						success(res) {			
			            //如果用户点击了确定按钮		
							if (res.confirm) {			
								uni.getUserProfile({				
								desc: '获取你的昵称、头像、地区及性别',				
								success: res => {
									_this.nickname = JSON.parse(res.rawData).nickName;
									_this.pic = JSON.parse(res.rawData).avatarUrl; 			
								},				
								fail: res => {									
									console.log(res)					
									//拒绝授权					
									uni.showToast({						
										title: '您拒绝了请求不能正常使用小程序',						
										icon: 'error',						
										duration: 2000,
									});					
									return;				
									}			
								});		
								} else if (res.cancel) {			
									//如果用户点击了取消按钮				
									uni.showToast({				
									title: '您拒绝了请求不能正常使用小程序',				
									icon: 'error',				
									duration: 2000,
								});			
								return;		
							}	
					}
				});
	        },
			toModify() {
				uni.setStorageSync('nickName',this.nickname)
				uni.setStorageSync('avatar',this.pic)
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
			toPicture() {
				uni.navigateTo({
					url:'/pages/picture/picture'
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
