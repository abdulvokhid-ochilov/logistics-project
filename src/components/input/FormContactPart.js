import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormContactPart = (props) => {
  return (
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

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>선사/포워더</Form.Label>
          <Form.Control required placeholder="선사/포워더" name="forwarder" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>도착항</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="도착항"
            name="destination_port"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>선명/황자</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="선명/황자"
            name="hwangja"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>부킹넘버</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="부킹넘버"
            name="booking_number"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>출항일자</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="출항일자"
            name="departure_date"
          />
        </Form.Group>
      </Row>
    </Container>
  );
};

export default FormContactPart;
