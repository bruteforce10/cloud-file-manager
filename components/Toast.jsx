import { setShowToast } from "@/config/producers/CloudSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Toast() {
  const { showToast } = useSelector((state) => state.cloudReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(setShowToast(""));
    }, 2000);
  }, []);

  return (
    <div className="toast toast-top toast-end">
      <div className="alert bg-green-600 text-white alert-success">
        <span>{showToast}</span>
      </div>
    </div>
  );
}
