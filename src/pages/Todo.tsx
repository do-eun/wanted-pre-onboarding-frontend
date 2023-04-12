import Layout from "../components/layout/Layout";
import TodoInput from "../components/todo/TodoInput";
import Todos from "../components/todo/Todos";

import { useTokenCheck } from "../hooks/useTokenCheck";

const Todo = () => {
  const isLogin = useTokenCheck();
  if (!isLogin) {
    return null;
  }

  return (
    <Layout>
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
