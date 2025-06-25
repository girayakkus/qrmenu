'use client'
import Link from 'next/link'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">QR Menü</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link href="/login">Giriş Yap</Link>
        </li>
        <li>
          <Link href="/register">Kayıt Ol</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
