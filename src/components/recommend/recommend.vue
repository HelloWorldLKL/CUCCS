<template>
  <div class="recommend">
    <h1 class="title">推荐课程</h1>
    <el-row :gutter="10">
      <el-col :span="Math.floor(24/courses.length)" v-for="(item, index) in courses">
      	<div class="card-box">
      	  <div class="card-wrapper">
	      	  <a :href="`/course.html?cID=${item.cID}`">
	      	    <div class="animate-shadow card">
	      	      <img :src="`static/image/${item.cCover}`" class="card-image img-responsive">
	      	      <div class="info">
	      	        <span class="title">{{item.cName}}</span>
	      	        <span class="section-count">案例数量：{{item.sectionCount}}</span>
	      	        <p class="more-info">
	      	        	概述: {{item.cInfo}}
	      	        </p>
	      	      </div>
	      	    </div>
	      	  </a>
      	  </div>
      	</div>
      </el-col>
    </el-row>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props: {
    courses: {
      type: Array
    }
  },
  data() {
    return {
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.recommend
	height 421px
	padding 60px 0px
	box-sizing border-box
	.title
		display inline-block
		width 100%
		margin-bottom 20px
		font-size 24px
		line-height 31px
		color #111111
		vertical-align middle
	.card-box
		.card-wrapper
			width 100%
			.card
				overflow hidden
				border-radius 3px
				background-color #fafafa
				.card-image
					height 135px 
				.info
					overflow: hidden
					padding 10px
					.title
						font-size 14px
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
						text-align center
					.section-count
						font-size 12px
						color #20a0ff
					.more-info
						margin-top 10px
						font-size 13px
						color rgb(153, 153, 153)
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
</style>
