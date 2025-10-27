
import Swal from 'sweetalert2';

export const showConfirmModal = ({ 
  title, 
  text, 
  confirmText, 
  cancelText, 
  func 
}) => {
  const renderText = () => {
    switch (text) {
      case "delete":
        return "Are you sure you want to delete this trainer?";
      case "move-to-trash":
        return "Are you sure you want to move to trash?";
      case "save":
        return "Are you sure you want to save the data?";
      default:
        return text;
    }
  }

  Swal.fire({
    title: title || "Comfirm?",
    text: renderText(),
    confirmButtonColor: "var(--primary)",
    cancelButtonColor: "#d33",
    showCancelButton: true,
    confirmButtonText: confirmText || "Yes, Save it",
    denyButtonText: cancelText || `Don't save`,
    icon: "question",
  }).then((result) => {
    if (result.isConfirmed) {
      return func();
    }
  });
}