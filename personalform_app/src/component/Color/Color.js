import React from "react"

function Color({ colors }) {
    console.log(colors)
  return (
    <>
      {colors.map(({ key }) => {
        console.log(key)
        return (
          <div
            key={key}
            style={{
              width: "200px",
              height: "200px",
              background: `${key}`,
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            {key}
          </div>
        )
      })}
    </>
  )
}

export default Color