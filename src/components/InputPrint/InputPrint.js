import { useParams } from "react-router-dom";
import { getInputQRCode } from "../../api/index";
import Table from "./Table";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import { useState, useEffect } from "react";

const InputPrint = (props) => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const apiCall = async () => {
      const qr = await getInputQRCode(id);
      setData(qr.data);
      // console.log(qr);
    };

    apiCall();
  }, [id]);

  console.log(data);
  return data ? (
    <>
      <div className="print-container">
        <div className="input-print-container">
          <div className="input-print-heading">
            <p>[보관용]</p>
            <h1>
              CFS 화물 입고증
              {new Date(data.transaction_info.enter_date).toLocaleDateString()}
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
              {new Date(data.transaction_info.enter_date).toLocaleDateString()}
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

      {/* <div className="print-btn-container">
        <button className="print-btn">출고증인쇄</button>
      </div> */}
    </>
  ) : (
    <Hypnosis
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
      }}
    />
  );
};

export default InputPrint;
