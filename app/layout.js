import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrepWise - AI Interview Assistant",
  description: "PrepWise is an AI-powered interview assistant designed to help you prepare for technical interviews with ease and confidence.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}  
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>© 2025 My Website. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
    
  );
}
