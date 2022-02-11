import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

import useContacts from "../../hooks/useContacts";

import Container from "./styles";

const CreateContactModal = ({ isOpen, setIsOpen }) => {
  const { createContact } = useContacts();

  const [name, setName] = useState("");
  const [sequenceNumber, setSequenceNumber] = useState("");

  const onRequestClose = () => {
    setName("");
    setSequenceNumber("");
    setIsOpen(false);
  };

  const filterNumberInput = (e) => {
    const number = e.target.value.replace(/\D/g, "");
    setSequenceNumber(number);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let success;
    if (sequenceNumber) {
      success = await createContact({
        name,
        sequence_number: parseInt(sequenceNumber),
      });
    } else {
      success = await createContact({ name });
    }
    if (success) {
      toast("Contato adicionado com sucesso");
      onRequestClose();
    } else {
      toast("Não foi possível adicionar contato");
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
        <lable>Número de sequência:</lable>
        <input value={sequenceNumber} onChange={filterNumberInput} />
        <button type="submit">Adicionar</button>
      </Container>
    </Modal>
  );
};
export default CreateContactModal;
