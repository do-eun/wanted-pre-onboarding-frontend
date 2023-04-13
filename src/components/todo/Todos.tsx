import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <TodoEdit setIsEdit={setIsEdit} />
      ) : (
        <TodoItem setIsEdit={setIsEdit} />
      )}
    </>
  );
};

export default Todos;
