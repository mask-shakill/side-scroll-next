import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between py-5 top-0  sticky z-10  bg-[#f7f8fa] border-b-2 px-5">
      <h1>Mean While</h1>
      <div className="flex items-center">
        <input
          placeholder="Enter your search text.. "
          className="border-2 rounded border-black px-2"
          type="text"
        />
        <img
          className="w-14 h-10"
          src="https://cdn-icons-png.freepik.com/256/4682/4682976.png?ga=GA1.1.945868740.1697346172&"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
