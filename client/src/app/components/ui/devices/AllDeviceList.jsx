import React, { useContext, useEffect, useState } from "react";
import Device from "./device";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getDeviceList } from "../../../store/deviceSlice";
import SearchContext from "../../../context/searchContext/searchContext";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/Pagintaion";
const AllDeviceList = ({ title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const devices = useSelector(getDeviceList());
  const { searchValue } = useContext(SearchContext);
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, []);
  const items = devices
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((device) => <Device {...device} key={device._id} />);
  const count = items.length;
  const deviceCrop = paginate(items, currentPage, pageSize);
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <div className="dark:h-auto">
            <h1 className="dark:text-white  mt-18 text-2xl sm:text-4xl sm:mt-24 text-[#183e61c7] sm:text-left">
              {title}
            </h1>
          </div>
        </div>
        {count > 0 && (
          <div className="flex flex-wrap items-center">{deviceCrop}</div>
        )}
        <div className="mt-24 mb-10 flex justify-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
AllDeviceList.propTypes = {
  title: PropTypes.string
};
export default AllDeviceList;
