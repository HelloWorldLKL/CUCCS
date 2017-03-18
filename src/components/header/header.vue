<template>
  <div class="header">
    <el-row>
      <el-col :span="4" :offset="1">
        <div class="logo-wrapper">
            <img src="http://edu-image.nosdn.127.net/B34DC36428D2D51B8EF5EE2C83CE9BF2.png?imageView&thumbnail=241y34&quality=100" alt="" class="logo">
        </div>
      </el-col>
      <el-col :span="6" :offset="10">
        <div class="search-wrapper">
            <el-autocomplete v-model="searchText" :fetch-suggestions="querySearchAsync" placeholder="请输入感兴趣的课程" icon="search" @select="handleSelect"></el-autocomplete>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="login-wrapper">
            <a class="log-in" href="#">登陆</a>
            |
            <a class="sign-up" href="#">注册</a>
        </div>
      </el-col>
    </el-row>
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
  },
  methods: {
    loadAllCourseData() {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
        { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' }
      ]
    },
    querySearchAsync(queryString, cb) {
      var courseData = this.courseData
      var results = queryString ? courseData.filter(this.createStateFilter(queryString)) : courseData
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 1500)
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect(item) {
      console.log(item)
    }
  },
  mounted() {
    this.courseData = this.loadAllCourseData()
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  padding 10px 0
  text-align center
  background-color #fff
  .el-col
    .logo-wrapper
      font-size 15px
    .search-wrapper    
      padding-top 2px
      padding-right 10px
      >div
        width 100%
    .login-wrapper
      padding-top 10px
      font-size 15px
</style>
