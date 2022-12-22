import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/appRouter/AppRouter";
import NavBar from "./components/ui/Navbar/NavBar";
import AppLoader from "./components/common/hoc/AppLoader";
import SideBarBasket from "./components/common/sideBarBasket/sideBarBasket";
import { useSelector } from "react-redux";
import SearchContext from "./context/searchContext/searchContext";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const { isOpen } = useSelector((store) => store.sidebar);

  return (
    <AppLoader>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <BrowserRouter>
          {isOpen ? <SideBarBasket /> : null}
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </SearchContext.Provider>
    </AppLoader>
  );
};

export default App;
