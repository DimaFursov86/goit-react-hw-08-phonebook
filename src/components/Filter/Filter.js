import React from "react";
import s from "./Filter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/app/app-actions";
import { getFilter } from "../../redux/app";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <label className={s.filterBox}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
