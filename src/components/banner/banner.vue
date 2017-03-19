<template>
  <el-row :style="{ backgroundColor : carousel[colorIndex].color}" class="color-banner-wrapper">
    <el-col :lg="{span: 20, offset: 2}">
      <div class="banner">
        <el-row>
          <el-col :span="4" class="menu">
            <el-menu default-active="2" @open="handleOpen" @close="handleClose" theme="dark">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>计算机</template>
                <el-menu-item index="1-1">数据库</el-menu-item>
                <el-menu-item index="1-2">前端</el-menu-item>
              </el-submenu>
              <el-menu-item index="2"><i class="el-icon-menu"></i>经济管理</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>文化历史</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="20">
            <div class="carousel-wrapper">
              <el-carousel @change="change" trigger="click" indicator-position="none">
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
    change(oldIndex, newIndex) {
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

