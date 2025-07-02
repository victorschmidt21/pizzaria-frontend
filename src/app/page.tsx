import styles from "./page.module.scss";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.logo}>Logo</h1>
      </div>
      <section className={styles.login}>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className={styles.input}
          />
          <button type="submit">Fazer login</button>
        </form>
      </section>
      <Link href={"/signup"} className={styles.text}>Não possui uma conta? Cadastre-se</Link>
    </div>
  );
}
