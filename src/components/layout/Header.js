import Logo from "../../assets/img/KakaoTalk_20210531_214254921.png";

const Header = () => {
  return (
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="index.html">
            <img className="nav-logo-img" src={Logo} alt="" />
          </a>
        </h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" href="/">
                MAIN
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.pathname === "/output" && "active"
                }`}
                href="/output"
              >
                출고
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.pathname === "/input" && "active"
                }`}
                href="/input"
              >
                입고
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.pathname === "/output/outputdb" && "active"
                }`}
                href="/output/outputdb"
              >
                출고 조회
              </a>
            </li>
            <li>
              <a
                className={`nav-link scrollto ${
                  window.location.pathname === "/input/inputdb" && "active"
                }`}
                href="/input/inputdb"
              >
                입고 조회
              </a>
            </li>
            {/* <li>
              <a
                className={`nav-link scrollto ${
                  window.location.pathname === "/guide" && "active"
                }`}
                href="/guide"
              >
                QR 사용법
              </a>
            </li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
