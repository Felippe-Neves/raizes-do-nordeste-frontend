import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TEMPO_MENSAGEM = 3500;

function Conta() {
  const navigate = useNavigate();
  const [modo, setModo] = useState('entrar');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [consentimento, setConsentimento] = useState(false);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (!mensagem) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setMensagem('');
    }, TEMPO_MENSAGEM);

    return () => window.clearTimeout(timeout);
  }, [mensagem]);

  // Login e cadastro são fluxos simulados; apenas o cadastro grava dados locais.
  const entrar = (event) => {
    event.preventDefault();
    setMensagem('Login realizado com sucesso.');
    window.setTimeout(() => {
      navigate('/cardapio');
    }, 900);
  };

  const criarConta = (event) => {
    event.preventDefault();

    // Exige consentimento LGPD antes de salvar os dados simulados.
    if (!consentimento) {
      setMensagem('Aceite a Política de Privacidade para continuar.');
      return;
    }

    const usuario = { nome, email, telefone, senha };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    setMensagem('Conta criada com sucesso. Faça login para continuar.');
    setNome('');
    setTelefone('');
    setSenha('');
    setConsentimento(false);
    setModo('entrar');
  };

  const recuperarSenha = (event) => {
    event.preventDefault();
    setMensagem('Recuperação de senha indisponível nesta versão acadêmica.');
  };

  const alternarModo = (novoModo) => {
    setMensagem('');
    setModo(novoModo);
  };

  return (
    <div className="account-page">
      <section className="login-card">
        {modo === 'entrar' ? (
          <>
            <div className="login-card__header">
              <span className="login-card__eyebrow">Bem-vindo de volta</span>
              <h1>Faça seu login</h1>
              <p>Entre para continuar sua experiência com os sabores do Nordeste.</p>
            </div>

            {mensagem && (
              <p className="account-feedback" role="status" aria-live="polite">
                {mensagem}
              </p>
            )}

            <form className="login-form" onSubmit={entrar}>
              <label className="account-field">
                E-mail
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>

              <label className="account-field">
                Senha
                <input
                  type="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  required
                />
              </label>

              <div className="login-options">
                <label className="account-consent">
                  <input
                    type="checkbox"
                    checked={lembrar}
                    onChange={(event) => setLembrar(event.target.checked)}
                  />
                  Lembrar de mim
                </label>
                <a className="account-link" href="#" onClick={recuperarSenha}>
                  Esqueci minha senha
                </a>
              </div>

              <button className="login-submit" type="submit">
                Entrar
              </button>
            </form>

            <p className="account-switch">
              Não tem conta ainda?{' '}
              <button className="text-button" type="button" onClick={() => alternarModo('criar')}>
                Criar conta
              </button>
            </p>
          </>
        ) : (
          <>
            <div className="login-card__header">
              <span className="login-card__eyebrow">Cadastro</span>
              <h1>Crie sua conta</h1>
              <p>Preencha seus dados para participar da experiência digital.</p>
            </div>

            {mensagem && (
              <p className="account-feedback" role="status" aria-live="polite">
                {mensagem}
              </p>
            )}

            <form className="login-form" onSubmit={criarConta}>
              <label className="account-field">
                Nome
                <input
                  type="text"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  required
                />
              </label>

              <label className="account-field">
                E-mail
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>

              <label className="account-field">
                Telefone
                <input
                  type="tel"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                  required
                />
              </label>

              <label className="account-field">
                Senha
                <input
                  type="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  required
                />
              </label>

              <label className="account-consent account-consent--lgpd">
                <input
                  type="checkbox"
                  checked={consentimento}
                  onChange={(event) => setConsentimento(event.target.checked)}
                />
                Aceito a Política de Privacidade e o uso dos meus dados nesta simulação.
              </label>

              <button className="login-submit" type="submit">
                Criar conta
              </button>
            </form>

            <p className="account-switch">
              Já tem conta?{' '}
              <button className="text-button" type="button" onClick={() => alternarModo('entrar')}>
                Entrar
              </button>
            </p>
          </>
        )}
      </section>
    </div>
  );
}

export default Conta;
