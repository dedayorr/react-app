import React from "react"
import Color from "../Color/Color"


function Colors() {
    // let idx = Math.floor(Math.random())
    // console.log(idx)
  const generateColor = () => {
    let str = "0123456789abcdef"
    let colorCode = ""
    for (let i = 0; i < 6; i++) {
      let idx = Math.floor(Math.random() * str.length)
      colorCode += str[idx]
    }
    return "#" + colorCode
  
  }

  let colorsData = []

  for (let i = 0; i < 32; i++) {
    let colorCodeValue = generateColor()
    colorsData.push({
      key : colorCodeValue,
    })
  }

  return (
    <div
      style={{
        width: "90%",
        margin: "0px auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Color colors={colorsData}/>
    </div>
    
  )
}

export default Colors