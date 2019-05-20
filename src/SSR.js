/**
  * SSR
  *
  * SEO
  * Performance (Especially when SSRing Above the fold)
  * built into the react dom library with renderToString
  * setup with Node requires Gulp or Webpack setup to support ES6 Modules & bundling
  * use the exact same components
 */

 //Component File

import React, { Component } from "react";

class App extends Component {
  state = {
    appName: 'SSR Example'
  }
  render() {
    return (
      <h1>
        {this.state.appName}
      </h1>
    )
  }
}

// Client Side Rendering
import React from 'react';
import { render } from "react-dom";
import SSRExample from './SSRExample.js';

const rootElement = document.getElementById("root");
render(<SSRExample />, rootElement);

// Server Side Rendering - Node

import React from 'react';
import { renderToString } from 'react-dom';
import SSRExample from './SSRExample.js';

app.get("*", (req, res) => {
  res.send(renderToString(<SSRExample />));
});


