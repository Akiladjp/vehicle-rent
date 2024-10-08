import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  const notify = () => {
    toast("Default Notification!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
};
