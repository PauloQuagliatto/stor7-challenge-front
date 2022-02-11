import { useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

import useContacts from "../../hooks/useContacts";

import Container from "./styles";

const CreateContactModal = ({ isOpen, setIsOpen, contact, setContact }) => {
  const { updateContact } = useContacts();

  const [name, setName] = useState("");
  const [sequenceNumber, setSequenceNumber] = useState("0");

  useEffect(() => {
    setName(contact && contact.name ? contact.name : "");
    setSequenceNumber(
      contact && contact.sequence_number
        ? contact.sequence_number.toString()
        : ""
    );
  }, [contact]);

  const onRequestClose = () => {
    setContact(null);
    setIsOpen(false);
  };

  const filterNumberInput = (e) => {
    const number = e.target.value.replace(/\D/g, "");
    setSequenceNumber(number);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContact({
        _id: contact._id,
        name,
        sequence_number: parseInt(sequenceNumber),
        zohoId: contact.zohoId,
      });

      onRequestClose();
    } catch {
      toast("Não foi possível atualizar contato");
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container onSubmit={onSubmit}>
        <label>Nome:</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Número de sequência:</label>
        <input value={sequenceNumber} onChange={filterNumberInput} />
        <button type="submit">Atualizar</button>
      </Container>
    </Modal>
  );
};
export default CreateContactModal;
