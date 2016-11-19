<template>
	<div class="pointManage">
		<div class="breadcrumb">管理员账号管理<el-button type="primary" @click="addManager"></div>

		<el-select
			v-model="region"
			filterable
			placeholder="请输入高校名称"
			:loading="loading">
			<el-option
				v-for="item in option"
				:key="item.value"
				:label="item.label"
				:value="item.value">	
			</el-option>	
		</el-select>
		
		<el-button type="primary" @click="getManager">搜索</el-button>

		<el-table
			v-if="tableData.length > 0"
      		:data="tableData"
      		style="width: 100%">
      		<el-table-column
      		  type="index"
    	      label="序号"
    	      width="80">
      		</el-table-column>
      		<el-table-column
      		  prop="schoolName"
      		  label="高校名称"
      		  width="200">
      		</el-table-column>
      		<el-table-column
      		  prop="name"
      		  label="账号"
      		  width="200">
      		</el-table-column>
      		<el-table-column
    	      inline-template
    	      label="操作">
    	      <span>
    	    	<el-button type="text" size="small" @click="editorManager(row.name)">修改密码</el-button>
    	    	<el-button type="text" size="small" @click="deleteManager(row.name)">删除</el-button>
    	      </span>
    	    </el-table-column>
    	</el-table>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				region: '',
				tableData: [{
        		  schoolName: '北京大学',
        		  name: 'hah'
        		}],
				option: [],
				list: [],
				loading: false,
				states: ["浙江大学", "杭州师范大学", "上海交大"]
			}
		},
		mounted() {
			this.option = this.states.map(item => {
				return {value: item, label: item}
			})
		},
		methods: {
			getManager() {
				if(!this.region) {
					this.$notify.error({
						title: '错误',
						message: '未选择高校'
					})
				}else{
					console.log(this.region)
				}
			},
			deleteManager(e) {
				$.confirm('确定删除此管理员账号？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {

				})
			}

		}
	}
</script>