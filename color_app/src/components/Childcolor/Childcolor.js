
import React from "react";

function Childcolor({ colors, names }) {
  console.log(names);
  return (
    <div
      style={{
        background: `${colors}`,
        height: "200px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        fontFamily: "cursive",
      }}
    >
      {names}
    </div>
  );
}

export default Childcolor;
