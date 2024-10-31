import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import { useEffect, useState } from 'react';

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //Simula o envio do formulário
    setSubmitted(true);
  };

  //Redireciona automaticamente para a página de login após 3 segundos
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timer); //Limpa o timer quando o componente é desmontado para evitar memory leaks
    }
  }, [submitted, navigate]);

  return (
    <div className="forgot-password">
      {submitted ? (
        // Mensagem de confirmação
        <div className="confirmation-message">
          <h2>Email enviado!</h2>
          <p>Verifique sua caixa de entrada para redefinir sua senha.</p>
          <p>Você será redirecionado para a página de login em instantes...</p>
        </div>
      ) : (
        // Formulário de recuperação de senha
        <>
          <h1>Esqueceu sua senha?</h1>
          <p>Insira seu endereço de e-mail abaixo para redefinir sua senha.</p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Endereço de Email" required />
            <button type="submit">Enviar</button>
          </form>
          <Link to="/" className="back-login">
            Voltar ao Login
          </Link>
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
