import styles from "../../styles/CustomCursor.module.css";
import useMousePosition from '../../customHooks/useMousePosition';
import { useEffect, useState } from 'react';
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";

export function CustomCursor() {
    const { x, y } = useMousePosition();
    const { theme } = useTheme();
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        const mouseClickHandler = () => {
            setAnimation(true);
            const timeOutId = setTimeout(() => {
                setAnimation(false);
            }, 100);
            return () => clearTimeout(timeOutId);
        };
        document.addEventListener("click", mouseClickHandler);

        return () => {
            document.removeEventListener("click", mouseClickHandler);
        };
    }, []);
    console.log(theme);
    return (
        <>
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={`${styles.ring} ${animation ? styles.animate : ``}`}
            ></div>
            <div
                className={`${styles.dot} ${theme ? styles.darkDot : ``}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            ></div>
        </>
    );
};
