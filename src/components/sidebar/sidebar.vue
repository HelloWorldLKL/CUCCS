<template>
  <div class="side-bar">
    <el-menu default-active="0" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="fa fa-user"></i>&nbsp;&nbsp;我的</template>
        <router-link to="/userInfo">
          <el-menu-item index="1-1">个人信息</el-menu-item>
        </router-link>
        <router-link to="/backerTable">
          <el-menu-item index="1-2">足迹</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="fa fa-users"></i>&nbsp;&nbsp;权限</template>
        <el-menu-item index="2-1">角色管理</el-menu-item>
        <el-menu-item index="2-2">用户管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="fa fa-book"></i>&nbsp;&nbsp;案例</template>
        <el-menu-item index="3-1">案例管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="fa fa-graduation-cap"></i>&nbsp;&nbsp;课程</template>
        <el-menu-item index="4-1">课程管理</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="fa fa-map"></i>&nbsp;&nbsp;轮播图</template>
        <el-menu-item index="5-1">轮播图管理</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="fa fa-bar-chart"></i>&nbsp;&nbsp;统计</template>
        <el-menu-item index="6-1">添加统计</el-menu-item>
        <el-menu-item index="6-2">浏览统计</el-menu-item>
        <el-menu-item index="6-3">收藏统计</el-menu-item>
        <el-menu-item index="6-4">点赞统计</el-menu-item>
        <el-menu-item index="6-5">下载统计</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.side-bar
  text-align center
</style>
