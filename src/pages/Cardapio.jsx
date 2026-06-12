import { useState } from 'react';
import { produtos, unidades } from '../data/mockData';

const escolherEmoji = (produto) => {
  const nome = produto.nome.toLocaleLowerCase('pt-BR');
  const categoria = produto.categoria.toLocaleLowerCase('pt-BR');

  if (nome.includes('café') || nome.includes('cafe')) return '☕';
  if (categoria.includes('tapioca')) return '🫓';
  if (categoria.includes('cuscuz')) return '🌽';
  if (categoria.includes('bolo')) return '🍰';
  if (categoria.includes('bebida')) return '🥤';
  if (categoria.includes('combo')) return '🍽️';

  return '🍴';
};

function Cardapio() {
  const [unidadeSelecionada, setUnidadeSelecionada] = useState(unidades[0]?.id ?? '');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  const unidadeAtual = unidades.find((unidade) => unidade.id === unidadeSelecionada);
  // Exibe apenas produtos disponíveis na unidade e categoria selecionadas.
  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.unidadesDisponiveis.includes(unidadeSelecionada) &&
      (categoriaSelecionada === 'Todos' || produto.categoria === categoriaSelecionada)
  );

  const formatarPreco = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  const handleAdicionarCarrinho = (produto) => {
    const carrinhoAtual = localStorage.getItem('carrinho');
    const carrinho = carrinhoAtual ? JSON.parse(carrinhoAtual) : [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${produto.nome} adicionado ao carrinho`);
  };

  return (
    <div className="page-layout catalog-page" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Cardápio</h1>

      <div className="filter-bar" style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <div className="filter-field">
          <label htmlFor="unidade" style={{ marginRight: '8px', fontWeight: 'bold' }}>
            Escolha a unidade:
          </label>
          <select
            id="unidade"
            value={unidadeSelecionada}
            onChange={(event) => setUnidadeSelecionada(event.target.value)}
            style={{ padding: '8px', borderRadius: '4px' }}
          >
            {unidades.map((unidade) => (
              <option key={unidade.id} value={unidade.id}>
                {unidade.cidade}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label htmlFor="categoria" style={{ marginRight: '8px', fontWeight: 'bold' }}>
            Categoria:
          </label>
          <select
            id="categoria"
            value={categoriaSelecionada}
            onChange={(event) => setCategoriaSelecionada(event.target.value)}
            style={{ padding: '8px', borderRadius: '4px' }}
          >
            {['Todos', 'Tapiocas', 'Cuscuz', 'Bolos', 'Bebidas', 'Combos'].map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>

      {unidadeAtual && (
        <p style={{ marginBottom: '24px' }}>
          Produtos disponíveis na unidade de <strong>{unidadeAtual.cidade}</strong>.
        </p>
      )}

      <div
        className="responsive-grid catalog-grid"
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'
        }}
      >
        {produtosFiltrados.map((produto) => (
          <div
            className="responsive-card catalog-card"
            key={produto.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              backgroundColor: '#fff'
            }}
          >
            <div className="catalog-card__visual" aria-hidden="true">
              <span>{escolherEmoji(produto)}</span>
            </div>
            <h2 style={{ margin: '0 0 8px' }}>{produto.nome}</h2>
            <p style={{ margin: '0 0 8px', color: '#666' }}>{produto.categoria}</p>
            <p style={{ margin: '0 0 12px', lineHeight: '1.4' }}>{produto.descricao}</p>
            <p style={{ margin: '0 0 12px', fontWeight: 'bold' }}>
              {formatarPreco(produto.preco)}
            </p>
            {produto.periodoEspecial && (
              <p style={{ color: '#b65c00', margin: '0 0 12px' }}>
                Produto sazonal disponível em período especial
              </p>
            )}
            <button
              type="button"
              onClick={() => handleAdicionarCarrinho(produto)}
              style={{
                padding: '10px 14px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#2a9d8f',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardapio;
