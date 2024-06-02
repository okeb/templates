import Footer from '@/components/share/footer';
import Navbar from '@/components/share/navbar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="fr">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}