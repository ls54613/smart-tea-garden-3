import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    state:{//存放状态
        "openId":"",
        "age":18,
		"nickName":'',
		"avatar":''
    },
	mutations:{//存放方法
		info(state,obj){
			state.nickName = obj.nickName
			state.avatar = obj.avatar
		}
	}
})
export default store