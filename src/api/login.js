import axios from "@/util/MyAxios";

export function login(customer) {
  axios.post("/customerlogin", customer).then(response => {
    let token = response.headers["token"];
    if (token != null) {
      sessionStorage.setItem("token", token);
      window.location.href = "/customer";
    }
  });
}
