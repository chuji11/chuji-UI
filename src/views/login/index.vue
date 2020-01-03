<template>
  <div class="login">
    <div class="login-bg">
      <!-- <img src="../../../../img/登录页背景图.jpg" alt /> -->
    </div>
    <div class="login-form">
      <!-- <img src="../../../../img/logo.svg" alt /> -->
      <h1>欢迎登录O+开放平台</h1>
      <Form :label-width="58" style="margin-top:56px;">
        <FormItem label="账号">
          <Input
            type="text"
            size="large"
            style="width:320px;"
            placeholder="与O+APP账号一致，手机号"
          />
        </FormItem>
        <FormItem label="密码">
          <Input
            type="password"
            size="large"
            style="width:320px;"
            placeholder="与O+APP密码一致，6-12位"
          />
        </FormItem>
        <Button type="primary" size="large" :long="true" @click="login"
          >登录</Button
        >
      </Form>
      <p style="color:#2d8cf0; font-size:14px; padding-top:23px;">忘记密码？</p>
      <p style="padding-top:246px;">
        <a href="#">联系产品经理</a>
        <span style="padding-left:19px;">当前v3.0.0</span>
      </p>
      <p style="padding-top:22px;">
        <span>返回旧版>></span>
        <a href="#" class="pdd">运营后台</a>
        <a href="#" class="pdd">商户后台</a>
        <a href="#" class="pdd">企业后台</a>
        <a href="#" class="pdd">物业后台</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
}
.login-bg {
  text-align: center;
  width: 70.8%;
  height: 100%;
  overflow: hidden;
  img {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
}
.login-form {
  margin-left: 4.8%;
  margin-top: 232px;
  width: 19.6%;
  text-align: center;
}
.pdd {
  padding-left: 10.8px;
}
</style>
