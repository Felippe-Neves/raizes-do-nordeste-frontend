function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Raízes do Nordeste</h1>
        <p>Sabores tradicionais que celebram a riqueza da culinária nordestina.</p>
      </section>

      <section className="home-section">
        <h2>Promoções do Dia</h2>
        <div className="home-grid">
          <article className="home-card">
            <h3>Tapioca Nordestina</h3>
            <p>R$ 15,00</p>
          </article>

          <article className="home-card">
            <h3>Cuscuz Recheado</h3>
            <p>R$ 18,00</p>
          </article>

          <article className="home-card">
            <h3>Bolo de Macaxeira</h3>
            <p>R$ 10,00</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
