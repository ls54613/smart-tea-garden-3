<template>
	<view>
		<u-navbar title-color="#fff" back-icon-color="#ffffff"
			:is-fixed="isFixed" :is-back="isBack" 
			:background="background" 
			:back-text-style="{color: '#fff'}" :title="title" 
			:back-icon-name="backIconName" :back-text="backText"
		>
			<view class="slot-wrap">
				<view class="lift-text">发现</view>
			</view>
			<view class="slot-wrap">
				<view class="search-wrap">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search v-model="keyword" @custom="search" @search="search" :show-action="showAction" height="56" :action-style="{color: '#fff'}" placeholder="请输入内容"></u-search>
				</view>
			</view>
		</u-navbar>
		<ct-tabbar />
	</view>
</template>

<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	export default {
		components:{ctTabbar},
		data() {
			return {
				title: '',
				backText: '返回',
				backIconName: 'nav-back',
				showAction: true,
				background: {
					'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				isBack: false,
				isFixed: true,
				keyword: '',
			}
		},
		methods: {
			search(value){
				console.log(value)
				this.keyword = ''
			}
		}
	}
</script>

<style>
.lift-text {color: #FFFFFF; font-weight: 500; margin: 0 auto; width: 90rpx; text-align: center;}
.search-wrap { width: 450rpx;}
</style>
