<template>
  <div class="info">
    <el-card style="width: 100%;height: 1000px">
      <el-header style="padding: 0; height: 80px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="252px" style="margin-left: 40px; margin-top: 20px">
          <Aside></Aside
        ></el-aside>
        <el-main style="padding: 20px 0; height: auto; overflow: none"
          ><Main :rankingList="rankingList"></Main
        ></el-main>
      </el-container>
    </el-card>
  </div>
</template>
<script>
import Header from "../components/banner.vue";
import Aside from "../components/personal/aside.vue";
import Main from "../components/rankingContent.vue";
export default {
  //name: "info",
  components: { Header, Aside, Main },
  data() {
    return {
      rankingList: []
    }
  },
  mounted() {
     this.getRanking();
  },
  methods: {
    getRanking() {
      var _self = this;
      var articleId = parseInt(_self.artId);
      var url = "http://localhost:8081/TopAchieve";

      _self.$axios
        .get(url, { params: { articleId: articleId } })
        .then((res) => {
          //console.log("删除的数据", res);
          // console.log("排行榜", res);
          _self.rankingList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
  height: auto;
  background: #f3f1f1;
}
/deep/.el-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: none !important;
  box-sizing: border-box;
  padding: 20px;
}
</style>
