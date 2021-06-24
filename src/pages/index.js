import { Layout } from "../components/";
import styles from "../styles/Home.module.css";
import { AboutMe, Contact, ProfileCard, TechStack } from "../components/";
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
                <TechStack />
                <Contact />
            </div>
        </Layout>
    );
}
