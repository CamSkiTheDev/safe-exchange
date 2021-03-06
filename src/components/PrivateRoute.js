import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(rp) =>
        currentUser ? <Component {...rp} /> : <Redirect to="/login" />
      }
    />
  );
}
