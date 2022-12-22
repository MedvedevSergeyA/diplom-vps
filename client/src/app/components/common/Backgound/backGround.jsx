import React from "react";
import PropTypes from "prop-types";

const Background = ({ children }) => {
  return (
    <div className="bg-white dark:h-[2000px] dark:md:h-auto dark:bg-[#191919] transition-all">
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.array
};
export default Background;
