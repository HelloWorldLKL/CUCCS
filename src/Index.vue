<template>
  <div id="app">
    <Vheader :courses="courses"></Vheader>
    <div class="banner-wrapper" v-if="carousel">
      <Vbanner :courseType="courseType" :carousel="carousel"></Vbanner>
    </div>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}" class="recommend-wrapper border-1px">
        <recommend v-if="recommendCourses" :courses="recommendCourses"></recommend>
      </el-col>
    </el-row>
    <el-row v-if="courses">
      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px" v-for="course in courses.slice(0,3)">
        <course-exhibit-block v-if="course" :course="course"></course-exhibit-block>
      </el-col>
    </el-row>
    <Vfooter></Vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header'
import banner from 'components/banner/banner'
import recommend from 'components/recommend/recommend'
import courseExhibitBlock from 'components/courseExhibitBlock/courseExhibitBlock'
import footer from 'components/footer/footer'

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
      recommendCourses: undefined,
      courses: undefined,
      carousel: undefined,
      courseType: undefined
    }
  },
  created() {
    this.$http.get('http://localhost:3000/api/course?all=1').then((response) => {
      this.courses = response.data
    })
    this.$http.get('http://localhost:3000/api/course?recommend=1').then((response) => {
      this.recommendCourses = response.data
    })
    this.$http.get('http://localhost:3000/api/carousel').then((response) => {
      this.carousel = response.data
    })
    this.$http.get('http://localhost:3000/api/courseType?all=0').then((response) => {
      this.courseType = response.data
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
