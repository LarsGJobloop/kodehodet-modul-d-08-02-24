import { Outlet, Link } from 'react-router-dom'

export function RootLayout() {
  return (
    <div>
      <header>
        <p>Logo</p>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>Module D</p>
      </footer>
    </div>
  )
}