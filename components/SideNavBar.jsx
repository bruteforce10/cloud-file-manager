import menu from "@/data/menu";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateFolderModal from "./Folder/CreateFolderModal";

export default function SideNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const myRef = React.useRef(null);

  return (
    <div className="w-[200px] bg-white h-screen sticky top-0 box-shadow-blue-200 shadow-md p-5">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo" width={150} height={60} />
      </div>
      <button className="flex gap-2 text-[13px] w-full justify-between items-center bg-blue-500 p-2 text-white rounded-md px-3 hover:scale-105 transition-all mt-5">
        Add New File <IoIosAddCircleOutline />
      </button>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="flex gap-2 text-[13px] w-full justify-between items-center bg-sky-400 p-2 text-white rounded-md px-3 hover:scale-105 transition-all mt-1"
      >
        New Folder <IoIosAddCircleOutline />
      </button>

      <div>
        {menu.list.map((item, index) => (
          <h2
            onClick={() => setActiveIndex(index)}
            className={`flex gap-2 items-center p-2 mt-3  hover:bg-blue-400 rounded-lg cursor-pointer transition-all hover:text-white ${
              activeIndex === index ? "bg-blue-400 text-white" : "text-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo}
              />
            </svg>
            {item.name}
          </h2>
        ))}
      </div>
      <dialog id="my_modal_3" ref={myRef} className="modal ">
        <CreateFolderModal closeModal={() => myRef.current.close()} />
      </dialog>
    </div>
  );
}
