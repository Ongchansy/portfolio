import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/component/theme-provider";
import localFont from 'next/font/local';
import RightSidebar from "@/component/common/RightSidebar";
import MobileHeader from "@/component/HeaderMobile";


const Inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter_24pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter_24pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter_24pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter_24pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "ONG CHANSY",
  authors: {
    name: "Ong Chansy"
  },
  description: "Web development portfolio, Nextjs Tailwindcss",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Inter.className}  antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <MobileHeader />
            <div className="flex h-screen">
              <aside className="md:fixed  hidden lg:block left-0 top-0 lg:overflow-y-auto w-[305px] bg-primary-background shadow-2xs px-8 py-12 ">
                <RightSidebar />
              </aside>

              <main className="lg:flex-1 lg:ml-[305px] overflow-y-auto lg:px-8">
                {children}
              </main>
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
