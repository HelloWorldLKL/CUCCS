<template>
  <div class="banner">
    <el-row>
      <el-col :span="4" class="menu">
        <el-menu default-active="2" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>计算机</template>
            <el-menu-item index="1-1">数据库</el-menu-item>
            <el-menu-item index="1-2">前端</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="carousel-wrapper">
           <el-carousel>
             <el-carousel-item v-for="img in imgGroup" :style="{ backgroundImage: 'url(\''+ img +'\')' }"></el-carousel-item>
           </el-carousel>
         </div>
      </el-col>
    </el-row>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  data() {
    return {
      imgGroup: [
        'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/35/97f962405ee52ef933367dd7ba597522.jpg',
        'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/03/67/f76fceef54998a40f99bde5a1a96138a.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489763187839&di=fb6683c0457b77c5333c5048cfd862f8&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F69%2F40%2F2f98a6cd604d1e03c9ec4d07db019ff0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489763187827&di=374664155fe6b8e9756de3d90c0a1b57&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F69%2F40%2F4324f2b8eefad86d6270442846108661.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489763187823&di=4ac1eed4c39e054d23ab9dd62fd416b9&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F04%2F21%2F5076702b6ef034c9f1fe893911246206.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489763187816&di=8022eb29b27f5590875bff7c4c7def8c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F01%2F42%2F6c6cb1412c93e745ea34e187a5be04b1.jpg'
      ]
    }
  },
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

<style lang="stylus" rel="stylesheet/stylus">
.banner
  text-align center
  .menu
    height 300px
    background-color #324157
    overflow auto
  .el-carousel__item
    background-size 100% 300px
</style>

