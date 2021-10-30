const OutputDBTable = () => {
  return (
    <div class="print-cont">
      <table class="data-t">
        <thead>
          <tr>
            <th>전송일자</th>
            <th>기사님 성함</th>
            <th>차량번호</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          {/* <% collections.forEach(data=> { %>
      <tr>
        <td><%= data.date.toISOString().slice(0, 10) %></td>
        <td><%= data.name %></td>
        <td><%= data.car_number %></td>
        <td><%= data.contact %></td>
      </tr>
      <% }); %> */}
        </tbody>
      </table>
    </div>
  );
};

export default OutputDBTable;
