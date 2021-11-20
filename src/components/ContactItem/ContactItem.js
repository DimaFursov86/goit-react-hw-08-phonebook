import s from "./ContactItem.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import ContactsOperations from "../../redux/app/app-operations";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const deleting = (e) => {
    dispatch(ContactsOperations.deleteContact(id));
    if (e.target) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#D64040",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>{name}</p>
      <p className={s.contactItemText}>{number}</p>
      <ThemeProvider theme={theme}>
        <LoadingButton
          variant="outlined"
          startIcon={<DeleteIcon />}
          size="small"
          disabled={loading}
          loadingIndicator={<Loader />}
          loading={loading}
          onClick={deleting}
          className={s.contactItemTextC}
        >
          Delete
        </LoadingButton>
      </ThemeProvider>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
