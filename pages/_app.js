import Footer from '../components/footer/footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
