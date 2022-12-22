import React, { useState } from "react";
import AuthLinks from "./NavbarItems/authLinks";
// import NotAuthLinks from "./NavbarItems/notAuthLinks";
import { Link } from "react-router-dom";

// Context
// Redux
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../store/userSlice";
import { LOGIN_ROUTE } from "../../../utils/consts";

const NavBar = () => {
  const { entities, totalPrice } = useSelector((state) => state.basket);
  const isLoggedIn = useSelector(getIsLoggedIn());
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full">
      <div className="items-center justify-between flex  md:flex dark:bg-gradient-to-r dark:from-blue-900 dark:to-[#1f1461] text-white italic bg-gradient-to-r from-sky-500 to-indigo-500 py-4 md:px-10 px-7">
        <div>
          <Link className="m-5 text-2xl font-bold mx-auto" to="/">
            ICorb
          </Link>
        </div>
        {isLoggedIn ? (
          <AuthLinks
            setOpen={setOpen}
            open={open}
            entities={entities}
            totalPrice={totalPrice}
          />
        ) : (
          <div className="">
            <Link className="flex items-center " to={LOGIN_ROUTE}>
              <p className="mr-2 text-white">Войти</p>
              <div className="text-2xl">
                <ion-icon name="log-out-outline"></ion-icon>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
