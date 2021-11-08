import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormPart from "./FormPart";
import React, { useState } from "react";
import Header from "../layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContactPart from "./FormContactPart";
import { postInput } from "../../api/index";

function InputForm() {
  const [numberOfRows, setNumberOfRows] = useState(1);
  
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const company_names = [];
    const amount = [];
    const package_ = [];
    const weight = [];
    const volume = [];

    for (let i = 0; i < formRows.length; i++) {
      company_names.push(form[`row-${i}-shipper`].value);
      package_.push(form[`row-${i}-packaging`].value);
      amount.push(form[`row-${i}-quantity`].value);
      weight.push(form[`row-${i}-weight`].value);
      volume.push(form[`row-${i}-volume`].value);
    }

    const inputData = {
      driver_name: form.name.value,
      phone_num: form.contact.value,
      car_num: form.car_number.value,
      forwarder: form.forwarder.value,
      destination_port: form.departure_date.value,
      sonmyong: form.hwangja.value,
      booking_num: form.booking_number.value,
      departure_date: form.departure_date.value,
      company_name: company_names,
      quantity: amount,
      package: package_,
      weight: weight,
      volume: volume,
    };

    console.log(inputData);

    // const status = await postInput(inputData);

    "success" === "success"
      ? toast.success("Data is successfully saved!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : toast.error("Something went wrong!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

    event.currentTarget.reset();
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
        <h1 className="page-heading">입고 요청서</h1>
        <Form onSubmit={handleSubmit}>
          <FormContactPart />

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

export default InputForm;
