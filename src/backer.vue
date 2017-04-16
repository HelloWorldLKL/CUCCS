<template>
  <div id="app5">
    <navbar></navbar>
    <el-row class="content-wrapper">
      <el-col :lg="{span: 20, offset: 2}">
      	<el-row :gutter="20">
	        <el-col :span="4">
	          <div class="sidebar-wrapper">
	            <sidebar></sidebar>
	          </div>
	        </el-col>
	        <el-col :span="20">
	          <router-view style="width: 100%;min-height:540px"></router-view>
	        </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import navbar from 'components/navbar/navbar'
import sidebar from 'components/sidebar/sidebar'
export default {
  components: {
    'navbar': navbar,
    'sidebar': sidebar
  },
  data() {
    return {
      courses: undefined
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created() {}
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app5
	overflow hidden
	.content-wrapper
		margin-top 20px
	  .sidebar-wrapper
			overflow auto
			height 540px
			background-color #eff1f6
</style>
