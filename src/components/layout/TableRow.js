const TableRow = (props) => {
  return (
    <tr>
      <td>{props.num}</td>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.phone}</td>
    </tr>
  );
};

export default TableRow;
