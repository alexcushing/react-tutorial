import React from "react";
import { render } from "react-dom";

import ExampleOne from './exampleOne.js';
import ExampleTwo from './exampleTwo.js';
import ExampleThree from './exampleThree.js';
import ExampleFour from './exampleFour.js';
import ExampleFive from './exampleFive.js';
import ExampleSix from './exampleSix.js';

// chrome extension -> https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

const rootElement = document.getElementById("root");
render(<ExampleOne />, rootElement);
