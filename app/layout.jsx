import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

const title = 'Stiven Studio'

export const metadata = {
	title: {
		default: title,
		template: "%s | " + title
	},
	description: 'Digital art, Web Design, Front-end Development',
	openGraph: {
		title: title,
		description: 'Digital art, Web Design, Front-end Development',
		images: [
			{
				url: 'https://placehold.co/400',
				type: "image/png"
			}
		]
	},
	keywords: ['Web Design', 'Web Development', 'Freelancer'],
	authors: [{ name: 'Stiven Castro' }],
	creator: 'Stiven Castro'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
				<Script strategy='afterInteractive'>
					{`
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname
            });
          `}
				</Script>
			</head>
			<body>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
