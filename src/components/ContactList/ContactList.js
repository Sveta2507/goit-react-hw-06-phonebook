import React from "react";
import { ContactlistItem } from "../ContactListItem";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.scss";


const Contactlist = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactsUl}>
      {contacts.map((item) => {
        // console.log(item);
        const { name, id, number } = item;
        return (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={styles}
            in={contacts.length > 0}
          >
            <ContactlistItem
              name={name}
              number={number}
              id={id}
              deleteContact={deleteContact}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Contactlist;
