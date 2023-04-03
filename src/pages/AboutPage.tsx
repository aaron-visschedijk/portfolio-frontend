import Loader from "../components/Loader";
import S3Image from "../components/S3Image";
import { apiFetch } from "../utils";
import styles from './styles/AboutPage.module.css';


interface About {
    content: string;
    photo: string;
}


function AboutPage() {

    return (
        <div>
            <h1 className="pagetitle">About Me</h1>

            <Loader request={apiFetch<About>("/about")}>
                {(data) => {
                    const parahraphs = data.content.split("\n")
                        .map((paragraph) => <p>{paragraph}</p>);
                        
                    return (<div className={styles.about}>
                        <div className={styles.bio}>
                            {parahraphs}
                        </div>
                        <S3Image className={styles.image} src={data.photo} />
                    </div>);
                    }
                }
            </Loader>
        </div>
    );
}

export default AboutPage;