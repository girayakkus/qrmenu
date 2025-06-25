import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Dijital QR Menü Oluşturun</h1>
        <p>
          Restoranınız, kafeteryanız veya oteliniz için temassız menü deneyimini
          şimdi başlatın.
        </p>
        <button className="cta-button">Hemen Başla</button>
      </header>

      <section className="home-demo">
        <h2>Nasıl Çalışır?</h2>
        <p>Menünüzü oluşturun, biz sizin için QR kodunu üretelim.</p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=https://ornekmenu.com&size=200x200"
          alt="Demo QR Kod"
          className="qr-demo"
        />
      </section>
    </div>
  )
}

export default Home
