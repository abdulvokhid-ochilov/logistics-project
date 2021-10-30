import Header from "../layout/Header";
import OutputDBForm from "./OutputDBForm";
import OutputDBTable from "./OutputDBTable";

const OutputDB = () => {
  return (
    <>
      <Header />
      <section className="cfs-cont">
        <main className="cfs-main">
          <h1 className="page-heading">출고 조회</h1>
          <form
            className="search"
            action="/output/outputdb"
            method="POST"
            autocomplete="off"
          >
            <OutputDBForm />
            <OutputDBTable />
            {/* <%- include("../partials/db-form") -%> <%- include("../partials/db-table")
      -%> */}
          </form>
        </main>
      </section>
    </>
  );
};

export default OutputDB;
