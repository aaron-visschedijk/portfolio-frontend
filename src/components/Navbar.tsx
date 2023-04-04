import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css"
import instagram from "../instaicon.svg";
import github from "../giticon.svg";
import linkedin from "../linkedinicon.svg";

interface NavbarProps {
  paths: { path: string; name: string, classPrefix: string, key: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ paths }) => {
  return <div className={styles.navbar}>
    <div className={styles.innernav}>
      <h1 className={styles.logo}>{"<A"}<span className={styles.aron}>aron</span>{"V"}<span className={styles.isschedijk}>isschedijk</span>{">"}</h1>
      <div className={styles.navlinks}>
        {paths.map((path) => (
          <Link key={path.key} className={styles.link} to={path.path}>{path.name}</Link>
        ))}
      </div>
      <div className={styles.socials}>
        <a href={"https://www.linkedin.com/in/aaron-visschedijk-03953a146/"}><img className={styles.icon} src={linkedin} /></a>
        <a href={"https://github.com/aaron-visschedijk"}></a><img className={styles.icon} src={github} />
      </div>
    </div>
  </div>;
}

export default Navbar;