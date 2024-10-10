import React, { useState } from "react";
import FooterListTitle from "./FooterListTitle";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");

  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title="More about Orebi Shop" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
            <strong>Justlooking to refresh my Redux skills by building a fully functional e-commerce project. This application will serve as a hands-on experience to deepen my understanding of state management in React using Redux. The project will encompass key features commonly found in e-commerce platforms, including product listings, a shopping cart, user authentication, and a checkout process.
            </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
