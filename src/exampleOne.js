import React from "react";

// functional /stateless component

let message = "hey there";

const ExampleOne = () => {
  message = `${message}!!`
  return <h1>{message}</h1>;
}

export default ExampleOne;