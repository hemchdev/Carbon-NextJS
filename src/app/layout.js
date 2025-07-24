import "./globals.scss";
import { Providers }  from "./providers";

export const metadata = {
  title: "Carbon + Next14",
  description: "IBM Carbon with Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
