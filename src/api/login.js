import axios from "@/util/MyAxios";

export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    if (token != null) {
      sessionStorage.setItem("token", token);
    }

    if (role == "tj78hs1hy6s5v") {
      window.location.href = "/customer";
    } else if (role == "6h56s3h478f4") {
      window.location.href = "/supermanager";
    } else if (role == "12yi9i8gnj23") {
      window.location.href = "/manager";
    } else if (role == "ghd5dh8f1bq") {
      window.location.href = "/staff";
    }
  });
}
