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

  const addNewListItem = (detail) => {
    if (detail === "") return;
    if (list.filter((list) => list.detail === detail).length !== 0) return;
    const newListItem = { id: list.length + 1, detail: detail, isDone: false };
    setList([...list, newListItem]);
  };

  const changeListItemStatus = (id) => () => {
    const listItem = list.filter((list) => list.id === id)[0];
    listItem.isDone = !listItem.isDone;
    setList([...list]);
  };

  const deleteListItem = (index) => () => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div className="background">
      <div>
        <AddInput addNewListItem={addNewListItem} />
        <DisplayList
          listData={list}
          changeListItemStatus={changeListItemStatus}
          deleteListItem={deleteListItem}
        />
      </div>
    </div>
  );
};

export default App;
