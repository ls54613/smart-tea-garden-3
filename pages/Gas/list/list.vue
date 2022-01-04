<template>
	<view class="record">
		<view class="centen">
			<view class="search-box">
				<view class="search" >
					<u-search placeholder="场所名称/IMEI号" v-model="keyword" height="70" border-color="#ababab" bg-color="#ffffff" ></u-search>
				</view>
			</view>
			<view v-if="isshow">
				<view class="card" @tap="toDetails" v-for="item in nodeInfo" :key="item.id">
					<view class="card-left">
						<view class="card-img-box">
							<image src="http://cdn.1334.top/%E7%87%83%E6%B0%94%E6%8A%A5%E8%AD%A6%E5%99%A8%401x.png" mode=""></image>
						</view>	
					</view>
					<view class="card-right" >
						<view class="card-right-left">
							<view class="card-title top-title">
								<text>7栋602</text>
							</view>
							<view class="card-title">
								<text>imei：{{item.device_code}}</text>
							</view>
							<view class="card-title">
								<text>场所：{{item.scene_name}}</text>
							</view>
							<view class="card-title">
								<text class="card-title-d">地址：湖南省长沙市麓谷国际工业园7栋602</text>
							</view>
							<view class="card-title">
								<text>最近活动时间：{{item.maintenance_time | date('yyyy-mm-dd hh:MM:ss')}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="loadmore ">
					没有更多设备了
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
	import {nodeInfo} from '@/common/api.js'
	export default {
		data() {
			return {
				keyword:'',
				isshow:false,
				nodeInfo:'',
			}
		},
		components:{GasTabbar},
		onLoad(id) {
			console.log(id)
			if(id.id == 0){
				this.isshow = true
			}
			console.log(this.isshow)
		},
		onShow() {
			this.gitnodeInfo()
		},
		methods: {
			toDetails() {
				uni.navigateTo({
					url:'/pages/Gas/details/details'
				})
			},
			gitnodeInfo() {
				nodeInfo().then((res)=>{
					if(res[1].data.data.data){
						this.nodeInfo = res[1].data.data.data
					}else{
						this.isshow = false
					}
					
				})
			}
			
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
		background-color: #FFFFFF;
		border-radius: 30rpx;
		margin-bottom: 38rpx;
		display: flex;
	}
	.card-left {
		width: 155rpx;
	}
	.card-img-box {
		width: 107rpx;
		height: 107rpx;
		background-color: #FFFFFF;
		border-radius: 50%;
		margin-top: 66rpx;
		margin-left: 38rpx;
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
		margin: 20rpx 0;
	}
	.card-title {
		font-size: 27rpx;
		line-height: 40rpx;
		color: #bebebe;
		position: relative;
	}
	.top-title {
		font-size: 34rpx;
		font-weight: 600;
		color: #000000;
		
	}
	.card-title-d{
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
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
	.loadmore {
		text-align: center;
		margin-top: 40rpx;
		color: #494a4f;
	}
</style>
