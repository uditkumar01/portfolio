import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import styles from "../../styles/Button.module.css";

export function Button({ href, label, customClass }) {
    const [ripple, setRipple] = useState(null);
    const buttonRef = useRef(null);
    const { theme } = useTheme();
    let timeroutId;

    const colors = ["#f6e58d", "#ffbe76", "#c7ecee", "#7ed6df", "#d2dae2"];

    const getRandNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    const randColors = () => {
        return colors[Math.floor(Math.random() * colors.length) + 1];
    };

    const smoothScroll = (event) => {
        event.preventDefault();
        document
            .querySelector(event.target.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth",
            });
    };

    const clickHandler = (event) => {
        const size = buttonRef.current.offsetWidth;
        const a = getRandNumber();
        const b = getRandNumber();

        setRipple({
            top: `${b}%`,
            left: `${a}%`,
            height: `${size * 2}px`,
            width: `${size * 2}px`,
            background: randColors(),
        });

        if (href && href.startsWith("#")) {
            smoothScroll(event);
        }
    };
    useEffect(() => {
        clearTimeout(timeroutId);

        timeroutId = setTimeout(() => {
            setRipple(null);
        }, 700);

        return () => clearTimeout(timeroutId);
    }, [ripple]);

    return (
        <>
            {href.includes("#") ? (
                <a href={href}>
                    <button
                        ref={buttonRef}
                        className={`${styles.btn} ${styles.noSelect} ${
                            customClass ? styles.secondary : ""
                        } ${theme ? styles.btnDark : ``}`}
                        onClick={clickHandler}
                        href={href}
                    >
                        <span
                            className={`${styles.ripple} ${
                                ripple ? styles.rippleActive : ``
                            }`}
                            style={
                                ripple
                                    ? ripple
                                    : {
                                          top: `${getRandNumber()}%`,
                                          left: `${getRandNumber()}%`,
                                          background: randColors(),
                                      }
                            }
                        ></span>
                        {label}
                    </button>
                </a>
            ) : (
                <Link href={href}>
                    <button
                        ref={buttonRef}
                        className={`${styles.btn} ${styles.noSelect} ${
                            customClass ? styles.secondary : ""
                        } ${theme ? styles.btnDark : ``}`}
                        onClick={clickHandler}
                    >
                        <span
                            className={`${styles.ripple} ${
                                ripple ? styles.rippleActive : ``
                            }`}
                            style={
                                ripple
                                    ? ripple
                                    : {
                                          top: `${getRandNumber()}%`,
                                          left: `${getRandNumber()}%`,
                                          background: randColors(),
                                      }
                            }
                        ></span>
                        {label}
                    </button>
                </Link>
            )}
        </>
    );
}
