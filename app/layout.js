import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Porfolio Website",
  description: "A personal portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>

      <body
        className={`${outfit.className} ${ovo.className}
        antialiased leading-8 overflow-x-hidden
        dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
