<template>
  <div id="app2">
    <Vheader></Vheader>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}">
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>sort</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row v-if="courses">
      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px" v-for="course in courses.slice(0,7)">
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
import courseExhibitBlock from 'components/courseExhibitBlock/courseExhibitBlock'
import footer from 'components/footer/footer'

const ERR_OK = 0

export default {
  components: {
    'Vheader': header,
    'course-exhibit-block': courseExhibitBlock,
    'Vfooter': footer
  },
  data() {
    return {
      courses: undefined
    }
  },
  created() {
    this.$http.get('/api/courses').then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.courses = response.data
        // console.log(this.courses)
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app2
  .breadcrumb
    margin 30px 10px
    font-size 20px
  .course-exhibit-block-wrapper
    padding 25px 10px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
