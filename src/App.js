import logo from './logo.svg';
import './App.css';
import HomePage from './screen/HomePage';
// import ProductPage from './screen/ProductPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import BlogPage from './screen/BlogPage';
// import SingleBlogPage from './screen/SingleBlogPage';
// import ContactUsPage from './screen/ContactUsPage';
// import AboutUsPage from './screen/AboutUsPage';
// import SingleProductPage from './screen/SingleProductPage';
// import EventPage from './screen/EventPage';
// import LoginPage from './screen/LoginPage';
// import RegisterPage from './screen/RegisterPage';
// import CartPage from './screen/CartPage';
// import PaymentPage from './screen/PaymentPage';
// import SalaryPage from './screen/SalaryPage';
// import DeliveryPage from './screen/DeliveryPage';
// import DeliverySummary from './screen/DeliverySummary';
// import DeliveryEdit from './screen/DeliveryEdit';
// import ProfilePage from './screen/ProfilePage';
// import Orders from './components/Profile/Orders';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
// import StripePaymentPage from './screen/StripePaymentPage';
// import SingleEventMain from './components/SingleEvent/SingleEventMain';
// import SingleEventPage from './screen/SingleEventPage';
import { StateContext } from './context/StateContext';
import { StateContext2 } from './context/StateContext2';
// import { Toaster } from 'react-hot-toast';
// import AfterPay from './components/AfterPay/AfterPay';


function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <StateContext2 >
    <StateContext>
      <Toaster />
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            {/* <Route path='/product' element={<ProductPage/>}/> */}
            {/* <Route path='/blog' element={<BlogPage/>}/> */}
            {/* <Route path='/singleBlog/:id' element={<SingleBlogPage/>}/> */}
            {/* <Route path='/event' element={<EventPage/>}/> */}
            {/* <Route path='/contactUs' element={<ContactUsPage/>}/> */}
            {/* <Route path='/aboutUs' element={<AboutUsPage/>}/> */}
            {/* <Route path='/singleProduct/:id' element={<SingleProductPage/>}/> */}
            {/* <Route path='/login' element={<LoginPage/>}/> */}
            {/* <Route path='/register' element={<RegisterPage/>}/> */}
            {/* <Route path='/cart' element={<CartPage/>}/> */}
            {/* <Route path='/payment' element={<PaymentPage/>}/> */}
            {/* <Route path='/salary' element={<SalaryPage/>}/> */}
            {/* <Route path='/delivery' element={<DeliveryPage/>}/> */}
            {/* <Route path='/deliveryEdit' element={<DeliveryEdit/>}/> */}
            {/* <Route path='/deliverySummary' element={<DeliverySummary/>}/> */}
            {/* <Route path='/profile' element={<ProfilePage/>} />  */}
            {/* <Route path="/orders" element={<Orders />}/> */}
            {/* <Route path="/stripe" element={<StripePaymentPage />}/> */}
            {/* <Route path="/singleEvent/:id" element={<SingleEventPage />}/> */}
            {/* <Route path="/afterPay" element={<AfterPay />}/> */}
        </Routes>
      </div>
    </Router>
  </StateContext>
  </StateContext2>
  );
}

export default App;
