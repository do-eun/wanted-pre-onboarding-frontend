import axios from "axios";
import { getAccessToken } from "../util/token";

export const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "Content-Type": "application/json",
  },
});

/** todo 조회 */
/** todo 생성 */
/** todo 수정 */
/** todo 삭제 */
