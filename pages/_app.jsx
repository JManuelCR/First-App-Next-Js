import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>Hola soy el nav</nav>
      <Component {...pageProps} />
    </>
  );
}
