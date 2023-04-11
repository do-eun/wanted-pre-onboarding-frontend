import { ISign } from "../types/userType";
import axios, { AxiosError } from "axios";
import { setAccessToken } from "../util/isToken";

export const signInstance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

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

/** 로그인 api */
export const SignInApi = async (data: ISign) => {
  try {
    const response = await signInstance.post(`/auth/signin`, data);
    if (response.status === 200) {
      setAccessToken(response.data.access_token);
      return true;
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      alert(error.response.data.message);
    }
  }
};
