import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormPart from "./FormPart";
import React, { useState, useEffect, useRef } from "react";
import Header from "../layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { patchOutput } from "../../api/index";

function OutputForm() {
  const [numberOfRows, setNumberOfRows] = useState(1);
  const [message, setMessage] = useState();
  const inputState = {
    value: "",
    IsInvalid: false,
    IsValid: false,
  };
  const inputRef = useRef();
  const form = useRef();
  const formRows = [];

  const initialRender = useRef(true);

  for (let i = 0; i < numberOfRows; i++) {
    if (i === 0) {
      formRows.push(
        <FormPart key={i} name={`row-${i}`} state={inputState} ref={inputRef} />
      );
    } else {
      formRows.push(<FormPart key={i} name={`row-${i}`} state={inputState} />);
    }
  }

  function AddRow() {
    setNumberOfRows(numberOfRows + 1);
  }

  function RemoveRow() {
    if (numberOfRows > 1) setNumberOfRows(numberOfRows - 1);
  }

  const handleSubmit = async (event) => {
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
      company_name: company_names,
      quantity: amounts,
      unit: units,
    };

    const status = await patchOutput(outputData);

    setMessage(status);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      console.log(message);
      if (message.status === "success") {
        form.current.reset();
        setNumberOfRows(1);
        inputRef.current.cleanInput();

        toast.success(message.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (message.status === "fail") {
        toast.error(message.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }, [message]);

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
        <h1 className="page-heading">?????? ?????????</h1>
        <Form onSubmit={handleSubmit} ref={form}>
          <Container className="top-form shadow">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>????????? ??????</Form.Label>
                <Form.Control required placeholder="??????" name="name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>?????????</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="- ?????? ??????"
                  name="contact"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>????????????</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="????????????"
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
