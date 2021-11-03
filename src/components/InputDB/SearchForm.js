import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import FormPart from "./FormPart";
import React, { useState } from "react";
// import Header from "../layout/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import DatePicker from "react-bootstrap-date-picker";

const SearchForm = (props) => {
  return (
    <Container className="top-form shadow">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>성함</Form.Label>
          <Form.Control required placeholder="성함" name="name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>연락처(...부터)</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="연락처(...부터)"
            name="from_date"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>연락처(...까지)</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="연락처(...까지)"
            name="to_date"
          />
        </Form.Group>
      </Row>
    </Container>
  );
};

export default SearchForm;
