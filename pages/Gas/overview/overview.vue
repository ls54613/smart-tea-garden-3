<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 750rpx; height: 1500rpx;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
		<gas-tabbar />
	</view>

</template>

<script>
	import GasTabbar from '@/components/Tabba/GasTabbar.vue'
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 28.217825,
				longitude: 112.872381,
				covers: [{
					latitude: 28.217825,
					longitude: 112.872381,
					iconPath: 'http://cdn.1334.top/%E5%AE%9A%E4%BD%8D%20%282%29.png'
				}]
			}
		},
		components: {
			GasTabbar
		},
		methods: {

		}
	}
</script>

<style>

</style>
