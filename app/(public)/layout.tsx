import "@/app/(public)/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-[#faf7f2]">
        <Header />
        <Navbar />
        <main className="max-w-[1200px] mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
