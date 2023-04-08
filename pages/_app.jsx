import '../styles/globals.css';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const siteName = 'Drink Taster';

  const { title, description, cover = {}, date } = pageProps;

  useEffect(() => {
    document.body.style.backgroundImage = `url(${cover.src})`;
  }, [cover]);

  return (
    <>
      <Seo
        title={title}
        description={description}
        cover={cover}
        date={date}
        siteName={siteName}
      />
      <Header siteName={siteName} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
