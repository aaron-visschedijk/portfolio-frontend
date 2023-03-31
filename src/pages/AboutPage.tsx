import Loader from "../components/Loader";
import S3Image from "../components/S3Image";
import { apiFetch } from "../utils";


interface About {
    content: string;
    photo: string;
}


function AboutPage() {

    return (
        <div className="about">
            <h1>About Me</h1>
            <Loader request={apiFetch<About>("/about")} fallback={<div>Loading...</div>}>
                {(data) => (
                    <div>
                        <p>{data.content}</p>
                        <S3Image src={data.photo} />
                    </div>
                )}
            </Loader>
        </div>
    );
}

export default AboutPage;