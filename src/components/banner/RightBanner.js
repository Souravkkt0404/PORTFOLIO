import React from 'react'
import { banner } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="border-b-2 w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 "
        style={{ borderRadius: "5rem" }}
        src={banner}
        alt="banner"
      />
     
    </div>
  );
}

export default RightBanner