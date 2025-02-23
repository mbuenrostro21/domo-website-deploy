import "../styles/App.css";      
import "../styles/variables.css"; 
import "../styles/index.css";  
import "../styles/components.css"
import PropTypes from 'prop-types';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
  };

export default MyApp;