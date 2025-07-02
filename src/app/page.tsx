import { api } from "@/services/api";
import styles from "./page.module.scss";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  async function handleLogin(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "" || password === "") {
      console.log("Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      if (!response.data.token) {
        return;
      }

      const expressTime = 60 * 60 * 24 * 30 * 1000;

      (await cookies()).set("login", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
      });
    } catch (err) {
      console.log(err);
      return;
    }
    redirect("/dashboard");
  }
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.logo}>Logo</h1>
      </div>
      <section className={styles.login}>
        <form action={handleLogin}>
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
      <Link href={"/signup"} className={styles.text}>
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
}
