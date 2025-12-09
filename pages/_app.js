import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "@/components/Layout";
import "leaflet/dist/leaflet.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
