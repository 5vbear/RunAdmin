<template>
	<div class="login">
		<el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="用户名" prop="name">
  			  <el-input type="text" v-model="loginForm.name" auto-complete="off"></el-input>
  			</el-form-item>

  			<el-form-item label="密码" prop="pass">
  			  <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
  			</el-form-item>

  			<el-form-item>
  			  <el-button type="primary" @click.stop.prevent="loginSubmit">登录</el-button>
  			</el-form-item>

		</el-form>
	</div>
</template>	

<script>
	import { mapActions } from 'vuex'

	export default {
		data() {
			var checkUsername = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'));
				}else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				}else {
					if ( value.length<8 || value.length>20) {
						callback(new Error('密码格式错误'))
					}else{
						callback()
					}
				}
			};
			return {
				flag: true,
				loginForm: {
					name: '',
					pass: ''
				},
				loginRules: {
					name: [
						{ required: true, message: '请输入用户名', trigger: 'blur'},
						{ validator: checkUsername}
					],
					pass: [
						{ required: true, message: '请输入密码', trigger: 'blur'},
						{ validator: validatePass}
					]
				}
			};
		},
		methods: {
			...mapActions(['SIGNIN']),

			loginSubmit(ev) {
				if(this.flag == true){
					this.$refs.loginForm.validate((valid) => {
						if(valid) {
							this.flag = false;
							this.SIGNIN(this.loginForm)
							this.$router.replace('/xiaoyuan');
							//请求验证
							//验证通过：commit('SIGNIN'), 页面跳转
							//验证失败：修改this.flag = true
						}else{
							console.log('error submit');
							return false;
						}
					})
				}else{
					return
				}	
			}
		}
	}
</script>