"use client";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "./QA.module.css";

export default function QA() {
    const view_answer = (id: string) => {
        const x = document.getElementById(id);
        if (x) {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        const b = document.getElementById(`button_` + id);
        if (b) {
            /*  if (b.classList.contains("up")) {
                b.classList.remove("up");
                b.classList.add("down");
            } else {
                b.classList.remove("down");
                b.classList.add("up");
            } */
            b.classList.toggle("up");
        }
        return false;
    };
    return (
        <main>
            <Header />
            <div className={styles.main_qa_wrap}>
                <div className={styles.qa_content}>
                    <div className={styles.qa_title_wrap}>
                        <h2>Вопросы-ответы</h2>
                    </div>
                    <div className={styles.qa_questions_wrap}>
                        <div className={styles.qa_question_content}>
                            <div className={styles.qa_question_title_wrap}>
                                <div className={styles.qa_question_title}>
                                    <span> Что такое Билетопоиск?</span>
                                </div>
                                <button
                                    className={styles.qa_question_button}
                                    onClick={() => view_answer("q1")}
                                    id="button_q1"
                                ></button>
                            </div>

                            <div className={styles.qa_question_answer} id="q1">
                                <span>
                                    Мы — крупнейший сервис о кино в рунете. На
                                    нем вы сможете посмотреть фильмы и сериалы,
                                    купить билеты в кино, узнать рейтинги
                                    популярных видео и интересные факты,
                                    поставить фильмам оценки, написать рецензии
                                    и дополнить описание фильмов.
                                </span>
                            </div>
                        </div>

                        <div className={styles.qa_question_content}>
                            <div className={styles.qa_question_title_wrap}>
                                <div className={styles.qa_question_title}>
                                    <span>
                                        Какой компании принадлежит Билетопоиск?
                                    </span>
                                </div>
                                <button
                                    className={styles.qa_question_button}
                                    onClick={() => view_answer("q2")}
                                    id="button_q2"
                                ></button>
                            </div>
                            <div className={styles.qa_question_answer} id="q2">
                                <span>На этот вопрос пока нет ответа.</span>
                            </div>
                        </div>

                        <div className={styles.qa_question_content}>
                            <div className={styles.qa_question_title_wrap}>
                                <div className={styles.qa_question_title}>
                                    <span>
                                        Как купить билет на Билетопоиск?
                                    </span>
                                </div>
                                <button
                                    className={styles.qa_question_button}
                                    onClick={() => view_answer("q3")}
                                    id="button_q3"
                                ></button>
                            </div>

                            <div className={styles.qa_question_answer} id="q3">
                                <span>На этот вопрос пока нет ответа.</span>
                            </div>
                        </div>

                        <div className={styles.qa_question_content}>
                            <div className={styles.qa_question_title_wrap}>
                                <div className={styles.qa_question_title}>
                                    <span>
                                        Как оставить отзыв на Билетопоиск?
                                    </span>
                                </div>
                                <button
                                    className={styles.qa_question_button}
                                    onClick={() => view_answer("q4")}
                                    id="button_q4"
                                ></button>
                            </div>

                            <div className={styles.qa_question_answer} id="q4">
                                <span>На этот вопрос пока нет ответа.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
