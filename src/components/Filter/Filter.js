import React from "react";
import classes from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const Filter = ({ onChange, value }) => {
  return (
    <CSSTransition in={value !== ""} timeout={0}>
      <>
        <label className={classes.label}>Filter:</label>
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Filter contacts if necessary"
        />
      </>
    </CSSTransition>
  );
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = {
//   toFilter: actions.handleFilter,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
