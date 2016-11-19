<template>

	<div class="schoolManage">
		<div class="breadcrumb"><el-button type="primary">新增高校</el-button></div>
		
		<el-select
    		v-model="value9"
    		multiple
    		filterable
    		remote
    		placeholder="请输入关键词"
    		:remote-method="remoteMethod"
    		:loading="loading">
    		<el-option
    		  v-for="item in options4"
    		  :key="item.value"
    		  :label="item.label"
    		  :value="item.value">
    		</el-option>
  		</el-select>

    	<el-table
    	  :data="tableData"
    	  border
    	  style="width: 100%">
    	  <el-table-column
    	    type="index"
    	    label="序号"
    	    width="80">
    	  </el-table-column>
    	  <el-table-column
    	    :data-mid="this.tableData.mid"
    	    prop="name"
    	    label="高校名称"
    	    width="180">
    	  </el-table-column>
    	  <el-table-column
    	    prop="province"
    	    label="省份">
    	  </el-table-column>
    	  <el-table-column
    	    prop="city"
    	    label="城市">
    	  </el-table-column>
    	  <!-- <el-table-column
    	    prop="coStatus"
    	    label="合作状态">
    	  </el-table-column> -->
    	  <!-- <el-table-column
    	    prop="coDate"
    	    label="合作日期">
    	  </el-table-column> -->
    	  <el-table-column
    	    prop="campNum"
    	    label="校区数量">
    	  </el-table-column>
    	  <el-table-column
    	    prop="ptNum"
    	    label="点位数量">
    	  </el-table-column>
    	  <el-table-column
    	    inline-template
    	    label="操作"
    	    width="100">
    	    <span>
    	    	<el-button type="text" size="small" @click="editorSchool(row.city)" :data-mid="tableData.dataMid">编辑</el-button>
    	    	<el-button type="text" size="small" >删除</el-button>
    	    </span>
    	  </el-table-column>
    	</el-table>
	
  		<el-pagination
    	  layout="prev, pager, next"
    	  :page-size="20"
    	  :total="12">
    	</el-pagination>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333,
        		  mid: 1
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		},{
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		}, {
        		  name: '王小虎',
        		  province: '上海',
        		  city: '普陀区',
        		  campNum: 1,
        		  ptNum: 200333
        		} ]
			}
		},
		methods: {
			editorSchool(a) {
				console.log(a);
			}
		}
	}
</script>