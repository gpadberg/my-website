import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from './images/logo.png'; 
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="left-section">
        <Link to="/" className="site-title">
          <img src={logo} alt="Home" className="logo" /> 
        </Link>
      </div>
      <div className="right-section">
        <ul>
          <CustomLink to="/pricing">projects</CustomLink>
          <CustomLink to="/about">about me</CustomLink>
        </ul>
        <a href="/fakeresume.pdf" download className="resume-button">
          resume
        </a>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
