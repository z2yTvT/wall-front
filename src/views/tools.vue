<template>
  <div id="index" style="position : absolute;width : 100%;height : 100%;">
    <el-container style="background-color: #f7f8f9">
      <el-header style="height: 80px; padding: 0">
        <Banner></Banner>
      </el-header>
      <el-container style="width: 100%; background: #fff">
        <el-card class="box-card" style="margin-top: 50px;width: 100%;">
          <div style="display: flex">
            <div style="height: 200px;width: 200px;margin: 20px">
              <el-card class="grid-content bg-purple"  shadow="hover" >
                <div @click="showFileCollect" style="cursor:pointer;height: 209px ">
                  <img src="@/assets/filetools.png" class="image" style="width: 100%;height: 190px">
                  <span style="font-size: 20px">文件收集工具</span>
                </div>
              </el-card>
            </div>

            <div style="height: 200px;width: 200px;margin: 20px">
              <el-card class="grid-content bg-purple"  shadow="hover" >
                <div @click="showSchoolMap" style="cursor:pointer;height: 209px">
                  <img src="@/assets/map.png" class="image" style="width: 100%;height: 190px">
                  <span style="font-size: 20px">校园地图</span>
                </div>
              </el-card>
            </div>

            <div style="height: 200px;width: 200px;margin: 20px">
              <el-card class="grid-content bg-purple"  shadow="hover" >
                <div @click="showSchoolDay" style="cursor:pointer;height: 209px">
                  <img src="@/assets/daybg.png" class="image" style="width: 100%;height: 190px">
                  <span style="font-size: 20px">盐工校历</span>
                </div>
              </el-card>
            </div>

            <div style="height: 200px;width: 200px;margin: 20px">
              <el-card class="grid-content bg-purple"  shadow="hover" >
                <div @click="showWea" style="cursor:pointer;height: 209px">
                  <img src="@/assets/weather.png" class="image" style="width: 100%;height: 190px">
                  <span style="font-size: 20px">校园天气</span>
                </div>
              </el-card>
            </div>

            <div style="height: 200px;width: 200px;margin: 20px">
              <el-card class="grid-content bg-purple"  shadow="hover" >
                <div @click="showNot" style="cursor:pointer;height: 209px">
                  <img src="@/assets/notice.png" class="image" style="width: 100%;height: 190px">
                  <span style="font-size: 20px">校园社区公告通知</span>
                </div>
              </el-card>
            </div>

          </div>
        </el-card>
      </el-container>
    </el-container>

    <el-dialog
        title="盐工校历"
        :visible.sync="schoolDay"
        width="60%">
      <div>
        <a href="https://jwc.ycit.edu.cn/jxrl/xxxl.htm"  target="_blank">校日历官网</a>
      </div>
      <el-tabs v-model="c" @tab-click="handleClick">
        <el-tab-pane label="2022-2023" name="c1">
          <el-image
              style="width: 100%; height: 100%"
              :src="require('@/assets/day.png')"
              :preview-src-list="schoolDayList">
          </el-image>
        </el-tab-pane>
        <el-tab-pane label="2021-2022" name="c2">
          <el-image
              style="width: 100%; height: 100%"
              :src="require('@/assets/day21-22.png')"
              :preview-src-list="schoolDayList">
          </el-image>
        </el-tab-pane>
        <el-tab-pane label="2020-2021" name="c3">
          <el-image
              style="width: 100%; height: 100%"
              :src="require('@/assets/day20-21.png')"
              :preview-src-list="schoolDayList">
          </el-image>
        </el-tab-pane>
      </el-tabs>


    </el-dialog>

    <el-dialog
        title="校园地图"
        :visible.sync="showMap"
        width="60%"
    >
      <el-tabs v-model="activeName1" @tab-click="handleClick">
        <el-tab-pane label="校园地图导航" name="zero" >

          <div>
            <baidu-map :scroll-wheel-zoom="true" >
              <bm-view class="map" :center="center" :zoom="zoom">
              </bm-view>
<!--              <div>-->
<!--                请输入开始地点：-->
<!--                <el-input id="startKeyword" v-model="startKeyword" clearable maxlength="20" show-word-limit style="width: 200px"/>-->
<!--                <br>-->
<!--                请输入结束地点：-->
<!--                <el-input id="endKeyword" v-model="endKeyword" clearable maxlength="20" show-word-limit style="width: 200px"/>-->
<!--              </div>-->
              <bm-walking :location="center" start="盐城工学院" end="盐城工学院" :auto-viewport="true" ></bm-walking>
            </baidu-map>
          </div>
        </el-tab-pane>
        <el-tab-pane label="南校区(新/希望大道)" name="first">
          <el-image
              style="width: 100%; height: 100%"
              :src="require('@/assets/new.jpg')"
              :preview-src-list="schoolMapNewList">
          </el-image>
          <el-image
              style="width: 100%; height: 100%"
              :src="require('@/assets/newd.jpg')"
              :preview-src-list="schoolMapNewList">
          </el-image>
        </el-tab-pane>
        <el-tab-pane label="北校区(老/建军东路)" name="second">
          <el-image
              style="width: 100%; height: 100%"
              :src="require('@/assets/old.jpg')"
              :preview-src-list="schoolMapOldList">
          </el-image>
          <el-image
              style="width: 100%; height: 100%"
              :src="require('@/assets/oldd.jpg')"
              :preview-src-list="schoolMapOldList">
          </el-image>
        </el-tab-pane>
      </el-tabs>

    </el-dialog>

    <el-dialog
        title="文件收集工具"
        :visible.sync="fileCollectDialog"
        width="60%"
        :before-close="handleClose"
        >
      <div class="el-dialog-div">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我要上传文件" name="first">
            <el-form ref="fileUploadForm" :model="fileUploadForm" label-width="100px" size="small">
              <el-form-item label="请选择文件" prop="collectFile" class="changeImg">
                <el-upload
                    class="upload-demo"
                    drag
                    action="http://localhost:8081/upload/images"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :on-success="handleAvatarSuccess"
                    :on-remove="handleRemove"
                    :before-upload="beforeAvatarUpload">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>

              </el-form-item>
              <el-form-item size="large" label="文件收集序号:">
                <el-input v-model="fileUploadForm.collectNo" placeholder="请输入文件收集序号"></el-input>
              </el-form-item>
              <el-form-item size="large" label="文件名:">
                <el-input v-model="fileUploadForm.fileDesc" placeholder="请输入文件名" ></el-input>
              </el-form-item>

              <el-button
                  style="margin-top: 20px"
                  size="max"
                  type="primary"
                  @click="submit()"
              >上传</el-button
              >
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="我要创建文件收集" name="second">
            <el-form ref="createCollectForm" :model="createCollectForm" label-width="100px" size="small">
              <el-form-item size="large" label="文件收集序号:">
                <el-input v-model="createCollectForm.collectNo"  placeholder="请输入文件收集序号"></el-input>
              </el-form-item>
              <el-form-item size="large" label="收集标题:">
                <el-input v-model="createCollectForm.tittle" placeholder="请输入收集标题" ></el-input>
              </el-form-item>

              <el-button
                  style="margin-top: 20px"
                  size="max"
                  type="primary"
                  @click="submitCollect()"
              >创建</el-button
              >
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="我要下载文件" name="third">
            <div style="display: flex">
              <el-input v-model="collectNo" placeholder="请输入文件收集序号" style="width: 30%"></el-input>
              <el-button size="medium" style="margin-left: 10px" type="primary" @click="getCollectFileList">查询</el-button>
              <el-button size="medium"  v-if="fileDetails.length > 0" type="success" class="el-icon-download" @click="downloadFile">点击下载</el-button>
              <span v-if="fileDetails.length > 0" style="margin: 10px">当前共上传文件 {{fileDetails.length}} 份</span>
            </div>
            <span style="float: left;margin: 10px;" v-if="fileDetails.length > 0" >
              该序列号文件收集主题为： <span style="color:red">{{fileCollect.tittle}}</span>
            </span>
            <el-table
                :data="fileDetails"
                style="width: 100%;margin-top: 10px">
              <el-table-column
                  prop="fileName"
                  label="文件名"
                  width="300">
              </el-table-column>
              <el-table-column
                  prop="createTime"
                  label="上传日期"
                  width="180">
              </el-table-column>
            </el-table>
          </el-tab-pane>

        </el-tabs>
      </div>
    </el-dialog>

    <el-dialog
        title="校园天气"
        :visible.sync="showWeather"
        width="48%"
    >
      <div>
        <Weather></Weather>
      </div>
    </el-dialog>

    <el-dialog
        title="通知公告"
        :visible.sync="showNotice"
        width="60%"
    >
      <div>
        <Notice></Notice>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Banner from "../components/banner.vue";
import Weather from "@/components/Weather.vue";
import Notice from "@/components/Notice.vue";
export default {
  name: "tools",
  components: {
    Banner,
    Weather,
    Notice
  },
  data() {
    return {
      center: {lng: 33.382, lat: 120.198},
      zoom: 20, // 缩放等级
      startKeyword: '盐城工学院',
      endKeyword: '盐城工学院',
      schoolDay:false,
      showMap:false,
      showWeather:false,
      showNotice:false,
      activeName: 'first',
      c:'c1',
      activeName1: 'zero',
      fileCollectDialog:false,
      createCollectForm:{
        tittle:"",
        collectNo: "",
      },
      fileUploadForm:{
        fileUrl:"",
        collectNo:"",
        fileDesc: "",
        fileSuffix:""
      },
      downloadForm:{
        collectNo:"",
      },
      fileDetails:[],
      collectNo: "",
      fileCollect: {},
      schoolMapNewList: [
        'https://www.ycit.cn/__local/B/26/0F/568DAAE9B5D7FA3AAC77E8781EB_C0625506_24638.jpg',
        'https://www.ycit.cn/__local/0/74/7F/A416D0A4602F907CCD5B739FA92_8447D102_1605A.jpg?e=.jpg',
      ],
      schoolMapOldList: [
        'https://www.ycit.cn/__local/4/53/85/612A393986FF2D9F4BBC68769B4_ABFB481D_398ED.jpg?e=.jpg',
        'https://www.ycit.cn/__local/9/9F/35/79F3383F56EB6DCADC272257E49_7DCEED7F_C7AC.jpg?e=.jpg'
      ],
      schoolDayList: [
        'https://jwc.ycit.edu.cn/images/111.png',
        require('@/assets/day21-22.png'),
        require('@/assets/day20-21.png'),
      ]
    };
  },
  methods: {
    showSchoolDay(){
      this.schoolDay = true;
    },
    showWea(){
      this.showWeather = true;
    },
    showNot(){
      this.showNotice = true;
    },
    getCollectFileList(){
      if(this.collectNo == ''){
        this.$message.error("文件收集序号不能为空！");
        return;

      }
      let url = 'http://localhost:8081/tools/getCollectFileList';
      let param = {
        collectNo : this.collectNo
      }
      this.$axios
          .post(url ,param, {
            headers: { "Content-Type": "application/json;charset=utf-8" ,
            },
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
              if (res.data.code == 0) {
                this.fileDetails = res.data.data;
              }else{
                this.$message.error(res.data.msg);
              }
            }
          })
          .catch(() => {
            this.$message.error("服务器异常");
          });
      let url1 = 'http://localhost:8081/tools/getFileCollect';
      this.$axios
          .post(url1 ,param, {
            headers: { "Content-Type": "application/json;charset=utf-8" ,
            },
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.status == 200) {
              if (res.data.code == 0) {
                this.fileCollect = res.data.data;
              }else{
                this.$message.error(res.data.msg);
              }
            }
          })
          .catch(() => {
          });


    },
    downloadFile(){
      let url = 'http://localhost:8081/tools/downLoad?collectNo=';
      window.open(url + this.collectNo );

      // this.$axios
      //     .get(url, {
      //       params: {
      //         collectNo: this.downloadForm.collectNo,
      //       },
      //       responseType: 'blob'
      //     }).then(() => {
      //       console.log('下载文件');
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });

    },
    submitCollect(){
      if(this.createCollectForm.tittle == ''){
        this.$message.error("文件上传标题为空！");
        return;
      }
      if(this.createCollectForm.collectNo == ''){
        this.$message.error("文件收集序号为空！");
        return;
      }
      let collect = {
        tittle:this.createCollectForm.tittle,
        collectNo: this.createCollectForm.collectNo,
      }
      let url = 'http://localhost:8081/tools/createFileCollect'
      this.$axios
          .post(url ,collect, {
            headers: { "Content-Type": "application/json;charset=utf-8" ,
            },
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.status == 200) {
              if (res.data.code == 0) {
                this.$message.success("文件收集创建成功！");
              }else{
                this.$message.error(res.data.msg);
              }
            }
          })
          .catch(() => {
            this.$message.error("服务器异常");
          });

    },
    submit() {
      console.log(this.fileUploadForm)
      console.log('this.fileUploadForm')
      if(this.fileUploadForm.fileUrl == ''){
        this.$message.error("文件为空，请重新上传！");
        return;
      }
      if(this.fileUploadForm.collectNo == ''){
        this.$message.error("文件收集序号为空！");
        return;
      }
      if(this.fileUploadForm.fileDesc == ''){
        this.$message.error("文件名为空！")
        return;
      }
      var that = this;
      let file = {
        fileUrl:that.fileUploadForm.fileUrl,
        collectNo: that.fileUploadForm.collectNo,
        fileDesc: that.fileUploadForm.fileDesc,
        fileSuffix: that.fileUploadForm.fileSuffix
      }
      let url = 'http://localhost:8081/tools/saveCollectFileMsg'
      that.$axios
          .post(url ,file, {
            headers: { "Content-Type": "application/json;charset=utf-8" ,
            },
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.status == 200) {
              if (res.data.code == 0) {
                that.$message.success("文件上传成功！");
                this.clearFileData();
                this.fileCollectDialog = false;
              }else{
                that.$message.error(res.data.msg);
              }
            }
          })
          .catch(() => {
            that.$message.error("服务器异常");
          });
    },
    clearFileData(){
      this.fileUploadForm.fileUrl= "";
      this.fileUploadForm.collectNo="";
      this.fileUploadForm.fileDesc= "";
      this.fileUploadForm.fileSuffix="";
      this.collectNo = "";
      this.fileDetails = [];
      this.collectNo= "";
      this.fileCollect= {};

    },
    showSchoolMap(){
      this.showMap = true;
    },
    showFileCollect(){
      this.fileCollectDialog = true;
    },
    handleClick() {
    },
    beforeAvatarUpload(file) {
      this.fileUploadForm.fileSuffix =  file.name.substring(file.name.lastIndexOf('.') + 1);
      console.log(this.fileUploadForm.fileSuffix);
      return true;
    },
    handleAvatarSuccess(res) {
      this.fileUploadForm.fileUrl = res.data;
      this.$message.success("文件上传成功！");
      console.log(this.fileUploadForm.fileUrl);
    },
    handleExceed() {
      this.$message.warning('只可上传一个文件！如需上传多个文件请重复上传！');
    },
    handleRemove() {
      this.fileUploadForm.fileUrl = '';
      this.fileUploadForm.fileSuffix = '';
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(a => {
            console.log(a);
            this.clearFileData();
            done();
          })
    }

  },

};
</script>

<style lang="scss" scoped>
.el-card ::v-deep .el-card__body{
  padding: 5px;
}
.box-card {
  width: 100%;
  height: 500px;
}
.image {
  width: 100%;
  display: block;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 220px;
  width: 220px;
}
.el-dialog-div {
  height: 70vh;
  overflow: auto;
}
.map {
  width: 100%;
  height: 400px;
  display:block;
}
</style>

