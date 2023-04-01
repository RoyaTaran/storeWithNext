import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl" className="bg-main">
      <Component {...pageProps} />
    </div>
  );
}
