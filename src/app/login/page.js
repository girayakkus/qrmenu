'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // API ile giriş işlemi burada yapılır
    alert(`Giriş yapılıyor: ${email}`)
  }

  return (
    <main style={styles.container}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Giriş Yap
        </button>
      </form>
    </main>
  )
}

const styles = {
  container: {
    maxWidth: 400,
    margin: 'auto',
    padding: '2rem',
    textAlign: 'center',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.75rem', fontSize: '1rem' },
  button: {
    padding: '0.75rem',
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}
