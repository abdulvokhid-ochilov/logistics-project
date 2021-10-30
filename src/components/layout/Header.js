import Logo from "../../assets/img/KakaoTalk_20210531_214254921.png";

const Header = () => {
  return (
    <header className="nav output-color">
      <a href="/main">
        <img className="nav-logo-img" src={Logo} alt="" />
      </a>
      <ul className="nav-list">
        <li>
          <a href="/" className="nav-link input-hov">
            MAIN
          </a>
        </li>
        <li>
          <a href="/output" className="nav-link output-hov  output-link">
            출고
          </a>
        </li>
        <li>
          <a href="/input" className="nav-link input-link input-hov">
            입고
          </a>
        </li>
        <li>
          <a
            href="/output/outputdb"
            className="nav-link output-hov outputdb-link"
          >
            출고 조회
          </a>
        </li>
        <li>
          <a href="/input/inputdb" className="nav-link input-hov inputdb-link">
            입고 조회
          </a>
        </li>
        <li>
          <a href="/guide" className="nav-link output-hov guide-link">
            QR 사용법
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
