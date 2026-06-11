import { useEffect, useState } from 'react';

const formatarMoeda = (valor) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

const agruparProdutos = (produtos) =>
  produtos.reduce((agrupados, produto) => {
    const id = produto.id ?? produto.nome;
    const existente = agrupados.find((item) => item.id === id);

    if (existente) {
      existente.quantidade += produto.quantidade ?? 1;
      return agrupados;
    }

    return [
      ...agrupados,
      {
        ...produto,
        id,
        quantidade: produto.quantidade ?? 1
      }
    ];
  }, []);

const lerCarrinho = () => {
  // Recupera o carrinho salvo localmente para manter os itens entre acessos.
  const carrinhoSalvo = localStorage.getItem('carrinho');
  const produtos = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  return agruparProdutos(produtos);
};

function Carrinho() {
  const [itens, setItens] = useState(lerCarrinho);

  useEffect(() => {
    // Sincroniza cada alteração do carrinho com o localStorage.
    if (itens.length === 0) {
      localStorage.removeItem('carrinho');
      return;
    }

    const produtosParaSalvar = itens.flatMap(({ quantidade, ...produto }) =>
      Array.from({ length: quantidade }, () => produto)
    );

    localStorage.setItem('carrinho', JSON.stringify(produtosParaSalvar));
  }, [itens]);

  const alterarQuantidade = (id, variacao) => {
    setItens((itensAtuais) =>
      itensAtuais
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade + variacao }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const removerItem = (id) => {
    setItens((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  };

  const limparCarrinho = () => {
    setItens([]);
  };

  const finalizarPedido = () => {
    alert('Pagamento enviado para serviço externo.');
    setItens([]);
    alert('Pedido confirmado com sucesso.');
  };

  const quantidadeTotal = itens.reduce((total, item) => total + item.quantidade, 0);
  const subtotal = itens.reduce(
    (total, item) => total + (item.preco || 0) * item.quantidade,
    0
  );
  const total = subtotal;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Carrinho</h1>

      {itens.length === 0 ? (
        <p>Seu carrinho está vazio. Acesse o cardápio para adicionar produtos.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'start'
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {itens.map((item) => (
              <li key={item.id}>
                <strong style={{ fontSize: '18px' }}>{item.nome}</strong>
                <p style={{ margin: '4px 0', color: '#666' }}>{item.categoria}</p>
                <p style={{ margin: '4px 0' }}>
                  <strong>Preço unitário:</strong> {formatarMoeda(item.preco || 0)}
                </p>
                <p style={{ margin: '4px 0' }}>
                  <strong>Subtotal:</strong>{' '}
                  {formatarMoeda((item.preco || 0) * item.quantidade)}
                </p>

                <div
                  style={{
                    marginTop: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => alterarQuantidade(item.id, -1)}
                    aria-label={`Diminuir quantidade de ${item.nome}`}
                  >
                    -
                  </button>
                  <strong>Quantidade: {item.quantidade}</strong>
                  <button
                    type="button"
                    onClick={() => alterarQuantidade(item.id, 1)}
                    aria-label={`Aumentar quantidade de ${item.nome}`}
                  >
                    +
                  </button>
                  <button type="button" onClick={() => removerItem(item.id)}>
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <section
            style={{
              padding: '20px',
              borderRadius: '14px',
              backgroundColor: '#f8ead0'
            }}
          >
            <h2 style={{ marginTop: 0 }}>Resumo do pedido</h2>
            <p style={{ margin: '8px 0' }}>
              <strong>Quantidade total de itens:</strong> {quantidadeTotal}
            </p>
            <p style={{ margin: '8px 0' }}>
              <strong>Subtotal:</strong> {formatarMoeda(subtotal)}
            </p>
            <p style={{ margin: '8px 0 20px', fontSize: '20px' }}>
              <strong>Total:</strong> {formatarMoeda(total)}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button type="button" onClick={limparCarrinho}>
                Limpar carrinho
              </button>
              <button type="button" onClick={finalizarPedido}>
                Finalizar pedido
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
