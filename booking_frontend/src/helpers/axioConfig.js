import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    // For other status codes (e.g., 400, 401, 404, 500, etc.)
    throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
  },
  (error) => {
    if (!error.response) {
      return Promise.reject(
        new Error("Network error. Please try again later.")
      );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
