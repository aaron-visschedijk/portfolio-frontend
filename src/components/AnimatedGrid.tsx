import { useEffect, useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import ProjectCard from "./ProjectCard";
import styles from './styles/AnimatedGrid.module.css'

interface ProjectData {
  id: number;
  name: string;
  image: string;
  tags: { name: string; color: string }[];
}

const projectdata: ProjectData[] = [{ "id": 8, "name": "ClipWidgets", "image": "clipwidgets2.png", "tags": [{ "name": "3D printing", "color": "#FF6422" }] }, { "id": 7, "name": "Portfolio Frontend", "image": "portfolio.png", "tags": [{ "name": "React", "color": "#2B98FF" }, { "name": "Typescript", "color": "#4550FF" }] }, { "id": 6, "name": "This portfolio", "image": "visaphoto.jpeg", "tags": [{ "name": "Python", "color": "#FFD00E" }, { "name": "Rust", "color": "#FF6C1C" }] }, { "id": 3, "name": "test", "image": "profile.jpeg", "tags": [] }]

interface CardData {
  id: number;
  type: string;
  card: React.ReactNode;
}


const data: CardData[] = projectdata.map((item: ProjectData) => (
  [
    { id: item.id, type: "item", card: <ProjectCard {...item} /> },
    { id: item.id, type: "info", card: <div><h1>Title</h1> <p>Long description</p></div> },
    { id: item.id, type: "meta", card: <div><b>Data:</b> 13-10-1996</div> },
  ]
)).flat();


const AnimatedGrid = (props: any) => {
  const path = props.path;
  const [focusId, setFocusId] = useState(parseInt(path?.toString() || "0"));
  const navigate = useNavigate();



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
