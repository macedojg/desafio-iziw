import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.iziw.com.br/api";

class UserService {
  // getPublicContent() {
  //   return axios.get(API_URL + "/all");
  // }

  // getUserBoard() {
  //   return axios.get(API_URL + "user", { headers: authHeader() });
  // }

  //   getModeratorBoard() {
  //     return axios.get(API_URL + 'mod', { headers: authHeader() });
  //   }

  getAdminBoard() {
    return axios.get(API_URL + "/auth/me", { headers: authHeader() });
  }
}

export default new UserService();
