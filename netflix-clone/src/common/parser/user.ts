import { cookies } from "next/headers";
import { UserSupabase } from "@/common/types/core";

class UserParser {
  cookieStore;

  constructor() {
    this.cookieStore = cookies();
  }

  getUser(): UserSupabase {
    return JSON.parse(this.cookieStore.get("user")?.value as string);
  }
}

export const user = new UserParser()
