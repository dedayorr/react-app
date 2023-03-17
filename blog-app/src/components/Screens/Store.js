import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const Store = () => {
  return (
    <div>
      <div className="absolute bg-[#0000008e] top-[100px] bottom-0 right-0 left-0 h-[68%] z-20"></div>
      <p className="absolute top-[38%] right-[5%] left-[5%] font-extrabold text-4xl text-white z-40">
        “Books are a uniquely portable magic.”
      </p>
      <AwesomeSlider animation="cubeAnimation" className="h-[450px] w-[100px]">
        <img
          data-src="books.jpg"
          alt="imagem"
          width={500}
          height={500}
          title="imagem"
        />
        <img data-src="skullbooks.jpg" alt="imagem" title="imagem" />
        <img data-src="book-walljpg.jpg" alt="imagem" title="imagem" />
      </AwesomeSlider>
    </div>
  );
};

// {require("../Addblog/dataanalysis.jpg")}
