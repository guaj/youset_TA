import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./Components/PackageSelection/PackageSelection";
import {CheckOut} from "./Components/CheckoutForm/CheckOut";
import OrderReview from "./Components/CheckoutForm/OrderProcessed";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/buy/:id' element={<CheckOut />} />
            <Route path="/order-processed" elemebt={<OrderReview />} />
        </Routes>
    );
}

export default App;
