import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
