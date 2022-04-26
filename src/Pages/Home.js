import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigateToProblem1 = () => {
    navigate(`/problem1`);
  };
  const navigateToProblem2 = () => {
    navigate(`/problem2`);
  };

  let navigate = useNavigate();

  return (
    <div className="homepage">
      <button onClick={navigateToProblem1}>Problem 1</button>
      <button onClick={navigateToProblem2}>Problem 2</button>
    </div>
  );
}
