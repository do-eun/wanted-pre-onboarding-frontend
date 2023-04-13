import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
