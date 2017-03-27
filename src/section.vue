<template>
  <div id="app4">
    <Vheader></Vheader>
    <div class="banner-wrapper" v-if="carousel">
      <Vbanner :carousel="carousel"></Vbanner>
    </div>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}" class="recommend-wrapper border-1px">
      	<el-col :span="20" class="pdf-viewer">
      		<h1>This is PDF-VIEWER</h1>
      	</el-col>
      	<el-col :span="4" class="pdf-info">
      		<p>
      			摘要：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque aliquam eligendi eius reiciendis minus magnam repellat nesciunt sed aspernatur numquam qui dignissimos maxime voluptatum similique eveniet minima consequatur, esse corporis.
      		</p>
      	</el-col>
      </el-col>
    </el-row>
    <Vfooter></Vfooter>
  </div>
</template>


<script type="text/ecmascript-6">
import header from 'components/header/header'
import banner from 'components/banner/banner'
import footer from 'components/footer/footer'

const ERR_OK = 0

export default {
  components: {
    'Vheader': header,
    'Vbanner': banner,
    'Vfooter': footer
  },
  data() {
    return {
      carousel: undefined
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    }
  },
  created() {
    this.$http.get('/api/carousel').then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.carousel = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app4
	.banner-wrapper
		margin-bottom 20px
</style>
