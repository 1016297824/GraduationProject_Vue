<template>
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
                <label for="">工号</label>
                <input
                  type="text"
                  class="form-control"
                  style="position:fixed;bottom:-9999px;"
                />
                <input
                  type="password"
                  class="form-control"
                  style="position:fixed;bottom:-9999px;"
                />
                <input
                  type="text"
                  class="form-control"
                  readonly
                  v-model="userBody1.username"
                />
              </div>
              <div class="form-group text-left">
                <label for="">旧密码</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="userBody1.password"
                  @keyup="writePassword"
                />
                <p style="color: red;">
                  {{ passwordMessage }}
                </p>
              </div>
              <div class="form-group text-left">
                <label for="">新密码</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="userBody1.newPassword"
                  @keyup="writeNewPassword"
                />
                <p style="color: red;">
                  {{ newPasswordMessage }}
                </p>
              </div>
              <div class="form-group text-left">
                <label for="">确认新密码</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="userBody1.newPassword1"
                  @keyup="writeNewPassword1"
                />
                <p style="color: red;">
                  {{ newPassword1Message }}
                </p>
              </div>
              <div class="col-lg-12" style="text-align:center">
                <input
                  type="button"
                  value="提交"
                  class="btn btn-primary"
                  @click="changePassword"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { changePassword } from "@/api/farmManager.js";

export default {
  nmae: "PasswordFarmManager",
  data: () => ({
    userBody1: {
      username: sessionStorage.getItem("username"),
      password: null,
      newPassword: null,
      newPassword1: null
    },
    passwordMessage: null,
    newPasswordMessage: null,
    newPassword1Message: null
  }),
  methods: {
    changePassword() {
      if (
        this.userBody1.password == null ||
        this.userBody1.newPassword == null ||
        this.userBody1.newPassword1 == null
      ) {
        if (this.userBody1.password == null) {
          this.passwordMessage = "请输入旧密码！";
        }
        if (this.userBody1.newPassword == null) {
          this.newPasswordMessage = "请输入新密码！";
        }
        if (this.userBody1.newPassword1 == null) {
          this.newPassword1Message = "请确认新密码！";
        }
      } else if (this.userBody1.newPassword != this.userBody1.newPassword1) {
        this.newPassword1Message = "两次输入密码不一致，请再次确认！";
      } else {
        changePassword(this.userBody1);
      }
    },
    writePassword() {
      this.passwordMessage = null;
    },
    writeNewPassword() {
      this.newPasswordMessage = null;
    },
    writeNewPassword1() {
      this.newPassword1Message = null;
    }
  }
};
</script>
