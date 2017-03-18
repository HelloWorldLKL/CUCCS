<template>
  <div class="courseExhibitBlock">
    <el-row>
      <el-col :span="6">
        <el-card class="sort-block" :style="{ backgroundImage: 'url(\''+ imgObj.sortImgURL +'\')' }">
          <div class="mask">
            <h3 class="title">西方经济学</h3>
            <span class="section-count">案例数量： 500</span>
            <p class="more-info">
              概述：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis accusantium optio molestiae vitae, eligendi esse, quis non quam ex nulla consequuntur, vero libero voluptatum. Quam sint nostrum voluptates modi ab?
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="18" class="section-wrapper">
        <el-card :body-style="{ padding: '0px' }" class="section" v-for="(item, index) in imgObj.sectionImgURL">
          <img :src="item" alt="" class="main">
          <div class="info">
            <h3 class="title">{{'案例' + (index + 1)}}</h3>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
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
// @import 'common/stylus/mixin'
.courseExhibitBlock
  max-width 1200px
  font-size 0
  .sort-block
    display inline-block
    position relative
    height 420px
    width 236px
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
    display flex
    justify-content space-around
    flex-wrap wrap
    .section
      display inline-block
      flex 0 0 236px
      margin-bottom 15px
      vertical-align top
      width 236px
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

