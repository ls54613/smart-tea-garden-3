<template>
	<view>
		<u-navbar title-color="#fff" back-icon-color="#ffffff"
			:is-fixed="isFixed" :is-back="isBack" 
			:background="background" 
			:back-text-style="{color: '#fff'}" :title="title" 
			:back-icon-name="backIconName" :back-text="backText"
		>
			<view class="slot-wrap" v-if="useSlot">
				<view class="search-wrap" v-if="search">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search v-model="keyword" :show-action="showAction" height="56" :action-style="{color: '#fff'}"></u-search>
				</view>
				<view class="navbar-right" v-if="rightSlot">
					<view class="message-box right-item">
						<u-icon name="chat" size="38"></u-icon>
						<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
					</view>
					<view class="dot-box right-item">
						<u-icon name="calendar-fill" size="38"></u-icon>
						<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
					</view>
				</view>
				<view class="map-wrap" v-if="custom">
					<u-icon name="map" color="#ffffff" size="24"></u-icon>
					<text class="map-wrap-text">轻舟已过万重山</text>
					<u-icon name="arrow-down-fill" color="#ffffff" size="22"></u-icon>
				</view>
			</view>
			<view class="navbar-right" slot="right" v-if="slotRight">
				<view class="message-box right-item">
					<u-icon name="chat" size="38"></u-icon>
					<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
				</view>
				<view class="dot-box right-item">
					<u-icon name="calendar-fill" size="38"></u-icon>
					<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
				</view>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		data() {
			return {
				title: '新闻',
				backText: '返回',
				backIconName: 'nav-back',
				right: false,
				showAction: false,
				rightSlot: false,
				useSlot: false,
				background: {
					'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				isBack: true,
				search: false,
				custom: false,
				isFixed: true,
				keyword: '',
				// #ifdef MP
				slotRight: false,
				// #endif
				// #ifndef MP
				slotRight: true
				// #endif
			};
		}
	}
</script>

<style lang="scss" scoped>
	.u-demo {
		//height: 200vh;
		height: calc(100% - 44px);
		height: calc(100% - 44px - constant(safe-area-inset-top));
		height: calc(100% - 44px - env(safe-area-inset-top));
	}
	
	.wrap {
		padding: 24rpx;
	}
	
	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}
	
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}
	
	.message-box {
		
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
	.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
	.map-wrap-text {
		padding: 0 6rpx;
	}
</style>
