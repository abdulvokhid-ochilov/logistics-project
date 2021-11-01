import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const FormPart = (props) => {
  const [product, setProduct] = useState({
    value: "",
    state: "",
    correct: false,
  });
  const [company, setCompany] = useState({
    value: "",
    state: "",
    correct: false,
  });
  const [amount, setAmount] = useState({
    value: "",
    state: "",
    correct: false,
  });

  function handleProduct(event) {
    let inputValue = event.target.value;
    let correctValue = "123";

    if (inputValue.length === 0) {
      setProduct({ value: inputValue, state: "", correct: false });
    } else if (inputValue === correctValue) {
      setProduct({ value: inputValue, state: "form-success", correct: true });
    } else {
      setProduct({ value: inputValue, state: "form-failure", correct: false });
    }
  }

  function handleCompany(event) {
    let inputValue = event.target.value;
    let correctValue = "1234";

    if (inputValue.length === 0) {
      setCompany({ value: inputValue, state: "", correct: false });
    } else if (inputValue === correctValue && product.correct) {
      setCompany({ value: inputValue, state: "form-success", correct: true });
    } else {
      setCompany({ value: inputValue, state: "form-failure", correct: false });
    }
  }

  function handleAmount(event) {
    let inputValue = event.target.value;
    let correctValue = "50";

    if (inputValue.length === 0) {
      setAmount({ value: inputValue, state: "", correct: false });
    } else if (
      inputValue <= correctValue &&
      product.correct &&
      company.correct
    ) {
      setAmount({ value: inputValue, state: "form-success", correct: true });
    } else {
      setAmount({ value: inputValue, state: "form-failure", correct: false });
    }
  }

  return (
    <Row key={props.key} className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Product Code</Form.Label>
        <Form.Control
          required
          name={`${props.name}-product`}
          className={product.state}
          value={product.value}
          onChange={handleProduct}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Company Code</Form.Label>
        <Form.Control
          required
          name={`${props.name}-company`}
          className={company.state}
          value={company.value}
          onChange={handleCompany}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Unit</Form.Label>
        <Form.Select
          defaultValue="Choose..."
          className={"form-control"}
          name={`${props.name}-unit`}
        >
          required
          {/* <option>Choose...</option> */}
          <option>kg</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          required
          name={`${props.name}-amount`}
          className={amount.state}
          value={amount.value}
          onChange={handleAmount}
        />
      </Form.Group>
    </Row>
  );
};

export default FormPart;
