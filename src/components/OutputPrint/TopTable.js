const TopTable = (props) => {
  const qr = props.qr;
  return (
    <div class="output-print-heading">
      <img class="print-page_qr" src={qr} alt="qr" />
      <h1>CFS 화물 출고증(0117)</h1>
      <table>
        <tbody>
          <tr>
            <td rowspan="2">화물구분</td>
            <td>창고위치 ( CFS2 )</td>
          </tr>
          <tr>
            <td>창고위치 ( A162 )</td>
          </tr>
          <tr>
            <td>용적</td>
            <td>8.4</td>
          </tr>
          <tr>
            <td>도착항</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TopTable;
