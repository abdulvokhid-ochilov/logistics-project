import React, { useState } from "react";

const BottomTable = () => {
  const [length, setLength] = useState(3);

  const TableBody = [];

  for (let i = 0; i < length; i++) {
    TableBody.push(
      <tr key={i}>
        <td>
          <input type="text" name="bl_number" />
        </td>
        <td>
          <input type="text" name="client" />
        </td>
        <td>
          <input type="text" name="total_quantity" />
        </td>
        <td>
          <input type="text" name="quantity" />
        </td>
      </tr>
    );
  }

  function HandleAdd() {
    setLength(length + 1);
  }

  function HandleRemove() {
    if (length > 3) setLength(length - 1);
  }

  return (
    <>
      <table className="bottom-table out-bottom-table">
        <thead>
          <tr>
            <th>
              <span> B/L NO. (비엘 번호)</span>
            </th>
            <th>
              <span>화주명(상호)</span>
            </th>
            <th>
              <span> 전체수량 </span>
            </th>
            <th>
              <span> 출고수량 </span>
            </th>
          </tr>
        </thead>
        <tbody>{TableBody.map((row) => row)}</tbody>
      </table>
      <div className="plus-btn-cont">
        <button
          onClick={HandleRemove}
          type="button"
          className="out-minus-btn minus-btn"
        >
          -
        </button>
        <button
          onClick={HandleAdd}
          type="button"
          className="out-plus-btn plus-btn"
        >
          +
        </button>
      </div>
    </>
  );
};

export default BottomTable;
