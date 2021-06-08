import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../authentication/providers/authentication";
import { Login } from "../authentication/pages/Login";
import { Cards } from "../translations/pages/Cards";

const PrivateRoute: React.FC = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthenticationContext);

  console.log(process.env.AUTHENTICATION_DISABLED);
  return (
    <Route
      {...rest}
      render={(props) =>
        process.env.AUTHENTICATION_DISABLED || token ? (
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
