import type { Metadata } from "next";
import { Vazirmatn, IBM_Plex_Mono } from "next/font/google";
import { Agentation } from "agentation";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دیابان | دستگاه تست قندخون با نوار همیشه در دسترس",
  description:
    "دستگاه تست قندخون دیابان با دقت بالینی تاییدشده، نمونه‌گیری کم‌درد و اتصال هوشمند به اپلیکیشن سیناکر. نوار تست همیشه در داروخانه‌ها و دیجی‌کالا موجود است.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionProvider>{children}</MotionProvider>
        {process.env.NODE_ENV === "development" && (
          <Agentation endpoint="http://localhost:4747" />
        )}
      </body>
    </html>
  );
}
