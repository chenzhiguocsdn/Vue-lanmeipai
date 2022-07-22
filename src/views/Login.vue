<template>
  <div class="box">
    <h2 class="title">登录界面</h2>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model.number="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import jwt from "jwt-decode";
export default {
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        account: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        account: [{ validator: checkAccount, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 测试
          console.log("校验成功", this.ruleForm);
          this.$api
            .getLogin({
              user: this.ruleForm.account,
              pwd: this.ruleForm.pass,
            })
            .then((res) => {
              console.log(res.data);
              console.log(jwt(res.data.token));
              let obj = {
                token: res.data.token,
                username: jwt(res.data.token).user,
              };
              this.$store.commit("LoginModule/clearUser", obj);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 400px;
  height: 200px;
  box-shadow: 0 0 5px 5px rgba(134, 134, 134, 0.1);
  margin: 20px auto;
  padding: 30px;
}

.title {
  margin-bottom: 10px;
  text-align: center;
}
</style>
