import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function SupabaseDemoPage() {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);
  const { data, error } = await supabase.from("todos").select("id, name");

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold">Supabase demo</h1>
      <p className="mb-6 text-slate-600">
        This page reads rows from your Supabase table using the server client.
      </p>

      {error ? (
        <p className="text-red-600">Unable to load data: {error.message}</p>
      ) : (
        <ul className="space-y-2">
          {data?.map((item) => (
            <li key={item.id} className="rounded border border-slate-200 p-3">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
