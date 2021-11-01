import Header from "../layout/Header";
import TableButtons from "../layout/TableButtons";
import TopTable from "../layout/TopTable";
import BottomTable from "./BottomTable";

const OutputPage = () => {
  return (
    <>
      <Header />
      <main className="output-info">
        <h1 className="page-heading">출고 요청서</h1>
        <form action="/output" method="POST" autocomplete="off">
          <TopTable />
          <BottomTable />
          <TableButtons />
        </form>
      </main>
    </>
  );
};

export default OutputPage;