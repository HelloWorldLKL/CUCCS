<template>
	<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">处理中心</el-menu-item>
	  <el-submenu index="2">
	    <template slot="title">我的工作台</template>
	    <el-menu-item index="2-1">选项1</el-menu-item>
	    <el-menu-item index="2-2">选项2</el-menu-item>
	    <el-menu-item index="2-3">选项3</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
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
      carouselIndex: 0
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    change(oldIndex, newIndex) {
      console.log(newIndex)
      this.carouselIndex = newIndex
    }
  },
  computed: {
    colorIndex() {
      if (this.carouselIndex === this.carousel.length - 1) {
        return 0
      }
      return this.carouselIndex + 1
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.color-banner-wrapper
  transition .7s
  .banner
    text-align center
    .menu
      height 300px
      background-color #324157
      overflow auto
    .el-carousel__item
      background-size 100% 100%
</style>

