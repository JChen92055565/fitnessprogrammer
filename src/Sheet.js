import Spreadsheet from "react-spreadsheet";
import { useState } from "react";
import React from 'react';

export default function Sheet(){
    const [data, setData] = useState([
      [{ value: "Exercise" }, { value: "Rep Range" }, { value: "RPE:" }],
      [{ value: "Exercise" }, { value: "Rep Range" }, { value: "RPE:" }],
      [{ value: "Exercise" }, { value: "Rep Range" }, { value: "RPE:" }],
      [{ value: "Exercise" }, { value: "Rep Range" }, { value: "RPE:" }],
      [{ value: "Exercise" }, { value: "Rep Range" }, { value: "RPE:" }]
    ]);
    return(
    <div>
      <Spreadsheet data={data} onChange={setData} />
    </div> 
    )
      
  };