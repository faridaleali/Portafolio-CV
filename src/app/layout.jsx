import "./globals.css"

import Footer from "@/components/footer/footer"
import Navbar from "../components/navbar/navbar"

export const metadata = {
  title: 'Portafolio: Ale Ali, Farid',
  description: 'Desarrollado en NextJS',
  keywords: ['Portfolio', 'Fullstack', 'NextJS']
}
 
export default function RootLayout({ children }) {

  

 return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          { children }
        </main>
        <Footer/>
      </body>
    </html>
  )
}
