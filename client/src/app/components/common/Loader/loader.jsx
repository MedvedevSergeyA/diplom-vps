import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center mt-[250px]">
      <i className="dark:text-blue-900 bi bi-robot text-[96px] animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600"></i>
    </div>
  );
};

export default Loader;
