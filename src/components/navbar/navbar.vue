<template>
	<el-menu theme="dark" :default-active="'0'" mode="horizontal" @select="handleSelect">
    <el-row>
      <el-col :lg="{span: 20, offset: 2}">
    	  <el-menu-item index="1"><i class="fa fa-database"></i>&nbsp;&nbsp;案例库</el-menu-item>
        <el-menu-item index="2"><i class="fa fa-user"></i>&nbsp;&nbsp;{{userName}}</el-menu-item>
    	  <a href="/login.html"><el-menu-item index="3"><i class="fa fa-power-off"></i>&nbsp;&nbsp;退出登录</el-menu-item></a>
      </el-col>
    </el-row>
	</el-menu>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    carousel: {
      type: Array
    }
  },
  data() {
    return {
      userName: 'admin'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

