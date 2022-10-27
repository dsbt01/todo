import React, { useState } from "react";

let globalList = [];
let index = -1;

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  function handleRemove(id) {
    console.log(id);
    let indexToDelete = -1;
    for (let i = 0; globalList.count; i++) {
      if (globalList[i].id === id) {
        indexToDelete = i;
      }
    }

    if (indexToDelete != -1) {
      globalList = globalList.splice(indexToDelete, 1);

      printTodo();
    }
  }

  function printTodo() {
    const ul = document.getElementById("my-list");
    let content = "";

    globalList.forEach(function (item) {
      content =
        content +
        "<li key='" +
        item.id +
        "'><span>" +
        item.text +
        "</span><button>X</button>" +
        "</li>";
    });

    ul.innerHTML = content;
  }

  function addTodo() {
    if (inputValue === "") {
      alert("Please enter a valid task");
    } else {
      index += 1;
      let newItem = {
        id: index,
        text: inputValue,
      };

      globalList.push(newItem);

      printTodo();

      setInputValue("");
    }
  }

  function keyPress(e) {
    if (e.keyCode === 13) {
      addTodo();
    }
  }

  return (
    <div className="container">
      <div className="main-div">
        <p>To Do's</p>
        <div className="input-div">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                onKeyDown={(e) => keyPress(e)}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              ></input>
            </div>
            <div className="col-1">
              <button id="my_add_btn" onClick={() => addTodo()}>
                Task
              </button>
            </div>
          </div>
          <ul id="my-list" className="todo-container"></ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
