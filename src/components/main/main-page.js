import HeaderImg from "../../assets/img/KakaoTalk_20210529_182231447.jpg";
import OutputButtonImg from "../../assets/img/KakaoTalk_20210531_211913798_02.png";
import InputButtonImg from "../../assets/img/KakaoTalk_20210531_211913798.png";
import OutputDBImg from "../../assets/img/KakaoTalk_20210531_211913798_03.png";
import InputDBImg from "../../assets/img/KakaoTalk_20210531_211913798_01.png";
import FooterImg from "../../assets/img/KakaoTalk_20210531_214254921.png";

const MainPage = () => {
  return (
    <main className="main-page">
      <img className="capino-img" src={HeaderImg} alt="capino-img" />

      <div className="main-page-btns">
        <a href="/output">
          <img className="btn-imgs" src={OutputButtonImg} alt="button" />
        </a>
        <a href="/input">
          <img className="btn-imgs" src={InputButtonImg} alt="button" />
        </a>
        <a href="/output/outputdb">
          <img className="btn-imgs" src={OutputDBImg} alt="button" />
        </a>
        <a href="/input/inputdb">
          <img className="btn-imgs" src={InputDBImg} alt="button" />
        </a>
      </div>
      <div className="main-footer">
        <img className="logo-img" src={FooterImg} alt="footer" />
      </div>
    </main>
  );
};

export default MainPage;
