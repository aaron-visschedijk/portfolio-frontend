import { Link } from "react-router-dom";

interface NavbarProps {
  paths: { path: string; name: string, classPrefix: string, key: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ paths }) => {
  return <div className="navbar">
    {paths.map((path) => (
      <Link key={path.key} className={path.classPrefix+"__link"} to={path.path}>{path.name}</Link>
    ))}
  </div>;
}

export default Navbar;