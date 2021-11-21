import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "./RegisterView.module.scss";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.Box}>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} className={s.formReg} autoComplete="off">
        <label className={s.labelReg}>
          Name
          <input
            className={s.inputStyle}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

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
          SignUp
        </button>
      </form>
    </div>
  );
}
