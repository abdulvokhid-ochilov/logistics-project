const TopTable = () => {
  return (
    <table className="top-table">
      <tbody>
        <tr>
          <th> 기사님 성함 </th>
          <td>
            <input required type="text" placeholder="성함" name="name" />
          </td>
          <th> 연락처 </th>
          <td>
            <td>
              <input
                required
                type="text"
                placeholder="- 없이 입력"
                name="contact"
              />
            </td>
          </td>
        </tr>
        <tr>
          <th> 차랑번호 </th>
          <td>
            <input
              required
              type="text"
              placeholder="차량번호"
              name="car_number"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TopTable;
