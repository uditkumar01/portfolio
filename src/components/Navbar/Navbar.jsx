import styles from "../../styles/Navbar.module.css";
import { ToggleBtn } from "../";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";

function CustomLink({ label, path }) {
    const { theme } = useTheme();
    const router = useRouter();
    return (
        <Link href={path}>
            <li
                key={`option2`}
                className={`${styles.option} ${
                    router.pathname === path ? styles.active : ``
                } ${theme ? styles.darkColor : ``}`}
            >
                {label} <hr className={styles.line} />
            </li>
        </Link>
    );
}

export function Navbar() {
    const [openMenu, setMenuOpen] = useState(false);
    const { theme } = useTheme();
    const handleHamClick = () => {
        setMenuOpen((openMenu) => !openMenu);
    };

    return (
        <header className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <ul className={styles.icon}>
                    <li
                        key={`ham`}
                        className={`${styles.hamIcon} ${
                            theme ? styles.textLight : ``
                        }`}
                        onClick={handleHamClick}
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path>
                        </svg>
                    </li>
                </ul>
                <ul className={styles.logo} key={`logoContainer1`}>
                    <li
                        key={`logo`}
                        className={`${styles.navBrand} ${
                            theme ? styles.textLight : ``
                        }`}
                    >
                        <span>U</span>
                        <span>K</span>
                    </li>
                </ul>

                <ul
                    className={`${styles.options} ${
                        openMenu ? "" : styles.close
                    } ${theme ? styles.darkBg : ``}`}
                    key={`menuOptions1`}
                >
                    <CustomLink label={`Home`} path={`/`} />

                    <CustomLink label={`Projects`} path={`/projects`} />
                </ul>
                <ul className={styles.toggle} key={`toggleOption1`}>
                    <li key={`toggle`} className={styles.togglebtn}>
                        <ToggleBtn />
                    </li>
                </ul>
            </div>
        </header>
    );
}
