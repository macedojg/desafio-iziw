import axios from "axios";

const API_URL = "https://api.iziw.com.br/api";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "/auth/login", { email, password })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password,
  //   });
  // }
}

export default new AuthService();
