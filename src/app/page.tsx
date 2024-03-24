import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center mt-8">
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
