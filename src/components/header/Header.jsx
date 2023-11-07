import menu from "/images/menu.png";
const Header = () => {
  return (
    <div className="w-full h-24 flex bg-slate-100">
      <div className="w-1/2">{/* logo */}</div>
      <div className="w-1/2 flex lg:justify-start justify-end items-center">
        <img
          src={menu}
          alt="Menu"
          className="lg:hidden h-10 w-10 mr-5 cursor-pointer"
        />
        <ul className="hidden lg:flex space-x-20 xl:space-x-32 font-semibold tracking-wide ">
          <li className="text-lg">
            <a href="/">Home</a>
          </li>
          <li className="text-lg">
            <a href="/">About</a>
          </li>
          <li className="text-lg">
            <a href="/">Courses</a>
          </li>
          <li className="text-lg">
            <a href="/">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
