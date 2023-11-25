import { NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();

  const supabase = getServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({ ...body });

  if (error) {
    return NextResponse.json(
      {
        ok: false,
        body: error.message,
      },
      { status: 500 }
    );
  }

  cookies().set("user", JSON.stringify(data.user));

  return NextResponse.json({
    ok: true,
    body: data,
  });
}
