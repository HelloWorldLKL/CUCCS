<template>
  <div id="app">
    <Vheader></Vheader>
    <el-row class="banner-wrapper">
      <el-col :span="24">
        <Vbanner v-if="carousel" :carousel="carousel"></Vbanner>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}" class="recommend-wrapper border-1px">
        <recommend v-if="courses" :courses="courses"></recommend>
      </el-col>
    </el-row>
    <el-row v-if="courses">
      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px" v-for="course in courses.slice(0,3)">
        <course-exhibit-block v-if="course" :course="course"></course-exhibit-block>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Vfooter></Vfooter>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header'
import banner from 'components/banner/banner'
import recommend from 'components/recommend/recommend'
import courseExhibitBlock from 'components/courseExhibitBlock/courseExhibitBlock'
import footer from 'components/footer/footer'

const ERR_OK = 0

export default {
  components: {
    'Vheader': header,
    'Vbanner': banner,
    'recommend': recommend,
    'course-exhibit-block': courseExhibitBlock,
    'Vfooter': footer
  },
  data() {
    return {
      courses: undefined,
      carousel: undefined
    }
  },
  created() {
    this.$http.get('/api/courses').then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.courses = response.data
        console.log(this.courses)
      }
    })
    this.$http.get('/api/carousel').then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.carousel = response.data
        console.log(this.carousel)
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app
  .banner-wrapper
    margin-bottom 20px
  .recommend-wrapper
    padding 0 10px 25px 10px
    border-1px(rgba(7, 17, 27, 0.1))
  .course-exhibit-block-wrapper
    padding 25px 10px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
