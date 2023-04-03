import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css"

interface NavbarProps {
  paths: { path: string; name: string, classPrefix: string, key: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ paths }) => {
  return <div className={styles.navbar}>
    <div className={styles.innernav}>
      <h1>{"<AV>"}</h1>
      <div className={styles.navlinks}>
        {paths.map((path) => (
          <Link key={path.key} className={styles.link} to={path.path}>{path.name}</Link>
        ))}
      </div>
      <h1>O</h1>
    </div>
  </div>;
}

export default Navbar;