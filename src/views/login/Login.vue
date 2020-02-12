// 用户登录
<template>
  <div>
    <!-- 导航栏 -->
    <loginNavbar />

    <!-- 主体 -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6">
              <br />
              <br />
              <img
                alt=""
                src="@/assets/imgs/社会主义核心价值观.png"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-6 ">
              <br />
              <br />
              <br />
              <div class="col-lg-8">
                <form action="">
                  <div class="form-group text-left">
                    <label>用户名</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="userBody.username"
                      @keyup="writeUsername"
                    />
                    <p style="color: red;">
                      {{ usernameMessage }}
                    </p>
                  </div>
                  <div class="form-group text-left">
                    <label>密码</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="userBody.password"
                      @keyup="writePassword"
                    />
                    <p style="color: red;">
                      {{ passwordMessage }}
                    </p>
                  </div>
                  <div class="col-lg-12">
                    <input
                      type="button"
                      value="登录"
                      class="btn btn-primary col-lg-4"
                      @click="login"
                    />
                    <span class="col-lg-8">
                      <a href="/register">
                        没有账号？/注册
                      </a>
                    </span>
                  </div>
                </form>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footerNavbar />
  </div>
</template>

<script>
import { login } from "@/api/login";

export default {
  name: "Login",
  data: () => ({
    userBody: {
      username: null,
      password: null
    },
    usernameMessage: null,
    passwordMessage: null
  }),
  methods: {
    login: function() {
      if (this.userBody.username == "" || this.userBody.password == "") {
        if (this.userBody.username == "") {
          this.usernameMessage = "请输入用户名！";
        }
        if (this.userBody.password == "") {
          this.passwordMessage = "请输入密码！";
        }
      } else {
        this.usernameMessage = null;
        this.passwordMessage = null;
        login(this.userBody);
      }
    },
    writeUsername: function() {
      this.usernameMessage = null;
    },
    writePassword: function() {
      this.passwordMessage = null;
    }
  },
  components: {
    loginNavbar: () => import("@/components/LoginNavbar"),
    footerNavbar: () => import("@/components/FooterNavbar")
  }
};
</script>
