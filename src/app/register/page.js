'use client'
import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    // API ile kayıt işlemi burada yapılır
    alert(`Kayıt olunuyor: ${email}`)
  }

  return (
    <main style={styles.container}>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister} style={styles.form}>
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
          Kayıt Ol
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
    backgroundColor: '#198754',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}
