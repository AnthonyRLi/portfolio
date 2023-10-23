import { Inter } from 'next/font/google'
import './globals.css'
import Providers from "./Providers/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Anthony's Portfolio`,
  description: `Welcome to Anthony R Li's Portfolio!`,
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>        
      </html>
    
  )
}
