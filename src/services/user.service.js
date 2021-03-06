import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.iziw.com.br/api";

class UserService {
  getAdminBoard() {
    return axios.get(API_URL + "/auth/me", { headers: authHeader() });
  }
}

export default new UserService();
