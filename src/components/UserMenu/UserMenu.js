import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "./panda.png";
import Button from "@mui/material/Button";
import s from "./UserMenu.module.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#36C98F",
      contrastText: "#fff",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {email}</span>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Logout
        </Button>
      </ThemeProvider>
    </div>
  );
}
