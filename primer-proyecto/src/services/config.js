import axios from "axios";
import { success, failed } from "./response";

const config = axios.create({
  baseURL: "https://652ab2fb4791d884f1fd3f1c.mockapi.io/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function makeHttpRequest({ method, url, id, body }) {
  const requests = {
    post: async () => await config.post(url, body),
    get: async () => await config.get(url),
    put: async () => await config.put(`${url}/${id}`, body),
    delete: async () => await config.delete(`${url}/${id}`),
  };

  try {
    const { data } = await requests[method]();
    return success(data);
  } catch (error) {
    return failed(error);
  }
}
