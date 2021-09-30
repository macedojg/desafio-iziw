const API_URL = "https://api.iziw.com.br/api";

class AuthService {
  submit(answerI, answerII) {
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
}

// export default new AuthService();
