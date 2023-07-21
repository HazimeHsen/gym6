import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coach Makram",
  description: "Coach Makram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/images/logo.png" type="image/x-icon" />
      </head>
      <body className="mybg">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
