import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { settoken } from "../../redux/token/tokenAction";
import { userInfo } from "../../redux/user/useraction";

export const Login = () => {
  const dispatch = useDispatch();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        email: inputRef3.current.value,
        password: inputRef4.current.value,
      })
      .then((res) =>
        res.status === 200
          ? (localStorage.setItem("token", res.data.accessToken),
            localStorage.setItem("user", JSON.stringify(res.data.user)),
            dispatch(settoken(res.data.accessToken)),
            dispatch(userInfo(res.data.user)))
          : ""
      )
      .catch((err) => console.log(err));
    console.log({
      email: inputRef3.current.value,
      password: inputRef4.current.value,
    });
  };
  return (
    <div className="w-[600px] flex items-center justify-center m-auto mt-24">
      <form
        onSubmit={handleSubmit}
        className="w-full p-10 border flex items-start justify-start flex-col gap-3 rounded-lg"
      >
        <h2 className="text-4xl">LOGIN</h2>
        <input
          className="p-2 rounded-md border w-full"
          type="email"
          placeholder="email"
          ref={inputRef3}
        />
        <input
          className="p-2 rounded-md border w-full"
          type="password"
          placeholder="password"
          ref={inputRef4}
        />
        <button className="p-2 w-[200px] bg-lime-500 rounded-xl ml-auto text-[#fff]">
          Submit
        </button>
      </form>
    </div>
  );
};
