import image from "../../assets/img/input-print-image.png";

const Table = (props) => {
  return (
    <>
      <div className="input-print-basic-info">
        <p>입고일자: {props.enter_date}</p>
        <p>기사님연락처: </p>
        <p>차량번호: {}</p>
        <p>포워더: {props.forwarder}</p>
      </div>
      <div className="table_img-container">
        <table className="input-print-table">
          <tbody>
            <tr>
              <td>모선명</td>
              <td colspan="5">XIN XIANG XUE LAN</td>
            </tr>
            <tr>
              <td>도착항</td>
              <td colspan="5">{props.destination_port}</td>
            </tr>
            <tr>
              <th>선사</th>
              <th>화물명</th>
              <th>BL NO</th>
              <th>수량</th>
              <th>CBM</th>
              <th>중량</th>
            </tr>

            {props.products.map((product) => (
              <tr>
                <td>CKF</td>
                <td>{}</td>
                <td>{product.package}</td>
                <td>{product.quantity}</td>
                <td>{product.volume}</td>
                <td>{product.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div classNameName="input-print-image">
          <img src={image} alt="print" />
        </div>
      </div>
      <div className="input-print-signing">
        <p>
          싱기와 같이 화물을 정히 인수(인계)함<span>{props.enter_date}</span>
        </p>
        <p>
          인수(인계)자: {props.driver_name} <span>(서명)</span>
          <span>김수 확인: 민범기, 장창규</span>
        </p>
      </div>
    </>
  );
};

export default Table;
