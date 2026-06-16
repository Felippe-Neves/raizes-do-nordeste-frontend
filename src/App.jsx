import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Carrinho from './pages/Carrinho'
import Fidelidade from './pages/Fidelidade'
import Conta from './pages/Conta'
import Dashboard from './pages/Dashboard'
import Pedidos from './pages/Pedidos'
import './App.css'

const contarItensCarrinho = () => {
  const carrinhoSalvo = localStorage.getItem('carrinho')
  const carrinho = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []
  return carrinho.length
}

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(contarItensCarrinho)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const fecharMenu = () => setMenuAberto(false)

  useEffect(() => {
    const atualizarContador = () => setQuantidadeCarrinho(contarItensCarrinho())

    window.addEventListener('storage', atualizarContador)
    window.addEventListener('carrinho-atualizado', atualizarContador)

    return () => {
      window.removeEventListener('storage', atualizarContador)
      window.removeEventListener('carrinho-atualizado', atualizarContador)
    }
  }, [])

  return (
    <div className={`app-shell ${menuAberto ? 'app-shell--menu-open' : ''} ${isHome ? 'app-shell--home' : ''}`}>
      <header className="site-header">
        <div className="site-header__content">
          <Link className="brand" to="/">
            <span>Raízes do</span>
            <span>Nordeste</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            ☰ Menu
          </button>
          <nav
            id="menu-principal"
            className={`site-nav ${menuAberto ? 'site-nav--open' : ''}`}
            aria-label="Navegação principal"
          >
            <div className="mobile-menu__header">
              <span>Menu</span>
              <button
                className="menu-close"
                type="button"
                aria-label="Fechar menu"
                onClick={fecharMenu}
              >
                X
              </button>
            </div>
            <Link to="/" onClick={fecharMenu}>Início</Link>
            <Link to="/cardapio" onClick={fecharMenu}>Cardápio</Link>
            <Link className="cart-link" to="/carrinho" onClick={fecharMenu}>
              Carrinho
              {quantidadeCarrinho > 0 && (
                <span className="cart-link__badge" aria-label={`${quantidadeCarrinho} itens no carrinho`}>
                  {quantidadeCarrinho}
                </span>
              )}
            </Link>
            <Link to="/pedidos" onClick={fecharMenu}>Pedidos</Link>
            <Link to="/fidelidade" onClick={fecharMenu}>Fidelidade</Link>
            <Link to="/conta" onClick={fecharMenu}>Login</Link>
            <Link to="/dashboard" onClick={fecharMenu}>Painel</Link>
          </nav>
        </div>
      </header>

      {menuAberto && (
        <button
          className="menu-overlay"
          type="button"
          aria-label="Fechar menu"
          onClick={fecharMenu}
        />
      )}

      <div className="app-content">
        {/* Rotas principais da experiência: vitrine, pedido, conta e painéis simulados. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/fidelidade" element={<Fidelidade />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pedidos" element={<Pedidos />} />
        </Routes>
      </div>

      <footer className="site-footer">
        Desenvolvido por Felipe Neves • 2026
      </footer>
    </div>
  )
}

export default App
