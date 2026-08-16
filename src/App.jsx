import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { Calculator } from './pages/Calculator';
import { Quote } from './pages/Quote';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';

// 404 Page
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-6xl font-bold text-industrial-900 mb-4">404</h1>
    <h2 className="text-2xl font-bold text-industrial-700 mb-6">Looks like this page has moved.</h2>
    <div className="flex gap-4">
      <a href="/" className="bg-industrial-900 text-white px-6 py-2 rounded font-semibold hover:bg-industrial-800 transition-colors">Back to Home</a>
      <a href="/products" className="bg-accent-500 text-white px-6 py-2 rounded font-semibold hover:bg-accent-600 transition-colors">Explore Products</a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
