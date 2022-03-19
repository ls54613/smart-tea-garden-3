<template>
	<view>
		<view class="head">
			<image src="../../static/img/v2_r0sz2m.png" mode=""></image>
			<view class="title">
				<text>欢迎使用</text>
				<text>万欧数字化茶园</text>
				<text>开发全程数字化管理</text>
			</view>
		</view>
		<view class="search">
			<u-search placeholder="请输入内容" v-model="keyword" @custom="search" @search="search"></u-search>
		</view>
		<view class="uni-padding-wrap uni-common-mt " v-if="vid">
			<view class="video-box">
				<video src="http://hls01open.ys7.com/openlive/02b0a6383639444d9518c263f9817152.hd.m3u8"
					@error="videoErrorCallback"  enable-danmu  controls ></video>
			</view>
			<view class="video-box">
				<video src="http://hls01open.ys7.com/openlive/02b0a6383639444d9518c263f9817152.hd.m3u8"
					@error="videoErrorCallback"  enable-danmu  controls ></video>
			</view>
		</view>
		<view class="empty-box" v-else>
				<u-empty text="暂无数据 !" mode="list"></u-empty>
		</view>
	
		<ct-tabbar />
	</view>
</template>
<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	import {getIsFalse} from '@/common/api.js'
	export default {
		components:{ctTabbar},
		data() {
			return {
				keyword:'',
				vid:'false',
<<<<<<< HEAD
				textdata:'基地实景'
=======
				textdata:'数据分析'
>>>>>>> ecf40ff8c7896acc1ff167a3eaeba26af7e2a7d1
			}
		},
		onLoad() {
			this.Falseinfo()
		},
		methods: {
			search(value){
				console.log(value)
				this.keyword = ''
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

<style scoped>
	.head {width: 750rpx; height: 360rpx; position: relative;}
	.head image {width: 750rpx; height: 360rpx; position: absolute;}
	.title {width: 345rpx; height: 170rpx; position: absolute; top: 130rpx; left: 395rpx;}
	.title text {display: inline-block; color: #595950; font-size: 45rpx; font-weight: 700; line-height: 58rpx;}
	.title text:nth-child(1) {margin-left: 132rpx;}
	.title text:nth-child(3) {font-size: 28rpx;}
	
	.search {width: 650rpx; margin: 20rpx auto;}
	.video-box {width: 649rpx; margin: 20rpx auto; }
	.video-box video {width: 649rpx; height:365.6rpx ; border-radius: 15rpx; overflow: hidden;}
	.empty-box {width: 750rpx; margin-top: 280rpx;}
</style>
