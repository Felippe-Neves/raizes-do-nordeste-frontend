import { Link } from 'react-router-dom';
import { promocoes, unidades } from '../data/mockData';

const diferenciais = [
  {
    icone: 'menu',
    titulo: 'Cardápio personalizado por unidade',
    descricao: 'Veja apenas os pratos e sabores disponíveis na unidade escolhida.'
  },
  {
    icone: 'star',
    titulo: 'Programa de fidelidade',
    descricao: 'Acumule pontos a cada pedido e aproveite recompensas especiais.'
  },
  {
    icone: 'clock',
    titulo: 'Retirada rápida',
    descricao: 'Faça seu pedido online e retire sem filas, no melhor horário para você.'
  },
  {
    icone: 'shield',
    titulo: 'Consentimento LGPD',
    descricao: 'Seus dados e suas escolhas são tratados com clareza, segurança e respeito.'
  }
];

const icones = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  menu: (
    <>
      <path d="M6 4v16M10 4v16M6 9h4M6 15h4M15 5h3v14h-3z" />
      <path d="M15 9h3" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  shield: <path d="M12 3 5 6v5c0 4.5 2.7 7.7 7 10 4.3-2.3 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
};

function Icone({ nome }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icones[nome]}
    </svg>
  );
}

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-kicker">Comida afetiva, sabor de casa</span>
          <h1>Raízes do <em>Nordeste</em></h1>
          <p className="home-hero__subtitle home-hero__subtitle--desktop">
            Receitas tradicionais, ingredientes cheios de história e a praticidade de pedir
            online. Escolha sua unidade e viva uma experiência nordestina perto de você.
          </p>
          <p className="home-hero__subtitle home-hero__subtitle--mobile">
            Sabores nordestinos feitos com afeto, perto de você.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button--primary" to="/cardapio">
              Ver Cardápio
              <Icone nome="arrow" />
            </Link>
            <Link className="home-button home-button--secondary" to="/conta">Login</Link>
          </div>
          <p className="home-hero__mobile-note">Retirada rápida e pontos de fidelidade em cada pedido.</p>
          <div className="home-hero__facts" aria-label="Destaques">
            <span><strong>6</strong> unidades</span>
            <span><strong>+20</strong> sabores</span>
            <span><strong>100%</strong> nordestino</span>
          </div>
        </div>

        <div className="home-hero__visual" aria-hidden="true">
          <div className="home-hero__sun" />
          <div className="home-hero__plate">
            <span className="home-hero__food home-hero__food--one" />
            <span className="home-hero__food home-hero__food--two" />
            <span className="home-hero__food home-hero__food--three" />
          </div>
          <span className="home-hero__label">Feito com afeto</span>
        </div>
      </section>

      <section className="home-section" id="unidades">
        <div className="home-section__heading">
          <div>
            <span className="home-kicker">Do nosso Nordeste para o Rio</span>
            <h2>Nossas Unidades</h2>
          </div>
          <p>Encontre a casa mais próxima e descubra o cardápio preparado para cada região.</p>
        </div>
        <div className="home-grid home-grid--units">
          {unidades.map((unidade, indice) => (
            <article className="home-unit" key={unidade.id}>
              <div className="home-unit__top">
                <span className="home-icon"><Icone nome="pin" /></span>
                <span className="home-unit__number">{String(indice + 1).padStart(2, '0')}</span>
              </div>
              <h3>{unidade.cidade}</h3>
              <p>{unidade.endereco}</p>
              <Link to="/cardapio">
                Ver cardápio <Icone nome="arrow" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-promotions">
        <div className="home-section__heading">
          <div>
            <span className="home-kicker">Sabores em destaque</span>
            <h2>Promoções</h2>
          </div>
          <p>Combinações especiais para deixar seu pedido ainda mais gostoso.</p>
        </div>
        <div className="home-grid home-grid--promotions">
          {promocoes.map((promocao) => (
            <article className="home-promotion" key={promocao.id}>
              <span className="home-promotion__discount">{promocao.desconto}% OFF</span>
              <h3>{promocao.titulo}</h3>
              <p>{promocao.descricao}</p>
              <Link to="/cardapio">Ver no cardápio <Icone nome="arrow" /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-benefits">
        <div className="home-section__heading home-section__heading--center">
          <div>
            <span className="home-kicker">Uma experiência completa</span>
            <h2>Por que escolher o Raízes do Nordeste?</h2>
          </div>
          <p>Tradição e tecnologia trabalhando juntas para deixar cada pedido mais gostoso.</p>
        </div>
        <div className="home-grid home-grid--features">
          {diferenciais.map((diferencial) => (
            <article className="home-feature" key={diferencial.titulo}>
              <span className="home-icon home-icon--feature">
                <Icone nome={diferencial.icone} />
              </span>
              <h3>{diferencial.titulo}</h3>
              <p>{diferencial.descricao}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
