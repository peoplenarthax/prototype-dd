import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../../providers/authentication";
import { Login } from "../authentication/pages/Login";
import { Cards } from "../translations/pages/Cards";

const PrivateRoute: React.FC = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
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
      <PrivateRoute exact path="/" component={Cards} />
    </Switch>
  );
};
