<template>
  <div id="app2">
    <Vheader></Vheader>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}">
        <el-breadcrumb separator="/" class="bread-crumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>全部课程</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row v-if="courses">
      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px" v-for="course in courses.slice(0,7)">
        <course-exhibit-block v-if="course" :course="course"></course-exhibit-block>
      </el-col>
    </el-row>
    <el-row type="flex" class="pagination-wrapper" justify="center">
      <el-col :span="6">
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10" layout="total, prev, pager, next" :total="100">
        </el-pagination>
      </el-col>
    </el-row>
    <Vfooter></Vfooter>
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
      courses: undefined,
      currentPage: 1
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    }
  },
  created() {
    this.$http.get('/api/courses').then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.courses = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app2
  .bread-crumb
    margin 30px 10px 10px 10px
    font-size 20px
  .course-exhibit-block-wrapper
    padding 25px 10px
    border-1px(rgba(7, 17, 27, 0.1))
  .pagination-wrapper
    margin 30px 0
</style>
