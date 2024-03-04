import React from "react";
import ReactDOM from "react-dom/client";

//JSX(transpiled before it reaches the JS)
//JSX-> React.createElement => ReactElement-JSobject =>  HTMLELEMENT(render)
const jsxHeading = (
  <h1 id="heading">
    Welcome To JSX Ashish
    <p>How are you</p>
  </h1>
);
// console.log(jsxHeading); // it will also create React Element

/**
 * !React Functional Component
 * ? It is a JavaScript function which returns a react Element / JSX
 */

const Title = () => {
  return <p>I am Title</p>;
};

// ! it is a funtion component -> when we are calling Title it is called Component composition
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h2 className="heading" tabIndex={"34"}>
        Hi I am HeadingComponent
      </h2>
    </div>
  );
};
// console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
