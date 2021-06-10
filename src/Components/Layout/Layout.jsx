import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Navbar } from "../";
import { Bubble } from "../Bubble/Bubble";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import { useEffect, useState } from "react";

export function Layout({ children }) {
    const { theme } = useTheme();
    const [showNavTop, setShowNavTop] = useState(false);
    function navColorHandler() {
        const ht = window.scrollY;

        if (ht > 150 && !showNavTop) {
            setShowNavTop(true);
        } else if (ht <= 150 && showNavTop) {
            setShowNavTop(false);
        }
    }
    const goToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", navColorHandler, { passive: true });

        return () => window.removeEventListener("scroll", navColorHandler);
    });
    return (
        <>
            <div
                className={`${styles.container} ${
                    theme ? styles.darkContainer : styles.lightContainer
                }`}
            >
                <Bubble />
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <title>Udit Kumar</title>
                    <meta name="description" content="Udit Kumar's Portfolio" />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <Navbar />

                {children}

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        2021 © All rights reserved
                    </a>
                </footer>
                <button
                    className={`${styles.navTop} ${
                        !showNavTop ? styles.hide : ""
                    }`}
                    onClick={goToTop}
                    disabled={!showNavTop}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                    </svg>
                </button>
            </div>
        </>
    );
}
