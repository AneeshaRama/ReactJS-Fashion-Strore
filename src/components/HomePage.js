import React from "react";
import LargeMenu from "./Menu/LargeMenu";
import SmallMenu from "./Menu/SmallMenu";
import { LargeMenuItems, SmallMenuItems } from "../data";

const HomePage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="  grid sm:grid-cols-3 gap-5 p-5 ">
            {SmallMenuItems.map((item) => {
              return <SmallMenu item={item} key={item.id} />;
            })}
          </div>
          <div className="grid sm:grid-cols-2 gap-5 p-5 ">
            {LargeMenuItems.map((item) => {
              return <LargeMenu item={item} key={item.id} />;
            })}
          </div>
        </div>
        <footer>
          <div className="h-8 flex justify-center items-center">
            <p className="mt-5 text-xs tracking-widest text-gray-500 font-semibold">
              Made with Love by Aneesh Rama
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
