import axios from "@/util/MyAxios";

// 登录
export function login(userBody) {
  axios.post("/login", userBody).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    let username = response.headers["username"];

    if (token != null) {
      sessionStorage.setItem("token", token);
    }

    if (username != null) {
      sessionStorage.setItem("username", username);
    }

    if (role == "Customer") {
      window.location.href = "/customer/reserve";
    } else if (role == "SuperManager") {
      window.location.href = "/supermanager/staffShow";
    } else if (role == "Manager") {
      window.location.href = "/manager";
    } else if (role == "Staff") {
      window.location.href = "/staff";
    }
  });
}

// 注册
export function register(customer) {
  axios.post("/register", customer).then(response => {
    alert(response.data.message);
  });
}
