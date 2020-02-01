import axios from "@/util/MyAxios";

export function login(user) {
  console.log(user);

  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    if (token != null) {
      sessionStorage.setItem("token", token);
    }
  });
}
