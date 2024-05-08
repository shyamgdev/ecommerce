import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Dropdown({ children, text, className }) {
  const [isListOpen, setIsListOpen] = useState(false);
  const dropDownRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setIsListOpen(false);
      }
      // return document.removeEventListener("click", handleOutsideClick)
    };
    document.addEventListener("click", handleOutsideClick);
  }, []);

  // useEffect(() => {
  //   if (isListOpen) {
  //     const dropdownRect = dropDownRef.current.getBoundingClientRect();
  //     const contentRect = contentRef.current.getBoundingClientRect();
  //     const spaceBelow = window.innerHeight - dropdownRect.bottom;
  //     console.log(dropdownRect, contentRect, spaceBelow);
  //     if (spaceBelow > contentRect.height) {
  //       // contentRef.current.style.transform = `translateX(${-contentRect.height}px)`;
  //     }
  //     if (window.innerWidth < contentRect.right) {
  //       console.log(true);
  //       // contentRef.current.style.transform = `translateX(${-contentRect.height}px)`;
  //       contentRef.current.style.left = `${-contentRect.height}px`;
  //     }
  //   }
  // }, [isListOpen]);

  return (
    <div className="w-fit" ref={dropDownRef}>
      <div
        onClick={() => setIsListOpen(!isListOpen)}
        className={`flex flex-row items-center justify-start gap-1 cursor-pointer`}
      >
        {text}
        <IoIosArrowDown />
      </div>
      <div
        ref={contentRef}
        className={`${
          !isListOpen && "hidden"
        } min-w-[9rem] mt-1 py-2 md:absolute flex flex-col text-dark bg-white ${className}`}
      >
        {/* <a className={`px-6 py-1 hover:bg-light bg-light`}>item</a> */}
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
