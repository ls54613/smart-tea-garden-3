<template>
	<view class="info">
		<text>茶企信息</text>
		<ct-tabbar />
	</view>
</template>

<script>
	import ctTabbar from "@/components/Tabba/ctTabbar.vue"
	export default {
		components:{ctTabbar},
		data() {
			return {
				textdata:'茶企信息'
			}
		},
		onLoad() {
		},
		methods: {
			 leftClick() {
			           console.log("111")
			        }
		}
}
</script>

<style scoped>
</style>
