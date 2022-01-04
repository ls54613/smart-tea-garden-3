<template>
	<view>
		<view class="wrap">
			<view class="u-avatar-wrap">
				<image class="u-avatar-demo" :src="object.image" mode="aspectFill" @click="chooseAvatar"></image>
			</view>
			<view class="input-box">
				<text>昵称：</text>
				<view class="input-list">
					<u-input v-model="object.nickname" :maxlength="8"  :clearable="clearable" placeholder="请输入您的昵称" />
				</view>
			</view>
			<view class="custom-style">
				<u-button size="medium" @click="update">保存</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import { baseUrl } from '@/common/config.js'
	import {getOpenId,getOpenIdDetail,} from '@/common/api.js'
	export default {
		data() {
			return {
				object:{
					nickname: '',
					phone: '',
					openId:'',
					image: 'http://cdn.1334.top/common132.jpg',
				},
				type: 'number',
				clearable: false,
			}
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.object.image = path;
				console.log(path)
				// 可以在此上传到服务端
				uni.uploadFile({
					url: `${baseUrl}/gdadmin/mini/file/uploadFile`,
					filePath: path,
					name: 'file',
					complete: (res) => {
						res= JSON.parse(res.data)
						this.object.image = res.data
					}
				});
			})
		},
		onLoad() {
			this.sahjhda();
		},
		methods: {
			chooseAvatar() {
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo	
				this.$u.route({
					url: '/pages/my/UavatarCropper/UavatarCropper',
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			sahjhda() {
				const that = this;
				wx.login({
					success(res) {
						getOpenId(res.code).then((e)=>{
							if(e[1].data.code = 200) {
								const openId = e[1].data.data.match(/"openid":"(\S*)"}/)[1]
									that.object.openId = openId
								getOpenIdDetail(openId).then((arr)=>{
									that.object.nickname = arr[1].data.data.nickname
									that.object.image = arr[1].data.data.image
									that.object.phone = arr[1].data.data.phone
								})
							}
						})
					}
				})
			},
			update() {
				this.$u.put(`${baseUrl}/gdadmin/mini/wx_user/update`,this.object	).then(res =>{
					console.log(res);
				});
				uni.navigateBack({
					 delta: 1
				});
			}
			
		}
	}
</script>

<style scoped>
	.wrap {
		padding: 40rpx;
	}
	.u-avatar-wrap {
		margin-top: 80rpx;
		overflow: hidden;
		margin-bottom: 80rpx;
		text-align: center;
	}
	.u-avatar-wrap image {
		background-color: #bababa;
	}
	.u-avatar-demo {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100rpx;
	}
	.input-box {
		width: 400rpx;
		margin: 0 auto;
		margin-bottom: 80rpx;
	}
	.custom-style {
		text-align: center;
		margin-top: 80rpx;
	}
	.input-list {
		display: inline-block;
		margin: auto 0;
		text-align: center;
	}
</style>