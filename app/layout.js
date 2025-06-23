import Head from "next/head";
import "./globals.css";
import localFont from "next/font/local";

const croissantOne = localFont({
	src: [
		{
			path: "../fonts/CroissantOne-Regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-croissant",
});

const montserrat = localFont({
	src: [
		{
			path: "../fonts/Montserrat-Thin.ttf",
			weight: "100",
			style: "thin",
		},
		{
			path: "../fonts/Montserrat-Light.ttf",
			weight: "300",
			style: "light",
		},
		{
			path: "../fonts/Montserrat-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/Montserrat-Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../fonts/Montserrat-SemiBold.ttf",
			weight: "600",
			style: "semibold",
		},
		{
			path: "../fonts/Montserrat-Bold.ttf",
			weight: "800",
			style: "bold",
		},
	],
	variable: "--font-montserrat",
});

const jsonLd = {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tesaři Osík",
              image: "https://www.tesariosik.cz/images/hero.jpg",
              url: "https://www.tesariosik.cz",
              telephone: "+420603874860",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Osík 159",
                addressLocality: "Osík",
                postalCode: "569 67",
                addressCountry: "CZ"
              },
              description: "Tesařské a pokrývačské služby s důrazem na kvalitu, tradici a detail.",
              priceRange: "CZK"
}

export const metadata = {
	title: "Tesaři Osík – Truhlářství a Tesařství",
	description: "Specializujeme se na kvalitní tesařské a truhlářské práce.",
    verification: {
        google: "ULsrNionUa2Ml_aVIVlcKeBsMHr-BqDBumLxvDjXIoY",
    },
    manifest: '/manifest.json',
	openGraph: {
		title: "Tesaři Osík - Truhlářství a Tesařství",
		description: "Kvalitní tesařské a truhlářské práce v Osíku a okolí.",
		url: "https://www.tesariosik.cz",
		siteName: "Tesaři Osík",
		images: [
			{
				url: "/images/hero.jpg",
				width: 1200,
				height: 630,
				alt: "Dřevostavba od Tesaři Osík",
			},
		],
		locale: "cs_CZ",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tesaři Osík - Truhlářství a Tesařství",
		description: "Kvalitní tesařské a truhlářské práce.",
		images: ["/images/hero.jpg"],
	},
};
export default function RootLayout({ children }) {
	return (
		<html lang="cs">
			<script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }} />
			<body className={`${croissantOne.variable} ${montserrat.variable}`}>
				{children}
			</body>
		</html>
	);
}
