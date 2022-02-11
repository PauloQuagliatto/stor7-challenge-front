import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineUserAdd } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

import useContacts from "../../hooks/useContacts";

import Header from "../../components/Header";
import CreateContactModal from "../../components/CreateContactModal";
import UpdateContactModal from "../../components/UpdateContactModal";

import Container from "./styles";

const Dashboard = () => {
  const { contacts, getContacts, deleteContact } = useContacts();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div id="title-container">
          <h1>Contatos</h1>
          <div class="icon" onClick={() => setIsCreateOpen(true)}>
            <AiOutlineUserAdd fontSize="2.6rem" color="#FFFFFF" />
          </div>
        </div>
        <div id="contacts-wrapper">
          {contacts &&
            contacts
              .sort((a, b) => (a.sequence_number > b.sequence_number ? 1 : -1))
              .map((contact, index) => {
                return (
                  <div key={index} class="contact-container">
                    <div>
                      <h3>{contact.name}</h3>
                      <h5>{contact.sequence_number}</h5>
                    </div>

                    <div class="icons-container">
                      <div
                        class="icon"
                        onClick={() => {
                          setSelectedContact(contact);
                          setIsUpdateOpen(true);
                        }}
                      >
                        <AiOutlineEdit fontSize="1.6rem" color="#FFFFFF" />
                      </div>
                      <div
                        class="icon"
                        onClick={() =>
                          deleteContact(contact._id, contact.zohoId)
                        }
                      >
                        <BiTrash fontSize="1.6rem" color="#FFFFFF" />
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </Container>

      <CreateContactModal isOpen={isCreateOpen} setIsOpen={setIsCreateOpen} />
      <UpdateContactModal
        isOpen={isUpdateOpen}
        setIsOpen={setIsUpdateOpen}
        contact={selectedContact}
        setContact={setSelectedContact}
      />
    </>
  );
};

export default Dashboard;
