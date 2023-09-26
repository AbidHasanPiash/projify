import './globals.css'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProjPify',
  description: 'Organize your work and life, finally.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-gray-950 text-gray-200'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
