<template>
    <div class="content">
        <div class="left-sidebar">
            <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>高校管理</template>
                    <el-menu-item index="1-1"><router-link :to="'/xiaoyuan/GX/schoolManage'">学校管理</router-link></el-menu-item>
                    <el-menu-item index="1-2">校区管理</el-menu-item>
                    <el-menu-item index="1-3">点位管理</el-menu-item>
                    <el-menu-item index="1-4"><router-link :to="'/xiaoyuan/GX/Manager'">管理员账号管理<router-link></el-menu-item>
                    <el-menu-item index="1-5">教师管理</el-menu-item>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
                    <el-menu-item index="2-1"><router-link :to="'/xiaoyuan/YH/modiCamp'">修改校区</router-link></el-menu-item>
                    <el-menu-item index="2-2">更换手机号</el-menu-item>
                    <el-menu-item index="2-3">用户验证信息</el-menu-item>
                </el-submenu>
            </el-menu>
       </div>

       <router-view class="right-iframe"></router-view>
    </div>	
</template>

<script>
    
</script>