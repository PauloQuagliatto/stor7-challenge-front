import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

import useAuth from "../../hooks/useAuth";

import LoadingModal from "../../components/LoadingModal";
const Redirect = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const redirect = async () => {
      const code = searchParams.get("code");


      const res = await api.post("/login/oauth", {
        code,
      });
      
      if (res.data.access_token) {
        signIn(res.data.access_token);
      } else {
        toast("Não foi possível fazer o login");
        navigate("/");
      }

    };

    redirect();
  }, []);

  return <LoadingModal isOpen={true} />;
};

export default Redirect;
