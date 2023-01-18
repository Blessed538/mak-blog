const Header = () => {
  return (
    <header>
      <div className="container">
        <a>
          <svg
            role="img"
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="#FF6719"
            stroke-width="1"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
              className="nav-logo-icon"
          >
            <g>
              <title></title>
              <path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path>
              <path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path>
              <path d="M20.9991 0H0V2.83603H20.9991V0Z"></path>
            </g>
          </svg>
        </a>
        <div className="container-main-menu">
          <ul className="main-menu-link" id="main-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
