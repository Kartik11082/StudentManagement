import { useState } from "react";
import axios from "axios";

export default function Create() {
  const [rno, setRno] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const hRno = (event) => {
    setRno(event.target.value);
  };
  const hName = (event) => {
    setName(event.target.value);
  };
  const hMarks = (event) => {
    setMarks(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    let urlAdd = "http://localhost/create";
    let data = { rno, name, marks };
    axios
      .post(urlAdd, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.affectedRows == 1) {
          alert("Record inserted");
        } else {
          alert("Record already exists");
        }
        setRno("");
        setName("");
        setMarks("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <center>
        <h1> Create Page </h1>
        <form onSubmit={save}>
          <input
            type="number"
            placeholder="Enter roll number"
            onChange={hRno}
            value={rno}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            onChange={hName}
            value={name}
          />
          <br />
          <br />
          <input
            type="number"
            step="any"
            placeholder="Enter Marks"
            onChange={hMarks}
            value={marks}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </center>
    </>
  );
}
