import React from "react";
import Childcolor from "../Childcolor/Childcolor";

function ParentColors() {
  const colorData = [
    {
      id: 1,
      colorName: "Pearl violet",
      colorCode: "#8673A1",
    },
    {
      id: 2,
      colorName: "Blue green",
      colorCode: " #1F3A3D",
    },
    {
      id: 3,
      colorName: "Traffic orange",
      colorCode: "#F54021",
    },
    {
      id: 4,
      colorName: "Slate grey",
      colorCode: "#434750",
    },
    {
      id: 5,
      colorName: "Signal grey",
      colorCode: "#969992",
    },
    {
      id: 6,
      colorName: "Pine green",
      colorCode: "#2C5545",
    },
    {
      id: 7,
      colorName: "Olive drab",
      colorCode: " #25221B",
    },
    {
      id: 8,
      colorName: "Oyster white",
      colorCode: "#EAE6CA",
    },
    {
      id: 9,
      colorName: "Pearl copper",
      colorCode: " #763C28",
    },
    {
      id: 10,
      colorName: "Capri blue",
      colorCode: "#1B5583",
    },
    {
      id: 11,
      colorName: "Blue lilac",
      colorCode: "#6C4675",
    },
    {
      id: 12,
      colorName: "Strawberry red",
      colorCode: "#D53032",
    },
    {
      id: 13,
      colorName: "Luminous green",
      colorCode: "#00BB2D",
    },
    {
      id: 14,
      colorName: "Beige",
      colorCode: "#C2B078",
    },
    {
      id: 15,
      colorName: "Vermilion",
      colorCode: "#CB2821",
    },
    {
      id: 16,
      colorName: "Sulfur yellow",
      colorCode: "#EDFF21",
    },
    {
      id: 17,
      colorName: "Traffic blue",
      colorCode: "#063971",
    },
    {
      id: 18,
      colorName: "Chrome green",
      colorCode: "#2E3A23",
    },
    {
      id: 19,
      colorName: "Mouse grey",
      colorCode: "#646B63",
    },
    {
      id: 20,
      colorName: "Yellow grey",
      colorCode: "#8F8B66",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {colorData.map((clrs) => (
        <Childcolor names={clrs.colorName} colors={clrs.colorCode} />
      ))}
    </div>
  );
}

export default ParentColors;
