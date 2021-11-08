const BottomTable = (props) => {
  return (
    <table className="ouput-print-table">
      <thead>
        <tr>
          <th>입고일자</th>
          <th>포워더</th>
          <th>화주명</th>
          <th>BL No</th>
          <th>품명</th>
          <th>수량</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <tr>
            <td>{new Date(product.enter_date).toLocaleDateString()}</td>
            <td>{product.forwarder}</td>
            <td>{product.company_name}</td>
            <td>{product.bl_num}</td>
            <td>{product.type}</td>
            <td>{/*product.quantity*/}</td>
            <td></td>
          </tr>
        ))}
        <tr>
          <td>관세사</td>
          <td colspan="3">{props.driver_name}</td>
          <td colspan="3" rowspan="2"></td>
        </tr>
        <tr>
          <td>차랑번호</td>
          <td colspan="3">{props.car_num}</td>
        </tr>
        <tr>
          <td>기사연락처</td>
          <td colspan="3">{props.phone_num}</td>
          <td>담당자</td>
          <td>지게차기사</td>
          <td>작업자</td>
        </tr>
        <tr>
          <td>인수(인계)자</td>
          <td colspan="3">염혜정</td>
          <td>김재범</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default BottomTable;
