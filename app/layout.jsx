import './globals.css'

export const metadata = {
  title: {
    default: 'STIVEN STUDIO',
    template: "%s | STIVEN STUDIO"
  },
  description: 'Digital art, Web Design, Front-end Development'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}