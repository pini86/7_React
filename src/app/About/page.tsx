import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "./About.module.css";

export default function About() {
    return (
        <main>
            <Header />
            <div className={styles.main_about_wrap}>
                <div className={styles.about_content}>
                    <h2 className={styles.main_about_title}>О нас</h2>
                    <div>
                        <p className={styles.about_content_paragraph}>
                            Мы — крупнейший сервис о кино в рунете. На нем вы
                            сможете посмотреть фильмы и сериалы, купить билеты в
                            кино, узнать рейтинги популярных видео и интересные
                            факты, поставить фильмам оценки, написать рецензии и
                            дополнить описание фильмов.
                        </p>
                    </div>
                    <div>
                        <p className={styles.about_content_paragraph}>
                            был запущен в 2003 году. Портал предоставляет
                            пользователям информацию о фильмах и их создателях,
                            новости кино, интервью с актерами и другими
                            знаменитостями, рецензии пользователей, расписание
                            сеансов в кинотеатрах, ТВ-программу и другие
                            разделы.
                        </p>
                    </div>
                    <div>
                        <p className={styles.about_content_paragraph}>
                            Сайт был создан 7 ноября 2003 года, его основатели —
                            Виталий Таций и Дмитрий Суханов. Владельцем проекта
                            являлась компания ООО «Билетопоиск», которой
                            принадлежало 60 % акций проекта, 40 % акций
                            принадлежало её совладельцу — французской компании
                            ООО AlloCiné. 15 октября 2013 года сервис купила
                            компания «Яндекс» (размер сделки — $80 млн, около
                            2,6 млрд рублей на то время).
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
