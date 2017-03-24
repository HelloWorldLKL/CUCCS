<template>
  <div id="app5">
    <navbar></navbar>  
    <el-row v-if="courses">
      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px">
        <h1>backer</h1>
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
import navbar from 'components/navbar/navbar'
import footer from 'components/footer/footer'

const ERR_OK = 0

export default {
  components: {
    'navbar': navbar,
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
#app5
  .course-exhibit-block-wrapper
    padding 25px 10px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
