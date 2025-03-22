import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/component/theme-provider";
import localFont from 'next/font/local';
import SideNavigation from "@/component/common/SideNavigation";
import RightSidebar from "@/component/common/RightSidebar";


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
  openGraph:{
    title: "ONG CHANSY",
    description: "This is my cv as a front-end developer",
    images: [
      {
        url: "http://localhost:3000/api/og"
      }
    ]
  }
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
            <div className="relative flex ">
              <aside className="fixed left-0 top-0 h-screen overflow-y-auto w-[305px] bg-primary-background shadow-2xs px-8 py-12 ">
                <RightSidebar />
              </aside>

              <main className="flex-1 ml-[305px] mr-[108px] h-screen overflow-y-auto p-8">
                {children}
              </main>

              <aside className="fixed flex flex-col items-center right-0 top-0 h-screen w-[108px] bg-primary-background shadow-2xs px-5 pt-12">
                <SideNavigation />
              </aside>
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
