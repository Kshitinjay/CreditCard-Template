import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [note, setNote] = useState({
    id1: "",
    id2: "",
    id3: "",
    id4: "",
    exp1: "",
    cvv1: "",
  });

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    if (value.length >= maxLength) {
      const nextSibling = document.querySelector(
        `input[name=id-${parseInt(fieldIndex) + 1}]`
      );
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }

    if (value.length === 0) {
      const prevSibling = document.querySelector(
        `input[name=id-${parseInt(fieldIndex) - 1}]`
      );
      if (prevSibling !== null) {
        prevSibling.focus();
      }
    }

    setNote((preValue) => {
      return {
        ...preValue,
        [fieldName + parseInt(fieldIndex)]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    let flag = true;
    event.preventDefault();
    if (
      note.id1.length < 4 ||
      note.id2.length < 4 ||
      note.id3.length < 4 ||
      note.id4.length < 4
    ) {
      alert("Check Card Number");
      flag = false;
    }
    if (note.exp1.indexOf("/") != 2 || note.exp1.length < 5) {
      alert("Invalid Expiry");
      flag = false;
    }
    if (note.cvv1.length < 3) {
      alert("Invalid CCv");
      flag = false;
    }
    if (flag) {
      setData([...data, note]);
    }
  };

  const handleDelete = (id) => {
    const newData = data.filter((item, index) => {
      return id != index;
    });
    setData(newData);
  };
  return (
    <div className="App">
      <Card handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="table__Container">
        {data.map((item, id) => (
          <>
            <tr>
              <td>
                Card No: {item.id1}-{item.id2}-{item.id3}-{item.id4}
              </td>
              <td>Expiry: {item.exp1}</td>
              <td>Ccv: {item.cvv1}</td>
              <div onClick={() => handleDelete(id)}>
                <p>X</p>
              </div>
            </tr>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
