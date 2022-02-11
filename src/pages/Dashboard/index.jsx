import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
    const fetchContacts = async () => {
      const success = await getContacts();
      if (!success) {
        toast("Não foi possível buscar contatos");
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div id="title-container">
          <h1>Contatos</h1>
          <div className="icon" onClick={() => setIsCreateOpen(true)}>
            <AiOutlineUserAdd fontSize="2.6rem" color="#FFFFFF" />
          </div>
        </div>
        <div id="contacts-wrapper">
          {contacts &&
            contacts
              .sort((a, b) => (a.sequence_number > b.sequence_number ? 1 : -1))
              .map((contact, index) => {
                return (
                  <div key={index} className="contact-container">
                    <div>
                      <h3>{contact.name}</h3>
                      <h5>{contact.sequence_number}</h5>
                    </div>

                    <div className="icons-container">
                      <div
                        className="icon"
                        onClick={() => {
                          setSelectedContact(contact);
                          setIsUpdateOpen(true);
                        }}
                      >
                        <AiOutlineEdit fontSize="1.6rem" color="#FFFFFF" />
                      </div>
                      <div
                        className="icon"
                        onClick={async () =>{
                          const success = await deleteContact(contact._id, contact.zohoId);
                          if(success) {
                            toast("Contato deletado com sucesso");
                          } else {
                            toast("Não foi possível deletar contato");
                          }
                        }}
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
