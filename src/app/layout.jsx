import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Toaster from "@/components/toast/Toaster";
import { Roboto } from "next/font/google";
import AuthProvider from "../../src/providers/AuthProvider";
import ThemeProvider from "../../src/providers/ThemeProvider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Burger Labo",
  description: "BurgerLabo is a food-ordering web application",
  // icons:{
  //   icon:['/favicon.ico']
  // }
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
            <main className="lg:max-w-6xl mx-auto lg:p-4">
              <Header />
              <div className="min-h-[calc(100vh-257px)]">{children}</div>
              <Footer />
            </main>
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
