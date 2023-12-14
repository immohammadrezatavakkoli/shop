import '../../styles/globals.css';
import '../../styles/menubar.css';
import '../../styles/aboutmessage.css';
import '../../styles/sliderrange.css';
import '../../styles/selectmodelproduct.css';
import Layout from '../components/layout/Layout';

const MyApp = ({ Component , pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
