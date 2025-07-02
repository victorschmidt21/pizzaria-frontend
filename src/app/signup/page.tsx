import Link from "next/link";
import styles from "../page.module.scss";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Signup() {
  async function HandleRegister(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await api.post("/user", {
        name,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
    redirect("/");
  }
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.logo}>Logo</h1>
      </div>
      <h1>Criando sua conta</h1>
      <section className={styles.login}>
        <form action={HandleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            className={styles.input}
          />
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
          <button type="submit">Cadastrar-se</button>
        </form>
      </section>
      <Link href={"/signup"} className={styles.text}>
        Já possui uma conta? Faça login
      </Link>
    </main>
  );
}
