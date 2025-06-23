
import "./globals.css";
import localFont from "next/font/local";

const croissantOne = localFont({
    src: [
        {
            path: "../fonts/CroissantOne-Regular.ttf",
            weight: "400",
            style: "normal"
        }
    ],
    variable: '--font-croissant',
})

const montserrat = localFont({
    src: [
        {
            path: "../fonts/Montserrat-Thin.ttf",
            weight: "100",
            style: "thin"
        },
        {
            path: "../fonts/Montserrat-Light.ttf",
            weight: "300",
            style: "light"
        },
        {
            path: "../fonts/Montserrat-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../fonts/Montserrat-Italic.ttf",
            weight: "400",
            style: "italic"
        },
        {
            path: "../fonts/Montserrat-SemiBold.ttf",
            weight: "600",
            style: "semibold"
        },
        {
            path: "../fonts/Montserrat-Bold.ttf",
            weight: "800",
            style: "bold"
        },
    ],
    variable: '--font-montserrat',
})

export const metadata = {
  title: "Tesaři Osík",
  description: "Roubenky a dřevo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${croissantOne.variable} ${montserrat.variable}`}
            
      >
        {children}
      </body>
    </html>
  );
}
