import React from "react";
import style from "./modal.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../../../store/modal";
const Modal = ({ children }) => {
  const rootClasses = [style.modal];
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  if (isOpen) {
    rootClasses.push(style.active);
  }

  return (
    <div>
      <div
        className={rootClasses.join(" ")}
        onClick={() => dispatch(modalClose())}
      >
        <div
          className={style.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => dispatch(modalClose())}
              className="transition ease-in-out delay-75 hover:-translate-y-0.5 hover:scale-110"
            >
              <i className="bi bi-x-lg text-[20px]"></i>
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.object
};

export default Modal;
