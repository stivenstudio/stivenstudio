import Script from 'next/script'
import './globals.css'

export const metadata = {
	title: {
		default: 'STIVEN STUDIO',
		template: "%s | STIVEN STUDIO"
	},
	description: 'Digital art, Web Design, Front-end Development',
	openGraph: {
	    title: 'STIVEN STUDIO',
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
				<meta 
					property="og:image"
					content=""
				/>
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
				{children}
			</body>
		</html>
	)
}
