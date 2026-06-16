import { useState } from 'react';

const lerUsuarioSalvo = () => {
  const usuario = localStorage.getItem('usuario');
  return usuario ? JSON.parse(usuario) : null;
};

function Conta() {
  const [modo, setModo] = useState('entrar');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [consentimento, setConsentimento] = useState(false);
  const [usuarioSalvo, setUsuarioSalvo] = useState(lerUsuarioSalvo);

  // Login e cadastro são fluxos simulados; apenas o cadastro grava dados locais.
  const entrar = (event) => {
    event.preventDefault();
    alert('Login simulado com sucesso.');
  };

  const criarConta = (event) => {
    event.preventDefault();

    // Exige consentimento LGPD antes de salvar os dados simulados.
    if (!consentimento) {
      alert('Por favor, aceite a Política de Privacidade para continuar.');
      return;
    }

    const usuario = { nome, email, telefone, senha };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    setUsuarioSalvo(usuario);
    alert('Conta criada com sucesso.');
  };

  const excluirDados = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('carrinho');
    setUsuarioSalvo(null);
    setNome('');
    setEmail('');
    setTelefone('');
    setSenha('');
    setConsentimento(false);
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
                <button className="text-button" type="button">
                  Esqueci minha senha
                </button>
              </div>

              <button className="login-submit" type="submit">
                Entrar
              </button>
            </form>

            <p className="account-switch">
              Não tem conta ainda?{' '}
              <button className="text-button" type="button" onClick={() => setModo('criar')}>
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
              <button className="text-button" type="button" onClick={() => setModo('entrar')}>
                Entrar
              </button>
            </p>
          </>
        )}
      </section>

      {usuarioSalvo && (
        <section className="account-panel account-user">
          <h2>Usuário cadastrado</h2>
          <p><strong>Nome:</strong> {usuarioSalvo.nome}</p>
          <p><strong>E-mail:</strong> {usuarioSalvo.email}</p>
          <p><strong>Telefone:</strong> {usuarioSalvo.telefone}</p>
          <button type="button" onClick={excluirDados}>
            Excluir meus dados
          </button>
        </section>
      )}
    </div>
  );
}

export default Conta;
