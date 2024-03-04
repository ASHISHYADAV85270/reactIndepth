import React from "react";
import ReactDOM from "react-dom/client";

// ! This is basic Jsx

//JSX(transpiled before it reaches the JS)
//JSX->babel convert it into-> React.createElement => ReactElement-JSobject =>  HTMLELEMENT(render)
/*
const jsxHeading = (
  <h1 id="heading">
    Welcome To JSX Ashish
    <p>How are you</p>
  </h1>
);
console.log(jsxHeading); // it will also create React Element
 */

// ! it will be inserted into JSX using {}
const fullname = <span style={{ color: "red" }}>Ashish Yadav</span>;

// ! it will be inserted into JSX using <FullName />
const FullName = () => {
  return <span style={{ color: "red" }}>Ashish Yadav</span>;
};

// !React Functional Component
// ? It is a JavaScript function which returns a react Element / JSX
const Title = () => {
  return <p>I am Title</p>;
};

const score = 90;
// ! it is a funtion component
// todo ### when we are calling Title it is called Component composition
// ! we can inject any js inside currly braces { any js inside currly braces } inside JSX
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h2 className="heading" tabIndex={"34"}>
        Hi I am HeadingComponent and my Namaste React score is {score}
        <br />
        My fullname is {fullname}
        <br />
        My Full Name is <FullName />
        <br />
        My Full Name is <FullName></FullName>
        <br />
        My Full Name is {FullName()}
      </h2>
    </div>
  );
};
// console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
