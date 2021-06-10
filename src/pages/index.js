import { Layout } from "../Components/";
import styles from "../styles/Home.module.css";
import { AboutMe, Contact, ProfileCard } from "../Components/";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <Layout>
            <div className={styles.bodyContainer}>
                <ProfileCard />
                <AboutMe />
                <Contact />
            </div>
        </Layout>
    );
}
