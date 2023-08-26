import Script from 'next/script'
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
      <head>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=G-79KXEWVSG1`} />
        <Script strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-79KXEWVSG1', {
              page_path: window.location.pathname
            });
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}