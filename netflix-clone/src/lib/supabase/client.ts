"use client";
import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getDataFromTable<T>(
  table: string,
  column: string,
  value: string
) {
  return await supabase.from(table).select().eq(column, value).returns<T[]>();
}
