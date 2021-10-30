import HeaderImg from "../../assets/img/KakaoTalk_20210529_182231447.jpg";
import OutputButtonImg from "../../assets/img/KakaoTalk_20210531_211913798_02.png";
import InputButtonImg from "../../assets/img/KakaoTalk_20210531_211913798.png";
import OutputDBImg from "../../assets/img/KakaoTalk_20210531_211913798_03.png";
import InputDBImg from "../../assets/img/KakaoTalk_20210531_211913798_01.png";
import FooterImg from "../../assets/img/KakaoTalk_20210531_214254921.png";

const MainPage = () => {
  return (
    <main class="main-page">
      <img class="capino-img" src={HeaderImg} alt="capino-img" />

      <div class="main-page-btns">
        <a href="/output">
          <img class="btn-imgs" src={OutputButtonImg} alt="button" />
        </a>
        <a href="/input">
          <img class="btn-imgs" src={InputButtonImg} alt="button" />
        </a>
        <a href="/output/outputdb">
          <img class="btn-imgs" src={OutputDBImg} alt="button" />
        </a>
        <a href="/input/inputdb">
          <img class="btn-imgs" src={InputDBImg} alt="button" />
        </a>
      </div>
      <div class="main-footer">
        <img class="logo-img" src={FooterImg} alt="footer" />
      </div>
    </main>
  );
};

export default MainPage;
