import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRouts, publicRouts } from "../../routs";
import { SHOP_ROUTE } from "../../utils/consts";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/userSlice";

const AppRouter = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <Switch>
      {isLoggedIn &&
        authRouts.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRouts.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
