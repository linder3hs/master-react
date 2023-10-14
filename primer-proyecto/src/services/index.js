import { makeHttpRequest } from "./config";

export async function create(body) {
  return await makeHttpRequest({
    method: "post",
    url: "tasks",
    body,
  });
}

export async function read() {
  return await makeHttpRequest({
    method: "get",
    url: "tasks",
  });
}

export async function update(id, body) {
  return await makeHttpRequest({
    method: "put",
    id,
    body,
    url: "tasks",
  });
}

export async function destroy(id) {
  return await makeHttpRequest({
    method: "delete",
    id,
    url: "tasks",
  });
}
