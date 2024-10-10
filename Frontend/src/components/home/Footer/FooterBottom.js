import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Made by shashank and but Ecommerce template is copid from
          <a href="https://orebishopping.reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
             ReactBD.com 
            </span>
           <strong> Special thank to <a href="https://github.com/noorjsdivs" target="_blank" rel="noreferrer"> Noor Mohammad </a> </strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
