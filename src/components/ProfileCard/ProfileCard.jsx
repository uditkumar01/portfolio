import styles from "../../styles/ProfileCard.module.css";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import { Button } from "../Button/Button";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
export function ProfileCard() {
    const { theme } = useTheme();
    return (
        <div className={styles.profileCard}>
            <div className={styles.picContainer}>
                <div className={styles.ripplePic}></div>
                <div className={styles.profilePic}>
                    <Image
                        src={`/images/profilepic.jpeg`}
                        height={200}
                        width={200}
                    />
                </div>
            </div>
            <div className={styles.aboutMe}>
                <p className={`${styles.text} ${styles.text400}`}>
                    &nbsp;
                    <span
                        className={`${styles.text500} ${
                            theme ? styles.textLight : styles.textDark
                        }`}
                    >
                        Hola
                    </span>
                    , I'm Udit Kumar
                </p>
                <h1
                    className={`${styles.textLg} ${
                        theme ? styles.textLight : styles.textDark
                    }`}
                >
                    I'm a{" "}
                    <ReactTypingEffect
                        text={[
                            "Web Developer.",
                            "B Tech Student.",
                            "Programmer.",
                            "keen learner.",
                        ]}
                    />{" "}
                </h1>
                <p className={styles.textSm}>
                    &nbsp; I build things for the{" "}
                    <span
                        className={`${styles.text500} ${
                            theme ? styles.textLight : styles.textDark
                        }`}
                    >
                        web
                    </span>
                </p>
                <div className={styles.btnContainer}>
                    <br />
                    <Button label={`Connect With Me`} href={`#contact`} />
                </div>
            </div>
        </div>
    );
}
