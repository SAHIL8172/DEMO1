import React, { useState } from "react";

const Example1 = () => {
  const [name, setname] = useState(""); // react hooks
  const [age, setage] = useState("");
  const [area, setarea] = useState("");
  const change = (e) => {
    e.preventDefault(); //to stop continous refresh after submittting
    alert("hello " + name, "WELCOME TO MY WEBSITE");

    console.log("submitted", name, age, area);
  };
  return (
    <>
      <form onSubmit={change}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <label>age</label>
        <input
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        ></input>
        <label>area</label>
        <input
          value={area}
          onChange={(e) => {
            setarea(e.target.value);
          }}
        ></input>

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Example1;
