
import { useState } from "react";

function App() {
  const [myCounter, setMyCounter] = useState(1);
  const [advices, setAdvices] = useState([
    "Feedback on code is something that happens all the time in the real world and its never too soon to start",
    "You might find projects that have a simple solution that can be completed fairly quickly.",
    "One of the fastest ways of leveling up and improving programming skills is to get into the mind of a",
    "You might find projects that have a simple solution that can be completed fairly quickly.",
  ]);

  function nextHandler() {
    if (myCounter < 4) {
      setMyCounter(myCounter + 1);
    }
  }
  function previousHandler() {
    if (myCounter > 1) {
      setMyCounter(myCounter - 1);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: " 8rem",
        }}
      >
        {Array.from([1, 2, 3, 4], (x) => (
          <div
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              backgroundColor: myCounter == x ? "blue" : "grey",
              textAlign: "center",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            {x}
          </div>
        ))}
      </div>
      <p
        style={{
          textAlign: "center",
          margin: "4rem",
          backgroundColor: "blue",
          padding: "3rem",
          borderRadius: "30px",
          fontSize: "1.5rem",
          color: "white",
        }}
      >
        {advices[myCounter - 1]}
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Array.from(["previous", "next"], (x) => (
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              width: "150px",
              height: "34px",
              border: "none",
              borderRadius: "1rem",
              fontSize: "1.1rem",
            }}
            onClick={x == "previous" ? previousHandler : nextHandler}
          >
            {x}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
