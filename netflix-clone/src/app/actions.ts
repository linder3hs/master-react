"use server";

import { cookies } from "next/headers";

export async function create(name: string, data: string) {
  cookies().set(name, data);
}
