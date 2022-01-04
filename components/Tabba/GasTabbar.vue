<template>
	<view>
		<u-tabbar v-model="current" :list="list" @change="TabbarTo"></u-tabbar>
	</view>
</template>

<script>
	import {gasTabbar} from "@/common/GasTabbar.js"
	export default {
		name:"GasTabbar",
		data() {
			return {
				list: gasTabbar,
				current: 0,
			};
		},
		methods:{
			TabbarTo(index){
				// console.log(index)
				if(index == 3){
					uni.navigateTo({
						url:'/pages/Gas/fault/fault'
					})
				}
			}
		}
	}
		
</script>

<style>

</style>
