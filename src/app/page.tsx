"use client";
import { Header } from "@/components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "@/components/Footer/Footer";
export default function Home() {
    return (
        <main>
            <Header />
            <div>
                <Main />
            </div>
            <Footer />
        </main>
    );
}
