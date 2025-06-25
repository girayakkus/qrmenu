import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'QR Menü',
  description: 'Dijital QR Menü Oluşturma Sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
