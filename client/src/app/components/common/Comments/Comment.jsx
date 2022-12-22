import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCurrentUserId, getUserById } from "../../../store/userSlice";
import { displayDate } from "../../../utils/displayDate";

const Comment = ({
  content,
  created_at: created,
  _id: id,
  userId,
  onRemove
}) => {
  const currentUserId = useSelector(getCurrentUserId());
  const user = useSelector(getUserById(userId));

  return (
    <div className="border border-1 rounded-[20px] mb-4 p-2">
      <div className="flex items-center mb-2 justify-between mt-2">
        <div className="flex items-center">
          <img width="36px" height="36px" src={user.image} alt="" />
          <p className="dark:text-gray-300">{user.name}</p>
        </div>
        <div className="relative mt-2 w-20">
          {currentUserId ? (
            <span
              className="absolute -top-5 right-1"
              onClick={() => onRemove(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                role="button"
                className="dark:text-gray-300 w-6 h-6 border-2 rounded-[5px] opacity-[0.5] hover:opacity-100 transition-opacity"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          ) : (
            ""
          )}
          <span className="text-gray-400 text-sm">
            -Был оставлен {displayDate(created)}
          </span>
        </div>
      </div>
      <p className=" dark:text-gray-300 mb-3 ml-2">{content}</p>
    </div>
  );
};

Comment.propTypes = {
  content: PropTypes.string,
  edited_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userId: PropTypes.string,
  onRemove: PropTypes.func,
  _id: PropTypes.string
};

export default Comment;
