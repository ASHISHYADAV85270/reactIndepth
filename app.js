import React from "react";
import ReactDOM from 'react-dom/client';

//it is a core work of react-> header is a react javascript object
const header = React.createElement(
  "h1",
  { id: "heading", myprop: "krle jo bhi krna hai" },
  "Hello Ashish! from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag from child1"),
    React.createElement("h2", {}, "I am h2 tag from child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag from child2"),
    React.createElement("h2", {}, "I am h2 tag from child2"),
  ]),
]);

// console.log(parent);

// it is made by ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // to take header object -> and convert it into h1 tag and put inside the root
