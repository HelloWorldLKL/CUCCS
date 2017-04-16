<template>
  <div id="app2">
  	<div class="wrapper">
  		<div class="main">
		    <Vheader :courses="courses"></Vheader>
		    <el-row>
		      <el-col :lg="{span: 20, offset: 2}">
		        <el-breadcrumb separator="/" class="bread-crumb">
		          <el-breadcrumb-item :to="{ path: '/' }"><a href="/index.html">首页</a></el-breadcrumb-item>
		          <el-breadcrumb-item>{{typeName}}</el-breadcrumb-item>
		        </el-breadcrumb>
		      </el-col>
		    </el-row>
		    <el-row v-if="courseTotalCount>0">
		      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px" v-for="course in courses">
		        <course-exhibit-block v-if="course" :course="course"></course-exhibit-block>
		      </el-col>
		    </el-row>
        <V404 v-else class="not-found"></V404>
		    <el-row v-if="courseTotalCount>0" type="flex" class="pagination-wrapper" justify="center">
		      <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="courseTotalCount">
		      </el-pagination>
		    </el-row>
		  </div>
	  </div>
    <Vfooter class="footer"></Vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
import qs from 'qs'

import header from 'components/header/header'
import courseExhibitBlock from 'components/courseExhibitBlock/courseExhibitBlock'
import footer from 'components/footer/footer'
import V404 from 'components/404/404'

import util from 'static/js/util.js'

export default {
  components: {
    'Vheader': header,
    'course-exhibit-block': courseExhibitBlock,
    'Vfooter': footer,
    'V404': V404
  },
  data() {
    return {
      courses: undefined,
      currentPage: 1,
      courseTotalCount: 0,
      pageSize: 5,
      typeName: undefined
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      if (util.getQueryString('wd')) {
        this.postObj.cPage = this.currentPage
        this.$http.post('http://localhost:3000/api/course', qs.stringify(this.postObj), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then((response) => {
          this.courses = response.data
        })
      }
      if (util.getQueryString('typeID') && util.getQueryString('typeName')) {
        this.$http.get(`http://localhost:3000/api/course?ccID=${util.getQueryString('typeID')}&cPage=${this.currentPage}&pSize=${this.pageSize}`).then((response) => {
          this.courses = response.data
        })
      }

      function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll)
          window.scrollTo(0, currentScroll - (currentScroll / 10))
        }
      }
      smoothscroll()
    }
  },
  created() {
    if (util.getQueryString('wd')) {
      this.wd = decodeURI(util.getQueryString('wd'))
      this.typeName = `"${this.wd}"的搜索结果`
      this.postObj = {}
      this.postObj.title = this.wd
      this.postObj.cPage = this.currentPage
      this.postObj.pSize = this.pageSize
      console.log(this.postObj)
      this.$http.post('http://localhost:3000/api/course', qs.stringify(this.postObj), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        this.courses = response.data
        console.log(this.courses)
      })
      this.$http.get(`http://localhost:3000/api/count?by=title&get=course&title=${this.wd}`).then((response) => {
        this.courseTotalCount = response.data['courseCount']
      })
    }
    if (util.getQueryString('typeID') && util.getQueryString('typeName')) {
      this.typeName = decodeURI(util.getQueryString('typeName'))
      this.$http.get(`http://localhost:3000/api/course?ccID=${util.getQueryString('typeID')}&cPage=${this.currentPage}&pSize=${this.pageSize}`).then((response) => {
        this.courses = response.data
      })
      this.$http.get(`http://localhost:3000/api/count?by=ccID&get=course&ccID=${util.getQueryString('typeID')}`).then((response) => {
        this.courseTotalCount = response.data['courseCount']
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import 'common/stylus/mixin'
#app2
  position absolute
  height 100%
  width 100%
  .wrapper
    width 100%
    min-height 100%
    .main
      padding-bottom 40px
		  .bread-crumb
		    margin 30px 10px 10px 10px
		    font-size 20px
		  .course-exhibit-block-wrapper
		    padding 25px 10px
		    border-1px(rgba(7, 17, 27, 0.1))
		  .pagination-wrapper
		    margin 30px 0 100px 0 
	.footer
		margin -106px auto 0 auto
		height 40px
		width 100%
</style>
