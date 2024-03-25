/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api.getway";

class UserService {
  async createAccount(accountData: any): Promise<any> {
    try {
      const { data } = await api.post("/create-account", accountData);
      return data;
    } catch (error) {
      const message = String(error);
      throw new Error(message);
    }
  }
  async login(loginData: any): Promise<any> {
    try {
      const { data } = await api.post("/login", loginData);
      console.log(data);
      console.log(data.data.token);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("id", data.data.id.toString());
      return data;
    } catch (error) {
      console.error(error);
      const message = String(error);
      throw new Error(message);
    }
  }
}

export default new UserService();
