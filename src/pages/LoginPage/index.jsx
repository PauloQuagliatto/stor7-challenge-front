import Container from "./styles";

const LoginPage = () => {
  return (
    <Container>
      <h1>Login</h1>
      <a
        href={`https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.contacts.ALL&client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&access_type=online&redirect_uri=${REACT_APP_REDIRECT_URL}`}
      >
        Logar com Zoho
      </a>
    </Container>
  );
};

export default LoginPage;
