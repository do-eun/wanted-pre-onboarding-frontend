import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import TodoInput from "../components/todo/TodoInput";
import Todos from "../components/todo/Todos";

import { useTokenCheck } from "../hooks/useTokenCheck";
import { deleteAccessToken } from "../util/token";

const Todo = () => {
  const nav = useNavigate();
  const isLogin = useTokenCheck();
  if (!isLogin) {
    return null;
  }

  /**로그아웃 구현 */
  const LogOut = () => {
    deleteAccessToken();
    nav("/signin");
  };

  return (
    <Layout>
      <div className="flex w-[100%] justify-end">
        <button
          onClick={() => LogOut()}
          className="rounded-md bg-blue-500 p-2 text-[0.8rem] text-white active:bg-blue-400 active:ring-2 "
        >
          로그아웃
        </button>
      </div>

      <div className="mt-[1rem]">
        <img
          alt="투두이미지"
          src="https://avatars.githubusercontent.com/u/112849712?v=4"
          className="mb-[1rem] h-[6rem] w-[6rem]"
        />
      </div>
      <TodoInput />
      <div className="h-[20rem] w-[80%] overflow-auto">
        <Todos />
        <Todos />
        <Todos />
        <Todos />
        <Todos />
        <Todos />
        <Todos />
      </div>
    </Layout>
  );
};

export default Todo;
