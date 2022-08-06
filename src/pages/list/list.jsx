import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";

function List() {
  return(
    <div>
      <Navbar />
      <Header type="List" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label className="">Destination</label>
              <input type="text" placeholder="type in destination" />
            </div>
            <div className="lsItem">
              <label className="">Check-in Date</label>
             
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
}

export default List;