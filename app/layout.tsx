import '../styles/reset.css'
import '../styles/global.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">
        <Header />
        <main>
          {children}
          </main>
          <Footer />
        </body>
    </html>
  )
}
