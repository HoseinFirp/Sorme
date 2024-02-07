import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ErrorAlert({ props }) {
  useEffect(() => {
    const notify = () =>
      toast.error(`${props}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce
      });
    notify();
  }, [props]);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default ErrorAlert;
