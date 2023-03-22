import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <div>
      {/* <div className="absolute bg-[#0000008e] top-[100px] bottom-0 right-0 left-0 h-[68%] z-20 md:top-[105px] md:h-[69%]"></div>
      <p className="absolute top-[38%] right-[5%] left-[5%] font-extrabold text-4xl text-white z-40 md:text-6xl">
        “Books are a uniquely portable magic.”
      </p> */}
      {/* <div className="h-[450px] w-[100px] md:h-[500px]">
        {" "}
        
      </div> */}
      <div className="w-[90%] flex justify-center mx-auto mb-[]">
        <img src="contactus.png" alt="imagem" width={500} height={500} />
      </div>
      <br></br>
      <hr className="w-[90%] mx-auto md:w-[60%]"></hr>
      <form className="mt-[20px] border w-[90%] mx-auto flex flex-col gap-[15px] p-[2%] mb-[20px] md:w-[60%]">
        <div className="flex gap-3">
          <MdDriveFileRenameOutline />
          <label for="name">Your Name:</label>
        </div>
        <input className="h-[45px]" type="text" name="name" />
        <div className="flex gap-3">
          <AiOutlineMail />
          <label for="name">E-mail Address:</label>
        </div>
        <input className="h-[45px]" type="email" name="address" />
        <div className="flex gap-3">
          <BsQuestionCircleFill />
          <label for="name">Enquiry:</label>
        </div>
        <input className="h-[200px]" type="text" name="enquiry" />
      </form>
      <button
        type="submit"
        className="flex justify-center w-[25%] mx-auto text-[#faf7f7] bg-[#4e66c3] p-[2%] rounded-md hover:bg-[#91a4f1c6] mb-[20px] md:w-[10%] md:p-[1%]"
      >
        Submit
      </button>
    </div>
  );
};
