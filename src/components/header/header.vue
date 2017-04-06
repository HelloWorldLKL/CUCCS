<template>
  <div class="header">
    <el-row>
      <el-col :span="4" :offset="1">
        <div class="logo-wrapper">
          <a href="/">
            <img src="http://edu-image.nosdn.127.net/B34DC36428D2D51B8EF5EE2C83CE9BF2.png?imageView&thumbnail=241y34&quality=100" alt="" class="logo">
          </a>
        </div>
      </el-col>
      <el-col :span="6" :offset="10">
        <div class="search-wrapper">
            <el-autocomplete v-model="searchText" :fetch-suggestions="querySearchAsync" placeholder="请输入感兴趣的课程" :trigger-on-focus="false" @select="handleSelect" icon="search" :on-icon-click="searchCourse"></el-autocomplete>
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
  props: {
    courses: {
      type: Array
    }
  },
  data() {
    return {
      coursesData: [],
      searchText: '',
      timeout: 2,
      searchTime: 0
    }
  },
  methods: {
    querySearchAsync(queryString, cb) {
      if (this.searchTime === 0) {
        this.loadSearchData()
      }
      this.searchTime ++
      var coursesData = this.coursesData
      var results = queryString ? coursesData.filter(this.createStateFilter(queryString)) : coursesData
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect(item) {
      console.log(item)
    },
    loadSearchData() {
      this.courses.forEach((item, index) => {
        let obj = {}
        obj.value = item.title
        this.coursesData.push(obj)
      })
    },
    searchCourse() {
      window.location.href = encodeURI(encodeURI(`/sort.html?wd=${this.searchText}`))
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  padding 10px 0 20px 0
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
