import { ITodoEdit } from "../../types/todoType";

const TodoItem = ({ setIsEdit }: ITodoEdit) => {
  return (
    <li className="my-2 flex items-center">
      <label className="inline-flex h-[2rem] items-center">
        <input className="mx-1 h-[1.2rem] w-[1.2rem]" type="checkbox" />
        <span>TODO dsdsadad1</span>
      </label>
      <button
        onClick={() => {
          setIsEdit(true);
        }}
        className="ml-2 h-[1.5rem] w-[2rem] rounded-md bg-slate-300 text-[0.8rem]"
        data-testid="modify-button"
      >
        수정
      </button>
      <button
        className="ml-2 h-[1.5rem] w-[2rem] rounded-md bg-slate-300 text-[0.8rem]"
        data-testid="delete-button"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
