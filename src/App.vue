<template>
  <div id="app">
    <Vheader></Vheader>
    <div class="banner-wrapper">
      <Vbanner></Vbanner>
    </div>
    <div class="recommend-wrapper border-1px">
      <recommend></recommend>
    </div>
    <div class="course-exhibit-block-wrapper border-1px" v-for="item in 3">
      <course-exhibit-block></course-exhibit-block>
    </div>
    <Vfooter></Vfooter>
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
    padding 20px 0
    background-color #fff
  .recommend-wrapper
    display flex
    justify-content center
    border-1px(rgba(7, 17, 27, 0.1))
  .course-exhibit-block-wrapper
    display flex
    justify-content center
    padding 25px 0
    border-1px(rgba(7, 17, 27, 0.1))
</style>
