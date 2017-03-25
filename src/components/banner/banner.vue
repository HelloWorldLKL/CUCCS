<template>
  <el-row :style="{ backgroundColor : carousel[carouselIndex].color}" class="color-banner-wrapper">
    <el-col :lg="{span: 20, offset: 2}">
      <div class="banner">
        <el-row>
          <el-col :span="4" class="menu">
            <el-menu default-active="2" @open="handleOpen" @close="handleClose" theme="dark">
              <el-submenu index="1">
                <template slot="title">计算机</template>
                <el-menu-item index="1-1">数据库</el-menu-item>
                <el-menu-item index="1-2">前端</el-menu-item>
              </el-submenu>
              <el-menu-item index="2">经济管理</el-menu-item>
              <el-menu-item index="3">文化历史</el-menu-item>
              <el-menu-item index="4">理学</el-menu-item>
              <el-menu-item index="5">工学</el-menu-item>
              <el-menu-item index="6">艺术设计</el-menu-item>
              <el-menu-item index="7">外语</el-menu-item>
              <el-menu-item index="8">其他</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="20">
            <div class="carousel-wrapper">
              <el-carousel @change="change" trigger="click">
                <el-carousel-item v-for="item in carousel" :style="{ backgroundImage: 'url(\''+ item.img +'\')' }"></el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
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
    change(newIndex, oldIndex) {
      if (oldIndex === this.carousel.length - 1 && newIndex === 0) {
        this.carouselIndex = 0
        return
      }
      if (oldIndex === 0 && newIndex === this.carousel.length - 1) {
        this.carouselIndex = 4
        return
      }
      this.carouselIndex = newIndex
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

