import React from "react";
import PropTypes from "prop-types";
import classes from "./ContactListItem.module.css";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const ContactlistItem = ({ id, number, name, deleteContact }) => {
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button
          className={classes.button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactlistItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const filteredNames = state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
  return {
    contacts: filteredNames,
  };
};
const mapDispatchToProps = {
  onDelete: actions.handleDelete,
  toPostContacts: actions.postContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactlistItem);
