import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <Link to="/" className="header-logo">
          Amazon
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/animals">Animals</NavLink>
            </li>
            <li>
              <NavLink to="/birds">Birds</NavLink>
            </li>
            <li>
              <NavLink to="/insects">Insects</NavLink>
            </li>
            <li>
              <NavLink to="/fish">Fish</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
