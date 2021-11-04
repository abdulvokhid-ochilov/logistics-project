import { useParams } from "react-router-dom";

const OutputPrint = (props) => {
  const { id } = useParams();
  return (
    <>
      <div class="print-container">
        <div class="output-print-container">
          

          <p>[보관용]</p>
          
        </div>
        <div class="output-print-container">
          <div class="output-print-heading">
            <img class="print-page_qr" src="<%=url %>" alt="qr" />
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

          <p>[검수용]</p>
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
        </div>
        <div class="output-print-container">
          <div class="output-print-heading">
            <img class="print-page_qr" src="<%=url %>" alt="qr" />
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

          <p>[차량용]</p>
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
        </div>
      </div>

      <div class="print-btn-container">
        <button class="print-btn">출고증인쇄</button>
      </div>
    </>
  );
};

export default OutputPrint;
