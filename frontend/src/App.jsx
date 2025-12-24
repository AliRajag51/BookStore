import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/index.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import ProductDetails from "./pages/Product/ProductDetails.jsx";
import CheckoutPage from "./pages/Checkout/CheckoutPage.jsx";
import BooksPage from "./pages/Books/BooksPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
