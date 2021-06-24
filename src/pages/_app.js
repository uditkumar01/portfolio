import { CustomCursor } from "../components";
import ThemeProvider from "../context/ThemeProvider/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <CustomCursor />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
