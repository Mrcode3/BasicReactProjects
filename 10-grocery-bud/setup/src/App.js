import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    if (!name) {
      showAlert(true, "Please Enter Value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "Value Changed", "success");
    } else {
      showAlert(true, "Success", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      console.log(newItem.id);
      setList([...list, newItem]);
      setName("");
    }
  };

  // Defalut value will be used for removing the alert
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, "Empty", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "Item Removed", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const value = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(value.title);
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="eg:eggs"
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List list={list} removeItem={removeItem} editItem={editItem} />
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearList}>
            clear
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
