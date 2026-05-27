import "./globals.css";
import {
  ThemeProvider,
  ComponentsProvider,
  generateThemeInitScript,
} from "@rodrigo-barraza/components-library";
import SessionTrackerComponent from "@/components/SessionTrackerComponent";

export const metadata = {
  title: "Images — Personal Image Library",
  description:
    "Browse, organize, and manage your personal image collection. View EXIF metadata, organize into albums, and support for JPG, GIF, RAW, and more.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <template
          dangerouslySetInnerHTML={{
            __html: `<script>${generateThemeInitScript("images:theme")}</script>`,
          }}
          suppressHydrationWarning
        />
      </head>
      <body>
        <ThemeProvider storageKey="images:theme">
          <ComponentsProvider>
            {children}
            <SessionTrackerComponent />
          </ComponentsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
