<template>
  <div class="add-user">
    <el-form :model="formData" label-width="100px">
      <el-form-item label="帐号" prop="id">
        <el-input v-model="formData.id"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="character">
        <el-select v-model="formData.character" placeholder="请选择角色">
          <el-option label="管理员" value="admin"></el-option>
          <el-option label="老师" value="teacher"></el-option>
          <el-option label="学生" value="student"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="formData.sex" placeholder="请选择性别">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级" prop="class">
        <el-input v-model="formData.class"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">立即提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  data() {
    return {
      formData: {
      }
    },
    methods: {
    	submit() {
    		console.log('submit')
    	}
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
