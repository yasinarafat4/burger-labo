
import { Roboto } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Burger Labo",
  description: "Generated by create next app",
  // icons:{
  //   icon:['/favicon.ico']
  // }
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="lg:max-w-6xl mx-auto lg:p-4">
          <Header />
          <div className="min-h-[calc(100vh-257px)]">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
