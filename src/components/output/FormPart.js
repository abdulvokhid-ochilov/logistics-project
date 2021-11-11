import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect, useRef, useCallback } from "react";
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

  // const getData = async (event) => {
  //   console.log(product.value);

  //   const value = await getProductByNum(product.value);
  //   setCorrectValues(value.data.data[0]);
  //   console.log(correctValues);
  // };
  const handleProduct = () => {
    let inputValue = product.value;
    let correctValue = correctValues?.["BL_NUM"] || "";
    console.log(correctValue);

    if (inputValue.length === 0) {
      setProduct({ value: inputValue, state: "", correct: false });
    } else if (inputValue === correctValue) {
      setProduct({ value: inputValue, state: "form-success", correct: true });
      console.log("working");
    } else {
      setProduct({ value: inputValue, state: "form-failure", correct: false });
    }
  };

  const handleCompany = useCallback(() => {
    let inputValue = company.value;
    let correctValue = correctValues?.["COMPANY_NAME"] || "";
    console.log(correctValue);

    if (inputValue.length === 0) {
      setCompany({ value: inputValue, state: "", correct: false });
    } else if (inputValue === correctValue) {
      setCompany({ value: inputValue, state: "form-success", correct: true });
    } else {
      setCompany({ value: inputValue, state: "form-failure", correct: false });
    }
  }, [correctValues, company]);

  const handleUnit = useCallback(() => {
    let inputValue = unit.value;
    let correctValue = correctValues?.["UNIT"] || "";
    console.log(correctValue);

    if (inputValue.length === 0) {
      setUnit({ value: inputValue, state: "", correct: false });
    } else if (inputValue === correctValue) {
      setUnit({ value: inputValue, state: "form-success", correct: true });
    } else {
      setUnit({ value: inputValue, state: "form-failure", correct: false });
    }
  }, [correctValues, unit]);

  const handleAmount = useCallback(() => {
    let inputValue = amount.value;
    let correctValue = correctValues?.["QUANTITY"] || "";

    console.log(correctValue);

    if (inputValue.length === 0) {
      setAmount({ value: inputValue, state: "", correct: false });
    } else if (inputValue <= correctValue) {
      setAmount({ value: inputValue, state: "form-success", correct: true });
    } else {
      setAmount({ value: inputValue, state: "form-failure", correct: false });
    }
  }, [correctValues, amount]);

  const initialRender = useRef(true);
  useEffect(() => {
    const apiCall = async () => {
      const productInfo = await getProductByNum(product.value);
      console.log(productInfo);
      setCorrectValues(productInfo.data[0]);
      // handleProduct(product, setProduct, correctValues);
      // handleCompany();
      // handleUnit();
      // handleAmount();
    };
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      apiCall();
      // handleProduct();
    }
  }, [product]);

  // useEffect(() => {
  //   handleProduct(product, setProduct, correctValues);
  // }, [product, setProduct, correctValues]);

  return (
    <Row key={props.key} className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Product Code</Form.Label>
        <Form.Control
          required
          name={`${props.name}-product`}
          value={product.value}
          onChange={(e) => {
            setProduct((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
            // handleProduct();
          }}
          className={product.state}
          onBlur={() => {
            handleProduct();
            handleCompany();
            handleUnit();
            handleAmount();
          }}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Company Code</Form.Label>
        <Form.Control
          required
          name={`${props.name}-company`}
          value={company.value}
          onChange={(e) => {
            setCompany((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
          }}
          className={company.state}
          onBlur={() => {
            handleCompany();
          }}
          // onFocus={() => {
          //   setTimeout(() => {
          //     getData();
          //   }, 1000);
          // }}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Unit</Form.Label>
        <Form.Select
          defaultValue="Choose..."
          onChange={(e) => {
            setUnit((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
          }}
          className={unit.state}
          name={`${props.name}-unit`}
          onBlur={handleUnit}
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
          onChange={(e) => {
            setAmount((prevValue) => ({
              ...prevValue,
              value: e.target.value,
            }));
          }}
          className={amount.state}
          value={amount.value}
          onBlur={handleAmount}
        />
      </Form.Group>
    </Row>
  );
};

export default FormPart;
