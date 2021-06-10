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
                    I am a <a className={`${styles.text500}`}>Web Developer</a>,
                    looking for a internship in an exciting company. I focus on
                    writing accessible{" "}
                    <a className={`${styles.text500}`}>HTML</a>, using modern{" "}
                    <a className={`${styles.text500}`}>CSS</a> practices and{" "}
                    <a className={`${styles.text500}`}>JavaScript</a>. When
                    writing <a className={`${styles.text500}`}>JavaScript</a>, I
                    prefer <a className={`${styles.text500}`}>React</a>, but I
                    am open to adapting whichever framework is required. I've
                    also had experience working with{" "}
                    <a className={`${styles.text500}`}>Python</a>,{" "}
                    <a className={`${styles.text500}`}>Flask</a> and{" "}
                    <a className={`${styles.text500}`}>Firebase</a>. When I'm
                    not coding, you'll find me playing outdoor games, learning
                    new tech stuff.
                    <br />
                    <br />
                    Currently, i am learning React Native and Next JS. Before
                    doing this i did{" "}
                    <a className={`${styles.text500}`}>MERN Stack</a>. I have
                    made a lot of cool projects using{" "}
                    <a className={`${styles.text500}`}>MERN Stack</a> some of
                    them are listed below in{" "}
                    <a className={`${styles.text500}`}>Project</a> section.
                    <br />
                    <br />I believe Project Based Learning is the best approach
                    to learn anything. Hence, I've got projects in all the
                    different technologies that I've learnt over time check out
                    my projects. I'd love you to checkout my projects.
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
