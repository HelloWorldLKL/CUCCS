<template>
  <div class="section">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="sectionInfo.cover" alt="" class="img">
      <div class="info">
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
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.section
	.img
		height 136px
		width 100%
	.info
		height 40px
</style>
