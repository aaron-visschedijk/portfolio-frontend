
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedGrid from "../components/AnimatedGrid";
import Loader from "../components/Loader";
import S3Image from "../components/S3Image";
import { apiFetch } from "../utils";

import styles from './styles/ProjectsPage.module.css';


interface Project {
    id: number;
    title: string;
    titleLong: string;
    image: string;
    tags: { name: string; color: string }[];
    description: string;
    date: string;
    link: string;
    linkText: string;
    github: string;
}


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

            <Loader request={apiFetch<Project[]>("/projects")}>
                {(data) => 
                    <AnimatedGrid path={projectId ? projectId : "0"} projectData={data} />
                }
            </Loader>

            
        </>
    );
}