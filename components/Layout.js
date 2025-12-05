import MyNavbar from "./Navbar";
import Footer from "./Footer";
import Seo from "./Seo";

export default function Layout({ children }) {
  return (
    <>
      {/* SEO global par défaut pour tout le site */}
      <Seo
        title="Antoine Drive Services - Transport sûr et confortable"
        description="Transfert aéroports, gares, courses locales et évènements sur-mesure avec chauffeur professionnel et ponctuel."
        url="https://www.antoine-drive-services.fr/"
        image="https://www.antoine-drive-services.fr/images/Home.webp"
        type="TaxiService"
      />

      {/* Header */}
      <header>
        <MyNavbar />
      </header>
      
      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
      
    </>
  );
}