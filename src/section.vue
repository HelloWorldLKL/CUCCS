<template>
  <div id="app4">
    <Vheader></Vheader>

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
        this.course = response.data[0]
        // console.log(this.courses)
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app4
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
