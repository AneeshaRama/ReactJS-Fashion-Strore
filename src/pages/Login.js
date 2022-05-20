import React, { useContext, useEffect } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../firebase";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const { user } = state;
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  const handleLogin = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
    window.localStorage.setItem("user", JSON.stringify(response.user));
    dispatch({
      type: "LOGIN",
      payload: response.user,
    });
    enqueueSnackbar("You have successfully logged in", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };
  return (
    <>
      <div className=" flex h-[80vh] justify-center items-center">
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
