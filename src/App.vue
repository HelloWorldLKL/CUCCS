<template>
  <div id="app">
    <Vheader></Vheader>
    <el-row class="banner-wrapper">
      <el-col :lg="{span: 20, offset: 2}">
        <Vbanner></Vbanner>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}" class="recommend-wrapper border-1px">
        <recommend></recommend>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}" class="course-exhibit-block-wrapper border-1px" v-for="item in 3">
        <course-exhibit-block></course-exhibit-block>
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
import banner from 'components/banner/banner'
import recommend from 'components/recommend/recommend'
import courseExhibitBlock from 'components/courseExhibitBlock/courseExhibitBlock'
import footer from 'components/footer/footer'
export default {
  components: {
    'Vheader': header,
    'Vbanner': banner,
    'recommend': recommend,
    'course-exhibit-block': courseExhibitBlock,
    'Vfooter': footer
  },
  data() {
    return {
      data: 'HELLO'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app
  .banner-wrapper
    margin-bottom 20px
    background-color #68a6e2
  .recommend-wrapper
    padding 0 10px
    border-1px(rgba(7, 17, 27, 0.1))
  .course-exhibit-block-wrapper
    padding 25px 10px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
