import { FaSignOutAlt } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

import Container from "./styles";

const Header = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <div className="icon">
        <FaSignOutAlt fontSize="1.6rem" onClick={signOut} />
      </div>
    </Container>
  );
};

export default Header;
