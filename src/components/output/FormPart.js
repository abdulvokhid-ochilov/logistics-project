import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect, useRef } from "react";
import { getProductByNum } from "../../api/index";

const FormPart = (props) => {
  const [correctValues, setCorrectValues] = useState({});

  const [product, setProduct] = useState({
    value: "",
    IsInvalid: false,
    IsValid: false,
  });
  const [company, setCompany] = useState({
    value: "",
    IsInvalid: false,
    IsValid: false,
  });
  const [amount, setAmount] = useState({
    value: "",
    IsInvalid: false,
    IsValid: false,
  });
  const [unit, setUnit] = useState({
    value: "",
    IsInvalid: false,
    IsValid: false,
  });

  const handleProduct = () => {
    let inputValue = product.value;
    let correctValue = correctValues?.["BL_NUM"] || "";
    console.log(correctValue);

    if (inputValue.length === 0) {
      setProduct({ value: inputValue, IsInvalid: false, IsValid: false });
    } else if (inputValue === correctValue) {
      setProduct({ value: inputValue, IsInvalid: false, IsValid: true });
      console.log("working");
    } else {
      setProduct({ value: inputValue, IsInvalid: true, IsValid: false });
    }
  };

  const handleCompany = () => {
    let inputValue = company.value;
    let correctValue = correctValues?.["COMPANY_NAME"] || "";
    console.log(correctValue);

    if (inputValue.length === 0) {
      setCompany({ value: inputValue, IsInvalid: false, IsValid: false });
    } else if (inputValue === correctValue) {
      setCompany({ value: inputValue, IsInvalid: false, IsValid: true });
    } else {
      setCompany({ value: inputValue, IsInvalid: true, IsValid: false });
    }
  };

  const handleUnit = () => {
    let inputValue = unit.value;
    let correctValue = correctValues?.["UNIT"] || "";
    console.log(correctValue);

    if (inputValue.length === 0) {
      setUnit({ value: inputValue, IsInvalid: false, IsValid: false });
    } else if (inputValue === correctValue) {
      setUnit({ value: inputValue, IsInvalid: false, IsValid: true });
    } else {
      setUnit({ value: inputValue, IsInvalid: true, IsValid: false });
    }
  };

  const handleAmount = () => {
    let inputValue = amount.value;
    let correctValue = correctValues?.["QUANTITY"] || "";

    console.log(correctValue);

    if (inputValue.length === 0) {
      setAmount({ value: inputValue, IsInvalid: false, IsValid: false });
    } else if (inputValue <= correctValue) {
      setAmount({ value: inputValue, IsInvalid: false, IsValid: true });
    } else {
      setAmount({ value: inputValue, IsInvalid: true, IsValid: false });
    }
  };

  const initialRender = useRef(true);
  useEffect(() => {
    const apiCall = async () => {
      const productInfo = await getProductByNum(product.value);
      console.log(productInfo);
      setCorrectValues(productInfo.data[0]);
    };
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      apiCall();
    }
  }, [product]);

  return (
    <Row key={props.key} className="mb-3">
      <Form.Group as={Col} controlId="formGridCity" hasValidation>
        <Form.Label>Product Code</Form.Label>

        <Form.Control
          required
          isValid={product.IsValid}
          isInvalid={product.IsInvalid}
          name={`${props.name}-product`}
          value={product.value}
          onChange={(e) => {
            setProduct((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
          }}
          onBlur={() => {
            handleProduct();
            handleCompany();
            handleUnit();
            handleAmount();
          }}
        />
        <Form.Control.Feedback type="invalid">
          Incorrect Input
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Correct Input
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip" hasValidation>
        <Form.Label>Company Code</Form.Label>
        <Form.Control
          required
          isValid={company.IsValid}
          isInvalid={company.IsInvalid}
          name={`${props.name}-company`}
          value={company.value}
          onChange={(e) => {
            setCompany((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
          }}
          onBlur={() => {
            handleCompany();
          }}
        />
        <Form.Control.Feedback type="invalid">
          Incorrect Input
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Correct Input
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState" hasValidation>
        <Form.Label>Unit</Form.Label>
        <Form.Select
          onChange={(e) => {
            setUnit((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
          }}
          className={unit.state}
          name={`${props.name}-unit`}
          onBlur={handleUnit}
          required
          isValid={unit.IsValid}
          isInvalid={unit.IsInvalid}
        >
          <option>kg</option>
          <option>box</option>
          <option>kg</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Incorrect Input
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Correct Input
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip" hasValidation>
        <Form.Label>Amount</Form.Label>
        <Form.Control
          required
          isValid={amount.IsValid}
          isInvalid={amount.IsInvalid}
          name={`${props.name}-amount`}
          onChange={(e) => {
            setAmount((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
          }}
          value={amount.value}
          onBlur={handleAmount}
        />
        <Form.Control.Feedback type="invalid">
          Incorrect Input
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Correct Input
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
  );
};

export default FormPart;
