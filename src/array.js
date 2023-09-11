import React from "react";

const array = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      {arr.map((val) => (
        <div>{val}</div>
      ))}
    </div>
  );
};

export default array;
