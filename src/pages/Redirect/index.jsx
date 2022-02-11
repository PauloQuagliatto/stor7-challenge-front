import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import api from "../../services/api";

import useAuth from "../../hooks/useAuth";

import LoadingModal from "../../components/LoadingModal";
const Redirect = () => {
  const { signIn } = useAuth();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const redirect = async () => {
      const code = searchParams.get("code");

      try {
        const res = await api.post("/login/oauth", {
          code,
        });

        signIn(res.data.access_token);
      } catch (err) {
        console.log(err);
      }
    };

    redirect();
  }, []);

  return <LoadingModal isOpen={true} />;
};

export default Redirect;
