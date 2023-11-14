import { useState } from "react";
import "./Header.css";
import menu from "/images/menu.png";
import close from "/images/close.png";

const HeaderCopy = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuTrue = () => {
    setMenuVisible(true);
  };

  const toggleMenuFalse = () => {
    setMenuVisible(false);
  };

  return (
    <div className="navbar w-full h-16 flex relative">
      <div className="w-1/2">{/* logo */}</div>
      <div className="w-1/2 flex lg:justify-start justify-end items-center">
        {menuVisible ? (
          <img
            src={close}
            alt="Close"
            onClick={toggleMenuFalse}
            className="lg:hidden h-6 w-6 mr-5 cursor-pointer"
          />
        ) : (
          <img
            src={menu}
            alt="Menu"
            onClick={toggleMenuTrue}
            className="lg:hidden h-8 w-8 mr-5 cursor-pointer menu"
          />
        )}
          <ul
            className={`menu-items lg:flex ${
              menuVisible ? "flex-col" : "hidden"
            } lg:space-x-20 xl:space-x-32 font-medium tracking-wide absolute top-16 lg:top-auto w-full lg:w-auto bg-app-bg`}
          >
            <li className="text-lg py-2 text-center">
              <a href="/">Home</a>
            </li>
            <li className="text-lg py-2 text-center">
              <a href="/">About</a>
            </li>
            <li className="text-lg py-2 text-center">
              <a href="/">Courses</a>
            </li>
            <li className="text-lg py-2 text-center">
              <a href="/">Gallery</a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default HeaderCopy;
