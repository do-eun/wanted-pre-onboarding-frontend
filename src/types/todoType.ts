import { Dispatch, SetStateAction } from "react";

export interface ITodoItemProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  todo: ITodosData;
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
