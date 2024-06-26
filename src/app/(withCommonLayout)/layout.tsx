import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />
      <section className="min-h-screen">{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;
