import { Link } from 'react-router-dom';
import { promocoes, unidades } from '../data/mockData';

const diferenciais = [
  {
    titulo: 'Cardápio por unidade',
    descricao: 'Escolha sua unidade e veja os sabores disponíveis em cada endereço.'
  },
  {
    titulo: 'Retirada rápida',
    descricao: 'Monte seu pedido digital e acompanhe o preparo até a retirada.'
  },
  {
    titulo: 'Programa de fidelidade',
    descricao: 'Acumule pontos simulados e troque por recompensas especiais.'
  },
  {
    titulo: 'Consentimento LGPD',
    descricao: 'Você controla o uso dos seus dados nesta experiência acadêmica.'
  }
];

function Home() {
  return (
    <div>
      <section className="hero home-hero">
        <div className="home-hero__content">
          <span className="home-kicker">Tradição nordestina perto de você</span>
          <h1>Raízes do Nordeste</h1>
          <p>
            Uma rede de lanchonetes nordestinas que reúne receitas tradicionais e pedidos
            digitais para facilitar sua experiência.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button--primary" to="/cardapio">
              Ver cardápio
            </Link>
            <a className="home-button home-button--secondary" href="#unidades">
              Conhecer unidades
            </a>
          </div>
        </div>
        <div className="home-hero__highlight">
          <strong>{unidades.length} unidades</strong>
          <span>Sabores do Nordeste em diferentes cantos do Rio de Janeiro.</span>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__heading">
          <span className="home-kicker">Ofertas especiais</span>
          <h2>Promoções do Dia</h2>
          <p>Combinações inspiradas na cultura nordestina para aproveitar em nossas unidades.</p>
        </div>
        <div className="home-grid">
          {promocoes.map((promocao) => (
            <article className="home-card home-promotion" key={promocao.id}>
              <span className="home-promotion__discount">{promocao.desconto}% de desconto</span>
              <h3>{promocao.titulo}</h3>
              <p>{promocao.descricao}</p>
              <Link to="/cardapio">Ver no cardápio</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" id="unidades">
        <div className="home-section__heading">
          <span className="home-kicker">Onde estamos</span>
          <h2>Nossas Unidades</h2>
          <p>Encontre a unidade mais próxima e descubra os produtos disponíveis.</p>
        </div>
        <div className="home-grid home-grid--units">
          {unidades.map((unidade) => (
            <article className="home-card home-unit" key={unidade.id}>
              <span className="home-unit__marker" aria-hidden="true">●</span>
              <h3>{unidade.cidade}</h3>
              <p>{unidade.endereco}</p>
              <Link to="/cardapio">Explorar cardápio</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__heading">
          <span className="home-kicker">Nossa experiência</span>
          <h2>Por que escolher o Raízes do Nordeste?</h2>
        </div>
        <div className="home-grid home-grid--features">
          {diferenciais.map((diferencial, indice) => (
            <article className="home-card home-feature" key={diferencial.titulo}>
              <span className="home-feature__number">{String(indice + 1).padStart(2, '0')}</span>
              <h3>{diferencial.titulo}</h3>
              <p>{diferencial.descricao}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
