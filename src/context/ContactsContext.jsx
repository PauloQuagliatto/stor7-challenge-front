import React, { createContext, useState } from "react";

const ContactsContext = createContext({});

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
