import Layout from "../components/layout/Layout";

const Todo = () => {
  return (
    <Layout>
      <div>
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>
      </div>
      <div>
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 1</span>
          </label>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </li>
        <li>
          <label>
            <input data-testid="modify-input" />
          </label>
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button">취소</button>
        </li>
      </div>
    </Layout>
  );
};

export default Todo;
