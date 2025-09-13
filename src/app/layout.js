import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TrustTuition - Professional Online Tutoring",
  description:
    "Connect with expert tutors for personalized one-on-one learning. From £20/hour with no contracts or hidden fees.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
