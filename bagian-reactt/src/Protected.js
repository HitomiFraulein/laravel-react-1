import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Protected(props) {
  const history = useNavigate();
  let Cmp = props.Cmp;
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history("/register");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
}

export default Protected;
