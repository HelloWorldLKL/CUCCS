<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column label="日期" width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="100">
      <template scope="scope">
        <el-tag>{{ scope.row.name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="住址" width="300">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '张立国',
          address: '北京新城区'
        }, {
          date: '2016-05-04',
          name: '刘凯龙',
          address: '呼和浩特回民区内蒙古财经大学'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
