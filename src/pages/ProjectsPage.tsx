
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedGrid from "../components/AnimatedGrid";

import styles from './styles/ProjectsPage.module.css';

export default function ProjectsPage() {
    const { projectId } = useParams();
    const [inFocus, setInFocus] = useState(!!projectId);
    const navigate = useNavigate();

    useEffect (() => {
        console.log("path changed: " + projectId);
        setInFocus(!!projectId);
    }, [projectId])
            
    
    return (
        <>
            <button disabled={!inFocus} className={styles.header} onClick={() => {
                navigate('/projects');
              }}>
                <h1 className={styles.arrow}> {"<"} </h1>
                <h1 className={"pagetitle " + {projectId}}>Projects</h1>
            </button>

            <AnimatedGrid path={projectId ? projectId : "0"} />
        </>
    );
}