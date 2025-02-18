import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              {/* Aula 1 navegacao */}
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href={"/sobre"} className="underline backdrop-brightness-95">Sobre</Link>
      {/* Aula 2 - dados dinamicos */}
      <h1>Acessar posts</h1>
      <Link href={'/posts'}>Posts</Link>
    </main>
  );
}
