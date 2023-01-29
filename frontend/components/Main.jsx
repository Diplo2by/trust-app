import React from "react";
import Dropzone from "../components/Dropzone";
import Checksum from "./Checksum";

const Main = () => {
  return (
    <div>
      <br />
      <div className="flex flex-col items-center ">
        <div >
          <p className="tracking-widest text-center text-gray-500 md:text-lg dark:text-gray-400">
            Upload your file here to verify its checksum
          </p>
          <br />
          <Dropzone />
          <br />
        </div>
        <div >
          <p className="tracking-widest text-center text-gray-500 md:text-lg dark:text-gray-400">
            Enter checksum here to verify file integrity
          </p>
          <br />
          <Checksum />
        </div>
        <br />
        <button
          type="button"
          className="w-[25%] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2"
        >
          Click here to verify
        </button>
      </div>
    </div>
  );
};

export default Main;
