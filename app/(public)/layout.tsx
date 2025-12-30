import "@/app/(public)/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import DarkModeToggle from "../components/DarkModeToggle";
// import { Providers } from "../providers/ThemeProvider";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <Header />
          <Navbar />
          <main className="max-w-[1200px] mx-auto px-4">{children}</main>
          <ScrollToTop />
          <DarkModeToggle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
