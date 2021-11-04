const BottomTable = (props) => {
  const data = {
    message: "success",
    data: {
      transaction_info: {
        driver_name: "홍길동",
        phone_num: "01033721707",
        car_num: "02허 9757",
        output_date: "2021-11-03T02:39:36.000Z",
        qr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATfSURBVO3BQY4bSRAEwfAC//9lXx3zVECjcyjNIszwj1QtOaladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhZ98hKQb1IzAblRMwG5UTMB+SY1E5BvUvPGSdWik6pFJ1WLPlmmZhOQbwLyhJobIJOaN9RsArLppGrRSdWik6pFn/wwIE+oeULNBGQCMqm5AfIEkEnNE0AmNU8AeULNTzqpWnRSteikatEnvxyQSc0TQCY1N0AmNROQSc0EZFLzf3JSteikatFJ1aJPfjk1N0Bu1ExAbtRMQG6A3ACZ1PxmJ1WLTqoWnVQt+uSHqfkmIJOaGyCTmgnIBORGzQTkRs0bav4lJ1WLTqoWnVQt+mQZkG8CMqmZgExq3lAzAXlCzQRkUnMD5F92UrXopGrRSdWiT15S8y9T8wSQGyCTmgnIJjW/yUnVopOqRSdViz55CcikZgJyo2YC8oSaGyCTmknNBORGzRtAngAyqbkBMqmZgNyoeeOkatFJ1aKTqkWfLANyo2YCcqPmJwGZ1Lyh5gbIpGYCcgPkRs2NmgnIppOqRSdVi06qFn3ykpobIG8AmdQ8oWYCMqm5AXKjZgJyo2YCMqmZgNyouQFyo2bTSdWik6pFJ1WLPvkyIDdqboBMaiYgk5pJzQTkCTUTkEnNDZBJzRtAbtTcAJnUvHFSteikatFJ1SL8Iy8AeULNBGRSMwGZ1NwAeULNG0Bu1NwAmdS8AeRGzU86qVp0UrXopGoR/pEXgExqJiBvqLkB8oSaCciNmgnIT1IzAZnUvAHkRs0bJ1WLTqoWnVQt+mQZkBs1TwCZ1NyomYBMQCY1N0CeUHMDZFIzAZnUTEAmNROQv+mkatFJ1aKTqkX4RxYBmdTcAJnU3ACZ1ExAbtRMQG7U3ACZ1ExAJjVPAJnUTEAmNTdAJjWbTqoWnVQtOqla9MkyNROQN4BMaiYgN2qeUHMD5CcBmdRMQP5lJ1WLTqoWnVQt+mQZkEnNBOQJNW8AmdRMaiYgk5pJzQTkb1JzA+SbTqoWnVQtOqla9MlLQCY1N2qeAPKEmhsgN2o2qbkBsgnIjZqfdFK16KRq0UnVok9eUvMEkBs1k5oJyKRmAjKpuVHzBJBJzQRkE5An1ExAvumkatFJ1aKTqkWfLANyo+YGyI2aCcgTaiYgN2omNROQvwnIv+SkatFJ1aKTqkX4R34xIN+k5g0gN2qeALJJzRsnVYtOqhadVC365CUg36Tmm9RMQL4JyKTmCTUTkEnNppOqRSdVi06qFn2yTM0mIG+omYBMat5Q8wSQJ9Q8oeYJIJOaN06qFp1ULTqpWvTJDwPyhJon1LwBZFIzAZnUTECeUDMBmYBsAjKpmYBsOqladFK16KRq0Se/HJAbNZOaN4BMat5QMwGZ1ExAboBMaiYgk5pNJ1WLTqoWnVQt+uR/DsikZgJyo+YGyN+kZgJyo2YCMql546Rq0UnVopOqRZ/8MDU/Sc0TQCY1N0Bu1DwB5EbNTwIyqdl0UrXopGrRSdWiT5YB+SYgk5oJyKRmAjKpuVEzAblRM6mZgDyhZgIyqfmbTqoWnVQtOqlahH+kaslJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pFJ1WLTqoWnVQtOqladFK16D+zLD5GRwQ+0gAAAABJRU5ErkJggg==",
      },
      product_info: [
        {
          bl_num: "ABCD024277300006J",
          company_name: "Samsung",
          forwarder: "지티지",
          type: "INFLATABLE",
          unit: "box",
          enter_date: "2021-05-26T00:00:00.000Z",
        },
        {
          bl_num: "BCDA024277300006J",
          company_name: "Samsung chemical",
          forwarder: "지티지",
          type: "INFLATABLE",
          unit: "kg",
          enter_date: "2021-05-27T00:00:00.000Z",
        },
        {
          bl_num: "HSLI024277300006J",
          company_name: "YUJIN INTERNATIONAL",
          forwarder: "지티지",
          type: "INFLATABLE",
          unit: "box",
          enter_date: "2021-05-25T00:00:00.000Z",
        },
      ],
    },
  };

  return (
    <table class="ouput-print-table">
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
        {/* <% data.client.forEach((el, i)=>{ %> */}
        <tr>
          <td>
            {/* <%= date.getFullYear()%>.<%=date.getMonth() +1 %>.<%= date.getDate()%> */}
          </td>
          <td></td>
          <td>{/*<%= el %>*/}</td>
          <td>{/*<%=data.bl_number[i]%>*/}</td>
          <td></td>
          <td>{/*<%=data.quantity[i]%>*/}</td>
          <td></td>
        </tr>
        {/* <% }) %> */}
        <tr>
          <td>관세사</td>
          <td colspan="3"></td>
          <td colspan="3" rowspan="2"></td>
        </tr>
        <tr>
          <td>차랑번호</td>
          <td colspan="3">{/*<%=data.car_number%>*/}</td>
        </tr>
        <tr>
          <td>기사연락처</td>
          <td colspan="3">{/*<%=data.contact%>*/}</td>
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
