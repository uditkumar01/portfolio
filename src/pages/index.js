import { Layout } from "../Components/";
import styles from "../styles/Home.module.css";
import { AboutMe, Contact, ProfileCard } from "../Components/";

export default function Home() {
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
