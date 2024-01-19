import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ToastMessage = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export const message = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg)
      break
    case "info":
      toast.info(msg)
      break
    case "error":
      toast.error(msg)
      break
    default:
      toast(msg)
  }
}

export default ToastMessage