import { useEffect } from "react";
import { useRouter } from "next/router";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "@/components/Layout";
import "leaflet/dist/leaflet.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  
    const handleRouteChange = () => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto'});
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
