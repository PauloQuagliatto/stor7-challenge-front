import { useContext } from "react";

import { ContactsContext } from "../context/ContactsContext";
import useAuth from "./useAuth";
import api from "../services/api";

const useContacts = () => {
  const { contacts, setContacts } = useContext(ContactsContext);
  const { getAccessToken } = useAuth();

  const createContact = async (contact) => {
    try {
      const authorization = getAccessToken();

      if (!contact.sequenceNumber) {
        let maxNumber = 0;
        contacts.map((currentContact, index) => {
          if (currentContact.sequence_number > maxNumber) {
            maxNumber = currentContact.sequence_number;
          }

          return maxNumber + 1;
        });

        contact.sequence_number = maxNumber + 1;
      }

      await api.post("/contacts/", contact, {
        headers: {
          authorization,
        },
      });

      const newContacts = [...contacts, contact];
      setContacts(newContacts);
      return true;
    } catch {
      return false;
    }
  };

  const getContacts = async () => {
    try {
      const authorization = getAccessToken();

      const res = await api.get("/contacts/list", {
        headers: {
          authorization,
        },
      });

      if (res.data) {
        setContacts(res.data);
      }
      return true;
    } catch {
      return false;
    }
  };

  const updateContact = async (contact) => {
    try {
      const authorization = getAccessToken();

      await api.put(
        "/contacts/",
        { contact },
        {
          headers: {
            authorization,
          },
        }
      );

      const newContacts = contacts.filter(({ _id }) => _id !== contact._id);

      newContacts.push(contact);

      setContacts(newContacts);
      return true;
    } catch {
      return false;
    }
  };

  const deleteContact = async (mongoId, zohoId) => {
    try {
      const authorization = getAccessToken();
      console.log(mongoId, zohoId);
      await api.delete("/contacts/", {
        headers: {
          authorization,
        },
        data: {
          mongoId,
          zohoId,
        },
      });

      const newContacts = contacts.filter(({ _id }) => _id !== mongoId);

      setContacts(newContacts);
      return true;
    } catch {
      return false;
    }
  };

  return { contacts, getContacts, createContact, updateContact, deleteContact };
};

export default useContacts;
