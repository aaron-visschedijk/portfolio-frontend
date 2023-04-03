import ProjectTag from './ProjectTag';
import S3Image from './S3Image';
import styles from './styles/ProjectCard.module.css';


interface ProjectCardProps {
    title: string;
    image: string;
    tags: {
        name: string;
        color: string;
    }[];
}



export default function ProjectCard({ title: name, image, tags }: ProjectCardProps) {


    return <div className={styles.project}><div className={styles.card}>
        <S3Image className={styles.image} src={image} />
            <div className={styles.data}>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.tags}>
                    {tags.map((tag) =>
                        <ProjectTag {...tag} />
                    )}
                </div>
            </div>
        </div>
    </div>

}
