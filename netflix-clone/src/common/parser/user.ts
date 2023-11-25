import { cookies } from "next/headers";
import { UserSupabase } from "@/common/types/core";

class UserParser {
  cookieStore;

  constructor() {
    this.cookieStore = cookies();
  }

  getUser(): UserSupabase {
    const user = this.cookieStore.get("user")?.value ?? "{}";
    return JSON.parse(user);
  }
}

export const user = new UserParser()
