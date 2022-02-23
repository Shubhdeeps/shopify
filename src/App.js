import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductListing } from './containers/ProductListing';
import { ProductDetails } from './containers/ProductDetails';
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/shopify' exact element={<ProductListing />} />
          <Route path='/shopify/product/:productId' exact element={<ProductDetails />} />
          <Route>404 Not Found! </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
