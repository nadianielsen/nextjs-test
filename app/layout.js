import Header from './components/Header'
import './globals.css'



// meta - head, i think you can call it 
export const metadata = {
  title: 'Next js 13 - Self Study',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
