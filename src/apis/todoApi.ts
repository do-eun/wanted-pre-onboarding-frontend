import axios, { AxiosError } from "axios";
import { getAccessToken } from "../util/token";
import { ITodoPut } from "../types/todoType";

const createAxiosInstance = () => {
  const token = getAccessToken();
  return axios.create({
    baseURL: "https://www.pre-onboarding-selection-task.shop",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

/** todo 조회 */
export const GetTodo = async () => {
  const instance = createAxiosInstance();
  const { data } = await instance.get(`/todos`);
  return data;
};
/** todo 생성 */
export const PostTodo = async (todo: string) => {
  const instance = createAxiosInstance();
  try {
    const response = await instance.post(`/todos`, { todo: todo });
    if (response.status === 201) alert("todo 작성완료!");
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      alert(error.response.data.message);
    }
  }
};

/** todo 수정 */
export const EditTodo = async (todo: ITodoPut) => {
  const instance = createAxiosInstance();
  try {
    const response = await instance.put(`/todos/${todo.id}`, {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    });
    if (response.status === 200) alert("todo 수정완료!");
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      alert(error.response.data.message);
    }
  }
};

/** todo 삭제 */
export const DeleteTodo = async (id: number) => {
  const instance = createAxiosInstance();
  try {
    const response = await instance.delete(`/todos/${id}`);
    if (response.status === 204) alert("todo 삭제완료!");
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      alert(error.response.data.message);
    }
  }
};
