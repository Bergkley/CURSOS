import styles from './page.module.css';
import MyComponent from '@/app/components/MyComponent';
import Container from '@/app/components/Container';
import Button from '@/app/components/Button';
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* 1 - CSS Global */}
      <h1>Hello Word Next.js</h1>

      {/* 2 - CSS Modules */}
      <h2 className={styles.heading_module}>Meu Css Modules</h2>
      <div className={styles.container}>
        <p>Testando Css modules</p>
      </div>
      {/* 3 - Tailwind */}
      <MyComponent />
      {/* 4 - Sass  */}
      <Container />
      {/* 5 - SASS com css module */}
      <Button />
    </main>
  );
}
