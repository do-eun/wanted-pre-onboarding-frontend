import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";
import { ITodoProps } from "../../types/todoType";
import { useInput } from "../../hooks/useInput";

const TodoList = ({ todo, setTodoList }: ITodoProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, handleEdit] = useInput(todo.todo);

  return (
    <>
      {isEdit ? (
        <TodoEdit
          setIsEdit={setIsEdit}
          todo={todo}
          edit={edit}
          handleEdit={handleEdit}
        />
      ) : (
        <TodoItem
          setIsEdit={setIsEdit}
          todo={todo}
          edit={edit}
          setTodoList={setTodoList}
        />
      )}
    </>
  );
};

export default TodoList;
