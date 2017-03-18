<template>
  <div class="footer">
    <p class="main-title">制作单位：北京微点智育软件有限公司</p>
    <p class="cype-right-info">©2009-2017 minipoint.cn </p>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  data() {
    return {
      courseData: [],
      searchText: '',
      timeout: null
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer
  border-top 1px solid #333
  padding 30px 0 35px 0
  text-align center
  line-height 20px
  background-color #333
  .main-title
    font-size 14px
    color #999
  .cype-right-info
    font-size 12px
    color #666
</style>
