<template>
	<view >
		<u-tabbar v-model="current" :list="list"></u-tabbar>
	</view>
</template>

<script>
	import {tabbar} from "@/common/common.js"
	export default {
		name:"ctTabbar",
		data() {
			return {
				list: tabbar,
				current: 0,
			};
		}
	}
</script>

<style>

</style>
