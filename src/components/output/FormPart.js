import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { getProductByNum } from "../../api/index";

const FormPart = (props) => {
  const [correctValues, setCorrectValues] = useState({});

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
  const [unit, setUnit] = useState({
    value: "",
    state: "",
    correct: false,
  });

  const getData = async (event) => {
    console.log(product.value);

    const value = await getProductByNum(product.value);
    setCorrectValues(value.data.data[0]);
    console.log(correctValues);
  };

  const handleProduct = (event) => {
    let inputValue = event.target.value;
    let correctValue = correctValues["BL_NUM"];

    if (inputValue.length === 0) {
      setProduct({ value: inputValue, state: "", correct: false });
    } else if (inputValue === correctValue) {
      setProduct({ value: inputValue, state: "form-success", correct: true });
      console.log("working");
    } else {
      setProduct({ value: inputValue, state: "form-failure", correct: false });
    }
  };

  const handleCompany = (event) => {
    let inputValue = event.target.value;
    let correctValue = correctValues["COMPANY_NAME"];

    if (inputValue.length === 0) {
      setCompany({ value: inputValue, state: "", correct: false });
    } else if (inputValue === correctValue && product.correct) {
      setCompany({ value: inputValue, state: "form-success", correct: true });
    } else {
      setCompany({ value: inputValue, state: "form-failure", correct: false });
    }
  };

  function handleUnit(event) {
    let inputValue = event.target.value;
    let correctValue = correctValues["UNIT"];

    if (inputValue.length === 0) {
      setUnit({ value: inputValue, state: "", correct: false });
    } else if (
      inputValue === correctValue &&
      product.correct &&
      company.correct
    ) {
      setUnit({ value: inputValue, state: "form-success", correct: true });
    } else {
      setUnit({ value: inputValue, state: "form-failure", correct: false });
    }
  }

  function handleAmount(event) {
    let inputValue = event.target.value;
    let correctValue = correctValues["QUANTITY"];

    if (inputValue.length === 0) {
      setAmount({ value: inputValue, state: "", correct: false });
    } else if (
      inputValue <= correctValue &&
      product.correct &&
      company.correct &&
      unit.correct
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
          onBlur={getData}
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
          onFocus={() => {
            setTimeout(() => {
              getData();
            }, 1000);
          }}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Unit</Form.Label>
        <Form.Select
          defaultValue="Choose..."
          className={unit.state}
          name={`${props.name}-unit`}
          onChange={handleUnit}
        >
          required
          <option>kg</option>
          <option>box</option>
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
