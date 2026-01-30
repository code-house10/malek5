import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "نقل العفش | خدمات نقل الأثاث في القاهرة والجيزة",
  description: "شركة متخصصة في نقل العفش والأثاث في مناطق القاهرة والجيزة - المعادي، مدينة نصر، 6 أكتوبر، الشيخ زايد. خدمات تغليف العفش والزجاج، فك وتركيب الأثاث.",
  keywords: "نقل عفش, نقل اثاث, نقل موبيليا, شركة نقل عفش, المعادي, مدينة نصر, 6 اكتوبر, الشيخ زايد, تغليف عفش, فك وتركيب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="no-js">
      <head>
        {/* Template CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/custom-animation.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/rtl.css" />
      </head>
      <body className={`${cairo.variable} it-magic-cursor`} style={{ fontFamily: 'var(--font-cairo), Cairo, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
