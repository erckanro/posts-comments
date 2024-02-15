import React from "react";
import { AgGridReact } from "ag-grid-react";
import "./CommentTable.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";

const CommentTable = ({ comments }) => {
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "Title", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Comment", field: "body" },
    { headerName: "Char Count", field: "body.length" },
  ]);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        columnDefs={columnDefs}
        rowData={comments}
        pagination={true}
        paginationPageSize={20}
      />
    </div>
  );
};

export default CommentTable;
