import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Header from "../layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "./SearchForm";
import InputTable from "./InputTable";
import { getInputHistory } from "../../api/index";

const InputSearchPage = () => {
  const [inputHistory, setInputHistory] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const searchData = {
      name: form.name.value,
      from_date: form.from_date.value,
      to_date: form.to_date.value,
    };

    const value = await getInputHistory(
      form.name.value,
      form.from_date.value,
      form.to_date.value
    );
    setInputHistory(value.data.data);
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="page-heading">입고 조회</h1>
        <Form onSubmit={handleSubmit}>
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

        {inputHistory.length > 0 && <InputTable data={inputHistory} />}
      </Container>
    </>
  );
};

export default InputSearchPage;
