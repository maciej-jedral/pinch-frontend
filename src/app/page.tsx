import { HelloCard } from "@/components/HelloCard";
import { fetchHello } from "@/lib/hello";

export default async function Home() {
  let hello: Awaited<ReturnType<typeof fetchHello>> | null = null;

  try {
    hello = await fetchHello();
  } catch {
    hello = null;
  }

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <HelloCard
        message={hello?.message ?? "Hello from Next.js. It worked!"}
        database={hello?.database ?? "unreachable"}
      />
    </div>
  );
}
