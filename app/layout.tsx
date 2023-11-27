import Header from "@/components/header/page"
import '../styles/reset.css'
import '../styles/global.css'
import Footer from "@/components/footer/page"
import { Provider } from "@/context/MainContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">
        <Provider>
        <Header />
        <main>
          {children}
          </main>
        <Footer />
        </Provider>
        </body>
    </html>
  )
}
