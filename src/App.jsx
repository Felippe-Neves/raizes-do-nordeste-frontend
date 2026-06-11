import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Carrinho from './pages/Carrinho'
import Fidelidade from './pages/Fidelidade'
import Conta from './pages/Conta'
import Dashboard from './pages/Dashboard'
import Pedidos from './pages/Pedidos'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = () => setMenuAberto(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__content">
          <Link className="brand" to="/">Raízes do Nordeste</Link>
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
            <Link to="/carrinho" onClick={fecharMenu}>Carrinho</Link>
            <Link to="/fidelidade" onClick={fecharMenu}>Fidelidade</Link>
            <Link to="/conta" onClick={fecharMenu}>Login</Link>
            <Link to="/dashboard" onClick={fecharMenu}>Dashboard</Link>
            <Link to="/pedidos" onClick={fecharMenu}>Pedidos</Link>
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
    </div>
  )
}

export default App
