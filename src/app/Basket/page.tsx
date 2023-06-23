import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "./Basket.module.css";

export default function Basket() {
    return (
        <main>
            <Header />
            <div className={styles.main_basket_wrap}>
                <span>Фильм 1</span>
                <span>Фильм 2</span>
                <span>Фильм 3</span>
                <span>Итого билетов</span>
            </div>
            <Footer />
        </main>
    );
}
