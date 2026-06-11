import { pedidosMock, produtos, recompensas, unidades } from '../data/mockData';

const coresIndicadores = ['#2a9d8f', '#e9c46a', '#e76f51', '#457b9d'];

function Dashboard() {
  // Resume os dados simulados em indicadores operacionais.
  const indicadores = [
    { titulo: 'Unidades', valor: unidades.length },
    { titulo: 'Produtos', valor: produtos.length },
    { titulo: 'Pedidos', valor: pedidosMock.length },
    { titulo: 'Recompensas', valor: recompensas.length }
  ];

  const totalPedidos = pedidosMock.reduce((total, pedido) => total + pedido.total, 0);
  const pedidosEmAndamento = pedidosMock.filter(
    (pedido) => pedido.status !== 'Concluído'
  ).length;

  const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  return (
    <main
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1100px',
        margin: '0 auto'
      }}
    >
      <h1>Dashboard</h1>
      <p style={{ color: '#555', lineHeight: '1.5' }}>
        Visão geral dos dados simulados da operação, sem utilização de backend.
      </p>

      <section
        aria-label="Indicadores gerais"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          margin: '24px 0'
        }}
      >
        {indicadores.map((indicador, indice) => (
          <article
            key={indicador.titulo}
            style={{
              padding: '20px',
              borderRadius: '8px',
              borderTop: `5px solid ${coresIndicadores[indice]}`,
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
          >
            <p style={{ margin: '0 0 8px', color: '#666', fontWeight: 'bold' }}>
              {indicador.titulo}
            </p>
            <strong style={{ fontSize: '32px', color: '#222' }}>{indicador.valor}</strong>
          </article>
        ))}
      </section>

      <section
        aria-labelledby="resumo-operacional"
        style={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}
      >
        <h2 id="resumo-operacional" style={{ marginTop: 0 }}>
          Resumo Operacional
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}
        >
          <article style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#fff' }}>
            <h3 style={{ margin: '0 0 8px' }}>Total dos pedidos</h3>
            <strong style={{ color: '#2a9d8f', fontSize: '24px' }}>
              {formatarMoeda(totalPedidos)}
            </strong>
            <p style={{ marginBottom: 0, color: '#666' }}>Valor acumulado nos pedidos simulados.</p>
          </article>

          <article style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#fff' }}>
            <h3 style={{ margin: '0 0 8px' }}>Pedidos em andamento</h3>
            <strong style={{ color: '#e76f51', fontSize: '24px' }}>{pedidosEmAndamento}</strong>
            <p style={{ marginBottom: 0, color: '#666' }}>
              Pedidos em preparação ou aguardando retirada.
            </p>
          </article>

          <article style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#fff' }}>
            <h3 style={{ margin: '0 0 8px' }}>Cobertura das unidades</h3>
            <strong style={{ color: '#457b9d', fontSize: '24px' }}>
              {unidades.map((unidade) => unidade.cidade).join(', ')}
            </strong>
            <p style={{ marginBottom: 0, color: '#666' }}>Cidades atendidas pela operação simulada.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
