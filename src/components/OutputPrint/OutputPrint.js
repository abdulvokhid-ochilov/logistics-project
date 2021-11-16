import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getOutputQRCode } from "../../api/index";
import TopTable from "./TopTable";
import BottomTable from "./BottomTable";
import { Ring } from "react-awesome-spinners";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ReactToPrint from "react-to-print";

const OutputPrint = (props) => {
  const [data, setData] = useState();
  const { id } = useParams();
  let printRef = useRef();

  useEffect(() => {
    const apiCall = async () => {
      const qr = await getOutputQRCode(id);
      setData(qr.data);
    };

    apiCall();
  }, [id]);

  console.log(data);

  return data ? (
    <>
      <Container className="print-page">
        <div ref={(el) => (printRef = el)} className="print-container">
          <div className="output-print-container">
            <TopTable qr={data.transaction_info.qr} />
            <p>[보관용]</p>
            <BottomTable
              products={data.product_info}
              driver_name={data.transaction_info.driver_name}
              car_num={data.transaction_info.car_num}
              phone_num={data.transaction_info.phone_num}
            />
          </div>

          <div className="output-print-container">
            <TopTable qr={data.transaction_info.qr} />
            <p>[검수용]</p>
            <BottomTable
              products={data.product_info}
              driver_name={data.transaction_info.driver_name}
              car_num={data.transaction_info.car_num}
              phone_num={data.transaction_info.phone_num}
            />
          </div>

          <div className="output-print-container">
            <TopTable qr={data.transaction_info.qr} />
            <p>[차량용]</p>
            <BottomTable
              products={data.product_info}
              driver_name={data.transaction_info.driver_name}
              car_num={data.transaction_info.car_num}
              phone_num={data.transaction_info.phone_num}
            />
          </div>
        </div>
      </Container>

      <div className="print-button-cont">
        <ReactToPrint
          trigger={() => (
            <Button
              variant="primary"
              type="submit"
              className="btn mb-3 mr-3 btn-success"
            >
              출고증인쇄
            </Button>
          )}
          content={() => printRef}
        />
      </div>
    </>
  ) : (
    <Container className="loading-container">
      <Ring />
    </Container>
  );
};

export default OutputPrint;
