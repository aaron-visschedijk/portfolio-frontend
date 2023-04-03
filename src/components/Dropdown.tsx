import { useState } from "react";
import styles from "./styles/Dropdown.module.css";
import { Link } from "react-router-dom";

interface DropdownProps {
    paths: { path: string; name: string, classPrefix: string, key: string }[];
}


const Navbar: React.FC<DropdownProps> = ({ paths }) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => { setOpen(!open) };

    return <div className={styles.dropdown}>
        <div className={styles.bar} onClick={toggleOpen}>
            <div className={styles.bar_content}>
                <div className={styles.toggle}>=</div>
            </div>
        </div>
        <div className={styles.drop} style={open ? { height: "180px" } : { height: '0px' }}>
            {paths.map((path) => (
                <Link key={path.key} className={styles.link} to={path.path} onClick={toggleOpen}>
                    <div className={styles.linktext}>{path.name}</div>
                </Link>
            ))}
        </div>

    </div>
}

export default Navbar;