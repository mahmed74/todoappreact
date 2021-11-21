import React, { useState } from "react";
import "./App.css";

function App() {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const addAnItem = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    setInputList("");
  };

  const deleteItem = (index) => {
    // console.log("clicked", index);

    setItems((oldItems) => {
      return oldItems.filter((Arritem, indexNum) => {
        return indexNum !== index;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add Items"
          onChange={itemEvent}
          value={InputList}
        />
        <button onClick={addAnItem}>+</button>

        <ol>
          {/* <li>{InputList}</li> */}
          {Items.map((itemVal, index) => {
            return (
              <div className="todo_style">
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  onClick={() => deleteItem(index)}
                ></i>
                <li key={index}>{itemVal}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
