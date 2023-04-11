import Layout from "../components/layout/Layout";
import TodoEdit from "../components/todo/TodoEdit";
import TodoInput from "../components/todo/TodoInput";
import Todos from "../components/todo/Todos";

const Todo = () => {
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
        <TodoEdit />
      </div>
    </Layout>
  );
};

export default Todo;
