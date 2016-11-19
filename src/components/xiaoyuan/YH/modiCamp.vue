<template>
	<div>
		<h1>修改校区</h1>
		<el-form ref="form" :model="form" label-width="80px">
			
			<el-form-item label="手机号">
				<el-input v-model="form.phone"></el-input>
			</el-form-item>
			
			<el-form-item label="校区">
				<el-select
					v-model="form.region"
					filterable
					remote
					placeholder="请选择校区"
					:remote-method="remoteMethod"
					:loading="loading">
					<el-option
						v-for="item in option"
						:key="item.value"
						:label="item.label"
						:value="item.value">	
					</el-option>	
				</el-select>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click="onSubmit">切换校区</el-button>
			</el-form-item>
		</el-form>
			
	</div>
</template>

<script>
	export default{
		data() {
			return {
				form: {
					phone: '',
					region: ''
				},
				option: [],
				list: [],
				loading: false,
				states: ["浙江大学", "杭州师范大学", "上海交大"]
			}
		},
		// created() {
		// 	this.$http.get('/mockdata/list.json').then((data) => {
		// 		this.$set('states', data.infos.data)
		// 	})
		// },
		mounted() {
			this.list = this.states.map(item => {
				return { value: item, label: item};
			});
		},
		methods: {
			remoteMethod(query) {
				if(query !== '') {
					this.loading = true;
					setTimeout(() => {
						this.loading = false;
						this.option  = this.list.filter(item => {
							return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
						});
					}, 200)
				}else{
					this.option = [];
				}
			},
			onSubmit() {
				this.$confirm('手机号：'+this.form.phone+'修改到校区：'+this.form.region+'是否继续?','提示', {
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '校区修改成功！'
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消修改校区'
					})
				})
			}
		}
	}
</script>