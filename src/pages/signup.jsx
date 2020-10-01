import React from "react";
import PrimaryButton from "../component/inputbox/buttons/primary-button/PrimaryButton";
import { InputBox } from "../component/inputbox/InputBox";

const SignUp = () => {
  const _handleName = () => {};
  const _handleMobile = () => {};
  const _handleEmail = () => {};
  const _handlePassword = () => {};

  return (
    <>
      <div className="page">
        <div className="page-cont">
        <InputBox
          label="Name"
          inputType="text"
          placeholder="Name"
          onChange={_handleName}
        />
        <InputBox
          label="Email"
          inputType="email"
          placeholder="Email"
          onChange={_handleEmail}
        />
        <InputBox
          label="Mobile"
          inputType="number"
          placeholder="Mobile"
          onChange={_handleMobile}
        />
        <InputBox
          label="Password"
          inputType="password"
          placeholder="Password"
          onChange={_handlePassword}
        />
        <PrimaryButton btnLabel="Sign Up" btnSize="medium"/>
      </div>
      </div>
    </>
  );
};
export default SignUp;
