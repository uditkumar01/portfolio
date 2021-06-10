import { ProjectCards } from "../../Components";
import { Layout } from "../../Components/";
import styles from "../../styles/Project.module.css";

export default function Projects() {
    return (
        <Layout>
            <div className={styles.projectContainer}>
                <ProjectCards />
            </div>
        </Layout>
    );
}
