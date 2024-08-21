// components/toaster/Toaster.js
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Toaster = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
      case "warning":
      toast.error(message);
      break;
    default:
      toast(message);
  }
};

export default Toaster;
