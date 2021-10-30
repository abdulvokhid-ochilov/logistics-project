import React, { useState } from "react";

const BottomTable = () => {
  const [length, setLength] = useState(3);

  const TableBody = [];

  for (let i = 0; i < length; i++) {
    TableBody.push(
      <tr key={i}>
        <td className="td-width">
          <input type="text" name="shipper" />
        </td>
        <td className="td-width">
          <select name="packaging" className="select">
            <option value="BOX">BOX</option>
            <option value="PALLET">PALLET</option>
            <option value="FABRIC">FABRIC</option>
          </select>
        </td>
        <td className="td-width">
          <input type="text" name="quantity" />
        </td>
        <td className="td-width">
          <input type="text" name="weight" />
        </td>
        <td className="td-width">
          <input type="text" name="volume" />
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
      <table className="inp-bottom-table bottom-table">
        <thead>
          <tr>
            <th className="th-width">
              <span>화주명(상호)</span>
            </th>
            <th className="th-width">
              <span> 포장규격</span>
            </th>
            <th className="th-width">
              <span> 입고수량 </span>
            </th>
            <th className="th-width">
              <span> 중량(kg) </span>
            </th>
            <th className="th-width">
              <span> 용적(cbm) </span>
            </th>
          </tr>
        </thead>
        <tbody>{TableBody.map((row) => row)}</tbody>
      </table>
      <div className="plus-btn-cont">
        <button
          onClick={HandleRemove}
          type="button"
          className="inp-minus-btn minus-btn"
        >
          -
        </button>
        <button
          onClick={HandleAdd}
          type="button"
          className="inp-plus-btn plus-btn"
        >
          +
        </button>
      </div>
    </>
  );
};

export default BottomTable;
