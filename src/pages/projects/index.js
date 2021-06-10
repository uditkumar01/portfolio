import { useEffect } from "react";
import { ProjectCards } from "../../Components";
import { Layout } from "../../Components/";
import styles from "../../styles/Project.module.css";

export default function Projects() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <Layout>
            <div className={styles.projectContainer}>
                <ProjectCards />
            </div>
        </Layout>
    );
}
