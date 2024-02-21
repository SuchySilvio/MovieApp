import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/HeaderNav.scss";

const HeaderNav = () => {
  // State to manage menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to close menu on window resize if menu is open
  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen && window.innerWidth >= 960) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  // Effect to handle body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // JSX for header/navigation component
  return (
    <header
      className={`${isMenuOpen ? "expanded" : ""}`}
    >
      {/* Hamburger menu button */}
      <button
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-menu-content" tabIndex="-1">
          <span className="sr-only">Menu</span>
          <span className="bar" id="bar1"></span>
          <span className="bar" id="bar2"></span>
          <span className="bar" id="bar3"></span>
        </span>
      </button>

      {/* Site logo */}
      <Link className={`logo ${isMenuOpen ? "hide" : ""}`} to={'/'} title="Return to Home">
        <img src="images/logo.svg" alt="site-logo"></img>
      </Link>

      {/* Main navigation */}
      <nav id="main-navigation" className={isMenuOpen ? "show" : ""}>
        <ul>
          {/* Home link */}
          <li className="main-navigation-li">
            <Link
              className="main-navigation-link"
              to={'/'}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          {/* About link */}
          <li className="main-navigation-li">
            <Link
              className="main-navigation-link"
              to={'/about'}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          {/* Favorites link */}
          <li className="main-navigation-li">
            <Link
              className="main-navigation-link"
              to={'/favorites'}
              onClick={closeMenu}
            >
              Favorites
            </Link>
          </li>

          {/* Watch List link */}
          <li className="main-navigation-li">
            <Link
              className="main-navigation-link"
              to={'/watchlist'}
              onClick={closeMenu}
            >
              Watch List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Export HeaderNav component
export default HeaderNav;
