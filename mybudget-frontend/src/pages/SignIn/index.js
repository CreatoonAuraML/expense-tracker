import React from "react";
import { Helmet } from "react-helmet";
import SignIn from "components/SignIn";

export default function SignInPage() {
  return (
    <>
      <SignIn />
      <Helmet>
        <title>Sign in to Expense Tracker</title>
      </Helmet>
    </>
  );
}
