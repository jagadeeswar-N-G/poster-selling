import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import GlobalState from "@/context";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/authProvider";

const DM = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poster selling",
  description: "good posters are available",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          //this cn function allows to join the classnames  together
          "relative h-full font-sans antialiased",
          DM.className
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <AuthProvider>
            <Providers>
              <Navbar />
              <div className="flex-grow flex-1">{children}</div>
              <Toaster />
              <Footer />
            </Providers>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
