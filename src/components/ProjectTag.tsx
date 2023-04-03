import styles from './styles/ProjectTag.module.css'

interface TagProps {
    name: string;
    color: string;
}

export default function ProjectTag({ name, color }: TagProps) {
    return <div className={styles.tag}>
        <div className={styles.dot} style={{background: color}}></div>
        <div className={styles.name}>{name}</div>
    </div>
}