import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";
import { ITodosData } from "../../types/todoType";

const TodoList = ({ todo }: { todo: ITodosData }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <TodoEdit setIsEdit={setIsEdit} todo={todo} />
      ) : (
        <TodoItem setIsEdit={setIsEdit} todo={todo} />
      )}
    </>
  );
};

export default TodoList;
