import styles from './styles/HomePage.module.css'
import profile from '../profile-no-bg.png'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.title}>
            <h1 className={styles.head}>Hi! I'm <span className={styles.name}>Aaron</span></h1>
            <h1 className={styles.subtitle}>Full-Stack Developer with a Focus on Backend and a Flair for Frontend</h1>
            <div className={styles.buttons}>
                <button className={styles.projectbutton} onClick={() => navigate("/projects")}>Projects</button>
                <button className={styles.contactbutton} onClick={() => navigate("/contact")}>Contact</button>

            </div>
            </div>
            <img className={styles.image} src={profile}></img>
            
        </div>
    )
}