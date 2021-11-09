import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOutputQRCode } from "../../api/index";
import TopTable from "./TopTable";
import BottomTable from "./BottomTable";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";

const OutputPrint = (props) => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const apiCall = async () => {
      const qr = await getOutputQRCode(id);
      setData(qr.data);
      // console.log(qr);
    };

    apiCall();
  }, [id]);

  console.log(data);

  return data ? (
    <>
      <div class="print-container">
        <div class="output-print-container">
          <TopTable qr={data.transaction_info.qr} />
          <p>[보관용]</p>
          <BottomTable
            products={data.product_info}
            driver_name={data.transaction_info.driver_name}
            car_num={data.transaction_info.car_num}
            phone_num={data.transaction_info.phone_num}
          />
        </div>

        <div class="output-print-container">
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
      {/* <div class="print-btn-container">
        <button class="print-btn">출고증인쇄</button>
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

export default OutputPrint;
