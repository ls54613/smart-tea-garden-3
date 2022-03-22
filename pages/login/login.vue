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
                <input class="input" placeholder-style="color: #ffffff;" type="text" value="" placeholder="请输入用户名"/>
            </view>
            <view class="inputWrapper">
                <input class="input" placeholder-style="color: #ffffff;" type="password" value="" placeholder="请输入密码"/>
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
			}
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
		margin-top: 15px;
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