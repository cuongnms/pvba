import "@/app/globals.css";

import { ThemeProvider } from "next-themes";
import ScrollToTop from "./component/ScrollToTop";
import DarkModeToggle from "./component/DarkModeToggle";
import Footer from "./component/Footer";
import HeaderNavbar from "./component/HeaderNavbar";
import AuthProvider from "./providers/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { filterMenuByRole, MENU } from "./lib/common";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
const menu = filterMenuByRole(
    MENU,
    session?.user?.role
  );
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <AuthProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <HeaderNavbar menu={menu}/>
            {children}
            <ScrollToTop />
            <DarkModeToggle />
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
