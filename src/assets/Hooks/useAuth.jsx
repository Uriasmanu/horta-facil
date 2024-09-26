import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate(null);
    const [erro, setErro] = useState();
    

    const login = async (email, password) => {
        try {
            const response = await axios.post('https://localhost:7193/api/Conta/authenticate', {
                email,
                password
            });

            const { token } = response.data;

            setToken(token);

            Cookies.set('token', token, { expires: 1 });

            navigate('/inicio');

        } catch (error) {
            console.log('Erro ao autenticar: ', error);
            setErro('Falha na autenticação. Verifique suas credenciais.');
        }
    }

    return { login, token, erro }
}

export default useAuth;