import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Datatable from "../../components/datatable/Datatable";
import Transactions from "../../components/transactions/Transactions";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <Datatable /> */}
        <Transactions />
      </div>
    </div>
  );
};

export default List;
