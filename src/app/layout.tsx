import { ThemeProvider } from '@emotion/react';
import './globals.scss'
import { Roboto } from 'next/font/google'
import { theme } from './theme'



const inter = Roboto({
  subsets: ['latin'],
  weight: '100'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
       <head>
       <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
       </head>
      <body className={inter.className}>
        <>
        {children}
        </>
        </body>
        
    </html>
  )
}
