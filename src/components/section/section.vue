<template>
  <div class="section">
    <div class="animate-shadow card">
      <img :src="sectionInfo.cover" :height="imgHeight" alt="" class="img">
      <div class="info" :style="{ height: infoHeight, 'line-height' : infoHeight }">
        <span class="title">{{sectionInfo.name}}</span>
      </div>
    </div>
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
  .card
	  overflow hidden
	  border-radius 3px
	  background-color #fafafa
	  .img
	    width 100%
	  .info
	    padding 0 10px
	    text-align center
	    text-overflow ellipsis
	    .title
	    	display block
		    font-size 18px
		    white-space nowrap
		    overflow hidden
		    text-overflow ellipsis
		    text-align center
</style>
