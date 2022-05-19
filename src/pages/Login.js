import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../firebase";

const Login = () => {
  const handleLogin = async () => {
    await signInWithGooglePopup().then((res) =>
      createUserDocumentFromAuth(res.user)
    );
  };
  return (
    <>
      <div className=" flex h-[75vh] justify-center items-center">
        <button
          className="bg-gradient-to-r from-pink-700 to-pink-500 rounded-2xl p-4 px-3 text-white
        font-bold hover:bg-gradient-to-l hover:from-pink-700 hover:to-pink-500 hover:scale-110 transition-transform duration-500 ease-in-out"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
