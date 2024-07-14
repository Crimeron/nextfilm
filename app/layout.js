import { Inter } from "@next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body>
        <div className="Header sticky top-0 shadow-box">
          <Header />
        </div>
        <div className="Body container">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
