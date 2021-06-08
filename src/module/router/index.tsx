import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../authentication/providers/authentication";
import { Login } from "../authentication/pages/Login";
import { Main } from "../translations/pages/Main";

const PrivateRoute: React.FC = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthenticationContext);

  const redirectToComponent =
    process.env.AUTHENTICATION_DISABLED === "true" || !!token;

  return (
    <Route
      {...rest}
      render={(props) =>
        redirectToComponent ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export const PrototypeRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Main} />
    </Switch>
  );
};
