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
        <view >
            <view class="inputWrapper">
                <input class="input" placeholder-style="color: #ffffff;" type="text" value="" placeholder="请输入用户名"/>
            </view>
            <view class="inputWrapper">
                <input class="input" placeholder-style="color: #ffffff;" type="password" value="" placeholder="请输入密码"/>
            </view>
			<view class="verifly" >
				<input class="vinput" placeholder-style="color: #ffffff;" type="text" value="" placeholder="请输入验证码"/>
				<image src="data:image/gif;base64,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"" class="ii"></image>
			</view>
            <button  class="loginBtn" @click="toIndex">登录</button>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: '万农宝'
				  
            }
        },
        onLoad() {

			},
        methods: {
			toIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
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
		border: 2px solid #55ffff;
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
		border: 2px solid #55ffff;
		border-radius: 50upx;
		float: left;
	}
	.verifly .ii{
		position: absolute;
		margin-left: 20px;
		width: 30%;
		height: 100%;
		border: 2px solid #55ff7f;
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