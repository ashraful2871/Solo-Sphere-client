import axios from "axios";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log(`err caught in interceptor ${err.response}`);
        if (err.response?.status === 401 || err.response?.status === 403) {
          //logout
          logOut();
          //navigate to login
          navigate("/login");
        }
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
