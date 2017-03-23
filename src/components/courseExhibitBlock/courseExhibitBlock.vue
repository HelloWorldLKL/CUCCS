<template>
  <div class="courseExhibitBlock">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="sort-block" :style="{ backgroundImage: 'url(\''+ imgObj.sortImgURL +'\')' }">
          <div class="mask">
            <h3 class="title">{{course.name}}</h3>
            <span class="section-count">案例数量：{{course.section.length}}</span>
            <p class="more-info">
              概述：{{course.info}}
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="18" class="section-wrapper">
        <el-row :gutter="20" v-if="course.section">
          <el-col :span="8" v-for="(item, index) in course.section.slice(0, 3)">
            <el-card :body-style="{ padding: '0px' }" class="section">
              <img :src="item.cover" alt="" class="img-responsive">
              <div class="info">
                <h3 class="title">{{'案例' + (index + 1)}}</h3>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" v-for="(item, index) in course.section.slice(3, 6)">
            <el-card :body-style="{ padding: '0px' }" class="section">
              <img :src="item.cover" alt="" class="img-responsive">
              <div class="info">
                <h3 class="title">{{'案例' + (index + 4)}}</h3>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>




<script type="text/ecmascript-6">
export default {
  props: {
    course: {
      type: Object
    }
  },
  data() {
    return {
      imgObj: {
        sortImgURL: 'http://edu-image.nosdn.127.net/D898E17016500A84930AF2FF06C9BF37.png?imageView&thumbnail=235y325&quality=100',
        sectionImgURL: [
          'http://edu-image.nosdn.127.net/10739F4FF8BA80568B4B160FEF82DDE7.jpg?imageView&thumbnail=235y135&quality=100',
          'http://edu-image.nosdn.127.net/10739F4FF8BA80568B4B160FEF82DDE7.jpg?imageView&thumbnail=235y135&quality=100',
          'http://edu-image.nosdn.127.net/10739F4FF8BA80568B4B160FEF82DDE7.jpg?imageView&thumbnail=235y135&quality=100',
          'http://edu-image.nosdn.127.net/10739F4FF8BA80568B4B160FEF82DDE7.jpg?imageView&thumbnail=235y135&quality=100',
          'http://edu-image.nosdn.127.net/10739F4FF8BA80568B4B160FEF82DDE7.jpg?imageView&thumbnail=235y135&quality=100',
          'http://edu-image.nosdn.127.net/10739F4FF8BA80568B4B160FEF82DDE7.jpg?imageView&thumbnail=235y135&quality=100'
        ]
      }
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
.courseExhibitBlock
  font-size 0
  .sort-block
    display inline-block
    position relative
    height 420px
    width 100%
    .mask
      position absolute
      box-sizing border-box
      padding 30px 10px
      top 0
      left 0
      width 100%
      height 100%
      color #eee
      background-color rgba(29, 140, 224, .9)
      .title
        margin 60px 0 24px 0
        font-size 24px
        text-align center
      .section-count
        font-size 12px
      .more-info
        margin-top 14px
        font-size 14px
  .section-wrapper
    .section
      display inline-block
      margin-bottom 15px
      vertical-align top
      width 100%
      height 200px
      background-color #fafafa
      .title
        margin-top 18px
        font-size 18px
        text-align center
    .section:nth-child(4)
      margin-bottom 0
    .section:nth-child(5)
      margin-bottom 0
    .section:nth-child(6)
      margin-bottom 0
</style>

