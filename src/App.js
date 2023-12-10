import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import context from "./context/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/CreateTable";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <context.Provider value={{ users, setUsers }}>
      <BrowserRouter className="">
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/createtable" element={<Table />}></Route>
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
