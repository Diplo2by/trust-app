import React from "react";

const Filepv = ({ fileData }) => {
  return (
    <div>
      <div>
        {fileData.fileList.map((f) => {
          return (
            <>
              <ol>
                <li key={f.lastModified}>
                  <div key={f.name}>{f.name}</div>
                </li>
              </ol>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filepv;
