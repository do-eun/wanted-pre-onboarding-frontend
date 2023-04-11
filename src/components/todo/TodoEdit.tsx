const TodoEdit = () => {
  return (
    <li className="flex items-center">
      <label>
        <input className="p-1" data-testid="modify-input" />
      </label>
      <button
        className="ml-2 h-[1.5rem] w-[2rem] rounded-md bg-zinc-300 text-[0.8rem]"
        data-testid="submit-button"
      >
        제출
      </button>
      <button
        className="ml-2 h-[1.5rem] w-[2rem] rounded-md bg-zinc-300 text-[0.8rem]"
        data-testid="cancel-button"
      >
        취소
      </button>
    </li>
  );
};

export default TodoEdit;
