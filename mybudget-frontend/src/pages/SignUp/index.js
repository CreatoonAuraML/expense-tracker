import React from "react";
import SignUp from "components/SignUp";
import { Helmet } from "react-helmet";

export default function SignInPage() {
  return (
    <>
      <SignUp />
      <Helmet>
        <title>Sign up to Expense Tracker</title>
      </Helmet>
    </>
  );
}
