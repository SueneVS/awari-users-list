import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Details from '../../Pages/Details/Details';
import Error from '../../Pages/Error/Error';

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;