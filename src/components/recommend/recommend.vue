<template>
  <div class="recommend">
    <h1 class="title">推荐课程</h1>
    <el-row :gutter="10">
      <el-col :span="4" v-for="(item, index) in courses.slice(0, 6)">
      	<div class="card-box">
      	  <div class="card-wrapper">
      	    <div class="animate-shadow card">
      	      <img :src="item.cover" class="card-image">
      	      <div class="info">
      	        <span class="title">{{item.name}}</span>
      	        <span class="section-count">案例数量：{{item.section.length}}</span>
      	        <p class="more-info">
      	        	概述: {{item.info}}
      	        </p>
      	      </div>
      	    </div>
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
						text-align center
					.section-count
						font-size 12px
						color #55B929
					.more-info
						margin-top 10px
						font-size 13px
						color rgb(153, 153, 153)
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
</style>
