import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/QueryClientProvider";
import { ToastContainer } from "react-toastify";

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
    "Connect with expert tutors for personalised one-to-one learning. From £20/hour with no contracts or hidden fees.",
  keywords:
    "tutoring, online tutors, UK tutors, GCSE, A-Level, mathematics, English, science",
  authors: [{ name: "TrustTuition" }],
  openGraph: {
    title: "TrustTuition - Professional Online Tutoring",
    description: "Expert tutors from £20/hour",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${inter.variable} antialiased`}>
        <ToastContainer />
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
