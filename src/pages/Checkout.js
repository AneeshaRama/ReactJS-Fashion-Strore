import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    state: { user },
  } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <div className="min-h-[80vh]">
        <h1>Check out page</h1>
      </div>
    </>
  );
};

export default Checkout;
