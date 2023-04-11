const TodoInput = () => {
  return (
    <div className="mb-[1rem]">
      <input
        placeholder="todo를 적어보세요."
        className="h-[2rem] w-[15rem] p-2"
        data-testid="new-todo-input"
      />
      <button
        className="ml-[1rem] h-[2rem] w-[4rem] rounded-md bg-slate-400 text-gray-100 hover:bg-slate-500"
        data-testid="new-todo-add-button"
      >
        추가
      </button>
    </div>
  );
};

export default TodoInput;
