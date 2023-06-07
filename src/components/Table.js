import React from "react";

const Table = ({ thead, children }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-striped"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead className="bg-light">
                <tr>
                  {thead.map((th, index) => {
                    return (
                      <th scope="col" key={index}>
                        {th.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;