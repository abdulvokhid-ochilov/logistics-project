import Header from "../layout/Header";
import TableButtons from "../layout/TableButtons";
import TopTable from "./TopTable";
import BottomTable from "./BottomTable";

const OutputPage = () => {
  return (
    <>
      <Header />
      <main class="output-info">
        <h1 class="page-heading">출고 요청서</h1>
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
