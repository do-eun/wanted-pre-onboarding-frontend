import { EditTodo } from "../../apis/todoApi";
import { useInput } from "../../hooks/useInput";
import { ITodoItemProps } from "../../types/todoType";

const TodoEdit = ({ setIsEdit, todo }: ITodoItemProps) => {
  const [edit, handleEdit] = useInput(todo.todo);

  const updateTodo = () => {
    EditTodo({
      id: todo.id,
      todo: edit,
      isCompleted: todo.isCompleted,
    });
    setIsEdit(false);
  };

  return (
    <li className="my-2 flex items-center">
      <label>
        <input data-testid="modify-input" value={edit} onChange={handleEdit} />
      </label>
      <button
        onClick={() => updateTodo()}
        className="ml-2 h-[1.5rem] w-[2rem] rounded-md bg-zinc-300 text-[0.8rem]"
        data-testid="submit-button"
      >
        제출
      </button>
      <button
        onClick={() => setIsEdit(false)}
        className="ml-2 h-[1.5rem] w-[2rem] rounded-md bg-zinc-300 text-[0.8rem]"
        data-testid="cancel-button"
      >
        취소
      </button>
    </li>
  );
};

export default TodoEdit;
