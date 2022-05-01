import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      <div className=" w-full flex flex-col items-center">
        <h1 className="text-[40px] font-bold  text-text-tag-blue">
          Infinite Scroll
        </h1>
        <h2 className="text-[20px]">React-query</h2>
      </div>
      <p className="text-right text-sm text-text-light">
        all rights by sookyoung.lee
      </p>
    </header>
  );
};

export default Header;
