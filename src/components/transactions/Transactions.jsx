import React from "react";
import Table from "../table/Table";
// import "../../pages/home/home.scss";
import Widget from "../widget/Widget";
import "./transactions.scss";
function Transactions() {
  return (
    <>
      <h1 className="font-bold text-[2em] ml-5 mt-2">Transactions</h1>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div>
    </>
  );
}

export default Transactions;
