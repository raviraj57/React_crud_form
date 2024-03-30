import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./Components/Create";

import Update from './Components/Update';


const App = () => {
  const [submittedData, setSubmittedData] = useState([]);
  
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Create submittedData={submittedData} setSubmittedData={setSubmittedData} />} />
       
          <Route path="/Update" element={<Update submittedData={submittedData} setSubmittedData={setSubmittedData}/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
