import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./Components/PackageSelection/PackageSelection";
import {CheckOut} from "./Components/CheckoutForm/CheckOut";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/buy/:id' element={<CheckOut />} />
        </Routes>
    );
}

export default App;
