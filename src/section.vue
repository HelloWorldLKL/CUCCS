<template>
  <div id="app4">
    <Vheader></Vheader>
    <el-row :gutter="10">
      <el-col :lg="{span: 20, offset: 2}" class="pdf-wrapper border-1px">
      	<el-col :span="18" class="pdf-viewer">
      		<iframe :src="pdfSrc" style="width:100%;height:100%;"> </iframe>
      	</el-col>
      	<el-col :span="6">
          <el-row class="control shadow">
            <el-col :span="8">
							<el-dropdown @command="changePDFedition">
							  <span class="el-dropdown-link">
							    {{pdfEdition}}<i class="el-icon-caret-bottom el-icon--right"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item command="doc"><i class="fa fa-file-word-o"></i>&nbsp;DOC版</el-dropdown-item>
							    <el-dropdown-item divided command="ppt"><i class="fa fa-file-powerpoint-o"></i>&nbsp;PPT版</el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>
            </el-col>
            <el-col :span="9">
              <el-dropdown @command="downloadDocument">
                <span class="el-dropdown-link">
                  下载文档<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><i class="fa fa-file-word-o"></i>&nbsp;DOC 文档</el-dropdown-item>
                  <el-dropdown-item divided><i class="fa fa-file-powerpoint-o"></i>&nbsp;PPT 文档</el-dropdown-item>
                  <el-dropdown-item divided><i class="fa fa-file-pdf-o"></i>&nbsp;PDF 文档</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="3"><i class="fa" :class="{'fa-thumbs-up': thumbsUp, 'fa-thumbs-o-up': !thumbsUp}" @click="switchThumbsUp"></i></el-col>
            <el-col :span="3"><i class="fa" :class="{'fa-heart': heart, 'fa-heart-o': !heart}" @click="switchHeart"></i></el-col>
          </el-row>
      		<p class="pdf-info shadow">
      			摘要：蔻驰公司，简称Coach、Coach公司以及蔻驰（英语：Coach Inc.，NYSE：COH、港交所：6388），在1941年，于美国纽约总部设立Gail Manufacturing Company。主要生产皮革、手袋、公文包、皮鞋等各类产品。由于2011年12月1日，在香港交易所主板上市，属于不涉及发行新股关系，加上以香港预托证券作第二上市，故此是以介绍形式上市作准则。其发行股数为2.93亿股。[1]另外，也是纽约证券交易所上市。现时销售香港、美国、日本、法国等国家。在台湾设立荷兰商蔻驰皮件股份有限公司台湾分公司 产品包括手袋，男、女装小皮具、公文袋、周末及旅行用配件、鞋履、配表、外套、丝巾、太阳眼镜、香氛、珠宝及其他相关配饰 在台员工数约为400人
      		</p>
      	</el-col>
      </el-col>
    </el-row>
    <Vfooter></Vfooter>
  </div>
</template>


<script type="text/ecmascript-6">
import header from 'components/header/header'
import footer from 'components/footer/footer'

// const ERR_OK = 0

export default {
  components: {
    'Vheader': header,
    'Vfooter': footer
  },
  data() {
    return {
      carousel: undefined,
      pdfName: 'ppt.pdf',
      pdfEdition: 'PPT版',
      thumbsUp: false,
      heart: false
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    },
    changePDFedition(command) {
      this.pdfEdition = command.toUpperCase() + '版'
      this.pdfName = `${command}.pdf`
    },
    downloadDocument(command) {
      console.log('downloading')
    },
    switchHeart() {
      this.heart = !this.heart
    },
    switchThumbsUp() {
      this.thumbsUp = !this.thumbsUp
    }
  },
  computed: {
    pdfSrc() {
      return `static/web/viewer.html?file=${this.pdfName}`
    }
  },
  created() {
    // this.$http.get('/api/carousel').then((response) => {
    //   response = response.data
    //   if (response.errno === ERR_OK) {
    //     this.carousel = response.data
    //   }
    // })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app4
	.pdf-wrapper
		margin-top 20px
		margin-bottom 20px  
		.pdf-viewer
			height 700px   
		.control
			box-sizing border-box
			height 50px
			width 100%
			margin-bottom 10px
			padding 0 12px   
			font-size 15px
			text-align center
			line-height 50px
			.fa
				display inline-block
			.fa-heart
				color #FF4949
			.fa-thumbs-up
				color #1D8CE0         
		.pdf-info
			box-sizing border-box
			height 640px
			padding 40px 20px
			font-size 19px
			line-height 23px
			text-align justify
			background-color #fafafa
</style>
