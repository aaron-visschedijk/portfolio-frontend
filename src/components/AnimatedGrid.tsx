import { useEffect, useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import ProjectCard from "./ProjectCard";
import styles from './styles/AnimatedGrid.module.css'

interface ProjectData {
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

interface CardData {
  id: number;
  type: string;
  card: React.ReactNode;
}


const AnimatedGrid = (props: { path: string, projectData: ProjectData[] }) => {
  const path = props.path;
  const [focusId, setFocusId] = useState(parseInt(path?.toString() || "0"));
  const navigate = useNavigate();

  const data: CardData[] = props.projectData.map((item: ProjectData) => (
    [
      { id: item.id, type: "item", card: <ProjectCard title={item.title} image={item.image} tags={item.tags} /> },
      {
        id: item.id, type: "info", card: <div><h1>{item.titleLong}</h1>{item.description.split("\n").map(
          (paragraph) => <p>{paragraph}<br/></p>
        )}</div>
      },
      { id: item.id, type: "meta", card: <div>
        <p>
          {!!item.date && <><b>Date: </b>{item.date}<br/></>}
          {!!item.github && <><b>Date: </b>{item.github}<br/></>}
          {!!item.link && <><b>Link: </b><a href={item.link}>{item.linkText}</a><br/></>}
        </p>

      </div> },
    ]
  )).flat();

  const focus: (id: number) => void = (id: number) => {
    navigate('/projects/' + id);
  }

  useEffect(() => {
    setFocusId(parseInt(path?.toString() || "0"))
  }, [path])

  return (
    <div>

      <Flipper flipKey={JSON.stringify(focusId)}>

        <div className={styles.grid}>
          <Flipped inverseFlipId="list">

            <ul className={styles.content}>
              {[...data]
                .filter((item: CardData) => ((!focusId && item.type == "item") || (focusId === item.id)))
                .map(({ id, type, card }: CardData) => (
                  <Card
                    type={type}
                    id={id}
                    key={id + type}
                    className={styles[type]}
                    focus={type === "item" ? focus : () => ({})}
                    card={card}
                  />
                ))}
            </ul>
          </Flipped>
        </div>
      </Flipper>
    </div>
  );
};

export default AnimatedGrid;
