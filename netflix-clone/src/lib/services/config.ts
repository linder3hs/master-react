import axios from "axios";

interface HttpRequest {
  method: "get" | "post" | "put" | "delete";
  url: string;
  id?: string;
  body?: object;
}

const config = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function makeHttpRequest({ method, url, id, body }: HttpRequest) {
  const requests = {
    post: async () => await config.post(url, body),
    get: async () => {
      const endpoint = id ? `${url}/${id}` : url;
      return await config.get(endpoint);
    },
    put: async () => await config.put(`${url}/${id}`, body),
    delete: async () => await config.delete(`${url}/${id}`),
  };

  try {
    const { data } = await requests[method]();
    return data;
  } catch (error) {
    return error;
  }
}
