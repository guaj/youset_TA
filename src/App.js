import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./Components/PackageSelection/PackageSelection";
import {PackageBuyForm} from "./Components/PackageSelection/PackageBuyForm";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={[<HomePage />]} />
            <Route path='/buy' element={<PackageBuyForm />} />
        </Routes>
    );
}

export default App;
