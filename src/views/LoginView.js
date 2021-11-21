import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "./LoginView.module.scss";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.Box}>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} className={s.formReg} autoComplete="off">
        <label className={s.labelReg}>
          Email
          <input
            className={s.inputStyle}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.labelReg}>
          Password
          <input
            className={s.inputStyle}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={s.buttonStyle} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
