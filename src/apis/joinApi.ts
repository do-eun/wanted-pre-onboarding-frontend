import { ISign } from "../types/userType";
import { signInstance } from "./todoApi";
import { AxiosError } from "axios";

/** 회원가입 api */
export const SignUpApi = async (data: ISign) => {
  try {
    const response = await signInstance.post(`/auth/signup`, data);
    if (response.status === 201) {
      return true;
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      alert(error.response.data.message);
    }
  }
  return false;
};
