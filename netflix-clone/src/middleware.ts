import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(req: NextRequest) {
  try {
    const user = cookies()?.get("user")?.value;
    console.log(user)
    // si user existe tengo una sesion 
  } catch (error) {
    console.log("error cookies", error);
  }
}
