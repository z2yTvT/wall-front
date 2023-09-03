<template>
  <div class="fav">
    <el-card style="width: 100%;height: 1000px">
      <el-header style="padding: 0; height: 80px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="252px" style="margin-left: 40px; margin-top: 20px">
          <Aside></Aside
        ></el-aside>
        <el-main style="padding: 20px 0"><Main></Main></el-main>
      </el-container>
    </el-card>
  </div>
</template>
<script>
import Header from "../components/banner.vue";
import Aside from "../components/personal/aside.vue";
import Main from "../components/favContent.vue";
export default {
  name: "fav",
  components: { Header, Aside, Main },
};
</script>
<style lang="scss" scoped>
.fav {
  width: 100%;
  height: auto;
  background: #f3f1f1;
}
</style>