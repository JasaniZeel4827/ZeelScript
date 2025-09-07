// import type { Metadata } from "next";
// import { Inter, Calistoga } from 'next/font/google'
// import "./globals.css";
// import { twMerge } from "tailwind-merge";
// import { Header } from "@/sections/Header";
// import { Footer } from "@/sections/Footer";

// const inter = Inter({
//   subsets: ["latin"], 
//   variable: "--font-sans"
// });

// const calistoga = Calistoga({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   weight: ["400"],
// });

// export const metadata: Metadata = {
//   title: "Zeel Jasani | Portfolio",
//   description: "Portfolio of Zeel Jasani - Web Developer",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-behavior-smooth">
//       <body className={twMerge(
//         "min-h-screen text-white font-sans antialiased",
//         inter.variable,
//         calistoga.variable,
//         "bg-[#121927]"
//       )}>
//         <div className="flex flex-col min-h-screen">
//           <Header />
//           <main className="flex-grow">
//             {children}
//           </main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }






import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const inter = Inter({
  subsets: ["latin"], 
  variable: "--font-sans"
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Zeel Jasani | Portfolio",
  description: "Zeel Jasani - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-behavior-smooth">
      <head>
        <link rel="icon" href="/zeel.ico" />
      </head>
      <body className={twMerge(
        "min-h-screen text-white font-sans antialiased",
        inter.variable,
        calistoga.variable,
        "bg-[#121927]"
      )}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}