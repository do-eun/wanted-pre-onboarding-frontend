import { Dispatch, SetStateAction } from "react";

export interface ITodoEditProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  todo: ITodosData;
  edit: string;
  handleEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITodoItemProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  todo: ITodosData;
  edit: string;
  setTodoList: Dispatch<SetStateAction<ITodosData[]>>;
}

export interface ITodoInput {
  setTodoList: Dispatch<SetStateAction<ITodosData[]>>;
}

export interface ITodoProps {
  todo: ITodosData;
  setTodoList: Dispatch<SetStateAction<ITodosData[]>>;
}

/**투두 수정 */
export interface ITodoPut {
  todo: string;
  isCompleted: boolean;
  id: number;
}

export interface ITodosData {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
