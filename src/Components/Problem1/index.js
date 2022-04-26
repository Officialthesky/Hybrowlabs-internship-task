import React, { useState } from "react";
import "./index.css";
export default function Problem1() {
  const [myobj, setMyobj] = useState([]);
  // getting occurence of every character
  const getOccuranceOfChar = (e) => {
    var obj = {};
    let string = e.target.value;
    let stringWithoutWhiteSpace = string.replace(/\s/g, "");

    for (let x = 0, length = stringWithoutWhiteSpace.length; x < length; x++) {
      var l = stringWithoutWhiteSpace.charAt(x);
      obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
    }

    let output = Object.entries(obj).map(([key, value]) => ({ key, value }));

    setMyobj(output);
  };

  return (
    <div className="problem1">
      <h1>Problem 1</h1>
      <input placeholder="Enter any string" onChange={getOccuranceOfChar} />
      <br />
      <div>
        {myobj.map((item, index) => {
          return (
            <div key={index} className="stringOutput">
              <h1>{item.key}</h1>
              <h1>{item.value}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
