import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect, useRef } from "react";
import Header from "../layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "./SearchForm";
import OutputTable from "./OutputTable";
import { Ring } from "react-awesome-spinners";
import { getOutputHistory, getDefaultOutputHistory } from "../../api/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OutputSearchPage = () => {
  const [outputHistory, setOutputHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialRender = useRef(true);
  useEffect(() => {
    const apiCall = async () => {
      const searchInfo = await getDefaultOutputHistory();
      console.log(searchInfo);
      setOutputHistory(searchInfo.data);
      setLoading(false);
    };
    if (initialRender.current) {
      initialRender.current = false;
      apiCall();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setLoading(true);
    const value = await getOutputHistory(
      form.name.value,
      form.from_date.value,
      form.to_date.value
    );
    console.log(value.data);
    setOutputHistory(value.data);
    if (outputHistory.length === 0) {
      toast.error("Data has not been found in the database", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container>
        <h1 className="page-heading">출고 조회</h1>
        <Form onSubmit={handleSubmit} id="output-search">
          <SearchForm />

          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button
                variant="primary"
                type="submit"
                className="btn mb-3 mr-3 btn-success"
              >
                Search
              </Button>
            </Col>
          </Row>
        </Form>

        {loading ? (
          <Row className="justify-content-md-center spinner">
            <Col md="auto">
              <Ring />
            </Col>
          </Row>
        ) : outputHistory.length > 0 ? (
          <OutputTable data={outputHistory} />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default OutputSearchPage;
