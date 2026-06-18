import { useEffect, useState } from 'react';
import { recompensas } from '../data/mockData';

function Fidelidade() {
  const [pontos, setPontos] = useState(180);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (!mensagem) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setMensagem('');
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [mensagem]);

  // Resgates descontam pontos localmente para demonstrar a regra do programa.
  const handleResgatar = (recompensa) => {
    if (pontos >= recompensa.pontosNecessarios) {
      setPontos((atual) => atual - recompensa.pontosNecessarios);
      setMensagem('Recompensa resgatada com sucesso!');
    }
  };

  return (
    <div className="page-layout loyalty-page" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '900px' }}>
      <h1>Programa de Fidelidade</h1>
      <p>
        Este programa de fidelidade é simulado e respeita o consentimento LGPD salvo na página de login.
      </p>
      <div className="loyalty-balance" style={{ margin: '20px 0', padding: '16px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
        <strong>Saldo de pontos:</strong> {pontos}
      </div>

      {mensagem && (
        <p
          className="loyalty-feedback"
          style={{
            margin: '0 0 16px',
            padding: '10px 12px',
            border: '1px solid rgba(42, 120, 77, 0.24)',
            borderRadius: '10px',
            color: '#1b4332',
            backgroundColor: '#d8f3dc',
            fontWeight: 700
          }}
        >
          {mensagem}
        </p>
      )}

      <div
        className="responsive-grid loyalty-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px'
        }}
      >
        {recompensas.map((recompensa) => {
          const podeResgatar = pontos >= recompensa.pontosNecessarios;

          return (
            <div
              className="responsive-card loyalty-card"
              key={recompensa.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
              }}
            >
              <h2 style={{ margin: '0 0 8px' }}>{recompensa.titulo}</h2>
              <p style={{ margin: '0 0 8px', color: '#666' }}>{recompensa.descricao}</p>
              <p style={{ margin: '0 0 4px' }}>
                <strong>Tipo:</strong> {recompensa.tipo}
              </p>
              <p style={{ margin: '0 0 12px' }}>
                <strong>Pontos necessários:</strong> {recompensa.pontosNecessarios}
              </p>
              <button
                type="button"
                onClick={() => handleResgatar(recompensa)}
                disabled={!podeResgatar}
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: podeResgatar ? '#2a9d8f' : '#999',
                  color: '#fff',
                  cursor: podeResgatar ? 'pointer' : 'not-allowed'
                }}
              >
                {podeResgatar ? 'Resgatar recompensa' : 'Pontos insuficientes'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Fidelidade;
