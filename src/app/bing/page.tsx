"use client"
import React, { useState } from "react";

function App() {
  // Declare a state variable for the index of the name
  const [index, setIndex] = useState(0);

  // Define a list of names
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

  // Define a function to handle the next button click
  function handleNext() {
    // Increment the index by one, or reset to zero if it reaches the end of the list
    setIndex((index + 1) % names.length);
  }

  // Define a function to handle the previous button click
  function handlePrev() {
    // Decrement the index by one, or set to the last element of the list if it becomes negative
    setIndex((index - 1 + names.length) % names.length);
  }

  return (
    <div className="App">
      <h1>Name List in Next.js</h1>
      <p>The current name is {names[index]}.</p>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;