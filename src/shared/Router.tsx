import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
