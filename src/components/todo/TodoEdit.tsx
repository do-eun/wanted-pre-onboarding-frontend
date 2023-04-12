import { ITodoEdit } from "../../types/todoType";

const TodoEdit = ({ setIsEdit }: ITodoEdit) => {
  return (
    <li className="my-2 flex items-center">
      <label>
        <input data-testid="modify-input" />
      </label>
      <button
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
