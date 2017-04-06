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
                  <a :href="`static/pdf/${section.docPath}`" target="_blank"><el-dropdown-item><i class="fa fa-file-word-o"></i>&nbsp;DOC 文档</el-dropdown-item></a>
                  <a :href="`static/pdf/${section.pptPath}`" target="_blank"><el-dropdown-item divided><i class="fa fa-file-powerpoint-o"></i>&nbsp;PPT 文档</el-dropdown-item></a>
                  <!-- <a href="https://baidu.com"><el-dropdown-item divided><i class="fa fa-file-pdf-o"></i>&nbsp;PDF 文档</el-dropdown-item></a> -->
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="3"><i class="fa" :class="{'fa-thumbs-up': thumbsUp, 'fa-thumbs-o-up': !thumbsUp}" @click="switchThumbsUp"></i></el-col>
            <el-col :span="3"><i class="fa" :class="{'fa-heart': heart, 'fa-heart-o': !heart}" @click="switchHeart"></i></el-col>
          </el-row>
      		<p class="pdf-info shadow">
      			摘要：{{section.info}}
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

import util from 'static/js/util.js'

export default {
  components: {
    'Vheader': header,
    'Vfooter': footer
  },
  data() {
    return {
      filePathObj: undefined,
      fileName: undefined,
      pdfEdition: 'PPT版',
      thumbsUp: false,
      heart: false
    }
  },
  methods: {
    changePDFedition(command) {
      this.pdfEdition = command.toUpperCase() + '版'
      if (command === 'pdf') {
        this.fileName = this.section.pptPdfPath
      }
      if (command === 'doc') {
        this.fileName = this.section.docPdfPath
      }
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
      return `static/web/viewer.html?file=../pdf/${this.fileName}`
    }
  },
  created() {
    if (util.getQueryString('sID')) {
      this.$http.get(`http://localhost:3000/api/getSectionBySectionID?sID=${util.getQueryString('sID')}`).then((response) => {
        this.section = response.data
        this.fileName = this.section.pptPdfPath
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
#app4
  overflow hidden
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
			overflow hidden
			height 640px
			padding 40px 20px
			font-size 19px
			line-height 23px
			text-align justify
			background-color #fafafa
</style>
