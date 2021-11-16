import { useParams } from "react-router-dom";
import { getInputQRCode } from "../../api/index";
import Table from "./Table";
import { Ring } from "react-awesome-spinners";
import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ReactToPrint from "react-to-print";

const InputPrint = (props) => {
  const [data, setData] = useState();
  const { id } = useParams();
  let printRef = useRef();

  useEffect(() => {
    const apiCall = async () => {
      const qr = await getInputQRCode(id);
      setData(qr.data);
    };

    apiCall();
  }, [id]);

  console.log(data);
  return data ? (
    <>
      <Container className="print-page">
        <div ref={(el) => (printRef = el)} className="print-container">
          <div className="input-print-container">
            <div className="input-print-heading">
              <p>[보관용]</p>
              <h1>
                CFS 화물 입고증
                {new Date(
                  data.transaction_info.enter_date
                ).toLocaleDateString()}
                -0014 )
              </h1>
            </div>
            <Table
              enter_date={new Date(
                data.transaction_info.enter_date
              ).toLocaleDateString()}
              forwarder={data.transaction_info.forwarder}
              destination_port={data.transaction_info.destination_port}
              products={data.product_info}
              driver_name={data.transaction_info.driver_name}
            />
          </div>
          <div className="input-print-middle">
            <p className="input-print-middle_text">원신한무역</p>
            <div className="input-print-middle_inner">
              <img
                className="input-print-middle_img"
                src={data.transaction_info.qr}
                alt="qr"
              />
            </div>
          </div>
          <div className="input-print-container">
            <div className="input-print-heading">
              <p>[차량용]</p>
              <h1>
                CFS 화물 입고증
                {new Date(
                  data.transaction_info.enter_date
                ).toLocaleDateString()}
                -0014 )
              </h1>
            </div>
            <Table
              enter_date={new Date(
                data.transaction_info.enter_date
              ).toLocaleDateString()}
              forwarder={data.transaction_info.forwarder}
              destination_port={data.transaction_info.destination_port}
              products={data.product_info}
              driver_name={data.transaction_info.driver_name}
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

export default InputPrint;
