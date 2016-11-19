import Vue from 'vue'

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        /**
         * 登录成功
         * 
         * @param {Object} state
         * @param {Object} user
         */
        SIGNIN(state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        /**
         * 退出登录
         * 
         * @param {Object} state
         */
        SIGNOUT(state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
    // 	SIGNIN ({ commit }, user) {
    // 		return new Promise((resolve, reject) => {
    // 		  setTimeout(() => {
    // 		    commit('SIGNIN', user)
    // 		    resolve()
    // 		  }, 1000)
    // 		})
  		// },
        SIGNIN({commit}, user) {
            commit('SIGNIN', user)
        },
        SIGNOUT({commit}) {
            commit('SIGNOUT')
        }
    }
}

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const state = {
// 	user: {

// 	}
// }
// const state = JSON.parse(sessionStorage.getItem('user')) || {}

// const mutations = {
// 	/**
// 	 *登录成功
// 	 *
// 	 *@param {Object} state
// 	 *@param {Object} user
// 	**/
// 	SIGNIN(state, user) {
// 		sessionStorage.setItem('user', JSON.stringify(user))
// 		Object.assign(state, user)
// 	},

// 	*
// 	 *退出登录
// 	 *
// 	 *@param {Object} state
// 	 *@param {Object} user
// 	*
// 	SIGNOUT(state) {
// 		sessionStorage.removeItem('user')
//         Object.keys(state).forEach(k => Vue.delete(state, k))
// 	}

// }

// const actions = {
// 	SIGNIN({commit}, user) {
// 		commit('SIGNIN', user)
// 	},
// 	SIGNOUT({commit}) {
// 		commit('SIGNOUT')
// 	}
// }

// export default new Vuex.Store({
// 	state,
// 	mutations,
// 	actions
// })