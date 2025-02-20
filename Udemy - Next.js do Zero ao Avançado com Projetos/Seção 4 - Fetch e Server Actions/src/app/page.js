import Link  from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/todos/create'}>Ir para criar de todo</Link>
    </main>
  );
}
