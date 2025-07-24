import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent"; // Ensure the path is correct
import TestComponent from "./TestComponent"; // Ensure the path is correct

function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
