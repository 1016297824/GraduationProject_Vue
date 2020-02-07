import axios from "@/util/MyAxios";

// 登录
export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    let cname = response.headers["cname"];
    if (token != null) {
      sessionStorage.setItem("token", token);
    }

    if (role == "Customer") {
      sessionStorage.setItem("cname", cname);
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
