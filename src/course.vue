<template>
  <div id="app3">
    <Vheader></Vheader>
    <el-row v-if="courses">
      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px">
        <h1>CourSE</h1>
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
#app3
  .course-exhibit-block-wrapper
    padding 25px 10px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
