import axios from "axios";
import { handleAxiosError } from "./errors";
import { apiUrl } from "src/configs";
import { socketUrl } from "src/configs/url";

export class MessageServices {
  async resetMessage() {
    try {
      const response = await axios.post(`${socketUrl}/clear`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
}
