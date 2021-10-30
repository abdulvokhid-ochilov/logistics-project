import Header from "../layout/Header";
import TableButtons from "../layout/TableButtons";
import TopTable from "../layout/TopTable";
import MiddleTable from "./MiddleTable";
import BottomTable from "./BottomTable";

const InputPage = () => {
  return (
    <>
      <Header />
      <section className="input-info">
        <h1 className="page-heading">입고 요청서</h1>
        <form action="/input" method="POST" autocomplete="off">
          <TopTable />
          <MiddleTable />
          <BottomTable />
          <TableButtons />
        </form>
      </section>
    </>
  );
};

export default InputPage;
