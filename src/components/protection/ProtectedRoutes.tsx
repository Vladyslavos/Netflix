import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function ProtectedRoutes({ children }: any) {
  const { user }: any = UserAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  } else {
    return children;
  }
}
