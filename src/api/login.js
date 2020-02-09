import axios from "@/util/MyAxios";

// 登录
export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    let username = response.headers["username"];
    if (token != null) {
      sessionStorage.setItem("token", token);
    }

    if (role == "Customer") {
      sessionStorage.setItem("username", username);
      window.location.href = "/customer/reserve";
    } else if (role == "SuperManager") {
      window.location.href = "/supermanager";
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
