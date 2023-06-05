import React from "react";
import useAuth from "hooks/useUser";
import { Redirect } from "react-router-dom";
import Home from "components/Home";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const { isLogged } = useAuth();
  return isLogged ? (
    <>
      <Home />
      <Helmet>
        <title>Home | Expense Tracker</title>
      </Helmet>
    </>
  ) : (
    <Redirect to="/signin" />
  );
}
