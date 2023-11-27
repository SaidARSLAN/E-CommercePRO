import '../styles/reset.css'
import '../styles/global.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import { Provider } from '@/context/MainContext'
import SideBar from '@/components/sidebar/page'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <SideBar />
        <div className="container">
        <Header />
        <main>
          {children}
          </main>
          <Footer />
        </div>
        </Provider>
        </body>
    </html>
  )
}
