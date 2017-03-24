<template>
  <div class="section">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="sectionInfo.cover" :height="imgHeight" alt="" class="img">
      <div class="info" :style="{ height: infoHeight, 'line-height' : infoHeight }">
        <h3>{{sectionInfo.name}}</h3>
      </div>
    </el-card>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    sectionInfo: {
      type: Object
    },
    infoHeight: {
      type: String
    },
    imgHeight: {
      type: String
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.section
  .img
    width 100%
  .info
    font-size 18px
    text-align center
</style>
