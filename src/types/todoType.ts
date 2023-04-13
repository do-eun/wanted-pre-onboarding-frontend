import { Dispatch, SetStateAction } from "react";

export interface ITodoEdit {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}
