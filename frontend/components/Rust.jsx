import React from "react";
import {invoke} from '@tauri-apps/api'

function callrust() {
    invoke('call_rust').then((text)=>console.log(text))
}



const Rust = () => {
  return (
    <div>
      <div>
        <p className="text-white"> found </p>
        <button  className="w-[25%] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2" onClick={callrust}> call rust!</button>
      </div>
    </div>
  );
};  

export default Rust;
