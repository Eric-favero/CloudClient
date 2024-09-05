
import React from 'react';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../User.contex';
import * as C from './styles';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser();

  function LogoCloud() {
    return (
      <img 
        width="100" 
        height="100" 
        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/100/external-cloud-weather-flatart-icons-outline-flatarticons-2.png" 
        alt="external-cloud-weather-flatart-icons-outline-flatarticons-2"
      />
    );
  }

  function LogoC() {
    return (
      <C.StyledImg 
        width="67" 
        height="67" 
        src="https://img.icons8.com/external-others-inmotus-design/67/external-C-qwerty-keypad-others-inmotus-design-3.png" 
        alt="external-C-qwerty-keypad-others-inmotus-design-3"
      />
    );
  }

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('Usuário logado:', user);
      loginUser(user);
      navigate('/home')
    } catch (error) {
      console.error('Erro ao fazer login com o Google:', error);
    }
  };

  return (
    <C.StyledContainer>
      <LogoC/>
      <C.styledDiv>
        <C.StyledH1>Bem-Vindo ao CloudClient </C.StyledH1>
        <LogoCloud/>
        <span>Acesse com sua conta google para entrar:</span>
        <C.StyledButtonLogin onClick={handleGoogleLogin}> 
          <FcGoogle /> Login com Google 
        </C.StyledButtonLogin>
      </C.styledDiv>
    </C.StyledContainer>
  );
};

export default Login;
