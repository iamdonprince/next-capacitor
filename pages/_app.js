import "../styles/globals.css";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;

if(typeof window !== 'undefined'){
  defineCustomElements(window);
}