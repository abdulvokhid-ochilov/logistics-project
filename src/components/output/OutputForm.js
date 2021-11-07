// import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormPart from "./FormPart";
import React, { useState } from "react";
import Header from "../layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OutputForm() {
  const [numberOfRows, setNumberOfRows] = useState(1);
  const [databaseValue, setDatabaseValue] = useState();
  const formRows = [];

  for (let i = 0; i < numberOfRows; i++) {
    formRows.push(<FormPart key={i} name={`row-${i}`} />);
  }

  function AddRow() {
    setNumberOfRows(numberOfRows + 1);
  }

  function RemoveRow() {
    if (numberOfRows > 1) setNumberOfRows(numberOfRows - 1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const company_names = [];
    const product_numbers = [];
    const units = [];
    const amounts = [];

    for (let i = 0; i < formRows.length; i++) {
      company_names.push(form[`row-${i}-company`].value);
      product_numbers.push(form[`row-${i}-product`].value);
      units.push(form[`row-${i}-unit`].value);
      amounts.push(form[`row-${i}-amount`].value);
    }

    const outputData = {
      driver_name: form.name.value,
      phone_num: form.contact.value,
      car_num: form.car_number.value,
      bl_num: product_numbers,
      com_name: company_names,
      unit: units,
      amount: amounts,
    };

    console.log(outputData);
  };
  // if (form.checkValidity() === false) {
  //   event.stopPropagation();
  // }

  //   setValidated(true);

  return (
    <>
      <Header />
      <Container>
        <h1 className="page-heading">출고 요청서</h1>
        <Form onSubmit={handleSubmit}>
          <Container className="top-form shadow">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>기사님 성함</Form.Label>
                <Form.Control required placeholder="성함" name="name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>연락처</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="- 없이 입력"
                  name="contact"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>차랑번호</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="차량번호"
                  name="car_number"
                />
              </Form.Group>
            </Row>
          </Container>
          <Container className="bottom-form shadow">
            {formRows.map((row) => row)}
          </Container>

          <div className="plus-btn-cont">
            <Button
              onClick={RemoveRow}
              variant="outline-secondary"
              className="btn mb-3 mr-3 btn-secondary"
            >
              -
            </Button>
            <Button
              onClick={AddRow}
              variant="outline-secondary"
              className="btn mb-3 mr-3 btn-secondary"
            >
              +
            </Button>
          </div>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button
                variant="primary"
                type="submit"
                className="btn mb-3 mr-3 btn-success"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default OutputForm;
