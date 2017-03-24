<template>
  <div id="app3">
    <Vheader></Vheader>
    <el-row class="course-info-wrapper">
      <el-col :lg="{span: 20, offset: 2}">
        <el-card class="course-info">
          <h3 class="title">西方经济学</h3>
          <p class="info">
            概述：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo quibusdam qui cupiditate tempora porro, in maiores provident soluta voluptas, pariatur cum impedit, voluptate repellat magni sequi exercitationem doloremque commodi.
          </p>
        </el-card>
      </el-col>
    </el-row>
    </el-row>
    <el-row class="sections-wrapper">
      <el-col :lg="{span: 20, offset: 2}">
        <el-row v-if="course" :gutter="20">
          <el-col :span="6" v-for="(item, index) in course.section.slice(0, 4)">
            <Vsection :sectionInfo="item" class="section"></Vsection>
          </el-col>
          <el-col :span="6" v-for="(item, index) in course.section.slice(4, 8)">
            <Vsection :sectionInfo="item" class="section"></Vsection>
          </el-col>
          <el-col :span="6" v-for="(item, index) in course.section.slice(8, 12)">
            <Vsection :sectionInfo="item" class="section"></Vsection>
          </el-col>
          <el-col :span="6" v-for="(item, index) in course.section.slice(12, 16)">
            <Vsection :sectionInfo="item" class="section"></Vsection>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    </el-row>
    <el-row type="flex" class="pagination-wrapper" justify="center">
      <el-col :span="6">
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10" layout="total, prev, pager, next" :total="100">
        </el-pagination>
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
import section from 'components/section/section'
import footer from 'components/footer/footer'

const ERR_OK = 0

export default {
  components: {
    'Vheader': header,
    'Vsection': section,
    'Vfooter': footer
  },
  data() {
    return {
      currentPage: 1,
      course: undefined
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
        this.course = response.data[0]
        // console.log(this.courses)
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app3
  .course-info-wrapper
    margin 10px 0
    padding 10px
    .course-info
      height 300px
      color #F9FAFC
      background-color #1D8CE0
      .title
        font-size 30px
      .info
        marign-top 20px
        font-size 23px
  .sections-wrapper
    margin-top 20px
    padding 10px
    .section
      margin 10px 0 
  .pagination-wrapper
    margin 30px 0
</style>
