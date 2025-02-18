import BotaoRedirect from "@/components/BotaoRedirect";
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
      {/* Aula 3 - parametro na URL */}
      <Link href={'/exemplo?parametro=valor'}>Página com Parâmetro</Link>
      {/* Aula 4 - nested routes */}
      <Link href={'/produtos/categorias/roupas'}>Ir a categoria de roupas</Link>
      {/* Aula 7 - nested Layout */}
      <Link href={'/dashboard'}>Ir para dashboard</Link>
      {/* Aula 9 - useRouter  */}
      <BotaoRedirect />
      {/* Aula 10 - Redirect */}
      <Link href={'/profile'}>Ir para seu perfil</Link>
    </main>
  );
}
