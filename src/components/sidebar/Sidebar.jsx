import React from "react";
import styles from "@/components/sidebar/sidebar.module.css";

const Sidebar = () => {
  return (
    <div
      className={`h-[600px] w-[100px] bg-white shadow-md fixed top-0 left-0 z-10 ml-[2.5rem] mt-[2.5rem] rounded-3xl overflow-x-hidden  overflow-y-scroll ${styles.scroll}`}
    >
      <nav className="mx-[31px] flex flex-col  justify-between mt-[31px]">
        <img
          className="h-[60px] w-[73px]"
          src="https://cdn-icons-png.freepik.com/256/4682/4682976.png?ga=GA1.1.945868740.1697346172&"
          alt=""
        />
        <ul className="mt-[90.5px] mb-[165.5px] flex flex-col gap-y-7">
          <img
            className="h-[38px] w-[38px]"
            src="https://cdn-icons-png.freepik.com/256/14027/14027063.png?ga=GA1.1.945868740.1697346172&"
            alt=""
          />
          <img
            className="h-[38px] w-[38px]"
            src="https://cdn-icons-png.freepik.com/256/14019/14019644.png?ga=GA1.1.945868740.1697346172&"
            alt=""
          />
          <img
            className="h-[38px] w-[38px]"
            src="https://cdn-icons-png.freepik.com/256/12068/12068610.png?ga=GA1.1.945868740.1697346172&"
            alt=""
          />
          <img
            className="h-[38px] w-[38px]"
            src="https://cdn-icons-png.freepik.com/256/5253/5253526.png?ga=GA1.1.945868740.1697346172&"
            alt=""
          />
          <img
            className="h-[38px] w-[38px]"
            src="https://cdn-icons-png.freepik.com/256/10167/10167220.png?ga=GA1.1.945868740.1697346172&"
            alt=""
          />
          <img
            className="h-[38px] w-[38px]"
            src="https://cdn-icons-png.freepik.com/256/189/189664.png?ga=GA1.1.945868740.1697346172&"
            alt=""
          />
        </ul>
        <img
          className="h-[56px] w-[57px]"
          src="https://cdn-icons-png.freepik.com/256/13362/13362530.png?ga=GA1.1.945868740.1697346172&"
          alt=""
        />
      </nav>
    </div>
  );
};

export default Sidebar;
