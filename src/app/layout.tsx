import type { Metadata } from "next";
import "./globals.css";
import AdSense from "./components/AdSense";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Akademiya",
    template: "Akademiya | %s",
  },
  icons: {
    icon: "/logo.webp",
  },
  metadataBase: new URL("https://akademiya.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[url('/backgroundImage.webp')] bg-fixed bg-cover bg-background"
    >
      <head>
        <AdSense pId={process.env.NEXT_PUBLIC_ADSENSE_ID as string} />
      </head>
      <body>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
