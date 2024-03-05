import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/REgister/Register";
import { Todo } from "./Components/Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { settoken } from "./redux/token/tokenAction";
import { userInfo } from "./redux/user/useraction";

function App() {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(settoken(localStorage.getItem("token")));
    dispatch(userInfo(JSON.parse(localStorage.getItem("user"))));
  }, []);
  if (token) {
    return <Todo />;
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
