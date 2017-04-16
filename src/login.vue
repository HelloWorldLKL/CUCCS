<template>
  <div id="app6">
	  <div class="wrapper">
	  	<div class="main">
	  		<Vheader></Vheader>
	  		<el-row>
	  		  <el-col :lg="{span: 20, offset: 2}">
	  		    <el-row type="flex" align="middle" class="login-wrapper">
	  		      <el-col :span="12" class="img-wrapper">
	  		        <div class="img-group">
	  		          <img src="static/image/login-1.png" alt="">
	  		          <img src="static/image/login-2.png" alt="">
	  		        </div>
	  		      </el-col>
	  		      <el-col :span="5" :offset="6" class="login-box shadow">
	  		        <el-input v-model="ID" placeholder="Enter your name" class="input"></el-input>
	  		        <el-input v-model="password" placeholder="Password" class="input"></el-input>
	  		        <a href="/backer.html"><el-button type="primary" class="login-btn">登陆</el-button></a>
	  		        <h4 class="info">{{info}}</h4>
	  		      </el-col>
	  		    </el-row>
	  		  </el-col>
	  		</el-row>
	  	</div>
	  </div>
    <Vfooter class="footer"></Vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header'
import footer from 'components/footer/footer'

export default {
  components: {
    'Vheader': header,
    'Vfooter': footer
  },
  data() {
    return {
      ID: '',
      password: '',
      info: '请输入用户名和密码'
    }
  },
  created() {}
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app6
	position absolute
	height 100%
	width 100%
	.wrapper
		width 100%
		min-height 100%
		.main
			padding-bottom 40px
			.login-wrapper
				height 500px
				.img-wrapper
					display flex
					justify-content center
					box-sizing border-box
					padding 20px 10px
					height 500px
					text-align center
					.img-group
						max-width 400px
				.login-box
					box-sizing border-box
					padding 20px 10px
					height 250px
					background-color #fafafa
					.input
						margin-bottom 20px
					.login-btn
						width 100%
					.info
						font-size 12px
						color #8492A6
						line-height 40px
						text-align center
						transition .5s
						&:hover
							color #324057
	.footer
		margin -106px auto 0 auto
		height 40px
		width 100%
</style>
