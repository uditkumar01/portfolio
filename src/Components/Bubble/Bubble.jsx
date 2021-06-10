import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import styles from "../../styles/Bubble.module.css";

export function Bubble() {
    const { theme } = useTheme();
    return (
        <div className={styles.bubbleContainer}>
            <div className={styles.bubbleWrap}>
                <div
                    className={`${styles.bubble} ${
                        theme ? styles.darkBubble : ``
                    } ${styles.bubble1}`}
                >
                    <div className={styles.detail1}>
                        <div className={styles.detail2}>
                            <div className={styles.detail3}></div>
                        </div>
                    </div>
                    <div className={styles.detail4}></div>
                </div>
                <div
                    className={`${styles.bubble} ${
                        theme ? styles.darkBubble : ``
                    } ${styles.bubble2}`}
                >
                    <div className={styles.detail1}>
                        <div className={styles.detail2}>
                            <div className={styles.detail3}></div>
                        </div>
                    </div>
                    <div className={styles.detail4}></div>
                </div>
                <div
                    className={`${styles.bubble} ${
                        theme ? styles.darkBubble : ``
                    } ${styles.bubble3}`}
                >
                    <div className={styles.detail1}>
                        <div className={styles.detail2}>
                            <div className={styles.detail3}></div>
                        </div>
                    </div>
                    <div className={styles.detail4}></div>
                </div>
            </div>
        </div>
    );
}
