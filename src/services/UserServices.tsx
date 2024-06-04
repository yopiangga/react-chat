import axios from "axios";
import { handleAxiosError } from "./errors";
import { apiUrl } from "src/configs";

export class UserServices {
  async getUsers() {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
}
