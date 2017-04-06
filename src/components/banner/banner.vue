<template>
  <el-row :style="{ backgroundColor : carousel[carouselIndex].caBgc}" class="color-banner-wrapper">
    <el-col :lg="{span: 20, offset: 2}">
      <div class="banner">
        <el-row v-if="courseType">
          <el-col :span="4" class="menu">
            <el-menu theme="dark">
              <a :href="encodeURI(encodeURI(`/sort.html?typeID=${item.ccID}&typeName=${item.ccName}`))" v-for="(item, index) in courseType">
                <el-menu-item :index="index.toString()">{{item.ccName}}</el-menu-item>
              </a>
            </el-menu>
          </el-col>
          <el-col :span="20">
            <div class="carousel-wrapper">
              <el-carousel @change="changeCarouselIndex" trigger="click">
                <el-carousel-item v-for="item in carousel" :style="{ backgroundImage: 'url(\''+ item.caCover +'\')' }"></el-carousel-item>
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
    },
    courseType: {
      type: Array
    }
  },
  data() {
    return {
      carouselIndex: 0
    }
  },
  methods: {
    changeCarouselIndex(newIndex, oldIndex) {
      if (oldIndex === this.carousel.length - 1 && newIndex === 0) {
        this.carouselIndex = 0
        return
      }
      if (oldIndex === 0 && newIndex === this.carousel.length - 1) {
        this.carouselIndex = this.carousel.length - 1
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

