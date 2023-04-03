import { useParams } from "react-router-dom";


export default function ProjectPage() {
    const { projectId } = useParams();

    return (
        <div>
            <h1 className="pagetitle">{projectId}</h1>
        </div>
    )
}