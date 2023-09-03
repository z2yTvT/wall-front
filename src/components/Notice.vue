<template>
  <div>
    <div>
      <a href="https://jwc.ycit.edu.cn/jxrl/xxxl.htm"  target="_blank">学校通知官网</a>
    </div>
    <el-table
        :data="noticeList"
        style="width: 100%">
      <el-table-column
          prop="noticeContent"
          label="通知主题"
          width="530">
      </el-table-column>
      <el-table-column
          prop="nickname"
          label="发布人"
          width="100">
      </el-table-column>
      <el-table-column
          prop="noticeCreatedTime"
          label="日期"
          width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
name: "Notice",
  data(){
    return{
      noticeList:[
        {
          noticeContent: '公告1',
          nickname: '管理员',
          noticeCreatedTime: '2023-05-25',
        },
        {
          noticeContent: '公告2',
          nickname: '管理员',
          noticeCreatedTime: '2023-05-25',
        },
        {
          noticeContent: '公告3',
          nickname: '管理员',
          noticeCreatedTime: '2023-05-25',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>