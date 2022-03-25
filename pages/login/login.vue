<template>
  <view class="content">
        <view class="avatorWrapper">
            <view class="avator">
                <image class="img" src="../../static/img/taiyang.png" mode="widthFix"></image>
            </view>
        </view>
		<view class="title">
			<text>欢迎登录万农宝</text>
		</view>
        <view class="form">
            <view class="inputWrapper">
                <input class="input" placeholder-style="color: #ffffff;" type="text" v-model="form.username" placeholder="用户名"/>
            </view>
            <view class="inputWrapper">
                <input class="input" placeholder-style="color: #ffffff;" type="password" v-model="form.password" placeholder="密码"/>
            </view>

			<view class="verifly">
				<input class="vinput" placeholder-style="color: #ffffff;" type="text" v-model="form.code" placeholder="验证码"/>
				<image class="ii" :src="src" @tap="shuaxin"></image>
            </view>
			<button  class="loginBtn" @click="toIndex">登录</button>
       </view>
	</view>
</template>

<script>
	import {getcode,post} from '@/common/api.js'
    export default {
        data() {
            return {

                title: '万农宝',
				src:'',
				uuid:'',
				form:{username:'',password:'',code:''}	
            }
        },
        onLoad() {
			this.getcoder();
        },


        methods: {
			// 登录
			toIndex(){
					let that = this
					this.form.uuid = this.uuid;
					post(this.form).then(res=>{
						// console.log(res[1].data);
						if(res[1].data.code==200){
							uni.setStorageSync('storage_token', res[1].data.token);
							uni.switchTab({
									url:'/pages/index/index'
								})
						}else{
							// console.log(res[1].data.msg)
							uni.showModal({
								    title: '错误提示',
								    content: res[1].data.msg,
								    success: function (res) {
								        if (res.confirm) {
								            console.log('用户点击确定');
											that.getcoder();
											that.form.code=''
								        } else if (res.cancel) {
								            console.log('用户点击取消');
								        }
								    }
								});
						}
						});
			},
			// 获取uuid和验证码图片
			getcoder(){
				getcode().then(res=>{
					// console.log(res[1].data)
					this.src = 'data:image/gif;base64,'+res[1].data.img;
					this.uuid = res[1].data.uuid;
				})
			},

			// 点击图片刷新验证码
			shuaxin(){
				this.getcoder();
			},
        }
    }
</script>

<style scoped>
    .content {
        /* background: #aaffff; */
		background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170724%2Fd83f0446db0b4e6da9dc498ff6ddf1e9_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650444902&t=0b97ed38395a5fafd2673fd4e77fcb0a);
		background-size: cover;
		overflow: hidden;
        width: 100vw;
        height: 100vh;
    }
	.title{
		margin-top: 5px;
		width: 100%;
		text-align: center;
		font-size: 65rpx;
	}
    .avatorWrapper{
        height: 30vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .avator{
        width: 200upx;
        height: 200upx;
        overflow: hidden;
    }
    .avator .img{
        width: 100%
    }
    .form{
        padding: 0 100upx;
        margin-top: 30px;
    }
    .inputWrapper{
        width: 100%;
        height: 80upx;
        /* background: white; */
        border-radius: 20px;
        box-sizing: border-box;
        padding: 0 20px;
        margin-top: 15px;
    }
    .inputWrapper .input{
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 15px;
		color: #ffffff;
		border: 2px solid #ffffff;
		border-radius: 50upx;
    }
	.verifly{
		width: 100%;
		height: 80upx;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 15px;
		position: relative;
	}
	.verifly .vinput{
		width: 50%;
		height: 100%;
		text-align: center;
		font-size: 15px;
		color: #ffffff;
		border: 2px solid #FFFFFF;
		border-radius: 50upx;
		float: left;
	}
	.verifly .ii{
		position: absolute;
		margin-left: 20px;
		width: 30%;
		height: 100%;
		border: 2px solid #FFFFFF;

	}
    .loginBtn{
        width: 100%;
        height: 80upx;
		color:#E5E5E5;
        background: #2cbe9b;
        /* border-radius: 50upx; */
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
</style>