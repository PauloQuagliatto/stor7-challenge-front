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

      await api.post("/contacts/", contact, {
        headers: {
          authorization,
        },
      });
      if (!contact.sequenceNumber) {
        let biggestNumber = 0;
        contacts.map((currentContact) => {
          if (currentContact.sequence_number > biggestNumber) {
            biggestNumber = currentContact.sequence_number;
          }

          return biggestNumber;
        });

        contact.sequence_number = biggestNumber + 1;
      }

      const newContacts = [...contacts, contact];
      setContacts(newContacts);
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
    }
  };

  return { contacts, getContacts, createContact, updateContact, deleteContact };
};

export default useContacts;
