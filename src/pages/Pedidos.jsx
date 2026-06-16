import { pedidosMock, unidades } from '../data/mockData';

const estilosStatus = {
  'Concluído': {
    backgroundColor: '#d8f3dc',
    color: '#1b4332'
  },
  'Em preparação': {
    backgroundColor: '#fff3bf',
    color: '#8a5700'
  },
  'Aguardando retirada': {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  }
};

const descricoesStatus = {
  'Concluído': 'Pedido finalizado e entregue ao cliente.',
  'Em preparação': 'Pedido sendo preparado pela unidade.',
  'Aguardando retirada': 'Pedido pronto e disponível para retirada.'
};

function Pedidos() {
  const formatarTotal = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  const formatarData = (data) =>
    new Date(data).toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short'
    });

  const encontrarUnidade = (unidadeId) =>
    unidades.find((unidade) => unidade.id === unidadeId)?.nome ?? unidadeId;

  const estiloDoStatus = (status) => estilosStatus[status] ?? {
    backgroundColor: '#f1f1f1',
    color: '#444'
  };

  return (
    <main
      className="page-layout orders-page"
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1100px',
        margin: '0 auto'
      }}
    >
      <h1>Acompanhamento de Pedidos</h1>
      <p style={{ lineHeight: '1.5', color: '#555' }}>
        Esta página é uma simulação acadêmica de acompanhamento de pedidos. Os dados exibidos
        são fictícios e não utilizam servidor.
      </p>

      <section
        className="orders-legend"
        aria-label="Legenda dos status"
        style={{
          margin: '24px 0',
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}
      >
        <h2 style={{ margin: '0 0 12px', fontSize: '18px' }}>Legenda dos status</h2>
        <div
          className="responsive-grid orders-legend__grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px'
          }}
        >
          {Object.entries(estilosStatus).map(([status, estilo]) => (
            <div
              className="orders-legend__item"
              key={status}
              style={{
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#fff'
              }}
            >
              <span
                style={{
                  ...estilo,
                  display: 'inline-block',
                  padding: '7px 10px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                {status}
              </span>
              <p style={{ margin: '8px 0 0', color: '#555', fontSize: '14px' }}>
                {descricoesStatus[status]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="responsive-grid orders-grid"
        aria-label="Lista de pedidos"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}
      >
        {/* Exibe pedidos simulados para demonstrar o acompanhamento sem servidor. */}
        {pedidosMock.map((pedido) => (
          <article
            className="order-card"
            key={pedido.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '18px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)'
            }}
          >
            <div
              className="order-card__header"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '16px'
              }}
            >
              <h2 style={{ margin: 0, fontSize: '20px' }}>
                Pedido {pedido.id.replace('pedido_', '#')}
              </h2>
              <span
                style={{
                  ...estiloDoStatus(pedido.status),
                  padding: '7px 10px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}
              >
                {pedido.status}
              </span>
            </div>

            <p style={{ margin: '0 0 10px' }}>
              <strong>Cliente:</strong> {pedido.cliente}
            </p>
            <p style={{ margin: '0 0 10px' }}>
              <strong>Unidade:</strong> {encontrarUnidade(pedido.unidadeId)}
            </p>
            <p style={{ margin: '0 0 10px' }}>
              <strong>Total:</strong> {formatarTotal(pedido.total)}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Data:</strong> {formatarData(pedido.data)}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Pedidos;
