import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import styles from "../../styles/About.module.css";
import { Button } from "../Button/Button";
export function AboutMe() {
    const { theme } = useTheme();
    return (
        <div className={`${styles.aboutMe} ${theme ? styles.darkAbout : ``}`}>
            <div className={`${styles.aboutContainer}`}>
                <p>
                    <br />
                    <br />
                    <br />
                    <br />
                </p>
                <h1 className={`${styles.textLg}`}>About Me</h1>
                <small className={`${styles.textSm}`}>
                    Wanna know more about me...
                </small>
                <p className={`${styles.textMd}`}>
                    I am a 3rd year B Tech Student pursuing{" "}
                    <a className={`${styles.text500}`}>Web Development</a> and
                    looking for an internship in a company that would help me
                    grow and explore new emerging technologies. I focus on an accessible and simplified style of writing code,
                    and can adapt to whichever framework is required. I
                    always try to automate my repetitive tasks using JS, Python,
                    etc. I've also had experience with{" "}
                    <a className={`${styles.text500}`}>Bot Programming</a>,{" "}
                    <a className={`${styles.text500}`}>Flask</a>, and{" "}
                    <a className={`${styles.text500}`}>Firebase</a>. When I'm
                    not coding, you'll find me playing outdoor games, learning
                    new tech stuff.
                    <br />
                    <br />
                    Currently, I am learning{" "}
                    <a className={`${styles.text500}`}>React Native</a> and{" "}
                    <a className={`${styles.text500}`}>Next JS</a>. Before this,
                    I did <a className={`${styles.text500}`}>MERN Stack</a>. I
                    have worked on some cool projects using{" "}
                    <a className={`${styles.text500}`}>MERN Stack</a>. Some of
                    them are listed below in the{" "}
                    <a className={`${styles.text500}`}>Project</a> section.
                    <br />
                    <br />I believe Project Based Learning is the best approach
                    to learn anything. Hence, I've got projects in different
                    technologies that I've learnt over time. I'd love you to
                    check out my projects.
                    {[...Array(4)].map((value, i) => (
                        <br key={i} />
                    ))}
                </p>

                <Button
                    label={`Go to Projects`}
                    customClass={`secondary`}
                    href={`/projects`}
                />
                <p>
                    {[...Array(6)].map((value, i) => (
                        <br key={i} />
                    ))}
                </p>
            </div>
        </div>
    );
}
