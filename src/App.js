import React, { useState } from "react";
import "./App.css";
import AddInput from "./components/AddInput/AddInput";
import DisplayList from "./components/DisplayList/DisplayList";

const listData = [
  {
    id: 1,
    detail: "javascript",
    isDone: false,
  },
  {
    id: 2,
    detail: "html",
    isDone: false,
  },
  {
    id: 3,
    detail: "css",
    isDone: false,
  },
];

const App = () => {
  const [list, setList] = useState(listData);
  return (
    <div className="background">
      <div>
        <AddInput />
        <DisplayList listData={list} />
      </div>
    </div>
  );
};

export default App;
