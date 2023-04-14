import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import { useTokenCheck } from "../hooks/useTokenCheck";
import { deleteAccessToken } from "../util/token";
import { GetTodo } from "../apis/todoApi";
import { useEffect, useState } from "react";
import { ITodosData } from "../types/todoType";

const Todo = () => {
  const nav = useNavigate();
  const [todoList, setTodoList] = useState<ITodosData[]>([]);
  const isLogin = useTokenCheck();

  useEffect(() => {
    GetTodo().then((res) => setTodoList(res));
  }, []);

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
      <TodoInput setTodoList={setTodoList} />
      <div className="h-[20rem] w-[80%] overflow-auto">
        {todoList.map((todo) => (
          <TodoList todo={todo} setTodoList={setTodoList} key={todo.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Todo;
