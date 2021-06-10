import { useEffect } from "react";
import ThemeProvider from "../context/ThemeProvider/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
