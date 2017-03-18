<template>
  <div class="recommend">
    <h1 class="title">推荐课程</h1>
    <el-row :gutter="10">
      <el-col :span="4" v-for="(o, index) in 6">
      	<div class="card-box">
      	  <div class="card-wrapper">
      	    <el-card :body-style="{ padding: '0px' }">
      	      <img src="http://nos.netease.com/edu-image/b2c48967-d570-4cd2-a326-cc68c69aef2c.jpg?imageView&quality=100" class="card-image">
      	      <div class="info">
      	        <span class="title">西方经济学</span>
      	        <span class="section-count">案例数量： 500</span>
      	        <p class="more-info">
      	        	概述: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt culpa cum labore laudantium. Cum esse veritatis, cumque laborum, ex dolorem quo eius nobis ducimus tenetur similique. Asperiores iste illum unde.
      	        </p>
      	      </div>
      	    </el-card>
      	  </div>
      	</div>
      </el-col>
    </el-row>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
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
