import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/contact/ContactPage";
import CustomerPage from "./pages/customer/CustomerPage";
import CustomerDetailsPage from "./pages/customer/CustomerDetailsPage";
import InvoicePage from "./pages/invoice/InvoicePage";
import InvoiceDetailsPage from "./pages/invoice/InvoiceDetailsPage";
import OrderPage from "./pages/order/OrderPage";
import OrderDetailsPage from "./pages/order/OrderDetailsPage";
import ShipmentPage from "./pages/shipment/ShipmentPage";
import ShipmentDetailsPage from "./pages/shipment/ShipmentDetailsPage";
import QuotesPage from "./pages/quotes/QuotesPage";
import QuotesDetailsPage from "./pages/quotes/QuotesDetailsPage";

const Navigation = () => {

  return (
    <Router>


      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/customer" Component={CustomerPage} />
        <Route path="/customer-details" Component={CustomerDetailsPage} />
        <Route path="/invoice" Component={InvoicePage} />
        <Route path="/invoice-details" Component={InvoiceDetailsPage} />
        <Route path="/order" Component={OrderPage} />
        <Route path="/order-details" Component={OrderDetailsPage} />
        <Route path="/shipment" Component={ShipmentPage} />
        <Route path="/shipment-details" Component={ShipmentDetailsPage} />
        <Route path="/quotes" Component={QuotesPage} />
        <Route path="/quote-details" Component={QuotesDetailsPage} />
      </Routes>
    </Router>
  );
};

export default Navigation;
