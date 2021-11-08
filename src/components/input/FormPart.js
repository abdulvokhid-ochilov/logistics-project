import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormPart = (props) => {
  return (
    <Row key={props.key} className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>화주명(상호)</Form.Label>
        <Form.Control required name={`${props.name}-shipper`} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>포장규격</Form.Label>
        <Form.Select
          defaultValue="Choose..."
          className={"form-control"}
          name={`${props.name}-packaging`}
        >
          required
          <option>BOX</option>
          <option>PALLET</option>
          <option>FABRIC</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>입고수량</Form.Label>
        <Form.Control required name={`${props.name}-quantity`} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>중량(kg)</Form.Label>
        <Form.Control required name={`${props.name}-weight`} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>용적(cbm)</Form.Label>
        <Form.Control required name={`${props.name}-volume`} />
      </Form.Group>
    </Row>
  );
};

export default FormPart;
