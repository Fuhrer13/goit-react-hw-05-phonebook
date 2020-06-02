import React from "react";
import PropTypes from "prop-types";
import classes from "./Filter.module.css";

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className={classes.container}>
      <label htmlFor="filter" className={classes.label}>
        Find contacts by name
        <input
          className={classes.input}
          type="text"
          id={filter}
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
