export default {
	data() {
		return {
			share: {
				title: '万农宝',
				path: 'pages/index/index'
			}
		}
	},
	onShareAppMessage(res) { //发送给朋友
		return {
			title: this.share.title,
			path: this.share.path
		}
	},
	onShareTimeline(res) { //分享到朋友圈
		return {
			title: this.share.title,
			path: this.share.path
		}
	},
}
