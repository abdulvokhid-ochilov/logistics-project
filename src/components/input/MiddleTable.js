const MiddleTable = () => {
  return (
    <table className="top-table middle-table">
      <tbody>
        <tr>
          <th>선사/포워더</th>
          <td>
            <input type="text" name="forwarder" />
          </td>
          <th>도착항</th>
          <td>
            <input type="text" name="destination_port" />
          </td>
        </tr>
        <tr>
          <th>선명/황자</th>
          <td>
            <input type="text" name="황자" />
          </td>
          <th>출항일자</th>
          <td>
            <input type="date" name="departure_date" />
          </td>
        </tr>
        <tr>
          <th>부킹넘버</th>
          <td>
            <input type="text" name="booking_number" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MiddleTable;
