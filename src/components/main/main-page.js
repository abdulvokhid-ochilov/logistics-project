import HeaderImg from "../../assets/img/KakaoTalk_20210529_182231447.jpg";
import FooterImg from "../../assets/img/KakaoTalk_20210531_214254921.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainPage = () => {
  return (
    <main className="main-page">
      <img className="capino-img" src={HeaderImg} alt="capino-img" />

      <div className="main-page-btns">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <a href="/output">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn mb-3 mr-3 btn-success main-page-btn"
                >
                  출고
                </Button>
              </a>
            </Col>

            <Col md="auto">
              <a href="/input">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn mb-3 mr-3 btn-success main-page-btn"
                >
                  입고
                </Button>
              </a>
            </Col>
            <Col md="auto">
              <a href="/output/outputdb">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn mb-3 mr-3 btn-success main-page-btn"
                >
                  출고 조회
                </Button>
              </a>
            </Col>
            <Col md="auto">
              <a href="/input/inputdb">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn mb-3 mr-3 btn-success main-page-btn"
                >
                  입고 조회
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-footer">
        <img className="logo-img" src={FooterImg} alt="footer" />
      </div>
    </main>
  );
};

export default MainPage;
