// 用户注册
<template>
  <div>
    <!-- 导航栏 -->
    <loginNavbar />

    <!-- 主体 -->
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
              <form action="">
                <div class="form-group text-left">
                  <label for="">手机号</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="customer.username"
                    @keyup="writeUsername"
                  />
                  <p style="color: red;">
                    {{ phoneMessage }}
                  </p>
                </div>
                <div class="form-group text-left">
                  <label for="">密码</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="customer.password"
                    @keyup="writePassword"
                  />
                  <p style="color: red;">
                    {{ passwordMessage }}
                  </p>
                </div>
                <div class="form-group text-left">
                  <label for="">确认密码</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password1"
                    @keyup="writePassword1"
                  />
                  <p style="color: red;">
                    {{ password1Message }}
                  </p>
                </div>
                <div class="form-group text-left">
                  <label for="">姓名</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="customer.name"
                    @keyup="writeName"
                  />
                  <p style="color: red;">
                    {{ nameMessage }}
                  </p>
                </div>
                <div class="col-lg-12">
                  <input
                    type="button"
                    value="注册"
                    class="btn btn-primary col-lg-4"
                    @click="register"
                  />
                  <span class="col-lg-8 offset-lg-1">
                    <a href="/login">
                      已注册，去登陆
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <footerNavbar />
  </div>
</template>

<script>
import { register } from "@/api/login.js";

export default {
  name: "Register",
  data: () => ({
    customer: {
      username: null,
      password: null,
      name: null
    },
    password1: null,
    phoneMessage: null,
    passwordMessage: null,
    password1Message: null,
    nameMessage: null
  }),
  methods: {
    register: function() {
      if (
        this.customer.username == null ||
        this.customer.password == null ||
        this.customer.name == null ||
        this.password1 == null
      ) {
        if (this.customer.username == null) {
          this.phoneMessage = "请输入手机号！";
        }
        if (this.customer.password == null) {
          this.passwordMessage = "密码不能为空！";
        }
        if (this.customer.name == null) {
          this.nameMessage = "请输入姓名！";
        }
        if (this.password1 == null) {
          this.password1Message = "请再次确认密码！";
        }
      } else if (this.customer.password != this.password1) {
        this.password1Message = "两次输入密码不一致，请再次确认！";
      } else {
        console.log("zk");

        register(this.customer);
      }
    },
    writeUsername: function() {
      this.phoneMessage = null;
    },
    writePassword: function() {
      this.passwordMessage = null;
    },
    writePassword1: function() {
      this.password1Message = null;
    },
    writeName: function() {
      this.nameMessage = null;
    }
  },
  components: {
    loginNavbar: () => import("@/components/LoginNavbar"),
    footerNavbar: () => import("@/components/FooterNavbar")
  }
};
</script>
