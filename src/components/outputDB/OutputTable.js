import Table from "react-bootstrap/Table";
import TableRow from "../layout/TableRow";

const OutputTable = (props) => {
  const tableRows = [];
 
  for (let i = 0; i < props.data.length; i++) {
   
    tableRows.push(
      <TableRow
        key={i}
        num={i + 1}
        name={props.data[i]["DRIVER_NAME"]}
        phone={props.data[i]["PHONE_NUM"]}
        date={props.data[i]["DT"]}
      />
    );
  }
  

  return (
    <Table className="search-table shadow" striped hover borderless>
      <thead className="table-head">
        <tr>
          <th className="left-head-cell">#</th>
          <th>Name</th>
          <th>Date</th>
          <th className="right-head-cell">Phone Number</th>
        </tr>
      </thead>
      <tbody>{tableRows.map((row) => row)}</tbody>
    </Table>
  );
};

export default OutputTable;
