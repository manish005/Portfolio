import './globals.css';
import ScrollManager from './components/ScrollManager';

export const metadata = {
  title: 'Manish Gadekar | Senior .NET Full Stack Developer',
  description:
    'Full Stack Developer with 5+ years of experience building enterprise-grade web applications with C#, ASP.NET Core, Angular, React, and SQL Server.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
