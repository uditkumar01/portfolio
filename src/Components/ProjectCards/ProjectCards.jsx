import styles from "../../styles/ProjectCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
export function ProjectCards() {
    const { theme } = useTheme();
    const projectData = [
        {
            image: `cg.png`,
            title: `React Component Generator`,
            content: (
                <>
                    React Component Generator is a{" "}
                    <span>VS Code Extension</span> which, I made to automate my
                    react template cleaning and component creation task. Made
                    using <span>VSCode Extension API</span>, and
                    <span> NodeJS</span>.
                </>
            ),
            repo: `ReactComponentGeneratorExtension`,
            liveLink:
                "https://marketplace.visualstudio.com/items?itemName=uditkumar01.react-component-generator",
        },
        {
            image: `goodtimes.png`,
            title: `GoodTimes`,
            content: (
                <>
                    GoodTimes is a <span>E Commerce</span> App made using{" "}
                    <span>ReactJS</span>,<span> HTML</span>,<span> CSS</span>,{" "}
                    <span> NodeJS</span>,<span> ExpressJS</span>,
                    <span> MongoDB</span>. Implemented concepts like{" "}
                    <span>Pagination</span>,<span> Infinite Scroll</span>,
                    <span> Toast handling</span>, <span>Auth</span>.
                </>
            ),
            repo: `GoodTimes`,
            liveLink: "https://ourgoodtimes.netlify.app",
        },
        {
            image: `instantquiz.png`,
            title: `Instant Quiz`,
            content: (
                <>
                    Instant Quiz is a <span>Quiz</span> App made using{" "}
                    <span>ReactJS</span>, <span> TypeScript</span>,
                    <span> HTML</span>,<span> CSS</span>, <span> Firebase</span>
                    , <span> Material UI</span>. Implemented concepts like{" "}
                    <span>Animation</span>,<span> Leaderboard</span>,
                    <span> Google Auth</span>.
                </>
            ),
            repo: `instant_quiz`,
            liveLink: "https://instantquiz.netlify.app",
        },
        {
            image: `instantui.png`,
            title: `Instant UI`,
            content: (
                <>
                    Instant UI is a <span>UI Component library</span> App made
                    using <span>ReactJS</span>,<span> HTML</span>,
                    <span> CSS</span>. I have used this component library in
                    some of the projects above like <span>GoodTimes</span>.
                </>
            ),
            repo: `instantUI`,
            liveLink: "https://instantui.netlify.app",
        },
        {
            image: `nkeep.png`,
            title: `Nkeep`,
            content: (
                <>
                    Nkeep is a <span>note making</span> App made using{" "}
                    <span>ReactJS</span>,<span> HTML</span>,<span> CSS</span> .
                    Implemented concepts like <span>Search text highlight</span>
                    ,<span> linkfy</span> emails or links,
                    <span> image url detection</span>.
                </>
            ),
            repo: `keepUI`,
            liveLink: "https://nkeep.netlify.app",
        },
        {
            image: `goodreels.png`,
            title: `GoodReels`,
            content: (
                <>
                    GoodReels is a <span>Video Library</span> App made using{" "}
                    <span>ReactJS</span>,<span> HTML</span>,<span> CSS</span>,{" "}
                    <span> NodeJS</span>,<span> ExpressJS</span>,
                    <span> MongoDB</span>. Implemented concepts like{" "}
                    <span>Horizontal Scroll</span>,
                    <span> Playlist handling</span>,<span> Auth</span>.
                </>
            ),
            repo: `goodreels`,
            liveLink: "https://goodreels.netlify.app",
        },
        {
            image: `elrn.png`,
            title: `Elrn`,
            content: (
                <>
                    Elrn is a <span>Blogging</span> App made using{" "}
                    <span>Flask</span>,<span> HTML</span>,<span> CSS</span>,{" "}
                    <span> Jinja2</span>,<span> Sqlite</span>,
                    <span> Flask Sqlalchemy</span>. Implemented concepts like{" "}
                    <span>Pagination</span>,<span> Chat window</span>,
                    <span> Follow</span>, <span>Post</span>,{" "}
                    <span>Comment</span>, <span>Todo list</span>.
                </>
            ),
            repo: `instant_quiz`,
            liveLink: "https://elrn1.herokuapp.com",
        },
    ];
    return (
        <div
            className={`${styles.projectCards} ${theme ? styles.darkCard : ``}`}
        >
            {projectData.map(({ image, repo, title, content, liveLink }, i) => {
                return (
                    <div className={styles.card} key={i.toString()}>
                        <div className={styles.cardHeader}>
                            <div className={styles.image}>
                                <Image
                                    src={`/images/${image}`}
                                    height={500}
                                    width={1000}
                                    objectFit={`cover`}
                                    className={styles.imageObj}
                                />
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.textLg}>{title}</h2>
                            <p className={styles.textMd}>{content}</p>
                        </div>
                        <div className={styles.footer}>
                            <p className={styles.icons}>
                                <Link
                                    href={`https://github.com/uditkumar01/${repo}`}
                                >
                                    <a className={styles.icon}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github social-link-item"
                                        >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                </Link>
                                <Link href={liveLink}>
                                    <a className={styles.icon}>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            height="24px"
                                            width="24px"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                                            <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
