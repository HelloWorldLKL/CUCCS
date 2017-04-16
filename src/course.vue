<template>
  <div id="app3">
  	<div class="wrapper">
	  	<div class="main">
		    <Vheader></Vheader>
		    <el-row class="course-info-wrapper">
		      <el-col :lg="{span: 20, offset: 2}" v-if="course">
		        <el-card :body-style="{ padding: '0px' }">
		          <el-col :span="14" class="course-info">
		            <h3 class="title">{{course.cName}}</h3>
		            <p class="info">
		              概述：{{course.cInfo}}
		            </p>
		          </el-col>
		          <el-col :span="10" class="course-cover">
		            <img :src="`static/image/${course.cCover}`" class="img-responsive" alt="">
		          </el-col>
		        </el-card>
		      </el-col>
		    </el-row>
		    </el-row>
		    <el-row class="sections-wrapper">
		      <el-col :lg="{span: 20, offset: 2}">
		        <el-row v-if="sections" :gutter="20">
		          <el-col :span="6" v-for="item in sections.slice(0, 4)">
		            <a :href="`/section.html?sID=${item.sID}`" target="_blank">
		              <Vsection :section="item" infoHeight="50px" imgHeight="150px" class="section"></Vsection>
		            </a>
		          </el-col>
		          <el-col :span="6" v-for="item in sections.slice(4, 8)">
		            <a :href="`/section.html?sID=${item.sID}`" target="_blank">
		              <Vsection :section="item" infoHeight="50px" imgHeight="150px" class="section"></Vsection>
		            </a>
		          </el-col>
		          <el-col :span="6" v-for="item in sections.slice(8, 12)">
		            <a :href="`/section.html?sID=${item.sID}`" target="_blank">
		              <Vsection :section="item" infoHeight="50px" imgHeight="150px" class="section"></Vsection>
		            </a>
		          </el-col>
		        </el-row>
		      </el-col>
		    </el-row>
		    </el-row>
		    <el-row type="flex" class="pagination-wrapper" justify="center" v-if="sectionTotalCount">
		      <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="sectionTotalCount">
		      </el-pagination>
		    </el-row>
		  </div>
		</div>
    <Vfooter class="footer"></Vfooter>
  </div>
</template>


<script type="text/ecmascript-6">
import header from 'components/header/header'
import section from 'components/section/section'
import footer from 'components/footer/footer'

import util from 'static/js/util.js'

export default {
  components: {
    'Vheader': header,
    'Vsection': section,
    'Vfooter': footer
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 12,
      course: undefined,
      sections: undefined
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      this.$http.get(`http://localhost:3000/api/section?cID=${util.getQueryString('cID')}&cPage=${this.currentPage}&pSize=${this.pageSize}`).then((response) => {
        this.sections = response.data
      })
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
  computed: {
    sectionTotalCount() {
      return this.course.sectionCount
    }
  },
  created() {
    this.$http.get(`http://localhost:3000/api/section?cID=${util.getQueryString('cID')}&cPage=${this.currentPage}&pSize=${this.pageSize}`).then((response) => {
      this.sections = response.data
    })
    this.$http.get(`http://localhost:3000/api/course?cID=${util.getQueryString('cID')}`).then((response) => {
      this.course = response.data
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app3
	position absolute
	height 100%
	width 100%
	.wrapper
		width 100%
		min-height 100%
		.main
			padding-bottom 40px
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
						font-size 17px
						color #475669    
						line-height 25px
			.sections-wrapper
				margin-top 20px
				padding 10px
				.section
					margin 10px 0 
			.pagination-wrapper
				margin 30px 0 100px 0
	.footer
		margin -106px auto 0 auto
		height 40px
		width 100%
</style>
