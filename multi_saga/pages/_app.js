import '../styles/globals.css';
import Store from '../Redux/store';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={Store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
