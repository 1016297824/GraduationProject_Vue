<template>
  <div>
    <label>账户：</label>
    <input type="text" v-model="customer.username" />
    <br />
    <label>密码：</label>
    <input type="password" v-model="customer.password" />
    <br />
    <input type="button" value="登录" @click="login" />
  </div>
</template>

<script>
import { login } from "@/api/login.js";

export default {
  name: "CustomerLogin",
  data: () => ({
    customer: {
      username: null,
      password: null
    }
  }),
  methods: {
    login: function() {
      login(this.customer);
    }
  }
};
</script>
