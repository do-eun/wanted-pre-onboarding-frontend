import axios from "axios";

export const signInstance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    authorization: "accessToken",
  },
});
