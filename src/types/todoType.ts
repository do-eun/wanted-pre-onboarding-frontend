import { Dispatch, SetStateAction } from "react";

export interface ITodoItemProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  todo: ITodosData;
  edit: string;
  handleEdit?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITodoInput {
  todoItem: string;
  handlePost: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
