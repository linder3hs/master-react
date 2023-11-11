import { NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { access_token, refresh_token } = await req.json();
  const supabase = getServerClient();

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });

  if (error) {
    return NextResponse.json({
      ok: false,
      body: error,
    });
  }

  cookies().set("user", JSON.stringify(data.user));

  return NextResponse.json({
    ok: true,
    body: data,
  });
}
