import { RefreshCcw } from "lucide-react";
import style from "./style.module.scss";

export function Orders() {
  return (
    <main className={style.container}>
      <section className={style.containerTitle}>
        <h1>Pedidos</h1>
        <button>
          <RefreshCcw />
        </button>
      </section>
      <section className={style.containerListOrder}> 
        <button className={style.cardOrder}>
            <div></div>
            <span>Mesa 13</span>
        </button>
        <button className={style.cardOrder}>
            <div></div>
            <span>Mesa 13</span>
        </button>
      </section>
      
    </main>
  );
}
