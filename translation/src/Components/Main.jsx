import axios from "axios";
import React, { useEffect } from "react";

function Main() {
  const getDoc = async () => {
    try {
      let text = await axios.get("http://localhost:3002/getdocument/test.docx");
      console.log(text);
    } catch (error) {
      alert("error");
      console.error(error);
    }
  };

  useEffect(() => {
    getDoc();
  }, []);
  return (
    <div className="trans_main">
      <div className="title_bar">
        <div className="document_title">
          <span class="arrowback material-symbols-outlined">arrow_back</span>
          <span className="body_text"> Test Document.docx</span>
        </div>
        <div className="right_title">
          <div className="draft_btn">
            <span class="material-symbols-outlined">draft</span>
            <span className="body_text"> SAVE DRAFT </span>
          </div>
          <div className="save_btn">
            <span class="material-symbols-outlined">save</span>
            <span className="body_text">SUBMIT</span>
          </div>
        </div>
      </div>
      <div className="TransMainDashboard">
        <textarea className="transdoc"></textarea>
        <textarea className="sourcedoc"></textarea>
      </div>
      <div className="trans_footer">
        <div className="left_footer">
          <button className="docbtn">{"<<"} PREV </button>
          <button className="docbtn">NEXT {">>"}</button>
          <span className="page">
            <button className="pagebtn" style={{ width: "40px" }}>
              15{" "}
            </button>
            <button className="pagebtn" style={{ backgroundColor: "#f2f2f2" }}>
              /100{" "}
            </button>
          </span>
        </div>

        <div className="right_footer">
          <div className="fileStatus">Pending :</div>
          <div className="fileStatus">In progress:</div>
          <div className="fileStatus">Ready for Review:</div>
          <div className="fileStatus">Approved:</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
