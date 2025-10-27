import { toast } from "react-toastify";

/**
 * @param {('info'|'success'|'warning'|'error')} type
 * @param {string} message
 */

export const showToaster = (type, message) => (
  toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
)