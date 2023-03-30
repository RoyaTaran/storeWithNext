import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl">
      <Component {...pageProps} />
    </div>
  );
}
