<template>
  <div id="register">
    <div class="container">
      <div class="banner">注册账号</div>
      <div class="main">

        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号密码注册" name="first">
            <div class="phone">
              <div class="sjh">
                <el-form
                    :model="registerInfo"
                    status-icon
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                  <el-form-item label="账号" prop="account">
                    <el-input
                        v-model="registerInfo.account"
                        autocomplete="off"
                        placeholder="请输入账号"
                        type="number"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="passWord">
                    <el-input
                        type="password"
                        v-model="registerInfo.passWord"
                        autocomplete="off"
                        placeholder="请输入密码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                        type="primary"
                        @click="submitForm('ruleForm')"
                        class="reg"
                    >注册
                    </el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-tab-pane>

        </el-tabs>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  data() {
    return {
      registerWay: 0,
      registerInfo: {
        phoneNumber: "",
        account: "",
        passWord: "",
        checkPass: "",
      },
      activeName: 'first',
      rules: {

        Password: [
          {required: false, message: "请输入密码", trigger: "blur"},
          {
            validator: function (rule, value, callback) {
              var res = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
              if (!res.test(value)) {
                callback(new Error("请输入正确的密码格式~"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    getCheckPass() {
      var _self = this;
      var url = "http://localhost:8081/register/sendSMSCode";
      var userId = _self.registerInfo.phoneNumber;
      _self.$axios
          .get(url, {
            params: {userId: userId},
          })
          .then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
              if (res.data.code == 0) {
                // _self.check = res.data.message;
                // console.log(_self.check);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
    },
    submitForm() {
      // console.log(formName)
      const _self = this;
      const userId = _self.registerInfo.account;
      const password = _self.registerInfo.passWord;
      const code = _self.registerInfo.checkPass;
      const url = "http://localhost:8081/register/regByAccount";
      if(userId.length < 8 || password.length < 8){
        this.$message.error('账号或密码不能少于8位');
        return;
      }
      if(userId.length > 20 ){
        this.$message.error('账号不能大于11位');
        return;
      }
      _self.$axios
          .get(url, {
            //将对象 序列化成URL的形式，以&进行拼接
            params: {userId: userId, password: password, code: code},
          })
          .then((res) => {
            // console.log(res);
            if (res.status == 200) {
              if (res.data.code == 0) {
                _self.$message.success("注册成功");
                setTimeout(() => {
                  _self.$router.push({name: "loginPass"});
                }, 500);
              } else {
                _self.$message.success(res.data.msg);
              }
            }
          });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab) {
      // console.log(tab.name);
      this.registerWay = tab.name == 'second' ? 2 : 1;
    }
  },
};
</script>

<style lang="scss" scoped>
#register {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  .container {
    width: 1000px;
    height: 700px;
    background: #fff;
    margin: 0 auto;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.11);

    .banner {
      width: 1000px;
      height: 100px;
      background: #409eff;
      line-height: 100px;
      font-size: 20px;
      color: #fff;
    }

    .main {
      width: 1000px;
      height: 600px;

      .phone {
        width: 50%;
        height: 250px;
        // border: 1px #eee solid;
        margin: 150px auto;
        position: relative;

        .txt {
          font-size: 12px;
          color: rgb(148, 144, 144);
        }
      }
    }
  }
}

.btn {
  position: absolute;
  right: 0;
  top: 72px;
}

.reg {
  width: 100%;
}

.el-form-item {
  margin-bottom: 32px;
}
</style>>

