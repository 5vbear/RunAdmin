<template>
	<div id="top">
		<el-menu  theme="dark" default-active="1" class="el-menu-demo test" mode="horizontal">
  			<span>运动世界</span>
			
			<el-dropdown  v-if="user.name" @command="loginOut">
      			<span class="el-dropdown-link">
        			{{user.name}}欢迎您<i class="el-icon-caret-bottom el-icon--right"></i>
      			</span>
      			<el-dropdown-menu slot="dropdown" @command="loginOut">
        			<el-dropdown-item>退出登录</el-dropdown-item>
      			</el-dropdown-menu>
    		</el-dropdown>

			<el-menu-item index="2" v-if="user.name"><router-link :to="'/yunying'">运营管理<router-link></el-menu-item>
			<el-menu-item index="1" v-if="user.name"><router-link :to="'/xiaoyuan'">校园管理<router-link></el-menu-item>
		</el-menu>
	</div>
</template>

<script>
 import { mapState } from 'vuex'
 import { mapActions } from 'vuex'
	export default {
		computed: mapState({user: state => state.user}),
		methods: {
			...mapActions(['SIGNOUT']),
			loginOut() {
				this.SIGNOUT()
				const router = this.$router
				router.replace({path: '/login'})
			}
		}
		
		
	}
</script>

<style>
	#top .admin{
		float: right;
	}
	#top .el-menu-item{
		float: right;
	}
	#top span{
		color: #c0ccda;
		line-height: 60px;
		padding-left: 15px;
	}
	#top .is-active a{
		color: #20a0ff;
	}
	#top .el-dropdown{
		float: right;
	}
</style>