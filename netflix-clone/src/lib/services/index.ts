import { makeHttpRequest } from "./config";

interface IUpsert {
  id?: string;
  body: object;
  url: string;
}

interface IRead {
  id?: string;
  url: string;
}

export async function post({ body, url }: IUpsert) {
  return await makeHttpRequest({ method: "post", url, body });
}

export async function get({ id, url }: IRead) {
  return await makeHttpRequest({ method: "get", url, id });
}

export async function update({ id, body, url }: IUpsert) {
  return await makeHttpRequest({ method: "put", id, body, url });
}

export async function destroy({ id, url }: IRead) {
  return await makeHttpRequest({ method: "delete", id, url });
}
