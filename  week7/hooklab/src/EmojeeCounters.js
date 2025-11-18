import React, { useState, useEffect } from "react";
// All imports are now lowercase to match the renamed files:
import love from "./love.png";
import sad from "./sad.png"; 
import happy from "./happy.png";
import like from "./like.png";

function EmojeeCounter(props) {
  // Use the lowercase imported variable 'love' as the initial state
  const [pic, setPic] = useState(love); 
  const [count, setCount] = useState(0);

  useEffect(() => {
    // We update the comparison value to match the prop name (Love -> love)
    if (props.pic === "love") setPic(love); 
    else if (props.pic === "sad") setPic(sad);
    else if (props.pic === "happy") setPic(happy);
    else if (props.pic === "like") setPic(like);
  }, [props.pic]);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>{props.pic}</p>
      <button onClick={ClickHandle}>
        {count}
        <img src={pic} alt={`${props.pic} emoji`} style={{ width: "60px", verticalAlign: "middle" }} />
      </button>
    </div>
  );
}
export default EmojeeCounter;