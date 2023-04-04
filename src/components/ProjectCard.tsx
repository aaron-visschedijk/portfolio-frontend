import ProjectTag from './ProjectTag';
import S3Image from './S3Image';
import styles from './styles/ProjectCard.module.css';


interface ProjectCardProps {
    active: boolean;
    title: string;
    image: string;
    tags: {
        name: string;
        color: string;
    }[];
}



export default function ProjectCard({ title, image, tags, active}: ProjectCardProps) {

    return <div className={active ? styles.activecard : styles.card}>
        <S3Image className={styles.image} src={image} />
        <div className={styles.data}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.tags}>
                {tags.map((tag) =>
                    <ProjectTag {...tag} />
                )}
            </div>
        </div>
    </div>
}
