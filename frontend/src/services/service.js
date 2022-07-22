import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const notifySuccess = (message) => {
  toast.success(`${message}`);
};

const notifyError = (message) => {
  toast.error(`${message}`);
};

export { api, notifyError, notifySuccess };
