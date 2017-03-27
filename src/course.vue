<template>
  <div id="app3">
    <Vheader></Vheader>
    <el-row class="course-info-wrapper">
      <el-col :lg="{span: 20, offset: 2}">
        <el-card v-if="course" :body-style="{ padding: '0px' }">
          <el-col :span="14" class="course-info">
            <h3 class="title">{{course.name}}</h3>
            <p class="info">
              概述：{{course.info}}
            </p>
          </el-col>
          <el-col :span="10" class="course-cover">
            <img :src="course.cover" alt="">
          </el-col>
        </el-card>
      </el-col>
    </el-row>
    </el-row>
    <el-row class="sections-wrapper">
      <el-col :lg="{span: 20, offset: 2}">
        <el-row v-if="course" :gutter="20">
          <el-col :span="6" v-for="(item, index) in course.section.slice(0, 4)">
            <Vsection :sectionInfo="item" infoHeight="50px" imgHeight="150px" class="section"></Vsection>
          </el-col>
          <el-col :span="6" v-for="(item, index) in course.section.slice(4, 8)">
            <Vsection :sectionInfo="item" infoHeight="50px" imgHeight="150px" class="section"></Vsection>
          </el-col>
          <el-col :span="6" v-for="(item, index) in course.section.slice(8, 12)">
            <Vsection :sectionInfo="item" infoHeight="50px" imgHeight="150px" class="section"></Vsection>
          </el-col>
          <el-col :span="6" v-for="(item, index) in course.section.slice(12, 16)">
            <Vsection :sectionInfo="item" infoHeight="50px" imgHeight="150px" class="section"></Vsection>
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
    <Vfooter></Vfooter>
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
        this.course = response.data[1]
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
		font-size 0
		.course-info
			box-sizing border-box
			padding 20px
			.title
				display inline-block
				margin-bottom 20px
				font-size 30px
			.info
				font-size 20px
				line-height 23px      
		.course-cover
			img
				width 100%
				height 100%
	.sections-wrapper
		margin-top 20px
		padding 10px
		.section
			margin 10px 0 
	.pagination-wrapper
		margin 30px 0
</style>
